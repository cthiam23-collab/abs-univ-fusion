import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Cpu,
  GraduationCap,
  Globe2,
  Languages,
  Mountain,
  Newspaper,
  Sprout,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Programme offering | ABS",
  description: "The programme offering of ABS: five Licence (Bachelor's degree) programmes (3 years, 6 semesters, 180 credits) across five fields and a catalogue of Masters whose pathways are to be confirmed by the Directorate.",
  path: "/academics/programs",
  locale: "en",
})

const filieres = [
  {
    title: "Business Administration",
    intro:
      "Understanding how organisations work, analysing their results and contributing to management, finance, marketing, human resources and business development.",
    duration: "Licence · 3 years · 6 semesters · 180 credits",
    image: "/images/campus/IMG-20250212-WA0003.jpg",
    link: "/programs/business-administration",
    icon: Briefcase,
    modules: [
      "General and analytical accounting",
      "Corporate finance and financial analysis",
      "Fundamental and digital marketing",
      "Entrepreneurship and business plan",
    ],
  },
  {
    title: "International Relations and Affairs",
    intro:
      "Analysing international actors, institutions and power relationships, with an understanding of African realities and openness to global dynamics.",
    duration: "Licence · 3 years · 6 semesters · 180 credits",
    image: "/images/documents/v3-image2.jpg",
    link: "/programs/international-relations",
    icon: Globe2,
    modules: [
      "International law and institutions",
      "Diplomacy and negotiation",
      "Regional integration and African cooperation",
      "Progressive Spanish according to the approved curriculum",
    ],
  },
  {
    title: "Journalism and Communication",
    intro:
      "Collecting, verifying, producing and disseminating news, and designing the communication of organisations, with respect for ethics and information law.",
    duration: "Licence · 3 years · 6 semesters · 180 credits",
    image: "/images/campus/IMG-20250212-WA0016.jpg",
    link: "/programs/journalism-communication",
    icon: Newspaper,
    modules: [
      "Journalistic genres and writing",
      "Fact-checking and professional ethics",
      "Video production and editing, depending on equipment",
      "Web journalism and social media",
    ],
  },
  {
    title: "Computer Engineering",
    intro:
      "Designing, developing, testing and maintaining digital solutions suited to organisations' needs, integrating security, software quality and a gradual introduction to AI.",
    duration: "Licence · 3 years · 6 semesters · 180 credits",
    image: "/images/documents/v3-image3.jpg",
    link: "/programs/engineering/computer-science",
    icon: Cpu,
    modules: [
      "Algorithms and programming",
      "Web development and databases",
      "Operating systems and networks",
      "Cybersecurity and data protection",
    ],
  },
  {
    title: "Geological, Civil and Mining Engineering",
    intro:
      "Combining an understanding of terrain and materials, civil engineering techniques and knowledge of the mining sector, integrating safety and the environment.",
    duration: "Licence · 3 years · 6 semesters · 180 credits",
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    link: "/programs/geological-civil-mining-engineering",
    icon: Mountain,
    modules: [
      "General and structural geology",
      "Surveying and field surveys",
      "Soil mechanics and materials",
      "Mining operations, safety and environment",
    ],
  },
]

const masters = [
  {
    title: "Master in Business Administration",
    description:
      "Deepen management, strategy, governance and the steering of organisations.",
  },
  {
    title: "Master in Banking and Financial Engineering",
    description:
      "Develop skills in financial analysis, financing, banking, risk management and investment decisions.",
  },
  {
    title: "Master in International Relations and Diplomacy",
    description:
      "Deepen the analysis of international relations, negotiation, institutions and diplomatic issues.",
  },
  {
    title: "Master in Sustainable Development and Corporate Social Responsibility (CSR)",
    description:
      "Study sustainability approaches, organisational responsibility, governance and impact measurement.",
  },
  {
    title: "Master in Audit and Management Control",
    description:
      "Develop skills in control, audit, performance steering, risk management and reporting.",
  },
  {
    title: "Master in Digital Marketing",
    description:
      "Deepen digital strategy, digital communication, performance analysis and customer relations.",
  },
  {
    title: "Master in Artificial Intelligence, Networks and Telecommunications",
    description:
      "Explore intelligent systems, digital infrastructures and networks, according to the specialisation actually adopted.",
  },
  {
    title: "Master in International Management",
    description:
      "Deepen strategy, intercultural management, international development and the steering of cross-border activities.",
  },
  {
    title: "Master in Project Management",
    description:
      "Train professionals capable of designing, planning, financing, executing, monitoring and evaluating projects.",
  },
  {
    title: "Master in Quality, Health, Safety and Environment (QHSE)",
    description:
      "Design, deploy and steer integrated management systems for quality, hygiene, occupational health and safety and the environment.",
  },
]

const steps = [
  {
    n: "1",
    title: "Initial contact",
    text: "Talk with the ABS team about the field you are considering, the profiles sought and the places available.",
  },
  {
    n: "2",
    title: "Submitting the file",
    text: "Compile your application file with the documents requested by the administration (file fee: 15 000 FCFA).",
  },
  {
    n: "3",
    title: "File review",
    text: "The file is reviewed according to ABS's official admission requirements in force.",
  },
  {
    n: "4",
    title: "Enrolment",
    text: "Confirmation of the arrangements — timetable, fees and pathway — then finalisation of enrolment.",
  },
]

export default function AcademicProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center text-white">
        <Image
          src="/images/campus/IMG-20250212-WA0022.jpg"
          alt="ABS students on campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900/60" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <span className="inline-block mb-4 rounded-full bg-cyan-400/20 border border-cyan-400/40 px-4 py-1 text-sm font-medium text-cyan-300">
            Licence: 3 years · 6 semesters · 180 credits
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The programme offering of ABS
          </h1>
          <p className="text-lg md:text-xl mb-8 text-slate-200">
            Five Licence (Bachelor's degree) programmes across five fields — sciences and engineering, digital technology, social
            and international sciences, information and communication, management sciences — and a
            catalogue of Masters whose pathways are to be confirmed by the Directorate before being
            listed as open admissions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#formations">
              <Button
                size="lg"
                className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold px-8 py-3 text-lg"
              >
                Explore the programmes <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/admissions">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg"
              >
                Admission requirements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs tabs */}
      <section id="formations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">
            Our programmes
          </h2>
          <p className="text-center text-slate-600 mt-4 max-w-3xl mx-auto mb-12">
            The sheets below form the editorial basis of the web catalogue. Before any enrolment,
            the administration confirms for each intake the pathways actually open, the official
            diploma titles, the entry requirements and the fees.
          </p>

          <Tabs defaultValue="licences" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-10 h-12">
              <TabsTrigger value="licences" className="text-base md:text-lg">
                Licences (5)
              </TabsTrigger>
              <TabsTrigger value="masters" className="text-base md:text-lg">
                Masters (10)
              </TabsTrigger>
            </TabsList>

            {/* Licences */}
            <TabsContent value="licences">
              <div className="space-y-10">
                {filieres.map((f, i) => (
                  <Card
                    key={f.title}
                    className={`overflow-hidden border-slate-200 shadow-sm hover:shadow-xl transition-shadow ${
                      i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    } md:flex`}
                  >
                    <div className="relative md:w-2/5 h-56 md:h-auto">
                      <Image
                        src={f.image}
                        alt={f.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <span className="absolute top-4 left-4 rounded-full bg-blue-900/90 text-white text-xs font-semibold px-3 py-1">
                        {f.duration}
                      </span>
                    </div>
                    <div className="md:w-3/5">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl text-blue-900">
                          <f.icon className="h-6 w-6 text-cyan-500" />
                          {f.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-5">{f.intro}</p>
                        <div className="mb-5">
                          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                            Key courses
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-slate-700">
                            {f.modules.map((m) => (
                              <li key={m} className="flex items-start gap-2">
                                <BookOpen className="h-4 w-4 mt-0.5 text-cyan-500 shrink-0" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-sm text-slate-500 mb-5">
                          Languages: French and English every semester (bilingual progression,{" "}
                          <Link href="/academics/pedagogy" className="text-blue-700 underline">
                            see the Pedagogy page
                          </Link>
                          ).
                        </p>
                        <Link href={f.link}>
                          <Button className="bg-blue-700 hover:bg-blue-900 text-white">
                            Discover the field <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Masters */}
            <TabsContent value="masters">
              <div className="rounded-lg border border-amber-300 bg-amber-50 p-5 mb-8 text-sm text-amber-900">
                The Master pathways listed below correspond to training tracks to be confirmed by the
                Directorate before being listed as open admissions (Master: 2 years, 4 semesters,
                120 credits, only for pathways actually open and validated).
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                {masters.map((m) => (
                  <Link key={m.title} href="/programs/masters" className="group">
                    <div className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-cyan-300 transition-all">
                      <h3 className="font-semibold text-blue-900 leading-snug mb-2">{m.title}</h3>
                      <p className="text-sm text-slate-600">{m.description}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:text-cyan-600">
                        View the Masters catalogue <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Academic framework */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Licence framework",
                text: "3 years, 6 semesters, 180 credits according to the working academic framework. The distribution of teaching units is detailed in the semester curriculum of each field.",
              },
              {
                icon: GraduationCap,
                title: "40 % / 60 % approach",
                text: "Approximately 40 % theoretical input and 60 % practice, projects, tutorials, field work, internships and immersions, subject to the approved curriculum.",
              },
              {
                icon: Languages,
                title: "Working languages",
                text: "English every semester with a French–English bilingual progression; in International Relations and Affairs, progressive Spanish according to the approved scheme.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
                <f.icon className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
            How to apply?
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            A simple admission journey, whose definitive arrangements are specified by the
            administration for each intake.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-xl bg-slate-50 border border-slate-200 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white font-bold mb-4">
                  {s.n}
                </span>
                <h3 className="font-semibold text-blue-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/apply">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-900 text-white px-8 py-3 text-lg">
                Submit my application <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build your study plan?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-200">
            Explore the course catalogue, review the fields in detail or contact the admissions team
            to check the requirements, the documents to provide and the places available.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/academics/course-catalog">
              <Button
                size="lg"
                className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold px-8 py-3 text-lg"
              >
                Course catalogue
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg"
              >
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
