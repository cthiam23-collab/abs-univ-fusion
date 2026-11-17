import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Recycle, Rocket } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Innovation, projects and entrepreneurship | ABS",
  description: "At ABS, innovation and entrepreneurship are learned by doing: student projects, the entrepreneurial journey and sustainable engagement in the service of the continent.",
  path: "/innovation",
  locale: "en",
})

const volets = [
  {
    icon: Lightbulb,
    title: "From idea to project",
    text: "Entrepreneurship and innovation enable students to learn to observe a need, formulate a solution, study its feasibility and present a project. Work may focus on businesses, services, technologies or the social and environmental challenges of the continent.",
  },
  {
    icon: Rocket,
    title: "ABS Startup Lab",
    text: "ABS presents its entrepreneurial support scheme under the name \"ABS Startup Lab\". The page states what is actually offered: workshops, mentoring, project support, access to resources or introductions. No automatic funding and no undocumented results are announced.",
  },
  {
    icon: Recycle,
    title: "Sustainable commitment",
    text: "ABS seeks to raise awareness of sustainable development, responsible economics and useful innovation. The projects presented specify their state of progress, their objectives, their confirmed partners and the results actually measured.",
  },
]

export default function InnovationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image2.jpg"
          alt="ABS students working together on a project"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Innovation &amp; entrepreneurship</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Turning ideas into useful projects
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Observing a need, formulating a solution, studying its feasibility, presenting a project:
            a journey learned by doing, in the service of businesses, technologies and the challenges
            of the continent.
          </p>
        </div>
      </section>

      {/* The three strands */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Three strands, the same demand for realism</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The projects presented correspond to activities that are actually supervised. What is
            offered is described as it works; what is in preparation is presented as such.
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

      {/* Supervision and criteria */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Working framework</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Projects grounded in teaching and in the field
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                End-of-module projects, case studies, supervised projects, immersions and internships
                form the main ground for practising the entrepreneurial journey at ABS. Their
                objectives, assessment criteria and deadlines are explained at the start of each
                module, in accordance with the official curricula of each programme.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Students wishing to take a project forward into creating a business can request the
                support provided by the institution: the concrete access arrangements, the persons in
                charge and the services actually available are communicated by the administration.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/academics/programs">
                    Discover our programmes <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  <Link href="/contact">Propose a project or a partnership</Link>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image
                src="/images/documents/v3-image1.png"
                alt="ABS students on the university campus"
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
          <h2 className="text-3xl font-bold">An idea, a project, an ambition?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Talk with the ABS team to discover the support actually offered and the avenues for
            collaboration with companies and institutions.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/contact">Contact the ABS team</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/international/partnerships">Companies and partners</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
