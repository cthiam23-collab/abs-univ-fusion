import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Classes virtuelles | ABS",
  description: "Classes virtuelles et outils de formation à distance de ABS — African Business School.",
  path: "/e-campus/virtual-classrooms",
})

export default function VirtualClassroomsPage() {
  const features = [
    {
      title: "Cours en direct",
      description: "Suivre des enseignements en temps réel et poser vos questions pendant la séance",
      image:
        "/images/campus/IMG-20250212-WA0016.jpg",
    },
    {
      title: "Travail collaboratif",
      description: "Avancer vos projets de groupe grâce aux outils de collaboration à distance",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Séances enregistrées",
      description: "Revoir les enregistrements mis à disposition pour réviser à votre rythme",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Échanges avec les enseignants",
      description: "Bénéficier de temps d'échange individuel avec vos enseignants selon les modalités fixées",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
  ]

  const tips = [
    "Veiller à disposer d'une connexion internet stable",
    "Utiliser un casque pour une meilleure qualité audio",
    "Se placer dans un endroit calme pour suivre les cours",
    "Participer activement aux échanges",
    "Faire des pauses régulières pour éviter la fatigue visuelle",
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Classes virtuelles</h1>

      <p className="text-xl mb-8">
        Les classes virtuelles permettent de suivre des enseignements interactifs à distance, en lien avec les
        programmes des cinq pôles de formation de l'ABS. Connectez-vous avec vos enseignants et vos pairs,
        où que vous soyez.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Points clés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Comment ça se passe</h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Connectez-vous au portail en ligne de l'ABS</li>
              <li>Consultez le planning de vos classes virtuelles, communiqué par l'administration</li>
              <li>Cliquez sur le lien de la séance prévue à votre emploi du temps</li>
              <li>Rejoignez la visioconférence avec vos identifiants ABS</li>
              <li>Participez au cours, posez vos questions et échangez avec vos pairs</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Conseils pour bien suivre les cours à distance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <p>{tip}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Assistance technique</h2>
        <p className="mb-4">
          Un problème technique avec les classes virtuelles ? Contactez l'administration pour être orienté vers le
          support adapté.
        </p>
        <Link href="/e-campus/support">
          <Button size="lg">Obtenir une assistance technique</Button>
        </Link>
      </section>
    </div>
  )
}
