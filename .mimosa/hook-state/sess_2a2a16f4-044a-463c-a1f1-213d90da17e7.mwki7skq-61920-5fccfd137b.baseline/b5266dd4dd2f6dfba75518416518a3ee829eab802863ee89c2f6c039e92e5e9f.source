import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ORGANIZATION } from "@/lib/constants"
import {
  GraduationCap,
  Users,
  CalendarClock,
  MessagesSquare,
  ClipboardCheck,
  LineChart,
  Globe2,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  Trophy,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "English Academy | African Business School (ABS) — English at the heart of your success",
  description:
    "The English Academy of the African Business School University in Bamako: flexible programmes, active practice, regular assessment and a learning community to master English.",
  path: "/english-academy",
  locale: "en",
})

const contact = ORGANIZATION.contact

const objectifs = [
  {
    icon: MessagesSquare,
    title: "Strengthen language skills",
    description:
      "Develop mastery of English in writing and speaking, to study, work and communicate with confidence.",
  },
  {
    icon: CalendarClock,
    title: "Flexible programmes",
    description:
      "Formats adapted to everyone's schedule: students, working professionals and career changers.",
  },
  {
    icon: FlaskConical,
    title: "Practice first",
    description:
      "Workshops, simulations, role plays and language exchanges: English is learned by speaking it.",
  },
  {
    icon: LineChart,
    title: "Regular assessment and follow-up",
    description:
      "Periodic assessments and an individualised progression path to measure your progress step by step.",
  },
  {
    icon: Users,
    title: "A learning community",
    description:
      "Cultural events, social activities and exchanges between learners: English is also lived outside the classroom.",
  },
]

const programmes = [
  {
    icon: GraduationCap,
    title: "English for students",
    description:
      "A pathway designed for ABS students and beyond: consolidating the basics, academic English and preparation for courses taught in English.",
    points: [
      "Strengthened speaking and writing skills",
      "Academic English: presentations, writing, document comprehension",
      "Schedules compatible with your university courses",
    ],
  },
  {
    icon: Briefcase,
    title: "English for professionals",
    description:
      "For professionals who want to become more effective: business English, meetings, emails, negotiation and professional presentations.",
    points: [
      "Everyday and workplace professional English",
      "Simulations of meetings, interviews and negotiations",
      "Time slots adapted to busy schedules",
    ],
  },
  {
    icon: Globe2,
    title: "General English & conversation",
    description:
      "A programme open to all levels, focused on oral fluency and self-confidence in everyday situations.",
    points: [
      "Level-appropriate groups after assessment",
      "Language exchanges and conversation workshops",
      "Immersion through cultural activities",
    ],
  },
]

export default function EnglishAcademyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center justify-center text-white">
        <Image
          src="/images/gallery/IMG-20250216-WA0015.jpg"
          alt="Students of the African Business School (ABS) English Academy"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/80 to-blue-950/90" />
        <div className="relative z-10 max-w-4xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            African Business School University — Bamako
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">The ABS English Academy</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
            A dynamic learning environment entirely dedicated to English. Because in a globalised world, companies and
            universities look for English-speaking profiles.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">
                Enrol at the English Academy <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/contact">Ask a question</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why English */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">
              English, a decisive skill for your future
            </h2>
            <p className="text-lg text-slate-600">
              We live in a globalised environment: companies and universities alike are looking for profiles able to
              work in English. That is why English is at the heart of ABS training — and why the English Academy is
              open to everyone.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {objectifs.map((item) => (
              <Card key={item.title} className="border-t-4 border-t-cyan-400 shadow-md">
                <CardHeader>
                  <item.icon className="mb-2 h-9 w-9 text-blue-700" />
                  <CardTitle className="text-lg text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="programmes" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="programmes">Our programmes</TabsTrigger>
              <TabsTrigger value="methode">Method</TabsTrigger>
              <TabsTrigger value="suivi">Placement test & follow-up</TabsTrigger>
            </TabsList>

            <TabsContent value="programmes">
              <div className="grid gap-6 lg:grid-cols-3">
                {programmes.map((programme) => (
                  <Card key={programme.title} className="flex flex-col shadow-md hover:shadow-xl">
                    <CardHeader>
                      <programme.icon className="mb-2 h-9 w-9 text-blue-700" />
                      <CardTitle className="text-xl text-blue-900">{programme.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-grow flex-col">
                      <p className="mb-4 text-slate-600">{programme.description}</p>
                      <ul className="mt-auto space-y-2">
                        {programme.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center text-slate-700">
                Schedules, groups and content are adjusted according to enrolments and levels. Call us at{" "}
                <span className="font-semibold text-blue-900">{contact.phone}</span> to find out about the upcoming
                sessions.
              </div>
            </TabsContent>

            <TabsContent value="methode">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0016.jpg"
                    alt="English workshop at the ABS English Academy"
                    width={720}
                    height={520}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-blue-900 md:text-3xl">
                    A 100% practical method, in the ABS spirit
                  </h2>
                  <p className="mb-6 text-slate-700">
                    Like all of the university&apos;s programmes — 80% practice, 20% theory — the English Academy
                    favours active use of the language over reciting rules.
                  </p>
                  <ul className="mb-8 space-y-4">
                    {[
                      {
                        title: "Workshops",
                        text: "Small-group work on oral expression, pronunciation and writing.",
                      },
                      {
                        title: "Simulations",
                        text: "Real-life scenarios: job interview, professional meeting, oral presentation.",
                      },
                      {
                        title: "Language exchanges",
                        text: "Regular meet-ups and conversations to practise English in a relaxed setting.",
                      },
                      {
                        title: "Cultural & social activities",
                        text: "Events that bring the language to life and create a true community of learners.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        <span>
                          <span className="font-semibold text-blue-900">{item.title} — </span>
                          <span className="text-slate-700">{item.text}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/apply">
                      Join the next session <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="suivi">
              <div className="mx-auto max-w-4xl">
                <div className="mb-10 text-center">
                  <h2 className="mb-3 text-2xl font-bold text-blue-900 md:text-3xl">
                    A clear starting point, measurable progress
                  </h2>
                  <p className="text-lg text-slate-600">
                    Every learner knows their starting point and follows a clearly signposted path: the guarantee of
                    visible progress, session after session.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="shadow-md">
                    <CardHeader>
                      <ClipboardCheck className="mb-2 h-9 w-9 text-blue-700" />
                      <CardTitle className="text-lg text-blue-900">Placement test on entry</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 text-slate-600">
                        An English test determines your level and your group when you enrol. It places you in a
                        pathway that is neither too easy nor too demanding.
                      </p>
                      <p className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm text-slate-700">
                        Good to know: the English test is an integral part of the African Business School (ABS) admission process. By
                        joining one of the university&apos;s programmes, your English level is assessed right from
                        entry.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-md">
                    <CardHeader>
                      <LineChart className="mb-2 h-9 w-9 text-blue-700" />
                      <CardTitle className="text-lg text-blue-900">Assessment & progression path</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {[
                          "Regular assessments in writing and speaking",
                          "Individual reviews: you always know where you stand",
                          "A structured progression path, milestone by milestone",
                          "Certificate of completion at the end of your pathway",
                        ].map((point) => (
                          <li key={point} className="flex items-start gap-2 text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/gallery/IMG-20250216-WA0067.jpg"
                    alt="Learner community of the English Academy"
                    width={960}
                    height={420}
                    className="h-72 w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Switch to English, starting now</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Student, professional or simply passionate: the ABS English Academy welcomes you on the Hamdallaye ACI 2000
            campus in Bamako. Call {contact.phone} or write to {contact.email}.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">Enrol</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/admissions">ABS Admissions</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/international">International dimension</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
