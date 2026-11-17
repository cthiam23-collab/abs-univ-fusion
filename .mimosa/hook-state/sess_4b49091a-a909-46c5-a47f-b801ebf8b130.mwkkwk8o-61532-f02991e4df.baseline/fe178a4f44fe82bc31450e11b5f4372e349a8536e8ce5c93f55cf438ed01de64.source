import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ORGANIZATION } from "@/lib/constants"
import {
  BookOpen,
  Video,
  Bot,
  Wifi,
  MonitorSmartphone,
  ClipboardList,
  MessageSquare,
  Headset,
  Clock,
  Globe2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "E-Campus | Universität ABS — Ihr digitaler Campus",
  description:
    "Der E-Campus der Universität African Business School: LMS-Plattform, virtuelle Klassen, KI-Ressourcen und technischer Support für Ihren Erfolg — rund um die Uhr, 7 Tage die Woche.",
  path: "/e-campus",
  locale: "de",
})

const stats = [
  { value: "24/7", label: "Zugang zur Plattform, Tag und Nacht", icon: Clock },
  { value: "100%", label: "Der Kurse online zugänglich", icon: Globe2 },
  { value: "KI", label: "Künstliche Intelligenz in den Studiengängen integriert", icon: Bot },
  { value: "1 Team", label: "IT-Support, der Studierenden gewidmet ist", icon: Headset },
]

export default function ECampusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center justify-center text-white">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus der Universität African Business School in Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-900/80 to-blue-950/90" />
        <div className="relative z-10 max-w-4xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Universität African Business School — Bamako
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Der E-Campus: Ihre Universität auf einen Klick entfernt
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
            Kurse, Hausaufgaben, Noten, virtuelle Klassen und Werkzeuge der künstlichen Intelligenz: die
            gesamte Digitalwelt der ABS in einer einzigen Umgebung, erreichbar, wo auch immer Sie sind.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/student-portal">
                Zum Studierendenportal <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/e-campus/lms">Die LMS-Plattform entdecken</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistiken */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-blue-700" />
              <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">Ein komplettes digitales Ökosystem</h2>
            <p className="text-lg text-slate-600">
              Das Lernen an der ABS endet nicht an der Tür des Klassenzimmers. Erkunden Sie jeden Bereich des
              E-Campus.
            </p>
          </div>

          <Tabs defaultValue="lms" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="lms">LMS-Plattform</TabsTrigger>
              <TabsTrigger value="virtual">Virtuelle Klassen</TabsTrigger>
              <TabsTrigger value="tools">Digitale Werkzeuge</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="lms">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0006.jpg"
                    alt="ABS-Studierende arbeiten auf der LMS-Plattform"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <BookOpen className="h-7 w-7 text-blue-700" /> Alle Ihre Kurse an einem Ort
                  </h3>
                  <p className="mb-6 text-slate-700">
                    Das Learning Management System der ABS ist das Herzstück Ihres akademischen Digitallebens.
                    Jede Lehrkraft stellt hier ihre Kursunterlagen, Hausaufgaben und Noten ein, damit Sie nie
                    etwas verpassen.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Einsicht in Kursunterlagen, Skripte und von den Dozenten geteilte Ressourcen",
                      "Hochladen der Hausaufgaben online und Verfolgen der Fristen",
                      "Einsicht in Noten und Bewertungsergebnisse in Echtzeit",
                      "Diskussionsbereiche pro Kurs, um sich mit Dozenten und Kommilitonen auszutauschen",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/e-campus/lms">
                      Das LMS im Detail erkunden <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="virtual">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <Video className="h-7 w-7 text-blue-700" /> Live lernen, wo auch immer Sie sind
                  </h3>
                  <p className="mb-6 text-slate-700">
                    Die virtuellen Klassen erweitern das Klassenzimmer. Vorlesungen, Übungen, Verteidigungen
                    und Coachingsitzungen finden per Videokonferenz mit Interaktion in Echtzeit statt.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Live-Kurse mit den Dozenten der ABS, vor Ort oder auf Distanz",
                      "Aufgezeichnete Sitzungen, um in Ihrem eigenen Tempo zu lernen",
                      "Gruppenarbeiten und Präsentationen online",
                      "Ideal für Berufstätige, die Beruf und Studium vereinbaren",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/e-campus/virtual-classrooms">
                      Virtuelle Klassen ansehen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="order-1 overflow-hidden rounded-2xl shadow-lg lg:order-2">
                  <Image
                    src="/images/campus/IMG-20250212-WA0007.jpg"
                    alt="Virtuelle Klasse der Universität ABS"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className="mb-8">
                <h3 className="mb-2 flex items-center gap-3 text-2xl font-bold text-blue-900">
                  <MonitorSmartphone className="h-7 w-7 text-blue-700" /> Werkzeuge, die auf die Welt von morgen vorbereiten
                </h3>
                <p className="max-w-3xl text-slate-700">
                  Weil künstliche Intelligenz in alle Studiengänge der ABS integriert ist, stellt Ihnen der
                  E-Campus eine Reihe digitaler Werkzeuge zur Verfügung, die Sie zu einem technikversierten
                  Fachprofi machen.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Bot className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">KI-Ressourcen</CardTitle>
                    <CardDescription>
                      Machen Sie Ihre ersten Schritte mit generativer künstlicher Intelligenz und lernen Sie,
                      sie in Ihren akademischen und beruflichen Projekten verantwortungsvoll einzusetzen.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <BookOpen className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Digitale Bibliothek</CardTitle>
                    <CardDescription>
                      Greifen Sie vom E-Campus aus auf die Dokumentressourcen, Werke und Nachschlagewerke der
                      ABS-Bibliothek zu.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/library">
                        Bibliothek <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Wifi className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">WLAN auf dem gesamten Campus</CardTitle>
                    <CardDescription>
                      Eine Verbindung in den Kursräumen, der Bibliothek und den Arbeitsbereichen, um ständig
                      verbunden zu bleiben.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <ClipboardList className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Studierendenressourcen</CardTitle>
                    <CardDescription>
                      Stundenpläne, Ordnungen, Verwaltungsdokumente und praktische Leitfäden, vereint an einem
                      einzigen Ort.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/student-resources">
                        Studierendenressourcen <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <MessageSquare className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Kommunikation & Coaching</CardTitle>
                    <CardDescription>
                      Tauschen Sie sich mit Ihren Coaches und der Verwaltung über die digitalen Kanäle der
                      Universität aus: die Betreuung ist regelmäßig und persönlich.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Globe2 className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Englisch & internationale Öffnung</CardTitle>
                    <CardDescription>
                      Englisch steht im Mittelpunkt der Ausbildung an der ABS: die digitalen Werkzeuge
                      unterstützen Ihre tägliche Sprachpraxis.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/english-academy">
                        English Academy <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="support">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0010.jpg"
                    alt="IT-Support für die Studierenden der ABS"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <Headset className="h-7 w-7 text-blue-700" /> Ein Team mit offenem Ohr für Sie
                  </h3>
                  <p className="mb-6 text-slate-700">
                    Verbindungsproblem, Zugang zu einem Kurs, Studierendenkonto: das IT-Support-Team der ABS
                    begleitet Sie, damit die Technik ein Vorteil bleibt — nie ein Hindernis.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Unterstützung bei Ihren Zugängen zur LMS-Plattform und zum Studierendenportal",
                      "Hilfe bei virtuellen Klassen: Einrichtung, Ton, Bildschirmfreigabe",
                      "WLAN-Support auf dem Campus in Hamdallaye ACI 2000",
                      "Beratung und Schulung zu digitalen Werkzeugen und KI",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                      <Link href="/e-campus/it-support">
                        Den Support kontaktieren <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                      <Link href="/contact">Kontaktseite</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Digitale Pädagogik */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900">Digital im Dienst der ABS-Pädagogik</h2>
            <p className="mb-10 text-lg text-slate-600">
              Mit 80 % Praxis und 20 % Theorie ist der E-Campus kein Gimmick: Er ist die natürliche
              Verlängerung einer handlungs- und beschäftigungsorientierten Pädagogik.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Lernen durch Tun",
                description:
                  "Online eingereichte Projekte, auf dem LMS geteilte Fallstudien, Simulationen in der virtuellen Klasse: Praxis geht auch digital.",
              },
              {
                title: "Eine flexible Ausbildung",
                description:
                  "Präsenzkurse auf dem Campus in Bamako und rund um die Uhr zugängliche Online-Inhalte: Ihr Zeitplan bleibt unter Kontrolle.",
              },
              {
                title: "Beschäftigungsfähigkeit vorbereiten",
                description:
                  "Digitale Werkzeuge und KI beherrschen — das ist die Antwort darauf, was Unternehmen heute von jedem ABS-Absolventen erwarten.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-t-4 border-t-cyan-400 shadow-md">
                <CardHeader>
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Bereit, dem ABS-E-Campus beizutreten?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-100">
            Melden Sie sich jetzt im Studierendenportal an oder kontaktieren Sie uns unter{" "}
            {ORGANIZATION.contact.phone} bei allen Fragen zur digitalen Umgebung der Universität.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/student-portal">Studierendenportal</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/admissions">Der ABS beitreten</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
