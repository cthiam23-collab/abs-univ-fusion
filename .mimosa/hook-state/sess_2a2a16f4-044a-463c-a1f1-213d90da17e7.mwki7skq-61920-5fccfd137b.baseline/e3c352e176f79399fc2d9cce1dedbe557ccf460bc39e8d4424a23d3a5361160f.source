import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  FileText,
  HandHeart,
  Handshake,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UserCheck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Scholarships and reductions | ABS",
  description: "Discover the scholarship and tuition reduction schemes of ABS — African Business School: award criteria, conditions of maintainance and the application procedure.",
  path: "/financial-aid",
  locale: "en",
})

const CONTACT_EMAIL = "abs.mail1290@gmail.com"

const dispositifs = [
  {
    icon: Trophy,
    title: "Excellence scholarship",
    description:
      "Intended for applicants with outstanding academic results.",
  },
  {
    icon: HandHeart,
    title: "Half-scholarship",
    description:
      "A 50 % reduction in tuition fees, granted according to the criteria defined by the Directorate General.",
  },
  {
    icon: HeartHandshake,
    title: "Social scholarship",
    description:
      "Intended for applicants who can demonstrate a particular social or financial situation.",
  },
  {
    icon: Sparkles,
    title: "Exceptional reduction",
    description:
      "Granted as part of recruitment campaigns or specific institutional schemes.",
  },
  {
    icon: Star,
    title: "Merit scholarship",
    description:
      "Intended to reward students' academic performance, commitment and exemplary conduct.",
  },
]

const criteresAttribution = [
  "The applicant's school and university results;",
  "Merit and academic potential;",
  "Motivation and professional project;",
  "Social or financial situation, where applicable;",
  "Participation in the scholarship competitions organised by ABS;",
  "Compliance with academic, administrative and disciplinary commitments.",
]

const conditionsMaintien = [
  "Comply with ABS's internal regulations;",
  "Attend courses and teaching activities regularly;",
  "Respect timetables and academic obligations;",
  "Achieve satisfactory results;",
  "Take part in mandatory institutional activities;",
  "Honour the commitments contained in their agreement or award letter.",
]

const procedureCandidature = [
  "Submit an application file;",
  "Provide the requested supporting documents;",
  "Take part, where applicable, in the selection competition;",
  "Undergo the review of the file;",
  "Await the official notification of the Directorate General's decision.",
]

const validiteCampagne = [
  "The number of scholarships available, where applicable;",
  "The reduction rates granted;",
  "The fields and levels concerned;",
  "The opening and closing dates for applications;",
  "The supporting documents required;",
  "The conditions for maintaining and renewing the award;",
  "The possibilities of, or prohibitions on, combining the award with other reductions.",
]

const dispositionsImportantes = [
  "A scholarship application does not guarantee an award.",
  "No scholarship or reduction is considered granted before official notification from the Directorate General.",
  "Scholarships and reductions are not automatically cumulative.",
  "The advantages granted are personal and subject to the conditions specified in the award decision.",
  "Ancillary fees (file opening, uniform, study trip and defence) are not automatically covered by scholarships, except by express decision of the Directorate General.",
]

export default function FinancialAidPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-cyan-400 text-cyan-300">
              Academic year 2026–2027
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Scholarships and reductions</h1>
            <p className="text-lg text-slate-200">
              As part of its policy of promoting academic excellence, equal opportunity and access to
              higher education, ABS — African Business School has set up various scholarship
              and tuition reduction schemes.
            </p>
            <p className="mt-4 text-slate-300">
              These schemes are designed to reward merit, support motivated students and help
              families finance higher education.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Schemes */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">
              Financial support schemes
            </h2>
            <p className="text-lg text-slate-600">
              ABS may offer several forms of support:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dispositifs.map((item) => (
              <Card key={item.title} className="h-full border-t-4 border-t-blue-700 shadow-md">
                <CardHeader>
                  <item.icon className="mb-2 h-9 w-9 text-blue-700" />
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            ABS may grant scholarships, half-scholarships or other reductions according to the
            selection criteria and the decisions of the Directorate General. The award of a
            scholarship is subject to academic, disciplinary and administrative conditions specified
            in a commitment document.
          </p>
        </div>
      </section>

      {/* 2-5. Criteria, maintainance, procedure, validity */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Landmark className="h-6 w-6" /> Award criteria
                </CardTitle>
                <CardDescription>
                  The award of a scholarship or reduction may take into account the following:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {criteresAttribution.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <UserCheck className="h-6 w-6" /> Conditions for maintaining the scholarship
                </CardTitle>
                <CardDescription>
                  Recipients of a scholarship or half-scholarship undertake to:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {conditionsMaintien.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  Failure to honour these commitments may result in the revision, suspension or
                  withdrawal of the advantage granted, according to the applicable provisions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <FileText className="h-6 w-6" /> Application procedure
                </CardTitle>
                <CardDescription>Applicants wishing to receive a scholarship must:</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {procedureCandidature.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <CalendarCheck className="h-6 w-6" /> Validity and special conditions
                </CardTitle>
                <CardDescription>
                  Each scholarship campaign is announced with a communication specifying:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {validiteCampagne.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Important provisions */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-blue-900">
              <ShieldCheck className="h-8 w-8 text-blue-700" /> Important provisions
            </h2>
            <ul className="mb-10 space-y-3">
              {dispositionsImportantes.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-700"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Our commitment */}
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-8 text-center">
              <Handshake className="mx-auto mb-4 h-10 w-10 text-blue-700" />
              <h3 className="mb-4 text-2xl font-bold text-blue-900">Our commitment</h3>
              <p className="mb-3 text-slate-700">
                At ABS, we believe that potential, merit and determination should be able to open the
                doors of higher education.
              </p>
              <p className="text-slate-700">
                A scholarship is an opportunity, but also a commitment to oneself, to the institution
                and to one's future.
              </p>
              <p className="mt-6 text-lg font-semibold text-blue-900">
                Excellence is earned, opportunities are built and the future is prepared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Your future starts here</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Would you like to apply for a scholarship or learn more about current schemes? Contact
            our administration to obtain the official information and the advice you need for your
            file.
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-sm text-slate-200 sm:flex-row">
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-cyan-400" /> WhatsApp: {WHATSAPP_NUMBER}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> {CONTACT_EMAIL}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" /> Bamako – Hamdallaye ACI 2000
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <a href={WHATSAPP_URL}>Join the ABS community</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/admissions">Discover admissions</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
