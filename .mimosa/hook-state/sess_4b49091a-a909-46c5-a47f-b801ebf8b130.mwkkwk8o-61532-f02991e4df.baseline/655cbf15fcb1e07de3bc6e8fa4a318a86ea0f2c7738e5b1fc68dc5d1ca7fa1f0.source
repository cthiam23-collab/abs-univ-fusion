import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, Users, FileText } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "CV-Workshops | ABS",
  description: "Workshops zur Erstellung von Lebensläufen und Motivationsschreiben für die Studierenden der ABS — African Business School.",
  path: "/career-services/resume-workshop",
  locale: "de",
})

export default function ResumeWorkshopPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Workshops Lebenslauf und Motivationsschreiben</h1>
      <p className="text-xl mb-8">
        Lernen Sie, einen klaren und professionellen Lebenslauf und ein Motivationsschreiben zu erstellen, die Ihren
        Werdegang hervorheben.
      </p>

      <h2 className="text-3xl font-bold mb-4">Themen der Workshops</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Grundlagen eines guten Lebenslaufs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Geplant gemäß dem Jahreskalender
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              Dauer wird bei der Anmeldung mitgeteilt
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              Begrenzte Plätze pro Sitzung
            </p>
            <p className="mb-4">Die Struktur eines effektiven Lebenslaufs verstehen und sie auf jede Bewerbung abstimmen.</p>
            <Button>Anmelden</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fortgeschrittene Techniken</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Geplant gemäß dem Jahreskalender
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              Dauer wird bei der Anmeldung mitgeteilt
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              Begrenzte Plätze pro Sitzung
            </p>
            <p className="mb-4">
              Ihren Lebenslauf mit Strategien zur Darstellung und Hervorhebung Ihrer Leistungen verfeinern.
            </p>
            <Button>Anmelden</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Motivationsschreiben</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Geplant gemäß dem Jahreskalender
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              Dauer wird bei der Anmeldung mitgeteilt
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              Begrenzte Plätze pro Sitzung
            </p>
            <p className="mb-4">Ein Motivationsschreiben schreiben, das zum Lebenslauf und zur angestrebten Stelle passt.</p>
            <Button>Anmelden</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Unterlagen und Ressourcen</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Lebenslaufvorlagen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Beispiele für Lebenslaufstrukturen werden in den Workshops und von der Verwaltung geteilt.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Handlungsverben
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Eine Liste dynamischer Formulierungen, um Ihre Erfahrungen präzise zu beschreiben.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Beispiele für Schreiben
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Beispiele für Motivationsschreiben für verschiedene Arten von Bewerbungen.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Individuelle Durchsicht</h2>
      <p className="mb-8">
        Reichen Sie Ihren Lebenslauf beim Begleitteam ein, um Rückmeldungen zu erhalten, die zu Ihrer Situation
        passen. Kontaktieren Sie die Verwaltung, um die Modalitäten und die verfügbaren Terminfenster zu erfahren.
      </p>
      <Button>Durchsicht anfragen</Button>

      <div className="mt-12">
        <Link href="/career-services">
          <Button variant="outline">Zurück zu den Karriereservices</Button>
        </Link>
      </div>
    </div>
  )
}
