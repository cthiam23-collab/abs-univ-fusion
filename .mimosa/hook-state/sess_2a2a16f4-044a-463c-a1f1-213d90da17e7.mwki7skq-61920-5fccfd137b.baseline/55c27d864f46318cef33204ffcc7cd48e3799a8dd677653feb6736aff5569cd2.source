import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ORGANIZATION } from "@/lib/constants"
import {
  BookOpen,
  Video,
  Bot,
  Wifi,
  MonitorSmartphone,
  ClipboardList,
  MessageSquare,
  Headset,
  Clock,
  Globe2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "E-Campus | African Business School (ABS) — Your digital campus",
  description:
    "The E-Campus of the African Business School University: LMS platform, virtual classrooms, AI resources and dedicated technical support for your success, 24/7.",
  path: "/e-campus",
  locale: "en",
})

const stats = [
  { value: "24/7", label: "Access to the platform, day and night", icon: Clock },
  { value: "100%", label: "Courses accessible online", icon: Globe2 },
  { value: "AI", label: "Artificial intelligence embedded in the curricula", icon: Bot },
  { value: "1 team", label: "IT support dedicated to students", icon: Headset },
]

export default function ECampusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center justify-center text-white">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus of the African Business School University in Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-900/80 to-blue-950/90" />
        <div className="relative z-10 max-w-4xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            African Business School University — Bamako
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            The E-Campus: your university one click away
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
            Courses, assignments, grades, virtual classrooms and artificial intelligence tools: all of ABS&apos;s
            digital resources brought together in a single environment, accessible wherever you are.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/student-portal">
                Access the student portal <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/e-campus/lms">Discover the LMS platform</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-blue-700" />
              <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">A complete digital ecosystem</h2>
            <p className="text-lg text-slate-600">
              Learning at ABS never stops at the classroom door. Explore every part of the E-Campus.
            </p>
          </div>

          <Tabs defaultValue="lms" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="lms">LMS platform</TabsTrigger>
              <TabsTrigger value="virtual">Virtual classrooms</TabsTrigger>
              <TabsTrigger value="tools">Digital tools</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="lms">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0006.jpg"
                    alt="ABS students working on the LMS platform"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <BookOpen className="h-7 w-7 text-blue-700" /> All your courses, in one place
                  </h3>
                  <p className="mb-6 text-slate-700">
                    The ABS Learning Management System is the heart of your digital academic life. Every lecturer
                    uploads their course materials, assignments and grades there, so you never miss anything.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Access to course materials, handouts and resources shared by lecturers",
                      "Online assignment submission and deadline tracking",
                      "Real-time access to grades and assessment results",
                      "Discussion spaces per course to exchange with your lecturers and classmates",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/e-campus/lms">
                      Explore the LMS in detail <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="virtual">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <Video className="h-7 w-7 text-blue-700" /> Learn live, wherever you are
                  </h3>
                  <p className="mb-6 text-slate-700">
                    Virtual classrooms extend the lecture hall. Lectures, tutorials, thesis defences and coaching
                    sessions take place by videoconference, with real-time interaction.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Live classes with ABS professors, on campus or remotely",
                      "Recorded sessions to revise at your own pace",
                      "Group work and online presentations",
                      "Ideal for working students who balance a job and their studies",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/e-campus/virtual-classrooms">
                      See the virtual classrooms <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="order-1 overflow-hidden rounded-2xl shadow-lg lg:order-2">
                  <Image
                    src="/images/campus/IMG-20250212-WA0007.jpg"
                    alt="Virtual classroom at the African Business School (ABS)"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className="mb-8">
                <h3 className="mb-2 flex items-center gap-3 text-2xl font-bold text-blue-900">
                  <MonitorSmartphone className="h-7 w-7 text-blue-700" /> Tools that prepare you for tomorrow's world
                </h3>
                <p className="max-w-3xl text-slate-700">
                  Because artificial intelligence is embedded in every ABS curriculum, the E-Campus gives you a set of
                  digital tools that make you a tech-savvy professional.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Bot className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">AI resources</CardTitle>
                    <CardDescription>
                      Get started with generative artificial intelligence and learn to use it responsibly in your
                      academic and professional projects.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <BookOpen className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Digital library</CardTitle>
                    <CardDescription>
                      Access the documentary resources, books and references of the ABS library from the E-Campus.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/library">
                        Library <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Wifi className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Wi-Fi across the campus</CardTitle>
                    <CardDescription>
                      A connection available in classrooms, the library and workspaces to stay connected at all times.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <ClipboardList className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Student resources</CardTitle>
                    <CardDescription>
                      Timetables, regulations, administrative documents and practical guides, brought together in a
                      single space.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/student-resources">
                        Student resources <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <MessageSquare className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Communication & coaching</CardTitle>
                    <CardDescription>
                      Exchange with your coaches and the administration via the university&apos;s digital channels:
                      follow-up is regular and personalised.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Globe2 className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">English & international openness</CardTitle>
                    <CardDescription>
                      English is at the heart of ABS training: the digital tools support your daily practice of the
                      language.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/english-academy">
                        English Academy <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="support">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0010.jpg"
                    alt="IT support serving ABS students"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <Headset className="h-7 w-7 text-blue-700" /> A team that listens to you
                  </h3>
                  <p className="mb-6 text-slate-700">
                    Connection issue, access to a course, student account: the ABS IT support team is by your side so
                    that technology remains an asset, never an obstacle.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Assistance with your access to the LMS platform and the student portal",
                      "Help with virtual classrooms: setup, sound, screen sharing",
                      "Wi-Fi support on the Hamdallaye ACI 2000 campus",
                      "Advice and training on digital tools and AI",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                      <Link href="/e-campus/it-support">
                        Contact support <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                      <Link href="/contact">Contact page</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Digital pedagogy */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900">Technology serving ABS pedagogy</h2>
            <p className="mb-10 text-lg text-slate-600">
              With 80% practice and 20% theory, the E-Campus is not a gimmick: it is the natural extension of a
              pedagogy geared towards action and employability.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Learning by doing",
                description:
                  "Projects submitted online, case studies shared on the LMS, simulations in the virtual classroom: practice also happens digitally.",
              },
              {
                title: "Flexible learning",
                description:
                  "On-campus classes in Bamako and online content accessible 24/7: you stay in control of your schedule.",
              },
              {
                title: "Building employability",
                description:
                  "Mastering digital tools and AI is exactly what companies today expect from every ABS graduate.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-t-4 border-t-cyan-400 shadow-md">
                <CardHeader>
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to join the ABS E-Campus?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-100">
            Log in to the student portal now, or call us at {ORGANIZATION.contact.phone} with any question about the
            university&apos;s digital environment.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/student-portal">Student portal</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/admissions">Join ABS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
