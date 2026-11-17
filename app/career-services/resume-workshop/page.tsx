import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, Users, FileText } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Ateliers CV | ABS",
  description: "Ateliers de rédaction de CV et de lettres de motivation pour les étudiants de ABS — African Business School.",
  path: "/career-services/resume-workshop",
})

export default function ResumeWorkshopPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Ateliers CV et lettre de motivation</h1>
      <p className="text-xl mb-8">
        Apprenez à construire un CV et une lettre de motivation clairs et professionnels qui mettent en valeur votre
        parcours.
      </p>

      <h2 className="text-3xl font-bold mb-4">Thématiques des ateliers</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Les bases d'un bon CV</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Programmé selon le calendrier de l'année
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              Durée communiquée à l'inscription
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              Places limitées par session
            </p>
            <p className="mb-4">Comprendre la structure d'un CV efficace et l'adapter à chaque candidature.</p>
            <Button>S'inscrire</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Techniques avancées</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Programmé selon le calendrier de l'année
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              Durée communiquée à l'inscription
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              Places limitées par session
            </p>
            <p className="mb-4">
              Perfectionner votre CV avec des stratégies de présentation et de mise en valeur de vos réalisations.
            </p>
            <Button>S'inscrire</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lettre de motivation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Programmé selon le calendrier de l'année
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              Durée communiquée à l'inscription
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              Places limitées par session
            </p>
            <p className="mb-4">Rédiger une lettre de motivation cohérente avec votre CV et le poste visé.</p>
            <Button>S'inscrire</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Supports et ressources</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Modèles de CV
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Des exemples de structure de CV sont partagés lors des ateliers et par l'administration.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Verbes d'action
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Une liste de formulations dynamiques pour décrire vos expériences avec précision.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Exemples de lettres
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Des exemples de lettres de motivation pour différents types de candidatures.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Relecture personnalisée</h2>
      <p className="mb-8">
        Soumettez votre CV à l'équipe d'accompagnement pour recevoir des commentaires adaptés à votre situation.
        Contactez l'administration pour connaître les modalités et les créneaux disponibles.
      </p>
      <Button>Demander une relecture</Button>

      <div className="mt-12">
        <Link href="/career-services">
          <Button variant="outline">Retour aux services carrières</Button>
        </Link>
      </div>
    </div>
  )
}
