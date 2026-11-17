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
  title: "Contacto admisiones Máster | ABS",
  description: "Contacte con el servicio de admisiones de Máster de ABS — African Business School en Bamako: condiciones, expediente y gastos.",
  path: "/contact/graduate-admissions",
  locale: "es",
})

const grad = ORGANIZATION.departments.graduateAdmissions
const contact = ORGANIZATION.contact
const hours = ORGANIZATION.officeHours

const requirements = [
  {
    title: "Diploma de Bac+3 como mínimo",
    description:
      "Licencia (grado) (o equivalente validado, Bac+3/Bac+4) en un ámbito compatible con el máster elegido. Las equivalencias se estudian caso por caso.",
  },
  {
    title: "Expediente de candidatura",
    description:
      "CV, certificados de calificaciones, copias de los diplomas, carta de motivación y cartas de recomendación según el programa elegido.",
  },
  {
    title: "Entrevista de admisión",
    description:
      "Una entrevista con el responsable del programa permite evaluar su proyecto profesional y su motivación.",
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
            Admisiones Máster
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Contactar con las admisiones de Máster
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            ¿Ha validado un Bac+3 y desea continuar sus estudios en la Universidad ABS? El equipo de admisiones de
            posgrado le acompaña en cada etapa de su candidatura.
          </p>
        </div>
      </section>

      {/* Requirements summary */}
      <section className="container mx-auto py-14">
        <h2 className="mb-2 text-2xl font-bold text-blue-900">Condiciones de admisión en resumen</h2>
        <p className="mb-8 max-w-2xl text-slate-600">
          Lo esencial que hay que saber antes de contactarnos — el detalle completo figura en la página dedicada a
          los requisitos de admisión.
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
              <CardTitle className="text-blue-900">Oficina de admisiones de posgrado</CardTitle>
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
                  {hours.weekday.days} : {hours.weekday.start} – {hours.weekday.end}
                  <br />
                  {hours.saturday.days} : {hours.saturday.start} – {hours.saturday.end}
                </span>
              </div>
              <div className="flex flex-col gap-3 border-t border-slate-100 pt-4">
                <Link href="/admissions/graduate/apply">
                  <Button className="w-full bg-blue-700 text-white hover:bg-blue-900">
                    Presentar una candidatura de Máster
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/admissions/graduate/requirements">
                  <Button variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50">
                    Ver los requisitos detallados
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-md lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-blue-900">Hacer una pregunta sobre su expediente</CardTitle>
              <CardDescription>
                Su mensaje será transmitido directamente al equipo de admisiones de posgrado.
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
