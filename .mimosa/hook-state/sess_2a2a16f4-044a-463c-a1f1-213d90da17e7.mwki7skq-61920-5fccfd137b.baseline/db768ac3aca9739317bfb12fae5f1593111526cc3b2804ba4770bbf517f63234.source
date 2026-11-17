import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  BookOpen,
  Building2,
  Coins,
  Globe2,
  Handshake,
  Landmark,
  Laptop,
  LineChart,
  Microscope,
  Newspaper,
  Pickaxe,
  Sprout,
  Users,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Investigación | Universidad ABS",
  description: "La investigación aplicada en la Universidad Privada African Business School de Bamako: emprendimiento, minas y desarrollo sostenible, finanzas islámicas, digital e IA, integración africana.",
  path: "/research",
  locale: "es",
})

const stats = [
  { value: "6", label: "Ámbitos de investigación aplicada", icon: Microscope },
  { value: "16", label: "Másters especializados vinculados a la investigación", icon: Landmark },
  { value: "80%", label: "De práctica en la pedagogía de ABS", icon: Laptop },
  { value: "1", label: "Cátedra dedicada a la integración africana", icon: Globe2 },
]

const axes = [
  {
    icon: Sprout,
    title: "Emprendimiento y PYMES africanas",
    description:
      "Cómo nacen, crecen y resisten las empresas malienses: modelos de negocio, financiación de las PYMES, ecosistema de startups de Bamako, formalización del sector informal y emprendimiento femenino.",
    image: "/images/campus/IMG-20250212-WA0016.jpg",
    tags: ["Ecosistema de startups", "Financiación de las PYMES", "Emprendimiento femenino"],
  },
  {
    icon: Pickaxe,
    title: "Industrias extractivas y desarrollo sostenible",
    description:
      "Malí es una tierra de oro y bauxita. Nuestros trabajos analizan la gobernanza minera, la redistribución local de los ingresos, el impacto medioambiental y la responsabilidad social de las empresas del sector.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    tags: ["Gobernanza minera", "RSE", "Impacto medioambiental"],
  },
  {
    icon: Coins,
    title: "Finanzas, finanzas islámicas e inclusión",
    description:
      "Microfinanzas, dinero móvil, finanzas islámicas e ingeniería financiera: cómo conectar a los actores económicos de África Occidental con los circuitos de financiación, incluidos los conformes a los principios del Islam.",
    image: "/images/gallery/IMG-20250216-WA0015.jpg",
    tags: ["Finanzas islámicas", "Dinero móvil", "Inclusión financiera"],
  },
  {
    icon: Laptop,
    title: "Digital, IA y transformación de las organizaciones",
    description:
      "Inteligencia artificial aplicada a la gestión, ciberseguridad de las PYMES, gobernanza de los datos y digitalización de los servicios públicos en el contexto de África Occidental.",
    image: "/images/campus/IMG-20250212-WA0022.jpg",
    tags: ["IA aplicada", "Gobernanza de los datos", "Transformación digital"],
  },
  {
    icon: Globe2,
    title: "Relaciones internacionales e integración africana",
    description:
      "CEDEAO, AfCFTA, diplomacia económica y geopolítica de los recursos: la Cátedra ABS ilumina el lugar de Malí y de África Occidental en las cadenas de valor mundiales.",
    image: "/images/gallery/IMG-20250216-WA0030.jpg",
    tags: ["AfCFTA", "CEDEAO", "Diplomacia económica"],
  },
  {
    icon: Newspaper,
    title: "Medios, comunicación e información pública",
    description:
      "Calidad de la información económica, periodismo de datos, comunicación de crisis y libertad de prensa: un eje al servicio de una opinión pública informada y de empresas transparentes.",
    image: "/images/gallery/IMG-20250216-WA0060.jpg",
    tags: ["Periodismo de datos", "Comunicación", "Información económica"],
  },
]

const centers = [
  { name: "Centro de Excelencia en Management y Emprendimiento", icon: Building2 },
  { name: "Observatorio de las Industrias Mineras y del Desarrollo Sostenible", icon: Pickaxe },
  { name: "Laboratorio de Finanzas e Ingeniería Financiera", icon: LineChart },
  { name: "Laboratorio Digital e Inteligencia Artificial", icon: Laptop },
  { name: "Centro de Medios y Comunicación", icon: Newspaper },
  { name: "Cátedra de Relaciones Internacionales e Integración Africana", icon: Globe2 },
]

const projects = [
  {
    title: "Cartografía del ecosistema de startups de Bamako",
    lead: "Centro de Excelencia en Management y Emprendimiento",
    description:
      "Recenso y análisis de las jóvenes empresas de la capital: sectores con proyección, obstáculos a la financiación, papel de las incubadoras y de las diásporas.",
    icon: Sprout,
  },
  {
    title: "Barómetro de la gobernanza minera en Malí",
    lead: "Observatorio de las Industrias Mineras",
    description:
      "Seguimiento anual de las prácticas de las compañías auríferas: contenido local, cánones, diálogo comunitario y trayectorias de desarrollo sostenible.",
    icon: Pickaxe,
  },
  {
    title: "Finanzas islámicas y financiación de infraestructuras",
    lead: "Laboratorio de Finanzas e Ingeniería Financiera",
    description:
      "Estudio de los mecanismos murabaha y sukuk aplicados a la financiación de proyectos en África Occidental, con escenarios de aplicación en Malí.",
    icon: Coins,
  },
  {
    title: "IA y dirección de las PYMES malienses",
    lead: "Laboratorio Digital e IA",
    description:
      "Prototipado de herramientas de ayuda a la decisión accesibles para los dirigentes de PYMES: previsión de tesorería, gestión de inventarios, análisis de clientes.",
    icon: Laptop,
  },
  {
    title: "Medios e información económica: la cobertura del sector minero en la prensa malí",
    lead: "Centro de Medios y Comunicación",
    description:
      "Análisis de la calidad de la información económica ciudadana: datos citados, periodismo de datos y desafíos del debate público sobre la gobernanza de los recursos.",
    icon: Newspaper,
  },
]

const publications = [
  {
    title: "Emprender en Bamako: trayectorias y modelos de negocio de las jóvenes empresas",
    authors: "Cuerpo docente ABS — Centro de Excelencia en Management y Emprendimiento",
    journal: "Cuadernos de la Investigación ABS",
    date: "2025",
  },
  {
    title: "Oro, bauxita y desarrollo: ¿qué contenido local para las industrias extractivas malienses?",
    authors: "Equipo ABS — Observatorio de las Industrias Mineras",
    journal: "Investigación y Territorios de África Occidental",
    date: "2025",
  },
  {
    title: "Dinero móvil e inclusión financiera de las mujeres emprendedoras en el Sahel",
    authors: "Laboratorio de Finanzas e Ingeniería Financiera ABS",
    journal: "Cuadernos de la Investigación ABS",
    date: "2024",
  },
]

const partnerships = [
  {
    partner: "Empresas y federaciones profesionales de Malí",
    description:
      "Cátedras de empresa, estudios encargados y pasantías de investigación: nuestros estudiantes y docentes trabajan sobre problemas reales del sector privado malí.",
    icon: Handshake,
  },
  {
    partner: "Instituciones públicas y colectividades",
    description:
      "Peritaje sobre la gobernanza de la contratación pública, las políticas de desarrollo local y la elaboración de políticas públicas basadas en los datos.",
    icon: Landmark,
  },
  {
    partner: "Redes académicas africanas e internacionales",
    description:
      "Copublicaciones, seminarios conjuntos y movilidad de los docentes-investigadores con universidades asociadas en África y en otras regiones.",
    icon: Users,
  },
]

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center text-white">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus de la Universidad ABS, Bamako"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-950/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Investigación aplicada — Bamako, Malí
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            La investigación de ABS: pensar África desde Bamako
          </h1>
          <p className="mb-8 text-lg md:text-xl text-slate-100">
            Emprendimiento, minas y desarrollo sostenible, finanzas islámicas, inteligencia artificial, medios e
            integración africana: seis ámbitos al servicio de los desafíos reales de Malí y de África Occidental.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/centers">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                Descubrir nuestros centros <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/research/collaborate">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                Colaborar con nosotros
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-cyan-50 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-cyan-400">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ambition */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">
              Una gran escuela de negocios, una auténtica misión de investigación
            </h2>
            <p className="mb-4 text-lg text-slate-600">
              En la Universidad Privada African Business School, la investigación no es un adorno: alimenta
              directamente nuestro 80 % de pedagogía práctica. Cada eje de investigación está vinculado a nuestras
              licenciaturas y a nuestros 16 másters, para que los estudiantes aprendan resolviendo los problemas
              concretos de las empresas y de los territorios malienses.
            </p>
            <p className="mb-6 text-lg text-slate-600">
              Desde la gobernanza de los recursos mineros (oro, bauxita) hasta las finanzas islámicas, pasando por la
              inteligencia artificial aplicada a la gestión, nuestros equipos producen conocimientos útiles para los
              decisores, los emprendedores y los ciudadanos.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/research/publications">
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                  <BookOpen className="mr-2 h-4 w-4" /> Ver las publicaciones
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="text-blue-700 hover:bg-cyan-50">
                  Nuestra visión <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl shadow-xl lg:h-96">
            <Image
              src="/images/campus/IMG-20250212-WA0025.jpg"
              alt="Estudiantes de la Universidad ABS en trabajo de grupo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tabs : Axes / Centres / Publications / Partenariats */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl font-bold text-blue-900 md:text-4xl">Explorar la investigación de ABS</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600">
            Ejes de excelencia, centros dedicados, publicaciones del cuerpo docente y asociaciones: todo el
            ecosistema de investigación de ABS.
          </p>
          <Tabs defaultValue="axes" className="w-full">
            <TabsList className="mb-10 grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="axes" className="text-base">
                Ejes de investigación
              </TabsTrigger>
              <TabsTrigger value="centres" className="text-base">
                Centros
              </TabsTrigger>
              <TabsTrigger value="publications" className="text-base">
                Publicaciones
              </TabsTrigger>
              <TabsTrigger value="partenariats" className="text-base">
                Asociaciones
              </TabsTrigger>
            </TabsList>

            <TabsContent value="axes">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {axes.map((axe, i) => (
                  <Card key={i} className="group overflow-hidden transition-shadow hover:shadow-xl">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={axe.image}
                        alt={axe.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent" />
                      <axe.icon className="absolute bottom-3 left-4 h-8 w-8 text-cyan-400" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">{axe.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-slate-600">{axe.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {axe.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-blue-900"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="centres">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {centers.map((center, i) => (
                  <Link href="/research/centers" key={i}>
                    <Card className="group h-full transition-all hover:border-blue-700 hover:shadow-lg">
                      <CardContent className="flex h-full flex-col items-start gap-4 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900 text-cyan-400 transition-transform group-hover:scale-110">
                          <center.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700">
                          {center.name}
                        </h3>
                        <span className="mt-auto inline-flex items-center text-sm font-medium text-blue-700">
                          Saber más <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="publications">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {publications.map((pub, i) => (
                  <Card key={i} className="transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">{pub.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2 text-sm text-slate-600">{pub.authors}</p>
                      <p className="text-sm font-medium text-blue-700">
                        {pub.journal} · {pub.date}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/research/publications">
                  <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                    Todas las publicaciones <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="partenariats">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {partnerships.map((p, i) => (
                  <Card key={i} className="h-full transition-shadow hover:shadow-lg">
                    <CardContent className="flex h-full flex-col gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-blue-900">
                        <p.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">{p.partner}</h3>
                      <p className="text-sm text-slate-600">{p.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/research/partnerships">
                  <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                    Nuestras asociaciones de investigación <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projets en cours */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl font-bold text-blue-900 md:text-4xl">Proyectos en curso</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600">
            Trabajos de investigación aplicada, realizados con los estudiantes de los másters de ABS, sobre los
            desafíos principales de Malí y de la subregión.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Card key={i} className="flex gap-4 p-6 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-cyan-400">
                  <project.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-blue-900">{project.title}</h3>
                  <p className="mb-2 text-sm font-medium text-blue-700">{project.lead}</p>
                  <p className="text-sm text-slate-600">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Únase a nuestra comunidad de investigación</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Estudiante de máster, docente-investigador, empresa o institución: existen mil maneras de contribuir a la
            investigación de ABS. Hablemos de ello.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/collaborate">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                Colaborar con ABS
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                Contactar con la Dirección General
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            {ORGANIZATION.contact.address.formatted} · {ORGANIZATION.contact.phone} · {ORGANIZATION.contact.email}
          </p>
        </div>
      </section>
    </div>
  )
}
