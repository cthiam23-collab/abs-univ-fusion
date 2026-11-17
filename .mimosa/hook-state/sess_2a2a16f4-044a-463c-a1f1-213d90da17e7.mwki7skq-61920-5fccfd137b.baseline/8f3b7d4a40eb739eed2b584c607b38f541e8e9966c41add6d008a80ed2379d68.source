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
  Globe2,
  GraduationCap,
  Landmark,
  Languages,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licence in International Relations and Affairs | ABS",
  description:
    "Licence in International Relations and Affairs: geopolitics, diplomacy, cooperation, languages. Indicative fee 1 250 000 FCFA (written confirmation 2026–2027 required).",
  path: "/programs/international-relations",
  locale: "en",
})

const competences = [
  {
    code: "RAI01",
    competence: "Analyse an international context",
    resultat: "Present the actors, interests and stakes of a situation.",
  },
  {
    code: "RAI02",
    competence: "Research and verify information",
    resultat: "Compare sources and distinguish facts from opinions.",
  },
  {
    code: "RAI03",
    competence: "Write notes and syntheses",
    resultat: "Produce a structured, sourced and argued note.",
  },
  {
    code: "RAI04",
    competence: "Understand the institutions",
    resultat: "Describe the role of organisations and cooperation frameworks.",
  },
  {
    code: "RAI05",
    competence: "Communicate in an intercultural context",
    resultat: "Adapt a message to a given audience and context.",
  },
  {
    code: "RAI06",
    competence: "Mobilise languages",
    resultat: "Present an analysis in French and in English; progress in Spanish.",
  },
]

const enseignements = [
  "Introduction to international relations",
  "Contemporary history and geopolitics",
  "International law and institutions",
  "Diplomacy and negotiation",
  "International political economy",
  "Regional integration and African cooperation",
  "Research methodology and source analysis",
  "Institutional communication and note writing",
  "English in every semester",
  "Progressive Spanish at each stage provided for in the validated curriculum",
  "Personal development, simulations and projects",
  "Immersions and institutional visits according to agreements",
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
    value:
      "French and English in every semester; progressive Spanish for this field (volumes and levels to be validated)",
  },
  {
    label: "Indicative annual fee",
    value: "1 250 000 FCFA/year (quoted fee, written confirmation required for 2026–2027)",
  },
  {
    label: "Quoted additional fees",
    value:
      "Application file: 15 000 FCFA; Licence defence: 80 000 FCFA — amounts to be confirmed for 2026–2027",
  },
  { label: "Contact", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

const axes = [
  {
    icon: Globe2,
    titre: "Geopolitics and strategic analysis",
    texte:
      "Analyse the interactions between states, international organisations, regional institutions, companies and civil-society actors.",
  },
  {
    icon: Landmark,
    titre: "African integration and cooperation",
    texte:
      "African Union, ECOWAS and regional organisations; African realities, regional dynamics and the strategic stakes of the Sahel.",
  },
  {
    icon: Languages,
    titre: "Languages and intercultural communication",
    texte:
      "English in every semester and progressive Spanish: research, writing, negotiation and communication in complex environments.",
  },
]

export default function InternationalRelationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Field 3 — International relations and affairs
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence in International Relations and Affairs
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Understand the world. Analyse power dynamics. Carry Africa&apos;s ambitions forward.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Give students the analytical tools of international relations, institutions, diplomacy,
            cooperation and geopolitical stakes, with an understanding of African realities and an
            openness to global dynamics. Particular attention is paid to regional dynamics, to
            relations between the countries of the continent and to the strategic stakes of the
            Sahel.
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
                      Train profiles able to analyse international issues, prepare files and
                      contribute to cooperation, communication and institutional relations activities.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">General objectives</p>
                      <ul className="space-y-1.5">
                        <li>Understand international actors, institutions and power dynamics.</li>
                        <li>
                          Develop documentary research, political analysis and note writing.
                        </li>
                        <li>Strengthen linguistic and intercultural skills.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Specific objectives</p>
                      <ul className="space-y-1.5">
                        <li>
                          Analyse an international event, distinguishing facts, sources and
                          interpretations.
                        </li>
                        <li>Write a synthesis note or a country file.</li>
                        <li>Prepare a presentation or a negotiation simulation.</li>
                        <li>
                          Communicate in French and in English and progress in Spanish according to
                          the validated scheme.
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
                        Licence entry: Baccalauréat or an equivalent qualification, according to the
                        official conditions of ABS. Interest in current affairs, reading, analysis and
                        languages is recommended. Master&apos;s: a relevant Licence or equivalent,
                        according to the pathway actually open.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        Language scheme envisaged: French and English, with progressive Spanish for
                        this field. Volumes, levels and assessment methods to be validated.
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
                        Essays, synthesis notes, presentations, research files, simulations,
                        examinations and an internship report. The criteria on source quality and
                        reasoning are explicit.
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
                    harmonised before publication as final data. The Spanish progression — volumes,
                    credits and assessments — is to be specified in the curriculum.
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
                    <CardTitle className="text-blue-900">Key strands of the programme</CardTitle>
                    <CardDescription>
                      A reading of international relations grounded in African realities.
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
                      Diplomatic or international partnerships are displayed only once they have been
                      formalised. The language courses specify the target levels and the hours per
                      semester.
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
                      Country file, public policy note, crisis analysis, diplomatic simulation,
                      student conference or regional cooperation study. Documented report and oral
                      presentation.
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
                      Institutional visits and meetings, conferences, simulations, projects with
                      associations or cooperation structures when agreements are concluded; an
                      internship according to agreement.
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
              Lecturers in international relations, law, economics and languages; access to a library
              and digital resources, press and institutional sources. Diplomatic or international
              partnerships are displayed only once they have been formalised.
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
            Indicative prospects, subject to experience and to each employer&apos;s recruitment
            conditions — career paths are prospects, not job guarantees:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Cooperation project assistant",
              "Junior intelligence monitoring officer",
              "Institutional relations assistant",
              "Entry-level writer/analyst",
              "Support to NGOs and programmes",
            ].map((d) => (
              <Badge key={d} variant="secondary" className="text-sm px-3 py-1">
                {d}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500 max-w-3xl">
            Relevant sectors (indicative): public administrations, cooperation services, regional or
            international organisations, NGOs, development projects, institutional relations,
            analysis firms and diplomatic support functions, according to the competitive examinations
            and criteria set by each employer.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Would you like to learn more about the International Relations and Affairs programme?
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
