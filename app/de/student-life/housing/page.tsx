import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomTabs, CustomTabsContent, CustomTabsList, CustomTabsTrigger } from "@/components/ui/custom-tabs"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Studentenwohnraum | ABS",
  description: "Wohnungsinformationen für die Studierenden der ABS — African Business School in Bamako: Orientierung, Begleitung und praktische Hinweise.",
  path: "/student-life/housing",
  locale: "de",
})

const housingOptions = [
  {
    name: "Wohnungssuche",
    description:
      "Die Verwaltung orientiert die Studierenden bei ihrer Wohnungssuche in Bamako, je nach Verfügbarkeit und Situation.",
    amenities: ["Hinweise für die Suche", "Orientierung über die Stadtviertel nahe dem Campus", "Informationen je nach Verfügbarkeit"],
    image: "/images/campus/IMG-20250212-WA0006.jpg",
    category: "logement",
  },
  {
    name: "Einzug neuer Studierender",
    description:
      "Studierende aus anderen Regionen oder aus dem Ausland werden bei ihren ersten Schritten der Ansiedlung begleitet.",
    amenities: ["Empfang durch die Verwaltung", "Orientierung bei den praktischen Schritten", "Vermittlung je nach Bedarf"],
    image: "/images/campus/IMG-20250212-WA0012.jpg",
    category: "logement",
  },
  {
    name: "Alltagsleben in Bamako",
    description:
      "Der Campus liegt in Hamdallaye ACI 2000, einem gut erreichbaren Stadtviertel, das den Alltag der Studierenden erleichtert: Verkehrsmittel, Geschäfte und Dienste.",
    amenities: ["Zugang zum Campus", "Geschäfte und Dienste in der Nähe", "Verkehrsmittel entsprechend den Hauptachsen der Stadt"],
    image: "/images/campus/IMG-20250212-WA0007.jpg",
    category: "vie-quotidienne",
  },
  {
    name: "Praktische Fragen",
    description:
      "Mietverträge, Mietbudget, Sicherheit: Die Verwaltung gibt allgemeine Orientierungshilfen und vermittelt an die zuständigen Ansprechpartner.",
    amenities: ["Allgemeine Orientierung zur Miete", "Vermittlung an die zuständigen Ansprechpartner", "Begleitung je nach Situation"],
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    category: "vie-quotidienne",
  },
]

export default function HousingPage() {
  const categories = ["Alle", "Wohnen", "Alltagsleben"]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Studentenwohnraum</h1>
      <p className="text-xl mb-4 text-center">
        Informationen und Begleitung für die Unterbringung in Bamako während Ihres Studiums an der ABS-Universität
      </p>
      <p className="text-md mb-12 text-center text-muted-foreground">
        Die detaillierten Modalitäten und Verfügbarkeiten werden von der Verwaltung mitgeteilt: Kontaktieren Sie sie,
        um die möglichen Optionen zu erfahren.
      </p>

      <CustomTabs defaultValue="Alle" className="w-full">
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
                .filter((option) => category === "Alle" || option.category === (category === "Wohnen" ? "logement" : "vie-quotidienne"))
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
                      <h4 className="font-semibold mb-2">Wichtige Hinweise:</h4>
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
