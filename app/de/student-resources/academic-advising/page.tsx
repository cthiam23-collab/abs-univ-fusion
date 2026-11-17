import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Akademische Beratung | ABS",
  description: "Beratung und akademische Begleitung der Studierenden der ABS — African Business School in Bamako.",
  path: "/student-resources/academic-advising",
  locale: "de",
})

export default function AcademicAdvisingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Begleitung und akademische Beratung</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Was ist akademische Beratung?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Akademische Beratung ist eine begleitende Beziehung zwischen der Studierenden bzw. dem Studierenden und
            dem Lehrteam. Sie hat zum Ziel, einen Studiengang aufzubauen, der mit den Interessen, den Fähigkeiten und
            dem beruflichen Projekt übereinstimmt, innerhalb der fünf Ausbildungsbereiche der ABS-Universität.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Unsere Services</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Hilfe bei der Organisation des Studiums und der Verfolgung des akademischen Kalenders</li>
            <li>Orientierung bei der Wahl der Wege innerhalb jedes Ausbildungsbereichs</li>
            <li>Verfolgung des akademischen Fortschritts über die Semester hinweg</li>
            <li>Vorbereitung der Praktika und Projekte, die in den Studienplänen vorgesehen sind</li>
            <li>Erkundung der möglichen Studienfortsetzungen, vom Licence (Bachelorabschluss, 3 Jahre, 180 Credits) bis zum Master (2 Jahre, 120 Credits)</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Ihre Beraterin oder Ihren Berater treffen</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Das Team der akademischen Begleitung begleitet die Studierenden während ihres gesamten Studiums. Um einen
            Termin mit einer Beraterin oder einem Berater zu vereinbaren, kontaktieren Sie die Verwaltung, die Ihnen
            die Modalitäten und die verfügbaren Terminfenster mitteilt.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
