import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BookMarked,
  Building2,
  Calculator,
  FileText,
  GraduationCap,
  Landmark,
  Megaphone,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  UserCog,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Direction et gouvernance | ABS",
  description:
    "La gouvernance de African Business School SARL : Gérante statutaire, Recteur, Directeur des Études, Registraire et services, dans le cadre du Plan stratégique ABS 2035.",
  path: "/about/governance",
})

// Missions stratégiques de la Gérante statutaire (source : fiche de fonction ABS/GOUV/FP-001, sélection).
const ceoMissions = [
  {
    icon: Target,
    title: "Leadership et stratégie institutionnelle",
    points: [
      "Définir la vision et les orientations stratégiques de ABS",
      "Élaborer et piloter le Plan stratégique ABS 2035",
      "Positionner ABS comme une institution panafricaine de référence",
      "Assurer la cohérence entre les ambitions stratégiques et les ressources disponibles",
    ],
  },
  {
    icon: Scale,
    title: "Représentation légale et gouvernance",
    points: [
      "Assurer la direction exécutive de la société et la représenter légalement auprès des tiers",
      "Signer les contrats et conventions relevant de ses pouvoirs, dans le cadre de l'AUSCGIE et des statuts",
      "Veiller à la régularité des formalités juridiques, administratives et institutionnelles",
    ],
  },
  {
    icon: GraduationCap,
    title: "Développement académique et qualité",
    points: [
      "Définir les orientations générales de développement académique, en coordination avec le Rectorat",
      "Superviser l'évolution de l'offre de formation et soutenir l'amélioration continue de la qualité pédagogique",
      "Encourager les partenariats académiques et scientifiques",
    ],
  },
  {
    icon: Calculator,
    title: "Pilotage financier et économique",
    points: [
      "Superviser l'élaboration du budget annuel et suivre la situation de trésorerie",
      "Examiner les états financiers et les rapports comptables",
      "Veiller à la maîtrise des charges et à la séparation des fonctions d'autorisation, de paiement, d'enregistrement et de contrôle",
    ],
  },
  {
    icon: Building2,
    title: "Partenariats, entrepreneuriat et innovation",
    points: [
      "Développer les partenariats stratégiques et les relations avec les entreprises",
      "Soutenir le Career & Corporate Relations Center et développer ABS Startup Lab",
      "Développer les relations avec les réseaux panafricains et internationaux",
    ],
  },
  {
    icon: Sparkles,
    title: "Transformation numérique et développement durable",
    points: [
      "Superviser la transformation numérique et la digitalisation des processus administratifs",
      "Promouvoir l'utilisation responsable de l'intelligence artificielle",
      "Développer les projets liés à l'université verte et soutenir les initiatives contribuant aux Objectifs de développement durable",
    ],
  },
]

// Chaîne de gouvernance (rattachements issus des fiches de poste).
const governanceChain = [
  {
    icon: Landmark,
    title: "Directrice Générale",
    subtitle: "Gérante statutaire — Managing Director & CEO",
    description:
      "Première autorité exécutive de la société. Elle assure la direction générale, la représentation légale, le pilotage stratégique et la gestion opérationnelle, et supervise l'ensemble des directions, départements et services.",
    rattachement: "Somme de la chaîne : nommée selon les statuts et les décisions des associés",
  },
  {
    icon: GraduationCap,
    title: "Recteur",
    subtitle: "Première autorité académique",
    description:
      "Il garantit la qualité, la pertinence et la performance académique de l'établissement, définit les grandes orientations académiques en cohérence avec le Plan stratégique ABS 2035 et supervise le Directeur des Études ainsi que les responsables de filières.",
    rattachement: "Rattachement hiérarchique : Directrice Générale",
  },
  {
    icon: BookMarked,
    title: "Directeur des Études",
    subtitle: "Organisation pédagogique",
    description:
      "Responsable opérationnel de l'organisation, de la coordination et du suivi des activités pédagogiques. Il assure la mise en œuvre des orientations académiques définies par le Recteur et le lien opérationnel avec les responsables de filières, les enseignants, la scolarité et les étudiants.",
    rattachement: "Rattachement hiérarchique : Recteur · Rattachement institutionnel : Direction Générale",
  },
  {
    icon: UserCog,
    title: "Registraire (Registrar)",
    subtitle: "Administration académique et scolarité",
    description:
      "Responsable de l'administration académique et de la gestion centralisée de la scolarité. Garant de la traçabilité administrative du parcours de chaque étudiant, de la candidature et de l'admission jusqu'à l'obtention du diplôme.",
    rattachement: "Rattachement hiérarchique : Direction Générale · Rattachement fonctionnel : Rectorat",
  },
  {
    icon: Megaphone,
    title: "Responsable Marketing et Communication",
    subtitle: "Image, visibilité et recrutement",
    description:
      "Conçoit et met en œuvre la stratégie marketing et de communication de l'établissement, développe sa visibilité et pilote les campagnes de recrutement des étudiants.",
    rattachement: "Rattachement hiérarchique : Direction Générale",
  },
  {
    icon: Calculator,
    title: "Comptabilité, caisse et services administratifs",
    subtitle: "Gestion administrative et financière",
    description:
      "Le Comptable assure une comptabilité fiable et régulière selon le référentiel applicable au Mali (SYSCOHADA révisé) ; le Caissier garantit une gestion sécurisée et traçable des encaissements et décaissements autorisés.",
    rattachement: "Rattachement hiérarchique : Direction Générale",
  },
]

// Services supervisés par la Direction Générale (fiche de fonction de la Gérante statutaire, §7).
const supervisedFunctions = [
  { icon: GraduationCap, name: "Rectorat", domain: "Direction académique et scientifique" },
  { icon: BookMarked, name: "Direction des Études", domain: "Organisation pédagogique" },
  { icon: UserCog, name: "Registraire", domain: "Administration académique" },
  { icon: Calculator, name: "Comptabilité & Finance", domain: "Gestion comptable et financière" },
  { icon: Building2, name: "Caisse", domain: "Encaissements et décaissements autorisés" },
  { icon: Megaphone, name: "Marketing & Communication", domain: "Image, visibilité et recrutement" },
  { icon: Building2, name: "Career & Corporate Relations Center", domain: "Relations entreprises et insertion" },
  { icon: Sparkles, name: "ABS Startup Lab", domain: "Innovation et entrepreneuriat" },
]

export default function GovernancePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image3.jpg"
          alt="La direction de ABS en séance de travail avec des officiels"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">À propos · Gouvernance</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Direction et gouvernance
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            La Direction générale assure l&apos;orientation institutionnelle et le développement de ABS. Les
            responsabilités académiques, administratives et pédagogiques sont exercées conformément à
            l&apos;organisation interne et aux procédures en vigueur.
          </p>
        </div>
      </section>

      {/* Cadre juridique */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Cadre juridique</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Une société SARL régie par le droit OHADA
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              ABS — African Business School SARL est une Société à Responsabilité Limitée (SARL), dont le
              siège social est à Bamako, au Mali. La Gérante statutaire exerce ses fonctions conformément aux statuts
              de la société, à l&apos;Acte uniforme OHADA relatif au droit des sociétés commerciales et du groupement
              d&apos;intérêt économique (AUSCGIE), aux dispositions applicables au Mali et aux décisions régulièrement
              adoptées par les associés.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Conformément aux articles 323 et suivants de l&apos;AUSCGIE, la SARL est administrée par un ou plusieurs
              gérants, personnes physiques, nommés dans les statuts ou par un acte postérieur. La Gérante statutaire
              assure la représentation légale de la société et exerce les pouvoirs de gestion et de représentation
              prévus par les textes applicables ; les pouvoirs expressément réservés aux associés par la loi ou les
              statuts demeurent de leur compétence.
            </p>
          </div>
          <Card className="border-slate-200">
            <CardHeader>
              <FileText className="h-9 w-9 text-blue-700" aria-hidden="true" />
              <CardTitle className="text-xl text-slate-900">Identification de la fonction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {[
                ["Dénomination juridique", "Gérante statutaire"],
                ["Titre exécutif et institutionnel", "Managing Director & Chief Executive Officer"],
                ["Institution", "ABS — African Business School SARL"],
                ["Forme juridique", "Société à Responsabilité Limitée (SARL)"],
                ["Position hiérarchique", "Première autorité exécutive de la société"],
                ["Siège social", "Bamako, Mali"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-0.5 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
                  <span className="font-medium text-slate-800">{value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Finalité et ambition : la Gérante statutaire */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Finalité de la fonction</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              La Gérante statutaire, garante de la cohérence institutionnelle
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              La Gérante statutaire assure la direction générale, la représentation légale, le pilotage stratégique et
              la gestion opérationnelle de ABS — African Business School SARL. Elle garantit la cohérence
              entre la vision de l&apos;établissement, ses obligations réglementaires, ses ressources, ses ambitions de
              développement et ses résultats. Elle pilote cette ambition dans le cadre du Plan stratégique ABS 2035,
              qui vise à positionner ABS comme une institution reconnue pour l&apos;excellence académique et
              professionnelle, la qualité et la pertinence de ses formations, l&apos;innovation pédagogique et
              technologique et la professionnalisation de ses diplômés.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ceoMissions.map(({ icon: Icon, title, points }) => (
              <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <span className="mb-2 inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="size-6 text-cyan-700" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-blue-700" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chaîne de gouvernance */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Organisation</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">La chaîne de gouvernance</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Les rattachements hiérarchiques et fonctionnels sont précisés dans l&apos;organigramme validé de ABS. Les
            fonctions présentées ci-dessous le sont sur la base des fiches de poste et de fonction officielles ;
            seules les fonctions sont affichées, et les noms, biographies et photographies des responsables sont
            publiés avec leur accord de diffusion.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <ol className="relative space-y-8 border-l-2 border-blue-200 pl-8">
            {governanceChain.map(({ icon: Icon, title, subtitle, description, rattachement }) => (
              <li key={title} className="relative">
                <span
                  className="absolute -left-[2.85rem] flex size-9 items-center justify-center rounded-full bg-blue-700 text-white ring-4 ring-white"
                  aria-hidden="true"
                >
                  <Icon className="size-4" />
                </span>
                <Card className="border-slate-200 transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900">{title}</h3>
                    <p className="text-sm font-medium text-cyan-700">{subtitle}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">{rattachement}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services supervisés */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Fonctions et services supervisés</h2>
            <p className="mt-3 leading-7 text-slate-600">
              La Gérante statutaire assure la supervision générale des fonctions et services suivants.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supervisedFunctions.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.name} className="border-slate-200 text-center transition-shadow hover:shadow-lg">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-blue-700">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-bold text-blue-900">{service.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{service.domain}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center text-sm leading-6 text-slate-600">
            Mention institutionnelle : les informations relatives aux autorisations, habilitations, reconnaissances ou
            accréditations sont communiquées uniquement sur la base de documents officiels en vigueur. Pour toute
            précision, veuillez contacter l&apos;administration de ABS.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">En savoir plus</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Découvrez l&apos;identité, la mission et les valeurs de l&apos;institution, ainsi que l&apos;équipe et la
            gouvernance académique.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/about/faculty-staff">
                Équipe et gouvernance académique <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about">Qui sommes-nous ?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
