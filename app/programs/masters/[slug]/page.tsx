import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
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
  getMasterBySlug,
  masterIcons,
} from "@/lib/masters-data"

export function generateStaticParams() {
  return DYNAMIC_MASTER_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const master = getMasterBySlug(slug)
  if (!master) return { title: "Master introuvable | ABS" }
  // hreflang : les 16 fiches Masters sont traduites dans les arbres de locales.
  const path = `/programs/masters/${slug}`
  const languages: Record<string, string> = {
    fr: `https://abs-univ.com${path}`,
    en: `https://abs-univ.com/en${path}`,
    es: `https://abs-univ.com/es${path}`,
    de: `https://abs-univ.com/de${path}`,
    ar: `https://abs-univ.com/ar${path}`,
    "x-default": `https://abs-univ.com${path}`,
  }
  return {
    title: `${master.title} (${master.code}) | ABS`,
    description: master.description[0].slice(0, 180),
    alternates: { canonical: `https://abs-univ.com${path}`, languages },
  }
}

export default async function MasterProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const master = getMasterBySlug(slug)
  if (!master) notFound()

  const Icon = masterIcons[master.slug as keyof typeof masterIcons]

  // Navigation précédent / suivant au sein des 13 Masters (bouclage).
  const index = DYNAMIC_MASTER_SLUGS.indexOf(master.slug as (typeof DYNAMIC_MASTER_SLUGS)[number])
  const prev = dynamicMasters[(index - 1 + dynamicMasters.length) % dynamicMasters.length]
  const next = dynamicMasters[(index + 1) % dynamicMasters.length]

  const prerequisites = [
    {
      icon: GraduationCap,
      title: "Bac+3 requis",
      text: "Licence ou diplôme reconnu équivalent dans un domaine pertinent.",
    },
    {
      icon: FileText,
      title: "Dossier de candidature",
      text: "Relevés de notes, CV et lettre de motivation examinés par la Direction des Études.",
    },
    {
      icon: ClipboardList,
      title: "Test d'entrée",
      text: "Épreuve écrite portant sur les fondamentaux de la spécialité et la culture générale.",
    },
    {
      icon: Languages,
      title: "Test d'anglais",
      text: "Évaluation du niveau d'anglais, langue travaillée à chaque semestre.",
    },
  ]

  return (
    <div>
      {/* Héros */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src={master.image}
          alt={`Campus d'ABS — ${master.title}`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-blue-950/40" />
        <div className="relative container h-full flex flex-col justify-end pb-10">
          <div className="flex items-center gap-2 text-cyan-300 text-sm mb-3">
            <Link href="/programs/masters" className="hover:underline underline-offset-4">
              Masters
            </Link>
            <ChevronRight className="size-4" />
            <span>{master.title}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="bg-cyan-600 hover:bg-cyan-600 text-white">{master.code}</Badge>
            <Badge variant="outline" className="border-cyan-400/60 text-cyan-200">
              Cycle Master — LMD
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl">{master.title}</h1>
          <p className="mt-3 text-lg text-cyan-100 max-w-3xl">{master.tagline}</p>
        </div>
      </section>

      {/* Chips d'information */}
      <section className="container -mt-6 relative z-10">
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Clock3, label: "Durée", value: master.duration },
            { icon: Layers, label: "Structure", value: "4 semestres — 120 crédits" },
            { icon: GraduationCap, label: "Accès", value: "Bac+3 requis" },
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

      {/* Présentation + onglets */}
      <section className="container py-12">
        <div className="grid gap-10 lg:grid-cols-3 mb-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-primary mb-4">Présentation du Master</h2>
            {master.description.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <Card className="bg-blue-50 border-blue-100">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
                <Icon className="size-5" /> En un coup d&apos;œil
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-900/80 space-y-2">
              <p>
                <span className="font-semibold">Code du parcours :</span> {master.code}
              </p>
              <p>
                <span className="font-semibold">Diplôme :</span> Master — 2 ans, 4 semestres, 120
                crédits (cadre LMD)
              </p>
              <p>
                <span className="font-semibold">Lieu :</span> Bamako — Hamdallaye ACI 2000
              </p>
              <p>
                <span className="font-semibold">Modules :</span> {master.courses.length} unités
                d&apos;enseignement
              </p>
              <Link href="/admissions/graduate" className="text-blue-700 underline underline-offset-4">
                Conditions d&apos;admission Master
              </Link>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="objectifs">
          <TabsList className="mb-6">
            <TabsTrigger value="objectifs">Objectifs</TabsTrigger>
            <TabsTrigger value="programme">Programme</TabsTrigger>
            <TabsTrigger value="competences">Compétences</TabsTrigger>
            <TabsTrigger value="debouches">Débouchés</TabsTrigger>
          </TabsList>

          {/* Objectifs */}
          <TabsContent value="objectifs">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Target className="size-5" /> Objectifs de la formation
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
              Maquette indicative établie à partir du référentiel de formation&nbsp;; la
              distribution des modules par semestre est confirmée par la Direction des Études pour
              chaque rentrée.
            </p>
          </TabsContent>

          {/* Compétences */}
          <TabsContent value="competences">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Compétences à acquérir</CardTitle>
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

          {/* Débouchés */}
          <TabsContent value="debouches">
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
              Les débouchés sont des perspectives professionnelles, pas des garanties d&apos;emploi.
            </p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Prérequis */}
      <section className="bg-slate-50 border-y">
        <div className="container py-10">
          <h2 className="text-2xl font-bold text-primary mb-6">Conditions d&apos;accès</h2>
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
            Le dépôt d&apos;un dossier ne vaut pas admission automatique&nbsp;; la décision relève
            de la Direction des Études.
          </p>
        </div>
      </section>

      {/* Bandeau d'appel à l'action */}
      <section className="bg-blue-900">
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Candidater au {master.title}&nbsp;({master.code})
              </h2>
              <p className="text-blue-100">
                Déposez votre candidature en ligne ou contactez l&apos;équipe des admissions pour
                vérifier l&apos;ouverture du parcours, les pièces à fournir et le calendrier de la
                rentrée.
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
                  Candidater en ligne
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400 text-cyan-100 hover:bg-cyan-950 hover:text-white w-full sm:w-auto"
                >
                  Demander des informations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation précédent / suivant */}
      <nav aria-label="Navigation entre les Masters" className="container py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href={`/programs/masters/${prev.slug}`}
            className="group flex items-center gap-4 rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <ArrowLeft className="size-5 text-blue-700 shrink-0 transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                Master précédent
              </span>
              <span className="font-semibold text-blue-900">{prev.title}</span>
            </span>
          </Link>
          <Link
            href={`/programs/masters/${next.slug}`}
            className="group flex items-center justify-end gap-4 text-right rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                Master suivant
              </span>
              <span className="font-semibold text-blue-900">{next.title}</span>
            </span>
            <ArrowRight className="size-5 text-blue-700 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            href="/programs/masters"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline underline-offset-4"
          >
            <ArrowLeft className="size-4" /> Retour au catalogue des Masters
          </Link>
        </div>
      </nav>
    </div>
  )
}
