import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Palabras de la Directora General | ABS",
  description: "Las palabras de la Directora General de la ABS — African Business School: una ambición panafricana al servicio del saber y del éxito de los estudiantes.",
  path: "/about/mot-de-la-directrice",
  locale: "es",
})

const paragraphes = [
  "Estimados visitantes, estimados padres, estimados estudiantes y asociados:",
  "Es con convicción y determinación que les doy la bienvenida al sitio de la ABS — African Business School.",
  "Nuestra ambición es clara: contribuir a formar una generación africana competente, responsable y audaz, capaz de comprender las mutaciones del mundo, de innovar y de participar activamente en el desarrollo de nuestras sociedades.",
  "Estoy profundamente convencida de que un diploma no es una finalidad, sino el punto de partida de una verdadera construcción personal y profesional. El éxito se apoya en la solidez de los conocimientos, el dominio de las competencias, la riqueza de la experiencia, la calidad del juicio y la fuerza de los valores humanos. Exige también comprender su entorno, anticipar sus evoluciones y transformar los desafíos en posibilidades de acción.",
  "Es esta concepción de la educación la que fundamenta nuestro compromiso en ABS. Queremos combinar la exigencia académica con la práctica profesional, el desarrollo de las competencias con el desarrollo personal, y el conocimiento con la capacidad de actuar. Nuestra ambición es preparar a mujeres y hombres capaces de pensar con rigor, de emprender con audacia, de decidir con discernimiento y de ejercer sus responsabilidades con integridad.",
  "En un mundo profundamente transformado por lo digital y la inteligencia artificial, el dominio de las tecnologías constituye hoy en día un reto estratégico. Tenemos la voluntad de preparar a nuestros estudiantes para estas evoluciones, preservando al mismo tiempo una convicción esencial: la tecnología debe permanecer al servicio de la inteligencia humana, de la dignidad y del progreso colectivo.",
  "Fiel a su vocación panafricana, ABS inscribe su acción en una perspectiva más amplia que el simple éxito individual. Queremos contribuir al surgimiento de competencias capaces de responder a las necesidades de Malí, de acompañar las transformaciones de África y de llevar sus ambiciones en un entorno internacional en constante evolución.",
  "Esta ambición nos impone una exigencia permanente: acercar la formación a las realidades profesionales, fomentar la iniciativa, cultivar la apertura de mente y hacer de cada itinerario una ocasión de desarrollar su potencial. Porque formar no es solo transmitir un saber: es dar a cada uno los medios de convertirse en actor de su futuro y en contribuyente al progreso de su sociedad.",
  "A los futuros estudiantes, a los profesionales deseosos de reforzar sus competencias y a los padres que nos otorgan su confianza, les hago una invitación sincera: descubran nuestras ramas, conozcan a nuestros equipos y únanse a la comunidad ABS.",
  "No elijan solamente un diploma. Elijan una formación que amplíe su visión, refuerce su valor profesional, forje su discernimiento y les prepare para aprovechar las oportunidades del mañana. Elijan un itinerario que les dé los medios de realizar sus ambiciones contribuyendo al mismo tiempo a las de África.",
  "Les invito a descubrir nuestro proyecto educativo y a iniciar su proceso de inscripción. Estaremos encantados de acompañarles en la construcción de su futuro.",
  "En ABS, no consideramos la educación como una simple etapa en un itinerario: la consideramos como una fuerza capaz de revelar los talentos, de transformar las trayectorias y de contribuir a construir el África del mañana.",
]

export default function MotDeLaDirectricePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Institución</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Palabras de la Directora General
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Formar los talentos. Elevar las ambiciones. Construir el futuro de África.
          </p>
        </div>
      </section>

      {/* Lettre */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[240px_1fr] lg:items-start">
          <div className="relative mx-auto overflow-hidden rounded-3xl bg-white shadow-xl lg:sticky lg:top-24">
            <Image
              src="/images/documents/dg-seance-travail.jpg"
              alt="Sokhna Maryama Thiam, Directora General de la ABS — African Business School"
              width={480}
              height={600}
              className="h-[320px] w-full object-cover object-top"
              priority
            />
            <div className="p-5">
              <p className="font-semibold text-slate-950">Sokhna Maryama Thiam</p>
              <p className="text-sm text-slate-500">Directora General</p>
              <p className="mt-1 text-xs text-slate-400">ABS — African Business School</p>
            </div>
          </div>
          <div>
            {paragraphes.map((texte, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-xl font-medium leading-8 text-slate-900"
                    : "mt-5 leading-8 text-slate-600 first:mt-0"
                }
              >
                {texte}
              </p>
            ))}
            <p className="mt-8 leading-8 text-slate-600">Con mi más distinguida consideración,</p>
            <p className="mt-3 font-semibold text-slate-950">Sokhna Maryama Thiam</p>
            <p className="text-sm text-slate-500">Directora General — ABS — African Business School</p>
            <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-6">
              <Quote className="size-8 text-cyan-700" aria-hidden="true" />
              <blockquote className="mt-3 text-lg font-medium leading-8 text-slate-800">
                « Formar con exigencia, revelar los talentos y preparar a los constructores del África de mañana. »
              </blockquote>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-blue-700 hover:bg-blue-800">
                <Link href="/admissions">Iniciar mi proceso de inscripción</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
              >
                <Link href="/academics/programs">Descubrir nuestras ramas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Bienvenidos a la ABS — African Business School</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Únase a una comunidad que revela los talentos y transforma las trayectorias.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">Candidatarse ahora</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Hablar con el equipo de ABS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
