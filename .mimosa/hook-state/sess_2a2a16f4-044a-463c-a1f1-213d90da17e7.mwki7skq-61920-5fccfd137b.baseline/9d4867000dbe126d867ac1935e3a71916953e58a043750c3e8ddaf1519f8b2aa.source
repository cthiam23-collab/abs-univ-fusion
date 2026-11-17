import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Globe2,
  Handshake,
  Lightbulb,
  Quote,
  Target,
  Users,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Misión y Visión | ABS — African Business School",
  description: "La visión y la misión de ABS: contribuir al surgimiento de un África que forma, innova y emprende, desarrollando los conocimientos, las competencias prácticas y las cualidades humanas de los estudiantes.",
  path: "/about/mission",
  locale: "es",
})

// Los cinco ejes de la misión (fuente: V3 §4.3, textos oficiales).
const missionAxes = [
  {
    icon: BookOpen,
    title: "Transmitir",
    text: "Transmitir conocimientos estructurados y pertinentes.",
  },
  {
    icon: Target,
    title: "Desarrollar",
    text: "Desarrollar el análisis, la resolución de problemas y la capacidad de comunicar.",
  },
  {
    icon: Lightbulb,
    title: "Fomentar",
    text: "Fomentar los proyectos, la iniciativa, el espíritu de equipo y la cultura del resultado.",
  },
  {
    icon: Globe2,
    title: "Fortalecer",
    text: "Fortalecer la apertura lingüística, digital e intercultural.",
  },
  {
    icon: Handshake,
    title: "Promover",
    text: "Promover la ética, la responsabilidad y la contribución al desarrollo.",
  },
]

// Articulación excelencia académica ↔ práctica profesional (fuente: folleto institucional CM1, §2).
const professionnalisation = [
  "Estudios de caso, trabajos prácticos, proyectos, simulaciones profesionales e investigaciones aplicadas",
  "Una orientación de referencia del 40 % de teoría y 60 % de práctica",
  "Competencias transversales: inglés, cultura digital, liderazgo, ética profesional y desarrollo personal",
  "Una apertura hacia las empresas, las instituciones y los retos internacionales",
]

export default function MissionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="Estudiantes de ABS en el campus universitario"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Nuestra razón de ser</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Misión y visión de la ABS — African Business School
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Formar competencias, desarrollar inteligencias, revelar vocaciones y preparar a mujeres y
            hombres para convertirse en actores de transformación para África y el mundo.
          </p>
        </div>
      </section>

      {/* Vision (V3 §4.2 — texte officiel) */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Nuestra visión</p>
          <blockquote className="mt-5 border-l-4 border-cyan-400 pl-6 text-left text-2xl font-semibold leading-9 text-slate-900 md:text-3xl md:leading-10">
            « Contribuir al surgimiento de un África que forma, innova, emprende y participa plenamente en
            la construcción de los saberes y de las soluciones del mañana. »
          </blockquote>
          <p className="mt-6 leading-7 text-slate-600">
            Esta visión se apoya en una articulación esencial entre excelencia académica,
            profesionalización, innovación, apertura internacional, responsabilidad social y arraigo
            africano.
          </p>
        </div>
      </section>

      {/* Mission (V3 §4.3 — texte officiel) */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Nuestra misión</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Cinco ejes, una misma ambición</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Proponer itinerarios de educación superior que desarrollen los conocimientos disciplinares, las
              competencias prácticas, la autonomía intelectual y las cualidades humanas necesarias para la
              evolución académica y profesional de los estudiantes.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {missionAxes.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
                <CardContent className="p-7">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="size-6 text-cyan-700" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence académique ↔ pratique professionnelle (CM1 §2) */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">En concreto</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Combinar la exigencia académica con la práctica profesional
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Queremos combinar la exigencia académica con la práctica profesional, el desarrollo de las
              competencias con el desarrollo personal, y el conocimiento con la capacidad de actuar. Nuestra
              ambición es preparar a mujeres y hombres capaces de pensar con rigor, de emprender con audacia, de decidir con discernimiento y de ejercer sus responsabilidades con integridad.
            </p>
            <ul className="mt-7 space-y-4">
              {professionnalisation.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="size-5 shrink-0 text-cyan-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-blue-700 hover:bg-blue-800">
                <Link href="/about/values">
                  Descubrir nuestros valores <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
              >
                <Link href="/about/governance">Dirección y gobernanza</Link>
              </Button>
            </div>
          </div>

          {/* Mot de la Directrice Générale (brochure institutionnelle CM1) */}
          <div className="relative overflow-hidden rounded-3xl bg-blue-950 p-8 text-white shadow-xl">
            <Quote className="size-10 text-cyan-300" aria-hidden="true" />
            <div className="mt-5 flex items-start gap-5">
              <Image
                src="/images/documents/dg-seance-travail.jpg"
                alt="Sokhna Maryama Thiam, Directora General de ABS"
                width={96}
                height={96}
                className="h-24 w-24 shrink-0 rounded-2xl border-2 border-white/20 object-cover"
              />
              <blockquote className="text-xl leading-9">
                « Formar con exigencia, revelar los talentos y preparar a los constructores del África de mañana. »
              </blockquote>
            </div>
            <p className="mt-6 font-semibold">Sokhna Maryama Thiam</p>
            <p className="text-sm text-slate-300">Directora General, ABS — African Business School</p>
            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/about/history">Nuestro recorrido</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <Users className="mx-auto size-10 text-cyan-300" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold">¿Preparado para escribir su propio capítulo?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Únase a una institución que valora la excelencia, la innovación y el compromiso.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">Candidatarse ahora</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Hablar con el equipo de ABS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
