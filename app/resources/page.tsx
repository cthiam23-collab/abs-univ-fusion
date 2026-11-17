import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Ressources étudiantes | ABS",
  description: "Ressources et services d'appui aux étudiants de ABS — African Business School.",
  path: "/resources",
})

const resourceAreas = [
  {
    title: "Library",
    link: "/resources/library",
    image:
      "/images/campus/IMG-20250212-WA0024.jpg",
    description: "Access our extensive collection of books, journals, and digital resources.",
  },
  {
    title: "Career Services",
    link: "/resources/career-services",
    image:
      "/images/campus/IMG-20250212-WA0025.jpg",
    description: "Get support for your career development and job search.",
  },
  {
    title: "Academic Advising",
    link: "/resources/academic-advising",
    image:
      "/images/gallery/IMG-20250216-WA0015.jpg",
    description: "Receive guidance on your academic journey and course selection.",
  },
  {
    title: "Technology Services",
    link: "/resources/technology",
    image:
      "/images/gallery/IMG-20250216-WA0021.jpg",
    description: "Access campus technology resources and get IT support.",
  },
  {
    title: "Writing Center",
    link: "/resources/writing-center",
    image:
      "/images/gallery/IMG-20250216-WA0030.jpg",
    description: "Improve your writing skills with expert guidance and workshops.",
  },
  {
    title: "Health Services",
    link: "/resources/health-services",
    image:
      "/images/gallery/IMG-20250216-WA0034.jpg",
    description: "Access medical and mental health services on campus.",
  },
]

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Campus Resources</h1>

      <p className="text-xl mb-8">
        African Business School (ABS) provides a wide range of resources to support your academic success and personal well-being.
        Explore the various services available to you as a student.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {resourceAreas.map((resource, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={resource.image || "/placeholder.svg"}
              alt={resource.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{resource.description}</p>
              <Link href={resource.link}>
                <Button>Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
