import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ORGANIZATION } from "@/lib/constants"
import {
  GraduationCap,
  Users,
  CalendarClock,
  MessagesSquare,
  ClipboardCheck,
  LineChart,
  Globe2,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  Trophy,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "English Academy | Universität ABS — Englisch im Herzen Ihres Erfolgs",
  description:
    "Die English Academy der Universität African Business School in Bamako: flexible Programme, aktive Praxis, regelmäßige Bewertung und eine Lerncommunity, um das Englisch zu beherrschen.",
  path: "/english-academy",
  locale: "de",
})

const contact = ORGANIZATION.contact

const objectifs = [
  {
    icon: MessagesSquare,
    title: "Sprachkompetenzen stärken",
    description:
      "Die Beherrschung des Englischen in Schrift und Sprache entwickeln — um zu studieren, zu arbeiten und sich souverän auszutauschen.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Programme",
    description:
      "Formate, die sich an den Zeitplan aller anpassen: Studierende, Berufstätige und Personen in beruflicher Umorientierung.",
  },
  {
    icon: FlaskConical,
    title: "Vor allem Praxis",
    description:
      "Workshops, Simulationen, Fallszenarien und Sprachaustausch: Englisch lernt man, indem man es spricht.",
  },
  {
    icon: LineChart,
    title: "Regelmäßige Bewertung und Begleitung",
    description:
      "Periodische Bewertungen und ein individualisierter Fortschrittspfad, um Ihre Fortschritte Schritt für Schritt zu messen.",
  },
  {
    icon: Users,
    title: "Eine Lerncommunity",
    description:
      "Kulturelle Veranstaltungen, soziale Aktivitäten und Austausch unter Lernenden: Englisch lebt auch außerhalb des Klassenzimmers.",
  },
]

const programmes = [
  {
    icon: GraduationCap,
    title: "Englisch für Studierende",
    description:
      "Ein Weg, konzipiert für Studierende der ABS und darüber hinaus: Festigung der Grundlagen, akademisches Englisch und Vorbereitung auf den Unterricht auf Englisch.",
    points: [
      "Stärkung von mündlichem und schriftlichem Ausdruck",
      "Akademisches Englisch: Präsentationen, Schreiben, Verstehen von Dokumenten",
      "Zeiten, vereinbar mit Ihren Kursen an der Universität",
    ],
  },
  {
    icon: Briefcase,
    title: "Englisch für Berufstätige",
    description:
      "Für alle, die effizienter werden wollen: Business-Englisch, Meetings, E-Mails, Verhandlung und professionelle Präsentationen.",
    points: [
      "Berufsenglisch des Alltags und der Unternehmenswelt",
      "Simulationen von Meetings, Gesprächen und Verhandlungen",
      "Termine, abgestimmt auf volle Zeitpläne",
    ],
  },
  {
    icon: Globe2,
    title: "Allgemeines Englisch & Konversation",
    description:
      "Ein Programm offen für alle Niveaus, zentriert auf mündliche Flüssigkeit und Selbstvertrauen in Situationen des Alltagslebens.",
    points: [
      "Nach Einstufung angepasste Niveaugruppen",
      "Sprachaustausch und Konversationsworkshops",
      "Eintauchen durch kulturelle Aktivitäten",
    ],
  },
]

export default function EnglishAcademyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center justify-center text-white">
        <Image
          src="/images/gallery/IMG-20250216-WA0015.jpg"
          alt="Studierende der English Academy der Universität ABS"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/80 to-blue-950/90" />
        <div className="relative z-10 max-w-4xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Universität African Business School — Bamako
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">Die English Academy der ABS</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
            Eine dynamische Lernumgebung, vollständig dem Englischen gewidmet. Denn in einer globalisierten
            Welt suchen Unternehmen und Universitäten Profile mit Englischkenntnissen.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">
                Zur English Academy anmelden <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/contact">Eine Frage stellen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Warum Englisch */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">
              Englisch — eine entscheidende Kompetenz für Ihre Zukunft
            </h2>
            <p className="text-lg text-slate-600">
              Wir bewegen uns in einer globalisierten Umgebung: Unternehmen wie Universitäten suchen heute
              Profile, die auf Englisch arbeiten können. Deshalb steht Englisch im Herzen der Ausbildung an
              der ABS — und deshalb ist die English Academy für alle offen.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {objectifs.map((item) => (
              <Card key={item.title} className="border-t-4 border-t-cyan-400 shadow-md">
                <CardHeader>
                  <item.icon className="mb-2 h-9 w-9 text-blue-700" />
                  <CardTitle className="text-lg text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="programmes" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="programmes">Unsere Programme</TabsTrigger>
              <TabsTrigger value="methode">Methode</TabsTrigger>
              <TabsTrigger value="suivi">Einstufungstest & Begleitung</TabsTrigger>
            </TabsList>

            <TabsContent value="programmes">
              <div className="grid gap-6 lg:grid-cols-3">
                {programmes.map((programme) => (
                  <Card key={programme.title} className="flex flex-col shadow-md hover:shadow-xl">
                    <CardHeader>
                      <programme.icon className="mb-2 h-9 w-9 text-blue-700" />
                      <CardTitle className="text-xl text-blue-900">{programme.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-grow flex-col">
                      <p className="mb-4 text-slate-600">{programme.description}</p>
                      <ul className="mt-auto space-y-2">
                        {programme.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center text-slate-700">
                Zeiten, Gruppen und Inhalte werden je nach Anmeldungen und Niveaus angepasst. Kontaktieren Sie
                uns unter <span className="font-semibold text-blue-900">{contact.phone}</span>, um die nächsten
                Sitzungen zu erfahren.
              </div>
            </TabsContent>

            <TabsContent value="methode">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0016.jpg"
                    alt="Englisch-Workshop an der English Academy der ABS"
                    width={720}
                    height={520}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-blue-900 md:text-3xl">
                    Eine zu 100 % praktische Methode — im Geist der ABS
                  </h2>
                  <p className="mb-6 text-slate-700">
                    Wie in allen Studiengängen der Universität — 80 % Praxis, 20 % Theorie — legt die English
                    Academy den aktiven Gebrauch der Sprache anstelle des Aufsagens von Regeln zugrunde.
                  </p>
                  <ul className="mb-8 space-y-4">
                    {[
                      {
                        title: "Workshops",
                        text: "Arbeit in kleinen Gruppen an mündlichem Ausdruck, Aussprache und Schreiben.",
                      },
                      {
                        title: "Simulationen",
                        text: "Reale Fallszenarien: Vorstellungsgespräch, Berufstreffen, mündliche Präsentation.",
                      },
                      {
                        title: "Sprachaustausch",
                        text: "Regelmäßige Treffen und Gespräche, um Englisch in entspanntem Rahmen zu üben.",
                      },
                      {
                        title: "Kulturelle & soziale Aktivitäten",
                        text: "Veranstaltungen, die die Sprache lebendig machen und eine echte Lerncommunity schaffen.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        <span>
                          <span className="font-semibold text-blue-900">{item.title} — </span>
                          <span className="text-slate-700">{item.text}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/apply">
                      An der nächsten Sitzung teilnehmen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="suivi">
              <div className="mx-auto max-w-4xl">
                <div className="mb-10 text-center">
                  <h2 className="mb-3 text-2xl font-bold text-blue-900 md:text-3xl">
                    Ein klarer Start, ein messbarer Fortschritt
                  </h2>
                  <p className="text-lg text-slate-600">
                    Jede Lernende und jeder Lernende kennt den eigenen Ausgangspunkt und folgt einem
                    gegliederten Weg: die Garantie für sichtbare Fortschritte, Sitzung für Sitzung.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="shadow-md">
                    <CardHeader>
                      <ClipboardCheck className="mb-2 h-9 w-9 text-blue-700" />
                      <CardTitle className="text-lg text-blue-900">Einstufungstest beim Eintritt</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 text-slate-600">
                        Ein Englischtest bestimmt bei Ihrer Anmeldung Ihr Niveau und Ihre Gruppe. Er erlaubt
                        den Einstieg in einen angepassten Weg — weder zu leicht noch zu anspruchsvoll.
                      </p>
                      <p className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm text-slate-700">
                        Gut zu wissen: Der Englischtest ist integraler Bestandteil des Zulassungsprozesses der
                        Universität ABS. Beim Beitritt zu einem Studiengang der Universität wird Ihr
                        Englischniveau gleich beim Eintritt bewertet.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-md">
                    <CardHeader>
                      <LineChart className="mb-2 h-9 w-9 text-blue-700" />
                      <CardTitle className="text-lg text-blue-900">Bewertung & Fortschrittspfad</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {[
                          "Regelmäßige Bewertungen schriftlich und mündlich",
                          "Individuelle Bilanzen: Sie wissen immer, wo Sie stehen",
                          "Ein strukturierter Fortschrittspfad, Stufe für Stufe",
                          "Teilnahmebescheinigung am Ende Ihres Wegs",
                        ].map((point) => (
                          <li key={point} className="flex items-start gap-2 text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/gallery/IMG-20250216-WA0067.jpg"
                    alt="Lerncommunity der English Academy"
                    width={960}
                    height={420}
                    className="h-72 w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Jetzt zum Englischen wechseln</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Studierende, Berufstätige oder einfach Begeisterte: Die English Academy der ABS öffnet Ihnen ihre
            Türen auf dem Campus in Hamdallaye ACI 2000, Bamako. Rufen Sie {contact.phone} an oder schreiben
            Sie an {contact.email}.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">Anmelden</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/admissions">Zulassungen der ABS</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/international">Internationale Dimension</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
