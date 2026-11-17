import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe2,
  Info,
  Table2,
  Target,
  Lightbulb,
  DoorOpen,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Master in Internationalem Management | ABS",
  description:
    "Master in Internationalem Management von ABS in Bamako: Strategie, interkulturelles Management, internationale Entwicklung und Steuerung grenzüberschreitender Aktivitäten. 2 Jahre, 4 Semester, 120 Credits.",
  path: "/programs/masters/international-business",
  locale: "de",
})

const infos = [
  ["Abschluss", "Master — 2 Jahre, 4 Semester, 120 Credits (LMD-Rahmen)"],
  ["Ort", "Bamako — Hamdallaye ACI 2000"],
  ["Sprachen", "Französisch / Englisch (Englisch in jedem Semester)"],
  [
    "Orientierender Jahresbeitrag",
    "1 500 000 FCFA / Jahr (M1, M2) — schriftliche Bestätigung für 2026–2027 erforderlich",
  ],
  ["Verwaltungsgebühr", "15 000 FCFA"],
  [
    "Gebühr für die Verteidigung",
    "150 000 FCFA für den Master — Betrag für 2026–2027 zu bestätigen",
  ],
]

export default function InternationalBusinessPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-10">
        <Badge variant="outline" className="mb-4">
          <Globe2 className="size-4 mr-1" /> Master — Studienbereich
        </Badge>
        <h1 className="text-4xl font-bold text-primary mb-4">Master in Internationalem Management</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Führungskräfte ausbilden, die Strategie, interkulturelles Management, internationale Entwicklung
          und die Steuerung grenzüberschreitender Aktivitäten vertiefen können — in einer sich wandelnden
          regionalen und internationalen Wirtschaftsumgebung.
        </p>
        <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <Info className="mt-0.5 size-4 shrink-0" />
          <p>
            Dieser Studiengang entspricht einer Ausbildungsrichtung, deren Öffnung vor der Anzeige als
            offene Zulassung von der Direktion zu bestätigen ist: Curriculum, Voraussetzungen,
            Zulassungsmodalitäten und Öffnung sind zu validieren. Kontaktieren Sie die Verwaltung, um die
            Situation des Studiengangs für das betreffende Studienjahr zu prüfen.
          </p>
        </div>
      </div>

      {/* Wichtige Informationen */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="text-xl text-primary flex items-center gap-2">
            <Table2 className="size-5" /> Wichtige Informationen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <tbody>
              {infos.map(([label, value]) => (
                <tr key={label} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-medium text-foreground align-top whitespace-nowrap w-56">
                    {label}
                  </td>
                  <td className="py-2 text-muted-foreground">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Target className="size-5" /> Ziele
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              Die Strategie vertiefen, wie sie auf über nationale Grenzen hinausgeführte Aktivitäten
              angewendet wird.
            </p>
            <p>
              Interkulturelles Management und die Fähigkeit entwickeln, die internationale Entwicklung
              einer Organisation zu steuern — im Einklang mit der Vertiefungs- und Spezialisierungsdynamik
              des Masterzyklus von ABS.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Lightbulb className="size-5" /> Entwickelte Kompetenzen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Strategie und internationales Management</li>
              <li>Interkulturelles Management</li>
              <li>Internationale Entwicklung der Aktivitäten</li>
              <li>Steuerung grenzüberschreitender Aktivitäten</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mt-3">
              Kompetenzen, die strikt aus dem Präsentationsblatt des Studienbereichs abgeleitet sind; das
              detaillierte Curriculum und die Kompetenzreferenzen bleiben zu validieren.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <DoorOpen className="size-5" /> Zugangsvoraussetzungen
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              <span className="font-medium text-foreground">Zugang zum Master 1:</span> Licence
              (Bachelorabschluss) oder ein anerkannt gleichwertiger Abschluss in einem einschlägigen
              Bereich, mit Prüfung der akademischen Unterlagen (Notenausweise der drei
              Licence-Jahre, Motivationsschreiben, Lebenslauf).
            </p>
            <p>
              <span className="font-medium text-foreground">Zugang zum Master 2:</span> Master 1 oder ein
              gleichwertiger Abschluss im Fachgebiet, abhängig von der Validierung der Voraussetzungen
              und des akademischen Werdegangs.
            </p>
            <p>
              Die Einreichung eines Antrags stellt keine automatische Zulassung dar; jede Bewerbung
              unterliegt der Prüfung der Unterlagen und der Entscheidung der Studienleitung.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Globe2 className="size-5" /> Orientierende Berufsaussichten
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              Orientierend kann dieser Master auf Verantwortungsrollen im Bereich der internationalen
              Entwicklung und der Steuerung grenzüberschreitender Aktivitäten in Unternehmen,
              Institutionen und Organisationen vorbereiten, die regional oder international tätig sind —
              je nach Studiengang und Erfahrung der jeweiligen Absolventin oder des jeweiligen Absolventen.
            </p>
            <p className="text-xs italic">
              Die Berufsaussichten sind Perspektiven, keine Garantien für eine Anstellung.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Handlungsaufforderung */}
      <Card className="bg-secondary">
        <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Möchten Sie sich für diesen Master bewerben?
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Kontaktieren Sie das Team von ABS, um die Zulassungsbedingungen, die einzureichenden
              Unterlagen, den Zeitplan und die verfügbaren Plätze zu prüfen.
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
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <MessageCircle className="size-4 mr-2" /> WhatsApp
              </Button>
            </a>
            <Link href="/apply">
              <Button size="lg" variant="secondary">
                Bewerben
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
