import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = buildMetadata({
  title: "Campus de la Universidad ABS en Bamako",
  description:
    "Descubra el campus de la Universidad ABS en Bamako: aulas modernas, biblioteca, espacios digitales y vida comunitaria al servicio del éxito estudiantil.",
  path: "/campus",
  locale: "es",
})

export default function CampusPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Nuestro campus</h1>

      <div className="mb-12">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus de la Universidad ABS"
          width={1200}
          height={600}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>El campus de un vistazo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            La Universidad ABS — African Business School le recibe en Hamdallaye ACI 2000, Bamako, en un entorno
            diseñado para la formación y el éxito estudiantil. Las aulas, los espacios de trabajo y los lugares de vida
            común están organizados al servicio de los cinco polos de formación del establecimiento y de la comunidad
            estudiantil.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="facilities" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="facilities">Instalaciones</TabsTrigger>
          <TabsTrigger value="housing">Alojamiento estudiantil</TabsTrigger>
          <TabsTrigger value="recreation">Vida estudiantil</TabsTrigger>
        </TabsList>
        <TabsContent value="facilities">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Aulas",
                description:
                  "Aulas acondicionadas para las enseñanzas de los cinco polos de formación, desde las clases magistrales hasta las clases dirigidas.",
                image:
                  "/images/campus/IMG-20250212-WA0021.jpg",
              },
              {
                title: "Biblioteca y recursos",
                description:
                  "Un espacio dedicado a la lectura y a la investigación, con obras y recursos adaptados a los programas.",
                image:
                  "/images/campus/IMG-20250212-WA0003.jpg",
              },
              {
                title: "Espacios de trabajo",
                description:
                  "Lugares para trabajar solo o en grupo, preparar los proyectos y repasar entre clases.",
                image:
                  "/images/campus/IMG-20250212-WA0004.jpg",
              },
              {
                title: "Anfiteatros y salas de conferencia",
                description:
                  "Espacios para las clases en grupos grandes, las conferencias y los encuentros con profesionales.",
                image:
                  "/images/campus/IMG-20250212-WA0006.jpg",
              },
              {
                title: "Espacios de prácticas",
                description:
                  "Espacios dedicados a la puesta en práctica, en particular para las formaciones en ingeniería informática y en ingeniería geológica, civil y minera.",
                image:
                  "/images/campus/IMG-20250212-WA0007.jpg",
              },
              {
                title: "Espacios de vida común",
                description:
                  "Lugares de intercambio y de descanso que favorecen el diálogo y la vida comunitaria entre estudiantes.",
                image:
                  "/images/campus/IMG-20250212-WA0009.jpg",
              },
            ].map((facility, index) => (
              <Card key={index}>
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="housing">
          <p className="text-lg mb-6">
            La Universidad ABS acompaña a sus estudiantes en sus gestiones de alojamiento en Bamako. Las modalidades y
            las disponibilidades se precisan cada año por la administración: le invitamos a contactarla para conocer las
            opciones posibles y las recomendaciones de orientación.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <Image
                src="/images/campus/IMG-20250212-WA0010.jpg"
                alt="Alojarse cerca del campus"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Alojarse en Bamako</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Información sobre las opciones de alojamiento según las disponibilidades</li>
                  <li>Consejos para la búsqueda de un alojamiento adaptado a su situación</li>
                  <li>Referencias sobre los barrios cercanos al campus</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/images/campus/IMG-20250212-WA0011.jpg"
                alt="Acompañamiento de los estudiantes"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Acompañamiento de los estudiantes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Orientación por la administración para las cuestiones prácticas</li>
                  <li>Ayuda para la instalación de los nuevos estudiantes, incluidos los que llegan de otras regiones</li>
                  <li>Contacto directo para cualquier solicitud particular</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="recreation">
          <p className="text-lg mb-6">
            La vida estudiantil en ABS va más allá del aula: los intercambios, las actividades culturales y las
            iniciativas impulsadas por los estudiantes contribuyen a un equilibrio entre los estudios y la vida
            personal.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Intercambios y convivencia",
                description:
                  "Espacios y momentos para encontrarse entre estudiantes, intercambiar y descansar después de las clases.",
                image:
                  "/images/campus/IMG-20250212-WA0012.jpg",
              },
              {
                title: "Actividades culturales",
                description:
                  "Momentos culturales que celebran la diversidad de las culturas africanas, según el programa del año.",
                image:
                  "/images/campus/IMG-20250212-WA0013.jpg",
              },
              {
                title: "Espacios de descanso",
                description:
                  "Lugares de reposo y de conversación dentro del campus, favorables al bienestar estudiantil.",
                image:
                  "/images/campus/IMG-20250212-WA0014.jpg",
              },
              {
                title: "Iniciativas estudiantiles",
                description:
                  "Clubes y proyectos impulsados por los estudiantes según sus centros de interés, con el apoyo de la administración.",
                image:
                  "/images/campus/IMG-20250212-WA0015.jpg",
              },
              {
                title: "Eventos del año",
                description:
                  "Conferencias, jornadas de orientación y encuentros que se anuncian cuando están oficialmente programados.",
                image:
                  "/images/gallery/IMG-20250216-WA0015.jpg",
              },
              {
                title: "Restauración",
                description:
                  "Soluciones de restauración en el campus y en las proximidades, precisadas por la administración al inicio del año.",
                image:
                  "/images/gallery/IMG-20250216-WA0021.jpg",
              },
            ].map((rec, index) => (
              <Card key={index}>
                <Image
                  src={rec.image || "/placeholder.svg"}
                  alt={rec.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{rec.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{rec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Venga a descubrir nuestro campus</h2>
        <p className="text-lg mb-6">
          Una visita al campus es la mejor manera de proyectarse en sus estudios en ABS: espacios de formación, lugares
          de vida y equipo pedagógico. Contáctenos para organizar su visita.
        </p>
        <a
          href="/visit"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Planificar una visita al campus
        </a>
      </div>
    </div>
  )
}
