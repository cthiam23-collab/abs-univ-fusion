import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Ressources bibliothèque | ABS",
  description: "Ressources documentaires proposées aux étudiants de ABS — African Business School.",
  path: "/resources/library",
})

export default function LibraryPage() {
  const resources = [
    {
      title: "Digital Collections",
      description: "Access e-books, academic journals, and research databases",
      image:
        "/images/campus/IMG-20250212-WA0016.jpg",
    },
    {
      title: "Study Spaces",
      description: "Quiet areas and group study rooms for collaborative work",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Research Assistance",
      description: "Get help from librarians for your research projects",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Special Collections",
      description: "Explore rare books and archival materials",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">African Business School (ABS) Library</h1>

      <p className="text-xl mb-8">
        Our library provides a wealth of resources to support your academic journey and research needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {resources.map((resource, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={resource.image || "/placeholder.svg"}
              alt={resource.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{resource.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Library Services</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>24/7 online access to digital resources</li>
          <li>Interlibrary loan for materials not in our collection</li>
          <li>Workshops on research methods and citation styles</li>
          <li>Technology lending (laptops, tablets, cameras)</li>
          <li>Printing and scanning facilities</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Visit the Library</h2>
        <p className="mb-4">Explore our resources and get support for your academic needs.</p>
        <Link href="/resources/library/visit">
          <Button size="lg">Plan Your Visit</Button>
        </Link>
      </section>
    </div>
  )
}
