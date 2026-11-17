import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  Landmark,
  Pickaxe,
  Scale,
  Newspaper,
  Wifi,
  Database,
  Laptop,
  Users,
  Printer,
  Search,
  Clock,
  MapPin,
  Phone,
  Mail,
  Headphones,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Library | ABS",
  description:
    "Library and documentary resources of ABS — African Business School in Bamako.",
  path: "/library",
  locale: "en",
})

const collections = [
  {
    icon: Landmark,
    title: "Management & Business",
    description:
      "Strategy, marketing, HR management, entrepreneurship: the reference works and textbooks of the university's 5 Bachelor's programmes, complemented by African and international case studies.",
  },
  {
    icon: BookOpen,
    title: "Finance, Banking & Islamic Finance",
    description:
      "A collection that is rare in the region: corporate finance, financial engineering, markets, microfinance and the principles of Islamic finance (mudaraba, musharaka, sukuk) — in French and in English.",
  },
  {
    icon: Pickaxe,
    title: "Mining, Geology & Energy",
    description:
      "Mining engineering, quarry operations, site safety, mining law and environmental issues: the documentary foundation of our technical programmes, in step with the Malian sector.",
  },
  {
    icon: Scale,
    title: "Law & Governance",
    description:
      "Business law, international law, public procurement, governance and ethics: essential resources for the Master in Public Procurement Governance and for competitive exam preparation.",
  },
  {
    icon: Newspaper,
    title: "Malian and African press",
    description:
      "Newspapers, magazines and economic reviews from Mali and across the continent: stay on top of current affairs for your presentations, debates and theses.",
  },
  {
    icon: Database,
    title: "Digital resources",
    description:
      "E-books, academic databases, student theses and past exam papers accessible from the library workstations or over campus wifi.",
  },
]

const services = [
  {
    icon: Search,
    title: "Research assistance",
    description:
      "A librarian guides you to the right source, correct citation practices and effective use of databases.",
  },
  {
    icon: Laptop,
    title: "Computer workstations & wifi",
    description:
      "A connected space to consult digital resources, write your papers and prepare your presentations.",
  },
  {
    icon: Users,
    title: "Group study rooms",
    description:
      "Spaces to prepare your team projects — ABS teaching is 80% practice-based and built around teamwork.",
  },
  {
    icon: Printer,
    title: "Printing & reprographics",
    description:
      "On-site document printing, photocopying and scanning, at student rates.",
  },
  {
    icon: Headphones,
    title: "English & languages corner",
    description:
      "Resources dedicated to the English Academy: textbooks, audio, test preparation and English reading for all levels.",
  },
  {
    icon: BookOpen,
    title: "Inter-library loan",
    description:
      "A document missing from our shelves? We activate our partners to obtain it as quickly as possible.",
  },
]

export default function LibraryPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/IMG-20250212-WA0013.jpg"
          alt="University library of the African Business School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">
                University library
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                The ABS library: the fuel for your theses and your ambitions
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                Collections aligned with our programmes, digital resources, workspaces and a team that supports you:
                here, every project — presentation, thesis, business plan — starts with good research.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/library/catalog">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    Search the catalogue
                  </Button>
                </Link>
                <Link href="/library/hours">
                  <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                    Opening hours
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="collections" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="collections">Collections</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="horaires">Hours & access</TabsTrigger>
          </TabsList>

          {/* Collections */}
          <TabsContent value="collections">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Collections designed for our programmes</h2>
              <p className="text-slate-600 text-lg">
                From the Bachelor&apos;s degree to the MBA, every ABS programme has its own collection. Our
                acquisitions follow the curricula and the economic news of West Africa.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {collections.map((c, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow border-t-4 border-t-cyan-400">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                        <c.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">{c.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{c.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-blue-950 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <Wifi className="h-10 w-10 text-cyan-400 shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">A connected library</h3>
                    <p className="text-slate-300 text-sm">
                      Wifi across the entire campus, online catalogue, academic databases: ABS documentation follows
                      you everywhere, from the Hamdallaye campus to your home.
                    </p>
                  </div>
                  <Link href="/resources/library">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold shrink-0">
                      Online resources
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services */}
          <TabsContent value="services">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Much more than shelves</h2>
              <p className="text-slate-600 text-lg">
                The library is a place for study, exchange and training in research methods. Discover everything it
                offers, alongside your courses.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {services.map((s, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                        <s.icon className="h-5 w-5 text-blue-700" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">{s.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/library/catalog">
                <Button className="bg-blue-700 hover:bg-blue-900">
                  <Search className="mr-2 h-4 w-4" />
                  Explore the catalogue
                </Button>
              </Link>
              <Link href="/library/hours">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Clock className="mr-2 h-4 w-4" />
                  Plan my visit
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Hours & access */}
          <TabsContent value="horaires">
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Opening hours</h2>
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <ul className="divide-y divide-slate-100">
                      {[
                        { day: "Monday — Friday", hours: "8:00 AM — 6:00 PM", note: "Continuous day, open study area" },
                        { day: "Saturday", hours: "9:00 AM — 1:00 PM", note: "Revision and on-site consultation" },
                        { day: "Sunday & public holidays", hours: "Closed", note: "Digital resources available remotely" },
                      ].map((row, i) => (
                        <li key={i} className="flex items-center justify-between py-3">
                          <div>
                            <p className="font-semibold text-blue-900">{row.day}</p>
                            <p className="text-sm text-slate-500">{row.note}</p>
                          </div>
                          <span
                            className={`font-bold ${
                              row.hours === "Closed" ? "text-slate-400" : "text-cyan-600"
                            }`}
                          >
                            {row.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-slate-500 mt-4">
                      Hours may vary during exam periods, academic holidays and Malian public holidays. Check the
                      dedicated page for updates.
                    </p>
                    <Link href="/library/hours">
                      <Button variant="outline" size="sm" className="mt-3 border-blue-700 text-blue-700 hover:bg-blue-50">
                        Detailed hours
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <Card className="border-t-4 border-t-cyan-400">
                  <CardHeader>
                    <CardTitle className="text-blue-900">Access & conditions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-600 text-sm">
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Priority access for ABS students upon presentation of the student card.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Borrowing conditions communicated at the library front desk.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Alumni: ask about access options to the documentary collection.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Location: Hamdallaye ACI 2000 campus, in the heart of Bamako, easy to reach from across the
                        district.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Contact the library</CardTitle>
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
                        Send a question
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
          <h2 className="text-3xl font-bold text-white mb-4">Your next great idea starts here</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Whether you are preparing a presentation, a thesis or your own business, the ABS library is your first
            partner for success. Come and discover it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/library/catalog">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                Browse the catalogue
              </Button>
            </Link>
            <Link href="/campus-tour">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Visit the campus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
