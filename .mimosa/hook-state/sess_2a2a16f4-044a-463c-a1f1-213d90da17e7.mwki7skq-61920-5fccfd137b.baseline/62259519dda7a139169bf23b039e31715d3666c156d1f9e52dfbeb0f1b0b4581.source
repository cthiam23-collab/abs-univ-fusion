import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Seguimiento académico | ABS",
  description: "Seguimiento y consejo académico de los estudiantes de ABS — African Business School.",
  path: "/student-resources/academic-advising",
  locale: "es",
})

export default function AcademicAdvisingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Seguimiento y consejo académico</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>¿Qué es el consejo académico?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            El consejo académico es una relación de acompañamiento entre el estudiante y el equipo pedagógico. Tiene
            como finalidad ayudar al estudiante a construir un itinerario de estudios coherente con sus centros de
            interés, sus capacidades y su proyecto profesional, dentro de los cinco polos de formación de la
            Universidad ABS.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Nuestros servicios</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ayuda en la organización de los estudios y en el seguimiento del calendario académico</li>
            <li>Orientación en la elección de los itinerarios dentro de cada polo de formación</li>
            <li>Seguimiento de la progresión académica a lo largo de los semestres</li>
            <li>Preparación de las prácticas y de los proyectos previstos por las maquetas de formación</li>
            <li>Exploración de las continuaciones de estudios posibles, desde la Licencia (grado) (3 años, 180 créditos) hasta el Máster (2 años, 120 créditos)</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Reunirse con su orientador</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            El equipo de seguimiento académico acompaña a los estudiantes a lo largo de su trayectoria. Para pedir una
            cita con un orientador, contacte a la administración, que le indicará las modalidades y los horarios
            disponibles.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
