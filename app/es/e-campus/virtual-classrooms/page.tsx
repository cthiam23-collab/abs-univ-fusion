import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Aulas virtuales | ABS",
  description: "Aulas virtuales y herramientas de formación a distancia de ABS — African Business School.",
  path: "/e-campus/virtual-classrooms",
  locale: "es",
})

export default function VirtualClassroomsPage() {
  const features = [
    {
      title: "Clases en directo",
      description: "Seguir enseñanzas en tiempo real y plantear sus preguntas durante la sesión",
      image:
        "/images/campus/IMG-20250212-WA0016.jpg",
    },
    {
      title: "Trabajo colaborativo",
      description: "Avanzar en sus proyectos de grupo gracias a las herramientas de colaboración a distancia",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Sesiones grabadas",
      description: "Volver a ver las grabaciones puestas a disposición para repasar a su ritmo",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Intercambios con los docentes",
      description: "Beneficiarse de momentos de intercambio individual con sus docentes según las modalidades establecidas",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
  ]

  const tips = [
    "Asegurarse de disponer de una conexión a internet estable",
    "Usar auriculares para una mejor calidad de audio",
    "Colocarse en un lugar tranquilo para seguir las clases",
    "Participar activamente en los intercambios",
    "Hacer pausas regulares para evitar la fatiga visual",
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Aulas virtuales</h1>

      <p className="text-xl mb-8">
        Las aulas virtuales permiten seguir enseñanzas interactivas a distancia, en relación con los programas de los
        cinco polos de formación de la Universidad ABS. Conéctese con sus docentes y sus pares, esté donde esté.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Puntos clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
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
        <h2 className="text-3xl font-semibold mb-6">Cómo funciona</h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Inicie sesión en el portal en línea de la Universidad ABS</li>
              <li>Consulte el calendario de sus aulas virtuales, comunicado por la administración</li>
              <li>Haga clic en el enlace de la sesión prevista en su horario</li>
              <li>Únase a la videoconferencia con sus credenciales ABS</li>
              <li>Participe en la clase, plante sus preguntas e intercambie con sus pares</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Consejos para seguir bien las clases a distancia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <p>{tip}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Asistencia técnica</h2>
        <p className="mb-4">
          ¿Un problema técnico con las aulas virtuales? Contacte a la administración para ser orientado hacia el
          soporte adecuado.
        </p>
        <Link href="/e-campus/support">
          <Button size="lg">Obtener asistencia técnica</Button>
        </Link>
      </section>
    </div>
  )
}
