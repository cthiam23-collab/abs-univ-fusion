import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Plataforma LMS | ABS",
  description: "Plataforma de aprendizaje en línea de ABS — African Business School.",
  path: "/e-campus/lms",
  locale: "es",
})

export default function LMSPage() {
  const lmsFeatures = [
    {
      title: "Materiales de curso",
      description: "Acceder a los apuntes de curso, lecturas y recursos multimedia publicados por los docentes",
      image:
        "/images/campus/IMG-20250212-WA0016.jpg",
    },
    {
      title: "Trabajos y evaluaciones",
      description: "Entregar sus trabajos y realizar las evaluaciones en línea previstas por sus docentes",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Espacios de discusión",
      description: "Intercambiar con sus pares y sus docentes en torno a los cursos",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Seguimiento de resultados",
      description: "Consultar sus calificaciones y seguir su progresión académica",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Plataforma de aprendizaje en línea (LMS)</h1>

      <p className="text-xl mb-8">
        La plataforma de aprendizaje en línea de la Universidad ABS es su punto central para todo lo relacionado con
        sus cursos: consultar los materiales, entregar sus trabajos, participar en las discusiones y seguir su
        progresión, esté donde esté.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Funcionalidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lmsFeatures.map((feature, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Para empezar</h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Inicie sesión en la plataforma con las credenciales proporcionadas por la Universidad ABS</li>
              <li>Encuentre en su panel todos sus cursos inscritos</li>
              <li>Abra un curso para acceder a sus materiales, trabajos y discusiones</li>
              <li>Consulte el calendario para las fechas y plazos importantes</li>
              <li>Ajuste sus notificaciones para mantenerse informado de las actividades de sus cursos</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Asistencia</h2>
        <p className="mb-4">
          ¿Una dificultad con la plataforma? Contacte a la administración: el equipo le orientará hacia la asistencia
          adecuada y le comunicará las modalidades de acceso.
        </p>
        <Link href="/e-campus/lms/support">
          <Button size="lg">Obtener asistencia</Button>
        </Link>
      </section>
    </div>
  )
}
