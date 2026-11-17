import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Admission en Licence | ABS",
  description:
    "Conditions d'accès et pièces à fournir pour candidater en Licence (L1, L2, L3) à ABS — African Business School.",
  path: "/admissions/undergraduate",
})

const CONTACT_EMAIL = "abs.mail1290@gmail.com"

const conditionsAcces = [
  "Pour entrer en L1 : être titulaire du Baccalauréat ou d'un diplôme reconnu équivalent.",
  "Pour entrer en L2 ou L3 : l'admission est soumise à l'examen du parcours académique et à la validation des prérequis.",
  "Vérifier auprès du Service de la Scolarité et des Admissions que le parcours souhaité est effectivement ouvert pour la rentrée académique concernée.",
]

const piecesL1 = [
  "Une copie de la pièce d'identité ou du passeport en cours de validité ;",
  "Une copie du diplôme du Baccalauréat ou d'un diplôme reconnu équivalent ;",
  "Une attestation de réussite au Baccalauréat, le cas échéant ;",
  "Les relevés de notes du Baccalauréat ;",
  "Deux photos d'identité récentes ;",
  "Un extrait d'acte de naissance ;",
  "Le formulaire officiel de candidature dûment rempli ;",
  "Toute pièce complémentaire demandée par l'administration.",
]

const piecesL2L3 = [
  "Une copie de la pièce d'identité ou du passeport ;",
  "Une copie du Baccalauréat ;",
  "Les diplômes ou attestations universitaires obtenus ;",
  "Les relevés de notes des années universitaires précédentes ;",
  "Les attestations de validation des semestres, le cas échéant ;",
  "Deux photos d'identité récentes ;",
  "Un curriculum vitae ;",
  "Le formulaire officiel de candidature ;",
  "Toute pièce complémentaire nécessaire à l'étude du dossier et à la validation des acquis académiques.",
]

const etapesResume = [
  "Découvrir les formations ouvertes",
  "Se renseigner sur les conditions d'admission",
  "Constituer et déposer son dossier de candidature",
  "Étudier et suivre sa candidature",
  "Recevoir la décision d'admission et finaliser son inscription",
  "Préparer sa rentrée et intégrer la communauté ABS",
]

export default function UndergraduateAdmissionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-cyan-400 text-cyan-300">
              Cycle de Licence — L1, L2, L3
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Admission en Licence</h1>
            <p className="text-lg text-slate-200">
              Intégrez les cycles de Licence de l&apos;ABS — African Business School. Découvrez les conditions
              d&apos;accès, les pièces à fournir et les frais officiels pour l&apos;année académique 2026–2027.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions + frais */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-t-4 border-t-blue-700 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <GraduationCap className="h-6 w-6" /> Conditions d&apos;accès
                </CardTitle>
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

            <Card className="border-t-4 border-t-cyan-400 shadow-md">
              <CardHeader>
                <CardTitle className="text-blue-900">Frais de formation 2026–2027</CardTitle>
                <CardDescription>Tarifs annuels officiels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-blue-900">1 025 000 FCFA</span>
                  <span className="text-slate-500">/ an (L1, L2, L3)</span>
                </div>
                <p className="text-sm text-slate-600">
                  Frais d&apos;ouverture de dossier : 15 000 FCFA. Les frais annexes (uniforme obligatoire, voyage
                  d&apos;études et d&apos;immersion, frais de soutenance) ne sont pas compris dans la scolarité et
                  sont communiqués séparément par l&apos;administration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pièces à fournir */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900">Pièces à fournir</h2>
            <p className="text-lg text-slate-600">
              Les pièces ci-dessous constituent une liste indicative, à confirmer par l&apos;administration.
            </p>
          </div>

          <Tabs defaultValue="l1" className="mx-auto max-w-4xl">
            <TabsList className="mb-6 grid w-full grid-cols-2">
              <TabsTrigger value="l1">Licence L1</TabsTrigger>
              <TabsTrigger value="l2l3">Licence L2 / L3</TabsTrigger>
            </TabsList>

            <TabsContent value="l1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Candidature en Licence (L1)</CardTitle>
                  <CardDescription>Le candidat doit fournir :</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {piecesL1.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="l2l3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Candidature en Licence (L2 ou L3)</CardTitle>
                  <CardDescription>Le candidat doit fournir :</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {piecesL2L3.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex items-start gap-4 rounded-xl border border-amber-300 bg-amber-50 p-6">
              <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
              <p className="text-amber-900">
                Important : le dépôt d&apos;un dossier ne vaut pas admission automatique. Toute candidature est soumise
                à la vérification des pièces, à l&apos;étude du dossier académique et à la décision de la Direction des
                Études ou de l&apos;autorité compétente de l&apos;ABS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Étapes résumées */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-3 text-3xl font-bold text-blue-900">La procédure en bref</h2>
            <p className="mb-6 text-lg text-slate-600">
              La candidature se déroule en six étapes, du choix de la formation jusqu&apos;à l&apos;intégration de la
              communauté ABS :
            </p>
            <ol className="mb-6 grid gap-3 sm:grid-cols-2">
              {etapesResume.map((etape, index) => (
                <li key={etape} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{etape}</span>
                </li>
              ))}
            </ol>
            <Button asChild className="bg-blue-700 hover:bg-blue-800">
              <Link href="/admissions">
                Consulter la procédure détaillée <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Votre avenir commence ici</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Prenez contact avec notre administration pour obtenir les informations officielles et les conseils
            nécessaires à votre admission en Licence.
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-sm text-slate-200 sm:flex-row">
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-cyan-400" /> WhatsApp : {WHATSAPP_NUMBER}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> {CONTACT_EMAIL}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" /> Bamako – Hamdallaye ACI 2000
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <a href={WHATSAPP_URL}>Rejoignez la communauté ABS</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/apply">Déposer une candidature</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
