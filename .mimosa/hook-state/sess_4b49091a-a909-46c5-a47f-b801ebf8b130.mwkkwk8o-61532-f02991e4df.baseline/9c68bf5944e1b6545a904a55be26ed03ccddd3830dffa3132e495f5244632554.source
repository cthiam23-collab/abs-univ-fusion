import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Jährliches Karriereforum | ABS",
  description: "Das jährliche Karriereforum der ABS — African Business School: Begegnungen zwischen Studierenden und Unternehmen.",
  path: "/events/annual-career-fair",
  locale: "de",
})

export default function AnnualCareerFairPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Jährliches Karriereforum</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        Ein Treffen zwischen Studierenden und Unternehmen, organisiert von der ABS — African Business School.
        Termine und Modalitäten jeder Ausgabe werden angekündigt, sobald die Veranstaltung offiziell geplant ist.
      </p>

      <Image
        src="/images/campus/IMG-20250212-WA0022.jpg"
        alt="Jährliches Karriereforum"
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Für wen?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Die Studierenden der ABS-Universität, im Bachelorabschluss wie im Master, alle Ausbildungsbereiche.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Wo?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Auf dem Campus der ABS-Universität, Hamdallaye ACI 2000, Bamako.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Wie kann man teilnehmen?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Die Anmeldemodalitäten werden von der Verwaltung im Vorfeld der Veranstaltung über die offiziellen
              Kanäle der Einrichtung mitgeteilt.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none">
        <h2>Vorstellung der Veranstaltung</h2>
        <p>
          Das jährliche Karriereforum der ABS-Universität gibt Studierenden die Gelegenheit, Unternehmen und
          Fachleute aus verschiedenen Sektoren zu treffen. Ob Sie ein Praktikum, eine erste Berufserfahrung oder
          einfach Orientierung über die Berufsfelder suchen — diese Veranstaltung ist darauf ausgelegt, Sie auf Ihrem
          Weg zu unterstützen.
        </p>

        <h2>Was die Veranstaltung umfassen kann</h2>
        <ul>
          <li>Begegnungen mit Unternehmen und Fachleuten, je nach Ausgabe</li>
          <li>Austausch über Berufe im Zusammenhang mit den fünf Ausbildungsbereichen</li>
          <li>Hinweise zur Vorbereitung Ihrer Bewerbungsunterlagen und des Vorstellungsgesprächs</li>
          <li>Ansätze für Praktika, im Einklang mit den Studienplänen</li>
        </ul>

        <h2>Gut vorbereitet sein</h2>
        <ol>
          <li>Ihren Lebenslauf aktualisieren und mehrere Exemplare vorbereiten</li>
          <li>Sich vorab über die anwesenden Sektoren und Unternehmen informieren</li>
          <li>Eine kurze Präsentation Ihres Werdegangs und Ihrer Ziele vorbereiten</li>
          <li>Sich professionell präsentieren</li>
        </ol>

        <h2>Praktische Informationen</h2>
        <p>
          Datum, detailliertes Programm und Teilnehmerliste jeder Ausgabe werden von der Verwaltung mitgeteilt,
          sobald die Veranstaltung offiziell geplant ist. Kontaktieren Sie die Verwaltung für jede Frage oder um die
          Teilnahme Ihres Unternehmens vorzuschlagen.
        </p>
      </div>
    </div>
  )
}
