import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Award,
  Compass,
  Globe2,
  Landmark,
  Network,
  Newspaper,
  Briefcase,
  ShieldCheck,
  Users,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "About us | ABS — African Business School",
  description: "Who are we? ABS — African Business School, a private pan-African and multidisciplinary higher education institution based in Hamdallaye ACI 2000, Bamako, since 2016.",
  path: "/about",
  locale: "en",
})

// The five main disciplinary fields (source: V3 §4.1 and the institutional presentation).
const domains = [
  {
    icon: Landmark,
    title: "Sciences and engineering",
    description: "Geology, geotechnics, civil engineering.",
    href: "/programs/geological-civil-mining-engineering",
  },
  {
    icon: Network,
    title: "Digital technology and technologies",
    description:
      "Software development, systems, data, networks, cybersecurity and a gradual introduction to artificial intelligence.",
    href: "/programs/engineering/computer-science",
  },
  {
    icon: Globe2,
    title: "Social and international sciences",
    description:
      "International relations, diplomacy, cooperation, institutions, geopolitical issues and intercultural communication.",
    href: "/programs/international-relations",
  },
  {
    icon: Newspaper,
    title: "Information, media and communication",
    description:
      "Journalism, writing, content production, institutional communication and digital media.",
    href: "/programs/journalism-communication",
  },
  {
    icon: Briefcase,
    title: "Management sciences",
    description:
      "Business administration, finance, marketing, human resources, audit, management control, logistics and entrepreneurship, according to the options formally adopted.",
    href: "/programs/business-administration",
  },
]

const aboutLinks = [
  {
    icon: Compass,
    title: "Our mission and vision",
    description:
      "Training professionals capable of understanding the transformations of their environment and providing useful responses to them.",
    href: "/about/mission",
  },
  {
    icon: Award,
    title: "Our values",
    description:
      "Excellence, responsibility, openness, innovation, African engagement and team spirit.",
    href: "/about/values",
  },
  {
    icon: Users,
    title: "Leadership and governance",
    description:
      "The institutional organisation of ABS: Directorate General, Rectorate, Directorate of Studies and services.",
    href: "/about/governance",
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero: Who we are */}
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
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Who are we?</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            A multidisciplinary institution: sciences, engineering, digital technology, social and
            international sciences, communication and management
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            ABS — African Business School is a private higher education institution based in
            Bamako, Mali. Since 2016, ABS has pursued a pan-African ambition: contributing to the
            training of professionals capable of understanding the transformations of their
            environment and providing useful responses to them.
          </p>
        </div>
      </section>

      {/* Institutional presentation */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-white p-8 shadow-xl">
            <Image
              src="/images/abs-logo.png"
              alt="Official logo of ABS — African Business School"
              width={480}
              height={294}
              className="h-auto w-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">The identity of ABS</h2>
            <p className="mt-5 leading-7 text-slate-600">
              Founded in 2016 and located in Hamdallaye ACI 2000, Bamako, the institution pursues an
              ambition: contributing to the training of professionals capable of meeting the needs of
              organisations, businesses and African societies, while understanding international
              dynamics.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              ABS has developed a pan-African identity and a professionally oriented approach. It
              seeks to make training a space where academic knowledge meets the realities of the
              field, where students learn to analyse, to propose, to collaborate and to act with
              responsibility.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Its identity is multidisciplinary. Alongside management sciences, ABS has developed
              fields related to the sciences and engineering, digital technology, international
              relations, as well as journalism and communication.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              The word “Business” in the name African Business School does not mean that ABS
              is exclusively a business school. It expresses an ambition of action-oriented training,
              problem-solving, organisation, innovation and value creation.
            </p>
          </div>
        </div>
      </section>

      {/* The five main fields of study */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Our five main fields of study</h2>
            <p className="mt-3 leading-7 text-slate-600">
              The diversity of these fields enables ABS to address contemporary challenges from
              several angles: understanding territories and resources, designing technical solutions,
              mastering digital tools, analysing the relationships between societies and
              institutions, producing reliable information, communicating with impact and running
              organisations responsibly.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {domains.map(({ icon: Icon, title, description, href }) => (
              <Link key={title} href={href} className="group">
                <Card className="h-full border-slate-200 transition-shadow group-hover:shadow-lg">
                  <CardHeader>
                    <span className="mb-2 inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                      <Icon className="size-6 text-cyan-700" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-slate-600">{description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                      Explore this field
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Educational approach */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Our approach</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Bringing academic knowledge closer to practical applications
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              ABS seeks to bring academic knowledge closer to practical applications, to encourage
              rigour, international openness, responsibility and engagement in the service of African
              development. Its educational approach prioritises the interplay between theoretical
              foundations and their concrete application, following a reference orientation of 40 %
              theory and 60 % practice.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Case studies, practical work, projects and professional simulations",
                "Transversal skills: English, digital culture, leadership, professional ethics",
                "Training that is open to companies, institutions and international issues",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium text-slate-700">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-cyan-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm leading-6 text-slate-600">
              The programmes and specialisations displayed on the website are those confirmed for the
              relevant intake. Information concerning authorisations, accreditations, recognitions
              or certifications is communicated solely on the basis of official documents in force;
              for any further details, please contact the ABS administration.
            </p>
          </div>

          {/* Links to institutional pages */}
          <div className="space-y-4">
            {aboutLinks.map(({ icon: Icon, title, description, href }) => (
              <Link key={href} href={href} className="group block">
                <Card className="border-slate-200 transition-shadow group-hover:shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <Icon className="size-5 text-blue-700" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
              <Link href="/about/history">
                Discover our journey <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Join the ABS community</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Discover our fields of study, meet our teams and start your enrolment process.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/academics/programs">Explore the programmes</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Contact the administration</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
