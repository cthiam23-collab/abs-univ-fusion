import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Karriereveranstaltungen | ABS",
  description: "Begegnungen, Konferenzen und Karriereveranstaltungen der ABS — African Business School in Bamako.",
  path: "/career-services/events",
  locale: "de",
})

export default function CareerEventsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Karriereveranstaltungen</h1>
      <p className="text-xl mb-8">
        Begegnungen mit Fachleuten, Branchenkonferenzen und Austauschmomente, um Ihren Berufseinstieg vorzubereiten.
        Die Termine werden angekündigt, sobald die Veranstaltungen offiziell geplant sind.
      </p>

      <h2 className="text-3xl font-bold mb-4">Angebotene Veranstaltungsarten</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Jährliches Karriereforum</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <MapPin className="inline mr-2" />
              Campus der ABS-Universität, Bamako
            </p>
            <p className="mb-4">
              Ein Begegnungsformat zwischen Studierenden und Unternehmen aus verschiedenen Sektoren im Dienst des
              Berufseinstiegs.
            </p>
            <Link href="/events/annual-career-fair">
              <Button>Mehr erfahren</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Konferenzen nach Branchen</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Im Laufe des Jahres
            </p>
            <p className="mb-4">
              Beiträge von Fachleuten im Zusammenhang mit den fünf Ausbildungsbereichen, vor Ort oder aus der Ferne,
              je nach Ausgabe.
            </p>
            <Button>Anmelden</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Begegnungen und Networking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <MapPin className="inline mr-2" />
              Auf dem Campus
            </p>
            <p className="mb-4">
              Austauschmomente mit Fachleuten und Absolventen, um Ihr Netzwerk auszubauen.
            </p>
            <Button>Anmelden</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Bereits angebotene Workshops für Studierende</h2>
      <p className="mb-8">
        Während des ganzen Jahres begleiten praktische Workshops Ihre Vorbereitung auf das Berufsleben.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Workshop Lebenslauf und Motivationsschreiben</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Einen klaren und überzeugenden Lebenslauf und ein Motivationsschreiben erstellen.</p>
            <Link href="/career-services/resume-workshop">
              <Button variant="outline">CV-Workshops ansehen</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vorbereitung auf Vorstellungsgespräche</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Üben, den eigenen Werdegang zu präsentieren und sicher zu antworten.</p>
            <Link href="/career-services/counseling">
              <Button variant="outline">Orientierungsberatung ansehen</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Begegnungen mit Absolventen</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Inspirierende Berufswege anhören und Ihre Fragen stellen.</p>
            <Button variant="outline">Kontakt aufnehmen</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Teilnehmen oder mitwirken</h2>
      <p className="mb-8">
        Möchten Sie eine Veranstaltung ausrichten, als Fachkraft mitwirken oder ein Thema vorschlagen? Kontaktieren
        Sie die Verwaltung: Wir tauschen uns gerne mit Ihnen aus.
      </p>
      <Link href="/contact">
        <Button>Kontakt aufnehmen</Button>
      </Link>

      <div className="mt-12">
        <Link href="/career-services">
          <Button variant="outline">Zurück zu den Karriereservices</Button>
        </Link>
      </div>
    </div>
  )
}
