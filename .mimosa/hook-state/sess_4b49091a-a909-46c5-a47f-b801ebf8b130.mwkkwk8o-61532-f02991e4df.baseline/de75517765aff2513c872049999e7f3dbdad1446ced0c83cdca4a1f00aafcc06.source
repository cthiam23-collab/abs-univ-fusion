import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = buildMetadata({
  title: "Services de soutien aux étudiants | ABS",
  description: "Services de soutien et d'accompagnement pour les étudiants de ABS — African Business School : suivi académique, écoute et accompagnement.",
  path: "/student-resources/support-services",
})

export default function StudentSupportServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Services de soutien aux étudiants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Suivi académique</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="Suivi académique"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              Un accompagnement dans l'organisation de vos études et la réussite de votre parcours de formation.
            </CardDescription>
            <Link href="/student-resources/academic-advising">
              <Button className="mt-4">En savoir plus</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Écoute et accompagnement</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="Écoute et accompagnement"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              Une équipe disponible pour vous écouter et vous orienter en cas de difficultés personnelles ou
              académiques.
            </CardDescription>
            <Link href="/student-resources/counseling">
              <Button className="mt-4">En savoir plus</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Orientation professionnelle</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="Orientation professionnelle"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              Un appui dans la construction de votre projet professionnel, en cohérence avec votre pôle de formation.
            </CardDescription>
            <Link href="/career-services">
              <Button className="mt-4">En savoir plus</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
