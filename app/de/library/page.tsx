import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  Landmark,
  Pickaxe,
  Scale,
  Newspaper,
  Wifi,
  Database,
  Laptop,
  Users,
  Printer,
  Search,
  Clock,
  MapPin,
  Phone,
  Mail,
  Headphones,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Bibliothek | ABS",
  description:
    "Bibliothek und Dokumentationsressourcen der ABS — African Business School in Bamako: Sammlungen passend zu den Studiengängen, digitale Ressourcen, Arbeitsplätze und Begleitung für Projektarbeiten, Abschlussarbeiten und Businesspläne.",
  path: "/library",
  locale: "de",
})

const collections = [
  {
    icon: Landmark,
    title: "Management & Führung",
    description:
      "Strategie, Marketing, Personalmanagement, Unternehmertum: die Referenzwerke und Lehrbücher der 5 Bachelorstudiengänge der Universität, ergänzt durch afrikanische und internationale Fallstudien.",
  },
  {
    icon: BookOpen,
    title: "Finanzen, Banken & islamische Finanzen",
    description:
      "Eine in der Region seltene Sammlung: Unternehmensfinanzen, Finanztechnik, Märkte, Mikrofinanz und Grundsätze der islamischen Finanzwirtschaft (Mudaraba, Musharaka, Sukuk) — auf Französisch und Englisch.",
  },
  {
    icon: Pickaxe,
    title: "Bergbau, Geologie & Energie",
    description:
      "Bergbauingenieurwesen, Steinbruchbetrieb, Standortsicherheit, Bergbaurecht und Umweltfragen: das dokumentarische Fundament unserer technischen Studiengänge, im Einklang mit dem malischen Sektor.",
  },
  {
    icon: Scale,
    title: "Recht & Governance",
    description:
      "Wirtschaftsrecht, internationales Recht, öffentliche Beschaffung, Governance und Ethik: unverzichtbare Ressourcen für den Master in Governance öffentlicher Beschaffung und die Vorbereitung auf Wettbewerbsprüfungen.",
  },
  {
    icon: Newspaper,
    title: "Malische und afrikanische Presse",
    description:
      "Zeitungen, Magazine und Wirtschaftszeitschriften aus Mali und dem Kontinent: behalten Sie den Puls des Zeitgeschehens für Ihre Referate, Debatten und Abschlussarbeiten.",
  },
  {
    icon: Database,
    title: "Digitale Ressourcen",
    description:
      "E-Books, akademische Datenbanken, Abschlussarbeiten von Studierenden und Prüfungssammlungen, zugänglich an den Arbeitsplätzen der Bibliothek oder per WLAN auf dem Campus.",
  },
]

const services = [
  {
    icon: Search,
    title: "Hilfe bei der Literaturrecherche",
    description:
      "Eine Bibliothekarin oder ein Bibliothekar führt Sie zur richtigen Quelle, zum korrekten Zitieren und zur Nutzung der Datenbanken.",
  },
  {
    icon: Laptop,
    title: "Computerarbeitsplätze & WLAN",
    description:
      "Ein vernetzter Bereich, um digitale Ressourcen zu nutzen, Ihre Arbeiten zu verfassen und Ihre Präsentationen vorzubereiten.",
  },
  {
    icon: Users,
    title: "Gruppenarbeitsräume",
    description:
      "Räume für Ihre Teamprojekte — die ABS-Pädagogik basiert zu 80 % auf Praxis und teamwork.",
  },
  {
    icon: Printer,
    title: "Druck & Vervielfältigung",
    description:
      "Drucken, Fotokopieren und Scannen von Dokumenten vor Ort, zu Studierendentarifen.",
  },
  {
    icon: Headphones,
    title: "Bereich Englisch & Sprachen",
    description:
      "Ressourcen für die English Academy: Lehrbücher, Audio, Testvorbereitung und englischsprachige Lektüre für alle Niveaus.",
  },
  {
    icon: BookOpen,
    title: "Fernleihe zwischen Bibliotheken",
    description:
      "Ein Dokument fehlt in unseren Regalen? Wir aktivieren unsere Partner, um es so schnell wie möglich zu beschaffen.",
  },
]

export default function LibraryPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/IMG-20250212-WA0013.jpg"
          alt="Universitätsbibliothek der African Business School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">
                Universitätsbibliothek
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Die ABS-Bibliothek: der Treibstoff für Ihre Abschlussarbeiten und Ihre Ambitionen
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                Auf Ihre Studiengänge abgestimmte Sammlungen, digitale Ressourcen, Arbeitsbereiche und ein
                Team, das Sie begleitet: Hier beginnt jedes Projekt — Referat, Abschlussarbeit, Businessplan —
                mit einer guten Literaturrecherche.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/library/catalog">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    Im Katalog suchen
                  </Button>
                </Link>
                <Link href="/library/hours">
                  <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                    Öffnungszeiten
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="collections" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="collections">Sammlungen</TabsTrigger>
            <TabsTrigger value="services">Leistungen</TabsTrigger>
            <TabsTrigger value="horaires">Öffnungszeiten & Zugang</TabsTrigger>
          </TabsList>

          {/* Sammlungen */}
          <TabsContent value="collections">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Sammlungen, gedacht für unsere Studiengänge</h2>
              <p className="text-slate-600 text-lg">
                Vom Bachelor bis zum MBA verfügt jeder Studiengang der ABS über seinen eigenen Bestand. Unsere
                Erwerbungen folgen den Lehrplänen und der wirtschaftlichen Aktualität Westafrikas.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {collections.map((c, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow border-t-4 border-t-cyan-400">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                        <c.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">{c.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{c.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-blue-950 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <Wifi className="h-10 w-10 text-cyan-400 shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Eine vernetzte Bibliothek</h3>
                    <p className="text-slate-300 text-sm">
                      WLAN auf dem gesamten Campus, Online-Katalog, akademische Datenbanken: die
                      ABS-Dokumentation begleitet Sie überall — vom Campus in Hamdallaye bis nach Hause.
                    </p>
                  </div>
                  <Link href="/resources/library">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold shrink-0">
                      Online-Ressourcen
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leistungen */}
          <TabsContent value="services">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Viel mehr als nur Regale</h2>
              <p className="text-slate-600 text-lg">
                Die Bibliothek ist ein Ort zum Arbeiten, zum Austausch und zur methodischen Weiterbildung.
                Entdecken Sie alles, was sie Ihnen ergänzend zu den Kursen bietet.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {services.map((s, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                        <s.icon className="h-5 w-5 text-blue-700" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">{s.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/library/catalog">
                <Button className="bg-blue-700 hover:bg-blue-900">
                  <Search className="mr-2 h-4 w-4" />
                  Den Katalog erkunden
                </Button>
              </Link>
              <Link href="/library/hours">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Clock className="mr-2 h-4 w-4" />
                  Meinen Besuch planen
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Öffnungszeiten & Zugang */}
          <TabsContent value="horaires">
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Öffnungszeiten</h2>
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <ul className="divide-y divide-slate-100">
                      {[
                        { day: "Montag — Freitag", hours: "8:00 — 18:00", note: "Durchgehender Betrieb, Arbeitsbereich geöffnet" },
                        { day: "Samstag", hours: "9:00 — 13:00", note: "Lernen und Einsichtnahme vor Ort" },
                        { day: "Sonntag & Feiertage", hours: "Geschlossen", note: "Digitale Ressourcen aus der Ferne zugänglich" },
                      ].map((row, i) => (
                        <li key={i} className="flex items-center justify-between py-3">
                          <div>
                            <p className="font-semibold text-blue-900">{row.day}</p>
                            <p className="text-sm text-slate-500">{row.note}</p>
                          </div>
                          <span
                            className={`font-bold ${
                              row.hours === "Geschlossen" ? "text-slate-400" : "text-cyan-600"
                            }`}
                          >
                            {row.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-slate-500 mt-4">
                      Die Öffnungszeiten können sich während der Prüfungsphasen, der akademischen Ferien und
                      der malischen Feiertage ändern. Informieren Sie sich auf der eigenen Seite über
                      Aktualisierungen.
                    </p>
                    <Link href="/library/hours">
                      <Button variant="outline" size="sm" className="mt-3 border-blue-700 text-blue-700 hover:bg-blue-50">
                        Detaillierte Öffnungszeiten
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <Card className="border-t-4 border-t-cyan-400">
                  <CardHeader>
                    <CardTitle className="text-blue-900">Zugang & Bedingungen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-600 text-sm">
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Vorrangiger Zugang für ABS-Studierende gegen Vorlage des Studierendenausweises.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Ausleihbedingungen werden am Empfang der Bibliothek mitgeteilt.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Ehemalige: informieren Sie sich über die Zugangsformeln zum Gesamtbestand.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Lage: Campus Hamdallaye ACI 2000, im Herzen von Bamako, aus dem gesamten Ballungsraum
                        gut erreichbar.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Die Bibliothek kontaktieren</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.address.formatted}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.email}
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="mt-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                        Eine Frage stellen
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA-Leiste */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ihre nächste große Idee beginnt hier</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Ob Sie ein Referat, eine Abschlussarbeit oder Ihr eigenes Unternehmen vorbereiten — die
            ABS-Bibliothek ist Ihr erster Partner auf dem Weg zum Erfolg. Kommen Sie vorbei und entdecken
            Sie sie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/library/catalog">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                Den Katalog einsehen
              </Button>
            </Link>
            <Link href="/campus-tour">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Den Campus besuchen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
