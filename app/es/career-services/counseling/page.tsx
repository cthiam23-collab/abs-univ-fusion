import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, Users } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Orientación profesional | ABS",
  description: "Orientación y acompañamiento profesional individualizados para los estudiantes de ABS — African Business School.",
  path: "/career-services/counseling",
  locale: "es",
})

export default function CareerCounselingPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Orientación profesional</h1>
      <p className="text-xl mb-8">
        Benefíciese de un acompañamiento personalizado en la definición de su proyecto profesional, en coherencia con
        su polo de formación.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2" />
              Entrevistas individuales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Una entrevista con el equipo de acompañamiento para hablar de su proyecto y construir un plan de acción
              adaptado a sus objetivos.
            </p>
            <Button>Solicitar una entrevista</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2" />
              Talleres colectivos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Talleres de grupo para explorar las profesiones, intercambiar con sus pares y preparar su inserción
              profesional.
            </p>
            <Button>Ver los talleres</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2" />
              Preguntas rápidas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Para una pregunta puntual sobre su orientación o su CV, contacte a la administración, que le indicará
              los horarios disponibles.
            </p>
            <Button>Contactarnos</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Nuestro equipo de acompañamiento</h2>
      <p className="mb-8">
        El equipo encargado de la orientación y de la inserción profesional acompaña a los estudiantes de cada polo de
        formación. Sus miembros se presentan a los estudiantes durante las sesiones de acompañamiento.
      </p>

      {/* Añadir aquí los perfiles de los orientadores */}

      <h2 className="text-3xl font-bold mb-4">Recursos</h2>
      <p className="mb-8">Prepare su sesión de orientación explorando nuestros recursos.</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Balance de competencias</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Definir sus puntos fuertes y sus centros de interés para orientar su proyecto.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Guías por sector</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Descubrir los sectores relacionados con su formación y las salidas profesionales posibles.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preparación para entrevistas</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Consejos para abordar sus entrevistas de práctica o de empleo con confianza.</p>
          </CardContent>
        </Card>
      </div>

      <Link href="/career-services">
        <Button variant="outline">Volver a los servicios de carrera</Button>
      </Link>
    </div>
  )
}
