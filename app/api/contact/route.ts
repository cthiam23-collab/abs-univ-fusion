import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import { rateLimit, tooManyRequests } from "@/lib/rate-limit"
import { sendMail, contactNotificationEmail } from "@/lib/mailer"

const DEPARTMENTS = ["general", "admissions", "graduate_admissions", "international", "library", "financial", "careers"]

export async function POST(request: NextRequest) {
  try {
    const limit = rateLimit(request, { key: "contact", limit: 10, windowMs: 60 * 60 * 1000 })
    if (!limit.allowed) return tooManyRequests(limit)

    const body = await request.json()
    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const phone = typeof body.phone === "string" ? body.phone.trim() : ""
    const subject = typeof body.subject === "string" ? body.subject.trim() : ""
    const message = typeof body.message === "string" ? body.message.trim() : ""
    const department = DEPARTMENTS.includes(body.department) ? body.department : "general"

    // E-mail facultative (V3 §14.2.A) : un moyen de réponse (téléphone/WhatsApp ou e-mail) est requis.
    if (!name || !subject || !message || (!email && !phone)) {
      return NextResponse.json(
        { success: false, error: "Champs requis : nom, sujet, message et un moyen de réponse (téléphone ou e-mail)" },
        { status: 400 },
      )
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: "Adresse email invalide" }, { status: 400 })
    }

    const rows = await sql(
      `INSERT INTO contact_messages (name, email, phone, department, subject, message)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, created_at`,
      [
        name,
        email || null,
        phone || null,
        department,
        subject,
        message,
      ],
    )

    // Notification interne (non bloquante — journalisée si RESEND_API_KEY absente)
    sendMail(contactNotificationEmail({ subject, message })).catch((mailError) =>
      console.error("[contact POST] mail:", mailError),
    )

    return NextResponse.json({ success: true, data: { id: rows[0].id } })
  } catch (error) {
    console.error("[contact POST]", error)
    return NextResponse.json({ success: false, error: "Échec de l'envoi du message" }, { status: 500 })
  }
}
