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
  title: "Contacto admisiones internacionales | ABS",
  description: "Contacte con el servicio de admisiones internacionales de ABS — African Business School: equivalencias y expediente de candidatura.",
  path: "/contact/international-admissions",
  locale: "es",
})

const contact = ORGANIZATION.contact
const hours = ORGANIZATION.officeHours

const resources = [
  {
    icon: Globe2,
    title: "Admisiones internacionales",
    description: "Procedimientos, calendarios y condiciones específicas para los estudiantes procedentes del extranjero.",
    href: "/admissions/international",
  },
  {
    icon: Plane,
    title: "Vida de los estudiantes internacionales",
    description: "Visados, alojamiento, instalación en Bamako e integración en el campus.",
    href: "/international-students",
  },
  {
    icon: Languages,
    title: "Academia de inglés",
    description: "Refuerce su nivel de inglés antes del inicio del curso gracias a nuestra Academia de inglés.",
    href: "/english-academy",
  },
  {
    icon: ArrowRight,
    title: "Candidatarse desde el extranjero",
    description: "Deposite su expediente en línea, esté donde esté en el mundo.",
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
            Estudiantes internacionales
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Venga a Bamako desde el extranjero
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Cada año acompañamos a estudiantes de toda África Occidental y de otras regiones. Nuestro equipo
            dedicado responde a sus preguntas sobre los visados, la equivalencia de los diplomas y la instalación en
            Bamako.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="container mx-auto py-14">
        <h2 className="mb-8 text-2xl font-bold text-blue-900">Recursos útiles</h2>
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

      {/* Contact + form */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto grid items-start gap-8 lg:grid-cols-5">
          <Card className="border-slate-200 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-blue-900">Oficina de estudiantes internacionales</CardTitle>
              <CardDescription>Oficina de admisiones — polo internacional</CardDescription>
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
                <p className="mb-2 font-semibold text-blue-900">Zona horaria</p>
                <p>GMT (UTC+0) — adaptamos nuestras entrevistas por videoconferencia a su zona horaria.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-md lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-blue-900">Su pregunta internacional</CardTitle>
              <CardDescription>
                Seleccione « Estudiantes internacionales » como destinatario para ser puesto en contacto con el
                servicio adecuado.
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
