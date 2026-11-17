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
  const master = getLocalizedMasterBySlug(slug, "de")
  if (!master) return { title: "Masterstudiengang nicht gefunden | ABS" }
  // hreflang: die 16 Master-Steckbriefe sind in den Locale-Bäumen übersetzt —
  // buildMetadata registriert das /de-Präfix, die kanonische URL und die hreflang-Alternativen.
  const raw = master.description[0]
  const description =
    raw.length <= 160 ? raw : `${raw.slice(0, 157).replace(/\s+\S*$/, "")}…`
  return buildMetadata({
    title: `${master.title} (${master.code}) | ABS`,
    description,
    path: `/programs/masters/${slug}`,
    locale: "de",
  })
}

export default async function MasterProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const master = getLocalizedMasterBySlug(slug, "de")
  if (!master) notFound()

  const Icon = masterIcons[master.slug as keyof typeof masterIcons]

  // Navigation vorher / nachher innerhalb der 13 Masterstudiengänge (roulierend).
  const index = DYNAMIC_MASTER_SLUGS.indexOf(master.slug as (typeof DYNAMIC_MASTER_SLUGS)[number])
  const prev = dynamicMasters[(index - 1 + dynamicMasters.length) % dynamicMasters.length]
  const next = dynamicMasters[(index + 1) % dynamicMasters.length]
  // Deutsche Titel der Karten vorher / nachher (dynamicMasters enthält die französische Quelle).
  const prevTitle = localizedMasterFields(prev, "de").title
  const nextTitle = localizedMasterFields(next, "de").title

  const prerequisites = [
    {
      icon: GraduationCap,
      title: "Bac+3 erforderlich",
      text: "Licence (Bachelorabschluss) oder ein anerkannt gleichwertiger Abschluss in einem einschlägigen Bereich.",
    },
    {
      icon: FileText,
      title: "Bewerbungsunterlagen",
      text: "Notenübersichten, Lebenslauf und Motivationsschreiben, geprüft durch die Studienleitung.",
    },
    {
      icon: ClipboardList,
      title: "Aufnahmetest",
      text: "Schriftliche Prüfung über die Grundlagen der Fachrichtung und die Allgemeinbildung.",
    },
    {
      icon: Languages,
      title: "Englischtest",
      text: "Feststellung des Englischniveaus, das in jedem Semester unterrichtet wird.",
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src={master.image}
          alt={`ABS-Campus — ${master.title}`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-blue-950/40" />
        <div className="relative container h-full flex flex-col justify-end pb-10">
          <div className="flex items-center gap-2 text-cyan-300 text-sm mb-3">
            <Link href="/de/programs/masters" className="hover:underline underline-offset-4">
              Masterstudiengänge
            </Link>
            <ChevronRight className="size-4" />
            <span>{master.title}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="bg-cyan-600 hover:bg-cyan-600 text-white">{master.code}</Badge>
            <Badge variant="outline" className="border-cyan-400/60 text-cyan-200">
              Masterzyklus — LMD
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl">{master.title}</h1>
          <p className="mt-3 text-lg text-cyan-100 max-w-3xl">{master.tagline}</p>
        </div>
      </section>

      {/* Informations-Chips */}
      <section className="container -mt-6 relative z-10">
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Clock3, label: "Dauer", value: master.duration },
            { icon: Layers, label: "Aufbau", value: "4 Semester — 120 Credits" },
            { icon: GraduationCap, label: "Zugang", value: "Bac+3 erforderlich" },
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

      {/* Präsentation + Tabs */}
      <section className="container py-12">
        <div className="grid gap-10 lg:grid-cols-3 mb-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-primary mb-4">Präsentation des Masterstudiengangs</h2>
            {master.description.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <Card className="bg-blue-50 border-blue-100">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
                <Icon className="size-5" /> Auf einen Blick
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-900/80 space-y-2">
              <p>
                <span className="font-semibold">Code des Studiengangs:</span> {master.code}
              </p>
              <p>
                <span className="font-semibold">Abschluss:</span> Master — 2 Jahre, 4 Semester, 120
                Credits (LMD-Rahmen)
              </p>
              <p>
                <span className="font-semibold">Ort:</span> Bamako — Hamdallaye ACI 2000
              </p>
              <p>
                <span className="font-semibold">Module:</span> {master.courses.length} Lehreinheiten
              </p>
              <Link href="/de/admissions/graduate" className="text-blue-700 underline underline-offset-4">
                Zulassungsvoraussetzungen Master
              </Link>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="ziele">
          <TabsList className="mb-6">
            <TabsTrigger value="ziele">Ziele</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="kompetenzen">Kompetenzen</TabsTrigger>
            <TabsTrigger value="berufsaussichten">Berufsaussichten</TabsTrigger>
          </TabsList>

          {/* Ziele */}
          <TabsContent value="ziele">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Target className="size-5" /> Ziele der Ausbildung
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

          {/* Curriculum */}
          <TabsContent value="curriculum">
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
              Indikativer Studienaufbau auf Grundlage des Ausbildungsreferenzrahmens&nbsp;; die
              Verteilung der Module auf die Semester wird von der Studienleitung für jeden
              Studienbeginn bestätigt.
            </p>
          </TabsContent>

          {/* Kompetenzen */}
          <TabsContent value="kompetenzen">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Zu erwerbende Kompetenzen</CardTitle>
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

          {/* Berufsaussichten */}
          <TabsContent value="berufsaussichten">
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
              Die Berufsaussichten sind berufliche Perspektiven, keine Beschäftigungsgarantien.
            </p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Voraussetzungen */}
      <section className="bg-slate-50 border-y">
        <div className="container py-10">
          <h2 className="text-2xl font-bold text-primary mb-6">Zugangsvoraussetzungen</h2>
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
            Die Einreichung eines Dossiers stellt keine automatische Zulassung dar&nbsp;; die
            Entscheidung obliegt der Studienleitung.
          </p>
        </div>
      </section>

      {/* Handlungsaufforderung */}
      <section className="bg-blue-900">
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Bewerbung für den Masterstudiengang {master.title}&nbsp;({master.code})
              </h2>
              <p className="text-blue-100">
                Reichen Sie Ihre Bewerbung online ein oder kontaktieren Sie das Zulassungsteam, um zu
                prüfen, ob der Studiengang geöffnet ist, welche Unterlagen einzureichen sind und
                welcher Zeitplan für den Studienbeginn gilt.
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
                  Online bewerben
                </Button>
              </Link>
              <Link href="/de/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400 text-cyan-100 hover:bg-cyan-950 hover:text-white w-full sm:w-auto"
                >
                  Informationen anfordern
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation vorher / nachher */}
      <nav aria-label="Navigation zwischen den Masterstudiengängen" className="container py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href={`/de/programs/masters/${prev.slug}`}
            className="group flex items-center gap-4 rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <ArrowLeft className="size-5 text-blue-700 shrink-0 transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                Vorangehender Master
              </span>
              <span className="font-semibold text-blue-900">{prevTitle}</span>
            </span>
          </Link>
          <Link
            href={`/de/programs/masters/${next.slug}`}
            className="group flex items-center justify-end gap-4 text-right rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                Nächster Master
              </span>
              <span className="font-semibold text-blue-900">{nextTitle}</span>
            </span>
            <ArrowRight className="size-5 text-blue-700 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            href="/de/programs/masters"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline underline-offset-4"
          >
            <ArrowLeft className="size-4" /> Zurück zum Masterkatalog
          </Link>
        </div>
      </nav>
    </div>
  )
}
