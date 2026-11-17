import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Foro anual de carreras | ABS",
  description: "El foro anual de carreras de ABS — African Business School: encuentros estudiantes-empresas.",
  path: "/events/annual-career-fair",
  locale: "es",
})

export default function AnnualCareerFairPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Foro anual de carreras</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        Una cita estudiantes-empresas organizada por ABS — African Business School. Las fechas y modalidades
        de cada edición se anuncian cuando el evento está oficialmente programado.
      </p>

      <Image
        src="/images/campus/IMG-20250212-WA0022.jpg"
        alt="Foro anual de carreras"
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>¿Para quién?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Los estudiantes de la Universidad ABS, tanto en Licencia (grado) como en Máster, de todos los polos de formación.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>¿Dónde?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>En el campus de la Universidad ABS, Hamdallaye ACI 2000, Bamako.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>¿Cómo participar?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Las modalidades de inscripción son comunicadas por la administración en la proximidad del evento, a
              través de los canales oficiales del establecimiento.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none">
        <h2>Presentación del evento</h2>
        <p>
          El foro anual de carreras de la Universidad ABS es la ocasión para que los estudiantes conozcan empresas y
          profesionales de diferentes sectores. Ya sea que busque una práctica, una primera experiencia profesional o
          simplemente referentes sobre las profesiones, este evento está diseñado para ayudarle en su trayectoria.
        </p>

        <h2>Lo que el evento puede incluir</h2>
        <ul>
          <li>Encuentros con empresas y profesionales según las ediciones</li>
          <li>Intercambios sobre las profesiones en relación con los cinco polos de formación</li>
          <li>Consejos de preparación de expediente y de entrevista</li>
          <li>Pistas de prácticas, en coherencia con las maquetas de formación</li>
        </ul>

        <h2>Cómo prepararse bien</h2>
        <ol>
          <li>Actualice su CV y prepare varios ejemplares</li>
          <li>Infórmese con antelación sobre los sectores y las empresas presentes</li>
          <li>Prepare una breve presentación de su trayectoria y de sus objetivos</li>
          <li>Preséntese de manera profesional</li>
        </ol>

        <h2>Información práctica</h2>
        <p>
          La fecha, el programa detallado y la lista de participantes de cada edición son comunicados por la
          administración cuando el evento está oficialmente programado. Contacte a la administración para cualquier
          pregunta o para proponer la participación de su empresa.
        </p>
      </div>
    </div>
  )
}
