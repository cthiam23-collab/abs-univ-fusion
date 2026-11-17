import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import {
  Users,
  CalendarDays,
  Megaphone,
  Images,
  Quote,
  Leaf,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = buildMetadata({
  title: "Vida estudiantil | ABS",
  description: "La vida estudiantil en la ABS — African Business School : una comunidad que aprende junta, eventos y encuentros, embajadores, galería y testimonios en Bamako.",
  path: "/campus-life",
  locale: "es",
})

// Vie étudiante — document V3, §8
const sections = [
  {
    icon: CalendarDays,
    title: "Eventos y encuentros",
    description:
      "Conferencias, jornadas de orientación, encuentros con profesionales, visitas y actividades de sensibilización pueden enriquecer el itinerario de los estudiantes. Cada anuncio precisa la denominación, la fecha, el lugar, las condiciones de participación y el contacto responsable.",
  },
  {
    icon: Megaphone,
    title: "Embajadores de ABS",
    description:
      "Los embajadores de ABS contribuyen a dar a conocer la vida del establecimiento, a compartir su experiencia y a orientar a las personas que desean saber más. Su función se basa en una comunicación auténtica, respetuosa y verificable.",
  },
  {
    icon: Images,
    title: "Galería de fotos y vídeos",
    description:
      "La galería pone en valor las clases, los proyectos, los eventos y los momentos de vida del campus. Las fotos y los vídeos publicados están datados, titulados y acompañados de las autorizaciones necesarias, sin información personal ni datos sensibles.",
  },
  {
    icon: Quote,
    title: "Testimonios",
    description:
      "Los testimonios de estudiantes, de antiguos alumnos, de padres o de profesionales son auténticos, revisados por sus autores y publicados con su consentimiento. No se presentan como una prueba estadística de éxito o de inserción.",
  },
]

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero — document V3, §8.1 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <Users className="mr-1 h-3.5 w-3.5" />
            Vida estudiantil · Bamako
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Una comunidad que aprende junta
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            La vida estudiantil se construye mediante la participación, la curiosidad y el respeto mutuo.
            ABS fomenta las iniciativas que refuerzan la expresión, el sentido de la
            responsabilidad, la ayuda mutua y la apertura hacia la sociedad.
          </p>
        </div>
      </section>

      {/* Image + citation — document V3, §3.6 */}
      <section className="container mx-auto -mt-10 px-4 pb-4">
        <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg lg:grid-cols-2 lg:p-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/documents/v3-image1.png"
              alt="Estudiantes de ABS en el campus universitario"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              La vida en ABS, fuera de las aulas
            </h2>
            <blockquote className="border-l-4 border-cyan-400 pl-4 text-slate-600">
              « La vida en ABS también se construye fuera de las aulas : conferencias, encuentros,
              visitas, proyectos, eventos e iniciativas estudiantiles contribuyen a la apertura
              de mente y a la profesionalización. »
            </blockquote>
            <p className="mt-4 text-sm text-slate-500">
              Las actividades presentadas en el sitio corresponden a eventos realizados u
              oficialmente programados.
            </p>
          </div>
        </div>
      </section>

      {/* Volets de la vie étudiante — document V3, §8.2 à §8.5 */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900">Lo que hace la vida del campus</h2>
          <p className="mt-3 text-slate-600">
            Eventos, embajadores, galería y testimonios : las diferentes facetas de
            la experiencia estudiantil en ABS.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <Card key={section.title} className="border-slate-200">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700/10">
                  <section.icon className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-blue-900">{section.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Engagement durable — document CM1, §5 */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/10">
              <Leaf className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Compromiso sostenible</h2>
            <p className="text-blue-100">
              ABS busca integrar la responsabilidad social y el desarrollo sostenible en su
              visión de la formación : sensibilizar a los estudiantes sobre las consecuencias económicas,
              sociales, medioambientales y éticas de las decisiones, y fomentar las iniciativas
              en favor de la reducción y de la valorización de los residuos, de la economía
              circular, de la sensibilización medioambiental y de los proyectos estudiantiles con impacto
              social.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-md">
          <h2 className="mb-3 text-2xl font-bold text-blue-900">
            ¿Desea incorporarse a la comunidad ABS?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-slate-600">
            Descubra las formaciones, explore las admisiones o contacte con el equipo para cualquier
            pregunta sobre la vida en ABS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions">
              <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-900">
                Candidatarse
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-700 text-blue-700 hover:bg-blue-50"
              >
                Contactarnos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
