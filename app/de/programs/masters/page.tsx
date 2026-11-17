import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { dynamicMasters, masterIcons } from "@/lib/masters-data"
import { localizedMasterFields } from "@/lib/masters-data-i18n"
import {
  Briefcase,
  Megaphone,
  Network,
  ClipboardList,
  ShieldCheck,
  GraduationCap,
  CalendarClock,
  CreditCard,
  Info,
  Mail,
  Phone,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Masterstudiengänge | ABS",
  description:
    "Masterkatalog der African Business School (ABS) in Bamako: 16 Studiengänge mit eigenem Steckbrief (2 Jahre, 4 Semester, 120 Credits), LMD-Rahmen, Richtpreisen und Öffnungsbedingungen, bestätigt durch die Direktion.",
  path: "/programs/masters",
  locale: "de",
})

type MasterAxis = {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  highlighted?: boolean
}

// Studiengänge mit statischer Detailseite unter app/programs/masters/<slug>/.
const staticMasters: MasterAxis[] = [
  {
    title: "Master in Betriebswirtschaft",
    description:
      "Management, Strategie, Governance und die Steuerung von Organisationen vertiefen.",
    icon: Briefcase,
    href: "/programs/masters/mba",
    highlighted: true,
  },
  {
    title: "Master in Internationalem Management",
    description:
      "Strategie, interkulturelles Management, internationale Entwicklung und die Steuerung grenzüberschreitender Aktivitäten vertiefen.",
    icon: Network,
    href: "/programs/masters/international-business",
    highlighted: true,
  },
  {
    title: "Master in Projektmanagement",
    description:
      "Fachkräfte ausbilden, die Projekte konzipieren, planen, finanzieren, umsetzen, überwachen und evaluieren können. Kompetenzen in strategischer Planung, Budgetmanagement, Ressourcenmobilisierung, Monitoring und Evaluation, Risikomanagement und Teamführung entwickeln.",
    icon: ClipboardList,
    href: "/programs/masters/project-management",
    highlighted: true,
  },
]

// Ausbildungsrichtungen ohne eigene Detailseite — Öffnung durch die Direktion zu bestätigen.
const unconfirmedAxes: MasterAxis[] = [
  {
    title: "Master in Digitalem Marketing",
    description:
      "Digitale Strategie, digitale Kommunikation, Performanzanalyse und Kundenbeziehung vertiefen.",
    icon: Megaphone,
  },
  {
    title: "Master in Qualität, Hygiene, Sicherheit und Umwelt (QHSE)",
    description:
      "Spezialisten ausbilden, die integrierte Managementsysteme für Qualität, Hygiene, Arbeitssicherheit und Umwelt konzipieren, einführen und steuern können. Kompetenzen in der Prävention von Berufsrisiken, regulatorischer Konformität, QHSE-Audit, kontinuierlicher Verbesserung und Umweltmanagement entwickeln.",
    icon: ShieldCheck,
  },
]

// Gesamtkatalog: 3 statische Seiten + 13 dynamische Seiten aus
// lib/masters-data.ts + die verbleibenden Richtungen, von der Direktion zu bestätigen.
const catalogue: MasterAxis[] = [
  ...staticMasters,
  ...dynamicMasters.map(
    (master): MasterAxis => ({
      title: localizedMasterFields(master, "de").title,
      description: localizedMasterFields(master, "de").tagline,
      icon: masterIcons[master.slug as keyof typeof masterIcons],
      href: `/de/programs/masters/${master.slug}`,
    }),
  ),
  ...unconfirmedAxes,
]

export default function MastersProgramsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-10">
        <Badge variant="outline" className="mb-4">
          <GraduationCap className="size-4 mr-1" /> Masterzyklus — LMD
        </Badge>
        <h1 className="text-4xl font-bold text-primary mb-4">Masterstudiengänge</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Der Master an ABS ist auf Vertiefung des Wissens, Spezialisierung und den Aufbau fortgeschrittener
          Kompetenzen ausgerichtet. Anhand komplexer Fallstudien, professioneller Projekte und angewandter
          Forschungsarbeiten bereitet er darauf vor, Lösungen zu konzipieren, Projekte zu steuern und
          Verantwortung innerhalb von Organisationen zu übernehmen.
        </p>
        <div className="flex items-start gap-2 rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm text-blue-900">
          <Info className="mt-0.5 size-4 shrink-0" />
          <p>
            Die unten aufgeführten Masterstudiengänge sind Ausbildungsrichtungen, deren Öffnung vor der Anzeige
            als offene Zulassung von der Direktion zu bestätigen ist. Die tatsächliche Öffnung jedes
            Studiengangs wird von der Direktion für jedes akademische Jahr bestätigt.
          </p>
        </div>
      </div>

      {/* Hervorgehobene Studiengänge */}
      <h2 className="text-2xl font-bold text-primary mb-4">Studiengänge mit Detailseite</h2>
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {catalogue
          .filter((m) => m.highlighted)
          .map((master) => (
            <Card key={master.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-start gap-2">
                  <master.icon className="mt-1 size-5 shrink-0" />
                  {master.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 flex-1">
                <p className="text-muted-foreground text-sm flex-1">{master.description}</p>
                <Link href={master.href!}>
                  <Button variant="secondary" className="w-full">
                    Studiengang entdecken
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Gesamtkatalog: 3 statische Seiten + 13 Detailseiten + zu bestätigende Richtungen */}
      <h2 className="text-2xl font-bold text-primary mb-2">Katalog der Masterstudiengänge</h2>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        Sechzehn Masterstudiengänge sind im akademischen Referenzrahmen von ABS dokumentiert und verfügen
        jeweils über einen detaillierten Steckbrief (Ziele, Curriculum, angestrebte Kompetenzen,
        Berufsaussichten, Zugangsvoraussetzungen). Für jeden Studiengang wird die tatsächliche Öffnung der
        Zulassungen von der Direktion für jedes Studienjahr bestätigt.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {catalogue.map((master) => (
          <Card key={master.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg text-primary flex items-start gap-2">
                <master.icon className="mt-1 size-5 shrink-0" />
                {master.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 flex-1">
              <CardDescription className="flex-1">{master.description}</CardDescription>
              {master.href ? (
                <Link href={master.href}>
                  <Button variant="secondary" size="sm" className="w-full">
                    Steckbrief des Studiengangs ansehen
                  </Button>
                </Link>
              ) : (
                <p className="text-xs text-muted-foreground italic">
                  Studiengang wird derzeit bestätigt — bitte kontaktieren Sie die Verwaltung.
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gemeinsamer Studienrahmen */}
      <h2 className="text-2xl font-bold text-primary mb-4">Gemeinsamer Rahmen des Masterstudiums</h2>
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <CalendarClock className="size-5" /> Dauer und Aufbau
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>2 Jahre, 4 Semester, 120 Credits gemäß dem pädagogischen LMD-Rahmen.</p>
            <p className="mt-2">
              Vertieftes Englisch in jedem Semester, innerhalb eines zweisprachigen Aufbaus Französisch–Englisch.
            </p>
            <Link href="/academics/pedagogy" className="text-primary underline underline-offset-4 mt-2 inline-block">
              Das pädagogische und sprachliche Konzept ansehen
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <CreditCard className="size-5" /> Orientierender Jahresbeitrag
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">1 500 000 FCFA / Jahr (M1, M2) — orientierend</p>
            <p className="mt-2">
              Verwaltungsgebühr: 15 000 FCFA. Gebühr für die Masterverteidigung: 150 000 FCFA (Beträge für
              2026–2027 noch zu bestätigen).
            </p>
            <p className="mt-2">
              Eine schriftliche Bestätigung der Gebühren durch die Verwaltung ist für jedes Studienjahr erforderlich.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <GraduationCap className="size-5" /> Zugangsvoraussetzungen
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>
              Zugang zum Master 1: Licence (Bachelorabschluss) oder ein anerkannt gleichwertiger Abschluss in
              einem einschlägigen Bereich, mit Prüfung der akademischen Unterlagen.
            </p>
            <p className="mt-2">
              Zugang zum Master 2: Master 1 oder gleichwertiger Abschluss, abhängig vom gewählten Studiengang
              und der Validierung der Voraussetzungen.
            </p>
            <p className="mt-2">
              Die Einreichung eines Antrags stellt keine automatische Zulassung dar; die Entscheidung obliegt
              der Studienleitung.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Handlungsaufforderung */}
      <Card className="bg-secondary">
        <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Interessiert an einem Master an ABS?</h2>
            <p className="text-muted-foreground max-w-xl">
              Kontaktieren Sie das Team von ABS, um zu prüfen, ob der gewünschte Studiengang für das betreffende
              Studienjahr tatsächlich geöffnet ist, sowie die Zulassungsbedingungen, die einzureichenden
              Unterlagen und den Zeitplan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground mt-3">
              <span className="flex items-center gap-2">
                <Phone className="size-4" /> +223 78 14 14 88
              </span>
              <span className="flex items-center gap-2">
                <Mail className="size-4" /> abs.mail1290@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact">
              <Button size="lg">Informationen anfordern</Button>
            </Link>
            <Link href="/apply">
              <Button size="lg" variant="outline">
                Bewerben
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
