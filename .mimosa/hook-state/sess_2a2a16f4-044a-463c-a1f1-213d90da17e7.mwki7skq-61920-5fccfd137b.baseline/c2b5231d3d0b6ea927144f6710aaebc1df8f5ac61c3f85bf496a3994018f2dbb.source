import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import { rateLimit, tooManyRequests } from "@/lib/rate-limit"
import { sendMail, applicationConfirmationEmail } from "@/lib/mailer"

const CHECKLIST: Record<string, string[]> = {
  undergraduate: ["acte_naissance", "photos", "bac_attestation", "releves_bac", "bulletins_terminale", "motivation"],
  graduate: ["acte_naissance", "photos", "diplome_licence", "releves_licence", "cv", "motivation", "recommandation", "attestation_travail"],
  international: ["acte_naissance", "photos", "bac_attestation", "releves_bac", "diplome_licence", "cv", "motivation", "autre"],
}

function clean(v: unknown): string | null {
  if (typeof v !== "string") return null
  const t = v.trim()
  return t === "" ? null : t
}

export async function GET(request: NextRequest) {
  try {
    // Endpoint réservé au staff : exige le header x-admin-key (à définir dans .env.local).
    const adminKey = request.headers.get("x-admin-key")
    const expectedKey = process.env.ADMIN_API_KEY
    if (!expectedKey || adminKey !== expectedKey) {
      return NextResponse.json({ success: false, error: "Non autorisé" }, { status: 401 })
    }

    const type = new URL(request.url).searchParams.get("type")
    const rows =
      type && ["undergraduate", "graduate", "international"].includes(type)
        ? await sql(`SELECT * FROM applications WHERE application_type = $1 ORDER BY created_at DESC LIMIT 100`, [type])
        : await sql(`SELECT * FROM applications ORDER BY created_at DESC LIMIT 100`)
    return NextResponse.json({ success: true, data: rows })
  } catch (error) {
    console.error("[applications GET]", error)
    return NextResponse.json({ success: false, error: "Failed to fetch applications" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const limit = rateLimit(request, { key: "applications", limit: 5, windowMs: 60 * 60 * 1000 })
    if (!limit.allowed) return tooManyRequests(limit)

    const body = await request.json()
    const applicationType = clean(body.application_type)
    const firstName = clean(body.first_name)
    const lastName = clean(body.last_name)
    const email = clean(body.email)
    const programName = clean(body.program_name)

    if (!applicationType || !["undergraduate", "graduate", "international"].includes(applicationType)) {
      return NextResponse.json({ success: false, error: "Type de candidature invalide" }, { status: 400 })
    }
    if (!firstName || !lastName || !email || !programName) {
      return NextResponse.json(
        { success: false, error: "Champs requis manquants : prénom, nom, email, programme" },
        { status: 400 },
      )
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: "Adresse email invalide" }, { status: 400 })
    }

    const rows = await sql(
      `INSERT INTO applications
        (application_type, first_name, last_name, email, phone, date_of_birth, gender,
         country, city, address, program_code, program_name, start_term,
         last_diploma, last_institution, graduation_year, english_level, motivation,
         experience_years, currently_employed, has_recommendation_letter, has_cv,
         needs_visa, needs_housing, passport_number)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25)
       RETURNING id, reference, created_at`,
      [
        applicationType,
        firstName,
        lastName,
        email,
        clean(body.phone),
        clean(body.date_of_birth),
        clean(body.gender),
        clean(body.country),
        clean(body.city),
        clean(body.address),
        clean(body.program_code),
        programName,
        clean(body.start_term),
        clean(body.last_diploma),
        clean(body.last_institution),
        body.graduation_year ? Number(body.graduation_year) || null : null,
        clean(body.english_level),
        clean(body.motivation),
        body.experience_years ? Number(body.experience_years) || null : null,
        Boolean(body.currently_employed),
        Boolean(body.has_recommendation_letter),
        Boolean(body.has_cv),
        body.needs_visa == null ? null : Boolean(body.needs_visa),
        body.needs_housing == null ? null : Boolean(body.needs_housing),
        clean(body.passport_number),
      ],
    )

    const created = rows[0]

    // Pré-remplir la checklist de pièces du dossier
    const docs = CHECKLIST[applicationType] ?? []
    for (const docType of docs) {
      await sql(
        `INSERT INTO application_documents (application_id, document_type) VALUES ($1, $2) ON CONFLICT DO NOTHING`,
        [created.id, docType],
      )
    }

    // Email de confirmation (non bloquant — journalisé si RESEND_API_KEY absente)
    sendMail(
      applicationConfirmationEmail({
        to: email,
        name: `${firstName} ${lastName}`,
        reference: created.reference,
        programName,
      }),
    ).catch((mailError) => console.error("[applications POST] mail:", mailError))

    return NextResponse.json({
      success: true,
      data: { id: created.id, reference: created.reference },
    })
  } catch (error) {
    console.error("[applications POST]", error)
    return NextResponse.json({ success: false, error: "Échec de l'enregistrement de la candidature" }, { status: 500 })
  }
}
