import Link from "next/link"
import { Mail, Phone, MapPin, Clock, ArrowRight, GraduationCap, FileCheck2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/forms/contact-form"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Contact Master's Admissions | ABS",
  description:
    "Contact the Master's admissions office of ABS — African Business School in Bamako: requirements, application file and fees.",
  path: "/contact/graduate-admissions",
  locale: "en",
})

const grad = ORGANIZATION.departments.graduateAdmissions
const contact = ORGANIZATION.contact
const hours = ORGANIZATION.officeHours

const requirements = [
  {
    title: "Bachelor's degree (Bac+3) minimum",
    description:
      "A Licence (Bachelor's degree) or validated equivalent (Bac+3/Bac+4) in a field compatible with the intended Master's programme. Equivalences are reviewed case by case.",
  },
  {
    title: "Application file",
    description:
      "CV, transcripts, copies of diplomas, a cover letter and letters of recommendation depending on the chosen programme.",
  },
  {
    title: "Admission interview",
    description:
      "An interview with the programme director assesses your career plan and your motivation.",
  },
]

export default function ContactGraduateAdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <GraduationCap className="mr-1.5 h-3.5 w-3.5" />
            Master&apos;s admissions
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Contact Master&apos;s admissions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Have you completed a Bac+3 (Bachelor&apos;s level) and would like to continue your studies at the ABS
            University? The graduate admissions team supports you at every stage of your application.
          </p>
        </div>
      </section>

      {/* Requirements summary */}
      <section className="container mx-auto py-14">
        <h2 className="mb-2 text-2xl font-bold text-blue-900">Admission requirements at a glance</h2>
        <p className="mb-8 max-w-2xl text-slate-600">
          The essentials to know before contacting us — the full details are on the dedicated admission requirements
          page.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {requirements.map((req) => (
            <Card key={req.title} className="border-slate-200">
              <CardHeader>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700/10">
                  <FileCheck2 className="h-5 w-5 text-blue-700" />
                </div>
                <CardTitle className="text-lg text-blue-900">{req.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{req.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact + form */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto grid items-start gap-8 lg:grid-cols-5">
          <Card className="border-slate-200 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-blue-900">Graduate admissions office</CardTitle>
              <CardDescription>{grad.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-600">
              <a
                href={`mailto:${grad.email}`}
                className="flex items-start gap-3 font-medium text-blue-700 hover:text-blue-900"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                {grad.email}
              </a>
              <a
                href={`tel:${grad.phone.split(" / ")[0].replace(/\s/g, "")}`}
                className="flex items-start gap-3"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                {grad.phone}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                <span>{contact.address.formatted}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                <span>
                  {hours.weekday.days}: {hours.weekday.start} – {hours.weekday.end}
                  <br />
                  {hours.saturday.days}: {hours.saturday.start} – {hours.saturday.end}
                </span>
              </div>
              <div className="flex flex-col gap-3 border-t border-slate-100 pt-4">
                <Link href="/admissions/graduate/apply">
                  <Button className="w-full bg-blue-700 text-white hover:bg-blue-900">
                    Submit a Master&apos;s application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/admissions/graduate/requirements">
                  <Button variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50">
                    See the detailed requirements
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-md lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-blue-900">Ask a question about your application</CardTitle>
              <CardDescription>
                Your message will be forwarded directly to the graduate admissions team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
