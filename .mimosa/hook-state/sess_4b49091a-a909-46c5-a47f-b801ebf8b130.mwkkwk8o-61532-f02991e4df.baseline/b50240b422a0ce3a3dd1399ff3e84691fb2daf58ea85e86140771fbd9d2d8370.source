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
  Camera,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Mail,
  MapPin,
  Megaphone,
  Mic,
  Newspaper,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licence in Journalism-Communication | ABS",
  description:
    "Licence in Journalism-Communication: fact-checking, writing, audiovisual production, communication strategy. Indicative fee 1 250 000 FCFA (written confirmation 2026–2027 required).",
  path: "/programs/journalism-communication",
  locale: "en",
})

const competences = [
  {
    code: "JC01",
    competence: "Collect and verify information",
    resultat: "Cross-check sources and document a piece of information.",
  },
  {
    code: "JC02",
    competence: "Write for different formats",
    resultat: "Produce a clear, structured text suited to the audience.",
  },
  {
    code: "JC03",
    competence: "Prepare an interview",
    resultat: "Design questions, conduct the interview and report it faithfully.",
  },
  {
    code: "JC04",
    competence: "Produce multimedia content",
    resultat: "Prepare photo, audio, video or web content according to available means.",
  },
  {
    code: "JC05",
    competence: "Design a communication plan",
    resultat: "Define an audience, a message, media and indicators.",
  },
  {
    code: "JC06",
    competence: "Apply professional ethics",
    resultat: "Respect verification, privacy, image rights and professional standards.",
  },
]

const enseignements = [
  "Written and oral expression techniques",
  "Journalistic genres and writing",
  "Research methodology and fact-checking",
  "Media law and professional ethics",
  "Institutional communication and press relations",
  "Communication strategy and media marketing",
  "Photography and sound recording",
  "Video production and editing according to equipment",
  "Web journalism and social networks",
  "Campaign design and audience measurement",
  "Professional English in every semester",
  "Editorial projects, personal development and internship",
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
    icon: Newspaper,
    titre: "Journalism",
    texte:
      "Research, verify, analyse and disseminate information; reporting, interviewing and digital journalism.",
  },
  {
    icon: Megaphone,
    titre: "Organisational communication",
    texte:
      "Design communication strategies suited to objectives and audiences: institutional, press relations, digital.",
  },
  {
    icon: Camera,
    titre: "Content production",
    texte:
      "Multimedia productions, editorial projects and hands-on scenarios; fact-checking, editorial responsibility and the fight against disinformation.",
  },
  {
    icon: Mic,
    titre: "Amplifying African voices",
    texte:
      "Tell the realities of the continent with accuracy, highlight its successes, shed light on its challenges and contribute to its influence.",
  },
]

export default function JournalismCommunicationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Field 4 — Journalism and communication
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence in Journalism-Communication
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Inform with rigour. Communicate with impact. Make African voices heard and shine.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Develop the skills needed to collect, verify, produce and disseminate information as well
            as to manage the communication of organisations, in an environment shaped by digital
            technology, the image and new media practices.
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
                      Train profiles able to produce reliable, clear content suited to different
                      media, in accordance with the ethics and responsibilities of communication.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">General objectives</p>
                      <ul className="space-y-1.5">
                        <li>
                          Master the basics of journalistic writing and communication.
                        </li>
                        <li>Get started with audio, video, photo and digital production.</li>
                        <li>
                          Understand ethics, information law and communication strategy.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Specific objectives</p>
                      <ul className="space-y-1.5">
                        <li>Write an article, a press release or a press kit.</li>
                        <li>Prepare an interview and verify information.</li>
                        <li>Produce an audiovisual content suited to a format.</li>
                        <li>
                          Design a communication action and assess its results.
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
                        official conditions of ABS. Curiosity, writing skills, interest in current
                        affairs and aptitude for teamwork are recommended. Master&apos;s: a relevant
                        Licence or equivalent, according to the pathway open.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        To be confirmed before publication: production equipment, studio, software and
                        arrangements for completing projects. No distinct Master&apos;s is displayed
                        for this field without a formal curriculum and opening decision.
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
                        Articles, files, audiovisual productions, practical work, examinations, a
                        portfolio, an editorial project and an internship report. Practical
                        assessments come with transparent criteria.
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
                    <p className="mt-4 text-sm text-slate-500 border-t border-slate-200 pt-4">
                      Each syllabus specifies the expected formats, the available tools, the editorial
                      criteria, the image-rights rules and the assessment methods. The productions must
                      comply with the ethical framework.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Key strands of the programme</CardTitle>
                    <CardDescription>
                      From verification journalism to communication strategy.
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
                      School newspaper, podcast, report, interview, mini-documentary, institutional
                      campaign or editorial strategy. Deliverables: script, final content,
                      verification sheet and presentation.
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
                      Visits to media outlets and communication departments, supervised reporting
                      exercises, participation in events and an internship in a newsroom, agency or
                      communication department where possible.
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
              src="/images/campus/IMG-20250212-WA0016.jpg"
              alt="Students of the Journalism and communication field on the ABS campus"
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
              Lecturers in journalism, communication and media; computers, connectivity, camera/video
              equipment, microphones and available software. No studio or equipment is presented as
              guaranteed without a confirmed physical inventory.
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
            Indicative prospects, depending on the portfolio and experience of each graduate —
            career paths are prospects, not job guarantees:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Communication assistant",
              "Junior writer",
              "Entry-level journalist",
              "Community manager",
              "Press relations assistant",
              "Content producer",
              "Junior communication officer",
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
            Would you like to learn more about the Journalism-Communication programme?
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
