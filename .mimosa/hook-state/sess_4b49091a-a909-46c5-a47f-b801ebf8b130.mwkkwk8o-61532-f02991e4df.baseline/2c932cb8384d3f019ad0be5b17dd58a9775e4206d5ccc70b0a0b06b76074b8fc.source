import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, Users } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Berufsorientierungsberatung | ABS",
  description: "Individuelle Beratung und Berufsorientierung für die Studierenden der ABS — African Business School.",
  path: "/career-services/counseling",
  locale: "de",
})

export default function CareerCounselingPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Berufsorientierungsberatung</h1>
      <p className="text-xl mb-8">
        Profitieren Sie von einer persönlichen Begleitung bei der Definition Ihres beruflichen Projekts, im Einklang
        mit Ihrem Ausbildungsbereich.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2" />
              Einzelgespräche
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Ein Gespräch mit dem Begleitteam, um Ihr berufliches Projekt zu besprechen und einen an Ihre Ziele
              angepassten Aktionsplan zu erarbeiten.
            </p>
            <Button>Ein Gespräch anfragen</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2" />
              Gruppenworkshops
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Gruppenworkshops, um Berufe zu erkunden, sich mit Ihren Kommilitonen auszutauschen und Ihren
              Berufseinstieg vorzubereiten.
            </p>
            <Button>Workshops ansehen</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2" />
              Kurze Fragen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Für eine punktuelle Frage zu Ihrer Orientierung oder Ihrem Lebenslauf kontaktieren Sie die Verwaltung,
              die Ihnen die verfügbaren Terminfenster mitteilt.
            </p>
            <Button>Kontakt aufnehmen</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Unser Begleitteam</h2>
      <p className="mb-8">
        Das Team für Orientierung und Berufseinstieg begleitet die Studierenden jedes Ausbildungsbereichs. Seine
        Mitglieder werden den Studierenden während der Begleitungstermine vorgestellt.
      </p>

      {/* Beraterprofile hier ergänzen */}

      <h2 className="text-3xl font-bold mb-4">Ressourcen</h2>
      <p className="mb-8">Bereiten Sie Ihren Orientierungstermin vor, indem Sie unsere Ressourcen entdecken.</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Kompetenzbilanz</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Ihre Stärken und Interessen definieren, um Ihr berufliches Projekt auszurichten.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leitfäden nach Branchen</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Die Branchen Ihrer Ausbildung und die möglichen Berufsfelder entdecken.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vorbereitung auf Vorstellungsgespräche</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Hinweise, um Ihre Praktikums- und Einstellungsgespräche mit Selbstvertrauen zu meistern.</p>
          </CardContent>
        </Card>
      </div>

      <Link href="/career-services">
        <Button variant="outline">Zurück zu den Karriereservices</Button>
      </Link>
    </div>
  )
}
