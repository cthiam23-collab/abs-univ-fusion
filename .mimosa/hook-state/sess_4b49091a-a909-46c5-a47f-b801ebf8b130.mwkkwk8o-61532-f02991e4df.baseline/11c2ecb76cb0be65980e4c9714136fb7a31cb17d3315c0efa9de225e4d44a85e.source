import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import {
  Network,
  Users,
  GraduationCap,
  Calendar,
  MessageCircle,
  BookOpen,
  Briefcase,
  Quote,
  HandHeart,
  MapPin,
  Phone,
  Mail,
  Globe2,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Alumni | ABS",
  description:
    "Stay connected to the graduate community of ABS — African Business School: network, events and services dedicated to alumni.",
  path: "/alumni",
  locale: "en",
})

const benefits = [
  {
    icon: Briefcase,
    title: "Lifetime access to the job board",
    description:
      "Internship, job and assignment offers shared by the network and ABS partner companies.",
  },
  {
    icon: Users,
    title: "Student mentoring",
    description:
      "Support a class of students: one hour a month to talk about your profession, review a CV or prepare an interview.",
  },
  {
    icon: BookOpen,
    title: "Academic resources",
    description:
      "Access to the university library and its digital resources to stay up to date in your field.",
  },
  {
    icon: Calendar,
    title: "Reserved events",
    description:
      "Debate evenings, networking nights, alumni conferences: regular gatherings in Bamako and online.",
  },
]

const industries = [
  "Banking & Microfinance",
  "Mining & Energy",
  "Telecoms & Digital",
  "NGOs & Cooperation",
  "Audit & Consulting",
  "Supply Chain & Logistics",
  "Public Management",
  "Entrepreneurship",
]

const testimonials = [
  {
    name: "Aïcha K., Class of 2023",
    role: "Credit analyst — banking sector, Bamako",
    quote:
      "The Career Center's mock interviews changed everything. On the day of the interview at the bank, I knew my arguments by heart.",
  },
  {
    name: "Ibrahim D., Class of 2022",
    role: "Logistics officer — mining sector, Kayes region",
    quote:
      "The ABS Master in Supply Chain is 80% practice. My internship turned into a contract, and today I coordinate a team on site.",
  },
  {
    name: "Fatoumata S., Class of 2024",
    role: "Project assistant — international NGO",
    quote:
      "English integrated into the curriculum opened doors I never imagined: I now run half of my meetings in English.",
  },
  {
    name: "Moussa T., Class of 2021",
    role: "Entrepreneur — agrifood start-up, Bamako",
    quote:
      "My business plan was built at ABS and refined in front of a panel of academics and professionals. The network keeps supporting me.",
  },
]

export default function AlumniPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/IMG-20250212-WA0022.jpg"
          alt="Alumni community of the African Business School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">Graduate network</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                The ABS network: your degree is a professional passport
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                The pride of the African Business School, its graduates carry the values of integrity and African
                unity into banks, mining companies, telecoms, NGOs and their own businesses, in Bamako and across the
                sub-region. Once a student, always a member of the network.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/alumni/networking">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    Join the network
                  </Button>
                </Link>
                <Link href="/alumni/career-services">
                  <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                    Alumni services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="reseau" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="reseau">ABS Network</TabsTrigger>
            <TabsTrigger value="temoignages">Testimonials</TabsTrigger>
            <TabsTrigger value="connecte">Stay connected</TabsTrigger>
          </TabsList>

          {/* Network */}
          <TabsContent value="reseau">
            <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">A network that works for you</h2>
                <p className="text-slate-600 mb-6">
                  The ABS alumni network brings together professionals active in every key sector of the Malian and
                  West African economy. It serves as a talent pool for partner companies, a safety net for recent
                  graduates and an ideas lab for the university.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-3 py-1.5 rounded-full bg-cyan-50 text-blue-900 text-sm font-medium border border-cyan-400/40"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm">
                  These fields reflect the distribution of our graduates, faithful to the university&apos;s flagship
                  programmes: MBA, Finance & Financial Engineering, Islamic Finance, Supply Chain, Public Procurement
                  Governance, Mining Engineering.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery/IMG-20250216-WA0030.jpg"
                  alt="ABS graduates at a ceremony on campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-6">What the network offers you</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
              {benefits.map((b, i) => (
                <Card key={i} className="border-t-4 border-t-cyan-400 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <b.icon className="h-8 w-8 text-blue-700 mb-2" />
                    <CardTitle className="text-lg text-blue-900">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{b.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-950 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <GraduationCap className="h-10 w-10 text-cyan-400 shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Become a student mentor</h3>
                    <p className="text-slate-300 text-sm">
                      Have a profession, experience, a network? Pass it on: a Bachelor&apos;s or Master&apos;s student
                      needs your perspective one hour a month. It is the ABS tradition — everyone has received,
                      everyone gives.
                    </p>
                  </div>
                  <Link href="/alumni/networking">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold shrink-0">
                      Offer my mentorship
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testimonials */}
          <TabsContent value="temoignages">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">They studied at ABS</h2>
              <p className="text-slate-600 text-lg">
                Illustrative testimonials from graduates who now carry the rigour and pragmatism of the African
                Business School into their daily professional lives.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {testimonials.map((t, i) => (
                <Card key={i} className="relative pt-8 hover:shadow-md transition-shadow">
                  <Quote className="absolute top-6 left-6 h-8 w-8 text-cyan-400" />
                  <CardContent className="pt-8">
                    <p className="text-slate-700 italic mb-6">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                        <span className="text-cyan-400 font-bold text-sm">
                          {t.name.split(" ")[0].charAt(0)}
                          {t.name.split(" ")[1]?.charAt(0) ?? ""}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-900">{t.name}</p>
                        <p className="text-sm text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-cyan-50 border-cyan-400/40">
              <CardContent className="pt-6">
                <p className="text-blue-900">
                  <strong>Are you an ABS graduate?</strong> Share your journey with the community: your story can
                  guide the next classes towards the same success.
                </p>
                <Link href="/alumni/networking">
                  <Button className="mt-4 bg-blue-700 hover:bg-blue-900">Send my testimonial</Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Stay connected */}
          <TabsContent value="connecte">
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Stay connected to ABS</h2>
                <p className="text-slate-600 mb-6">
                  The bond with your alma mater does not end at graduation. Here is how to remain part of the ABS
                  family — and keep benefiting from it.
                </p>
                <div className="space-y-5">
                  {[
                    {
                      icon: MessageCircle,
                      title: "Update your contact details",
                      description:
                        "New position, new city? Let us know to receive the network's offers, invitations and news.",
                    },
                    {
                      icon: Calendar,
                      title: "Take part in the events",
                      description:
                        "Open days, company forums, career conferences: come back to campus and meet the new classes.",
                    },
                    {
                      icon: HandHeart,
                      title: "Give your time or opportunities",
                      description:
                        "An internship offer at your company, a career workshop, a mentorship: every contribution counts for the community.",
                    },
                    {
                      icon: Globe2,
                      title: "Panafrican network",
                      description:
                        "African openness is the university's hallmark: connect with alumni across the sub-region.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href="/alumni/networking">
                    <Button className="bg-blue-700 hover:bg-blue-900">Join the network</Button>
                  </Link>
                  <Link href="/events">
                    <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                      See the events
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative h-56 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/gallery/IMG-20250216-WA0059.jpg"
                    alt="Student associations and events on the ABS campus"
                    fill
                    className="object-cover"
                  />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Alumni Office</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.address.formatted}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.email}
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="mt-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                        Write to us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-14">
        <div className="container mx-auto px-4 text-center">
          <Network className="h-10 w-10 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">A network is only as strong as its members</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Join the graduate community of the African Business School and help grow — together — ABS&apos;s influence
            in Africa and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/alumni/networking">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                Sign up to the network
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                See life on campus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
