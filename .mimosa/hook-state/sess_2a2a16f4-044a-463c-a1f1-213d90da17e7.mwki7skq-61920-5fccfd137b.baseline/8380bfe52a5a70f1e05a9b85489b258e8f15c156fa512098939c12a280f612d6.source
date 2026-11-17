import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ORGANIZATION } from "@/lib/constants"
import {
  GraduationCap,
  Users,
  CalendarClock,
  MessagesSquare,
  ClipboardCheck,
  LineChart,
  Globe2,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  Trophy,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "English Academy | Universidad ABS — El inglés en el corazón de su éxito",
  description: "La English Academy de la Universidad African Business School en Bamako: programas flexibles, práctica activa, evaluación regular y comunidad de aprendices para dominar el inglés.",
  path: "/english-academy",
  locale: "es",
})

const contact = ORGANIZATION.contact

const objectifs = [
  {
    icon: MessagesSquare,
    title: "Reforzar las competencias lingüísticas",
    description:
      "Desarrollar el dominio del inglés tanto escrito como oral, para estudiar, trabajar e intercambiar con total confianza.",
  },
  {
    icon: CalendarClock,
    title: "Programas flexibles",
    description:
      "Formatos adaptados a los horarios de cada uno: estudiantes, profesionales en activo, públicos en reconversión.",
  },
  {
    icon: FlaskConical,
    title: "La práctica ante todo",
    description:
      "Talleres, simulaciones, casos prácticos e intercambios lingüísticos: el inglés se aprende hablándolo.",
  },
  {
    icon: LineChart,
    title: "Evaluación y seguimiento regulares",
    description:
      "Evaluaciones periódicas y un recorrido de progreso individualizado para medir sus avances paso a paso.",
  },
  {
    icon: Users,
    title: "Una comunidad de aprendices",
    description:
      "Eventos culturales, actividades sociales e intercambios entre aprendices: el inglés también se vive fuera del aula.",
  },
]

const programmes = [
  {
    icon: GraduationCap,
    title: "Inglés para estudiantes",
    description:
      "Un recorrido diseñado para los estudiantes de ABS y de otros lugares: consolidación de las bases, inglés académico y preparación para los cursos impartidos en inglés.",
    points: [
      "Refuerzo del inglés oral y escrito",
      "Inglés académico: presentaciones, redacción, comprensión de documentos",
      "Horarios compatibles con sus cursos en la universidad",
    ],
  },
  {
    icon: Briefcase,
    title: "Inglés para profesionales",
    description:
      "Para los trabajadores en activo que quieren ganar en eficacia: inglés de los negocios, reuniones, correos electrónicos, negociación y presentaciones profesionales.",
    points: [
      "Inglés profesional de la vida diaria y de la empresa",
      "Simulaciones de reuniones, entrevistas y negociaciones",
      "Horarios adaptados a las agendas cargadas",
    ],
  },
  {
    icon: Globe2,
    title: "Inglés general y conversación",
    description:
      "Un programa abierto a todos los niveles, centrado en la fluidez oral y la confianza en sí mismo en las situaciones de la vida cotidiana.",
    points: [
      "Grupos de nivel adaptados tras una evaluación",
      "Intercambios lingüísticos y talleres de conversación",
      "Inmersión a través de actividades culturales",
    ],
  },
]

export default function EnglishAcademyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center justify-center text-white">
        <Image
          src="/images/gallery/IMG-20250216-WA0015.jpg"
          alt="Estudiantes de la English Academy de la Universidad ABS"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/80 to-blue-950/90" />
        <div className="relative z-10 max-w-4xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Universidad African Business School — Bamako
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">La English Academy de ABS</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
            Un entorno de aprendizaje dinámico, enteramente dedicado al inglés. Porque en un mundo globalizado, las
            empresas y las universidades buscan perfiles anglófonos.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">
                Inscribirse en la English Academy <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/contact">Hacer una pregunta</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi l'anglais */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">
              El inglés, una competencia decisiva para su futuro
            </h2>
            <p className="text-lg text-slate-600">
              Evolucionamos en un entorno globalizado: las empresas, igual que las universidades, buscan hoy perfiles
              capaces de trabajar en inglés. Por eso el inglés está en el corazón de la formación en ABS — y por eso
              la English Academy está abierta a todos.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {objectifs.map((item) => (
              <Card key={item.title} className="border-t-4 border-t-cyan-400 shadow-md">
                <CardHeader>
                  <item.icon className="mb-2 h-9 w-9 text-blue-700" />
                  <CardTitle className="text-lg text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="programmes" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="programmes">Nuestros programas</TabsTrigger>
              <TabsTrigger value="methode">Método</TabsTrigger>
              <TabsTrigger value="suivi">Test de nivel y seguimiento</TabsTrigger>
            </TabsList>

            <TabsContent value="programmes">
              <div className="grid gap-6 lg:grid-cols-3">
                {programmes.map((programme) => (
                  <Card key={programme.title} className="flex flex-col shadow-md hover:shadow-xl">
                    <CardHeader>
                      <programme.icon className="mb-2 h-9 w-9 text-blue-700" />
                      <CardTitle className="text-xl text-blue-900">{programme.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-grow flex-col">
                      <p className="mb-4 text-slate-600">{programme.description}</p>
                      <ul className="mt-auto space-y-2">
                        {programme.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center text-slate-700">
                Los horarios, grupos y contenidos se ajustan según las inscripciones y los niveles. Contáctenos al{" "}
                <span className="font-semibold text-blue-900">{contact.phone}</span> para conocer las próximas
                sesiones.
              </div>
            </TabsContent>

            <TabsContent value="methode">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0016.jpg"
                    alt="Taller de inglés en la English Academy de ABS"
                    width={720}
                    height={520}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-blue-900 md:text-3xl">
                    Un método 100 % práctico, con el espíritu de ABS
                  </h2>
                  <p className="mb-6 text-slate-700">
                    Como en el conjunto de los planes de estudio de la universidad — 80 % de práctica, 20 % de teoría
                    —, la English Academy privilegia el uso activo de la lengua en lugar de la recitación de reglas.
                  </p>
                  <ul className="mb-8 space-y-4">
                    {[
                      {
                        title: "Talleres",
                        text: "Trabajo en grupos pequeños sobre la expresión oral, la pronunciación y la escritura.",
                      },
                      {
                        title: "Simulaciones",
                        text: "Situaciones reales: entrevista de trabajo, reunión profesional, presentación oral.",
                      },
                      {
                        title: "Intercambios lingüísticos",
                        text: "Encuentros y conversaciones regulares para practicar el inglés en un marco relajado.",
                      },
                      {
                        title: "Actividades culturales y sociales",
                        text: "Eventos que dan vida a la lengua y crean una auténtica comunidad de aprendices.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        <span>
                          <span className="font-semibold text-blue-900">{item.title} — </span>
                          <span className="text-slate-700">{item.text}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/apply">
                      Unirse a la próxima sesión <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="suivi">
              <div className="mx-auto max-w-4xl">
                <div className="mb-10 text-center">
                  <h2 className="mb-3 text-2xl font-bold text-blue-900 md:text-3xl">
                    Un punto de partida claro, una progresión medible
                  </h2>
                  <p className="text-lg text-slate-600">
                    Cada aprendiz conoce su punto de partida y sigue un recorrido señalizado: es la garantía de
                    progresos visibles, sesión tras sesión.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="shadow-md">
                    <CardHeader>
                      <ClipboardCheck className="mb-2 h-9 w-9 text-blue-700" />
                      <CardTitle className="text-lg text-blue-900">Test de nivel a la entrada</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 text-slate-600">
                        Un test de inglés determina su nivel y su grupo en el momento de su inscripción. Permite
                        integrar un recorrido adaptado, ni demasiado fácil ni demasiado exigente.
                      </p>
                      <p className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm text-slate-700">
                        Dato útil: el test de inglés forma parte integrante del proceso de admisión de la Universidad
                        ABS. Al unirse a un programa de la universidad, su nivel de inglés se evalúa desde la
                        entrada.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-md">
                    <CardHeader>
                      <LineChart className="mb-2 h-9 w-9 text-blue-700" />
                      <CardTitle className="text-lg text-blue-900">Evaluación y recorrido de progresión</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {[
                          "Evaluaciones regulares por escrito y oralmente",
                          "Balances individuales: siempre sabe dónde está",
                          "Un recorrido de progresión estructurado, etapa tras etapa",
                          "Certificado de asistencia al finalizar su recorrido",
                        ].map((point) => (
                          <li key={point} className="flex items-start gap-2 text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/gallery/IMG-20250216-WA0067.jpg"
                    alt="Comunidad de aprendices de la English Academy"
                    width={960}
                    height={420}
                    className="h-72 w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Pásese al inglés, desde ahora</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Estudiante, profesional o simple apasionado: la English Academy de ABS le abre sus puertas en el campus
            de Hamdallaye ACI 2000, Bamako. Llame al {contact.phone} o escriba a {contact.email}.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">Inscribirse</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/admissions">Admisiones ABS</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/international">Dimensión internacional</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
