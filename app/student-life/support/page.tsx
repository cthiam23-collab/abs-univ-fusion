import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Globe } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Soutien aux étudiants | ABS",
  description: "Services de soutien et d'accompagnement des étudiants de ABS — African Business School.",
  path: "/student-life/support",
})

export default function StudentSupportPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Soutien aux étudiants</h1>

      <p className="text-xl text-muted-foreground mb-8">
        L'ABS s'attache à accompagner chaque étudiant tout au long de son parcours, pour sa réussite
        académique comme pour son bien-être personnel.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <BookOpen className="mr-2 h-6 w-6" />
              Accompagnement académique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Suivi pédagogique des étudiants</li>
              <li>Aide à l'organisation du travail</li>
              <li>Appui dans la préparation des travaux et projets prévus par les maquettes de formation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Heart className="mr-2 h-6 w-6" />
              Écoute et bien-être
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Une équipe à l'écoute des étudiants</li>
              <li>Soutien en cas de difficultés personnelles ou académiques</li>
              <li>Orientation vers les bons interlocuteurs au besoin</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Globe className="mr-2 h-6 w-6" />
              Étudiants internationaux
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Accueil et intégration des étudiants venus d'ailleurs</li>
              <li>Repères pratiques pour la vie à Bamako</li>
              <li>Appui linguistique dans un cadre bilingue français-anglais</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="text-muted-foreground">
        Notre équipe est à votre disposition tout au long de votre parcours. N'hésitez pas à contacter
        l'administration si vous avez besoin d'aide : chaque demande sera traitée avec attention.
      </p>
    </div>
  )
}
