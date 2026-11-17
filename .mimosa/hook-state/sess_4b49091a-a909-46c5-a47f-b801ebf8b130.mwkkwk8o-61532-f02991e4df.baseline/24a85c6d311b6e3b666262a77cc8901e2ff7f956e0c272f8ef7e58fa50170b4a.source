import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  FileText,
  Hash,
  MessageCircle,
  ExternalLink,
  Navigation,
  ArrowRight,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RecontactForm } from "./recontact-form"
import { WHATSAPP_NUMBER } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Contacto | ABS",
  description: "Contacte con la ABS — African Business School en Bamako : teléfono/WhatsApp, correo electrónico, dirección y formulario « Que la contacten » para sus preguntas sobre las formaciones y las admisiones.",
  path: "/contact",
  locale: "es",
})

// Equivalente español de ORGANIZATION.contact (lib/constants) — no modificar fuera de app/es/.
const CONTACT_EMAIL = "abs.mail1290@gmail.com"
const CONTACT_PHONE = "+223 78 14 14 88"
const contact = {
  phone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
}

// Mensaje prellenado de WhatsApp — documento V3, §14.4
const WHATSAPP_PREFILL =
  "Hola ABS, deseo obtener información sobre sus formaciones y las condiciones de admisión para el próximo curso académico."
const WHATSAPP_LINK = `https://wa.me/22378141488?text=${encodeURIComponent(WHATSAPP_PREFILL)}`

// Coordenadas oficiales — documento V3, §13
const infoRows = [
  {
    icon: Building2,
    label: "Establecimiento",
    value: "ABS — African Business School",
    note: null as string | null,
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Hamdallaye ACI 2000, Rue 338, Porte 06, Bamako, Mali",
    note: null,
  },
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    value: WHATSAPP_NUMBER,
    note: null,
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: contact.email,
    note: null,
  },
  {
    icon: FileText,
    label: "Registro mercantil",
    value: "RC MA.BKO.2016.B.7812",
    note: "por confirmar antes de la publicación",
  },
  {
    icon: Hash,
    label: "NIF",
    value: "084127277W",
    note: "por confirmar antes de la publicación",
  },
]

const quickCards = [
  {
    icon: MapPin,
    title: "Dirección",
    lines: ["Hamdallaye ACI 2000, Rue 338, Porte 06", "Bamako, Mali"],
  },
  {
    icon: Phone,
    title: "Teléfono / WhatsApp",
    lines: [WHATSAPP_NUMBER],
  },
  {
    icon: Mail,
    title: "Correo electrónico",
    lines: [contact.email],
  },
  {
    icon: Clock,
    title: "Horario",
    lines: [
      "Lunes a viernes : 09:00 – 17:00",
      "Sábado : 09:00 – 13:00",
    ],
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — document V3, §13 */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">Contacto</Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Hablemos de su proyecto
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            ¿Una pregunta sobre las formaciones, las admisiones, la vida en ABS o una colaboración ?
            El equipo le invita a tomar contacto por las coordenadas oficiales que figuran a continuación.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
                <MessageCircle className="mr-2 h-5 w-5" />
                Escribir por WhatsApp
              </Button>
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar al {WHATSAPP_NUMBER}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Coordonnées officielles — document V3, §13 */}
      <section className="container mx-auto -mt-10 px-4 pb-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickCards.map((card) => (
            <Card key={card.title} className="border-slate-200 shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700/10">
                  <card.icon className="h-5 w-5 text-blue-700" />
                </div>
                <h2 className="mb-2 font-bold text-blue-900">{card.title}</h2>
                {card.lines.map((line) => (
                  <p key={line} className="text-sm text-slate-600">
                    {line}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tableau des informations + carte */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-blue-900">Coordenadas oficiales</h2>
              <p className="mb-6 text-slate-600">
                Utilice exclusivamente los canales siguientes para contactar con la administración de ABS.
              </p>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-blue-900 text-left text-white">
                      <th className="px-4 py-3 font-semibold">Información</th>
                      <th className="px-4 py-3 font-semibold">Coordenada</th>
                    </tr>
                  </thead>
                  <tbody>
                    {infoRows.map((row) => (
                      <tr key={row.label} className="border-t border-slate-100 align-top">
                        <td className="px-4 py-3">
                          <span className="flex items-center gap-2 font-medium text-blue-900">
                            <row.icon className="h-4 w-4 text-blue-700" />
                            {row.label}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          {row.value}
                          {row.note && (
                            <span className="mt-1 flex items-start gap-1 text-xs text-amber-700">
                              <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                              {row.note}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-green-500 bg-green-50 px-5 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-100"
              >
                <MessageCircle className="h-5 w-5" />
                Conversar por WhatsApp — {WHATSAPP_NUMBER}
              </a>
            </div>

            <div>
              <h2 className="mb-2 text-2xl font-bold text-blue-900">Encontrarnos en Bamako</h2>
              <p className="mb-6 text-slate-600">
                El campus está situado en Hamdallaye ACI 2000, en pleno corazón de Bamako.
              </p>
              <iframe
                title="Mapa de la ABS — African Business School, Hamdallaye ACI 2000, Bamako"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-8.0130%2C12.6210%2C-7.9930%2C12.6350&layer=mapnik&marker=12.6280%2C-8.0030"
                className="h-[380px] w-full rounded-xl border-0 shadow-md"
                loading="lazy"
              />
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.openstreetmap.org/?mlat=12.6280&mlon=-8.0030#map=16/12.6280/-8.0030"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Abrir en OpenStreetMap
                  </Button>
                </a>
                <a
                  href="https://www.openstreetmap.org/directions?to=12.6280%2C-8.0030"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-700 text-white hover:bg-blue-900">
                    <Navigation className="mr-2 h-4 w-4" />
                    Itinerario
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire « Être recontacté » — document V3, §14.2 */}
      <section className="container mx-auto py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-2xl font-bold text-blue-900">Que la contacten</h2>
          <p className="mb-8 text-slate-600">
            Futuros candidatos, padres o cualquier persona interesada en los programas de formación :
            cumplimente este formulario simplificado para facilitar sus intercambios con el equipo
            administrativo de ABS.
          </p>
          <Card className="border-slate-200 shadow-md">
            <CardContent className="pt-6">
              <RecontactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Plan d'accès */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-xl font-bold text-blue-900">Plano de acceso del campus</h2>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <Image
              src="/images/campus/university-campus-map.jpg"
              alt="Plano de acceso del campus de ABS — Hamdallaye ACI 2000, Bamako"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Encuentre el detalle de los edificios en la{" "}
            <Link href="/campus/map" className="font-medium text-blue-700 hover:underline">
              página del plano del campus
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-14 text-white">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">¿Preparado para incorporarse a ABS ?</h2>
          <p className="max-w-2xl text-blue-100">
            Descubra nuestras formaciones, explore el campus o presente su candidatura desde
            hoy mismo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-50">
                Candidatarse ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/visit">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                Visitar el campus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
import { localizedOfficeHours } from "@/lib/i18n"
