import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import {
  Globe2,
  Handshake,
  Leaf,
  Lightbulb,
  Quote,
  Recycle,
  ShieldCheck,
  Sprout,
  Target,
  Users,
  HeartHandshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = buildMetadata({
  title: "Our Values | ABS — African Business School",
  description: "The values of ABS: excellence, responsibility, openness, innovation, African engagement and team spirit, in the service of rigorous and committed training for Africa.",
  path: "/about/values",
  locale: "en",
})

// The six official values of ABS (source: V3 §4.4 — verbatim definitions).
const values = [
  {
    id: "exigence",
    name: "Excellence",
    icon: Target,
    definition: "Committing to hard work, rigour and continuous progress.",
  },
  {
    id: "responsabilite",
    name: "Responsibility",
    icon: ShieldCheck,
    definition: "Acting with integrity, respect and awareness of consequences.",
  },
  {
    id: "ouverture",
    name: "Openness",
    icon: Globe2,
    definition: "Learning to engage in dialogue across cultures, disciplines and generations.",
  },
  {
    id: "innovation",
    name: "Innovation",
    icon: Lightbulb,
    definition: "Exploring useful ideas and methods without losing sight of real needs.",
  },
  {
    id: "engagement-africain",
    name: "African engagement",
    icon: Handshake,
    definition: "Valuing the talents, resources and initiatives of the continent.",
  },
  {
    id: "esprit-equipe",
    name: "Team spirit",
    icon: Users,
    definition: "Building with others, listening and contributing to a shared goal.",
  },
]

// Human dimensions of training (source: institutional brochure CM1, §7).
const humanQualities = [
  "Discipline",
  "Respect",
  "Rigour",
  "Solidarity",
  "Intellectual curiosity",
  "A sense of responsibility",
]

// Societal responsibility and sustainable development (source: institutional brochure CM1, §5).
const rseCommitments = [
  {
    icon: Leaf,
    title: "Excellence with meaning",
    description:
      "ABS intends to integrate Corporate Social Responsibility (CSR) and sustainable development into its vision of training and professional readiness, in order to raise students' awareness of the economic, social, environmental and ethical consequences of decisions.",
  },
  {
    icon: Recycle,
    title: "Green university",
    description:
      "As an institution committed to the concept of a green university, ABS intends to encourage initiatives promoting waste reduction and recovery, the circular economy, environmental awareness and student projects with social impact.",
  },
  {
    icon: Sprout,
    title: "Responsible performance",
    description:
      "A conception of performance that combines economic results, respect for people, responsible management of resources, transparency and contribution to the common good.",
  },
  {
    icon: HeartHandshake,
    title: "Every field concerned",
    description:
      "Sustainable resource management in engineering, AI ethics and digital sobriety in computing, governance in international relations, responsible information in journalism and responsible management practices in business administration.",
  },
]

export default function ValuesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="ABS students on the university campus"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-blue-900/40" />
        <div className="container relative py-20 md:py-28">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About us · Our values
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Six values that guide our action
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            Beyond diplomas and technical skills, ABS attaches great importance to the human
            dimension of training: educating competent, upright and responsible women and men,
            capable of working for the collective interest.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about/mission">Discover our mission</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The 6 values: cards */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Our six values</h2>
          <p className="mt-4 text-lg text-slate-600">
            These values are not a slogan: they shape the teaching, campus life and the way ABS
            defines its students' success.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.id} className="group border border-slate-200 transition-shadow hover:shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-blue-900">{value.name}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{value.definition}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tabs: each value in detail */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10">
          <h3 className="text-center text-2xl font-bold text-blue-900">Each value in detail</h3>
          <p className="mt-2 text-center text-slate-600">
            Select a value to read what it concretely means at ABS.
          </p>
          <Tabs defaultValue="exigence" className="mt-8">
            <TabsList className="mx-auto flex-wrap">
              {values.map((value) => (
                <TabsTrigger key={value.id} value={value.id}>
                  {value.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {values.map((value) => {
              const Icon = value.icon
              return (
                <TabsContent key={value.id} value={value.id}>
                  <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 md:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h4 className="text-xl font-bold text-blue-900">{value.name}</h4>
                    </div>
                    <p className="mt-4 text-lg font-medium text-slate-800">{value.definition}</p>
                    <p className="mt-4 border-l-4 border-cyan-400 pl-4 text-sm italic text-slate-500">
                      This value is part of ABS's mission: to develop learners' disciplinary
                      knowledge, practical skills, intellectual autonomy and human qualities.
                    </p>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Training skills, cultivating values, revealing leaders (CM1 §7) */}
      <section className="bg-blue-900 py-16 text-white md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Training skills, cultivating values, revealing leaders
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-200">
              Building a stronger Africa requires women and men who are competent, but also upright,
              responsible, creative and capable of working for the collective interest.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/15 bg-blue-950/60 p-8 md:p-10">
            <ul className="flex flex-wrap gap-2">
              {humanQualities.map((quality) => (
                <li
                  key={quality}
                  className="rounded-full border border-cyan-400/30 bg-blue-900/60 px-4 py-1.5 text-sm font-medium text-cyan-100"
                >
                  {quality}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-cyan-400/30 bg-blue-900/60 p-5">
              <h3 className="font-bold text-cyan-400">Our definition of leadership</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Leadership is understood as the ability to take initiative, to unite energies, to
                carry out projects and to contribute positively to one's environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CSR and sustainable development (CM1 §5) */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            Societal responsibility and sustainable development
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Learning to succeed, undertaking to transform and acting for future generations: Africa's
            development cannot be separated from environmental protection, social responsibility and
            good governance.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {rseCommitments.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="border border-slate-200 transition-shadow hover:shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-blue-700">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-blue-900">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center leading-relaxed text-slate-600">
          This approach can be seen in the perspective of the United Nations Sustainable Development
          Goals. At ABS, excellence is not limited to individual success: it also takes on its full
          meaning in the value one creates for society.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-center text-white">
        <div className="container">
          <Quote className="mx-auto h-10 w-10 text-cyan-400" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Live these values, don't just read them</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Join a university where academic rigour, professional practice and African engagement
            move forward together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300">
              <Link href="/admissions">Admissions</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
