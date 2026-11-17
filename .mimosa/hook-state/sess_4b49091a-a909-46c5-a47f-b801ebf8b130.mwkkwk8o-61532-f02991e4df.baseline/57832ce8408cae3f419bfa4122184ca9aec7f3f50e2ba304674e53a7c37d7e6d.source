import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomTabs, CustomTabsContent, CustomTabsList, CustomTabsTrigger } from "@/components/ui/custom-tabs"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Logement étudiant | ABS",
  description: "Informations logement pour les étudiants de ABS — African Business School.",
  path: "/student-life/housing",
})

const housingOptions = [
  {
    name: "Recherche d'un logement",
    description:
      "L'administration oriente les étudiants dans leur recherche de logement à Bamako, selon les disponibilités et leur situation.",
    amenities: ["Conseils pour la recherche", "Repères sur les quartiers proches du campus", "Informations selon les disponibilités"],
    image: "/images/campus/IMG-20250212-WA0006.jpg",
    category: "logement",
  },
  {
    name: "Installation des nouveaux étudiants",
    description:
      "Les étudiants venant d'autres régions ou de l'étranger sont accompagnés dans leurs premières démarches d'installation.",
    amenities: ["Accueil par l'administration", "Orientation sur les démarches pratiques", "Mise en relation selon les besoins"],
    image: "/images/campus/IMG-20250212-WA0012.jpg",
    category: "logement",
  },
  {
    name: "Vie quotidienne à Bamako",
    description:
      "Le campus est situé à Hamdallaye ACI 2000, un quartier accessible qui facilite le quotidien des étudiants : transports, commerces et services.",
    amenities: ["Accès au campus", "Commerces et services de proximité", "Transports selon les axes de la ville"],
    image: "/images/campus/IMG-20250212-WA0007.jpg",
    category: "vie-quotidienne",
  },
  {
    name: "Questions pratiques",
    description:
      "Baux, budget de location, sécurité : l'administration apporte des repères généraux et oriente vers les bons interlocuteurs.",
    amenities: ["Repères généraux sur la location", "Orientation vers les interlocuteurs compétents", "Accompagnement selon les situations"],
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    category: "vie-quotidienne",
  },
]

export default function HousingPage() {
  const categories = ["Tout", "Logement", "Vie quotidienne"]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Logement étudiant</h1>
      <p className="text-xl mb-4 text-center">
        Informations et accompagnement pour se loger à Bamako pendant vos études à l'ABS
      </p>
      <p className="text-md mb-12 text-center text-muted-foreground">
        Les modalités détaillées et les disponibilités sont communiquées par l'administration : contactez-la pour
        connaître les options possibles.
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
              {housingOptions
                .filter((option) => category === "Tout" || option.category === (category === "Logement" ? "logement" : "vie-quotidienne"))
                .map((option, index) => (
                  <Card key={index} className="hover:shadow-lg transition-duration-300">
                    <Image
                      src={option.image || "/placeholder.svg"}
                      alt={option.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <CardTitle>{option.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{option.description}</p>
                      <h4 className="font-semibold mb-2">Points d'attention :</h4>
                      <ul className="list-disc list-inside">
                        {option.amenities.map((amenity, index) => (
                          <li key={index}>{amenity}</li>
                        ))}
                      </ul>
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
