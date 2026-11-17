import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Book, BookOpen, Database, Globe, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Biblioteca estudiantil | ABS",
  description: "Biblioteca y espacios de trabajo para los estudiantes de ABS — African Business School.",
  path: "/student-resources/library",
  locale: "es",
})

export default function LibraryServicesPage() {
  const services = [
    {
      title: "Préstamo de obras",
      description: "Acceder a las obras físicas puestas a disposición de los estudiantes",
      icon: Book,
    },
    {
      title: "Recursos digitales",
      description: "Consultar los recursos en línea adaptados a su formación",
      icon: Database,
    },
    {
      title: "Ayuda a la investigación",
      description: "Ser orientado en sus búsquedas documentales",
      icon: Globe,
    },
    {
      title: "Espacios de trabajo",
      description: "Trabajar en espacios favorables al estudio, solo o en grupo",
      icon: BookOpen,
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Biblioteca y recursos documentales</h1>
      <p className="text-xl mb-12">
        La biblioteca de la Universidad ABS es su puerta de acceso a los recursos académicos. Acompaña su aprendizaje
        y sus trabajos en los cinco polos de formación del establecimiento.
      </p>

      <div className="mb-12">
        <Image
          src="/images/campus/IMG-20250212-WA0021.jpg"
          alt="Biblioteca de la Universidad ABS"
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

      <Tabs defaultValue="catalog" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="catalog">Catálogo</TabsTrigger>
          <TabsTrigger value="databases">Recursos digitales</TabsTrigger>
          <TabsTrigger value="services">Servicios</TabsTrigger>
          <TabsTrigger value="hours">Horarios y acceso</TabsTrigger>
        </TabsList>
        <TabsContent value="catalog">
          <Card>
            <CardHeader>
              <CardTitle>Catálogo</CardTitle>
              <CardDescription>Encuentre las obras y recursos disponibles</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                El catálogo referencia las obras y recursos documentales de la biblioteca. Utilice el campo de
                búsqueda siguiente para encontrar los documentos que necesita:
              </p>
              <div className="bg-secondary p-4 rounded-lg">
                <input
                  type="text"
                  placeholder="Buscar en el catálogo..."
                  className="w-full p-2 rounded border border-gray-300"
                />
                <Button className="mt-2">Buscar</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="databases">
          <Card>
            <CardHeader>
              <CardTitle>Recursos digitales</CardTitle>
              <CardDescription>Acceder a los recursos en línea puestos a disposición</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Obras digitales en relación con las enseñanzas de los cinco polos</li>
                <li>Recursos de referencia para los trabajos y proyectos de formación</li>
                <li>Documentación de apoyo a la preparación de las prácticas</li>
                <li>Materiales complementarios recomendados por los docentes</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Los recursos accesibles dependen de las suscripciones y acuerdos vigentes; la lista es comunicada por
                la biblioteca.
              </p>
              <Link href="/library/online-resources">
                <Button className="mt-4">Ver todos los recursos</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Servicios propuestos</CardTitle>
              <CardDescription>Un apoyo más allá del simple préstamo de obras</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Orientación documental para sus trabajos y proyectos</li>
                <li>Acompañamiento en sus búsquedas</li>
                <li>Consejos de citación y de organización de las referencias</li>
                <li>Espacios de trabajo para el estudio individual y en grupo</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hours">
          <Card>
            <CardHeader>
              <CardTitle>Horarios y acceso</CardTitle>
              <CardDescription>Encontrarnos en el campus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 mr-2" />
                <span>Horarios de apertura comunicados por la administración al inicio del año</span>
              </div>
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Apertura adaptada al calendario académico del establecimiento</span>
              </div>
              <p className="mb-4">
                La biblioteca se encuentra en el campus de la Universidad ABS, Hamdallaye ACI 2000, Bamako. Las
                condiciones de acceso y de préstamo se precisan por la administración.
              </p>
              <Link href="/campus/map">
                <Button>Ver el plano del campus</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-primary text-primary-foreground p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">¿Necesita ayuda?</h2>
        <p className="mb-6">
          El equipo de la biblioteca está ahí para acompañarle en sus búsquedas y orientarle entre los recursos. No
          dude en solicitarnos.
        </p>
        <Link href="/contact/library">
          <Button variant="secondary">Contactar a la biblioteca</Button>
        </Link>
      </div>
    </div>
  )
}
