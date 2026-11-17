import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  Landmark,
  Pickaxe,
  Scale,
  Newspaper,
  Wifi,
  Database,
  Laptop,
  Users,
  Printer,
  Search,
  Clock,
  MapPin,
  Phone,
  Mail,
  Headphones,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Biblioteca | ABS",
  description: "Biblioteca y recursos documentales de ABS — African Business School en Bamako.",
  path: "/library",
  locale: "es",
})

const collections = [
  {
    icon: Landmark,
    title: "Management y Gestión",
    description:
      "Estrategia, marketing, RRHH, emprendimiento: las obras de referencia y los manuales de las 5 Licenciaturas de la universidad, completados con estudios de casos africanos e internacionales.",
  },
  {
    icon: BookOpen,
    title: "Finanzas, Banca y Finanzas Islámicas",
    description:
      "Una colección excepcional en la región: finanzas corporativas, ingeniería financiera, mercados, microfinanzas y principios de las finanzas islámicas (mudaraba, musharaka, sukuk) — en francés y en inglés.",
  },
  {
    icon: Pickaxe,
    title: "Minas, Geología y Energía",
    description:
      "Ingeniería minera, explotación de canteras, seguridad de los sitios, derecho minero y desafíos medioambientales: la base documental de nuestras carreras técnicas, en sintonía con el sector malí.",
  },
  {
    icon: Scale,
    title: "Derecho y Gobernanza",
    description:
      "Derecho de los negocios, derecho internacional, contratación pública, gobernanza y ética: recursos imprescindibles para el Máster en Gobernanza de la Contratación Pública y la preparación de oposiciones.",
  },
  {
    icon: Newspaper,
    title: "Prensa malí y africana",
    description:
      "Periódicos, revistas y publicaciones económicas de Malí y del continente: manténgase al tanto de la actualidad para sus exposiciones, debates y trabajos de fin de estudios.",
  },
  {
    icon: Database,
    title: "Recursos digitales",
    description:
      "E-books, bases de datos académicas, trabajos de fin de estudios de estudiantes y exámenes de años anteriores accesibles desde los puestos de la biblioteca o por wifi en el campus.",
  },
]

const services = [
  {
    icon: Search,
    title: "Asistencia en la búsqueda documental",
    description:
      "Un bibliotecario le guía para encontrar la fuente adecuada, citar correctamente y aprovechar las bases de datos.",
  },
  {
    icon: Laptop,
    title: "Puestos informáticos y wifi",
    description:
      "Un espacio conectado para consultar los recursos digitales, redactar sus trabajos y preparar sus presentaciones.",
  },
  {
    icon: Users,
    title: "Salas de trabajo en grupo",
    description:
      "Espacios para preparar sus proyectos en equipo — la pedagogía de ABS se basa en un 80 % en la práctica y el trabajo colectivo.",
  },
  {
    icon: Printer,
    title: "Impresión y reprografía",
    description:
      "Impresión, fotocopia y digitalización de documentos en el lugar, a precio de estudiante.",
  },
  {
    icon: Headphones,
    title: "Espacio de inglés e idiomas",
    description:
      "Recursos dedicados a la English Academy: manuales, audio, preparación de pruebas y lectura en inglés para todos los niveles.",
  },
  {
    icon: BookOpen,
    title: "Préstamo interbibliotecario",
    description:
      "¿Un documento que no está en nuestras estanterías? Activamos nuestros socios para obtenerlo en el menor plazo posible.",
  },
]

export default function LibraryPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/IMG-20250212-WA0013.jpg"
          alt="Biblioteca universitaria de la African Business School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">
                Biblioteca universitaria
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                La biblioteca de ABS: el combustible de sus trabajos de fin de estudios y de sus ambiciones
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                Colecciones alineadas con nuestros programas, recursos digitales, espacios de trabajo y un equipo que
                le acompaña: aquí, cada proyecto — exposición, trabajo de fin de estudios, plan de negocios — comienza
                con una buena búsqueda documental.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/library/catalog">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    Buscar en el catálogo
                  </Button>
                </Link>
                <Link href="/library/hours">
                  <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                    Horario de apertura
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="collections" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="collections">Colecciones</TabsTrigger>
            <TabsTrigger value="services">Servicios</TabsTrigger>
            <TabsTrigger value="horaires">Horarios y acceso</TabsTrigger>
          </TabsList>

          {/* Collections */}
          <TabsContent value="collections">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Colecciones pensadas para nuestros planes de estudio</h2>
              <p className="text-slate-600 text-lg">
                Desde la Licenciatura hasta el MBA, cada carrera de ABS cuenta con su propio fondo documental. Nuestras
                adquisiciones siguen los planes pedagógicos y la actualidad económica de África Occidental.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {collections.map((c, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow border-t-4 border-t-cyan-400">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                        <c.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">{c.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{c.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-blue-950 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <Wifi className="h-10 w-10 text-cyan-400 shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Una biblioteca conectada</h3>
                    <p className="text-slate-300 text-sm">
                      Wifi en todo el campus, catálogo en línea, bases de datos académicas: la documentación de ABS le
                      acompaña a todas partes, del campus de Hamdallaye a su domicilio.
                    </p>
                  </div>
                  <Link href="/resources/library">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold shrink-0">
                      Recursos en línea
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services */}
          <TabsContent value="services">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Mucho más que estanterías</h2>
              <p className="text-slate-600 text-lg">
                La biblioteca es un lugar de trabajo, de intercambio y de formación metodológica. Descubra todo lo que
                pone a su disposición, como complemento de los cursos.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {services.map((s, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                        <s.icon className="h-5 w-5 text-blue-700" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">{s.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/library/catalog">
                <Button className="bg-blue-700 hover:bg-blue-900">
                  <Search className="mr-2 h-4 w-4" />
                  Explorar el catálogo
                </Button>
              </Link>
              <Link href="/library/hours">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Clock className="mr-2 h-4 w-4" />
                  Planificar mi visita
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Horaires & accès */}
          <TabsContent value="horaires">
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Horario de apertura</h2>
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <ul className="divide-y divide-slate-100">
                      {[
                        { day: "Lunes — Viernes", hours: "8:00 — 18:00", note: "Jornada continua, espacio de trabajo abierto" },
                        { day: "Sábado", hours: "9:00 — 13:00", note: "Repasos y consulta en el lugar" },
                        { day: "Domingo y días festivos", hours: "Cerrado", note: "Recursos digitales accesibles a distancia" },
                      ].map((row, i) => (
                        <li key={i} className="flex items-center justify-between py-3">
                          <div>
                            <p className="font-semibold text-blue-900">{row.day}</p>
                            <p className="text-sm text-slate-500">{row.note}</p>
                          </div>
                          <span
                            className={`font-bold ${
                              row.hours === "Cerrado" ? "text-slate-400" : "text-cyan-600"
                            }`}
                          >
                            {row.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-slate-500 mt-4">
                      Los horarios pueden variar durante los períodos de exámenes, las vacaciones académicas y los días
                      festivos malienses. Consulte la página dedicada para las actualizaciones.
                    </p>
                    <Link href="/library/hours">
                      <Button variant="outline" size="sm" className="mt-3 border-blue-700 text-blue-700 hover:bg-blue-50">
                        Horarios detallados
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <Card className="border-t-4 border-t-cyan-400">
                  <CardHeader>
                    <CardTitle className="text-blue-900">Acceso y condiciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-600 text-sm">
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Acceso prioritario para los estudiantes de ABS presentando la tarjeta estudiantil.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Las condiciones de préstamo se comunican en la recepción de la biblioteca.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Antiguos alumnos: infórmense sobre las fórmulas de acceso al fondo documental.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Ubicación: campus de Hamdallaye ACI 2000, en pleno corazón de Bamako, de fácil acceso desde
                        todo el distrito.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Contactar con la biblioteca</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.address.formatted}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.email}
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="mt-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                        Enviar una pregunta
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Su próxima gran idea comienza aquí</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Ya sea que prepare una exposición, un trabajo de fin de estudios o su propia empresa, la biblioteca de ABS
            es su primer socio de éxito. Venga a descubrirla.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/library/catalog">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                Consultar el catálogo
              </Button>
            </Link>
            <Link href="/campus-tour">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Visitar el campus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
