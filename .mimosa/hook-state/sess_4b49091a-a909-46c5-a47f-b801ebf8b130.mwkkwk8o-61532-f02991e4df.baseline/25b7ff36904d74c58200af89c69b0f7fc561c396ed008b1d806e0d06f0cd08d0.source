import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Restauration étudiante | ABS",
  description: "Restauration pour les étudiants de ABS — African Business School.",
  path: "/student-life/dining",
})

const diningOptions = [
  {
    name: "Restauration sur le campus",
    description:
      "Des solutions de restauration accessibles aux étudiants sur le campus, dans le respect des règles de vie de l'établissement.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "Formules et horaires",
    description:
      "Les formules proposées et les horaires de service sont communiqués par l'administration en début d'année.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "Besoins particuliers",
    description:
      "Pour toute demande particulière liée à l'alimentation, adressez-vous à l'administration qui étudiera les solutions possibles.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "Restauration à proximité",
    description:
      "Le campus est situé à Hamdallaye ACI 2000, Bamako, dans un quartier où les étudiants trouvent des points de restauration variés.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
]

export default function DiningPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Restauration étudiante</h1>

      <p className="text-xl mb-8">
        L'ABS veille à ce que ses étudiants disposent de solutions de restauration adaptées à leurs
        contraintes et à leur emploi du temps. Les modalités précises (lieux, formules, tarifs) sont communiquées par
        l'administration.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-12">
        {diningOptions.map((option, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={option.image || "/placeholder.svg"}
              alt={option.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{option.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{option.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informations pratiques</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Les horaires de restauration suivent l'organisation des cours communiquée par l'administration</li>
            <li>Les formules et conditions d'accès sont précisées en début d'année académique</li>
            <li>Pour toute question sur la restauration, contactez l'administration au +223 78 14 14 88 ou par courriel à abs.mail1290@gmail.com</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
