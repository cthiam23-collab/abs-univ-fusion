import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Briefcase,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Factory,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Phone,
  SearchCheck,
  Sprout,
  Target,
  Truck,
  UserCog,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licence in Business Administration | ABS",
  description:
    "Licence in Business Administration in Bamako: management, finance, marketing and entrepreneurship. Indicative fee 1 025 000 FCFA (written confirmation 2026–2027 required).",
  path: "/programs/business-administration",
  locale: "en",
})

const competences = [
  {
    code: "AA01",
    competence: "Analyse the economic and organisational environment",
    resultat: "Produce a structured analysis of an organisation's context.",
  },
  {
    code: "AA02",
    competence: "Manage financial resources",
    resultat: "Draw up a budget, interpret indicators and explain variances.",
  },
  {
    code: "AA03",
    competence: "Design a marketing action",
    resultat: "Define a target audience, a value proposition and an action plan.",
  },
  {
    code: "AA04",
    competence: "Organise human resources",
    resultat: "Contribute to planning, recruitment and team development.",
  },
  {
    code: "AA05",
    competence: "Lead a project",
    resultat: "Plan tasks, track results and present an assessment.",
  },
  {
    code: "AA06",
    competence: "Communicate professionally",
    resultat: "Write a report and defend a recommendation in French and in English.",
  },
]

const enseignements = [
  "General economics and business economics",
  "General and analytical accounting",
  "Financial mathematics and statistics",
  "Corporate finance and financial analysis",
  "Core marketing and digital marketing",
  "Management and strategy",
  "Human resource management",
  "Business law and taxation according to the curriculum",
  "Entrepreneurship and business planning",
  "Audit, management control and dashboards",
  "Professional English in every semester",
  "Personal development, projects and immersion",
]

const options = [
  {
    icon: LineChart,
    titre: "Financial engineering",
    texte: "Financial analysis, budget management, corporate financing and risk management.",
  },
  {
    icon: Calculator,
    titre: "Accounting and finance",
    texte: "General and analytical accounting, taxation, management control and financial steering.",
  },
  {
    icon: SearchCheck,
    titre: "Audit",
    texte: "Internal control, risk analysis, assessment of procedures and performance improvement.",
  },
  {
    icon: Target,
    titre: "Marketing and communication",
    texte: "Market research, sales strategy, digital marketing and brand development.",
  },
  {
    icon: Truck,
    titre: "Transport and logistics",
    texte: "Procurement, flow management, transport, distribution and supply chain optimisation.",
  },
  {
    icon: Sprout,
    titre: "Agribusiness",
    texte: "Management of agricultural and agri-food businesses, valorisation of production and value chains.",
  },
  {
    icon: UserCog,
    titre: "Human resource management",
    texte: "Recruitment, skills development, personnel administration and team management.",
  },
  {
    icon: Factory,
    titre: "Entrepreneurship",
    texte: "Business creation, business plan development, innovation, financing and business growth.",
  },
]

const parcours = [
  {
    cycle: "Licence 1",
    organisation: "Semesters 1 and 2: fundamentals, study methods and first applications",
    statut: "General framework of 30 credits per semester; see the detailed curricula annexed",
  },
  {
    cycle: "Licence 2",
    organisation: "Semesters 3 and 4: deeper study, practice and projects",
    statut: "Teaching units, hourly volumes and credits according to the field's curriculum",
  },
  {
    cycle: "Licence 3",
    organisation:
      "Semesters 5 and 6: progressive specialisation, project, internship and dissertation according to the curriculum",
    statut: "Academic validation according to the approved regulations",
  },
]

const info = [
  {
    label: "Degree",
    value: "Licence — 3 years, 6 semesters, 180 credits according to the working framework",
  },
  { label: "Location", value: "Bamako, Mali — Hamdallaye ACI 2000" },
  {
    label: "Languages",
    value: "French and English in every semester (bilingual progression, see the Pedagogy page)",
  },
  {
    label: "Indicative annual fee",
    value: "1 025 000 FCFA/year (quoted fee, written confirmation required for 2026–2027)",
  },
  {
    label: "Quoted additional fees",
    value: "Application file: 15 000 FCFA; Licence defence: 80 000 FCFA — amounts to be confirmed for 2026–2027",
  },
  { label: "Contact", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

export default function BusinessAdministrationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Field 5 — Business Administration
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence in Business Administration
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Manage with method. Undertake with audacity. Create lasting value.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Train professionals able to understand how organisations operate, to analyse their results
            and to contribute to management, finance, marketing, human resources and business
            development. The programme meets the needs of companies, public administrations,
            associations and entrepreneurial projects.
          </p>
        </div>
      </section>

      {/* Info bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {info.map((i) => (
              <div key={i.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-1">
                  {i.label}
                </p>
                <p className="text-sm text-slate-700">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="finalite">
            <TabsList className="flex flex-wrap justify-center w-full mb-8">
              <TabsTrigger value="finalite" className="text-sm">
                Purpose and objectives
              </TabsTrigger>
              <TabsTrigger value="competences" className="text-sm">
                Targeted competencies
              </TabsTrigger>
              <TabsTrigger value="parcours" className="text-sm">
                Programme structure
              </TabsTrigger>
              <TabsTrigger value="enseignements" className="text-sm">
                Courses
              </TabsTrigger>
              <TabsTrigger value="projets" className="text-sm">
                Projects and internships
              </TabsTrigger>
            </TabsList>

            {/* Purpose */}
            <TabsContent value="finalite">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Target className="h-5 w-5 text-cyan-500" /> Purpose
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 text-slate-700">
                    <p className="font-medium">
                      Develop a capacity for responsible, analytical and operational management.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">General objectives</p>
                      <ul className="space-y-1.5">
                        <li>Master the fundamentals of management and economics.</li>
                        <li>
                          Develop financial analysis, professional communication and decision-making.
                        </li>
                        <li>
                          Carry out projects, work in teams and integrate ethics and sustainability.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Specific objectives</p>
                      <ul className="space-y-1.5">
                        <li>Build a budget and read financial statements.</li>
                        <li>Draw up a marketing plan and analyse a market.</li>
                        <li>
                          Contribute to recruitment, organisation and performance monitoring.
                        </li>
                        <li>Present evidence-based recommendations.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <GraduationCap className="h-5 w-5 text-cyan-500" /> Admission requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        Licence entry: Baccalauréat or an equivalent qualification, subject to the
                        official admission conditions of ABS. Master&apos;s entry: a Licence or an
                        equivalent qualification in a relevant field, an academic record and the
                        conditions of the chosen pathway.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        The pathways actually open, the official titles and the fees are confirmed by
                        the administration for each intake.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <Briefcase className="h-5 w-5 text-cyan-500" /> Teaching methods and assessment
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        Continuous assessment, assignments, case studies, presentations, group work,
                        semester examinations, projects and an internship. The exact weightings are
                        those set out in the approved regulations and curriculum.
                      </p>
                      <p className="mt-3">
                        Targeted teaching approach: approximately 40 % theoretical input and 60 %
                        practice, projects, tutorials, field work, internships and immersions, subject
                        to the approved curriculum.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Competencies */}
            <TabsContent value="competences">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Targeted competencies and learning outcomes</CardTitle>
                  <CardDescription>
                    Each competency is paired with an expected learning outcome at the end of the
                    programme.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-20">Code</TableHead>
                        <TableHead>Targeted competency</TableHead>
                        <TableHead>Expected learning outcome</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {competences.map((c) => (
                        <TableRow key={c.code}>
                          <TableCell>
                            <Badge variant="secondary" className="font-semibold text-blue-800">
                              {c.code}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium">{c.competence}</TableCell>
                          <TableCell className="text-slate-600">{c.resultat}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Programme structure */}
            <TabsContent value="parcours">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Licence programme structure</CardTitle>
                  <CardDescription>
                    Licence: 3 years, 6 semesters, 180 credits according to the working academic
                    framework. The detailed distribution of teaching units is set out in the validated
                    semester curriculum of the field.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-24">Cycle</TableHead>
                        <TableHead>Organisation</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {parcours.map((p) => (
                        <TableRow key={p.cycle}>
                          <TableCell className="font-semibold text-blue-800">{p.cycle}</TableCell>
                          <TableCell>{p.organisation}</TableCell>
                          <TableCell className="text-slate-600">{p.statut}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <p className="mt-4 text-sm text-slate-500">
                    The complete semester tables (teaching units, subjects, CM/TD/TP/TPE volumes and
                    credits) appear in the annexed pedagogical volume and must be checked and
                    harmonised before publication as final data.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Courses */}
            <TabsContent value="enseignements">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <BookOpen className="h-5 w-5 text-cyan-500" /> Main courses
                    </CardTitle>
                    <CardDescription>Public-facing list, according to the validated curriculum</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {enseignements.map((e) => (
                        <li key={e} className="flex items-start gap-2 text-slate-700">
                          <CheckCircle2 className="h-4 w-4 mt-1 text-cyan-500 shrink-0" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Specialisation areas of the field</CardTitle>
                    <CardDescription>
                      Options considered within the Business Administration field. To be confirmed:
                      options actually open for each intake.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {options.map((o) => (
                      <div key={o.titre} className="flex gap-3">
                        <o.icon className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-800">{o.titre}</p>
                          <p className="text-sm text-slate-600">{o.texte}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Projects and internships */}
            <TabsContent value="projets">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <ClipboardList className="h-5 w-5 text-cyan-500" /> End-of-module projects and
                      defences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-700">
                    <p>
                      Business case study, budget forecast, simplified audit, marketing plan or business
                      plan. Oral presentation and written report; end-of-Licence defence according to
                      the approved regulations.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Users className="h-5 w-5 text-cyan-500" /> Immersions, field trips and
                      internships
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-700">
                    <p>
                      Visits to companies and organisations, case studies, supervised projects and an
                      internship in a professional setting according to the validated calendar. The
                      internship leads to a report, an assessment by the supervisor and a
                      presentation/defence according to the rules of ABS.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image + resources */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/campus/IMG-20250212-WA0003.jpg"
              alt="Students in a Business Administration class"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Resources available to students</h2>
            <p className="text-slate-700 mb-4">
              Lecturers in management, accounting, finance, marketing and human resources; lecture
              rooms, library and digital resources, spreadsheets and presentation tools. Specialised
              software and named partnerships are announced only after their availability has been
              verified.
            </p>
            <p className="text-sm text-slate-500">
              Monitoring and continuous improvement: results by teaching unit and by semester, student
              evaluation of teaching, follow-up of projects and internships, annual collection of
              feedback from graduates and employers when data are available, periodic revision of
              curricula and content.
            </p>
          </div>
        </div>
      </section>

      {/* Career paths */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Career paths and professional prospects</h2>
          <p className="max-w-3xl text-slate-700 mb-6">
            Indicative prospects, depending on each graduate&apos;s experience and specialisation —
            career paths are prospects, not job guarantees:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Management assistant",
              "Accounting or finance assistant",
              "Client relations officer",
              "HR assistant",
              "Marketing assistant",
              "Junior project manager",
              "Entrepreneur or SME support",
            ].map((d) => (
              <Badge key={d} variant="secondary" className="text-sm px-3 py-1">
                {d}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Would you like to learn more about the Business Administration programme?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-slate-200">
            Contact the ABS team to check the admission requirements, the documents to provide, the
            calendar and the places available.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold">
                Request information
              </Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold"
              >
                <Phone className="mr-2 h-4 w-4" /> Contact ABS on WhatsApp
              </Button>
            </a>
            <Link href="/apply">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold"
              >
                Apply now
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="inline-flex items-center gap-1">
              <Phone className="h-4 w-4" /> {WHATSAPP_NUMBER}
            </span>
            <span className="inline-flex items-center gap-1">
              <Mail className="h-4 w-4" /> abs.mail1290@gmail.com
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Hamdallaye ACI 2000, Bamako, Mali
            </span>
          </p>
        </div>
      </section>
    </div>
  )
}
