import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import {
  Briefcase,
  Users,
  FileText,
  Globe,
  Compass,
  Network,
  Handshake,
  Target,
  Building2,
  Landmark,
  Zap,
  HeartHandshake,
  Rocket,
  Linkedin,
  MessagesSquare,
  Presentation,
  MapPin,
  Phone,
  Mail,
  TrendingUp,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Career Services | ABS",
  description:
    "Employability support for ABS students: career guidance, internships, workshops and connections with employers.",
  path: "/career-services",
  locale: "en",
})

const coachingSteps = [
  {
    icon: Compass,
    step: "Step 1",
    title: "Explore",
    description:
      "Take stock of your strengths, your aspirations and the professions that are hiring in Mali and West Africa. Our advisers help you define a clear, realistic career plan aligned with your programme — management, finance, supply chain or mining engineering.",
  },
  {
    icon: FileText,
    step: "Step 2",
    title: "Prepare",
    description:
      "A compelling CV, a convincing cover letter, a polished application file: we work with you on every document that makes the difference with recruiters, including international applications.",
  },
  {
    icon: Network,
    step: "Step 3",
    title: "Network",
    description:
      "Meet professionals at our forums, conferences and company meet-ups. At ABS, the network — alumni, faculty, partners — is your first gateway to the job market.",
  },
  {
    icon: Target,
    step: "Step 4",
    title: "Land the job",
    description:
      "Mock interviews, one-on-one coaching and access to our board of internships and job offers: right up to signing your contract, you are never alone in your search.",
  },
]

const sectors = [
  {
    icon: Landmark,
    title: "Banking & Microfinance",
    description:
      "The Malian and regional banking sector — commercial banks, microfinance institutions, fintechs — regularly recruits our graduates in finance, accounting and the MBA.",
  },
  {
    icon: Building2,
    title: "Mining & Energy",
    description:
      "Gold, quarries and energy projects are engines of the Malian economy. Our Mining Engineering and Supply Chain programmes prepare students for careers in this demanding sector.",
  },
  {
    icon: Zap,
    title: "Telecoms",
    description:
      "Mobile operators and digital service providers are looking for profiles in management, marketing and logistics — skills ABS teaches with 80% practice.",
  },
  {
    icon: HeartHandshake,
    title: "NGOs & International Organisations",
    description:
      "United Nations programmes, NGOs, development agencies and bilateral projects offer internships and jobs in project management, finance and procurement.",
  },
  {
    icon: Rocket,
    title: "Start-ups & Entrepreneurship",
    description:
      "Bamako's entrepreneurial ecosystem is taking shape. For those who want to create, ABS supports the idea, the business plan and the first investor meetings.",
  },
]

const workshops = [
  {
    icon: FileText,
    title: "CV & Cover Letter Workshop",
    description:
      "Build a CV that passes the filters and highlights your practical projects, internships and English skills.",
    href: "/career-services/resume-workshop",
    cta: "Join the workshop",
  },
  {
    icon: MessagesSquare,
    title: "Interview preparation",
    description:
      "Recorded mock interviews, classic HR questions, role plays: walk into the real interview with the confidence of someone who has already practised.",
    href: "/career-services/counseling",
    cta: "Book a coaching session",
  },
  {
    icon: Linkedin,
    title: "LinkedIn & professional image",
    description:
      "Create a profile that works for you and build your visibility with Malian and international recruiters.",
    href: "/career-services/events",
    cta: "See the calendar",
  },
  {
    icon: Presentation,
    title: "Structured internship search",
    description:
      "A complete method: targeting companies, follow-ups, the internship agreement, and showcasing the experience at the end of the placement.",
    href: "/career-services/job-board",
    cta: "Explore the job board",
  },
]

const stats = [
  { value: "80%", label: "practice-based teaching, aligned with employers' real needs" },
  { value: "21", label: "Bachelor's & Master's programmes open to employment" },
  { value: "5", label: "major partner sectors: banking, mining, telecoms, NGOs, start-ups" },
  { value: "1", label: "dedicated coach for every career plan from the Bachelor's level onward" },
]

export default function CareerServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus of the African Business School University in Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">
                Career Services — ABS
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Your professional future is built from day one
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                At the African Business School, employability is not an add-on service: it is a strategy. Personalised
                coaching, internship and job preparation, a professional network and international openness —
                everything is designed so that every student leaves ABS with a career, not just a degree.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/career-services/job-board">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    Browse the job board
                  </Button>
                </Link>
                <Link href="/career-services/counseling">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900"
                  >
                    Book an appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-950 py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{s.value}</p>
              <p className="text-sm text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="accompagnement" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="accompagnement">Coaching</TabsTrigger>
            <TabsTrigger value="stages-emploi">Internships & jobs</TabsTrigger>
            <TabsTrigger value="ateliers">Workshops</TabsTrigger>
            <TabsTrigger value="entreprises">Partner companies</TabsTrigger>
          </TabsList>

          {/* Coaching */}
          <TabsContent value="accompagnement">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">A 4-step coaching journey</h2>
              <p className="text-slate-600 text-lg">
                From the first semester to graduation day, the ABS Career Center guides you through a proven method:
                explore, prepare, network, land the job.
              </p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-100" aria-hidden="true" />
              <div className="space-y-8">
                {coachingSteps.map((s, i) => (
                  <div key={i} className={`md:flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                    <Card className="md:w-[46%] border-t-4 border-t-cyan-400 shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                            <s.icon className="h-6 w-6 text-cyan-400" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">{s.step}</p>
                            <CardTitle className="text-blue-900">{s.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600">{s.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/career-services/counseling">
                <Button className="bg-blue-700 hover:bg-blue-900">Discover one-on-one counselling</Button>
              </Link>
              <Link href="/student-resources/career-services">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Student resources
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Internships & jobs */}
          <TabsContent value="stages-emploi">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Internships & first jobs: the sectors that hire</h2>
              <p className="text-slate-600 text-lg">
                Our job board centralises internship and job offers submitted by ABS partner companies. Here are the
                five major sectors where our students find their opportunities.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {sectors.map((s, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-cyan-50 flex items-center justify-center">
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
              <Card className="bg-blue-900 text-white border-0 flex flex-col justify-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Briefcase className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Offers online around the clock</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Academic internships, professional contracts, freelance assignments: browse the listings, upload
                    your CV and track your applications.
                  </p>
                  <Link href="/career-services/job-board">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold w-full">
                      Go to the job board
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/career-services/global-careers">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Globe className="mr-2 h-4 w-4" />
                  International careers
                </Button>
              </Link>
              <Link href="/career-services/events">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Users className="mr-2 h-4 w-4" />
                  Career events
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Workshops */}
          <TabsContent value="ateliers">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Hands-on workshops all year round</h2>
              <p className="text-slate-600 text-lg">
                Every semester, the Career Center runs short, practical workshops. Come with your CV draft or your
                interview doubts: you leave with an improved version and an action plan.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {workshops.map((w, i) => (
                <Card key={i} className="border-l-4 border-l-blue-700 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                        <w.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <CardTitle className="text-blue-900 text-lg">{w.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{w.description}</p>
                    <Link href={w.href}>
                      <Button variant="outline" size="sm" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                        {w.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-cyan-50 border-cyan-400/40">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <TrendingUp className="h-8 w-8 text-blue-700 shrink-0" />
                  <p className="text-blue-900 flex-1">
                    <strong>ABS tip:</strong> take part in at least one workshop per semester and one company event
                    per year. That is the rhythm followed by the graduates who land jobs fastest.
                  </p>
                  <Link href="/career-services/resume-workshop">
                    <Button className="bg-blue-700 hover:bg-blue-900 shrink-0">See the CV workshops</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Partner companies */}
          <TabsContent value="entreprises">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">A direct bridge between the school and industry</h2>
              <p className="text-slate-600 text-lg">
                Banks, mining companies, telecom operators, NGOs and regional institutions: our partners teach in
                class, host interns and recruit our graduates. Are you an organisation? Join the network.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              <Card className="border-t-4 border-t-cyan-400">
                <CardHeader>
                  <CardTitle className="text-blue-900">Recruit at ABS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600 mb-6">
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Post your internship and job offers on our job board, free of charge.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Take part in company forums and recruitment days on the Hamdallaye campus.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Access targeted talent pools: MBA, Finance & Financial Engineering, Supply Chain, Mining
                      Engineering.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Co-design educational projects with the 80% practical dimension of our programmes.
                    </li>
                  </ul>
                  <Link href="/employers/recruit">
                    <Button className="bg-blue-700 hover:bg-blue-900">
                      <Handshake className="mr-2 h-4 w-4" />
                      Recruitment services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-blue-950 text-white border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Why employers trust us</h3>
                  <ul className="space-y-3 text-slate-300 text-sm mb-6">
                    <li>Students trained to the LMD/ECTS standard, comparable internationally.</li>
                    <li>80% practice: company cases, field studies, simulations.</li>
                    <li>English embedded from the Bachelor&apos;s level through the English Academy — an asset in
                      regional groups.</li>
                    <li>Values of integrity and African unity, dear to the general management, Mrs Sokhna M. Thiam.</li>
                  </ul>
                  <Link href="/academics/programs">
                    <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
                      Our programmes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to take your career to the next level?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Contact the Career Center of the African Business School — Hamdallaye ACI 2000, Bamako — or browse the
            internship and job offers right now.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/career-services/job-board">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                See the offers
              </Button>
            </Link>
            <Link href="/employers/recruit">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                I am an employer
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.address.formatted}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.email}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
