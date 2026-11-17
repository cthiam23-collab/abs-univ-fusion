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
  GraduationCap,
  HardHat,
  Layers,
  Mail,
  MapPin,
  Mountain,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licence in Geological, Civil and Mining Engineering | ABS",
  description:
    "Licence in Geological, Civil and Mining Engineering: geology, surveying, civil engineering, mines, safety. Indicative fee 1 350 000 FCFA (written confirmation 2026–2027 required).",
  path: "/programs/geological-civil-mining-engineering",
  locale: "en",
})

const competences = [
  {
    code: "GCM01",
    competence: "Observe and describe terrain",
    resultat: "Collect observations and characterise materials.",
  },
  {
    code: "GCM02",
    competence: "Map and measure",
    resultat: "Organise survey data and produce a readable representation.",
  },
  {
    code: "GCM03",
    competence: "Understand materials and structures",
    resultat: "Explain the main properties and constraints.",
  },
  {
    code: "GCM04",
    competence: "Contribute to technical studies",
    resultat: "Read plans and apply calculation methods suited to the level.",
  },
  {
    code: "GCM05",
    competence: "Integrate safety and environment",
    resultat: "Identify risks and propose prevention measures.",
  },
  {
    code: "GCM06",
    competence: "Communicate results",
    resultat: "Write a report and present technical data.",
  },
]

const enseignements = [
  "Applied mathematics and physics",
  "General chemistry and materials",
  "General and structural geology",
  "Mineralogy, petrography and geological mapping",
  "Surveying and field surveys",
  "Soil mechanics and construction materials",
  "Hydrology and geotechnics according to the curriculum",
  "Technical drawing and design software",
  "GIS: QGIS and mapping tools according to resources",
  "Introduction to professional tools: AutoCAD Civil 3D, Surpac according to availability",
  "Mining operations, safety and environment",
  "Scientific English, projects and field trips",
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
    value: "1 350 000 FCFA/year (quoted fee, written confirmation required for 2026–2027)",
  },
  {
    label: "Quoted additional fees",
    value: "Application file: 15 000 FCFA; Licence defence: 80 000 FCFA — amounts to be confirmed for 2026–2027",
  },
  { label: "Contact", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

export default function GeologicalCivilMiningEngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Field 1 — Geological, civil and mining engineering
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence in Geological, Civil and Mining Engineering
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Explore the resources. Build the infrastructure. Sustainably develop Africa&apos;s
            potential.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Combine an understanding of terrain and materials, civil engineering techniques and
            knowledge of the mining sector to train professionals attentive to safety, to the quality
            of structures and to the responsible management of natural resources. Africa possesses a
            considerable geological and mining heritage and major infrastructure needs: this programme
            targets the scientific and technical skills able to support these development projects.
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
                      Train higher technicians and entry-level professionals able to take part in the
                      study of terrain, the preparation of projects and the monitoring of geological,
                      civil and mining activities.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">General objectives</p>
                      <ul className="space-y-1.5">
                        <li>
                          Master the scientific fundamentals needed to study soil and materials.
                        </li>
                        <li>
                          Understand the methods of surveying, mapping, design and monitoring of
                          structures.
                        </li>
                        <li>Integrate safety, environmental and quality rules.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Specific objectives</p>
                      <ul className="space-y-1.5">
                        <li>
                          Describe geological formations and interpret field data.
                        </li>
                        <li>Carry out surveys and produce base maps or plans.</li>
                        <li>
                          Contribute to the preparation and monitoring of civil or mining works.
                        </li>
                        <li>
                          Use specialised software when it is available and taught.
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
                        Licence entry: a scientific Baccalauréat or an equivalent qualification is
                        recommended, subject to the official admission conditions. Master&apos;s
                        entry: a relevant Licence in geology, civil engineering, mining or a related
                        field, an academic record and a pathway actually open.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        To be confirmed before publication: disciplinary scope, software and equipment
                        actually accessible, field trips and any professional requirements.
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
                        Written tests, practical-work reports, maps/plans, case studies, field
                        assessments, examinations, a project and an internship. Validation according to
                        the approved institutional rules.
                      </p>
                      <p className="mt-3">
                        Targeted teaching approach: approximately 40 % theoretical input and 60 %
                        practice, projects, tutorials, field work, internships and immersions, subject
                        to the approved curriculum. Field trips comply with safety instructions and
                        protective equipment defined in the curriculum.
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
                        <TableHead className="w-24">Code</TableHead>
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
                    harmonised before publication as final data. The Master&apos;s curricula of the
                    geological, civil and mining field must be validated before enrolments open.
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
                    <p className="mt-4 text-sm text-slate-500 border-t border-slate-200 pt-4">
                      Software such as QGIS, AutoCAD Civil 3D and Surpac may be used according to the
                      teaching objectives and the equipment available.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Three connected strands</CardTitle>
                    <CardDescription>
                      A programme at the crossroads of Earth sciences, structural engineering and
                      mineral resources.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <Mountain className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Geological strand</p>
                        <p className="text-sm text-slate-600">
                          Observe and characterise terrain, interpret geological and geotechnical
                          data, carry out mapping.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <HardHat className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Civil engineering strand</p>
                        <p className="text-sm text-slate-600">
                          Materials, soil mechanics, design and monitoring of structures, plans and
                          basic calculations.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Layers className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Mining strand</p>
                        <p className="text-sm text-slate-600">
                          Exploration and exploitation of mineral resources, safety, environment and
                          site rehabilitation.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 border-t border-slate-200 pt-4">
                      Particular attention is paid to safety, to the responsible management of
                      resources, to reducing environmental impacts and to taking account of the needs
                      of communities.
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
                      Field notebook, geological mapping, analysis of a material, a geotechnical case
                      study or a mini site-monitoring project. Presentation of results and technical
                      report.
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
                      Supervised field trips, visits to construction sites, geological sites and mining
                      companies where agreements and safety allow; a professional internship with a
                      supervisor and a report.
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
              src="/images/campus/IMG-20250212-WA0009.jpg"
              alt="Students of the Geological, Civil and Mining Engineering field on the ABS campus"
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
              Lecturers in geology, surveying, materials and civil engineering; measuring instruments,
              personal protective equipment, cartographic resources and software according to licences
              and availability. No laboratory or specific partnership is claimed without verification.
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
            Indicative prospects, subject to skills, certifications and the requirements of each
            employer — career paths are prospects, not job guarantees:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Assistant geologist",
              "Field technician",
              "Assistant surveyor",
              "Materials technician",
              "Site assistant",
              "Geotechnical or mining studies assistant",
            ].map((d) => (
              <Badge key={d} variant="secondary" className="text-sm px-3 py-1">
                {d}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500 max-w-3xl">
            Relevant sectors (indicative): engineering consultancies, construction companies, mining
            companies, laboratories, mapping agencies, technical services and environmental and
            geotechnical organisations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Would you like to learn more about the Geological, Civil and Mining Engineering programme?
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
