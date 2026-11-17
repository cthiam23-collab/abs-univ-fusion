import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import {
  Users,
  Dumbbell,
  CalendarDays,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
  MapPin,
  Vote,
  Leaf,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Student Life | ABS",
  description:
    "Student life at ABS — African Business School: community, events, clubs and student support.",
  path: "/student-life",
  locale: "en",
})

const stats = [
  { value: "5+", label: "Student clubs & associations", icon: Users },
  { value: "10+", label: "Events per year", icon: CalendarDays },
  { value: "80%", label: "Practice in the curricula", icon: GraduationCap },
  { value: "1", label: "Student government: the BAGE", icon: Vote },
]

const vieAssociative = [
  {
    title: "The BAGE, your voice",
    description:
      "The Students' General Assembly is the student government of the African Business School (ABS), democratically elected every year. It represents your interests with the administration and organises campus life.",
    image: "/images/campus/IMG-20250212-WA0003.jpg",
    link: "/student-life/organizations",
  },
  {
    title: "Thematic clubs",
    description:
      "Entrepreneurship, culture, media, environment, digital technology: join an existing club or create your own with the support of the BAGE and the administration.",
    image: "/images/gallery/IMG-20250216-WA0066.jpg",
    link: "/campus-life/organizations",
  },
  {
    title: "Civic engagement",
    description:
      "Mentoring high-school students, volunteer work, campus recycling campaigns: responsibility and openness are among the values we live every day.",
    image: "/images/gallery/IMG-20250216-WA0015.jpg",
    link: "/student-life/extracurricular-activities",
  },
]

const sportBienEtre = [
  {
    title: "Sport integrated into the curricula",
    description:
      "Sport is part of every student's timetable: football, basketball, athletics and fitness. Because physical well-being supports academic success.",
    image: "/images/campus/IMG-20250212-WA0006.jpg",
    link: "/student-life/athletics",
  },
  {
    title: "Inter-class tournaments",
    description:
      "The major sporting events of the year unite the classes: football championship, basketball tournaments and athletics days on the Hamdallaye campus.",
    image: "/images/gallery/IMG-20250216-WA0067.jpg",
    link: "/campus-life/recreation",
  },
  {
    title: "Mental well-being",
    description:
      "Listening, support and prevention: our support team watches over the balance between student life, the intensity of the curricula and personal life.",
    image: "/images/gallery/IMG-20250216-WA0070.jpg",
    link: "/student-life/support",
  },
]

const evenements = [
  {
    title: "Open days",
    description: "Introduce the African Business School (ABS) to your family and friends and meet the teaching teams.",
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    link: "/student-life/events",
  },
  {
    title: "Entrepreneurship week",
    description: "Workshops, pitches and meetings with Malian and pan-African entrepreneurs.",
    image: "/images/gallery/IMG-20250216-WA0030.jpg",
    link: "/student-life/events",
  },
  {
    title: "Annual ABS gala",
    description: "The great gathering of the community: awards ceremony, culture and celebration.",
    image: "/images/gallery/IMG-20250216-WA0034.jpg",
    link: "/student-life/events",
  },
]

const soutien = [
  {
    title: "Coaching & employability",
    description:
      "Every student benefits from personalised support: career plan, interview preparation, internships and networking with partner companies.",
    image: "/images/campus/IMG-20250212-WA0012.jpg",
    link: "/student-resources",
  },
  {
    title: "Health & services",
    description: "Health guidance, administrative services and everyday support so you can study with peace of mind.",
    image: "/images/gallery/IMG-20250216-WA0060.jpg",
    link: "/student-resources/health-services",
  },
  {
    title: "Academic support",
    description:
      "Peer tutoring between classes, access to the library and the e-campus platform: no one is left alone to face the demands of the programme.",
    image: "/images/gallery/IMG-20250216-WA0072.jpg",
    link: "/library",
  },
]

function FeatureGrid({ items }: { items: { title: string; description: string; image: string; link: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="overflow-hidden border-slate-200 pt-0 gap-0 hover:shadow-lg transition-shadow">
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            className="h-48 w-full object-cover"
          />
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 mb-4">{item.description}</p>
            <Link href={item.link} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-cyan-400">
              Discover <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function StudentLifePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus of the African Business School (ABS) in Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-950/60" />
        <div className="container mx-auto relative z-10 px-4">
          <Badge className="mb-4 bg-cyan-400 text-blue-950 hover:bg-cyan-400">Student life</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight mb-4">
            Your student life at the African Business School (ABS) in Bamako
          </h1>
          <p className="text-lg text-cyan-50 max-w-2xl mb-8">
            In the heart of Hamdallaye ACI 2000, the African Business School (ABS) offers far more than excellent training: a living
            campus, an elected student government, sport integrated into every curriculum and an engaged community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/student-life/events">See the events</Link>
            </Button>
            <Button asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
              <Link href="/campus-life">Explore the campus</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-950 py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto py-16 px-4">
        <Tabs defaultValue="associatif" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-10">
            <TabsTrigger value="associatif">Student associations</TabsTrigger>
            <TabsTrigger value="sport">Sport & well-being</TabsTrigger>
            <TabsTrigger value="evenements">Events</TabsTrigger>
            <TabsTrigger value="soutien">Support & services</TabsTrigger>
          </TabsList>

          <TabsContent value="associatif">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Get involved, decide, build</h2>
              <p className="text-slate-600">
                At the African Business School (ABS), students are not spectators: they are actors. Associations, thematic clubs and
                solidarity projects shape the year and develop creativity, responsibility and teamwork.
              </p>
            </div>
            <FeatureGrid items={vieAssociative} />
          </TabsContent>

          <TabsContent value="sport">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">A healthy body for a high-performing mind</h2>
              <p className="text-slate-600">
                Sport and physical activities are integrated into the curricula of all our Bachelor&apos;s and
                Master&apos;s programmes. Competition, recreation or fitness: everyone finds their place and builds
                team spirit.
              </p>
            </div>
            <FeatureGrid items={sportBienEtre} />
          </TabsContent>

          <TabsContent value="evenements">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">A year full of highlights</h2>
              <p className="text-slate-600">
                From the start of the academic year to the annual gala, the BAGE and the University&apos;s teams
                organise more than 10 events per year: culture, entrepreneurship, sport and openness to Africa.
              </p>
            </div>
            <FeatureGrid items={evenements} />
            <div className="text-center mt-8">
              <Button asChild className="bg-blue-700 hover:bg-blue-900">
                <Link href="/student-life/events">
                  Full events calendar <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="soutien">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Succeeding together</h2>
              <p className="text-slate-600">
                Career coaching, health, tutoring: our services support every student from enrolment through to
                professional integration.
              </p>
            </div>
            <FeatureGrid items={soutien} />
          </TabsContent>
        </Tabs>
      </section>

      {/* Student engagement — BAGE */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/campus/IMG-20250212-WA0015.jpg"
              alt="BAGE students gathered on the ABS campus"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Badge className="mb-3 bg-cyan-50 text-blue-700 border border-cyan-400">
              <Vote className="h-4 w-4 mr-1" /> Student engagement
            </Badge>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">The BAGE: an elected student government</h2>
            <p className="text-slate-600 mb-4">
              The Students&apos; General Assembly (BAGE) is democratically elected every year. Its board sits at the
              heart of student life: it champions your ideas, negotiates campus improvements and co-builds the events
              calendar with the General Management.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Represent students with the administration",
                "Run the campus clubs and associations",
                "Organise the major events of the year",
                "Lead CSR projects: mentoring, volunteering, recycling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <HeartHandshake className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="bg-blue-700 hover:bg-blue-900">
              <Link href="/student-life/organizations">
                Join an association <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Employability */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              icon: Briefcase,
              title: "Coaching & internships",
              text: "Individual support towards employment: CV, mock interviews and internships with partner companies from the Bachelor's level onward.",
            },
            {
              icon: Users,
              title: "Professional network",
              text: "Career forums, meetings with alumni, and Malian and pan-African companies that recruit directly on campus.",
            },
            {
              icon: Leaf,
              title: "Responsibility & CSR",
              text: "Mentoring young people, volunteering and recycling: our students are committed to the sustainable development of Mali and Africa.",
            },
          ].map((item) => (
            <div key={item.title} className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded-r-xl">
              <item.icon className="h-8 w-8 text-blue-700 mb-3" />
              <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-blue-950 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to experience the ABS journey?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Join a university where academic excellence, practice and campus life move forward together, in the heart
            of Bamako.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/apply">Apply now</Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
              <Link href="/campus-life/housing">Housing & campus life</Link>
            </Button>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-cyan-400" /> Hamdallaye ACI 2000, Bamako — Mali
          </p>
        </div>
      </section>
    </div>
  )
}
