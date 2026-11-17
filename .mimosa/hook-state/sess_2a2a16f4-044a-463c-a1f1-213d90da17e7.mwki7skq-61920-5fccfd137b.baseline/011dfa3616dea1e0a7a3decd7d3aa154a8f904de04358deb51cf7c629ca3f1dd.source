import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Globe } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Unterstützung für Studierende | ABS",
  description: "Services zur Unterstützung und Begleitung der Studierenden der ABS — African Business School.",
  path: "/student-life/support",
  locale: "de",
})

export default function StudentSupportPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Unterstützung für Studierende</h1>

      <p className="text-xl text-muted-foreground mb-8">
        Die ABS-Universität bemüht sich, jede Studierende und jeden Studierenden während des gesamten Studiums zu
        begleiten — für den akademischen Erfolg ebenso wie für das persönliche Wohlbefinden.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <BookOpen className="mr-2 h-6 w-6" />
              Akademische Begleitung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Pädagogische Begleitung der Studierenden</li>
              <li>Hilfe bei der Organisation der Arbeit</li>
              <li>Unterstützung bei der Vorbereitung der in den Studienplänen vorgesehenen Arbeiten und Projekte</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Heart className="mr-2 h-6 w-6" />
              Zuhören und Wohlbefinden
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Ein Team, das den Studierenden zuhört</li>
              <li>Unterstützung bei persönlichen oder akademischen Schwierigkeiten</li>
              <li>Bei Bedarf Vermittlung an die zuständigen Ansprechpartner</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Globe className="mr-2 h-6 w-6" />
              Internationale Studierende
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Empfang und Integration von Studierenden aus dem Ausland</li>
              <li>Praktische Orientierung für das Leben in Bamako</li>
              <li>Sprachliche Unterstützung im zweisprachigen Rahmen Französisch-Englisch</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="text-muted-foreground">
        Unser Team steht Ihnen während Ihres gesamten Studiums zur Verfügung. Zögern Sie nicht, die Verwaltung zu
        kontaktieren, wenn Sie Hilfe benötigen: Jede Anfrage wird mit Aufmerksamkeit behandelt.
      </p>
    </div>
  )
}
