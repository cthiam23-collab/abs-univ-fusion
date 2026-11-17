import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomTabs, CustomTabsContent, CustomTabsList, CustomTabsTrigger } from "@/components/ui/custom-tabs"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Studentenorganisationen | ABS",
  description: "Organisationen und Studierendenvereine der ABS — African Business School: akademische, kulturelle und berufliche Initiativen.",
  path: "/student-life/organizations",
  locale: "de",
})

const organizations = [
  {
    name: "Akademische Initiativen",
    description:
      "Arbeitsgruppen, gemeinsames Lernen und gegenseitige Hilfe zwischen Studierenden rund um den Unterricht der fünf Ausbildungsbereiche.",
    image: "/images/campus/IMG-20250212-WA0013.jpg",
    category: "academique",
  },
  {
    name: "Debatten und Rhetorik",
    description:
      "Übungen in Debatten und mündlichem Ausdruck, nützlich für die berufliche Bildung und das Selbstvertrauen.",
    image: "/images/campus/IMG-20250212-WA0014.jpg",
    category: "academique",
  },
  {
    name: "Kultureller Austausch",
    description:
      "Begegnungen und Aktivitäten, die die Vielfalt der afrikanischen Kulturen feiern und die Integration aller fördern.",
    image:
      "/images/campus/IMG-20250212-WA0015.jpg",
    category: "culturel",
  },
  {
    name: "Unternehmergeist",
    description:
      "Austausch rund um Unternehmertum und Projekte, im Einklang mit der Ausbildung in Betriebswirtschaft.",
    image: "/images/campus/IMG-20250212-WA0017.jpg",
    category: "professionnel",
  },
  {
    name: "Engagement und Bürgersinn",
    description:
      "Initiativen zur Sensibilisierung und zum bürgerschaftlichen Engagement, die von Studierenden im Dienst ihrer Umwelt getragen werden.",
    image: "/images/campus/IMG-20250212-WA0019.jpg",
    category: "engagement",
  },
  {
    name: "Künstlerische Kreativität",
    description:
      "Räume des künstlerischen und kulturellen Ausdrucks für Studierende, die ihre Talente teilen möchten.",
    image: "/images/campus/IMG-20250212-WA0018.jpg",
    category: "culturel",
  },
]

export default function StudentOrganizationsPage() {
  const categories = ["Alle", "Akademisch", "Kulturell", "Beruflich", "Engagement"]
  const categoryKeys: Record<string, string> = {
    Akademisch: "academique",
    Kulturell: "culturel",
    Beruflich: "professionnel",
    Engagement: "engagement",
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Studentenorganisationen</h1>
      <p className="text-xl mb-4 text-center">
        Das Vereinsleben der ABS-Universität entsteht gemeinsam mit den Studierenden und entwickelt sich jedes Jahr
        entsprechend ihren Initiativen
      </p>
      <p className="text-md mb-12 text-center text-muted-foreground">
        Die folgende Liste zeigt Arten von Initiativen. Um die derzeit aktiven Organisationen zu erfahren oder die
        Gründung eines Clubs vorzuschlagen, kontaktieren Sie die Verwaltung.
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
              {organizations
                .filter((org) => category === "Alle" || org.category === categoryKeys[category])
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
