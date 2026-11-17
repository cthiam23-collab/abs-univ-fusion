import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Clubs & activités | ABS",
  description: "Clubs et activités parascolaires à ABS — African Business School.",
  path: "/student-life/extracurricular-activities",
})

export default function ExtracurricularActivitiesPage() {
  const activities = [
    {
      category: "clubs",
      items: [
        {
          name: "Debate Club",
          image:
            "/images/campus/IMG-20250212-WA0024.jpg",
        },
        { name: "Entrepreneurship Society", image: "/images/campus/IMG-20250212-WA0025.jpg" },
        {
          name: "International Students Association",
          image:
            "/images/campus/IMG-20250212-WA0018.jpg",
        },
        { name: "Environmental Awareness Group", image: "/images/campus/IMG-20250212-WA0025.jpg" },
      ],
    },
    {
      category: "sports",
      items: [
        { name: "Soccer Team", image: "/images/campus/IMG-20250212-WA0025.jpg" },
        { name: "Basketball Club", image: "/images/campus/IMG-20250212-WA0025.jpg" },
        { name: "Swimming", image: "/images/campus/IMG-20250212-WA0025.jpg" },
        { name: "Athletics", image: "/images/campus/IMG-20250212-WA0025.jpg" },
      ],
    },
    {
      category: "arts",
      items: [
        { name: "Theater Group", image: "/images/campus/IMG-20250212-WA0025.jpg" },
        { name: "Music Ensemble", image: "/images/campus/IMG-20250212-WA0025.jpg" },
        { name: "Art Club", image: "/images/campus/IMG-20250212-WA0025.jpg" },
        { name: "Dance Troupe", image: "/images/campus/IMG-20250212-WA0025.jpg" },
      ],
    },
    {
      category: "community",
      items: [
        {
          name: "Volunteer Corps",
          image:
            "/images/campus/IMG-20250212-WA0017.jpg",
        },
        { name: "Mentorship Program", image: "/images/campus/IMG-20250212-WA0025.jpg" },
        {
          name: "Cultural Exchange Initiative",
          image:
            "/images/campus/IMG-20250212-WA0022.jpg",
        },
        { name: "Community Outreach Team", image: "/images/campus/IMG-20250212-WA0025.jpg" },
      ],
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Extracurricular Activities</h1>

      <p className="text-xl mb-8">
        Enhance your university experience and develop new skills through our diverse range of extracurricular
        activities.
      </p>

      <Tabs defaultValue="clubs" className="mb-12">
        <TabsList>
          <TabsTrigger value="clubs">Clubs & Societies</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="arts">Arts & Culture</TabsTrigger>
          <TabsTrigger value="community">Community Service</TabsTrigger>
        </TabsList>
        {activities.map((category) => (
          <TabsContent key={category.category} value={category.category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={`/student-life/extracurricular-activities/${category.category}/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <Button>Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Benefits of Extracurricular Activities</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Develop leadership and teamwork skills</li>
              <li>Enhance your resume and career prospects</li>
              <li>Meet new people and build lasting friendships</li>
              <li>Achieve a balanced university life</li>
              <li>Contribute to the community and make a difference</li>
              <li>Explore new interests and passions</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Get Involved</h2>
        <p className="mb-4">
          Ready to explore our extracurricular activities? Find the perfect fit for your interests and skills!
        </p>
        <Link href="/student-life/extracurricular-activities/join">
          <Button size="lg">Join an Activity</Button>
        </Link>
      </section>
    </div>
  )
}
