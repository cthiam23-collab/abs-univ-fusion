import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = buildMetadata({
  title: "Servicios de apoyo a los estudiantes | ABS",
  description: "Servicios de apoyo y de acompañamiento para los estudiantes de ABS — African Business School: seguimiento académico, escucha y acompañamiento.",
  path: "/student-resources/support-services",
  locale: "es",
})

export default function StudentSupportServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Servicios de apoyo a los estudiantes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Seguimiento académico</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="Seguimiento académico"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              Un acompañamiento en la organización de sus estudios y en el éxito de su itinerario de formación.
            </CardDescription>
            <Link href="/student-resources/academic-advising">
              <Button className="mt-4">Saber más</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Escucha y acompañamiento</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="Escucha y acompañamiento"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              Un equipo disponible para escucharle y orientarle en caso de dificultades personales o académicas.
            </CardDescription>
            <Link href="/student-resources/counseling">
              <Button className="mt-4">Saber más</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Orientación profesional</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="Orientación profesional"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              Un apoyo en la construcción de su proyecto profesional, en coherencia con su polo de formación.
            </CardDescription>
            <Link href="/career-services">
              <Button className="mt-4">Saber más</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
