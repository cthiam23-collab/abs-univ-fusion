import Link from "next/link"
import { Mail, Phone, MapPin, Clock, BookOpen, Database, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/forms/contact-form"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Joindre la bibliothèque | ABS",
  description: "Coordonnées et horaires de la bibliothèque de ABS — African Business School à Bamako.",
  path: "/contact/library",
})

const library = ORGANIZATION.departments.library
const hours = ORGANIZATION.officeHours

const services = [
  "Aide à la recherche documentaire",
  "Accès aux bases de données et aux ressources numériques",
  "Orientation dans le catalogue et les ouvrages de référence",
  "Salles d'étude et espaces de travail en groupe",
]

const links = [
  { href: "/library", label: "Page de la bibliothèque", icon: BookOpen },
  { href: "/library/catalog", label: "Catalogue en ligne", icon: Database },
  { href: "/library/hours", label: "Horaires d'ouverture", icon: Clock },
]

export default function LibraryContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <BookOpen className="mr-1.5 h-3.5 w-3.5" />
            Bibliothèque
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Contacter la bibliothèque
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Une question sur les ressources, le catalogue ou les horaires d&apos;ouverture ? L&apos;équipe
            de la bibliothèque universitaire est à votre écoute.
          </p>
        </div>
      </section>

      {/* Info + links */}
      <section className="container mx-auto py-14">
        <div className="grid items-start gap-8 lg:grid-cols-3">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-blue-900">Services de la bibliothèque</CardTitle>
              <CardDescription>{library.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-600">
              <a
                href={`mailto:${library.email}`}
                className="flex items-start gap-3 font-medium text-blue-700 hover:text-blue-900"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                {library.email}
              </a>
              <a
                href={`tel:${library.phone.split(" / ")[0].replace(/\s/g, "")}`}
                className="flex items-start gap-3"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                {library.phone}
              </a>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                <span>
                  {hours.weekday.days} : {hours.weekday.start} – {hours.weekday.end}
                  <br />
                  {hours.saturday.days} : {hours.saturday.start} – {hours.saturday.end}
                  <br />
                  {hours.sunday.days} : fermé
                </span>
              </div>
              <ul className="space-y-2 border-t border-slate-100 pt-4">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-blue-900">Liens rapides</CardTitle>
              <CardDescription>
                Accédez directement aux pages utiles de la bibliothèque universitaire.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-blue-700 hover:bg-blue-50"
                >
                  <link.icon className="h-6 w-6 text-blue-700" />
                  <span className="text-sm font-semibold text-blue-900">{link.label}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-700">
                    Ouvrir
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto">
          <Card className="mx-auto max-w-3xl border-slate-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-blue-900">Écrire à la bibliothèque</CardTitle>
              <CardDescription>
                Votre message sera transmis à l&apos;équipe de la bibliothèque universitaire.
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
