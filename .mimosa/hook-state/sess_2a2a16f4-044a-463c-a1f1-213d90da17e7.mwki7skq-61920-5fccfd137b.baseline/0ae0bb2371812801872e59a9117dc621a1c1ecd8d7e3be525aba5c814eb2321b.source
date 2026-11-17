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
  CheckCircle2,
  ClipboardList,
  Cpu,
  GitBranch,
  GraduationCap,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licence in Computer Science Engineering | ABS",
  description:
    "Licence in Computer Science Engineering: programming, web and mobile development, databases, cybersecurity. Indicative fee 1 025 000 FCFA (written confirmation 2026–2027 required).",
  path: "/programs/engineering/computer-science",
  locale: "en",
})

const competences = [
  {
    code: "II01",
    competence: "Solve a problem through algorithms",
    resultat: "Formalise a solution and translate it into a program.",
  },
  {
    code: "II02",
    competence: "Develop an application",
    resultat: "Design, code, test and document an application.",
  },
  {
    code: "II03",
    competence: "Manage data",
    resultat: "Model a database and run appropriate queries.",
  },
  {
    code: "II04",
    competence: "Understand systems and networks",
    resultat: "Describe an architecture and diagnose simple incidents.",
  },
  {
    code: "II05",
    competence: "Secure developments",
    resultat: "Identify common risks and apply best practices.",
  },
  {
    code: "II06",
    competence: "Work in project mode",
    resultat: "Use a code repository, track tasks and deliver a demonstration.",
  },
]

const enseignements = [
  "Applied mathematics and logic",
  "Algorithms and programming",
  "Python and/or Java according to the curriculum",
  "Web development: HTML, CSS, JavaScript and frameworks according to resources",
  "Databases and SQL",
  "Operating systems and networks",
  "Software engineering, testing and quality assurance",
  "Mobile development according to the curriculum",
  "Cybersecurity and data protection",
  "Data and a progressive introduction to AI",
  "Technical English in every semester",
  "Supervised projects, personal development and immersion",
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

const axes = [
  {
    icon: Cpu,
    titre: "Software engineering",
    texte: "Design, programming, testing and quality of applications.",
  },
  {
    icon: Smartphone,
    titre: "Web and mobile development",
    texte: "Web interfaces, connected applications and digital services.",
  },
  {
    icon: GitBranch,
    titre: "Artificial intelligence and data science",
    texte: "A progressive introduction to AI, data and how to exploit them.",
  },
  {
    icon: Lock,
    titre: "Cybersecurity",
    texte: "Protection of systems and data, and security best practices.",
  },
]

export default function ComputerSciencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Field 2 — Computer science engineering and digital technologies
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence in Computer Science Engineering
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Master the technologies. Design the innovations. Strengthen Africa&apos;s digital
            sovereignty.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Train specialists able to design, develop, test and maintain digital solutions adapted to
            the needs of organisations, while integrating security, software quality and the advances
            of artificial intelligence. The scientific foundation — mathematics, logic, algorithms,
            data structures, systems, networks and databases — opens a progressive specialisation
            towards software engineering, web and mobile development, AI, data science and
            cybersecurity.
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
                      Design and implement reliable, useful and secure IT solutions.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">General objectives</p>
                      <ul className="space-y-1.5">
                        <li>
                          Acquire the foundations of algorithms, programming and systems.
                        </li>
                        <li>Develop applications and databases.</li>
                        <li>Apply testing, cybersecurity and project management methods.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Specific objectives</p>
                      <ul className="space-y-1.5">
                        <li>Write, document and test programs.</li>
                        <li>Create web interfaces and applications connected to data.</li>
                        <li>
                          Administer development environments and understand networks.
                        </li>
                        <li>
                          Carry out a team IT project and present its technical choices.
                        </li>
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
                        Licence entry: Baccalauréat or an equivalent qualification; a scientific
                        profile is recommended to ease the mathematical and algorithmic learning.
                        Final conditions to be confirmed in the admission procedure of ABS.
                        Master&apos;s: a relevant Licence or equivalent and a record according to the
                        pathway open.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        To be confirmed before publication: official degree title, technologies
                        taught, laboratories, equipment and the exact AI specialisation.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <ShieldCheck className="h-5 w-5 text-cyan-500" /> Teaching methods and assessment
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        Practical laboratory assessments, exercises, tests, projects, examinations and
                        a defence. The criteria notably cover the correct functioning, security, code
                        quality, documentation and the ability to explain.
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
                  <CardTitle className="text-blue-900">
                    Targeted competencies and learning outcomes
                  </CardTitle>
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
                    <CardTitle className="text-blue-900">Progressive specialisation areas</CardTitle>
                    <CardDescription>
                      After a common scientific and technical foundation, specialisation is built
                      progressively according to resources and the validated curriculum.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {axes.map((a) => (
                      <div key={a.titre} className="flex gap-3">
                        <a.icon className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-800">{a.titre}</p>
                          <p className="text-sm text-slate-600">{a.texte}</p>
                        </div>
                      </div>
                    ))}
                    <p className="text-sm text-slate-500 border-t border-slate-200 pt-4">
                      The software tools cited in the curriculum must be installed and accessible to
                      students; their actual availability is verified before publication. The
                      affiliation of a Master&apos;s in Artificial Intelligence, Networks and
                      Telecommunications must be validated before any specialisation promise is
                      published.
                    </p>
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
                      Web or mobile application, API, database, automation, AI prototype or an
                      educational security audit. Code repository, documentation, demonstration and
                      defence.
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
                      Programming workshops, visits or exchanges with IT departments, supervised real
                      projects and an internship in a company or digital service, subject to
                      availability and agreement.
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
              src="/images/documents/v3-image2.jpg"
              alt="ABS students working together on a project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Resources available to students
            </h2>
            <p className="text-slate-700 mb-4">
              Lecturers in programming, systems, networks and data; a computer laboratory with
              computers, network access, development tools and a version-control environment. The
              actual availability of the equipment must be verified before publication.
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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Career paths and professional prospects
          </h2>
          <p className="max-w-3xl text-slate-700 mb-6">
            Indicative prospects, depending on the skills acquired and further specialisation —
            career paths are prospects, not job guarantees:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Junior developer",
              "Web integrator",
              "Support technician",
              "Assistant systems/network administrator",
              "Junior software tester",
              "Entry-level data analyst",
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
            Would you like to learn more about the Computer Science Engineering programme?
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
