import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  BookOpen,
  Building2,
  Coins,
  Globe2,
  Handshake,
  Landmark,
  Laptop,
  LineChart,
  Microscope,
  Newspaper,
  Pickaxe,
  Sprout,
  Users,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Forschung | Universität ABS",
  description:
    "Angewandte Forschung an der Privatuniversität African Business School in Bamako: Unternehmertum, Bergbau und nachhaltige Entwicklung, islamische Finanzen, Digitalisierung und KI, afrikanische Integration.",
  path: "/research",
  locale: "de",
})

const stats = [
  { value: "6", label: "Bereiche angewandter Forschung", icon: Microscope },
  { value: "16", label: "spezialisierte Masterstudiengänge auf Forschungsbasis", icon: Landmark },
  { value: "80%", label: "Praxisanteil in der ABS-Pädagogik", icon: Laptop },
  { value: "1", label: "Lehrstuhl für afrikanische Integration", icon: Globe2 },
]

const axes = [
  {
    icon: Sprout,
    title: "Unternehmertum & afrikanische KMU",
    description:
      "Wie malische Unternehmen entstehen, wachsen und sich behaupten: Geschäftsmodelle, KMU-Finanzierung, Start-up-Ökosystem von Bamako, Formalisierung des informellen Sektors und Frauenunternehmertum.",
    image: "/images/campus/IMG-20250212-WA0016.jpg",
    tags: ["Start-up-Ökosystem", "KMU-Finanzierung", "Frauenunternehmertum"],
  },
  {
    icon: Pickaxe,
    title: "Extractive Industrien & nachhaltige Entwicklung",
    description:
      "Mali ist ein Land des Goldes und des Bauxits. Unsere Arbeiten analysieren die Bergbaugovernance, die lokale Umverteilung der Einnahmen, die Umweltauswirkungen und die soziale Verantwortung der Unternehmen des Sektors.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    tags: ["Bergbaugovernance", "CSR", "Umweltauswirkungen"],
  },
  {
    icon: Coins,
    title: "Finanzen, islamische Finanzen & Inklusion",
    description:
      "Mikrofinanz, Mobile Money, islamische Finanzen und Finanztechnik: wie westafrikanische Wirtschaftsakteure mit Finanzierungskreisläufen verbunden werden — auch mit den Grundsätzen des Islams konforme.",
    image: "/images/gallery/IMG-20250216-WA0015.jpg",
    tags: ["Islamische Finanzen", "Mobile Money", "Finanzielle Inklusion"],
  },
  {
    icon: Laptop,
    title: "Digitalisierung, KI & Transformation von Organisationen",
    description:
      "Künstliche Intelligenz im Management, Cybersicherheit von KMU, Datengovernance und Digitalisierung öffentlicher Dienste im westafrikanischen Kontext.",
    image: "/images/campus/IMG-20250212-WA0022.jpg",
    tags: ["Angewandte KI", "Datengovernance", "Digitale Transformation"],
  },
  {
    icon: Globe2,
    title: "Internationale Beziehungen & afrikanische Integration",
    description:
      "ECOWAS, AfCFTA, Wirtschaftsdiplomatie und Geopolitik der Ressourcen: der ABS-Lehrstuhl beleuchtet die Stellung Malis und Westafrikas in den globalen Wertschöpfungsketten.",
    image: "/images/gallery/IMG-20250216-WA0030.jpg",
    tags: ["AfCFTA", "ECOWAS", "Wirtschaftsdiplomatie"],
  },
  {
    icon: Newspaper,
    title: "Medien, Kommunikation & öffentliche Information",
    description:
      "Qualität der Wirtschaftsinformation, Datenjournalismus, Krisenkommunikation und Pressefreiheit: eine Achse im Dienst einer aufgeklärten öffentlichen Meinung und transparenter Unternehmen.",
    image: "/images/gallery/IMG-20250216-WA0060.jpg",
    tags: ["Datenjournalismus", "Kommunikation", "Wirtschaftsinformation"],
  },
]

const centers = [
  { name: "Exzellenzzentrum für Management & Unternehmertum", icon: Building2 },
  { name: "Observatorium für Bergbauindustrien und nachhaltige Entwicklung", icon: Pickaxe },
  { name: "Labor Finanzen & Finanztechnik", icon: LineChart },
  { name: "Labor Digitalisierung & Künstliche Intelligenz", icon: Laptop },
  { name: "Zentrum Medien & Kommunikation", icon: Newspaper },
  { name: "Lehrstuhl Internationale Beziehungen & Afrikanische Integration", icon: Globe2 },
]

const projects = [
  {
    title: "Kartierung des Start-up-Ökosystems von Bamako",
    lead: "Exzellenzzentrum für Management & Unternehmertum",
    description:
      "Erfassung und Analyse der jungen Unternehmen der Hauptstadt: Wachstumssektoren, Finanzierungshürden, Rolle der Inkubatoren und Diasporas.",
    icon: Sprout,
  },
  {
    title: "Barometer der Bergbaugovernance in Mali",
    lead: "Observatorium für Bergbauindustrien",
    description:
      "Jährliche Begleitung der Praktiken der Goldförderunternehmen: lokale Wertschöpfung, Abgaben, Dialog mit den Gemeinschaften und Pfade der nachhaltigen Entwicklung.",
    icon: Pickaxe,
  },
  {
    title: "Islamische Finanzen und Infrastrukturfinanzierung",
    lead: "Labor Finanzen & Finanztechnik",
    description:
      "Untersuchung der Mourabaha- und Sukuk-Mechanismen, angewendet auf die Projektfinanzierung in Westafrika, mit Anwendungsszenarien für Mali.",
    icon: Coins,
  },
  {
    title: "KI und Steuerung malischer KMU",
    lead: "Labor Digitalisierung & KI",
    description:
      "Prototyping von Entscheidungsunterstützungs-Werkzeugen für KMU-Führungen: Liquiditätsprognose, Lagerverwaltung, Kundenanalyse.",
    icon: Laptop,
  },
  {
    title: "Medien und Wirtschaftsinformation: die Berichterstattung über den Bergbausektor in der malischen Presse",
    lead: "Zentrum Medien & Kommunikation",
    description:
      "Analyse der Qualität der Bürger-Wirtschaftsinformation: zitierte Daten, Datenjournalismus und Herausforderungen der öffentlichen Debatte über die Ressourcengovernance.",
    icon: Newspaper,
  },
]

const publications = [
  {
    title: "Unternehmertum in Bamako: Werdegänge und Geschäftsmodelle junger Unternehmen",
    authors: "ABS-Lehrkörper — Exzellenzzentrum für Management & Unternehmertum",
    journal: "Cahiers de la Recherche ABS",
    date: "2025",
  },
  {
    title: "Gold, Bauxit und Entwicklung: welche lokale Wertschöpfung für die malischen extractiven Industrien?",
    authors: "ABS-Team — Observatorium für Bergbauindustrien",
    journal: "Recherche & Territoires Ouest-Africains",
    date: "2025",
  },
  {
    title: "Mobile Money und finanzielle Inklusion von Unternehmerinnen im Sahel",
    authors: "ABS-Labor Finanzen & Finanztechnik",
    journal: "Cahiers de la Recherche ABS",
    date: "2024",
  },
]

const partnerships = [
  {
    partner: "Unternehmen und Berufsverbände Malis",
    description:
      "Unternehmenslehrstühle, Auftragsstudien und Forschungspraktika: unsere Studierenden und Dozenten arbeiten an realen Problemen der malischen Privatwirtschaft.",
    icon: Handshake,
  },
  {
    partner: "Öffentliche Institutionen und Gebietskörperschaften",
    description:
      "Expertise zur Governance öffentlicher Beschaffung, zu Politiken der lokalen Entwicklung und zur Ausarbeitung datengestützter öffentlicher Politiken.",
    icon: Landmark,
  },
  {
    partner: "Afrikanische und internationale akademische Netzwerke",
    description:
      "Gemeinsame Publikationen, gemeinsame Seminare und Mobilität der Dozenten-Forscher mit Partneruniversitäten in Afrika und anderswo.",
    icon: Users,
  },
]

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center text-white">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus der Universität ABS, Bamako"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-950/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Angewandte Forschung — Bamako, Mali
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Die ABS-Forschung: Afrika von Bamako aus denken
          </h1>
          <p className="mb-8 text-lg md:text-xl text-slate-100">
            Unternehmertum, Bergbau und nachhaltige Entwicklung, islamische Finanzen, künstliche Intelligenz,
            Medien und afrikanische Integration: sechs Bereiche im Dienst der realen Herausforderungen Malis
            und Westafrikas.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/centers">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                Unsere Zentren entdecken <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/research/collaborate">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                Mit uns zusammenarbeiten
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistiken */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-cyan-50 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-cyan-400">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Anspruch */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">
              Eine große Business School, eine echte Forschungsmission
            </h2>
            <p className="mb-4 text-lg text-slate-600">
              An der Privatuniversität African Business School ist Forschung kein Schmuck: Sie speist direkt
              unsere 80 % Praxispädagogik. Jeder Forschungsbereich ist an unsere Bachelors und unsere 16
              Master angebunden, damit Studierende lernen, indem sie die konkreten Probleme der Unternehmen
              und Regionen Malis lösen.
            </p>
            <p className="mb-6 text-lg text-slate-600">
              Von der Governance der Bergbauressourcen (Gold, Bauxit) über die islamischen Finanzen bis zur
              künstlichen Intelligenz im Management: Unsere Teams erzeugen Wissen, das Entscheidern,
              Unternehmern und Bürgerinnen und Bürgern nützt.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/research/publications">
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                  <BookOpen className="mr-2 h-4 w-4" /> Publikationen ansehen
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="text-blue-700 hover:bg-cyan-50">
                  Unsere Vision <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl shadow-xl lg:h-96">
            <Image
              src="/images/campus/IMG-20250212-WA0025.jpg"
              alt="Studierende der Universität ABS in Gruppenarbeit"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tabs : Bereiche / Zentren / Publikationen / Partnerschaften */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl font-bold text-blue-900 md:text-4xl">Die ABS-Forschung erkunden</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600">
            Exzellenzbereiche, spezialisierte Zentren, Publikationen des Lehrkörpers und Partnerschaften: das
            gesamte Forschungsökosystem der ABS.
          </p>
          <Tabs defaultValue="axes" className="w-full">
            <TabsList className="mb-10 grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="axes" className="text-base">
                Forschungsbereiche
              </TabsTrigger>
              <TabsTrigger value="centres" className="text-base">
                Zentren
              </TabsTrigger>
              <TabsTrigger value="publications" className="text-base">
                Publikationen
              </TabsTrigger>
              <TabsTrigger value="partenariats" className="text-base">
                Partnerschaften
              </TabsTrigger>
            </TabsList>

            <TabsContent value="axes">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {axes.map((axe, i) => (
                  <Card key={i} className="group overflow-hidden transition-shadow hover:shadow-xl">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={axe.image}
                        alt={axe.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent" />
                      <axe.icon className="absolute bottom-3 left-4 h-8 w-8 text-cyan-400" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">{axe.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-slate-600">{axe.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {axe.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-blue-900"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="centres">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {centers.map((center, i) => (
                  <Link href="/research/centers" key={i}>
                    <Card className="group h-full transition-all hover:border-blue-700 hover:shadow-lg">
                      <CardContent className="flex h-full flex-col items-start gap-4 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900 text-cyan-400 transition-transform group-hover:scale-110">
                          <center.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700">
                          {center.name}
                        </h3>
                        <span className="mt-auto inline-flex items-center text-sm font-medium text-blue-700">
                          Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="publications">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {publications.map((pub, i) => (
                  <Card key={i} className="transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">{pub.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2 text-sm text-slate-600">{pub.authors}</p>
                      <p className="text-sm font-medium text-blue-700">
                        {pub.journal} · {pub.date}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/research/publications">
                  <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                    Alle Publikationen <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="partenariats">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {partnerships.map((p, i) => (
                  <Card key={i} className="h-full transition-shadow hover:shadow-lg">
                    <CardContent className="flex h-full flex-col gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-blue-900">
                        <p.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">{p.partner}</h3>
                      <p className="text-sm text-slate-600">{p.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/research/partnerships">
                  <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                    Unsere Forschungspartnerschaften <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Laufende Projekte */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl font-bold text-blue-900 md:text-4xl">Laufende Projekte</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600">
            Angewandte Forschungsarbeiten, durchgeführt mit den Studierenden der ABS-Master, zu den
            wichtigsten Herausforderungen Malis und der Subregion.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Card key={i} className="flex gap-4 p-6 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-cyan-400">
                  <project.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-blue-900">{project.title}</h3>
                  <p className="mb-2 text-sm font-medium text-blue-700">{project.lead}</p>
                  <p className="text-sm text-slate-600">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Treten Sie unserer Forschungscommunity bei</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Masterstudierende, Dozenten-Forscher, Unternehmen oder Institutionen: Es gibt tausend Wege, zur
            ABS-Forschung beizutragen. Sprechen wir darüber.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/collaborate">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                Mit der ABS zusammenarbeiten
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                Die Generaldirektion kontaktieren
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            {ORGANIZATION.contact.address.formatted} · {ORGANIZATION.contact.phone} · {ORGANIZATION.contact.email}
          </p>
        </div>
      </section>
    </div>
  )
}
