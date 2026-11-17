import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Événements carrières | ABS",
  description: "Rencontres, conférences et événements carrière organisés par ABS — African Business School.",
  path: "/career-services/events",
})

export default function CareerEventsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Événements carrières</h1>
      <p className="text-xl mb-8">
        Rencontres avec des professionnels, conférences par secteur et moments d'échange pour préparer votre insertion
        professionnelle. Les dates sont annoncées lorsque les événements sont officiellement programmés.
      </p>

      <h2 className="text-3xl font-bold mb-4">Types d'événements proposés</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Forum annuel des carrières</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <MapPin className="inline mr-2" />
              Campus de l'ABS, Bamako
            </p>
            <p className="mb-4">
              Un temps de rencontre entre étudiants et entreprises de différents secteurs, au service de l'insertion
              professionnelle.
            </p>
            <Link href="/events/annual-career-fair">
              <Button>En savoir plus</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conférences par secteur</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Au fil de l'année
            </p>
            <p className="mb-4">
              Des interventions de professionnels en lien avec les cinq pôles de formation, sur site ou à distance
              selon les éditions.
            </p>
            <Button>S'inscrire</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rencontres et réseautage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <MapPin className="inline mr-2" />
              Sur le campus
            </p>
            <p className="mb-4">
              Des moments d'échange avec des professionnels et des anciens étudiants pour développer votre réseau.
            </p>
            <Button>S'inscrire</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Ateliers déjà proposés aux étudiants</h2>
      <p className="mb-8">
        Tout au long de l'année, des ateliers pratiques accompagnent votre préparation à la vie professionnelle.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Atelier CV et lettre de motivation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Construire un CV et une lettre de motivation clairs et convaincants.</p>
            <Link href="/career-services/resume-workshop">
              <Button variant="outline">Voir les ateliers CV</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Préparation aux entretiens</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">S'entraîner à présenter son parcours et à répondre avec assurance.</p>
            <Link href="/career-services/counseling">
              <Button variant="outline">Voir le conseil en orientation</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rencontres avec des diplômés</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Écouter des parcours professionnels inspirants et poser vos questions.</p>
            <Button variant="outline">Nous contacter</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Participer ou intervenir</h2>
      <p className="mb-8">
        Vous souhaitez accueillir un événement, intervenir comme professionnel ou proposer une thématique ? Contactez
        l'administration : nous serons heureux d'échanger avec vous.
      </p>
      <Link href="/contact">
        <Button>Nous contacter</Button>
      </Link>

      <div className="mt-12">
        <Link href="/career-services">
          <Button variant="outline">Retour aux services carrières</Button>
        </Link>
      </div>
    </div>
  )
}
