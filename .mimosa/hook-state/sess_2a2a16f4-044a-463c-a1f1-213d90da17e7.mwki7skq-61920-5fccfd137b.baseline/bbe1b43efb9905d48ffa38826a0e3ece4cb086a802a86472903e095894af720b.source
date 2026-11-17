import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Clock,
  Phone,
  Bus,
  Landmark,
  BookOpen,
  Dumbbell,
  Monitor,
  ArrowRight,
  ExternalLink,
  Navigation,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ORGANIZATION } from "@/lib/constants"
import { localizedOfficeHours } from "@/lib/i18n"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Planificar una visita | ABS",
  description: "Planifique su visita al campus de ABS — African Business School en Hamdallaye ACI 2000, Bamako.",
  path: "/visit",
  locale: "es",
})

const contact = ORGANIZATION.contact
const hours = ORGANIZATION.officeHours
const days = localizedOfficeHours("es")

const highlights = [
  {
    icon: Landmark,
    title: "Anfiteatros y aulas de clase",
    description:
      "Descubra nuestros anfiteatros y nuestras aulas modulares donde se desarrollan las clases magistrales y los estudios de caso.",
  },
  {
    icon: BookOpen,
    title: "Biblioteca universitaria",
    description:
      "Visite la biblioteca, sus espacios de lectura y su acceso a los recursos documentales digitales.",
  },
  {
    icon: Monitor,
    title: "Salas de informática",
    description:
      "Explore nuestras salas equipadas para la enseñanza de la gestión, de los datos y del negocio digital.",
  },
  {
    icon: Dumbbell,
    title: "Espacios deportivos",
    description:
      "Disfrute de la presentación de las instalaciones deportivas y de la vida asociativa del campus.",
  },
]

export default function VisitPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <MapPin className="mr-1.5 h-3.5 w-3.5" />
            Visitar el campus
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Venga a descubrir el campus de la Universidad ABS
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Nada como una visita para proyectarse. Pasee por nuestras instalaciones, conozca a nuestros equipos y
            sienta el ambiente de Hamdallaye ACI 2000, en pleno corazón de Bamako.
          </p>
        </div>
      </section>

      {/* What to see */}
      <section className="container mx-auto py-14">
        <h2 className="mb-2 text-2xl font-bold text-blue-900">Planificar su visita</h2>
        <p className="mb-8 max-w-2xl text-slate-600">
          Durante su visita, nuestros equipos le harán descubrir los lugares emblemáticos del campus.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <Card key={item.title} className="border-slate-200">
              <CardHeader>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700/10">
                  <item.icon className="h-5 w-5 text-blue-700" />
                </div>
                <CardTitle className="text-base text-blue-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Practical info + map */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto grid items-start gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <MapPin className="h-5 w-5 text-blue-700" />
                  Dirección
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <p className="font-medium text-slate-900">{contact.address.formatted}</p>
                <a
                  href="tel:+22378141488"
                  className="mt-3 flex items-center gap-2 font-medium text-blue-700 hover:text-blue-900"
                >
                  <Phone className="h-4 w-4" />
                  {contact.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Clock className="h-5 w-5 text-blue-700" />
                  Horario de atención
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <p>
                  {days.weekday} : {hours.weekday.start} – {hours.weekday.end}
                </p>
                <p>
                  {days.saturday} : {hours.saturday.start} – {hours.saturday.end}
                </p>
                <p>{days.sunday} : cerrado</p>
                <p className="mt-3 text-xs text-slate-500">
                  Las visitas guiadas se realizan durante el horario de apertura; se recomienda una cita previa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Bus className="h-5 w-5 text-blue-700" />
                  Acceso y transporte
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <p>
                  El campus se encuentra en el distrito de negocios de Hamdallaye ACI 2000, a unos minutos del centro
                  de Bamako. Los taxis y el transporte colectivo llegan directamente a la Rue 461; hay un
                  aparcamiento disponible cerca de la Puerta 42.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <iframe
              title="Mapa de la Universidad ABS — Hamdallaye ACI 2000, Bamako"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-8.0130%2C12.6210%2C-7.9930%2C12.6350&layer=mapnik&marker=12.6280%2C-8.0030"
              className="h-[420px] w-full rounded-xl border-0 shadow-md"
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

        {/* Campus map image */}
        <div className="container mx-auto mt-12">
          <h3 className="mb-4 text-xl font-bold text-blue-900">Plano de acceso al campus</h3>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <Image
              src="/images/campus/university-campus-map.jpg"
              alt="Plano de acceso al campus de la Universidad ABS — Hamdallaye ACI 2000, Bamako"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Consulte también la{" "}
            <Link href="/campus/map" className="font-medium text-blue-700 hover:underline">
              página del plano del campus
            </Link>{" "}
            para ubicar los edificios antes de su visita.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto py-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 p-10 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">Organicemos su visita</h2>
          <p className="text-blue-100">
            Reserve una visita guiada del campus o contáctenos para planificar su llegada en la fecha que le
            convenga.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/campus-tour">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-50">
                Reservar una visita guiada
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                Contactarnos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
