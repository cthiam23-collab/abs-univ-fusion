import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, Users } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Conseil en orientation | ABS",
  description: "Conseil et orientation professionnelle individualisés pour les étudiants de ABS — African Business School.",
  path: "/career-services/counseling",
})

export default function CareerCounselingPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Conseil en orientation professionnelle</h1>
      <p className="text-xl mb-8">
        Bénéficiez d'un accompagnement personnalisé dans la définition de votre projet professionnel, en cohérence
        avec votre pôle de formation.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2" />
              Entretiens individuels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Un entretien avec l'équipe d'accompagnement pour discuter de votre projet et construire un plan
              d'action adapté à vos objectifs.
            </p>
            <Button>Demander un entretien</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2" />
              Ateliers collectifs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Des ateliers de groupe pour explorer les métiers, échanger avec vos pairs et préparer votre insertion
              professionnelle.
            </p>
            <Button>Voir les ateliers</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2" />
              Questions rapides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Pour une question ponctuelle sur votre orientation ou votre CV, contactez l'administration qui vous
              indiquera les créneaux disponibles.
            </p>
            <Button>Nous contacter</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Notre équipe d'accompagnement</h2>
      <p className="mb-8">
        L'équipe chargée de l'orientation et de l'insertion professionnelle accompagne les étudiants de chaque pôle de
        formation. Ses membres sont présentés aux étudiants lors des séances d'accompagnement.
      </p>

      {/* Ajouter ici les profils des conseillers */}

      <h2 className="text-3xl font-bold mb-4">Ressources</h2>
      <p className="mb-8">Préparez votre séance d'orientation en explorant nos ressources.</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Bilan de compétences</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Définir vos points forts et vos centres d'intérêt pour orienter votre projet.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Guides par secteur</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Découvrir les secteurs liés à votre formation et les débouchés possibles.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Préparation aux entretiens</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Des conseils pour aborder vos entretiens de stage ou d'embauche avec confiance.</p>
          </CardContent>
        </Card>
      </div>

      <Link href="/career-services">
        <Button variant="outline">Retour aux services carrières</Button>
      </Link>
    </div>
  )
}
