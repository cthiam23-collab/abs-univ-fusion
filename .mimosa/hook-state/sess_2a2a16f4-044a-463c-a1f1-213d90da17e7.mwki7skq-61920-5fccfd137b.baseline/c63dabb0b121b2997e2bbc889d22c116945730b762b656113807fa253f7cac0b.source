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
  title: "Mission & Vision | ABS — African Business School",
  description: "The vision and mission of ABS: contributing to the emergence of an Africa that learns, innovates and undertakes, by developing learners' knowledge, practical skills and human qualities.",
  path: "/about/mission",
  locale: "en",
})

// The five pillars of the mission (source: V3 §4.3, official texts).
const missionAxes = [
  {
    icon: BookOpen,
    title: "Impart",
    text: "Impart structured and relevant knowledge.",
  },
  {
    icon: Target,
    title: "Develop",
    text: "Develop analysis, problem-solving and the ability to communicate.",
  },
  {
    icon: Lightbulb,
    title: "Encourage",
    text: "Encourage projects, initiative, team spirit and a culture of results.",
  },
  {
    icon: Globe2,
    title: "Strengthen",
    text: "Strengthen linguistic, digital and intercultural openness.",
  },
  {
    icon: Handshake,
    title: "Promote",
    text: "Promote ethics, responsibility and contribution to development.",
  },
]

// Linking academic excellence ↔ professional practice (source: institutional brochure CM1, §2).
const professionnalisation = [
  "Case studies, practical work, projects, professional simulations and applied research",
  "A reference orientation of 40 % theory and 60 % practice",
  "Transversal skills: English, digital culture, leadership, professional ethics and personal development",
  "Openness to companies, institutions and international issues",
]

export default function MissionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="ABS students on the university campus"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Our purpose</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Mission and vision of ABS — African Business School
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Training professionals, developing minds, revealing vocations and preparing women and
            men to become agents of transformation for Africa and the world.
          </p>
        </div>
      </section>

      {/* Vision (V3 §4.2 — official text) */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Our vision</p>
          <blockquote className="mt-5 border-l-4 border-cyan-400 pl-6 text-left text-2xl font-semibold leading-9 text-slate-900 md:text-3xl md:leading-10">
            “To contribute to the emergence of an Africa that learns, innovates, undertakes and takes
            a full part in building the knowledge and solutions of tomorrow.”
          </blockquote>
          <p className="mt-6 leading-7 text-slate-600">
            This vision rests on an essential interplay between academic excellence, professional
            readiness, innovation, international openness, societal responsibility and African
            rootedness.
          </p>
        </div>
      </section>

      {/* Mission (V3 §4.3 — official text) */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Our mission</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Five pillars, one ambition</h2>
            <p className="mt-4 leading-7 text-slate-600">
              To offer higher education pathways that develop disciplinary knowledge, practical
              skills, intellectual autonomy and the human qualities needed for learners' academic
              and professional growth.
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

      {/* Academic excellence ↔ professional practice (CM1 §2) */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">In practical terms</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Combining academic rigour with professional practice
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              We want to combine academic rigour with professional practice, skill development with
              personal fulfilment, and knowledge with the capacity to act. Our ambition is to prepare
              women and men capable of thinking with rigour, undertaking with boldness, deciding with
              discernment and exercising their responsibilities with integrity.
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
                  Discover our values <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
              >
                <Link href="/about/governance">Leadership and governance</Link>
              </Button>
            </div>
          </div>

          {/* Word from the Director General (institutional brochure CM1) */}
          <div className="relative overflow-hidden rounded-3xl bg-blue-950 p-8 text-white shadow-xl">
            <Quote className="size-10 text-cyan-300" aria-hidden="true" />
            <div className="mt-5 flex items-start gap-5">
              <Image
                src="/images/documents/dg-seance-travail.jpg"
                alt="Sokhna Maryama Thiam, Director General of ABS"
                width={96}
                height={96}
                className="h-24 w-24 shrink-0 rounded-2xl border-2 border-white/20 object-cover"
              />
              <blockquote className="text-xl leading-9">
                “Training with rigour, revealing talent and preparing the builders of tomorrow's Africa.”
              </blockquote>
            </div>
            <p className="mt-6 font-semibold">Sokhna Maryama Thiam</p>
            <p className="text-sm text-slate-300">Director General, ABS — African Business School</p>
            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/about/history">Our journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <Users className="mx-auto size-10 text-cyan-300" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold">Ready to write your own chapter?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Join an institution that values excellence, innovation and commitment.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">Apply now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Talk to the ABS team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
