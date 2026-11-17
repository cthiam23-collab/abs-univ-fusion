import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  FileText,
  HandHeart,
  Handshake,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UserCheck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Stipendien und Ermäßigungen | ABS",
  description: "Entdecken Sie die Stipendien- und Gebührenermäßigungssysteme der ABS — African Business School: Vergabekriterien, Beibehaltungsbedingungen und Bewerbungsverfahren.",
  path: "/financial-aid",
  locale: "de",
})

const CONTACT_EMAIL = "abs.mail1290@gmail.com"

const dispositifs = [
  {
    icon: Trophy,
    title: "Exzellenzstipendium",
    description:
      "Bestimmt für Bewerberinnen und Bewerber mit hervorragenden akademischen Ergebnissen.",
  },
  {
    icon: HandHeart,
    title: "Halbstipendium",
    description:
      "Ermäßigung von 50 % der Studiengebühren, gewährt gemäß den von der Generaldirektion festgelegten Kriterien.",
  },
  {
    icon: HeartHandshake,
    title: "Sozialstipendium",
    description:
      "Bestimmt für Bewerberinnen und Bewerber, die eine besondere soziale oder finanzielle Lage nachweisen.",
  },
  {
    icon: Sparkles,
    title: "Außergewöhnliche Ermäßigung",
    description:
      "Gewährt im Rahmen von Rekrutierungskampagnen oder spezifischen institutionellen Programmen.",
  },
  {
    icon: Star,
    title: "Leistungsstipendium",
    description:
      "Bestimmt, um akademische Leistungen, Engagement und vorbildliches Verhalten der Studierenden zu würdigen.",
  },
]

const criteresAttribution = [
  "Die Schul- und Universitätsergebnisse der Bewerberin oder des Bewerbers;",
  "Leistung und akademisches Potenzial;",
  "Motivation und Berufsprojekt;",
  "Die soziale oder finanzielle Lage, sofern anwendbar;",
  "Die Teilnahme an den von ABS organisierten Stipendienwettbewerben;",
  "Die Einhaltung der akademischen, administrativen und disziplinarischen Verpflichtungen.",
]

const conditionsMaintien = [
  "Die Hausordnung von ABS einhalten;",
  "Regelmäßig an den Lehrveranstaltungen und pädagogischen Aktivitäten teilnehmen;",
  "Die Zeiten und akademischen Verpflichtungen einhalten;",
  "Zufriedenstellende Ergebnisse erzielen;",
  "An den verpflichtenden institutionellen Aktivitäten teilnehmen;",
  "Die in ihrer Vereinbarung oder Vergabeurkunde enthaltenen Verpflichtungen einhalten.",
]

const procedureCandidature = [
  "Ein Bewerbungsdossier einreichen;",
  "Die angeforderten Nachweise vorlegen;",
  "Gegebenenfalls am Auswahlwettbewerb teilnehmen;",
  "Sich der Bewertung des Dossiers unterziehen;",
  "Auf die offizielle Mitteilung der Entscheidung der Generaldirektion warten.",
]

const validiteCampagne = [
  "Die Anzahl der verfügbaren Stipendien, gegebenenfalls;",
  "Die gewährten Ermäßigungssätze;",
  "Die betroffenen Studiengänge und Level;",
  "Die Öffnungs- und Schlussdaten der Bewerbungen;",
  "Die geforderten Nachweise;",
  "Die Bedingungen für Beibehaltung und Verlängerung;",
  "Die Möglichkeiten oder Verbote der Kumulierung mit anderen Ermäßigungen.",
]

const dispositionsImportantes = [
  "Ein Stipendienantrag garantiert nicht dessen Erhalt.",
  "Kein Stipendium und keine Ermäßigung gilt als gesichert, bevor die offizielle Mitteilung der Generaldirektion vorliegt.",
  "Stipendien und Ermäßigungen sind nicht automatisch kumulierbar.",
  "Die gewährten Vorteile sind persönlich und unterliegen den in der Vergabeentscheidung präzisierten Bedingungen.",
  "Die Nebenkosten (Aktenöffnung, Uniform, Studienexkursion und Verteidigung) werden nicht automatisch von den Stipendien gedeckt, außer durch ausdrücklichen Beschluss der Generaldirektion.",
]

export default function FinancialAidPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-cyan-400 text-cyan-300">
              Akademisches Jahr 2026–2027
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Stipendien und Ermäßigungen</h1>
            <p className="text-lg text-slate-200">
              Im Rahmen ihrer Politik zur Förderung der akademischen Exzellenz, der Chancengleichheit und der
              Zugänglichkeit der Hochschulbildung richtet die ABS — African Business School verschiedene
              Stipendien- und Ermäßigungssysteme für die Studiengebühren ein.
            </p>
            <p className="mt-4 text-slate-300">
              Diese Systeme zielen darauf ab, Leistung zu fördern, motivierte Studierende zu unterstützen und
              Familien bei der Finanzierung des Hochschulstudiums zu begleiten.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Dispositifs */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">
              Die Systeme der finanziellen Unterstützung
            </h2>
            <p className="text-lg text-slate-600">
              ABS kann mehrere Formen der Begleitung anbieten:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dispositifs.map((item) => (
              <Card key={item.title} className="h-full border-t-4 border-t-blue-700 shadow-md">
                <CardHeader>
                  <item.icon className="mb-2 h-9 w-9 text-blue-700" />
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            ABS kann je nach Auswahlkriterien und Entscheidungen der Generaldirektion Vollstipendien,
            Halbvertstipendien oder weitere Ermäßigungen gewähren. Die Vergabe eines Stipendiums unterliegt
            akademischen, disziplinarischen und administrativen Bedingungen, die in einer
            Verpflichtungserklärung präzisiert werden.
          </p>
        </div>
      </section>

      {/* 2-5. Critères, maintien, procédure, validité */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Landmark className="h-6 w-6" /> Vergabekriterien
                </CardTitle>
                <CardDescription>
                  Die Vergabe eines Stipendiums oder einer Ermäßigung kann folgende Elemente berücksichtigen:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {criteresAttribution.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <UserCheck className="h-6 w-6" /> Bedingungen für die Beibehaltung des Stipendiums
                </CardTitle>
                <CardDescription>
                  Die Empfängerinnen und Empfänger eines Stipendiums oder Halbstipendiums verpflichten sich:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {conditionsMaintien.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  Die Nichteinhaltung dieser Verpflichtungen kann je nach den geltenden Bestimmungen zu einer
                  Überprüfung, Aussetzung oder einem Entzug des gewährten Vorteils führen.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <FileText className="h-6 w-6" /> Bewerbungsverfahren
                </CardTitle>
                <CardDescription>Bewerberinnen und Bewerber, die ein Stipendium erhalten möchten, müssen:</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {procedureCandidature.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <CalendarCheck className="h-6 w-6" /> Gültigkeit und besondere Bedingungen
                </CardTitle>
                <CardDescription>
                  Jede Stipendienkampagne wird durch eine Kommunikation präzisiert, die Folgendes enthält:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {validiteCampagne.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Dispositions importantes */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-blue-900">
              <ShieldCheck className="h-8 w-8 text-blue-700" /> Wichtige Bestimmungen
            </h2>
            <ul className="mb-10 space-y-3">
              {dispositionsImportantes.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-700"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Notre engagement */}
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-8 text-center">
              <Handshake className="mx-auto mb-4 h-10 w-10 text-blue-700" />
              <h3 className="mb-4 text-2xl font-bold text-blue-900">Unser Engagement</h3>
              <p className="mb-3 text-slate-700">
                An ABS sind wir überzeugt, dass Potenzial, Leistung und Entschlossenheit die Türen der
                Hochschulbildung öffnen können müssen.
              </p>
              <p className="text-slate-700">
                Ein Stipendium ist eine Gelegenheit, aber auch ein Engagement sich selbst, der Institution und der
                eigenen Zukunft gegenüber.
              </p>
              <p className="mt-6 text-lg font-semibold text-blue-900">
                Exzellenz verdient man sich, Gelegenheiten gestaltet man, und die Zukunft bereitet man vor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ihre Zukunft beginnt hier</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Sie möchten sich um ein Stipendium bewerben oder mehr über die laufenden Systeme erfahren? Kontaktieren
            Sie unsere Verwaltung, um die offiziellen Informationen und die für Ihr Dossier notwendigen Ratschläge
            zu erhalten.
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-sm text-slate-200 sm:flex-row">
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-cyan-400" /> WhatsApp: {WHATSAPP_NUMBER}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> {CONTACT_EMAIL}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" /> Bamako – Hamdallaye ACI 2000
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <a href={WHATSAPP_URL}>Treten Sie der ABS-Gemeinschaft bei</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/admissions">Die Zulassung entdecken</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/contact">Kontaktieren Sie uns</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
