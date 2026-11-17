import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import {
  Globe2,
  Handshake,
  Leaf,
  Lightbulb,
  Quote,
  Recycle,
  ShieldCheck,
  Sprout,
  Target,
  Users,
  HeartHandshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = buildMetadata({
  title: "Nuestros Valores | ABS — African Business School",
  description: "Los valores de ABS: exigencia, responsabilidad, apertura, innovación, compromiso africano y espíritu de equipo, al servicio de una formación rigurosa y comprometida con África.",
  path: "/about/values",
  locale: "es",
})

// Los seis valores oficiales de ABS (fuente: V3 §4.4 — definiciones literales).
const values = [
  {
    id: "exigence",
    name: "Exigencia",
    icon: Target,
    definition: "Comprometerse con el trabajo, el rigor y la progresión.",
  },
  {
    id: "responsabilite",
    name: "Responsabilidad",
    icon: ShieldCheck,
    definition: "Actuar con integridad, respeto y conciencia de las consecuencias.",
  },
  {
    id: "ouverture",
    name: "Apertura",
    icon: Globe2,
    definition: "Aprender a dialogar entre las culturas, las disciplinas y las generaciones.",
  },
  {
    id: "innovation",
    name: "Innovación",
    icon: Lightbulb,
    definition: "Explorar ideas y métodos útiles, sin perder de vista las necesidades reales.",
  },
  {
    id: "engagement-africain",
    name: "Compromiso africano",
    icon: Handshake,
    definition: "Valorar los talentos, los recursos y las iniciativas del continente.",
  },
  {
    id: "esprit-equipe",
    name: "Espíritu de equipo",
    icon: Users,
    definition: "Construir con los demás, escuchar y contribuir a un objetivo común.",
  },
]

// Dimensiones humanas de la formación (fuente: folleto institucional CM1, §7).
const humanQualities = [
  "La disciplina",
  "El respeto",
  "El rigor",
  "La solidaridad",
  "La curiosidad intelectual",
  "El sentido de la responsabilidad",
]

// Responsabilidad social y desarrollo sostenible (fuente: folleto institucional CM1, §5).
const rseCommitments = [
  {
    icon: Leaf,
    title: "Una excelencia con sentido",
    description:
      "ABS busca integrar la Responsabilidad Social Empresarial (RSE) y el desarrollo sostenible en su visión de la formación y de la profesionalización, con el fin de sensibilizar a los estudiantes sobre las consecuencias económicas, sociales, medioambientales y éticas de las decisiones.",
  },
  {
    icon: Recycle,
    title: "Universidad verde",
    description:
      "Como institución comprometida con el concepto de universidad verde, ABS busca fomentar las iniciativas en favor de la reducción y la valorización de los residuos, de la economía circular, de la sensibilización medioambiental y de los proyectos estudiantiles con impacto social.",
  },
  {
    icon: Sprout,
    title: "Un rendimiento responsable",
    description:
      "Una concepción del rendimiento que asocia resultados económicos, respeto por las personas, gestión responsable de los recursos, transparencia y contribución al bien común.",
  },
  {
    icon: HeartHandshake,
    title: "Todos los ámbitos concernidos",
    description:
      "Gestión sostenible de los recursos en ingeniería, ética de la inteligencia artificial y sobriedad digital en informática, gobernanza en relaciones internacionales, información responsable en periodismo, prácticas directivas responsables en administración de empresas.",
  },
]

export default function ValuesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="Estudiantes de ABS en el campus universitario"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-blue-900/40" />
        <div className="container relative py-20 md:py-28">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Quiénes somos · Nuestros valores
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Seis valores que guían nuestra acción
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            Más allá de los diplomas y de las competencias técnicas, ABS otorga una gran importancia a la dimensión humana
            de la formación: formar a mujeres y hombres competentes, íntegros, responsables y capaces de
            trabajar al servicio del interés colectivo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about/mission">Descubrir nuestra misión</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Les 6 valeurs : cartes */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Nuestros seis valores</h2>
          <p className="mt-4 text-lg text-slate-600">
            Estos valores no son un eslogan: orientan la pedagogía, la vida del campus y la manera en que ABS
            concibe el éxito de sus estudiantes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.id} className="group border border-slate-200 transition-shadow hover:shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-blue-900">{value.name}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{value.definition}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tabs : chaque valeur en détail */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10">
          <h3 className="text-center text-2xl font-bold text-blue-900">Cada valor en detalle</h3>
          <p className="mt-2 text-center text-slate-600">
            Seleccione un valor para leer lo que significa concretamente en ABS.
          </p>
          <Tabs defaultValue="exigence" className="mt-8">
            <TabsList className="mx-auto flex-wrap">
              {values.map((value) => (
                <TabsTrigger key={value.id} value={value.id}>
                  {value.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {values.map((value) => {
              const Icon = value.icon
              return (
                <TabsContent key={value.id} value={value.id}>
                  <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 md:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h4 className="text-xl font-bold text-blue-900">{value.name}</h4>
                    </div>
                    <p className="mt-4 text-lg font-medium text-slate-800">{value.definition}</p>
                    <p className="mt-4 border-l-4 border-cyan-400 pl-4 text-sm italic text-slate-500">
                      Este valor se inscribe en la misión de ABS: desarrollar los conocimientos
                      disciplinares, las competencias prácticas, la autonomía intelectual y las cualidades
                      humanas de los estudiantes.
                    </p>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Former des compétences, cultiver des valeurs, révéler des leaders (CM1 §7) */}
      <section className="bg-blue-900 py-16 text-white md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Formar competencias, cultivar valores, revelar líderes
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-200">
              La construcción de un África más fuerte exige mujeres y hombres competentes, pero también
              íntegros, responsables, creativos y capaces de trabajar al servicio del interés colectivo.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/15 bg-blue-950/60 p-8 md:p-10">
            <ul className="flex flex-wrap gap-2">
              {humanQualities.map((quality) => (
                <li
                  key={quality}
                  className="rounded-full border border-cyan-400/30 bg-blue-900/60 px-4 py-1.5 text-sm font-medium text-cyan-100"
                >
                  {quality}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-cyan-400/30 bg-blue-900/60 p-5">
              <h3 className="font-bold text-cyan-400">Nuestra definición del liderazgo</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                El liderazgo se concibe como la capacidad de tomar iniciativas, de aunar las energías, de
                dirigir proyectos y de contribuir positivamente a su entorno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSE et développement durable (CM1 §5) */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            Responsabilidad social y desarrollo sostenible
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Formarse para triunfar, emprender para transformar y actuar por las generaciones futuras: el desarrollo
            de África no puede disociarse de la protección del medio ambiente, de la responsabilidad
            social y de la buena gobernanza.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {rseCommitments.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="border border-slate-200 transition-shadow hover:shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-blue-700">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-blue-900">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center leading-relaxed text-slate-600">
          Este enfoque puede inscribirse en la perspectiva de los Objetivos de Desarrollo Sostenible de las Naciones
          Unidas. En ABS, la excelencia no se resume en el éxito individual: cobra también todo su
          sentido en el valor que se crea para la sociedad.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-center text-white">
        <div className="container">
          <Quote className="mx-auto h-10 w-10 text-cyan-400" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Viva estos valores, no se limite a leerlos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Únase a una universidad donde la exigencia académica, la práctica profesional y el
            compromiso africano avanzan juntos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300">
              <Link href="/admissions">Admisiones</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Contactarnos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
