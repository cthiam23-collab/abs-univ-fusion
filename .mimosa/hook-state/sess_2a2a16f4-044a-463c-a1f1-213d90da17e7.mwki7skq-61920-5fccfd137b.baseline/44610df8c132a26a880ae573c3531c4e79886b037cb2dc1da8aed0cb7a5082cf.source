import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Eventos | ABS",
  description: "Conferencias, jornadas de orientación y eventos de ABS — African Business School en Bamako.",
  path: "/events",
  locale: "es",
})

const events = [
  {
    title: "Foro anual de carreras",
    category: "career",
    description:
      "Un momento de encuentro entre estudiantes y profesionales para explorar las salidas profesionales en diferentes sectores.",
    image:
      "/images/campus/IMG-20250212-WA0022.jpg",
    link: "/events/annual-career-fair",
  },
  {
    title: "Jornadas de orientación",
    category: "career",
    description:
      "Jornadas dedicadas al descubrimiento de las profesiones y de los itinerarios de formación de los cinco polos de la ABS.",
    image:
      "/images/campus/IMG-20250212-WA0017.jpg",
    link: "",
  },
  {
    title: "Conferencias y encuentros profesionales",
    category: "academic",
    description:
      "Intervenciones de invitados e intercambios con profesionales para enriquecer las enseñanzas.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    link: "",
  },
  {
    title: "Actividades culturales",
    category: "cultural",
    description:
      "Momentos destacados que celebran la diversidad de las culturas africanas y la creatividad de los estudiantes.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    link: "",
  },
]

export default function EventsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Eventos de la Universidad ABS</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Conferencias, jornadas de orientación, encuentros con profesionales y actividades culturales dan ritmo a la
        vida del establecimiento. Las fechas se anuncian en esta página cuando los eventos están oficialmente
        programados.
      </p>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="all">Todos los eventos</TabsTrigger>
          <TabsTrigger value="academic">Académicos</TabsTrigger>
          <TabsTrigger value="cultural">Culturales</TabsTrigger>
          <TabsTrigger value="career">Carreras</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card key={index}>
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{event.description}</p>
                  {event.link && (
                    <Link href={event.link}>
                      <Button>Saber más</Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="academic">
          <p className="text-muted-foreground">
            Conferencias, intervenciones de invitados y encuentros profesionales en relación con las enseñanzas de los
            cinco polos de formación. Los eventos académicos se anuncian aquí cuando están oficialmente programados.
          </p>
        </TabsContent>
        <TabsContent value="cultural">
          <p className="text-muted-foreground">
            Actividades culturales e iniciativas estudiantiles que celebran la diversidad de las culturas africanas. El
            programa del año es comunicado por la administración a medida que se avanza.
          </p>
        </TabsContent>
        <TabsContent value="career">
          <p className="text-muted-foreground">
            Foro anual de carreras, jornadas de orientación y encuentros con empresas para preparar su inserción
            profesional. Consulte la página dedicada al{" "}
            <Link href="/events/annual-career-fair" className="text-primary underline">
              foro anual de carreras
            </Link>
            .
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
