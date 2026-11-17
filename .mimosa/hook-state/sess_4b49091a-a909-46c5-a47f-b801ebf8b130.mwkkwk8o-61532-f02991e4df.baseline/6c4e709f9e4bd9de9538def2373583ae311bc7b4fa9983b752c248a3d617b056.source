import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, BookOpen, Briefcase, Globe2, Languages, Laptop, Target, Users } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Enfoque pedagógico | ABS",
  description: "Descubra el enfoque pedagógico de ABS: proyectos, práctica, competencias transversales, idiomas y profesionalización.",
  path: "/academics/pedagogy",
  locale: "es",
})

const approches = [
  {
    icon: Target,
    title: "Aprender comprendiendo y practicando",
    text: "La pedagogía de ABS busca vincular los saberes fundamentales con las situaciones concretas. Según las formaciones y los recursos disponibles, los aprendizajes pueden apoyarse en estudios de caso, ejercicios, clases dirigidas, proyectos, presentaciones, visitas e inmersiones profesionales. El objetivo es hacer progresar al estudiante en el análisis, el método, la comunicación y la capacidad de producir un trabajo argumentado.",
  },
  {
    icon: Briefcase,
    title: "Los proyectos como hilo conductor",
    text: "Los proyectos permiten a los estudiantes movilizar varias competencias en torno a un problema o un entregable : estudio, expediente, prototipo, plan de acción, presentación o informe. Los objetivos, los criterios de evaluación y los plazos se explican al inicio de cada módulo.",
  },
  {
    icon: Globe2,
    title: "Idiomas y apertura internacional",
    text: "El inglés está concebido como una competencia transversal a desarrollar progresivamente en los itinerarios. Articula comprensión, expresión, vocabulario profesional y simulaciones prácticas. Para Relaciones y Asuntos Internacionales, el español está previsto como lengua complementaria, con sujeción a la validación de los volúmenes horarios y de las modalidades pedagógicas. Todo anuncio de certificación TOEIC, IELTS u otra se limita a los dispositivos efectivamente disponibles y autorizados.",
  },
  {
    icon: Laptop,
    title: "Competencias digitales e inteligencia artificial",
    text: "Las competencias digitales ocupan un lugar creciente en los oficios. ABS favorece un uso razonado de las herramientas digitales y una iniciación progresiva a la inteligencia artificial, teniendo en cuenta el nivel de los estudiantes, las necesidades de las ramas, la protección de los datos, el espíritu crítico y la integridad académica.",
  },
  {
    icon: Users,
    title: "Desarrollo personal y profesionalización",
    text: "La formación comprende también dimensiones esenciales para la vida profesional : expresión en público, gestión del tiempo, trabajo en equipo, organización, saber estar, dirección de reuniones, gestión del estrés y preparación para la inserción. Las actividades exactas dependen del calendario académico y se anuncian cuando están confirmadas.",
  },
  {
    icon: BookOpen,
    title: "Prácticas e inmersiones",
    text: "Las prácticas, las visitas y las inmersiones son ocasiones de comprender mejor los oficios y los entornos de trabajo. Su calendario, sus modalidades y su carácter obligatorio u opcional se precisan en el plan oficial de cada formación.",
  },
]

const dispositifLinguistique = [
  {
    niveau: "Licencia (grado) 1",
    contenu:
      "Consolidación de las bases gramaticales y léxicas, comprensión oral y escrita, expresión corriente y adquisición del vocabulario académico.",
  },
  {
    niveau: "Licencia (grado) 2",
    contenu:
      "Desarrollo de la comunicación profesional, de las presentaciones orales, de la redacción y del vocabulario especializado propio de cada rama.",
  },
  {
    niveau: "Licencia (grado) 3",
    contenu:
      "Utilización del inglés en los proyectos, los estudios de caso, las exposiciones, los informes y ciertas defensas de proyecto.",
  },
  {
    niveau: "Máster 1 y Máster 2",
    contenu:
      "Refuerzo del inglés profesional y académico, análisis de documentos especializados, presentación de trabajos de investigación, negociación y comunicación en un entorno internacional.",
  },
]

const soutenances = [
  "Defensas de proyecto en francés para los proyectos y trabajos académicos ;",
  "Presentaciones o defensas en inglés, según el nivel lingüístico y el itinerario ;",
  "Defensas bilingües, con una presentación en una lengua y una secuencia de preguntas y respuestas en la otra ;",
  "Resúmenes ejecutivos, abstracts o soportes de presentación en inglés ;",
  "Simulaciones de reuniones, de negociaciones, de conferencias y de entrevistas profesionales en francés y en inglés.",
]

const anglaisParSpecialite = [
  { domaine: "Ingeniería (geológica, civil y minera)", angle: "Inglés científico y técnico" },
  { domaine: "Administración de empresas", angle: "Inglés de los negocios" },
  { domaine: "Relaciones y asuntos internacionales", angle: "Inglés diplomático" },
  { domaine: "Periodismo-Comunicación", angle: "Inglés de los medios" },
  { domaine: "Ingeniería informática", angle: "Inglés aplicado a las tecnologías digitales" },
]

export default function PedagogyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="Estudiantes de ABS en el campus universitario"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Pedagogía</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Aprender comprendiendo y practicando
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Vincular los saberes fundamentales con las situaciones concretas : estudios de caso, proyectos, presentaciones,
            inmersiones y simulaciones profesionales, con una orientación de referencia del{" "}
            <strong className="text-cyan-300">40&nbsp;% de teoría y 60&nbsp;% de práctica</strong>.
          </p>
        </div>
      </section>

      {/* Les six dimensions de l'approche pédagogique */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Nuestro enfoque pedagógico</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Una orientación de referencia del 40&nbsp;% de aportaciones teóricas y 60&nbsp;% de prácticas, proyectos,
            clases dirigidas, trabajo de terreno, prácticas e inmersiones, con sujeción al plan aprobado de cada formación.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {approches.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardContent className="p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Icon className="size-6 text-cyan-700" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Le bilinguisme français-anglais */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="flex items-center gap-2 font-semibold uppercase tracking-[0.2em] text-blue-700">
                <Languages className="size-5" /> El bilingüismo
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                El bilingüismo francés-inglés, un pilar estratégico de la formación
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                En la ABS — African Business School, el dominio del francés y del inglés constituye un eje
                fundamental del itinerario académico y profesional de cada estudiante. En un entorno africano
                caracterizado por la diversidad lingüística y por la intensificación de los intercambios internacionales, ABS
                tiene la ambición de formar titulados capaces de comunicar, de negociar, de presentar sus ideas y
                de ejercer sus responsabilidades en las dos lenguas.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                El aprendizaje del inglés no se limita a las horas de clase que se le dedican : está
                concebido como una competencia progresivamente movilizada en las enseñanzas, los proyectos, los
                trabajos de investigación, las presentaciones orales, las actividades de inmersión y las evaluaciones.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Los contenidos lingüísticos se adaptan a las especialidades — inglés científico y técnico en
                ingeniería, inglés de los negocios en administración, inglés diplomático en relaciones internacionales,
                inglés de los medios en periodismo-comunicación e inglés aplicado a las tecnologías digitales en
                ingeniería informática.
              </p>
            </div>
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-7">
                <h3 className="text-lg font-semibold text-slate-900">
                  Una progresión estructurada, de la Licencia (grado) al Máster
                </h3>
                <Accordion type="single" collapsible className="mt-4">
                  {dispositifLinguistique.map((item, index) => (
                    <AccordionItem key={item.niveau} value={`niveau-${index}`}>
                      <AccordionTrigger className="text-sm font-semibold text-slate-800">{item.niveau}</AccordionTrigger>
                      <AccordionContent className="text-sm leading-7 text-slate-600">{item.contenu}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Esta progresión permite a cada estudiante desarrollar competencias lingüísticas medibles y
                  prepararse, según su nivel y su itinerario, para las certificaciones internacionales tales como el
                  TOEIC o el IELTS.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Soutenances + anglais par spécialité */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Defensas de proyecto en francés y en inglés</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Las defensas de proyecto constituyen un instrumento mayor de profesionalización y de evaluación de las
              competencias de comunicación. En ABS, están concebidas como ocasiones de estructurar una
              argumentación, de presentar resultados, de responder a las preguntas de un jurado y de defender sus
              propuestas ante una audiencia. Las modalidades de evaluación pueden prever :
            </p>
            <ul className="mt-5 space-y-3">
              {soutenances.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              Las modalidades precisas se definen en los planes pedagógicos y en los reglamentos de evaluación.
              La progresión se adapta al nivel de estudios a fin de que la exigencia lingüística constituya un
              objetivo de aprendizaje y no un obstáculo injustificado para la evaluación de los conocimientos
              disciplinares.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">El inglés adaptado a cada especialidad</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Para dar vida concretamente al bilingüismo, ABS fomenta la utilización progresiva del francés
              y del inglés en las actividades pedagógicas de todas las ramas : lecturas documentales,
              exposiciones bilingües, estudios de caso internacionales, investigaciones bibliográficas, debates y simulaciones
              profesionales.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-5 py-3">Ámbito</th>
                    <th className="px-5 py-3">Inglés</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {anglaisParSpecialite.map((row) => (
                    <tr key={row.domaine}>
                      <td className="px-5 py-3 font-medium text-slate-800">{row.domaine}</td>
                      <td className="px-5 py-3 text-slate-600">{row.angle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Immersions et développement personnel */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image
                src="/images/documents/v3-image2.jpg"
                alt="Estudiantes de ABS trabajando juntos en un proyecto"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Inmersiones, proyectos y desarrollo personal
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Las inmersiones y las salidas pedagógicas prolongan los aprendizajes confrontando a los estudiantes
                con las realidades de las empresas, de las instituciones, de los laboratorios, de las obras, de los medios, de las
                organizaciones internacionales y de los demás entornos profesionales. Cuando las condiciones lo
                permiten, estas actividades integran ejercicios en inglés : presentación de una organización,
                entrevista con un profesional, recopilación de informaciones, restitución oral o redacción
                de un informe bilingüe.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                El modelo pedagógico de ABS asocia el dominio de los saberes con el desarrollo de la personalidad, del
                sentido de la responsabilidad y del espíritu de iniciativa. Se organizan talleres de liderazgo, de expresión
                en público, de negociación, de emprendimiento, de ética profesional, de gestión de
                proyectos y de ciudadanía en francés y, progresivamente, en inglés.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/academics/programs">
                    Descubrir nuestras formaciones <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  <Link href="/admissions">Preparar mi candidatura</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Un conjunto coherente al servicio del éxito</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-blue-100">
            En ABS, el bilingüismo francés-inglés, los proyectos aplicados, las defensas de proyecto, las inmersiones, las salidas
            pedagógicas y el desarrollo personal forman un conjunto coherente al servicio del éxito
            académico y de la empleabilidad. Formar titulados competentes en su especialidad, capaces de
            trabajar en francés y en inglés, de defender sus ideas con seguridad y de llevar una visión
            panafricana del desarrollo.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">Candidatarse ahora</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link href="/contact">Hablar con el equipo de ABS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
