import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Recycle, Rocket } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Innovation, Projekte und Unternehmertum | ABS",
  description: "An ABS lernt man Innovation und Unternehmertum durch Handeln: studentische Projekte, unternehmerischer Ansatz und nachhaltiges Engagement im Dienst des Kontinents.",
  path: "/innovation",
  locale: "de",
})

const volets = [
  {
    icon: Lightbulb,
    title: "Von der Idee zum Projekt",
    text: "Unternehmertum und Innovation ermöglichen es den Studierenden zu lernen, einen Bedarf zu beobachten, eine Lösung zu formulieren, ihre Machbarkeit zu untersuchen und ein Projekt zu präsentieren. Die Arbeiten können sich auf Unternehmen, Dienstleistungen, Technologien oder die sozialen und ökologischen Herausforderungen des Kontinents beziehen.",
  },
  {
    icon: Rocket,
    title: "ABS Startup Lab",
    text: "ABS stellt sein Programm zur unternehmerischen Begleitung unter dem Namen „ABS Startup Lab“ vor. Die Seite präzisiert, was tatsächlich angeboten wird: Workshops, Mentoring, Begleitung von Projekten, Zugang zu Ressourcen oder Vermittlung von Kontakten. Keine automatische Finanzierung und kein nicht belegtes Ergebnis wird angekündigt.",
  },
  {
    icon: Recycle,
    title: "Nachhaltiges Engagement",
    text: "ABS möchte für die Herausforderungen der nachhaltigen Entwicklung, für eine verantwortungsvolle Wirtschaft und für nützliche Innovation sensibilisieren. Die vorgestellten Projekte geben ihren Fortschritt, ihre Ziele, ihre bestätigten Partner und die tatsächlich gemessenen Ergebnisse an.",
  },
]

export default function InnovationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image2.jpg"
          alt="Studierende von ABS, die gemeinsam an einem Projekt arbeiten"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Innovation & Unternehmertum</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Ideen in nützliche Projekte verwandeln
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Einen Bedarf beobachten, eine Lösung formulieren, ihre Machbarkeit untersuchen, ein Projekt
            präsentieren: ein Ansatz, der durch Handeln erlernt wird – im Dienst der Unternehmen, der Technologien
            und der Herausforderungen des Kontinents.
          </p>
        </div>
      </section>

      {/* Les trois volets */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Drei Bereiche, ein gemeinsamer Realitätssinn</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Die vorgestellten Projekte entsprechen tatsächlich betreuten Aktivitäten. Was angeboten wird, wird so
            beschrieben, wie es funktioniert; was in Vorbereitung ist, wird als solches dargestellt.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {volets.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardContent className="p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Icon className="size-6 text-cyan-700" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Encadrement et critères */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Arbeitsrahmen</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Projekte, die auf den Lehrveranstaltungen und der Praxis aufbauen
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Die Abschlussarbeiten der Module, die Fallstudien, die betreuten Projekte, die Immersionen und die
                Praktika bilden die wichtigsten Betätigungsfelder des unternehmerischen Ansatzes an ABS. Ihre
                Ziele, ihre Bewertungskriterien und ihre Fristen werden zu Beginn jedes Moduls erläutert –
                entsprechend den offiziellen Curricula jeder Ausbildung.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Studierende, die ein Projekt in Richtung einer Unternehmensgründung weiterentwickeln möchten,
                können die von der Institution vorgesehene Begleitung in Anspruch nehmen: die konkreten
                Zugangsmodalitäten, die Verantwortlichen und die tatsächlich verfügbaren Dienste werden von der
                Verwaltung mitgeteilt.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/academics/programs">
                    Unsere Studiengänge entdecken <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  <Link href="/contact">Ein Projekt oder eine Partnerschaft vorschlagen</Link>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image
                src="/images/documents/v3-image1.png"
                alt="Studierende von ABS auf dem UniversitätsCampus"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Eine Idee, ein Projekt, eine Ambition?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Tauschen Sie sich mit dem ABS-Team aus, um die tatsächlich angebotene Begleitung und die
            Kooperationsmöglichkeiten mit Unternehmen und Institutionen kennenzulernen.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/contact">Das ABS-Team kontaktieren</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/international/partnerships">Unternehmen und Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
