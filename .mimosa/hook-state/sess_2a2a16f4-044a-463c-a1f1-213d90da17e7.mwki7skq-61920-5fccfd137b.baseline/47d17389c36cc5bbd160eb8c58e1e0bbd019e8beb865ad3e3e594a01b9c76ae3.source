import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import {
  Network,
  Users,
  GraduationCap,
  Calendar,
  MessageCircle,
  BookOpen,
  Briefcase,
  Quote,
  HandHeart,
  MapPin,
  Phone,
  Mail,
  Globe2,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Ehemalige | ABS",
  description:
    "Bleiben Sie mit der Alumni-Community der ABS — African Business School verbunden: Netzwerk, Veranstaltungen und Dienste für Ehemalige — vom Jobboard bis zum Mentoring für Studierende.",
  path: "/alumni",
  locale: "de",
})

const benefits = [
  {
    icon: Briefcase,
    title: "Lebenslanger Zugang zum Jobboard",
    description:
      "Praktika-, Stellen- und Einsatzangebote, geteilt vom Netzwerk und den Partnerunternehmen der ABS.",
  },
  {
    icon: Users,
    title: "Mentoring für Studierende",
    description:
      "Begleiten Sie einen Jahrgang: eine Stunde pro Monat, um Ihren Beruf vorzustellen, einen Lebenslauf zu korrigieren oder ein Gespräch vorzubereiten.",
  },
  {
    icon: BookOpen,
    title: "Akademische Ressourcen",
    description:
      "Zugang zur Universitätsbibliothek und ihren digitalen Ressourcen, um in Ihrem Fach auf dem Laufenden zu bleiben.",
  },
  {
    icon: Calendar,
    title: "Exklusive Veranstaltungen",
    description:
      "Diskussionsrunden, Networking-Abende, Konferenzen von Ehemaligen: regelmäßige Treffen in Bamako und online.",
  },
]

const industries = [
  "Banken & Mikrofinanz",
  "Bergbau & Energie",
  "Telekom & Digital",
  "NGOs & Kooperation",
  "Audit & Beratung",
  "Lieferkette & Logistik",
  "Public Management",
  "Unternehmertum",
]

const testimonials = [
  {
    name: "Aïcha K., Jahrgang 2023",
    role: "Kreditanalystin — Bankensektor, Bamako",
    quote:
      "Die Interview-Simulationen des Career Center haben alles verändert. Am Tag des Gesprächs in der Bank kannte ich meine Argumente auswendig.",
  },
  {
    name: "Ibrahim D., Jahrgang 2022",
    role: "Logistikreferent — Bergbausektor, Region Kayes",
    quote:
      "Der Master in Lieferkettenmanagement an der ABS bedeutet 80 % Praxis. Mein Praktikum wurde in einen Vertrag umgewandelt, und heute leite ich ein Team vor Ort.",
  },
  {
    name: "Fatoumata S., Jahrgang 2024",
    role: "Projektassistentin — internationale NGO",
    quote:
      "Das in den Studiengang integrierte Englisch hat mir Türen geöffnet, die ich mir nicht vorstellen konnte: Die Hälfte meiner Meetings läuft auf Englisch.",
  },
  {
    name: "Moussa T., Jahrgang 2021",
    role: "Unternehmer — Agrar-food-Start-up, Bamako",
    quote:
      "Mein Businessplan wurde an der ABS entwickelt und vor einer Jury aus Dozenten und Praktikern erprobt. Das Netzwerk begleitet mich weiter.",
  },
]

export default function AlumniPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/IMG-20250212-WA0022.jpg"
          alt="Community der Ehemaligen der African Business School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">Absolventennetzwerk</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Das ABS-Netzwerk: Ihr Diplom ist ein Berufspass
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                Der Stolz der African Business School: Ihre Absolventinnen und Absolventen tragen die Werte
                von Integration und afrikanischer Einheit in Banken, Bergbau, Telekom, NGOs und eigene
                Unternehmen — in Bamako wie in der gesamten Subregion. Einmal Studierende, für immer Mitglied
                des Netzwerks.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/alumni/networking">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    Dem Netzwerk beitreten
                  </Button>
                </Link>
                <Link href="/alumni/career-services">
                  <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                    Services für Ehemalige
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="reseau" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="reseau">ABS-Netzwerk</TabsTrigger>
            <TabsTrigger value="temoignages">Stimmen</TabsTrigger>
            <TabsTrigger value="connecte">Verbunden bleiben</TabsTrigger>
          </TabsList>

          {/* Netzwerk */}
          <TabsContent value="reseau">
            <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Ein Netzwerk, das für Sie arbeitet</h2>
                <p className="text-slate-600 mb-6">
                  Das Absolventennetzwerk der ABS vereint Fachleute, die in allen Schlüsselsektoren der
                  malischen und westafrikanischen Wirtschaft tätig sind. Es dient als Talentpool für
                  Partnerunternehmen, als Sicherheitsnetz für frisch Graduierte und als Ideenlabor für die
                  Universität.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-3 py-1.5 rounded-full bg-cyan-50 text-blue-900 text-sm font-medium border border-cyan-400/40"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm">
                  Diese Bereiche spiegeln die Verteilung unserer Absolventinnen und Absolventen wider —
                  treu den großen Studiengängen der Universität: MBA, Finanzen & Finanztechnik, islamische
                  Finanzen, Lieferkettenmanagement, Governance öffentlicher Beschaffung,
                  Bergbauingenieurwesen.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery/IMG-20250216-WA0030.jpg"
                  alt="ABS-Absolventinnen und -Absolventen bei einer Zeremonie auf dem Campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-6">Was das Netzwerk Ihnen bietet</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
              {benefits.map((b, i) => (
                <Card key={i} className="border-t-4 border-t-cyan-400 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <b.icon className="h-8 w-8 text-blue-700 mb-2" />
                    <CardTitle className="text-lg text-blue-900">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{b.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-950 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <GraduationCap className="h-10 w-10 text-cyan-400 shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Werden Sie Mentorin oder Mentor eines Studierenden</h3>
                    <p className="text-slate-300 text-sm">
                      Sie haben einen Beruf, Erfahrung, ein Netzwerk? Geben Sie weiter: eine Studierende oder
                      ein Studierender der Licence oder des Masters braucht Ihre Sicht einmal pro Monat. Das
                      ist die ABS-Tradition — jeder hat empfangen, jeder gibt.
                    </p>
                  </div>
                  <Link href="/alumni/networking">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold shrink-0">
                      Mein Mentoring anbieten
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Stimmen */}
          <TabsContent value="temoignages">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Sie waren an der ABS</h2>
              <p className="text-slate-600 text-lg">
                Illustrative Stimmen von Absolventinnen und Absolventen, die heute die Ansprüche und den
                Pragmatismus der African Business School in ihren Berufsalltag tragen.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {testimonials.map((t, i) => (
                <Card key={i} className="relative pt-8 hover:shadow-md transition-shadow">
                  <Quote className="absolute top-6 left-6 h-8 w-8 text-cyan-400" />
                  <CardContent className="pt-8">
                    <p className="text-slate-700 italic mb-6">„{t.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                        <span className="text-cyan-400 font-bold text-sm">
                          {t.name.split(" ")[0].charAt(0)}
                          {t.name.split(" ")[1]?.charAt(0) ?? ""}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-900">{t.name}</p>
                        <p className="text-sm text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-cyan-50 border-cyan-400/40">
              <CardContent className="pt-6">
                <p className="text-blue-900">
                  <strong>Sie sind Absolventin oder Absolvent der ABS?</strong> Teilen Sie Ihren Werdegang
                  mit der Community: Ihre Geschichte kann die kommenden Jahrgänge zum gleichen Erfolg führen.
                </p>
                <Link href="/alumni/networking">
                  <Button className="mt-4 bg-blue-700 hover:bg-blue-900">Mein Zeugnis senden</Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Verbunden bleiben */}
          <TabsContent value="connecte">
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Mit der ABS verbunden bleiben</h2>
                <p className="text-slate-600 mb-6">
                  Die Verbindung zu Ihrer alma mater endet nicht mit der Diplomverleihung. So bleiben Sie
                  Teil der ABS-Familie — und profitieren weiterhin davon.
                </p>
                <div className="space-y-5">
                  {[
                    {
                      icon: MessageCircle,
                      title: "Aktualisieren Sie Ihre Kontaktdaten",
                      description:
                        "Neue Position, neue Stadt? Melden Sie es, um die Angebote, Einladungen und Neuigkeiten des Netzwerks zu erhalten.",
                    },
                    {
                      icon: Calendar,
                      title: "Nehmen Sie an den Veranstaltungen teil",
                      description:
                        "Tage der offenen Tür, Unternehmensforen, Berufskonferenzen: Kommen Sie zurück auf den Campus und treffen Sie die Jahrgänge.",
                    },
                    {
                      icon: HandHeart,
                      title: "Geben Sie Zeit oder Chancen weiter",
                      description:
                        "Ein Praktikumsangebot in Ihrer Firma, ein Berufsworkshop, ein Mentoring: Jeder Beitrag zählt für die Community.",
                    },
                    {
                      icon: Globe2,
                      title: "Panafrikanisches Netzwerk",
                      description:
                        "Die afrikanische Öffnung ist das Lieblingsthema der Universität: vernetzen Sie sich mit den Ehemaligen in der Subregion.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href="/alumni/networking">
                    <Button className="bg-blue-700 hover:bg-blue-900">Dem Netzwerk beitreten</Button>
                  </Link>
                  <Link href="/events">
                    <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                      Veranstaltungen ansehen
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative h-56 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/gallery/IMG-20250216-WA0059.jpg"
                    alt="Vereinsleben und Veranstaltungen auf dem ABS-Campus"
                    fill
                    className="object-cover"
                  />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Büro der Ehemaligen</CardTitle>
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
                        Uns schreiben
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
          <Network className="h-10 w-10 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Ein Netzwerk ist nur so viel wert wie seine Mitglieder</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Treten Sie der Community der Absolventinnen und Absolventen der African Business School bei und
            lassen Sie den Einfluss der ABS in Afrika und darüber hinaus — gemeinsam — wachsen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/alumni/networking">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                Im Netzwerk registrieren
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Das Campusleben ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
