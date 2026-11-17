import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomTabs, CustomTabsContent, CustomTabsList, CustomTabsTrigger } from "@/components/ui/custom-tabs"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Student Organisations | ABS",
  description: "Student organisations and associations of ABS — African Business School.",
  path: "/student-life/organizations",
  locale: "en",
})

const organizations = [
  {
    name: "Academic initiatives",
    description:
      "Study groups, team revision and peer support around the teaching of the five academic schools.",
    image: "/images/campus/IMG-20250212-WA0013.jpg",
    category: "academique",
  },
  {
    name: "Debates and public speaking",
    description:
      "Debate and oral expression exercises, useful for professional development and self-confidence.",
    image: "/images/campus/IMG-20250212-WA0014.jpg",
    category: "academique",
  },
  {
    name: "Cultural exchanges",
    description:
      "Gatherings and activities that celebrate the diversity of African cultures and foster everyone's integration.",
    image:
      "/images/campus/IMG-20250212-WA0015.jpg",
    category: "culturel",
  },
  {
    name: "Entrepreneurial spirit",
    description:
      "Exchanges on entrepreneurship and projects, in line with the business administration programme.",
    image: "/images/campus/IMG-20250212-WA0017.jpg",
    category: "professionnel",
  },
  {
    name: "Civic engagement",
    description:
      "Awareness-raising and civic engagement initiatives led by students in service of their community.",
    image: "/images/campus/IMG-20250212-WA0019.jpg",
    category: "engagement",
  },
  {
    name: "Artistic creativity",
    description:
      "Spaces for artistic and cultural expression for students who wish to share their talents.",
    image: "/images/campus/IMG-20250212-WA0018.jpg",
    category: "culturel",
  },
]

export default function StudentOrganizationsPage() {
  const categories = ["All", "Academic", "Cultural", "Professional", "Engagement"]
  const categoryKeys: Record<string, string> = {
    Academic: "academique",
    Cultural: "culturel",
    Professional: "professionnel",
    Engagement: "engagement",
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Student organisations</h1>
      <p className="text-xl mb-4 text-center">
        Student association life at African Business School (ABS) is built together with students and evolves each year according to
        their initiatives
      </p>
      <p className="text-md mb-12 text-center text-muted-foreground">
        The list below presents types of initiatives. To find out which organisations are currently active or to propose
        the creation of a club, contact the administration.
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
              {organizations
                .filter((org) => category === "All" || org.category === categoryKeys[category])
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
