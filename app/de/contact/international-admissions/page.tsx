import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Globe2, Languages, Plane, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/forms/contact-form"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Kontakt internationale Zulassungen | ABS",
  description:
    "Kontaktieren Sie den internationalen Zulassungsdienst der ABS — African Business School: Äquivalenzen, Visa und Bewerbungsunterlagen für Studierende aus dem Ausland.",
  path: "/contact/international-admissions",
  locale: "de",
})

const contact = ORGANIZATION.contact
const hours = ORGANIZATION.officeHours

const resources = [
  {
    icon: Globe2,
    title: "Internationale Zulassungen",
    description: "Verfahren, Kalender und besondere Bedingungen für Studierende aus dem Ausland.",
    href: "/admissions/international",
  },
  {
    icon: Plane,
    title: "Leben internationaler Studierender",
    description: "Visa, Unterkunft, Ankunft in Bamako und Integration auf dem Campus.",
    href: "/international-students",
  },
  {
    icon: Languages,
    title: "English Academy",
    description: "Verbessern Sie Ihr Englischniveau vor dem Semesterbeginn durch unsere English Academy.",
    href: "/english-academy",
  },
  {
    icon: ArrowRight,
    title: "Aus dem Ausland bewerben",
    description: "Reichen Sie Ihre Unterlagen online ein — wo auch immer Sie auf der Welt sind.",
    href: "/apply/international",
  },
]

export default function ContactInternationalAdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <Globe2 className="mr-1.5 h-3.5 w-3.5" />
            Internationale Studierende
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Aus dem Ausland nach Bamako kommen
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Wir begleiten jedes Jahr Studierende aus ganz Westafrika und darüber hinaus. Unser
            spezialisiertes Team beantwortet Ihre Fragen zu Visa, zur Anerkennung der Diplome und zur
            Ankunft in Bamako.
          </p>
        </div>
      </section>

      {/* Ressourcen */}
      <section className="container mx-auto py-14">
        <h2 className="mb-8 text-2xl font-bold text-blue-900">Nützliche Ressourcen</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((res) => (
            <Link key={res.href} href={res.href} className="group">
              <Card className="h-full border-slate-200 transition-shadow group-hover:shadow-md">
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700/10">
                    <res.icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <CardTitle className="text-base text-blue-900">{res.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{res.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Kontakt + Formular */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto grid items-start gap-8 lg:grid-cols-5">
          <Card className="border-slate-200 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-blue-900">Büro für internationale Studierende</CardTitle>
              <CardDescription>Zulassungsbüro — internationaler Bereich</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-600">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-3 font-medium text-blue-700 hover:text-blue-900"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                {contact.email}
              </a>
              <a
                href={`tel:+22378141488`}
                className="flex items-start gap-3"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                {contact.phone}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                <span>{contact.address.formatted}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                <span>
                  {hours.weekday.days} : {hours.weekday.start} – {hours.weekday.end}
                  <br />
                  {hours.saturday.days} : {hours.saturday.start} – {hours.saturday.end}
                </span>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <p className="mb-2 font-semibold text-blue-900">Zeitzone</p>
                <p>GMT (UTC+0) — wir passen unsere Videokonferenzgespräche an Ihre Zeitzone an.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-md lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-blue-900">Ihre internationale Frage</CardTitle>
              <CardDescription>
                Wählen Sie „Internationale Studierende“ als Empfänger, um mit dem richtigen Dienst
                verbunden zu werden.
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
