import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, Users, FileText } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Talleres de CV | ABS",
  description: "Talleres de redacción de CV y de cartas de motivación para los estudiantes de ABS — African Business School.",
  path: "/career-services/resume-workshop",
  locale: "es",
})

export default function ResumeWorkshopPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Talleres de CV y carta de motivación</h1>
      <p className="text-xl mb-8">
        Aprenda a construir un CV y una carta de motivación claros y profesionales que pongan en valor su trayectoria.
      </p>

      <h2 className="text-3xl font-bold mb-4">Temáticas de los talleres</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Las bases de un buen CV</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Programado según el calendario del año
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              Duración comunicada en la inscripción
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              Plazas limitadas por sesión
            </p>
            <p className="mb-4">Comprender la estructura de un CV eficaz y adaptarla a cada candidatura.</p>
            <Button>Inscribirse</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Técnicas avanzadas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Programado según el calendario del año
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              Duración comunicada en la inscripción
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              Plazas limitadas por sesión
            </p>
            <p className="mb-4">
              Perfeccionar su CV con estrategias de presentación y de puesta en valor de sus logros.
            </p>
            <Button>Inscribirse</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Carta de motivación</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Programado según el calendario del año
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              Duración comunicada en la inscripción
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              Plazas limitadas por sesión
            </p>
            <p className="mb-4">Redactar una carta de motivación coherente con su CV y con el puesto buscado.</p>
            <Button>Inscribirse</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Materiales y recursos</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Modelos de CV
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Ejemplos de estructura de CV son compartidos durante los talleres y por la administración.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Verbos de acción
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Una lista de formulaciones dinámicas para describir sus experiencias con precisión.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Ejemplos de cartas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Ejemplos de cartas de motivación para diferentes tipos de candidaturas.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Revisión personalizada</h2>
      <p className="mb-8">
        Presente su CV al equipo de acompañamiento para recibir comentarios adaptados a su situación. Contacte a la
        administración para conocer las modalidades y los horarios disponibles.
      </p>
      <Button>Solicitar una revisión</Button>

      <div className="mt-12">
        <Link href="/career-services">
          <Button variant="outline">Volver a los servicios de carrera</Button>
        </Link>
      </div>
    </div>
  )
}
