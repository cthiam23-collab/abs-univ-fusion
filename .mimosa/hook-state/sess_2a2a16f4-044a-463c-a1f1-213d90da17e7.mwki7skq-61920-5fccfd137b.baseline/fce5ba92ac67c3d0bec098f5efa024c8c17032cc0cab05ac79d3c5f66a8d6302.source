import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomTabs, CustomTabsContent, CustomTabsList, CustomTabsTrigger } from "@/components/ui/custom-tabs"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Student Housing | ABS",
  description: "Housing information for the students of ABS — African Business School.",
  path: "/student-life/housing",
  locale: "en",
})

const housingOptions = [
  {
    name: "Finding accommodation",
    description:
      "The administration guides students in their search for accommodation in Bamako, depending on availability and their situation.",
    amenities: ["Guidance for the search", "Points of reference on neighbourhoods close to the campus", "Information subject to availability"],
    image: "/images/campus/IMG-20250212-WA0006.jpg",
    category: "logement",
  },
  {
    name: "Settling in new students",
    description:
      "Students coming from other regions or from abroad are supported through their first steps of moving in.",
    amenities: ["Welcome by the administration", "Guidance on practical steps", "Connections made according to needs"],
    image: "/images/campus/IMG-20250212-WA0012.jpg",
    category: "logement",
  },
  {
    name: "Daily life in Bamako",
    description:
      "The campus is located in Hamdallaye ACI 2000, an accessible neighbourhood that makes students' daily life easier: transport, shops and services.",
    amenities: ["Access to the campus", "Nearby shops and services", "Transport along the city's main routes"],
    image: "/images/campus/IMG-20250212-WA0007.jpg",
    category: "vie-quotidienne",
  },
  {
    name: "Practical questions",
    description:
      "Leases, rental budgets, safety: the administration provides general points of reference and directs students to the right contacts.",
    amenities: ["General guidance on renting", "Referral to the competent contacts", "Support adapted to each situation"],
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    category: "vie-quotidienne",
  },
]

export default function HousingPage() {
  const categories = ["All", "Housing", "Daily life"]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Student housing</h1>
      <p className="text-xl mb-4 text-center">
        Information and support for finding accommodation in Bamako during your studies at African Business School (ABS)
      </p>
      <p className="text-md mb-12 text-center text-muted-foreground">
        Detailed arrangements and availability are communicated by the administration: contact them to find out the
        possible options.
      </p>

      <CustomTabs defaultValue="All" className="w-full">
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
                .filter((option) => category === "All" || option.category === (category === "Housing" ? "logement" : "vie-quotidienne"))
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
                      <h4 className="font-semibold mb-2">Key points:</h4>
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
