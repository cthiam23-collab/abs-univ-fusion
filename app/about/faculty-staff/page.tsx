import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ORGANIZATION } from "@/lib/constants"
import {
  ArrowRight,
  BookMarked,
  Calculator,
  GraduationCap,
  Landmark,
  Megaphone,
  ShieldCheck,
  Sparkles,
  UserCog,
  Wallet,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Équipe et gouvernance académique | ABS — African Business School",
  description:
    "Les fonctions et responsabilités documentées de l'équipe de ABS : Directrice Générale, Recteur, Directeur des Études, Registraire, Marketing et Communication, comptabilité et services.",
  path: "/about/faculty-staff",
})

// Rôles documentés à partir des fiches de poste officielles de ABS (FICHE_text.txt).
// Conformément au principe éditorial V3 §4.6 : seules les fonctions sont présentées, sans invention de noms
// (la seule personne nommée est la Directrice Générale, Sokhna Maryama Thiam).
const governanceRoles = [
  {
    icon: Landmark,
    title: "Directrice Générale / Gérante statutaire",
    holder: "Sokhna Maryama Thiam",
    subtitle: "Managing Director & Chief Executive Officer (CEO)",
    rattachement: "Première autorité exécutive de la société",
    description:
      "La Directrice Générale assure la direction générale, la représentation légale, le pilotage stratégique et la gestion opérationnelle de ABS — African Business School SARL. Elle définit les orientations de développement, supervise l'ensemble des activités institutionnelles et pilote l'ambition de l'établissement dans le cadre du Plan stratégique ABS 2035.",
    points: [
      "Définir la vision et les orientations stratégiques ; élaborer et piloter le Plan stratégique ABS 2035",
      "Représenter légalement African Business School SARL auprès des tiers et des autorités compétentes",
      "Superviser les directions, départements et services de l'établissement",
      "Accompagner, en coordination avec le Rectorat, le développement académique et la qualité",
      "Superviser le pilotage financier et économique, ainsi que les ressources humaines",
      "Développer les partenariats stratégiques, l'entrepreneuriat et l'innovation (ABS Startup Lab, Career & Corporate Relations Center)",
    ],
  },
  {
    icon: GraduationCap,
    title: "Recteur",
    holder: null,
    subtitle: "Première autorité académique",
    rattachement: "Rattachement hiérarchique : Directrice Générale",
    description:
      "Le Recteur assure la direction, l'orientation, la coordination et la supervision de l'ensemble des activités académiques et scientifiques de l'établissement, en étroite collaboration avec la Directrice Générale.",
    points: [
      "Garantir la qualité, la pertinence et la performance académique de ABS",
      "Définir les grandes orientations académiques en cohérence avec le Plan stratégique ABS 2035",
      "Garantir la qualité et la cohérence de l'offre de formation",
      "Superviser le Directeur des Études et coordonner les responsables de filières",
      "Piloter le volet académique de la démarche qualité et impulse le développement scientifique",
      "Représenter le leadership académique de ABS dans ses relations universitaires",
    ],
  },
  {
    icon: BookMarked,
    title: "Directeur des Études",
    holder: null,
    subtitle: "Responsable opérationnel de l'organisation pédagogique",
    rattachement: "Rattachement hiérarchique : Recteur · Rattachement institutionnel : Direction Générale",
    description:
      "Le Directeur des Études assure la mise en œuvre effective des orientations académiques définies par le Recteur et veille au bon déroulement des enseignements, à la régularité des évaluations et au suivi des parcours étudiants.",
    points: [
      "Élaborer les propositions de calendrier pédagogique en concertation avec le Recteur",
      "Contrôler la transmission et la disponibilité des supports pédagogiques",
      "Coordonner les activités des responsables de filières et des enseignants",
      "Assurer le suivi des présences des étudiants et des enseignants",
      "Veille à la régularité des évaluations et au suivi de la correction des copies",
      "Veiller à l'application du règlement intérieur et du règlement des études",
    ],
  },
  {
    icon: UserCog,
    title: "Registraire (Registrar)",
    holder: null,
    subtitle: "Responsable de l'administration académique et de la scolarité",
    rattachement: "Rattachement hiérarchique : Direction Générale · Rattachement fonctionnel : Rectorat",
    description:
      "Le Registraire assure une administration académique rigoureuse, fiable et transparente : il constitue le garant de la traçabilité administrative du parcours de chaque étudiant, depuis sa candidature et son admission jusqu'à l'obtention de son diplôme.",
    points: [
      "Organiser et superviser les opérations d'admission et d'inscription",
      "Constituer et tenir à jour le dossier individuel de chaque étudiant",
      "Assurer le suivi administratif des parcours universitaires",
      "Garantir la conformité aux procédures institutionnelles et réglementaires",
      "Collaborer avec le Directeur des Études, les responsables de filières et les services",
    ],
  },
  {
    icon: Megaphone,
    title: "Responsable Marketing et Communication",
    holder: null,
    subtitle: "Responsable de service stratégique",
    rattachement: "Rattachement hiérarchique : Direction Générale",
    description:
      "Le Responsable Marketing et Communication développe la notoriété, l'attractivité et la performance de l'établissement à travers une stratégie intégrée de marketing, de communication et de recrutement, en veillant à ce que toutes les communications reflètent fidèlement l'identité, les valeurs et les formations effectivement proposées.",
    points: [
      "Définir et mettre en œuvre la stratégie marketing annuelle",
      "Concevoir et piloter les campagnes de recrutement des étudiants",
      "Gérer la communication institutionnelle et digitale, y compris les réseaux sociaux",
      "Veiller à la cohérence de l'identité visuelle et éditoriale",
      "Organiser les événements promotionnels et institutionnels",
      "Mesurer la performance des actions marketing et communication",
    ],
  },
  {
    icon: Calculator,
    title: "Comptable",
    holder: null,
    subtitle: "Personnel administratif et financier",
    rattachement: "Rattachement hiérarchique : Direction Générale",
    description:
      "Le Comptable assure la tenue d'une comptabilité fiable, sincère, régulière et documentée, conformément au référentiel comptable applicable au Mali, notamment au SYSCOHADA révisé, selon le régime applicable à l'établissement.",
    points: [
      "Enregistrer et contrôler les opérations comptables ; suivre les recettes et les dépenses",
      "Assurer le suivi des frais de scolarité et des créances",
      "Effectuer les rapprochements bancaires et suivre la trésorerie",
      "Préparer les déclarations fiscales et sociales",
      "Participer à l'élaboration des budgets et des états financiers",
      "Préparer les documents nécessaires aux audits et contrôles",
    ],
  },
  {
    icon: Wallet,
    title: "Caissier / Caissière",
    holder: null,
    subtitle: "Personnel administratif et financier",
    rattachement: "Rattachement hiérarchique : Direction Générale · Rattachement fonctionnel : Service comptable",
    description:
      "Le Caissier assure une gestion rigoureuse, transparente et sécurisée de la caisse de l'établissement, en garantissant la traçabilité de chaque opération et la concordance entre les fonds détenus et les mouvements enregistrés.",
    points: [
      "Recevoir les paiements des étudiants, parents et autres usagers",
      "Encaisser les recettes autorisées et délivrer systématiquement les reçus",
      "Effectuer les décaissements dûment autorisés",
      "Tenir le journal de caisse et effectuer les arrêtés journaliers",
      "Transmettre les pièces justificatives au Comptable",
      "Signaler immédiatement toute anomalie ou différence de caisse",
    ],
  },
]

// NB : la liste des fonctions et services supervisés par la Direction Générale est présentée
// sur la page « Direction et gouvernance » (/about/governance) — on y renvoie plutôt que de la dupliquer.

export default function FacultyStaffPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center text-white">
        <Image
          src="/images/documents/v3-image3.jpg"
          alt="La direction de ABS en séance de travail avec des officiels"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/80 to-blue-950/90" />
        <div className="relative z-10 max-w-4xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            ABS — African Business School, Bamako
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Équipe et gouvernance académique
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
            La Direction générale assure l&apos;orientation institutionnelle et le développement de ABS. Découvrez les
            fonctions et responsabilités documentées de l&apos;équipe, de la Direction générale aux services.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/about/governance">
                Direction et gouvernance <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/about">À propos d&apos;ABS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Directrice Générale */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,380px)_1fr]">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl shadow-xl ring-4 ring-cyan-50">
              <Image
                src="/images/documents/dg-seance-travail.jpg"
                alt="Sokhna Maryama Thiam, Directrice Générale d'ABS — African Business School"
                width={480}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Direction générale
              </p>
              <h2 className="mb-1 text-3xl font-bold text-blue-900">Sokhna Maryama Thiam</h2>
              <p className="mb-6 text-lg font-medium text-slate-500">
                Directrice Générale · Gérante statutaire, Managing Director & CEO
              </p>
              <p className="mb-4 text-slate-700">
                Sokhna Maryama Thiam assure la direction générale, la représentation légale, le pilotage stratégique et
                la gestion opérationnelle de ABS — African Business School SARL. Elle définit les orientations
                de développement et supervise l&apos;ensemble des activités institutionnelles, académiques,
                administratives, financières et commerciales de l&apos;établissement.
              </p>
              <p className="mb-6 text-slate-700">
                Elle pilote l&apos;ambition de positionner ABS comme une institution panafricaine reconnue pour
                l&apos;excellence académique et professionnelle, la qualité de ses formations et la
                professionnalisation de ses diplômés, dans le cadre du Plan stratégique ABS 2035.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-cyan-50 text-blue-900">
                  <Sparkles className="mr-1 h-4 w-4 text-blue-700" /> Direction générale
                </Badge>
                <Badge variant="secondary" className="bg-cyan-50 text-blue-900">
                  <ShieldCheck className="mr-1 h-4 w-4 text-blue-700" /> Représentation légale
                </Badge>
                <Badge variant="secondary" className="bg-cyan-50 text-blue-900">
                  <GraduationCap className="mr-1 h-4 w-4 text-blue-700" /> Plan stratégique ABS 2035
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs : fonctions et services */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="fonctions" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-1 md:grid-cols-2">
              <TabsTrigger value="fonctions">Fonctions & responsabilités</TabsTrigger>
              <TabsTrigger value="principes">Principes de gouvernance</TabsTrigger>
            </TabsList>

            <TabsContent value="fonctions">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <h2 className="mb-3 text-2xl font-bold text-blue-900 md:text-3xl">
                  Des responsabilités documentées
                </h2>
                <p className="text-lg text-slate-600">
                  Les rôles ci-dessous sont présentés sur la base des fiches de poste et de fonction officielles de
                  l&apos;établissement. Conformément à l&apos;organisation interne, seules les fonctions sont
                  affichées ici ; les responsabilités académiques, administratives et pédagogiques sont exercées
                  conformément à l&apos;organisation interne et aux procédures en vigueur.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {governanceRoles.map((role) => (
                  <Card key={role.title} className="border-t-4 border-t-blue-700 shadow-md hover:shadow-xl">
                    <CardHeader>
                      <role.icon className="mb-2 h-9 w-9 text-blue-700" aria-hidden="true" />
                      <CardTitle className="text-xl text-blue-900">{role.title}</CardTitle>
                      <p className="text-sm font-medium text-cyan-700">{role.subtitle}</p>
                    </CardHeader>
                    <CardContent>
                      {role.holder ? (
                        <Badge className="mb-3 bg-blue-700 text-white hover:bg-blue-800">{role.holder}</Badge>
                      ) : null}
                      <p className="mb-4 text-slate-600">{role.description}</p>
                      <ul className="space-y-2">
                        {role.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 border-t border-slate-100 pt-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                        {role.rattachement}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                  <Link href="/about/governance">
                    Voir l&apos;organisation de la gouvernance <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="principes">
              <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 md:p-10">
                <ShieldCheck className="h-10 w-10 text-blue-700" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-bold text-blue-900">La Direction et la gouvernance</h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  La Direction générale assure l&apos;orientation institutionnelle et le développement de ABS. Les
                  responsabilités académiques, administratives et pédagogiques sont exercées conformément à
                  l&apos;organisation interne et aux procédures en vigueur.
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Les fiches de poste et de fonction de l&apos;établissement définissent, pour chaque responsabilité,
                  le positionnement, les missions, les pouvoirs et les obligations correspondants. Cette page
                  présente uniquement les fonctions et leurs responsabilités telles que documentées : les noms,
                  fonctions et photographies des responsables sont publiés avec leur accord de diffusion.
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">
                  ABS inscrit par ailleurs le développement de ses formations et de son organisation dans une démarche
                  progressive d&apos;amélioration : clarification des objectifs pédagogiques, harmonisation des
                  maquettes, formalisation des procédures, suivi des enseignements et prise en compte des retours des
                  étudiants et des équipes.
                </p>
                <p className="mt-6 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm leading-6 text-slate-600">
                  Mention institutionnelle : les informations relatives aux autorisations, habilitations,
                  reconnaissances ou accréditations sont communiquées uniquement sur la base de documents officiels en
                  vigueur. Pour toute précision, veuillez contacter l&apos;administration de ABS.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/about/governance">
                      Direction et gouvernance <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                    <Link href="/contact">Contacter l&apos;administration</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Rencontrez l&apos;équipe ABS</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Découvrez nos filières, rencontrez nos équipes et engagez votre démarche d&apos;inscription. Contactez-nous
            au {ORGANIZATION.contact.phone} ou par email à {ORGANIZATION.contact.email}.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/admissions">Candidater maintenant</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/academics/programs">Nos formations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
