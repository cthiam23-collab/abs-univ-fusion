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
  title: "Planifier une visite | ABS",
  description: "Planifiez votre visite du campus de ABS — African Business School à Hamdallaye ACI 2000, Bamako.",
  path: "/visit",
})

const contact = ORGANIZATION.contact
const hours = ORGANIZATION.officeHours
const days = localizedOfficeHours("fr")

const highlights = [
  {
    icon: Landmark,
    title: "Amphithéâtres et salles de cours",
    description:
      "Découvrez nos amphithéâtres et nos salles modulaires où se déroulent cours magistraux et études de cas.",
  },
  {
    icon: BookOpen,
    title: "Bibliothèque universitaire",
    description:
      "Visitez la bibliothèque, ses espaces de lecture et son accès aux ressources documentaires numériques.",
  },
  {
    icon: Monitor,
    title: "Salles informatiques",
    description:
      "Explorez nos salles équipées pour l'enseignement du management, de la data et du digital business.",
  },
  {
    icon: Dumbbell,
    title: "Espaces sportifs",
    description:
      "Profitez de la présentation des installations sportives et de la vie associative du campus.",
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
            Visiter le campus
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Venez découvrir le campus de l&apos;African Business School (ABS)
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Rien ne vaut une visite pour se projeter. Promenez-vous dans nos locaux, rencontrez nos
            équipes et ressentez l&apos;ambiance de Hamdallaye ACI 2000, au cœur de Bamako.
          </p>
        </div>
      </section>

      {/* What to see */}
      <section className="container mx-auto py-14">
        <h2 className="mb-2 text-2xl font-bold text-blue-900">Planifier votre visite</h2>
        <p className="mb-8 max-w-2xl text-slate-600">
          Lors de votre venue, nos équipes vous font découvrir les lieux emblématiques du campus.
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
                  Adresse
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
                  Horaires d&apos;accueil
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <p>
                  {days.weekday} : {hours.weekday.start} – {hours.weekday.end}
                </p>
                <p>
                  {days.saturday} : {hours.saturday.start} – {hours.saturday.end}
                </p>
                <p>{days.sunday} : fermé</p>
                <p className="mt-3 text-xs text-slate-500">
                  Les visites guidées se déroulent pendant les heures d&apos;ouverture ; un rendez-vous
                  préalable est recommandé.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Bus className="h-5 w-5 text-blue-700" />
                  Accès et transport
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <p>
                  Le campus se situe dans le quartier d&apos;affaires Hamdallaye ACI 2000, à quelques
                  minutes du centre de Bamako. Taxis et transport collectif desservent directement la
                  Rue 461 ; un parking est disponible à proximité de la Porte 42.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <iframe
              title="Carte de l'ABS — Hamdallaye ACI 2000, Bamako"
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
                  Ouvrir dans OpenStreetMap
                </Button>
              </a>
              <a
                href="https://www.openstreetmap.org/directions?to=12.6280%2C-8.0030"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-700 text-white hover:bg-blue-900">
                  <Navigation className="mr-2 h-4 w-4" />
                  Itinéraire
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Campus map image */}
        <div className="container mx-auto mt-12">
          <h3 className="mb-4 text-xl font-bold text-blue-900">Plan d&apos;accès du campus</h3>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <Image
              src="/images/campus/university-campus-map.jpg"
              alt="Plan d'accès du campus de l'ABS — Hamdallaye ACI 2000, Bamako"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Consultez également la{" "}
            <Link href="/campus/map" className="font-medium text-blue-700 hover:underline">
              page du plan du campus
            </Link>{" "}
            pour repérer les bâtiments avant votre venue.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto py-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 p-10 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">Organisons votre visite</h2>
          <p className="text-blue-100">
            Réservez une visite guidée du campus ou contactez-nous pour planifier votre venue à la date
            qui vous convient.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/campus-tour">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-50">
                Réserver une visite guidée
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
