import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ORGANIZATION } from "@/lib/constants"
import {
  BookOpen,
  Video,
  Bot,
  Wifi,
  MonitorSmartphone,
  ClipboardList,
  MessageSquare,
  Headset,
  Clock,
  Globe2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "E-Campus | Universidad ABS — Su campus digital",
  description:
    "El E-Campus de la Universidad African Business School: plataforma LMS, aulas virtuales, recursos de IA y soporte técnico dedicados a su éxito, 24/7.",
  path: "/e-campus",
  locale: "es",
})

const stats = [
  { value: "24/7", label: "Acceso a la plataforma, de día y de noche", icon: Clock },
  { value: "100%", label: "De los cursos accesibles en línea", icon: Globe2 },
  { value: "IA", label: "Inteligencia artificial integrada en los planes de estudio", icon: Bot },
  { value: "1 equipo", label: "Soporte informático dedicado a los estudiantes", icon: Headset },
]

export default function ECampusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center justify-center text-white">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus de la Universidad African Business School en Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-900/80 to-blue-950/90" />
        <div className="relative z-10 max-w-4xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Universidad African Business School — Bamako
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            El E-Campus: su universidad a un clic de distancia
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
            Cursos, trabajos, calificaciones, aulas virtuales y herramientas de inteligencia artificial: todo lo
            digital de ABS reunido en un solo entorno, accesible esté donde esté.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/student-portal">
                Acceder al portal estudiantil <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/e-campus/lms">Descubrir la plataforma LMS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-blue-700" />
              <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">Un ecosistema digital completo</h2>
            <p className="text-lg text-slate-600">
              El aprendizaje en ABS nunca se detiene en la puerta del aula. Explore cada vertiente del E-Campus.
            </p>
          </div>

          <Tabs defaultValue="lms" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="lms">Plataforma LMS</TabsTrigger>
              <TabsTrigger value="virtual">Aulas virtuales</TabsTrigger>
              <TabsTrigger value="tools">Herramientas digitales</TabsTrigger>
              <TabsTrigger value="support">Soporte</TabsTrigger>
            </TabsList>

            <TabsContent value="lms">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0006.jpg"
                    alt="Estudiantes de ABS trabajando en la plataforma LMS"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <BookOpen className="h-7 w-7 text-blue-700" /> Todos sus cursos, en un mismo lugar
                  </h3>
                  <p className="mb-6 text-slate-700">
                    El Learning Management System de ABS es el corazón de su vida académica digital. Cada docente
                    deposita allí sus materiales de curso, sus trabajos y sus calificaciones, para que nunca se pierda
                    nada.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Consulta de los materiales de curso, apuntes y recursos compartidos por los docentes",
                      "Entrega de trabajos en línea y seguimiento de los plazos",
                      "Consulta de las calificaciones y de los resultados de evaluación en tiempo real",
                      "Espacios de discusión por curso para intercambiar con sus docentes y compañeros",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/e-campus/lms">
                      Explorar el LMS en detalle <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="virtual">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <Video className="h-7 w-7 text-blue-700" /> Aprender en directo, esté donde esté
                  </h3>
                  <p className="mb-6 text-slate-700">
                    Las aulas virtuales prolongan el aula de clase. Clases magistrales, trabajos dirigidos,
                    defensas y sesiones de coaching se desarrollan en videoconferencia, con interacción en tiempo
                    real.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Clases en directo con los profesores de ABS, en presencial o a distancia",
                      "Sesiones grabadas para repasar a su ritmo",
                      "Trabajos en grupo y presentaciones en línea",
                      "Ideal para los estudiantes profesionales que concilian trabajo y estudios",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/e-campus/virtual-classrooms">
                      Ver las aulas virtuales <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="order-1 overflow-hidden rounded-2xl shadow-lg lg:order-2">
                  <Image
                    src="/images/campus/IMG-20250212-WA0007.jpg"
                    alt="Aula virtual de la Universidad ABS"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className="mb-8">
                <h3 className="mb-2 flex items-center gap-3 text-2xl font-bold text-blue-900">
                  <MonitorSmartphone className="h-7 w-7 text-blue-700" /> Herramientas que preparan para el mundo del mañana
                </h3>
                <p className="max-w-3xl text-slate-700">
                  Dado que la inteligencia artificial está integrada en todos los planes de estudio de ABS, el
                  E-Campus pone a su disposición un conjunto de herramientas digitales que lo convierten en un
                  profesional experimentado en tecnologías.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Bot className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Recursos de IA</CardTitle>
                    <CardDescription>
                      Iníciese en la inteligencia artificial generativa y aprenda a utilizarla de manera responsable
                      en sus proyectos académicos y profesionales.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <BookOpen className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Biblioteca digital</CardTitle>
                    <CardDescription>
                      Acceda a los recursos documentales, obras y referencias de la biblioteca de ABS desde el
                      E-Campus.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/library">
                        Biblioteca <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Wifi className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Wi-Fi en todo el campus</CardTitle>
                    <CardDescription>
                      Una conexión disponible en las aulas, la biblioteca y los espacios de trabajo para permanecer
                      conectado en todo momento.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <ClipboardList className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Recursos estudiantiles</CardTitle>
                    <CardDescription>
                      Horarios, reglamentos, documentos administrativos y guías prácticas, reunidos en un espacio
                      único.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/student-resources">
                        Recursos estudiantiles <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <MessageSquare className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Comunicación y coaching</CardTitle>
                    <CardDescription>
                      Intercambie con sus coaches y la administración a través de los canales digitales de la
                      universidad: el seguimiento es regular y personalizado.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Globe2 className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Inglés y apertura internacional</CardTitle>
                    <CardDescription>
                      El inglés está en el centro de la formación en ABS: las herramientas digitales apoyan su
                      práctica cotidiana del idioma.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/english-academy">
                        English Academy <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="support">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0010.jpg"
                    alt="Soporte informático al servicio de los estudiantes de ABS"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <Headset className="h-7 w-7 text-blue-700" /> Un equipo a su escucha
                  </h3>
                  <p className="mb-6 text-slate-700">
                    Problema de conexión, acceso a un curso, cuenta estudiantil: el equipo de soporte informático de
                    ABS le acompaña para que la tecnología siga siendo una ventaja, nunca un obstáculo.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Asistencia para sus accesos a la plataforma LMS y al portal estudiantil",
                      "Ayuda con las aulas virtuales: configuración, sonido, compartición de pantalla",
                      "Soporte Wi-Fi en el campus de Hamdallaye ACI 2000",
                      "Consejos y formación en las herramientas digitales y la IA",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                      <Link href="/e-campus/it-support">
                        Contactar con el soporte <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                      <Link href="/contact">Página de contacto</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pedagogía digital */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900">Lo digital al servicio de la pedagogía de ABS</h2>
            <p className="mb-10 text-lg text-slate-600">
              Con un 80 % de práctica y un 20 % de teoría, el E-Campus no es un adorno: es la prolongación natural de
              una pedagogía orientada a la acción y a la empleabilidad.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Aprender haciendo",
                description:
                  "Proyectos depositados en línea, estudios de caso compartidos en el LMS, simulaciones en el aula virtual: la práctica también pasa por lo digital.",
              },
              {
                title: "Una formación flexible",
                description:
                  "Cursos presenciales en el campus de Bamako y contenidos en línea accesibles 24/7: su agenda sigue bajo control.",
              },
              {
                title: "Preparar la empleabilidad",
                description:
                  "Dominar las herramientas digitales y la IA es responder a lo que las empresas esperan hoy de cada titulado de ABS.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-t-4 border-t-cyan-400 shadow-md">
                <CardHeader>
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">¿Listo para unirse al E-Campus de ABS?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-100">
            Conéctese desde ahora al portal estudiantil, o contáctenos al {ORGANIZATION.contact.phone} para
            cualquier pregunta sobre el entorno digital de la universidad.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/student-portal">Portal estudiantil</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/admissions">Unirse a ABS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
