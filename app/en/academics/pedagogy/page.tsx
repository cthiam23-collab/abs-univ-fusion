import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, BookOpen, Briefcase, Globe2, Languages, Laptop, Target, Users } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Educational approach | ABS",
  description: "Discover ABS's educational approach: projects, practice, transversal skills, languages and professional readiness.",
  path: "/academics/pedagogy",
  locale: "en",
})

const approches = [
  {
    icon: Target,
    title: "Learning by understanding and by doing",
    text: "ABS's teaching aims to connect fundamental knowledge with concrete situations. Depending on the programme and the resources available, learning may draw on case studies, exercises, tutorials, projects, presentations, visits and professional immersions. The goal is to advance the student in analysis, method, communication and the ability to produce a well-argued piece of work.",
  },
  {
    icon: Briefcase,
    title: "Projects as a common thread",
    text: "Projects enable students to mobilise several skills around a problem or a deliverable: a study, a file, a prototype, an action plan, a presentation or a report. Objectives, assessment criteria and deadlines are explained at the start of each module.",
  },
  {
    icon: Globe2,
    title: "Languages and international openness",
    text: "English is conceived as a transversal skill to be developed progressively throughout the programmes. It combines comprehension, expression, professional vocabulary and hands-on scenarios. For International Relations and Affairs, Spanish is considered as a complementary language, subject to validation of the teaching hours and arrangements. Any announcement of TOEIC, IELTS or other certification is limited to the schemes actually available and authorised.",
  },
  {
    icon: Laptop,
    title: "Digital skills and artificial intelligence",
    text: "Digital skills are playing a growing role in the professions. ABS promotes the reasoned use of digital tools and a gradual introduction to artificial intelligence, taking into account students' level, the needs of each field, data protection, critical thinking and academic integrity.",
  },
  {
    icon: Users,
    title: "Personal development and professional readiness",
    text: "Training also includes dimensions essential to professional life: public speaking, time management, teamwork, organisation, interpersonal skills, leading meetings, stress management and preparation for employment. The exact activities depend on the academic calendar and are announced once confirmed.",
  },
  {
    icon: BookOpen,
    title: "Internships and immersions",
    text: "Internships, visits and immersions are opportunities to better understand the professions and working environments. Their schedule, arrangements and mandatory or optional nature are specified in the official curriculum of each programme.",
  },
]

const dispositifLinguistique = [
  {
    niveau: "Licence 1",
    contenu:
      "Consolidation of grammatical and lexical foundations, oral and written comprehension, everyday expression and the acquisition of academic vocabulary.",
  },
  {
    niveau: "Licence 2",
    contenu:
      "Development of professional communication, oral presentations, writing and the specialised vocabulary of each field.",
  },
  {
    niveau: "Licence 3",
    contenu:
      "Use of English in projects, case studies, presentations, reports and some viva voce defences.",
  },
  {
    niveau: "Master 1 and Master 2",
    contenu:
      "Strengthening professional and academic English, analysis of specialised documents, presentation of research work, negotiation and communication in an international environment.",
  },
]

const soutenances = [
  "Defences in French for academic projects and work;",
  "Presentations or defences in English, depending on language level and pathway;",
  "Bilingual defences, with a presentation in one language and a question-and-answer sequence in the other;",
  "Executive summaries, abstracts or presentation materials in English;",
  "Simulations of meetings, negotiations, conferences and job interviews in French and English.",
]

const anglaisParSpecialite = [
  { domaine: "Engineering (geological, civil and mining)", angle: "Scientific and technical English" },
  { domaine: "Business administration", angle: "Business English" },
  { domaine: "International relations and affairs", angle: "Diplomatic English" },
  { domaine: "Journalism and Communication", angle: "Media English" },
  { domaine: "Computer engineering", angle: "English applied to digital technologies" },
]

export default function PedagogyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="ABS students on the university campus"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Pedagogy</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Learning by understanding and by doing
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Connecting fundamental knowledge with concrete situations: case studies, projects,
            presentations, immersions and hands-on professional scenarios, with a reference
            orientation of{" "}
            <strong className="text-cyan-300">40&nbsp;% theory and 60&nbsp;% practice</strong>.
          </p>
        </div>
      </section>

      {/* The six dimensions of the educational approach */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Our educational approach</h2>
          <p className="mt-3 leading-7 text-slate-600">
            A reference orientation of 40&nbsp;% theoretical input and 60&nbsp;% practice, projects,
            tutorials, field work, internships and immersions, subject to the approved curriculum of
            each programme.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {approches.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardContent className="p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Icon className="size-6 text-cyan-700" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* French-English bilingualism */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="flex items-center gap-2 font-semibold uppercase tracking-[0.2em] text-blue-700">
                <Languages className="size-5" /> Bilingualism
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                French-English bilingualism, a strategic pillar of training
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                At ABS — African Business School, mastering French and English is a
                fundamental strand of every student's academic and professional journey. In an
                African environment characterised by linguistic diversity and the intensification of
                international exchanges, ABS aims to graduate professionals able to communicate, to
                negotiate, to present their ideas and to exercise their responsibilities in both
                languages.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Learning English is not limited to the class hours devoted to it: it is conceived as
                a skill progressively mobilised in courses, projects, research work, oral
                presentations, immersion activities and assessments.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Language content is tailored to the specialities — scientific and technical English
                in engineering, business English in administration, diplomatic English in
                international relations, media English in journalism and communication, and English
                applied to digital technologies in computer engineering.
              </p>
            </div>
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-7">
                <h3 className="text-lg font-semibold text-slate-900">
                  A structured progression, from the Licence (Bachelor's degree) to the Master
                </h3>
                <Accordion type="single" collapsible className="mt-4">
                  {dispositifLinguistique.map((item, index) => (
                    <AccordionItem key={item.niveau} value={`niveau-${index}`}>
                      <AccordionTrigger className="text-sm font-semibold text-slate-800">{item.niveau}</AccordionTrigger>
                      <AccordionContent className="text-sm leading-7 text-slate-600">{item.contenu}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  This progression enables every student to develop measurable language skills and to
                  prepare, according to their level and pathway, for international certifications
                  such as TOEIC or IELTS.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Defences + English by speciality */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Defences in French and in English</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Viva voce defences are a major instrument of professional readiness and of assessing
              communication skills. At ABS, they are designed as opportunities to structure an
              argument, to present results, to answer a jury's questions and to defend one's
              proposals before an audience. Assessment arrangements may include:
            </p>
            <ul className="mt-5 space-y-3">
              {soutenances.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              The precise arrangements are defined in the curricula and assessment regulations. The
              progression is adapted to the level of study so that the language requirement serves as
              a learning objective rather than an unjustified obstacle to assessing disciplinary
              knowledge.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">English tailored to each speciality</h2>
            <p className="mt-4 leading-7 text-slate-600">
              To bring bilingualism to life in practice, ABS encourages the progressive use of French
              and English in the teaching activities of all fields: documentary reading, bilingual
              presentations, international case studies, literature research, debates and
              professional simulations.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-5 py-3">Field</th>
                    <th className="px-5 py-3">English</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {anglaisParSpecialite.map((row) => (
                    <tr key={row.domaine}>
                      <td className="px-5 py-3 font-medium text-slate-800">{row.domaine}</td>
                      <td className="px-5 py-3 text-slate-600">{row.angle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Immersions and personal development */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image
                src="/images/documents/v3-image2.jpg"
                alt="ABS students working together on a project"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Immersions, projects and personal development
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Immersions and field trips extend learning by confronting students with the realities
                of companies, institutions, laboratories, construction sites, media, international
                organisations and other professional environments. Where conditions allow, these
                activities include exercises in English: presenting an organisation, interviewing a
                professional, gathering information, giving an oral report or writing a bilingual
                summary.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                ABS's educational model combines the mastery of knowledge with the development of
                personality, a sense of responsibility and initiative. Workshops on leadership,
                public speaking, negotiation, entrepreneurship, professional ethics, project
                management and citizenship are organised in French and, progressively, in English.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/academics/programs">
                    Discover our programmes <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  <Link href="/admissions">Start my application</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">A coherent whole in the service of success</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-blue-100">
            At ABS, French-English bilingualism, applied projects, defences, immersions, field trips
            and personal development form a coherent whole in the service of academic success and
            employability. Educating graduates who are competent in their speciality, able to work in
            French and in English, to defend their ideas with confidence and to carry a pan-African
            vision of development.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">Apply now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link href="/contact">Talk to the ABS team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
