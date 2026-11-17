import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomTabs, CustomTabsContent, CustomTabsList, CustomTabsTrigger } from "@/components/ui/custom-tabs"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Organisations étudiantes | ABS",
  description: "Organisations et associations étudiantes de ABS — African Business School.",
  path: "/student-life/organizations",
})

const organizations = [
  {
    name: "Initiatives académiques",
    description:
      "Groupes de travail, révisions en équipe et entraide entre étudiants autour des enseignements des cinq pôles de formation.",
    image: "/images/campus/IMG-20250212-WA0013.jpg",
    category: "academique",
  },
  {
    name: "Débats et prise de parole",
    description:
      "Exercices de débat et d'expression orale, utiles pour la formation professionnelle et la confiance en soi.",
    image: "/images/campus/IMG-20250212-WA0014.jpg",
    category: "academique",
  },
  {
    name: "Échanges culturels",
    description:
      "Rencontres et activités qui célèbrent la diversité des cultures africaines et favorisent l'intégration de tous.",
    image:
      "/images/campus/IMG-20250212-WA0015.jpg",
    category: "culturel",
  },
  {
    name: "Esprit d'entreprise",
    description:
      "Échanges autour de l'entrepreneuriat et des projets, en cohérence avec la formation en administration des affaires.",
    image: "/images/campus/IMG-20250212-WA0017.jpg",
    category: "professionnel",
  },
  {
    name: "Engagement et citoyenneté",
    description:
      "Initiatives de sensibilisation et d'engagement citoyen portées par les étudiants au service de leur environnement.",
    image: "/images/campus/IMG-20250212-WA0019.jpg",
    category: "engagement",
  },
  {
    name: "Créativité artistique",
    description:
      "Espaces d'expression artistique et culturelle pour les étudiants qui souhaitent partager leurs talents.",
    image: "/images/campus/IMG-20250212-WA0018.jpg",
    category: "culturel",
  },
]

export default function StudentOrganizationsPage() {
  const categories = ["Tout", "Académique", "Culturel", "Professionnel", "Engagement"]
  const categoryKeys: Record<string, string> = {
    Académique: "academique",
    Culturel: "culturel",
    Professionnel: "professionnel",
    Engagement: "engagement",
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Organisations étudiantes</h1>
      <p className="text-xl mb-4 text-center">
        La vie associative de l'ABS se construit avec les étudiants et évolue chaque année selon leurs
        initiatives
      </p>
      <p className="text-md mb-12 text-center text-muted-foreground">
        La liste ci-dessous présente des types d'initiatives. Pour connaître les organisations actuellement actives ou
        proposer la création d'un club, contactez l'administration.
      </p>

      <CustomTabs defaultValue="Tout" className="w-full">
        <CustomTabsList className="flex justify-center mb-8">
          {categories.map((category) => (
            <CustomTabsTrigger key={category} value={category} className="px-4 py-2">
              {category}
            </CustomTabsTrigger>
          ))}
        </CustomTabsList>
        {categories.map((category) => (
          <CustomTabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {organizations
                .filter((org) => category === "Tout" || org.category === categoryKeys[category])
                .map((org, index) => (
                  <Card key={index} className="hover:shadow-lg transition-duration-300">
                    <Image
                      src={org.image || "/placeholder.svg"}
                      alt={org.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <CardTitle>{org.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{org.description}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </CustomTabsContent>
        ))}
      </CustomTabs>
    </div>
  )
}
