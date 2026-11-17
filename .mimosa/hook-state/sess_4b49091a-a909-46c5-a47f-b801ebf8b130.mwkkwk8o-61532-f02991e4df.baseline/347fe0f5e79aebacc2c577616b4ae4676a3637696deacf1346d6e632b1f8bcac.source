import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { AlertTriangle, ArrowRight, CheckCircle2, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = buildMetadata({
  title: "Conditions d'admission en Master | ABS",
  description:
    "Conditions d'accès, diplômes requis et dispositions administratives pour candidater en Master (M1, M2) à ABS — African Business School.",
  path: "/admissions/graduate/requirements",
})

const conditionsAcces = [
  "Pour entrer en M1 : être titulaire d'un diplôme de Licence ou d'un diplôme reconnu équivalent.",
  "Pour entrer en M2 : justifier d'un diplôme de Master 1 ou d'un diplôme équivalent ; une attestation de validation du M1 est demandée, le cas échéant.",
  "Les admissions en M2 sont soumises à l'examen du parcours académique et à la validation des prérequis.",
  "Vérifier auprès du Service de la Scolarité et des Admissions que le parcours de Master souhaité est effectivement ouvert aux admissions pour la rentrée académique concernée.",
]

const dispositions = [
  "Les copies certifiées conformes pourront être exigées pour certains documents.",
  "Les diplômes étrangers pourront nécessiter une traduction officielle et une attestation d'équivalence ou de reconnaissance.",
  "Une procédure de Validation des Acquis de l'Expérience (VAE), lorsqu'elle est applicable et autorisée, peut être étudiée selon les dispositions réglementaires en vigueur.",
]

export default function GraduateRequirementsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold text-blue-900">Conditions d&apos;admission en Master</h1>
        <p className="mb-10 text-lg text-slate-600">
          Retrouvez les diplômes requis et les dispositions administratives applicables aux candidatures en Master
          (M1 et M2) à ABS — African Business School.
        </p>

        <Card className="mb-8 border-t-4 border-t-blue-700 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <UserCheck className="h-6 w-6" /> Conditions d&apos;accès
            </CardTitle>
            <CardDescription>Selon le niveau sollicité</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {conditionsAcces.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Dispositions administratives particulières</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {dispositions.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="mb-10 flex items-start gap-4 rounded-xl border border-amber-300 bg-amber-50 p-6">
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
          <p className="text-amber-900">
            Important : le dépôt d&apos;un dossier ne vaut pas admission automatique. Toute candidature est soumise à la
            vérification des pièces, à l&apos;étude du dossier académique et à la décision de la Direction des Études
            ou de l&apos;autorité compétente de l&apos;ABS.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild className="bg-blue-700 hover:bg-blue-800">
            <Link href="/admissions/graduate">
              Pièces à fournir pour M1 et M2 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
            <Link href="/admissions">Procédure de candidature complète</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
