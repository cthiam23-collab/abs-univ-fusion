import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BookMarked,
  Building2,
  Calculator,
  FileText,
  GraduationCap,
  Landmark,
  Megaphone,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  UserCog,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Leitung und Governance | ABS",
  description: "Die Governance der African Business School SARL: Geschäftsführerin, Rektor, Studiendirektor, Registrar und Dienste – im Rahmen des strategischen Plans ABS 2035.",
  path: "/about/governance",
  locale: "de",
})

// Missions stratégiques de la Gérante statutaire (source : fiche de fonction ABS/GOUV/FP-001, sélection).
const ceoMissions = [
  {
    icon: Target,
    title: "Führung und institutionelle Strategie",
    points: [
      "Die Vision und die strategischen Ausrichtungen von ABS definieren",
      "Den strategischen Plan ABS 2035 ausarbeiten und steuern",
      "ABS als panafrikanische Referenzinstitution positionieren",
      "Die Kohärenz zwischen strategischen Zielen und verfügbaren Ressourcen sicherstellen",
    ],
  },
  {
    icon: Scale,
    title: "Gesetzliche Vertretung und Governance",
    points: [
      "Die geschäftsführende Leitung der Gesellschaft wahrnehmen und diese rechtlich gegenüber Dritten vertreten",
      "Verträge und Vereinbarungen innerhalb ihrer Befugnisse unterzeichnen, im Rahmen des AUSCGIE und der Satzung",
      "Die Ordnungsgemäßheit der rechtlichen, administrativen und institutionellen Formalitäten sicherstellen",
    ],
  },
  {
    icon: GraduationCap,
    title: "Akademische Entwicklung und Qualität",
    points: [
      "Die allgemeinen Ausrichtungen der akademischen Entwicklung in Abstimmung mit dem Rektorat definieren",
      "Die Weiterentwicklung des Studienangebots überwachen und die kontinuierliche Verbesserung der pädagogischen Qualität unterstützen",
      "Akademische und wissenschaftliche Partnerschaften fördern",
    ],
  },
  {
    icon: Calculator,
    title: "Finanzielle und wirtschaftliche Steuerung",
    points: [
      "Die Erstellung des Jahresbudgets überwachen und die Liquiditätslage verfolgen",
      "Jahresabschlüsse und Rechnungsberichte prüfen",
      "Die Kontrolle der Aufwendungen und die Trennung der Funktionen von Genehmigung, Zahlung, Erfassung und Kontrolle sicherstellen",
    ],
  },
  {
    icon: Building2,
    title: "Partnerschaften, Unternehmertum und Innovation",
    points: [
      "Strategische Partnerschaften und Beziehungen zu Unternehmen entwickeln",
      "Das Career & Corporate Relations Center unterstützen und ABS Startup Lab ausbauen",
      "Die Beziehungen zu panafrikanischen und internationalen Netzwerken entwickeln",
    ],
  },
  {
    icon: Sparkles,
    title: "Digitale Transformation und nachhaltige Entwicklung",
    points: [
      "Die digitale Transformation und die Digitalisierung der Verwaltungsprozesse überwachen",
      "Eine verantwortungsvolle Nutzung der künstlichen Intelligenz fördern",
      "Projekte im Zusammenhang mit der grünen Universität entwickeln und Initiativen unterstützen, die zu den Zielen für nachhaltige Entwicklung beitragen",
    ],
  },
]

// Chaîne de gouvernance (rattachements issus des fiches de poste).
const governanceChain = [
  {
    icon: Landmark,
    title: "Generaldirektorin",
    subtitle: "Geschäftsführerin — Managing Director & CEO",
    description:
      "Erste exekutive Autorität der Gesellschaft. Sie wahrt die Gesamtleitung, die gesetzliche Vertretung, die strategische Steuerung und das operative Management und beaufsichtigt sämtliche Direktionen, Abteilungen und Dienste.",
    rattachement: "Spitze der Kette: ernannt gemäß Satzung und Beschlüssen der Gesellschafter",
  },
  {
    icon: GraduationCap,
    title: "Rektor",
    subtitle: "Erste akademische Autorität",
    description:
      "Er garantiert die Qualität, die Relevanz und die akademische Leistung der Einrichtung, definiert die großen akademischen Ausrichtungen in Übereinstimmung mit dem strategischen Plan ABS 2035 und beaufsichtigt den Studiendirektor sowie die Studiengangsleiter.",
    rattachement: "Hierarchische Zuordnung: Generaldirektorin",
  },
  {
    icon: BookMarked,
    title: "Studiendirektor",
    subtitle: "Pädagogische Organisation",
    description:
      "Operativer Verantwortlicher für Organisation, Koordination und Verfolgung der pädagogischen Aktivitäten. Er setzt die vom Rektor definierten akademischen Ausrichtungen um und bildet das operative Bindeglied zu den Studiengangsleitern, den Lehrkräften, der Studierendensekretariat-Verwaltung und den Studierenden.",
    rattachement: "Hierarchische Zuordnung: Rektor · Institutionelle Zuordnung: Generaldirektion",
  },
  {
    icon: UserCog,
    title: "Registrar (Registraire)",
    subtitle: "Akademische Verwaltung und Studierendensekretariat",
    description:
      "Verantwortlich für die akademische Verwaltung und die zentralisierte Verwaltung des Studierendensekretariats. Garant der administrativen Nachvollziehbarkeit des Werdegangs jedes Studierenden – von der Bewerbung und Zulassung bis zum Erwerb des Diploms.",
    rattachement: "Hierarchische Zuordnung: Generaldirektion · Funktionelle Zuordnung: Rektorat",
  },
  {
    icon: Megaphone,
    title: "Leiter Marketing und Kommunikation",
    subtitle: "Image, Sichtbarkeit und Rekrutierung",
    description:
      "Entwirft und setzt die Marketing- und Kommunikationsstrategie der Einrichtung um, entwickelt deren Sichtbarkeit und steuert die Kampagnen zur Studierendenrekrutierung.",
    rattachement: "Hierarchische Zuordnung: Generaldirektion",
  },
  {
    icon: Calculator,
    title: "Buchhaltung, Kasse und Verwaltungsdienste",
    subtitle: "Administratives und finanzielles Management",
    description:
      "Der Buchhalter gewährleistet eine verlässliche und ordnungsgemäße Buchführung nach dem in Mali anwendbaren Referenzrahmen (SYSCOHADA révisé); der Kassierer garantiert ein sicheres und nachvollziehbares Management der zulässigen Ein- und Auszahlungen.",
    rattachement: "Hierarchische Zuordnung: Generaldirektion",
  },
]

// Services supervisés par la Direction Générale (fiche de fonction de la Gérante statutaire, §7).
const supervisedFunctions = [
  { icon: GraduationCap, name: "Rektorat", domain: "Akademische und wissenschaftliche Leitung" },
  { icon: BookMarked, name: "Studienleitung", domain: "Pädagogische Organisation" },
  { icon: UserCog, name: "Registrar", domain: "Akademische Verwaltung" },
  { icon: Calculator, name: "Buchhaltung & Finanzen", domain: "Rechnungslegung und Finanzmanagement" },
  { icon: Building2, name: "Kasse", domain: "Zulässige Ein- und Auszahlungen" },
  { icon: Megaphone, name: "Marketing & Kommunikation", domain: "Image, Sichtbarkeit und Rekrutierung" },
  { icon: Building2, name: "Career & Corporate Relations Center", domain: "Unternehmensbeziehungen und Berufseinstieg" },
  { icon: Sparkles, name: "ABS Startup Lab", domain: "Innovation und Unternehmertum" },
]

export default function GovernancePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image3.jpg"
          alt="Die Leitung von ABS in einer Arbeitssitzung mit offiziellen Vertretern"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Über uns · Governance</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Leitung und Governance
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Die Generaldirektion wahrt die institutionelle Ausrichtung und die Entwicklung von ABS. Die
            akademischen, administrativen und pädagogischen Verantwortlichkeiten werden entsprechend der internen
            Organisation und der geltenden Verfahren ausgeübt.
          </p>
        </div>
      </section>

      {/* Cadre juridique */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Rechtlicher Rahmen</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Eine SARL-Gesellschaft nach OHADA-Recht
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              ABS — African Business School SARL ist eine Gesellschaft mit beschränkter Haftung (SARL) mit
              Sitz in Bamako, Mali. Die Geschäftsführerin übt ihr Amt gemäß der Satzung der Gesellschaft, gemäß dem
              OHADA-Einheitsrecht über das Recht der Handelsgesellschaften und der wirtschaftlichen
              Interessenvereinigungen (AUSCGIE), gemäß den in Mali anwendbaren Bestimmungen sowie gemäß den von den
              Gesellschaftern ordnungsgemäß gefassten Beschlüssen aus.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Gemäß Artikel 323 und folgenden des AUSCGIE wird die SARL von einem oder mehreren physischen Personen
              als Geschäftsführern geführt, die in der Satzung oder durch eine spätere Urkunde bestellt werden. Die
              Geschäftsführerin wahrt die gesetzliche Vertretung der Gesellschaft und übt die in den anwendbaren
              Texten vorgesehenen Verwaltungs- und Vertretungsbefugnisse aus; die ausdrücklich den Gesellschaftern
              durch Gesetz oder Satzung vorbehaltenen Befugnisse verbleiben in ihrer Zuständigkeit.
            </p>
          </div>
          <Card className="border-slate-200">
            <CardHeader>
              <FileText className="h-9 w-9 text-blue-700" aria-hidden="true" />
              <CardTitle className="text-xl text-slate-900">Kennzeichnung der Funktion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {[
                ["Rechtliche Bezeichnung", "Geschäftsführerin (Gérante statutaire)"],
                ["Exekutiver und institutioneller Titel", "Managing Director & Chief Executive Officer"],
                ["Institution", "ABS — African Business School SARL"],
                ["Rechtsform", "Gesellschaft mit beschränkter Haftung (SARL)"],
                ["Hierarchische Stellung", "Erste exekutive Autorität der Gesellschaft"],
                ["Gesellschaftssitz", "Bamako, Mali"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-0.5 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
                  <span className="font-medium text-slate-800">{value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Finalité et ambition : la Gérante statutaire */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Zweck der Funktion</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Die Geschäftsführerin, Garantin der institutionellen Kohärenz
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Die Geschäftsführerin wahrt die Gesamtleitung, die gesetzliche Vertretung, die strategische Steuerung
              und das operative Management der ABS — African Business School SARL. Sie garantiert die
              Kohärenz zwischen der Vision der Einrichtung, ihren regulatorischen Verpflichtungen, ihren
              Ressourcen, ihren Entwicklungsehrgeizen und ihren Ergebnissen. Sie steuert diese Ambition im Rahmen
              des strategischen Plans ABS 2035, der darauf abzielt, ABS als eine Institution zu positionieren, die
              für akademische und berufliche Exzellenz, für die Qualität und Relevanz ihrer Studiengänge, für
              pädagogische und technologische Innovation sowie für die Professionalisierung ihrer Absolventinnen
              und Absolventen anerkannt ist.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ceoMissions.map(({ icon: Icon, title, points }) => (
              <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <span className="mb-2 inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="size-6 text-cyan-700" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-blue-700" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chaîne de gouvernance */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Organisation</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Die Governance-Kette</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Die hierarchischen und funktionellen Zuordnungen sind im validierten Organigramm von ABS präzisiert.
            Die nachstehend dargestellten Funktionen beruhen auf den offiziellen Stellen- und Funktionsbeschreibungen;
            es werden nur die Funktionen ausgewiesen, und Namen, Biografien und Fotos der Verantwortlichen werden
            mit deren Einverständnis veröffentlicht.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <ol className="relative space-y-8 border-l-2 border-blue-200 pl-8">
            {governanceChain.map(({ icon: Icon, title, subtitle, description, rattachement }) => (
              <li key={title} className="relative">
                <span
                  className="absolute -left-[2.85rem] flex size-9 items-center justify-center rounded-full bg-blue-700 text-white ring-4 ring-white"
                  aria-hidden="true"
                >
                  <Icon className="size-4" />
                </span>
                <Card className="border-slate-200 transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900">{title}</h3>
                    <p className="text-sm font-medium text-cyan-700">{subtitle}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">{rattachement}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services supervisés */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Beaufsichtigte Funktionen und Dienste</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Die Geschäftsführerin wahrt die Gesamtaufsicht der folgenden Funktionen und Dienste.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supervisedFunctions.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.name} className="border-slate-200 text-center transition-shadow hover:shadow-lg">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-blue-700">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-bold text-blue-900">{service.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{service.domain}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center text-sm leading-6 text-slate-600">
            Institutioneller Hinweis: Informationen zu Genehmigungen, Zulassungen, Anerkennungen oder
            Akkreditierungen werden ausschließlich auf der Grundlage der geltenden offiziellen Dokumente
            mitgeteilt. Für weitere Auskünfte wenden Sie sich bitte an die Verwaltung von ABS.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Mehr erfahren</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Entdecken Sie die Identität, die Mission und die Werte der Institution sowie das Team und die
            akademische Governance.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/about/faculty-staff">
                Team und akademische Governance <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about">Wer sind wir?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
