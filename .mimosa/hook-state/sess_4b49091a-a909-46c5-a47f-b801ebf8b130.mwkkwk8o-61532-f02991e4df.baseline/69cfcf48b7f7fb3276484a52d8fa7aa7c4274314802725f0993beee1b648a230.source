import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Intégration culturelle | ABS",
  description: "Ouverture culturelle et vie associative à ABS — African Business School : dialogues, cultures et initiatives étudiantes.",
  path: "/cultural-integration",
})

export default function CulturalIntegrationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">L'intégration culturelle à l'ABS</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0017.jpg"
            alt="Rencontres culturelles entre étudiants"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>Rencontres culturelles</CardTitle>
            <CardDescription>
              Des moments d'échange qui célèbrent la richesse et la diversité des cultures africaines.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0022.jpg"
            alt="Événements culturels"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>Événements culturels</CardTitle>
            <CardDescription>
              Conférences, expositions et célébrations ponctuent l'année lorsque elles sont officiellement programmées.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0018.jpg"
            alt="Diversité culturelle"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>Diversité culturelle</CardTitle>
            <CardDescription>
              Des étudiants venus d'horizons différents apprennent à se connaître et à travailler ensemble.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-semibold mb-6">Notre engagement pour l'intégration culturelle</h2>
        <p className="mb-4">
          À ABS — African Business School, nous considérons l'ouverture culturelle comme une dimension
          essentielle de la formation : elle prépare des diplômés capables d'évoluer dans des environnements variés, en
          Afrique et au-delà. La vie au campus encourage le dialogue entre étudiants de parcours et de cultures
          différentes, dans l'esprit panafricain qui anime l'établissement.
        </p>
        <p className="mb-4">
          Cette ouverture se vit aussi dans les enseignements : le bilinguisme français-anglais, l'initiation
          progressive à l'espagnol en relations et affaires internationales, et les projets et stages prévus par les
          maquettes de formation constituent autant d'occasions d'élargir ses repères culturels.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-2xl font-semibold mb-4">Types d'activités proposées au fil de l'année</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rencontres et journées d'échange autour des cultures africaines</li>
            <li>Conférences et interventions avec des invités</li>
            <li>Initiatives culturelles portées par les étudiants</li>
            <li>Temps d'accueil et d'intégration des nouveaux étudiants</li>
          </ul>
          <p className="mt-4 text-sm">
            Le calendrier précis de ces activités est communiqué par l'administration lorsque les événements sont
            officiellement programmés.
          </p>
        </div>
      </div>
    </div>
  )
}
