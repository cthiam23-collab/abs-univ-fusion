import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Plateforme LMS | ABS",
  description: "Plateforme d'apprentissage en ligne de ABS — African Business School.",
  path: "/e-campus/lms",
})

export default function LMSPage() {
  const lmsFeatures = [
    {
      title: "Supports de cours",
      description: "Accéder aux notes de cours, lectures et ressources multimédias mises en ligne par les enseignants",
      image:
        "/images/campus/IMG-20250212-WA0016.jpg",
    },
    {
      title: "Devoirs et évaluations",
      description: "Remettre vos travaux et passer les évaluations en ligne prévues par vos enseignants",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Espaces de discussion",
      description: "Échanger avec vos pairs et vos enseignants autour des cours",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Suivi des résultats",
      description: "Consulter vos notes et suivre votre progression académique",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Plateforme d'apprentissage en ligne (LMS)</h1>

      <p className="text-xl mb-8">
        La plateforme d'apprentissage en ligne de l'ABS est votre point central pour tout ce qui concerne
        vos cours : consulter les supports, remettre vos travaux, participer aux discussions et suivre votre
        progression, où que vous soyez.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Fonctionnalités</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lmsFeatures.map((feature, index) => (
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
        <h2 className="text-3xl font-semibold mb-6">Bien démarrer</h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Connectez-vous à la plateforme avec vos identifiants fournis par l'ABS</li>
              <li>Retrouvez sur votre tableau de bord l'ensemble de vos cours inscrits</li>
              <li>Ouvrez un cours pour accéder à ses supports, travaux et discussions</li>
              <li>Consultez le calendrier pour les dates et échéances importantes</li>
              <li>Ajustez vos notifications pour rester informé des activités de vos cours</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Assistance</h2>
        <p className="mb-4">
          Une difficulté avec la plateforme ? Contactez l'administration : l'équipe vous orientera vers la bonne
          assistance et vous communiquera les modalités d'accès.
        </p>
        <Link href="/e-campus/lms/support">
          <Button size="lg">Obtenir de l'assistance</Button>
        </Link>
      </section>
    </div>
  )
}
