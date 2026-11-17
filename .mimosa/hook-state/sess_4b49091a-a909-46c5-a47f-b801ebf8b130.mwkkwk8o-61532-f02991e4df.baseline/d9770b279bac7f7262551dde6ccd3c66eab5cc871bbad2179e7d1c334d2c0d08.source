import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Recycle, Rocket } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Innovación, proyectos y emprendimiento | ABS",
  description: "En ABS, la innovación y el emprendimiento se aprenden actuando : proyectos estudiantiles, enfoque emprendedor y compromiso sostenible al servicio del continente.",
  path: "/innovation",
  locale: "es",
})

const volets = [
  {
    icon: Lightbulb,
    title: "De la idea al proyecto",
    text: "El emprendimiento y la innovación permiten a los estudiantes aprender a observar una necesidad, formular una solución, estudiar su viabilidad y presentar un proyecto. Los trabajos pueden versar sobre las empresas, los servicios, las tecnologías o los desafíos sociales y medioambientales del continente.",
  },
  {
    icon: Rocket,
    title: "ABS Startup Lab",
    text: "ABS presenta su dispositivo de acompañamiento emprendedor bajo el nombre « ABS Startup Lab ». La página precisa lo que se ofrece realmente : talleres, mentoría, acompañamiento de proyectos, acceso a recursos o puesta en contacto. No se anuncia ninguna financiación automática ni ningún resultado no documentado.",
  },
  {
    icon: Recycle,
    title: "Compromiso sostenible",
    text: "ABS desea sensibilizar sobre los retos del desarrollo sostenible, de la economía responsable y de la innovación útil. Los proyectos presentados precisan su estado de avance, sus objetivos, sus asociados confirmados y los resultados realmente medidos.",
  },
]

export default function InnovationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image2.jpg"
          alt="Estudiantes de ABS trabajando juntos en un proyecto"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Innovación y emprendimiento</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Transformar las ideas en proyectos útiles
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Observar una necesidad, formular una solución, estudiar su viabilidad, presentar un proyecto : un enfoque
            aprendido actuando, al servicio de las empresas, de las tecnologías y de los desafíos del continente.
          </p>
        </div>
      </section>

      {/* Les trois volets */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Tres ámbitos, una misma exigencia de realismo</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Los proyectos presentados corresponden a actividades realmente supervisadas. Lo que se propone se describe
            tal y como funciona ; lo que está en preparación se presenta como tal.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {volets.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardContent className="p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Icon className="size-6 text-cyan-700" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Encadrement et critères */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Marco de trabajo</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Proyectos apoyados en las enseñanzas y en el terreno
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Los proyectos de fin de módulo, los estudios de caso, los proyectos tutelados, las inmersiones y las prácticas
                constituyen los principales terrenos de ejercicio del enfoque emprendedor en ABS. Sus
                objetivos, sus criterios de evaluación y sus plazos se explican al inicio de cada
                módulo, conforme a los planes oficiales de cada formación.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Los estudiantes que deseen evolucionar un proyecto hacia la creación de actividad pueden solicitar
                el acompañamiento previsto por la institución : las modalidades concretas de acceso, los
                responsables y los servicios efectivamente disponibles son comunicados por
                la administración.
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
                  <Link href="/contact">Proponer un proyecto o una colaboración</Link>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image
                src="/images/documents/v3-image1.png"
                alt="Estudiantes de ABS en el campus universitario"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">¿Una idea, un proyecto, una ambición?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Dialogue con el equipo de ABS para descubrir el acompañamiento realmente propuesto y las vías de
            colaboración con las empresas y las instituciones.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/contact">Contactar con el equipo de ABS</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/international/partnerships">Empresas y asociados</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
