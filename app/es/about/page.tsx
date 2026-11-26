import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { ABS_LOGO_DIMENSIONS } from "@/components/common/logo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Award,
  Compass,
  Globe2,
  Landmark,
  Network,
  Newspaper,
  Briefcase,
  ShieldCheck,
  Users,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Quiénes somos | ABS — African Business School",
  description: "¿Quiénes somos? ABS — African Business School, institución privada de educación superior panafricana y pluridisciplinar, establecida en Hamdallaye ACI 2000, Bamako, desde 2016.",
  path: "/about",
  locale: "es",
})

// Los cinco grandes ámbitos disciplinares (fuente: V3 §4.1 y presentación institucional).
const domains = [
  {
    icon: Landmark,
    title: "Ciencias e ingeniería",
    description: "Geología, geotecnia, ingeniería civil.",
    href: "/programs/geological-civil-mining-engineering",
  },
  {
    icon: Network,
    title: "Digital y tecnologías",
    description:
      "Desarrollo informático, sistemas, datos, redes, ciberseguridad e iniciación progresiva a la inteligencia artificial.",
    href: "/programs/engineering/computer-science",
  },
  {
    icon: Globe2,
    title: "Ciencias sociales e internacionales",
    description:
      "Relaciones internacionales, diplomacia, cooperación, instituciones, retos geopolíticos y comunicación intercultural.",
    href: "/programs/international-relations",
  },
  {
    icon: Newspaper,
    title: "Información, medios y comunicación",
    description:
      "Periodismo, redacción, producción de contenidos, comunicación institucional y medios digitales.",
    href: "/programs/journalism-communication",
  },
  {
    icon: Briefcase,
    title: "Ciencias de la gestión",
    description:
      "Administración de empresas, finanzas, marketing, recursos humanos, auditoría, control de gestión, logística y emprendimiento, según las opciones formalmente retenidas.",
    href: "/programs/business-administration",
  },
]

const aboutLinks = [
  {
    icon: Compass,
    title: "Nuestra misión y nuestra visión",
    description:
      "Formar competencias capaces de comprender las transformaciones de su entorno y de aportar respuestas útiles.",
    href: "/about/mission",
  },
  {
    icon: Award,
    title: "Nuestros valores",
    description:
      "Exigencia, responsabilidad, apertura, innovación, compromiso africano y espíritu de equipo.",
    href: "/about/values",
  },
  {
    icon: Users,
    title: "Dirección y gobernanza",
    description:
      "La organización institucional de ABS: Dirección General, Rectorado, Dirección de Estudios y servicios.",
    href: "/about/governance",
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero : Qui sommes-nous */}
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
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">¿Quiénes somos?</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Una institución pluridisciplinar: ciencias, ingeniería, digital, ciencias sociales e
            internacionales, comunicación y gestión
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            ABS — African Business School es una institución privada de educación superior con sede en
            Bamako, en Mali. Desde 2016, ABS mantiene una ambición panafricana: contribuir a la formación de
            competencias capaces de comprender las transformaciones de su entorno y de aportar
            respuestas útiles.
          </p>
        </div>
      </section>

      {/* Présentation institutionnelle */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-white p-8 shadow-xl">
            <Image
              src="/images/abs-logo.png"
              alt="Logotipo oficial de la ABS — African Business School"
              {...ABS_LOGO_DIMENSIONS}
              className="h-auto w-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">La identidad de ABS</h2>
            <p className="mt-5 leading-7 text-slate-600">
              Fundada en 2016 e instalada en Hamdallaye ACI 2000, en Bamako, la institución se inscribe en una
              ambición: contribuir a la formación de competencias capaces de responder a las necesidades de las organizaciones,
              las empresas y las sociedades africanas, comprendiendo al mismo tiempo las dinámicas internacionales.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              ABS desarrolla una identidad panafricana y un enfoque orientado a la profesionalización. Desea hacer de la formación un espacio donde los conocimientos académicos se encuentren con las realidades del terreno, donde el estudiante aprenda a analizar, a proponer, a colaborar y a actuar con responsabilidad.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Su identidad es pluridisciplinar. Junto a las ciencias de la gestión, ABS desarrolla ámbitos vinculados a las
              ciencias y a la ingeniería, al digital, a las relaciones internacionales, así como al
              periodismo y a la comunicación.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              La palabra « Business » en la denominación African Business School no significa que ABS sea
              exclusivamente una escuela de negocios. Expresa una ambición de formación orientada a la acción, la
              resolución de problemas, la organización, la innovación y la creación de valor.
            </p>
          </div>
        </div>
      </section>

      {/* Les cinq grands domaines de formation */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Nuestros cinco grandes ámbitos de formación</h2>
            <p className="mt-3 leading-7 text-slate-600">
              La diversidad de estos ámbitos permite a ABS abordar los desafíos contemporáneos desde varios ángulos:
              comprender los territorios y los recursos, concebir soluciones técnicas, dominar las herramientas
              digitales, analizar las relaciones entre sociedades e instituciones, producir información fiable,
              comunicar con impacto y dirigir organizaciones de manera responsable.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {domains.map(({ icon: Icon, title, description, href }) => (
              <Link key={title} href={href} className="group">
                <Card className="h-full border-slate-200 transition-shadow group-hover:shadow-lg">
                  <CardHeader>
                    <span className="mb-2 inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                      <Icon className="size-6 text-cyan-700" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-slate-600">{description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                      Explorar esta rama
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approche pédagogique */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Nuestro enfoque</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Acercar los conocimientos académicos a las aplicaciones concretas
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              ABS busca acercar los conocimientos académicos a las aplicaciones concretas, fomentar el rigor,
              la apertura internacional, la responsabilidad y el compromiso al servicio del desarrollo
              africano. Su enfoque pedagógico privilegia la articulación entre los fundamentos teóricos y
              su aplicación concreta, según una orientación de referencia del 40 % de teoría y 60 % de práctica.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Estudios de caso, trabajos prácticos, proyectos y simulaciones profesionales",
                "Competencias transversales: inglés, cultura digital, liderazgo, ética profesional",
                "Una formación abierta a las empresas, las instituciones y los retos internacionales",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium text-slate-700">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-cyan-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm leading-6 text-slate-600">
              Las formaciones y especializaciones mostradas en el sitio son las confirmadas para el curso correspondiente.
              Las informaciones relativas a autorizaciones, habilitaciones, reconocimientos o acreditaciones se
              comunican únicamente sobre la base de documentos oficiales vigentes; para cualquier precisión, rogamos
              contactar con la administración de ABS.
            </p>
          </div>

          {/* Liens vers les pages institutionnelles */}
          <div className="space-y-4">
            {aboutLinks.map(({ icon: Icon, title, description, href }) => (
              <Link key={href} href={href} className="group block">
                <Card className="border-slate-200 transition-shadow group-hover:shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <Icon className="size-5 text-blue-700" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
              <Link href="/about/history">
                Descubrir nuestro recorrido <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Únase a la comunidad ABS</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Descubra nuestras ramas, conozca a nuestros equipos e inicie su proceso de inscripción.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/academics/programs">Explorar las formaciones</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Contactar con la administración</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
