import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import {
  Handshake,
  Users,
  Building,
  BriefcaseBusiness,
  Mic,
  ArrowLeftRight,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = buildMetadata({
  title: "Empresas y asociados | ABS",
  description: "Empresas, instituciones y organizaciones : construya con ABS vínculos útiles — intervenciones de profesionales, visitas, proyectos aplicados, prácticas y conferencias en Bamako.",
  path: "/international/partnerships",
  locale: "es",
})

// Formas de colaboración — documento V3, §11.1
const collaborations = [
  {
    icon: Users,
    title: "Intervenciones de profesionales",
    description:
      "Profesionales vienen a compartir su experiencia y a esclarecer a los estudiantes sobre las realidades de los oficios.",
  },
  {
    icon: Building,
    title: "Visitas",
    description:
      "Descubrimiento de empresas e instituciones para vincular las enseñanzas con el terreno.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Proyectos aplicados",
    description:
      "Trabajos realizados por los estudiantes sobre problemáticas reales propuestas por las organizaciones.",
  },
  {
    icon: Handshake,
    title: "Prácticas",
    description:
      "Inmersiones en empresa que permiten poner en práctica las competencias adquiridas en la formación.",
  },
  {
    icon: Mic,
    title: "Conferencias",
    description:
      "Encuentros y conferencias animados con actores del mundo económico e institucional.",
  },
  {
    icon: ArrowLeftRight,
    title: "Intercambio de competencias",
    description:
      "Cooperaciones basadas en un intercambio de experiencia, según los acuerdos celebrados.",
  },
]

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <Handshake className="mr-1 h-3.5 w-3.5" />
            Empresas y asociados
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Construir vínculos útiles
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            ABS desea desarrollar relaciones con las empresas, las instituciones, las
            organizaciones profesionales y los actores del desarrollo a fin de acercar las
            formaciones a las realidades del terreno.
          </p>
        </div>
      </section>

      {/* Formes de collaboration — document V3, §11.1 */}
      <section className="container mx-auto py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-blue-900">Colaboraciones al servicio de la formación</h2>
            <p className="mb-8 text-slate-600">
              Estas relaciones pueden adoptar diferentes formas, según los acuerdos celebrados entre ABS
              y sus asociados.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {collaborations.map((item) => (
                <Card key={item.title} className="border-slate-200">
                  <CardContent className="pt-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700/10">
                      <item.icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="mb-1 font-bold text-blue-900">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/documents/v3-image3.jpg"
                alt="La dirección de ABS en una sesión de trabajo con autoridades oficiales"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-slate-500">
              La vida del campus : estudiantes en contacto permanente con las realidades profesionales.
            </p>
          </div>
        </div>
      </section>

      {/* Proposer une collaboration — document V3, §11.2 */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto">
          <Card className="mx-auto max-w-3xl border-slate-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Proponer una colaboración</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-600">
                ¿Representa usted a una empresa, una institución o una organización y desea
                dialogar con ABS ? Presente su entidad, su ámbito de actividad y la
                forma de colaboración prevista. El equipo estudiará su propuesta y
                se pondrá en contacto con usted según las posibilidades y las prioridades de la institución.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-900">
                  Proponer una colaboración
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Règle de publication — document V3, §11.3 */}
      <section className="container mx-auto py-12">
        <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
          <div>
            <h2 className="mb-1 font-bold text-amber-900">Nota sobre la publicación de los asociados</h2>
            <p className="text-sm text-amber-800">
              Solo se muestran en esta página los asociados que han dado su consentimiento y cuya relación con ABS puede ser
              documentada. Ningún logotipo, nombre o mención de « asociado
              oficial » se utiliza sin autorización y sin un acuerdo verificable.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
