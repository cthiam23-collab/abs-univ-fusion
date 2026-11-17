import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { dynamicMasters, masterIcons } from "@/lib/masters-data"
import {
  Briefcase,
  Megaphone,
  Network,
  ClipboardList,
  ShieldCheck,
  GraduationCap,
  CalendarClock,
  CreditCard,
  Info,
  Mail,
  Phone,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Masters | ABS",
  description: "Catalogue des Masters d'African Business School (ABS) à Bamako : 16 parcours avec fiche dédiée (2 ans, 4 semestres, 120 crédits), cadre LMD, tarifs indicatifs et conditions d'ouverture confirmées par la Direction.",
  path: "/programs/masters",
})

type MasterAxis = {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  highlighted?: boolean
}

// Parcours avec page statique dédiée sous app/programs/masters/<slug>/.
const staticMasters: MasterAxis[] = [
  {
    title: "Master en Administration des Affaires",
    description:
      "Approfondir le management, la stratégie, la gouvernance et le pilotage des organisations.",
    icon: Briefcase,
    href: "/programs/masters/mba",
    highlighted: true,
  },
  {
    title: "Master en Management International",
    description:
      "Approfondir la stratégie, la gestion interculturelle, le développement international et le pilotage d'activités transfrontalières.",
    icon: Network,
    href: "/programs/masters/international-business",
    highlighted: true,
  },
  {
    title: "Master en Gestion de Projets",
    description:
      "Former des professionnels capables de concevoir, planifier, financer, exécuter, suivre et évaluer des projets. Développer des compétences en planification stratégique, gestion budgétaire, mobilisation des ressources, suivi-évaluation, gestion des risques et management des équipes.",
    icon: ClipboardList,
    href: "/programs/masters/project-management",
    highlighted: true,
  },
]

// Axes de formation encore sans fiche dédiée — ouverture à confirmer par la Direction.
const unconfirmedAxes: MasterAxis[] = [
  {
    title: "Master en Marketing Digital",
    description:
      "Approfondir la stratégie numérique, la communication digitale, l'analyse des performances et la relation client.",
    icon: Megaphone,
  },
  {
    title: "Master en Qualité, Hygiène, Sécurité et Environnement (QHSE)",
    description:
      "Former des spécialistes capables de concevoir, déployer et piloter des systèmes de management intégrés de la qualité, de l'hygiène, de la santé et sécurité au travail et de l'environnement. Développer des compétences en prévention des risques professionnels, conformité réglementaire, audit QHSE, amélioration continue et management environnemental.",
    icon: ShieldCheck,
  },
]

// Catalogue complet : 3 pages statiques + 13 pages dynamiques issues de
// lib/masters-data.ts + les axes restants à confirmer par la Direction.
const catalogue: MasterAxis[] = [
  ...staticMasters,
  ...dynamicMasters.map(
    (master): MasterAxis => ({
      title: master.title,
      description: master.tagline,
      icon: masterIcons[master.slug as keyof typeof masterIcons],
      href: `/programs/masters/${master.slug}`,
    }),
  ),
  ...unconfirmedAxes,
]

export default function MastersProgramsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-10">
        <Badge variant="outline" className="mb-4">
          <GraduationCap className="size-4 mr-1" /> Cycle Master — LMD
        </Badge>
        <h1 className="text-4xl font-bold text-primary mb-4">Masters</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Le Master d&apos;ABS s&apos;inscrit dans une dynamique d&apos;approfondissement des connaissances, de
          spécialisation et de développement de compétences avancées. À travers des études de cas complexes, des
          projets professionnels et des travaux de recherche appliquée, il prépare à concevoir des solutions, à piloter
          des projets et à assumer des responsabilités au sein des organisations.
        </p>
        <div className="flex items-start gap-2 rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm text-blue-900">
          <Info className="mt-0.5 size-4 shrink-0" />
          <p>
            Les parcours de Master listés ci-dessous correspondent à des axes de formation à confirmer par la Direction
            avant affichage comme admissions ouvertes. L&apos;ouverture effective de chaque parcours est confirmée par
            la Direction pour chaque rentrée académique.
          </p>
        </div>
      </div>

      {/* Parcours mis en avant */}
      <h2 className="text-2xl font-bold text-primary mb-4">Parcours avec page détaillée</h2>
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {catalogue
          .filter((m) => m.highlighted)
          .map((master) => (
            <Card key={master.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-start gap-2">
                  <master.icon className="mt-1 size-5 shrink-0" />
                  {master.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 flex-1">
                <p className="text-muted-foreground text-sm flex-1">{master.description}</p>
                <Link href={master.href!}>
                  <Button variant="secondary" className="w-full">
                    Découvrir le parcours
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Catalogue complet : 3 pages statiques + 13 pages dédiées + axes à confirmer */}
      <h2 className="text-2xl font-bold text-primary mb-2">Catalogue des parcours de Master</h2>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        Seize parcours de Master sont documentés dans le référentiel académique d&apos;ABS et disposent chacun d&apos;une
        fiche détaillée (objectifs, maquette, compétences visées, débouchés, conditions d&apos;accès). Pour chaque
        parcours, l&apos;ouverture effective des admissions est confirmée par la Direction pour chaque rentrée.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {catalogue.map((master) => (
          <Card key={master.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg text-primary flex items-start gap-2">
                <master.icon className="mt-1 size-5 shrink-0" />
                {master.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 flex-1">
              <CardDescription className="flex-1">{master.description}</CardDescription>
              {master.href ? (
                <Link href={master.href}>
                  <Button variant="secondary" size="sm" className="w-full">
                    Voir la fiche du parcours
                  </Button>
                </Link>
              ) : (
                <p className="text-xs text-muted-foreground italic">
                  Parcours en cours de confirmation — contactez l&apos;administration.
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cadre commun des études */}
      <h2 className="text-2xl font-bold text-primary mb-4">Cadre commun des études de Master</h2>
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <CalendarClock className="size-5" /> Durée et structure
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>2 ans, 4 semestres, 120 crédits, selon le cadre pédagogique LMD.</p>
            <p className="mt-2">Anglais renforcé à chaque semestre, dans une progression bilingue français–anglais.</p>
            <Link href="/academics/pedagogy" className="text-primary underline underline-offset-4 mt-2 inline-block">
              Voir le dispositif pédagogique et linguistique
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <CreditCard className="size-5" /> Tarif annuel indicatif
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">1 500 000 FCFA / an (M1, M2) — indicatif</p>
            <p className="mt-2">
              Frais de dossier : 15 000 FCFA. Frais de soutenance de Master : 150 000 FCFA (montants à confirmer pour
              2026–2027).
            </p>
            <p className="mt-2">
              Une confirmation écrite des frais par l&apos;administration est requise pour chaque rentrée.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <GraduationCap className="size-5" /> Conditions d&apos;accès
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>
              Accès en Master 1 : Licence ou diplôme reconnu équivalent dans un domaine pertinent, avec examen du
              dossier académique.
            </p>
            <p className="mt-2">
              Accès en Master 2 : Master 1 ou diplôme équivalent, selon le parcours retenu et la validation des
              prérequis.
            </p>
            <p className="mt-2">
              Le dépôt d&apos;un dossier ne vaut pas admission automatique ; la décision relève de la Direction des
              Études.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Appel à l'action */}
      <Card className="bg-secondary">
        <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Intéressé par un Master à ABS&nbsp;?</h2>
            <p className="text-muted-foreground max-w-xl">
              Contactez l&apos;équipe de ABS pour vérifier que le parcours souhaité est effectivement ouvert pour la
              rentrée concernée, ainsi que les conditions d&apos;admission, les pièces à fournir et le calendrier.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground mt-3">
              <span className="flex items-center gap-2">
                <Phone className="size-4" /> +223 78 14 14 88
              </span>
              <span className="flex items-center gap-2">
                <Mail className="size-4" /> abs.mail1290@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact">
              <Button size="lg">Demander des informations</Button>
            </Link>
            <Link href="/apply">
              <Button size="lg" variant="outline">
                Candidater
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
