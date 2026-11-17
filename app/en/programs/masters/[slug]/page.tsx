import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { buildMetadata } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileText,
  GraduationCap,
  Languages,
  Layers,
  Mail,
  Phone,
  Target,
  Briefcase,
  ChevronRight,
} from "lucide-react"
import {
  DYNAMIC_MASTER_SLUGS,
  dynamicMasters,
  masterIcons,
} from "@/lib/masters-data"
import {
  getLocalizedMasterBySlug,
  localizedMasterFields,
} from "@/lib/masters-data-i18n"

export function generateStaticParams() {
  return DYNAMIC_MASTER_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const master = getLocalizedMasterBySlug(slug, "en")
  if (!master) return { title: "Master not found | ABS" }
  // hreflang: the 16 Master pages are translated in the locale trees —
  // buildMetadata registers the /en prefix, canonical and hreflang alternates.
  const raw = master.description[0]
  const description =
    raw.length <= 160 ? raw : `${raw.slice(0, 157).replace(/\s+\S*$/, "")}…`
  return buildMetadata({
    title: `${master.title} (${master.code}) | ABS`,
    description,
    path: `/programs/masters/${slug}`,
    locale: "en",
  })
}

export default async function MasterProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const master = getLocalizedMasterBySlug(slug, "en")
  if (!master) notFound()

  const Icon = masterIcons[master.slug as keyof typeof masterIcons]

  // Previous / next navigation within the 13 Masters (looping).
  const index = DYNAMIC_MASTER_SLUGS.indexOf(master.slug as (typeof DYNAMIC_MASTER_SLUGS)[number])
  const prev = dynamicMasters[(index - 1 + dynamicMasters.length) % dynamicMasters.length]
  const next = dynamicMasters[(index + 1) % dynamicMasters.length]
  // English titles for the previous / next cards (dynamicMasters holds the French source).
  const prevTitle = localizedMasterFields(prev, "en").title
  const nextTitle = localizedMasterFields(next, "en").title

  const prerequisites = [
    {
      icon: GraduationCap,
      title: "Bachelor's degree required (Bac+3)",
      text: "Licence (Bachelor's degree) or a recognised equivalent degree in a relevant field.",
    },
    {
      icon: FileText,
      title: "Application file",
      text: "Transcripts, CV and motivation letter reviewed by the Direction.",
    },
    {
      icon: ClipboardList,
      title: "Entrance test",
      text: "A written test covering the fundamentals of the specialisation and general knowledge.",
    },
    {
      icon: Languages,
      title: "English test",
      text: "Assessment of English proficiency, a language worked on every semester.",
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src={master.image}
          alt={`ABS campus — ${master.title}`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-blue-950/40" />
        <div className="relative container h-full flex flex-col justify-end pb-10">
          <div className="flex items-center gap-2 text-cyan-300 text-sm mb-3">
            <Link href="/en/programs/masters" className="hover:underline underline-offset-4">
              Masters
            </Link>
            <ChevronRight className="size-4" />
            <span>{master.title}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="bg-cyan-600 hover:bg-cyan-600 text-white">{master.code}</Badge>
            <Badge variant="outline" className="border-cyan-400/60 text-cyan-200">
              Master&apos;s Cycle — LMD
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl">{master.title}</h1>
          <p className="mt-3 text-lg text-cyan-100 max-w-3xl">{master.tagline}</p>
        </div>
      </section>

      {/* Information chips */}
      <section className="container -mt-6 relative z-10">
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Clock3, label: "Duration", value: master.duration },
            { icon: Layers, label: "Structure", value: "4 semesters — 120 credits" },
            { icon: GraduationCap, label: "Entry requirement", value: "Bachelor's degree required (Bac+3)" },
          ].map((chip) => (
            <div
              key={chip.label}
              className="flex items-center gap-3 rounded-lg border bg-white px-4 py-3 shadow-sm"
            >
              <chip.icon className="size-5 text-blue-700 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{chip.label}</p>
                <p className="text-sm font-semibold text-blue-900">{chip.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Presentation + tabs */}
      <section className="container py-12">
        <div className="grid gap-10 lg:grid-cols-3 mb-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-primary mb-4">About this Master&apos;s programme</h2>
            {master.description.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <Card className="bg-blue-50 border-blue-100">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
                <Icon className="size-5" /> At a glance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-900/80 space-y-2">
              <p>
                <span className="font-semibold">Track code:</span> {master.code}
              </p>
              <p>
                <span className="font-semibold">Degree:</span> Master — 2 years, 4 semesters, 120
                credits (LMD framework)
              </p>
              <p>
                <span className="font-semibold">Location:</span> Bamako — Hamdallaye ACI 2000
              </p>
              <p>
                <span className="font-semibold">Modules:</span> {master.courses.length} teaching
                units
              </p>
              <Link href="/admissions/graduate" className="text-blue-700 underline underline-offset-4">
                Master&apos;s admission requirements
              </Link>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="objectives">
          <TabsList className="mb-6">
            <TabsTrigger value="objectives">Objectives</TabsTrigger>
            <TabsTrigger value="programme">Programme</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="careers">Career prospects</TabsTrigger>
          </TabsList>

          {/* Objectives */}
          <TabsContent value="objectives">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Target className="size-5" /> Learning objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 md:grid-cols-2">
                  {master.objectives.map((objective) => (
                    <li key={objective} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-600" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Programme */}
          <TabsContent value="programme">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {master.courses.map((course, i) => (
                <Card key={course.title} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-base text-primary flex items-start gap-2">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5">
                      {course.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-600" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground italic">
              Indicative curriculum established from the programme reference framework&nbsp;; the
              distribution of modules per semester is confirmed by the Direction for each
              intake.
            </p>
          </TabsContent>

          {/* Skills */}
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Skills to be acquired</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {master.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-blue-200 bg-blue-50 text-blue-900 px-3 py-1.5 text-sm font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Career prospects */}
          <TabsContent value="careers">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {master.careers.map((career) => (
                <Card key={career} className="flex items-center gap-3 py-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyan-600/10">
                    <Briefcase className="size-5 text-cyan-700" />
                  </span>
                  <p className="text-sm font-medium text-blue-900">{career}</p>
                </Card>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground italic">
              Career prospects are professional outlooks, not job guarantees.
            </p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Prerequisites */}
      <section className="bg-slate-50 border-y">
        <div className="container py-10">
          <h2 className="text-2xl font-bold text-primary mb-6">Admission requirements</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {prerequisites.map((prereq) => (
              <div key={prereq.title} className="flex flex-col gap-2 rounded-lg border bg-white p-4">
                <prereq.icon className="size-6 text-blue-700" />
                <p className="font-semibold text-blue-900 text-sm">{prereq.title}</p>
                <p className="text-sm text-muted-foreground">{prereq.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Submitting an application does not constitute automatic admission&nbsp;; the decision
            rests with the Direction.
          </p>
        </div>
      </section>

      {/* Call-to-action banner */}
      <section className="bg-blue-900">
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Apply for the {master.title}&nbsp;({master.code})
              </h2>
              <p className="text-blue-100">
                Submit your application online or contact the admissions team to confirm whether the
                track is open, the documents to provide and the academic calendar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-blue-100 mt-4">
                <span className="flex items-center gap-2">
                  <Phone className="size-4 text-cyan-300" /> +223 78 14 14 88
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="size-4 text-cyan-300" /> abs.mail1290@gmail.com
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/admissions/graduate/apply">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white w-full sm:w-auto">
                  Apply online
                </Button>
              </Link>
              <Link href="/en/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400 text-cyan-100 hover:bg-cyan-950 hover:text-white w-full sm:w-auto"
                >
                  Request information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Previous / next navigation */}
      <nav aria-label="Navigation between Master&apos;s programmes" className="container py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href={`/en/programs/masters/${prev.slug}`}
            className="group flex items-center gap-4 rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <ArrowLeft className="size-5 text-blue-700 shrink-0 transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                Previous Master
              </span>
              <span className="font-semibold text-blue-900">{prevTitle}</span>
            </span>
          </Link>
          <Link
            href={`/en/programs/masters/${next.slug}`}
            className="group flex items-center justify-end gap-4 text-right rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                Next Master
              </span>
              <span className="font-semibold text-blue-900">{nextTitle}</span>
            </span>
            <ArrowRight className="size-5 text-blue-700 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            href="/en/programs/masters"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline underline-offset-4"
          >
            <ArrowLeft className="size-4" /> Back to the Master&apos;s catalogue
          </Link>
        </div>
      </nav>
    </div>
  )
}
