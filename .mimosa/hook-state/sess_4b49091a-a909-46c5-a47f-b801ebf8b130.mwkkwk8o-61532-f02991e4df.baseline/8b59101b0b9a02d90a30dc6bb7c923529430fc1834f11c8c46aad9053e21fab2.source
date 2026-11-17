import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  BookOpen,
  Building2,
  Coins,
  Globe2,
  Handshake,
  Landmark,
  Laptop,
  LineChart,
  Microscope,
  Newspaper,
  Pickaxe,
  Sprout,
  Users,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Research | African Business School (ABS)",
  description:
    "Applied research at the African Business School University in Bamako: entrepreneurship, mining and sustainable development, Islamic finance, digital technology and AI, African integration.",
  path: "/research",
  locale: "en",
})

const stats = [
  { value: "6", label: "Applied research areas", icon: Microscope },
  { value: "16", label: "Specialised Master's programmes backed by research", icon: Landmark },
  { value: "80%", label: "Practice in ABS pedagogy", icon: Laptop },
  { value: "1", label: "Chair dedicated to African integration", icon: Globe2 },
]

const axes = [
  {
    icon: Sprout,
    title: "Entrepreneurship & African SMEs",
    description:
      "How Malian businesses are born, grow and endure: business models, SME financing, Bamako's start-up ecosystem, formalising the informal sector and women's entrepreneurship.",
    image: "/images/campus/IMG-20250212-WA0016.jpg",
    tags: ["Start-up ecosystem", "SME financing", "Women's entrepreneurship"],
  },
  {
    icon: Pickaxe,
    title: "Extractive industries & sustainable development",
    description:
      "Mali is a land of gold and bauxite. Our work analyses mining governance, local redistribution of revenues, environmental impact and the social responsibility of companies in the sector.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    tags: ["Mining governance", "CSR", "Environmental impact"],
  },
  {
    icon: Coins,
    title: "Finance, Islamic finance & inclusion",
    description:
      "Microfinance, mobile money, Islamic finance and financial engineering: how to connect West African economic actors to financing channels, including those compliant with the principles of Islam.",
    image: "/images/gallery/IMG-20250216-WA0015.jpg",
    tags: ["Islamic finance", "Mobile money", "Financial inclusion"],
  },
  {
    icon: Laptop,
    title: "Digital technology, AI & organisational transformation",
    description:
      "Artificial intelligence applied to management, SME cybersecurity, data governance and the digitalisation of public services in the West African context.",
    image: "/images/campus/IMG-20250212-WA0022.jpg",
    tags: ["Applied AI", "Data governance", "Digital transformation"],
  },
  {
    icon: Globe2,
    title: "International relations & African integration",
    description:
      "ECOWAS, AfCFTA, economic diplomacy and the geopolitics of resources: the ABS Chair sheds light on Mali's and West Africa's place in global value chains.",
    image: "/images/gallery/IMG-20250216-WA0030.jpg",
    tags: ["AfCFTA", "ECOWAS", "Economic diplomacy"],
  },
  {
    icon: Newspaper,
    title: "Media, communication & public information",
    description:
      "Quality of economic information, data journalism, crisis communication and press freedom: an axis serving an informed public opinion and transparent businesses.",
    image: "/images/gallery/IMG-20250216-WA0060.jpg",
    tags: ["Data journalism", "Communication", "Economic information"],
  },
]

const centers = [
  { name: "Centre of Excellence in Management & Entrepreneurship", icon: Building2 },
  { name: "Observatory of Mining Industries and Sustainable Development", icon: Pickaxe },
  { name: "Finance & Financial Engineering Laboratory", icon: LineChart },
  { name: "Digital Technology & Artificial Intelligence Laboratory", icon: Laptop },
  { name: "Media & Communication Centre", icon: Newspaper },
  { name: "Chair of International Relations & African Integration", icon: Globe2 },
]

const projects = [
  {
    title: "Mapping Bamako's start-up ecosystem",
    lead: "Centre of Excellence in Management & Entrepreneurship",
    description:
      "Census and analysis of young businesses in the capital: high-potential sectors, financing obstacles, the role of incubators and diasporas.",
    icon: Sprout,
  },
  {
    title: "Barometer of mining governance in Mali",
    lead: "Observatory of Mining Industries",
    description:
      "Annual monitoring of gold mining companies' practices: local content, royalties, community dialogue and sustainable development pathways.",
    icon: Pickaxe,
  },
  {
    title: "Islamic finance and infrastructure financing",
    lead: "Finance & Financial Engineering Laboratory",
    description:
      "Study of murabaha and sukuk mechanisms applied to project financing in West Africa, with scenarios for application in Mali.",
    icon: Coins,
  },
  {
    title: "AI and management of Malian SMEs",
    lead: "Digital Technology & AI Laboratory",
    description:
      "Prototyping decision-support tools accessible to SME leaders: cash-flow forecasting, inventory management, customer analytics.",
    icon: Laptop,
  },
  {
    title: "Media and economic information: coverage of the mining sector in the Malian press",
    lead: "Media & Communication Centre",
    description:
      "Analysis of the quality of economic information for citizens: cited data, data journalism and the stakes of public debate on resource governance.",
    icon: Newspaper,
  },
]

const publications = [
  {
    title: "Entrepreneurship in Bamako: trajectories and business models of young companies",
    authors: "ABS Faculty — Centre of Excellence in Management & Entrepreneurship",
    journal: "Cahiers de la Recherche ABS",
    date: "2025",
  },
  {
    title: "Gold, bauxite and development: what local content for Mali's extractive industries?",
    authors: "ABS Team — Observatory of Mining Industries",
    journal: "Recherche & Territoires Ouest-Africains",
    date: "2025",
  },
  {
    title: "Mobile money and financial inclusion of women entrepreneurs in the Sahel",
    authors: "ABS Finance & Financial Engineering Laboratory",
    journal: "Cahiers de la Recherche ABS",
    date: "2024",
  },
]

const partnerships = [
  {
    partner: "Companies and professional federations of Mali",
    description:
      "Corporate chairs, commissioned studies and research internships: our students and lecturers work on real problems of the Malian private sector.",
    icon: Handshake,
  },
  {
    partner: "Public institutions and local authorities",
    description:
      "Expertise on public procurement governance, local development policies and evidence-based public policy making.",
    icon: Landmark,
  },
  {
    partner: "African and international academic networks",
    description:
      "Co-publications, joint seminars and researcher mobility with partner universities in Africa and elsewhere.",
    icon: Users,
  },
]

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center text-white">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus of the African Business School (ABS), Bamako"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-950/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Applied research — Bamako, Mali
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            ABS research: thinking about Africa from Bamako
          </h1>
          <p className="mb-8 text-lg md:text-xl text-slate-100">
            Entrepreneurship, mining and sustainable development, Islamic finance, artificial intelligence, media and
            African integration: six areas serving the real challenges of Mali and West Africa.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/centers">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                Discover our centres <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/research/collaborate">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                Collaborate with us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-cyan-50 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-cyan-400">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ambition */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">
              A leading business school, a genuine research mission
            </h2>
            <p className="mb-4 text-lg text-slate-600">
              At the African Business School University, research is not an ornament: it feeds directly into
              our 80% practice-based pedagogy. Every research area is anchored in our Bachelor&apos;s programmes and
              our 16 Master&apos;s programmes, so that students learn by solving the concrete problems of Malian
              businesses and territories.
            </p>
            <p className="mb-6 text-lg text-slate-600">
              From the governance of mining resources (gold, bauxite) to Islamic finance, including artificial
              intelligence applied to management, our teams produce knowledge useful to decision-makers,
              entrepreneurs and citizens.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/research/publications">
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                  <BookOpen className="mr-2 h-4 w-4" /> See the publications
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="text-blue-700 hover:bg-cyan-50">
                  Our vision <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl shadow-xl lg:h-96">
            <Image
              src="/images/campus/IMG-20250212-WA0025.jpg"
              alt="African Business School (ABS) students in group work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tabs: Areas / Centres / Publications / Partnerships */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl font-bold text-blue-900 md:text-4xl">Explore ABS research</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600">
            Areas of excellence, dedicated centres, faculty publications and partnerships: the whole ABS research
            ecosystem.
          </p>
          <Tabs defaultValue="axes" className="w-full">
            <TabsList className="mb-10 grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="axes" className="text-base">
                Research areas
              </TabsTrigger>
              <TabsTrigger value="centres" className="text-base">
                Centres
              </TabsTrigger>
              <TabsTrigger value="publications" className="text-base">
                Publications
              </TabsTrigger>
              <TabsTrigger value="partenariats" className="text-base">
                Partnerships
              </TabsTrigger>
            </TabsList>

            <TabsContent value="axes">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {axes.map((axe, i) => (
                  <Card key={i} className="group overflow-hidden transition-shadow hover:shadow-xl">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={axe.image}
                        alt={axe.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent" />
                      <axe.icon className="absolute bottom-3 left-4 h-8 w-8 text-cyan-400" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">{axe.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-slate-600">{axe.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {axe.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-blue-900"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="centres">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {centers.map((center, i) => (
                  <Link href="/research/centers" key={i}>
                    <Card className="group h-full transition-all hover:border-blue-700 hover:shadow-lg">
                      <CardContent className="flex h-full flex-col items-start gap-4 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900 text-cyan-400 transition-transform group-hover:scale-110">
                          <center.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700">
                          {center.name}
                        </h3>
                        <span className="mt-auto inline-flex items-center text-sm font-medium text-blue-700">
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="publications">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {publications.map((pub, i) => (
                  <Card key={i} className="transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">{pub.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2 text-sm text-slate-600">{pub.authors}</p>
                      <p className="text-sm font-medium text-blue-700">
                        {pub.journal} · {pub.date}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/research/publications">
                  <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                    All publications <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="partenariats">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {partnerships.map((p, i) => (
                  <Card key={i} className="h-full transition-shadow hover:shadow-lg">
                    <CardContent className="flex h-full flex-col gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-blue-900">
                        <p.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">{p.partner}</h3>
                      <p className="text-sm text-slate-600">{p.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/research/partnerships">
                  <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                    Our research partnerships <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Ongoing projects */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl font-bold text-blue-900 md:text-4xl">Ongoing projects</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600">
            Applied research work, conducted with ABS Master&apos;s students, on the major challenges facing Mali and
            the sub-region.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Card key={i} className="flex gap-4 p-6 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-cyan-400">
                  <project.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-blue-900">{project.title}</h3>
                  <p className="mb-2 text-sm font-medium text-blue-700">{project.lead}</p>
                  <p className="text-sm text-slate-600">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Join our research community</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Master&apos;s student, researcher, company or institution: there are a thousand ways to contribute to ABS
            research. Let&apos;s talk.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/collaborate">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                Collaborate with ABS
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                Contact the General Management
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            {ORGANIZATION.contact.address.formatted} · {ORGANIZATION.contact.phone} · {ORGANIZATION.contact.email}
          </p>
        </div>
      </section>
    </div>
  )
}
