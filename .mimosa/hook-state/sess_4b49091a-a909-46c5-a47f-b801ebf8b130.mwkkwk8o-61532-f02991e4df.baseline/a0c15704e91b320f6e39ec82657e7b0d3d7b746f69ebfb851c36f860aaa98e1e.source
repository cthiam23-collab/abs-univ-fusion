import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  FileText,
  HandHeart,
  Handshake,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UserCheck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Bourses et réductions | ABS",
  description:
    "Découvrez les dispositifs de bourses et de réductions des frais de scolarité d'ABS — African Business School : critères d'attribution, conditions de maintien et procédure de candidature.",
  path: "/financial-aid",
})

const CONTACT_EMAIL = "abs.mail1290@gmail.com"

const dispositifs = [
  {
    icon: Trophy,
    title: "Bourse d'excellence",
    description:
      "Destinée aux candidats présentant des résultats académiques remarquables.",
  },
  {
    icon: HandHeart,
    title: "Demi-bourse",
    description:
      "Réduction de 50 % des frais de scolarité, accordée selon les critères définis par la Direction Générale.",
  },
  {
    icon: HeartHandshake,
    title: "Bourse sociale",
    description:
      "Destinée aux candidats justifiant d'une situation sociale ou financière particulière.",
  },
  {
    icon: Sparkles,
    title: "Réduction exceptionnelle",
    description:
      "Accordée dans le cadre de campagnes de recrutement ou de dispositifs institutionnels spécifiques.",
  },
  {
    icon: Star,
    title: "Bourse de mérite",
    description:
      "Destinée à récompenser les performances académiques, l'engagement et le comportement exemplaire des étudiants.",
  },
]

const criteresAttribution = [
  "Les résultats scolaires et universitaires du candidat ;",
  "Le mérite et le potentiel académique ;",
  "La motivation et le projet professionnel ;",
  "La situation sociale ou financière, lorsque cela est applicable ;",
  "La participation aux concours de bourses organisés par l'ABS ;",
  "Le respect des engagements académiques, administratifs et disciplinaires.",
]

const conditionsMaintien = [
  "Respecter le règlement intérieur de l'ABS ;",
  "Assister régulièrement aux cours et activités pédagogiques ;",
  "Respecter les horaires et les obligations académiques ;",
  "Obtenir des résultats satisfaisants ;",
  "Participer aux activités institutionnelles obligatoires ;",
  "Respecter les engagements contenus dans leur convention ou lettre d'attribution.",
]

const procedureCandidature = [
  "Soumettre un dossier de candidature ;",
  "Fournir les pièces justificatives demandées ;",
  "Participer, le cas échéant, au concours de sélection ;",
  "Se soumettre à l'évaluation du dossier ;",
  "Attendre la notification officielle de la décision de la Direction Générale.",
]

const validiteCampagne = [
  "Le nombre de bourses disponibles, le cas échéant ;",
  "Les taux de réduction accordés ;",
  "Les filières et niveaux concernés ;",
  "Les dates d'ouverture et de clôture des candidatures ;",
  "Les pièces justificatives exigées ;",
  "Les conditions de maintien et de renouvellement ;",
  "Les possibilités ou interdictions de cumul avec d'autres réductions.",
]

const dispositionsImportantes = [
  "Une demande de bourse ne garantit pas son obtention.",
  "Aucune bourse ou réduction n'est considérée comme acquise avant notification officielle de la Direction Générale.",
  "Les bourses et réductions ne sont pas automatiquement cumulables.",
  "Les avantages accordés sont personnels et soumis aux conditions précisées dans la décision d'attribution.",
  "Les frais annexes (ouverture de dossier, uniforme, voyage d'études et soutenance) ne sont pas automatiquement couverts par les bourses, sauf décision expresse de la Direction Générale.",
]

export default function FinancialAidPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-cyan-400 text-cyan-300">
              Année académique 2026–2027
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Bourses et réductions</h1>
            <p className="text-lg text-slate-200">
              Dans le cadre de sa politique de promotion de l&apos;excellence académique, de l&apos;égalité des chances
              et de l&apos;accessibilité à l&apos;enseignement supérieur, l&apos;ABS — African Business School
              met en place différents dispositifs de bourses et de réductions sur les frais de scolarité.
            </p>
            <p className="mt-4 text-slate-300">
              Ces dispositifs visent à encourager le mérite, soutenir les étudiants motivés et accompagner les familles
              dans le financement des études supérieures.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Dispositifs */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">
              Les dispositifs de soutien financier
            </h2>
            <p className="text-lg text-slate-600">
              ABS peut proposer plusieurs formes d&apos;accompagnement :
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dispositifs.map((item) => (
              <Card key={item.title} className="h-full border-t-4 border-t-blue-700 shadow-md">
                <CardHeader>
                  <item.icon className="mb-2 h-9 w-9 text-blue-700" />
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            ABS peut accorder des bourses d&apos;études, des demi-bourses ou d&apos;autres réductions selon les critères
            de sélection et les décisions de la Direction Générale. L&apos;attribution d&apos;une bourse est soumise à
            des conditions académiques, disciplinaires et administratives précisées dans un document d&apos;engagement.
          </p>
        </div>
      </section>

      {/* 2-5. Critères, maintien, procédure, validité */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Landmark className="h-6 w-6" /> Critères d&apos;attribution
                </CardTitle>
                <CardDescription>
                  L&apos;attribution d&apos;une bourse ou d&apos;une réduction peut tenir compte des éléments suivants :
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {criteresAttribution.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <UserCheck className="h-6 w-6" /> Conditions de maintien de la bourse
                </CardTitle>
                <CardDescription>
                  Les bénéficiaires d&apos;une bourse ou d&apos;une demi-bourse s&apos;engagent à :
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {conditionsMaintien.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  Le non-respect de ces engagements peut entraîner une révision, une suspension ou un retrait de
                  l&apos;avantage accordé, selon les dispositions applicables.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <FileText className="h-6 w-6" /> Procédure de candidature
                </CardTitle>
                <CardDescription>Les candidats souhaitant bénéficier d&apos;une bourse doivent :</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {procedureCandidature.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <CalendarCheck className="h-6 w-6" /> Validité et conditions particulières
                </CardTitle>
                <CardDescription>
                  Chaque campagne de bourses fait l&apos;objet d&apos;une communication précisant :
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {validiteCampagne.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Dispositions importantes */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-blue-900">
              <ShieldCheck className="h-8 w-8 text-blue-700" /> Dispositions importantes
            </h2>
            <ul className="mb-10 space-y-3">
              {dispositionsImportantes.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-700"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Notre engagement */}
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-8 text-center">
              <Handshake className="mx-auto mb-4 h-10 w-10 text-blue-700" />
              <h3 className="mb-4 text-2xl font-bold text-blue-900">Notre engagement</h3>
              <p className="mb-3 text-slate-700">
                À ABS, nous croyons que le potentiel, le mérite et la détermination doivent pouvoir ouvrir les portes
                de l&apos;enseignement supérieur.
              </p>
              <p className="text-slate-700">
                Une bourse est une opportunité, mais aussi un engagement envers soi-même, envers l&apos;institution et
                envers son avenir.
              </p>
              <p className="mt-6 text-lg font-semibold text-blue-900">
                L&apos;excellence se mérite, les opportunités se construisent et l&apos;avenir se prépare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Votre avenir commence ici</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Vous souhaitez candidater à une bourse ou en savoir plus sur les dispositifs en cours ? Contactez notre
            administration pour obtenir les informations officielles et les conseils nécessaires à votre dossier.
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
              <Link href="/admissions">Découvrir les admissions</Link>
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
