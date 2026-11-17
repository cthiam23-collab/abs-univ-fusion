import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { dynamicMasters, masterIcons } from "@/lib/masters-data"
import { localizedMasterFields } from "@/lib/masters-data-i18n"
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
  description:
    "Master's programmes at African Business School (ABS) in Bamako: 16 tracks, each with a dedicated page (2 years, 4 semesters, 120 credits), LMD framework, indicative tuition and opening conditions confirmed by the Direction.",
  path: "/programs/masters",
  locale: "en",
})

type MasterAxis = {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  highlighted?: boolean
}

// Tracks with a dedicated static page under app/programs/masters/<slug>/.
const staticMasters: MasterAxis[] = [
  {
    title: "Master in Business Administration",
    description:
      "Deepen your expertise in management, strategy, governance and organisational leadership.",
    icon: Briefcase,
    href: "/programs/masters/mba",
    highlighted: true,
  },
  {
    title: "Master in International Management",
    description:
      "Deepen your expertise in strategy, cross-cultural management, international development and leading cross-border operations.",
    icon: Network,
    href: "/programs/masters/international-business",
    highlighted: true,
  },
  {
    title: "Master in Project Management",
    description:
      "Train professionals able to design, plan, finance, execute, monitor and evaluate projects. Develop skills in strategic planning, budget management, resource mobilisation, monitoring and evaluation, risk management and team leadership.",
    icon: ClipboardList,
    href: "/programs/masters/project-management",
    highlighted: true,
  },
]

// Tracks that do not yet have a dedicated page — opening to be confirmed by the Direction.
const unconfirmedAxes: MasterAxis[] = [
  {
    title: "Master in Digital Marketing",
    description:
      "Deepen your expertise in digital strategy, digital communication, performance analytics and customer relationships.",
    icon: Megaphone,
  },
  {
    title: "Master in Quality, Health, Safety and Environment (QHSE)",
    description:
      "Train specialists able to design, deploy and lead integrated management systems covering quality, hygiene, occupational health and safety, and the environment. Develop skills in workplace risk prevention, regulatory compliance, QHSE auditing, continuous improvement and environmental management.",
    icon: ShieldCheck,
  },
]

// Full catalogue: 3 static pages + 13 dynamic pages from
// lib/masters-data.ts + the remaining tracks to be confirmed by the Direction.
const catalogue: MasterAxis[] = [
  ...staticMasters,
  ...dynamicMasters.map(
    (master): MasterAxis => ({
      title: localizedMasterFields(master, "en").title,
      description: localizedMasterFields(master, "en").tagline,
      icon: masterIcons[master.slug as keyof typeof masterIcons],
      href: `/en/programs/masters/${master.slug}`,
    }),
  ),
  ...unconfirmedAxes,
]

export default function MastersProgramsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-10">
        <Badge variant="outline" className="mb-4">
          <GraduationCap className="size-4 mr-1" /> Master&apos;s Cycle — LMD
        </Badge>
        <h1 className="text-4xl font-bold text-primary mb-4">Master&apos;s Programmes</h1>
        <p className="text-xl text-muted-foreground mb-4">
          The ABS Master&apos;s degree is built around deepening knowledge, specialisation and the development of
          advanced skills. Through complex case studies, professional projects and applied research work, it prepares
          students to design solutions, lead projects and take on responsibilities within organisations.
        </p>
        <div className="flex items-start gap-2 rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm text-blue-900">
          <Info className="mt-0.5 size-4 shrink-0" />
          <p>
            The Master&apos;s tracks listed below are areas of study to be confirmed by the Direction before being
            displayed as open admissions. The effective opening of each track is confirmed by the Direction for each
            academic year.
          </p>
        </div>
      </div>

      {/* Highlighted tracks */}
      <h2 className="text-2xl font-bold text-primary mb-4">Tracks with a detailed page</h2>
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
                    Explore this track
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Full catalogue: 3 static pages + 13 dedicated pages + tracks to be confirmed */}
      <h2 className="text-2xl font-bold text-primary mb-2">Master&apos;s track catalogue</h2>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        Sixteen Master&apos;s tracks are documented in the ABS academic reference framework, each with a detailed
        page (objectives, curriculum, targeted skills, career outcomes, admission requirements). For each track,
        the effective opening of admissions is confirmed by the Direction for each academic year.
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
                    View the track page
                  </Button>
                </Link>
              ) : (
                <p className="text-xs text-muted-foreground italic">
                  Track pending confirmation — please contact the administration.
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Common study framework */}
      <h2 className="text-2xl font-bold text-primary mb-4">Common Master&apos;s study framework</h2>
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <CalendarClock className="size-5" /> Duration and structure
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>2 years, 4 semesters, 120 credits, in line with the LMD framework.</p>
            <p className="mt-2">Strengthened English every semester, within a French–English bilingual progression.</p>
            <Link href="/academics/pedagogy" className="text-primary underline underline-offset-4 mt-2 inline-block">
              View the teaching and language framework
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <CreditCard className="size-5" /> Indicative annual tuition
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">1 500 000 FCFA / year (M1, M2) — indicative</p>
            <p className="mt-2">
              Application fee: 15 000 FCFA. Master&apos;s thesis defence fee: 150 000 FCFA (amounts to be confirmed for
              2026–2027).
            </p>
            <p className="mt-2">
              Written confirmation of fees from the administration is required for each academic year.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <GraduationCap className="size-5" /> Admission requirements
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>
              Entry into Master 1: a Licence (Bachelor&apos;s degree) or recognised equivalent qualification in a
              relevant field, subject to review of the academic record.
            </p>
            <p className="mt-2">
              Entry into Master 2: Master 1 or an equivalent qualification, depending on the chosen track and
              validation of prerequisites.
            </p>
            <p className="mt-2">
              Submitting an application does not guarantee automatic admission; the decision rests with the Office of
              Academic Affairs.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Call to action */}
      <Card className="bg-secondary">
        <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Interested in a Master&apos;s degree at ABS?</h2>
            <p className="text-muted-foreground max-w-xl">
              Contact the ABS team to confirm that the track you want is indeed open for the relevant academic year,
              and to review admission requirements, supporting documents and key dates.
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
              <Button size="lg">Request information</Button>
            </Link>
            <Link href="/apply">
              <Button size="lg" variant="outline">
                Apply now
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
