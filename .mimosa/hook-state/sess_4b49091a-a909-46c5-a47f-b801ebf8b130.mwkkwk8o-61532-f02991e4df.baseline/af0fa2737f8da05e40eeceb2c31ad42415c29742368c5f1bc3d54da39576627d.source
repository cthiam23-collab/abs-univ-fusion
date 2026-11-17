import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BookMarked,
  Building2,
  Calculator,
  FileText,
  GraduationCap,
  Landmark,
  Megaphone,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  UserCog,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Leadership and governance | ABS",
  description: "The governance of African Business School SARL: Statutory Manager, Rector, Director of Studies, Registrar and services, within the framework of the ABS 2035 Strategic Plan.",
  path: "/about/governance",
  locale: "en",
})

// Strategic missions of the Statutory Manager (source: job description ABS/GOUV/FP-001, selection).
const ceoMissions = [
  {
    icon: Target,
    title: "Leadership and institutional strategy",
    points: [
      "Define the vision and strategic directions of ABS",
      "Design and drive the ABS 2035 Strategic Plan",
      "Position ABS as a leading pan-African institution",
      "Ensure coherence between strategic ambitions and available resources",
    ],
  },
  {
    icon: Scale,
    title: "Legal representation and governance",
    points: [
      "Provide the executive direction of the company and represent it legally before third parties",
      "Sign contracts and agreements falling within her powers, in accordance with the AUSCGIE and the articles of association",
      "Ensure the regularity of legal, administrative and institutional formalities",
    ],
  },
  {
    icon: GraduationCap,
    title: "Academic development and quality",
    points: [
      "Define the general directions of academic development, in coordination with the Rectorate",
      "Oversee the evolution of the programme offering and support the continuous improvement of teaching quality",
      "Encourage academic and scientific partnerships",
    ],
  },
  {
    icon: Calculator,
    title: "Financial and economic management",
    points: [
      "Oversee the preparation of the annual budget and monitor the cash position",
      "Review financial statements and accounting reports",
      "Ensure control of expenses and the separation of authorisation, payment, recording and control functions",
    ],
  },
  {
    icon: Building2,
    title: "Partnerships, entrepreneurship and innovation",
    points: [
      "Develop strategic partnerships and relations with companies",
      "Support the Career & Corporate Relations Center and grow ABS Startup Lab",
      "Develop relations with pan-African and international networks",
    ],
  },
  {
    icon: Sparkles,
    title: "Digital transformation and sustainable development",
    points: [
      "Oversee digital transformation and the digitalisation of administrative processes",
      "Promote the responsible use of artificial intelligence",
      "Develop projects related to the green university and support initiatives contributing to the Sustainable Development Goals",
    ],
  },
]

// Governance chain (reporting lines from the job descriptions).
const governanceChain = [
  {
    icon: Landmark,
    title: "Director General",
    subtitle: "Statutory Manager — Managing Director & CEO",
    description:
      "First executive authority of the company. She provides general management, legal representation, strategic steering and operational management, and supervises all directorates, departments and services.",
    rattachement: "Top of the chain: appointed under the articles of association and the decisions of the partners",
  },
  {
    icon: GraduationCap,
    title: "Rector",
    subtitle: "First academic authority",
    description:
      "He guarantees the quality, relevance and academic performance of the institution, defines the main academic directions in line with the ABS 2035 Strategic Plan and supervises the Director of Studies as well as the heads of fields.",
    rattachement: "Hierarchical reporting line: Director General",
  },
  {
    icon: BookMarked,
    title: "Director of Studies",
    subtitle: "Academic organisation",
    description:
      "Operational manager for the organisation, coordination and monitoring of teaching activities. He implements the academic directions defined by the Rector and serves as the operational link with heads of fields, teachers, the registrar's office and students.",
    rattachement: "Hierarchical reporting line: Rector · Institutional reporting line: Directorate General",
  },
  {
    icon: UserCog,
    title: "Registrar",
    subtitle: "Academic administration and enrolment",
    description:
      "Responsible for academic administration and the centralised management of enrolment. Guarantor of the administrative traceability of each student's journey, from application and admission to graduation.",
    rattachement: "Hierarchical reporting line: Directorate General · Functional reporting line: Rectorate",
  },
  {
    icon: Megaphone,
    title: "Marketing and Communication Manager",
    subtitle: "Image, visibility and recruitment",
    description:
      "Designs and implements the institution's marketing and communication strategy, develops its visibility and leads student recruitment campaigns.",
    rattachement: "Hierarchical reporting line: Directorate General",
  },
  {
    icon: Calculator,
    title: "Accounting, cashier and administrative services",
    subtitle: "Administrative and financial management",
    description:
      "The Accountant ensures reliable and compliant bookkeeping under the reporting framework applicable in Mali (revised SYSCOHADA); the Cashier guarantees secure and traceable handling of authorised receipts and disbursements.",
    rattachement: "Hierarchical reporting line: Directorate General",
  },
]

// Services supervised by the Directorate General (job description of the Statutory Manager, §7).
const supervisedFunctions = [
  { icon: GraduationCap, name: "Rectorate", domain: "Academic and scientific direction" },
  { icon: BookMarked, name: "Directorate of Studies", domain: "Academic organisation" },
  { icon: UserCog, name: "Registrar", domain: "Academic administration" },
  { icon: Calculator, name: "Accounting & Finance", domain: "Accounting and financial management" },
  { icon: Building2, name: "Cashier", domain: "Authorised receipts and disbursements" },
  { icon: Megaphone, name: "Marketing & Communication", domain: "Image, visibility and recruitment" },
  { icon: Building2, name: "Career & Corporate Relations Center", domain: "Corporate relations and employability" },
  { icon: Sparkles, name: "ABS Startup Lab", domain: "Innovation and entrepreneurship" },
]

export default function GovernancePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image3.jpg"
          alt="ABS leadership in a working meeting with officials"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">About us · Governance</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Leadership and governance
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            The Directorate General provides the institutional direction and development of ABS.
            Academic, administrative and teaching responsibilities are exercised in accordance with
            the internal organisation and the procedures in force.
          </p>
        </div>
      </section>

      {/* Legal framework */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Legal framework</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              A limited liability company governed by OHADA law
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              ABS — African Business School SARL is a limited liability company (SARL),
              whose registered office is in Bamako, Mali. The Statutory Manager performs her duties
              in accordance with the company's articles of association, the OHADA Uniform Act on
              commercial companies and economic interest groups (AUSCGIE), the provisions applicable
              in Mali and the decisions duly adopted by the partners.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              In accordance with Article 323 and subsequent articles of the AUSCGIE, the SARL is
              administered by one or more managers, natural persons, appointed in the articles of
              association or by a subsequent instrument. The Statutory Manager provides the legal
              representation of the company and exercises the management and representation powers
              provided for by the applicable texts; the powers expressly reserved for the partners by
              law or by the articles of association remain within their remit.
            </p>
          </div>
          <Card className="border-slate-200">
            <CardHeader>
              <FileText className="h-9 w-9 text-blue-700" aria-hidden="true" />
              <CardTitle className="text-xl text-slate-900">Position identification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {[
                ["Legal designation", "Statutory Manager"],
                ["Executive and institutional title", "Managing Director & Chief Executive Officer"],
                ["Institution", "ABS — African Business School SARL"],
                ["Legal form", "Limited liability company (SARL)"],
                ["Hierarchical position", "First executive authority of the company"],
                ["Registered office", "Bamako, Mali"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-0.5 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
                  <span className="font-medium text-slate-800">{value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Purpose and ambition: the Statutory Manager */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Purpose of the role</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              The Statutory Manager, guarantor of institutional coherence
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The Statutory Manager provides the general management, legal representation, strategic
              steering and operational management of ABS — African Business School SARL. She
              guarantees the coherence between the institution's vision, its regulatory obligations,
              its resources, its development ambitions and its results. She drives this ambition
              within the framework of the ABS 2035 Strategic Plan, which aims to position ABS as an
              institution recognised for academic and professional excellence, the quality and
              relevance of its programmes, pedagogical and technological innovation and the
              professional readiness of its graduates.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ceoMissions.map(({ icon: Icon, title, points }) => (
              <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <span className="mb-2 inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="size-6 text-cyan-700" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-blue-700" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance chain */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Organisation</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">The governance chain</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Hierarchical and functional reporting lines are set out in ABS's approved organisation
            chart. The functions presented below are based on the official job and position
            descriptions; only the functions are displayed, and the names, biographies and photographs
            of the officeholders are published with their consent.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <ol className="relative space-y-8 border-l-2 border-blue-200 pl-8">
            {governanceChain.map(({ icon: Icon, title, subtitle, description, rattachement }) => (
              <li key={title} className="relative">
                <span
                  className="absolute -left-[2.85rem] flex size-9 items-center justify-center rounded-full bg-blue-700 text-white ring-4 ring-white"
                  aria-hidden="true"
                >
                  <Icon className="size-4" />
                </span>
                <Card className="border-slate-200 transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900">{title}</h3>
                    <p className="text-sm font-medium text-cyan-700">{subtitle}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">{rattachement}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Supervised services */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Functions and services supervised</h2>
            <p className="mt-3 leading-7 text-slate-600">
              The Statutory Manager provides general supervision of the following functions and
              services.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supervisedFunctions.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.name} className="border-slate-200 text-center transition-shadow hover:shadow-lg">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-blue-700">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-bold text-blue-900">{service.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{service.domain}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center text-sm leading-6 text-slate-600">
            Institutional notice: information concerning authorisations, accreditations,
            recognitions or certifications is communicated solely on the basis of official documents
            in force. For any further details, please contact the ABS administration.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Learn more</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Discover the institution's identity, mission and values, as well as the team and academic
            governance.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/about/faculty-staff">
                Team and academic governance <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about">Who are we?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
