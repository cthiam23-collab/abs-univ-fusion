import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Globe } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Apoyo a los estudiantes | ABS",
  description: "Servicios de apoyo y de acompañamiento de los estudiantes de ABS — African Business School.",
  path: "/student-life/support",
  locale: "es",
})

export default function StudentSupportPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Apoyo a los estudiantes</h1>

      <p className="text-xl text-muted-foreground mb-8">
        La Universidad ABS se dedica a acompañar a cada estudiante a lo largo de su trayectoria, tanto para su éxito
        académico como para su bienestar personal.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <BookOpen className="mr-2 h-6 w-6" />
              Acompañamiento académico
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Seguimiento pedagógico de los estudiantes</li>
              <li>Ayuda en la organización del trabajo</li>
              <li>Apoyo en la preparación de los trabajos y proyectos previstos por las maquetas de formación</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Heart className="mr-2 h-6 w-6" />
              Escucha y bienestar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Un equipo a la escucha de los estudiantes</li>
              <li>Apoyo en caso de dificultades personales o académicas</li>
              <li>Orientación hacia los interlocutores adecuados si es necesario</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Globe className="mr-2 h-6 w-6" />
              Estudiantes internacionales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Acogida e integración de los estudiantes venidos de otros lugares</li>
              <li>Referencias prácticas para la vida en Bamako</li>
              <li>Apoyo lingüístico en un marco bilingüe francés-inglés</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="text-muted-foreground">
        Nuestro equipo está a su disposición durante toda su trayectoria. No dude en contactar a la administración si
        necesita ayuda: cada solicitud será tratada con atención.
      </p>
    </div>
  )
}
