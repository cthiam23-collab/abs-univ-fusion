import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Briefcase, FileText, Users, Calendar, Compass } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Carreras para estudiantes | ABS",
  description: "Servicios de orientación e inserción profesional de los estudiantes de ABS.",
  path: "/student-resources/career-services",
  locale: "es",
})

export default function CareerServicesPage() {
  const services = [
    {
      title: "Orientación profesional",
      description: "Un acompañamiento individual para construir su proyecto profesional",
      icon: Compass,
    },
    {
      title: "Revisión de CV y carta de motivación",
      description: "Una opinión sobre sus documentos de candidatura",
      icon: FileText,
    },
    {
      title: "Entrenamiento para entrevistas",
      description: "Preparar sus entrevistas de práctica o de empleo",
      icon: Users,
    },
    {
      title: "Prácticas y primeros empleos",
      description: "Pistas en coherencia con las maquetas de formación",
      icon: Briefcase,
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Servicios de carrera</h1>
      <p className="text-xl mb-12">
        En la Universidad ABS, le acompañamos en la preparación de su vida profesional. El equipo encargado de la
        orientación y de la inserción propone recursos y un seguimiento adaptados a cada polo de formación.
      </p>

      <div className="mb-12">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Servicios de carrera en la Universidad ABS"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <service.icon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="resources" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="resources">Recursos</TabsTrigger>
          <TabsTrigger value="events">Eventos</TabsTrigger>
          <TabsTrigger value="employers">Para las empresas</TabsTrigger>
          <TabsTrigger value="alumni">Para los graduados</TabsTrigger>
        </TabsList>
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Recursos de carrera</CardTitle>
              <CardDescription>Herramientas para ayudarle a tener éxito</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Ayudas para la definición de su proyecto profesional</li>
                <li>Referencias sobre los sectores relacionados con su formación</li>
                <li>Métodos de búsqueda de prácticas y de empleo</li>
                <li>Consejos de networking y de toma de contacto</li>
                <li>Pistas de continuación de estudios, de la Licencia (grado) al Máster</li>
              </ul>
              <Link href="/career-services">
                <Button className="mt-4">Acceder a los recursos</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Eventos de carrera</CardTitle>
              <CardDescription>Prepararse y desarrollar su red de contactos</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Foro anual de carreras, conferencias con profesionales y encuentros por sector: las fechas se anuncian
                cuando los eventos están oficialmente programados.
              </p>
              <Link href="/career-services/events">
                <Button className="mt-4">Ver los eventos de carrera</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="employers">
          <Card>
            <CardHeader>
              <CardTitle>Para las empresas</CardTitle>
              <CardDescription>Iniciar un intercambio con la Universidad ABS</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Ponemos en relación a las empresas con los estudiantes y graduados de la Universidad ABS. Estas son las
                formas que puede adoptar esta colaboración:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Proponer prácticas y oportunidades de empleo</li>
                <li>Participar en los eventos de carrera y en los encuentros con estudiantes</li>
                <li>Intervenir en conferencias o talleres</li>
                <li>Reunirse con los estudiantes en el marco del reclutamiento</li>
                <li>Intercambiar sobre los proyectos estudiantiles, según las maquetas de formación</li>
              </ul>
              <Link href="/employers/recruit">
                <Button>Reclutar los talentos de la ABS</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alumni">
          <Card>
            <CardHeader>
              <CardTitle>Servicios para los graduados</CardTitle>
              <CardDescription>Un acompañamiento que puede continuar después de la formación</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Los graduados de la Universidad ABS pueden, según los servicios propuestos por el establecimiento,
                beneficiarse de un apoyo para la continuación de su trayectoria:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Consejo en orientación y acompañamiento del proyecto profesional</li>
                <li>Pistas de oportunidades según las ofertas comunicadas al establecimiento</li>
                <li>Encuentros y eventos que favorecen la red de graduados</li>
                <li>Compartir experiencia con los estudiantes en formación</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Contacte a la administración para conocer los servicios actualmente abiertos a los graduados.
              </p>
              <Link href="/alumni/career-services">
                <Button>Explorar los servicios a los graduados</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-secondary p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Solicitar una entrevista de orientación</h2>
        <p className="mb-6">
          El equipo encargado de la inserción profesional está ahí para ayudarle. Solicite una entrevista para hablar
          de sus objetivos y recibir consejos personalizados.
        </p>
        <Link href="/contact">
          <Button variant="default">Solicitar una entrevista</Button>
        </Link>
      </div>
    </div>
  )
}
