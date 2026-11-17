import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Eventos de carrera | ABS",
  description: "Encuentros, conferencias y eventos de carrera organizados por ABS — African Business School.",
  path: "/career-services/events",
  locale: "es",
})

export default function CareerEventsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Eventos de carrera</h1>
      <p className="text-xl mb-8">
        Encuentros con profesionales, conferencias por sector y momentos de intercambio para preparar su inserción
        profesional. Las fechas se anuncian cuando los eventos están oficialmente programados.
      </p>

      <h2 className="text-3xl font-bold mb-4">Tipos de eventos propuestos</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Foro anual de carreras</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <MapPin className="inline mr-2" />
              Campus de la Universidad ABS, Bamako
            </p>
            <p className="mb-4">
              Un momento de encuentro entre estudiantes y empresas de diferentes sectores, al servicio de la inserción
              profesional.
            </p>
            <Link href="/events/annual-career-fair">
              <Button>Saber más</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conferencias por sector</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              A lo largo del año
            </p>
            <p className="mb-4">
              Intervenciones de profesionales en relación con los cinco polos de formación, en el campus o a distancia
              según las ediciones.
            </p>
            <Button>Inscribirse</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Encuentros y networking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <MapPin className="inline mr-2" />
              En el campus
            </p>
            <p className="mb-4">
              Momentos de intercambio con profesionales y antiguos estudiantes para desarrollar su red de contactos.
            </p>
            <Button>Inscribirse</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Talleres ya propuestos a los estudiantes</h2>
      <p className="mb-8">
        A lo largo del año, talleres prácticos acompañan su preparación para la vida profesional.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Taller de CV y carta de motivación</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Construir un CV y una carta de motivación claros y convincentes.</p>
            <Link href="/career-services/resume-workshop">
              <Button variant="outline">Ver los talleres de CV</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preparación para entrevistas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Practicar la presentación de su trayectoria y responder con seguridad.</p>
            <Link href="/career-services/counseling">
              <Button variant="outline">Ver la orientación profesional</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Encuentros con graduados</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Escuchar trayectorias profesionales inspiradoras y plantear sus preguntas.</p>
            <Button variant="outline">Contactarnos</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Participar o intervenir</h2>
      <p className="mb-8">
        ¿Desea acoger un evento, intervenir como profesional o proponer una temática? Contacte a la administración:
        estaremos encantados de intercambiar con usted.
      </p>
      <Link href="/contact">
        <Button>Contactarnos</Button>
      </Link>

      <div className="mt-12">
        <Link href="/career-services">
          <Button variant="outline">Volver a los servicios de carrera</Button>
        </Link>
      </div>
    </div>
  )
}
