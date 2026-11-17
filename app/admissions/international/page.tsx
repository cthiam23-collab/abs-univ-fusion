import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { ArrowRight, CheckCircle2, Globe, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Admissions internationales | ABS",
  description:
    "Informations pour les candidats internationaux d'ABS — African Business School : diplômes étrangers, équivalences et contact officiel.",
  path: "/admissions/international",
})

const CONTACT_EMAIL = "abs.mail1290@gmail.com"

const dispositionsInternationales = [
  "Les diplômes étrangers pourront nécessiter une traduction officielle.",
  "Une attestation d'équivalence ou de reconnaissance pourra être demandée.",
  "Les copies certifiées conformes pourront être exigées pour certains documents.",
  "Les admissions en L2, L3 et M2 sont soumises à l'examen du parcours académique et à la validation des prérequis.",
]

const protectionDonnees = [
  "Prenez contact avec l'administration avant toute transmission de documents personnels.",
  "Déposez vos dossiers uniquement par les canaux officiels communiqués par ABS.",
  "Évitez de transmettre des documents sensibles à des numéros ou adresses non vérifiés.",
]

export default function InternationalAdmissionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Globe className="mb-4 h-10 w-10 text-cyan-400" />
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Candidats internationaux</h1>
            <p className="text-lg text-slate-200">
              Vous êtes à l&apos;étranger ou titulaire de diplômes obtenus hors du Mali ? L&apos;équipe
              d&apos;ABS — African Business School vous accompagne dans la constitution de votre dossier de
              candidature, en Licence ou en Master.
            </p>
          </div>
        </div>
      </section>

      {/* Diplômes étrangers */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900">Diplômes étrangers et équivalences</h2>
            <p className="text-lg text-slate-600">
              Les éléments ci-dessous reprennent les dispositions administratives applicables aux diplômes étrangers.
              Elles constituent une liste indicative, à confirmer par l&apos;administration.
            </p>
          </div>

          <Card className="mx-auto max-w-3xl border-t-4 border-t-blue-700 shadow-md">
            <CardHeader>
              <CardTitle className="text-blue-900">Dispositions administratives</CardTitle>
              <CardDescription>Documents à prévoir selon votre situation</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {dispositionsInternationales.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            Les frais d&apos;ouverture de dossier sont fixés à 15 000 FCFA. Les frais de scolarité annuels pour
            l&apos;année académique 2026–2027 sont de 1 025 000 FCFA en Licence (L1, L2, L3) et de 1 500 000 FCFA en
            Master (M1, M2).
          </div>
        </div>
      </section>

      {/* Procédure */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900">Votre candidature</h2>
            <p className="mb-8 text-lg text-slate-600">
              La procédure de candidature est la même pour tous les candidats : elle se déroule en six étapes, de la
              découverte des formations ouvertes jusqu&apos;à l&apos;intégration de la communauté ABS. Consultez la
              procédure détaillée, la liste des pièces à fournir selon votre cycle (L1, L2/L3, M1, M2) et le tableau
              officiel des frais sur la page admissions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="bg-blue-700 hover:bg-blue-800">
                <Link href="/admissions">
                  Consulter la page admissions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                <Link href="/contact">Poser une question</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + protection des données */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 grid gap-4 text-left sm:grid-cols-3">
              <a
                href={WHATSAPP_URL}
                className="rounded-xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <MessageCircle className="mb-2 h-6 w-6 text-cyan-400" />
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-slate-200">{WHATSAPP_NUMBER}</p>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded-xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <Mail className="mb-2 h-6 w-6 text-cyan-400" />
                <p className="font-semibold">Email</p>
                <p className="text-sm text-slate-200">{CONTACT_EMAIL}</p>
              </a>
              <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                <MapPin className="mb-2 h-6 w-6 text-cyan-400" />
                <p className="font-semibold">Campus</p>
                <p className="text-sm text-slate-200">Bamako – Hamdallaye ACI 2000, Mali</p>
                <p className="text-sm text-slate-200">Cycles proposés : Licence et Master</p>
              </div>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <ShieldCheck className="h-5 w-5 text-cyan-400" /> Protection de vos données personnelles
              </h3>
              <ul className="space-y-2 text-sm text-slate-200">
                {protectionDonnees.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
