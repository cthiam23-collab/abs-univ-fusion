import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import {
  Briefcase,
  Users,
  FileText,
  Globe,
  Compass,
  Network,
  Handshake,
  Target,
  Building2,
  Landmark,
  Zap,
  HeartHandshake,
  Rocket,
  Linkedin,
  MessagesSquare,
  Presentation,
  MapPin,
  Phone,
  Mail,
  TrendingUp,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Karriereservices | ABS",
  description:
    "Beschäftigungsfähigkeit der ABS-Studierenden fördern: Orientierung, Praktika, Workshops und Vermittlung von Kontakten zu Arbeitgebern des Career Center der African Business School in Bamako.",
  path: "/career-services",
  locale: "de",
})

const coachingSteps = [
  {
    icon: Compass,
    step: "Schritt 1",
    title: "Erkunden",
    description:
      "Nehmen Sie Ihre Stärken, Ihre Ziele und die Berufe in Mali und Westafrika, die Nachfrage haben, unter die Lupe. Unsere Berater helfen Ihnen, ein klares und realistisches Berufsprojekt zu definieren, das zu Ihrem Studiengang passt — Management, Finanzen, Lieferkette oder Bergbauingenieurwesen.",
  },
  {
    icon: FileText,
    step: "Schritt 2",
    title: "Vorbereiten",
    description:
      "Überzeugender Lebenslauf, starker Motivationsschreiben, gepflegte Bewerbungsunterlagen: Wir arbeiten mit Ihnen an allen Unterlagen, die bei Personalverantwortlichen den Unterschied machen — auch bei internationalen Bewerbungen.",
  },
  {
    icon: Network,
    step: "Schritt 3",
    title: "Netzwerken",
    description:
      "Trifft Sie Fachleute bei unseren Foren, Konferenzen und Unternehmensbegegnungen. An der ABS ist das Netzwerk — Ehemalige, Dozenten, Partner — Ihr erster Zugang zum Arbeitsmarkt.",
  },
  {
    icon: Target,
    step: "Schritt 4",
    title: "Erhalten",
    description:
      "Interview-Simulationen, Einzelcoaching und Zugang zu unserem Board für Praktika und Stellenangebote: Bis zur Unterschrift unter Ihren Vertrag sind Sie bei Ihrer Suche nie allein.",
  },
]

const sectors = [
  {
    icon: Landmark,
    title: "Banken & Mikrofinanz",
    description:
      "Der malische und regionale Bankensektor — Geschäftsbanken, Mikrofinanzinstitute, Fintechs — rekrutiert regelmäßig unsere Absolventinnen und Absolventen in Finanzen, Rechnungswesen und MBA.",
  },
  {
    icon: Building2,
    title: "Bergbau & Energie",
    description:
      "Gold, Steinbrüche und Energieprojekte sind Motoren der malischen Wirtschaft. Unsere Studiengänge in Bergbauingenieurwesen und Lieferkettenmanagement bereiten auf Karrieren in diesem anspruchsvollen Sektor vor.",
  },
  {
    icon: Zap,
    title: "Telekommunikation",
    description:
      "Mobilfunkanbieter und Anbieter digitaler Dienste suchen Profile in Management, Marketing und Logistik — Kompetenzen, die die ABS mit 80 % Praxisanteil vermittelt.",
  },
  {
    icon: HeartHandshake,
    title: "NGOs & internationale Organisationen",
    description:
      "Programme der Vereinten Nationen, NGOs, Entwicklungsbehörden und bilaterale Projekte bieten Praktika und Stellen in Projektmanagement, Finanzen und Vergabewesen.",
  },
  {
    icon: Rocket,
    title: "Start-ups & Unternehmertum",
    description:
      "Das Unternehmerökosystem von Bamako organisiert sich. Für alle, die gründen wollen, begleitet die ABS die Idee, den Businessplan und die ersten Investorengespräche.",
  },
]

const workshops = [
  {
    icon: FileText,
    title: "Workshop Lebenslauf & Motivationsschreiben",
    description:
      "Erstellen Sie einen Lebenslauf, der die Auswahlfilter passiert, und heben Sie Ihre Praxisprojekte, Praktika und Ihre Englischkompetenzen hervor.",
    href: "/career-services/resume-workshop",
    cta: "Am Workshop teilnehmen",
  },
  {
    icon: MessagesSquare,
    title: "Vorbereitung auf Vorstellungsgespräche",
    description:
      "Gefilmte Probegespräche, klassische HR-Fragen, Fallszenarien: Kommen Sie ins echte Gespräch mit der Sicherheit von jemandem, der bereits geübt hat.",
    href: "/career-services/counseling",
    cta: "Ein Coaching buchen",
  },
  {
    icon: Linkedin,
    title: "LinkedIn & professionelles Auftreten",
    description:
      "Gestalten Sie ein Profil, das für Sie arbeitet, und erhöhen Sie Ihre Sichtbarkeit bei malischen und internationalen Personalverantwortlichen.",
    href: "/career-services/events",
    cta: "Kalender ansehen",
  },
  {
    icon: Presentation,
    title: "Strukturierte Praktikumssuche",
    description:
      "Vollständige Methode: Unternehmen gezielt ansprechen, nachfassen, Praktikumsvereinbarung, Aufwertung der Erfahrung am Ende des Einsatzes.",
    href: "/career-services/job-board",
    cta: "Jobboard erkunden",
  },
]

const stats = [
  { value: "80 %", label: "praxisorientierte Pädagogik, abgestimmt auf die realen Bedürfnisse der Arbeitgeber" },
  { value: "21", label: "Licence- und Masterprogramme mit Blick auf Beschäftigung" },
  { value: "5", label: "große Partnersektoren: Banken, Bergbau, Telekom, NGOs, Start-ups" },
  { value: "1", label: "fester Coach für jedes Berufsprojekt ab der Licence" },
]

export default function CareerServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus der Universität African Business School in Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">
                Career Services — ABS
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Ihre berufliche Zukunft baut sich ab dem ersten Tag auf
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                An der African Business School ist Beschäftigungsfähigkeit kein Nebenservice: Sie ist eine
                Strategie. Individuelles Coaching, Vorbereitung auf Praktika und Berufseinstieg,
                professionelles Netzwerk und internationale Öffnung — alles ist darauf ausgerichtet, dass
                jede Studierende und jeder Studierende die ABS mit einem Beruf verlässt, nicht nur mit einem
                Diplom.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/career-services/job-board">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    Das Jobboard einsehen
                  </Button>
                </Link>
                <Link href="/career-services/counseling">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900"
                  >
                    einen Termin vereinbaren
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiken */}
      <section className="bg-blue-950 py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{s.value}</p>
              <p className="text-sm text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="accompagnement" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="accompagnement">Begleitung</TabsTrigger>
            <TabsTrigger value="stages-emploi">Praktika & Berufseinstieg</TabsTrigger>
            <TabsTrigger value="ateliers">Workshops</TabsTrigger>
            <TabsTrigger value="entreprises">Partnerunternehmen</TabsTrigger>
          </TabsList>

          {/* Begleitung */}
          <TabsContent value="accompagnement">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Ein Coaching in 4 Schritten</h2>
              <p className="text-slate-600 text-lg">
                Vom ersten Semester bis zur Diplomverleihung begleitet Sie das Career Center der ABS nach
                einer bewährten Methode: erkunden, vorbereiten, netzwerken, erhalten.
              </p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-100" aria-hidden="true" />
              <div className="space-y-8">
                {coachingSteps.map((s, i) => (
                  <div key={i} className={`md:flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                    <Card className="md:w-[46%] border-t-4 border-t-cyan-400 shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                            <s.icon className="h-6 w-6 text-cyan-400" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">{s.step}</p>
                            <CardTitle className="text-blue-900">{s.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600">{s.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/career-services/counseling">
                <Button className="bg-blue-700 hover:bg-blue-900">Individuelle Beratung entdecken</Button>
              </Link>
              <Link href="/student-resources/career-services">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Studierendenressourcen
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Praktika & Berufseinstieg */}
          <TabsContent value="stages-emploi">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Praktika & erste Stellen: die Sektoren mit Nachfrage</h2>
              <p className="text-slate-600 text-lg">
                Unser Jobboard bündelt die Praktika- und Stellenangebote der Partnerunternehmen der ABS. Dies
                sind die fünf großen Sektoren, in denen unsere Studierenden ihre Chancen finden.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {sectors.map((s, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-cyan-50 flex items-center justify-center">
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
              <Card className="bg-blue-900 text-white border-0 flex flex-col justify-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Briefcase className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Angebote dauerhaft online</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Akademische Praktika, Arbeitsverträge, Freelance-Einsätze: Sehen Sie sich die
                    Ausschreibungen an, laden Sie Ihren Lebenslauf hoch und verfolgen Sie Ihre Bewerbungen.
                  </p>
                  <Link href="/career-services/job-board">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold w-full">
                      Zum Jobboard
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/career-services/global-careers">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Globe className="mr-2 h-4 w-4" />
                  Internationale Karrieren
                </Button>
              </Link>
              <Link href="/career-services/events">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Users className="mr-2 h-4 w-4" />
                  Karriereveranstaltungen
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Workshops */}
          <TabsContent value="ateliers">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Praxisworkshops das ganze Jahr über</h2>
              <p className="text-slate-600 text-lg">
                Jedes Semester bietet das Career Center kurze und konkrete Workshops an. Kommen Sie mit Ihrem
                Lebenslauf-Entwurf oder Ihren Zweifeln an einem Gespräch: Sie gehen mit einer verbesserten
                Version und einem Aktionsplan nach Hause.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {workshops.map((w, i) => (
                <Card key={i} className="border-l-4 border-l-blue-700 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                        <w.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <CardTitle className="text-blue-900 text-lg">{w.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{w.description}</p>
                    <Link href={w.href}>
                      <Button variant="outline" size="sm" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                        {w.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-cyan-50 border-cyan-400/40">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <TrendingUp className="h-8 w-8 text-blue-700 shrink-0" />
                  <p className="text-blue-900 flex-1">
                    <strong>ABS-Tipp:</strong> Nehmen Sie an mindestens einem Workshop pro Semester und einer
                    Unternehmensveranstaltung pro Jahr teil. Dies ist der Rhythmus der Absolventinnen und
                    Absolventen, die am schnellsten einen Vertrag erhalten.
                  </p>
                  <Link href="/career-services/resume-workshop">
                    <Button className="bg-blue-700 hover:bg-blue-900 shrink-0">Lebenslauf-Workshops ansehen</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Partnerunternehmen */}
          <TabsContent value="entreprises">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Eine direkte Brücke zwischen Hochschule und Unternehmen</h2>
              <p className="text-slate-600 text-lg">
                Banken, Bergbaugesellschaften, Telekomanbieter, NGOs und regionale Institutionen: Unsere
                Partner kommen in den Unterricht, empfangen Praktikantinnen und Praktikanten und rekrutieren
                unsere Absolventinnen und Absolventen. Sie sind eine Organisation? Werden Sie Teil des
                Netzwerks.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              <Card className="border-t-4 border-t-cyan-400">
                <CardHeader>
                  <CardTitle className="text-blue-900">An der ABS rekrutieren</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600 mb-6">
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Veröffentlichen Sie Ihre Praktika- und Stellenangebote kostenlos auf unserem Jobboard.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Nehmen Sie an den Unternehmensforen und Rekrutierungstagen auf dem Campus in Hamdallaye teil.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Greifen Sie auf zielgerichtete Talentpools zu: MBA, Finanzen & Finanztechnik,
                      Lieferkettenmanagement, Bergbauingenieurwesen.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Gestalten Sie gemeinsam mit uns Lehrprojekte — entlang der 80-%-Praxisachse unserer Programme.
                    </li>
                  </ul>
                  <Link href="/employers/recruit">
                    <Button className="bg-blue-700 hover:bg-blue-900">
                      <Handshake className="mr-2 h-4 w-4" />
                      Rekrutierungsservices
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-blue-950 text-white border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Warum Arbeitgeber uns vertrauen</h3>
                  <ul className="space-y-3 text-slate-300 text-sm mb-6">
                    <li>Studierende, die nach dem LMD/ECTS-Standard ausgebildet sind und international vergleichbar.</li>
                    <li>80 % Praxis: Unternehmensfälle, Feldstudien, Simulationen.</li>
                    <li>Englisch integriert ab der Licence durch die English Academy — ein Vorteil in regionalen Konzernen.</li>
                    <li>Werte der Integration und afrikanischen Einheit, die der Generaldirektion und Frau Sokhna M. Thiam am Herzen liegen.</li>
                  </ul>
                  <Link href="/academics/programs">
                    <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
                      Unsere Studiengänge
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA-Leiste */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bereit, Ihre Karriere auf die nächste Stufe zu heben?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Kontaktieren Sie das Career Center der African Business School — Hamdallaye ACI 2000, Bamako —
            oder sehen Sie sich gleich jetzt die Praktika- und Stellenangebote an.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/career-services/job-board">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                Angebote ansehen
              </Button>
            </Link>
            <Link href="/employers/recruit">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Ich bin Arbeitgeber
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.address.formatted}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.email}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
