import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Conseil académique | ABS",
  description: "Conseil et suivi académique des étudiants de ABS — African Business School.",
  path: "/student-resources/academic-advising",
})

export default function AcademicAdvisingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Suivi et conseil académique</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Qu'est-ce que le conseil académique ?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Le conseil académique est une relation d'accompagnement entre l'étudiant et l'équipe pédagogique. Elle a
            pour but d'aider l'étudiant à construire un parcours d'études cohérent avec ses centres d'intérêt, ses
            capacités et son projet professionnel, au sein des cinq pôles de formation de l'ABS.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Nos services</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Aide à l'organisation des études et au suivi du calendrier académique</li>
            <li>Orientation dans le choix des parcours au sein de chaque pôle de formation</li>
            <li>Suivi de la progression académique au fil des semestres</li>
            <li>Préparation des stages et des projets prévus par les maquettes de formation</li>
            <li>Exploration des poursuites d'études possibles, de la Licence (3 ans, 180 crédits) au Master (2 ans, 120 crédits)</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Rencontrer votre conseiller</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            L'équipe de suivi académique accompagne les étudiants tout au long de leur parcours. Pour prendre rendez-vous
            avec un conseiller, contactez l'administration qui vous indiquera les modalités et les créneaux disponibles.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
