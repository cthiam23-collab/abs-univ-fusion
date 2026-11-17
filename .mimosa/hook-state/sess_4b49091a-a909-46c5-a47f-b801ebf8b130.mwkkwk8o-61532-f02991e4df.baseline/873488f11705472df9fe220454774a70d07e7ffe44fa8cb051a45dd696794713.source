import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import {
  Users,
  CalendarDays,
  Megaphone,
  Images,
  Quote,
  Leaf,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = buildMetadata({
  title: "Student life | ABS",
  description: "Student life at ABS — African Business School: a community that learns together, events and gatherings, ambassadors, gallery and testimonials in Bamako.",
  path: "/campus-life",
  locale: "en",
})

// Student life — document V3, §8
const sections = [
  {
    icon: CalendarDays,
    title: "Events and gatherings",
    description:
      "Lectures, orientation days, meetings with professionals, visits and awareness activities can enrich students' journeys. Each announcement specifies the title, date, venue, participation conditions and the responsible contact.",
  },
  {
    icon: Megaphone,
    title: "ABS ambassadors",
    description:
      "ABS ambassadors help make the life of the institution known, share their experience and guide those who wish to learn more. Their role rests on authentic, respectful and verifiable communication.",
  },
  {
    icon: Images,
    title: "Photo and video gallery",
    description:
      "The gallery showcases courses, projects, events and moments of campus life. Published photos and videos are dated, captioned and accompanied by the necessary authorisations, with no personal information or sensitive data.",
  },
  {
    icon: Quote,
    title: "Testimonials",
    description:
      "Testimonials from students, alumni, parents or professionals are authentic, reviewed by their authors and published with their consent. They are not presented as statistical proof of success or employability.",
  },
]

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero — document V3, §8.1 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <Users className="mr-1 h-3.5 w-3.5" />
            Student life · Bamako
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            A community that learns together
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Student life is built through participation, curiosity and mutual respect. ABS encourages
            initiatives that strengthen self-expression, a sense of responsibility, mutual support
            and openness to society.
          </p>
        </div>
      </section>

      {/* Image + quote — document V3, §3.6 */}
      <section className="container mx-auto -mt-10 px-4 pb-4">
        <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg lg:grid-cols-2 lg:p-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/documents/v3-image1.png"
              alt="ABS students on the university campus"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Life at ABS, outside the classroom
            </h2>
            <blockquote className="border-l-4 border-cyan-400 pl-4 text-slate-600">
              “Life at ABS is also built outside the classroom: lectures, gatherings, visits,
              projects, events and student initiatives contribute to open-mindedness and professional
              readiness.”
            </blockquote>
            <p className="mt-4 text-sm text-slate-500">
              The activities shown on the website correspond to events that have taken place or are
              officially scheduled.
            </p>
          </div>
        </div>
      </section>

      {/* Strands of student life — document V3, §8.2 to §8.5 */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900">What makes campus life</h2>
          <p className="mt-3 text-slate-600">
            Events, ambassadors, gallery and testimonials: the different facets of the student
            experience at ABS.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <Card key={section.title} className="border-slate-200">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700/10">
                  <section.icon className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-blue-900">{section.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sustainable commitment — document CM1, §5 */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/10">
              <Leaf className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Sustainable commitment</h2>
            <p className="text-blue-100">
              ABS intends to integrate societal responsibility and sustainable development into its
              vision of training: raising students' awareness of the economic, social,
              environmental and ethical consequences of decisions, and encouraging initiatives in
              favour of waste reduction and recovery, the circular economy, environmental awareness
              and student projects with social impact.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-md">
          <h2 className="mb-3 text-2xl font-bold text-blue-900">
            Would you like to join the ABS community?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-slate-600">
            Discover the programmes, explore admissions or contact the team with any question about
            life at ABS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions">
              <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-900">
                Apply
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-700 text-blue-700 hover:bg-blue-50"
              >
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
