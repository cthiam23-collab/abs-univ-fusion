import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Cpu,
  GraduationCap,
  Globe2,
  Languages,
  Mountain,
  Newspaper,
  Sprout,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Oferta de formación | ABS",
  description: "La oferta de formación de ABS: cinco Licencias (grado) (3 años, 6 semestres, 180 créditos) repartidas en cinco ámbitos y un catálogo de Másteres cuyos itinerarios deben ser confirmados por la Dirección antes de su publicación como admisiones abiertas.",
  path: "/academics/programs",
  locale: "es",
})

const filieres = [
  {
    title: "Administración de Empresas",
    intro:
      "Comprender el funcionamiento de las organizaciones, analizar sus resultados y contribuir a la gestión, a las finanzas, al marketing, a los recursos humanos y al desarrollo de las actividades.",
    duration: "Licencia (grado) · 3 años · 6 semestres · 180 créditos",
    image: "/images/campus/IMG-20250212-WA0003.jpg",
    link: "/programs/business-administration",
    icon: Briefcase,
    modules: [
      "Contabilidad general y analítica",
      "Finanzas de empresa y análisis financiero",
      "Marketing fundamental y digital",
      "Emprendimiento y plan de negocio",
    ],
  },
  {
    title: "Relaciones y Asuntos Internacionales",
    intro:
      "Analizar los actores, las instituciones y las relaciones de fuerza internacionales, con una comprensión de las realidades africanas y una apertura a las dinámicas mundiales.",
    duration: "Licencia (grado) · 3 años · 6 semestres · 180 créditos",
    image: "/images/documents/v3-image2.jpg",
    link: "/programs/international-relations",
    icon: Globe2,
    modules: [
      "Derecho internacional e instituciones",
      "Diplomacia y negociación",
      "Integración regional y cooperación africana",
      "Español progresivo según el plan de estudios validado",
    ],
  },
  {
    title: "Periodismo-Comunicación",
    intro:
      "Recoger, verificar, producir y difundir la información, y concebir la comunicación de las organizaciones, en el respeto de la ética y del derecho a la información.",
    duration: "Licencia (grado) · 3 años · 6 semestres · 180 créditos",
    image: "/images/campus/IMG-20250212-WA0016.jpg",
    link: "/programs/journalism-communication",
    icon: Newspaper,
    modules: [
      "Géneros periodísticos y redacción",
      "Verificación de hechos y deontología",
      "Producción de vídeo y montaje según los equipos",
      "Periodismo web y redes sociales",
    ],
  },
  {
    title: "Ingeniería Informática",
    intro:
      "Concebir, desarrollar, probar y mantener soluciones digitales adaptadas a las necesidades de las organizaciones, integrando la seguridad, la calidad del software y la iniciación progresiva a la IA.",
    duration: "Licencia (grado) · 3 años · 6 semestres · 180 créditos",
    image: "/images/documents/v3-image3.jpg",
    link: "/programs/engineering/computer-science",
    icon: Cpu,
    modules: [
      "Algoritmia y programación",
      "Desarrollo web y bases de datos",
      "Sistemas operativos y redes",
      "Ciberseguridad y protección de datos",
    ],
  },
  {
    title: "Ingeniería Geológica, Civil y Minera",
    intro:
      "Combinar la comprensión del terreno y de los materiales, las técnicas de ingeniería civil y los conocimientos del sector minero, integrando la seguridad y el medio ambiente.",
    duration: "Licencia (grado) · 3 años · 6 semestres · 180 créditos",
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    link: "/programs/geological-civil-mining-engineering",
    icon: Mountain,
    modules: [
      "Geología general y estructural",
      "Topografía y levantamientos de terreno",
      "Mecánica de suelos y materiales",
      "Explotación minera, seguridad y medio ambiente",
    ],
  },
]

const masters = [
  {
    title: "Máster en Administración de Empresas",
    description:
      "Profundizar la dirección, la estrategia, la gobernanza y el pilotaje de las organizaciones.",
  },
  {
    title: "Máster en Banca e Ingeniería Financiera",
    description:
      "Desarrollar competencias en análisis financiero, financiación, banca, gestión de riesgos y decisiones de inversión.",
  },
  {
    title: "Máster en Relaciones Internacionales y Diplomacia",
    description:
      "Profundizar el análisis de las relaciones internacionales, la negociación, las instituciones y los retos diplomáticos.",
  },
  {
    title: "Máster en Desarrollo Sostenible y Responsabilidad Social Empresarial (RSE)",
    description:
      "Estudiar los enfoques de sostenibilidad, la responsabilidad de las organizaciones, la gobernanza y la medición de los impactos.",
  },
  {
    title: "Máster en Auditoría y Control de Gestión",
    description:
      "Desarrollar competencias en control, auditoría, pilotaje del rendimiento, gestión de riesgos y reporting.",
  },
  {
    title: "Máster en Marketing Digital",
    description:
      "Profundizar la estrategia digital, la comunicación digital, el análisis del rendimiento y la relación con el cliente.",
  },
  {
    title: "Máster en Inteligencia Artificial, Redes y Telecomunicaciones",
    description:
      "Explorar los sistemas inteligentes, las infraestructuras digitales y las redes, según la especialización efectivamente retenida.",
  },
  {
    title: "Máster en Management Internacional",
    description:
      "Profundizar la estrategia, la gestión intercultural, el desarrollo internacional y el pilotaje de actividades transfronterizas.",
  },
  {
    title: "Máster en Gestión de Proyectos",
    description:
      "Formar profesionales capaces de concebir, planificar, financiar, ejecutar, seguir y evaluar proyectos.",
  },
  {
    title: "Máster en Calidad, Higiene, Seguridad y Medio Ambiente (QHSE)",
    description:
      "Concebir, desplegar y dirigir sistemas de gestión integrados de la calidad, de la higiene, de la salud y seguridad en el trabajo y del medio ambiente.",
  },
]

const steps = [
  {
    n: "1",
    title: "Primer contacto",
    text: "Dialogue con el equipo de ABS sobre la rama prevista, los perfiles buscados y las plazas disponibles.",
  },
  {
    n: "2",
    title: "Presentación del expediente",
    text: "Confeccione su expediente de candidatura con los documentos solicitados por la administración (expediente : 15 000 FCFA).",
  },
  {
    n: "3",
    title: "Estudio del expediente",
    text: "El expediente es examinado según las condiciones oficiales de admisión de ABS vigentes.",
  },
  {
    n: "4",
    title: "Inscripción",
    text: "Confirmación de las modalidades — calendario, tasas e itinerario — y posterior finalización de la inscripción.",
  },
]

export default function AcademicProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center text-white">
        <Image
          src="/images/campus/IMG-20250212-WA0022.jpg"
          alt="Estudiantes de ABS en el campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900/60" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <span className="inline-block mb-4 rounded-full bg-cyan-400/20 border border-cyan-400/40 px-4 py-1 text-sm font-medium text-cyan-300">
            Licencia (grado) : 3 años · 6 semestres · 180 créditos
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            La oferta de formación de ABS
          </h1>
          <p className="text-lg md:text-xl mb-8 text-slate-200">
            Cinco Licencias (grado) repartidas en cinco ámbitos — ciencias e ingeniería, digital, ciencias sociales
            e internacionales, información y comunicación, ciencias de la gestión — y un catálogo de
            Másteres cuyos itinerarios deben ser confirmados por la Dirección antes de su publicación como admisiones
            abiertas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#formations">
              <Button
                size="lg"
                className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold px-8 py-3 text-lg"
              >
                Explorar las formaciones <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/admissions">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg"
              >
                Condiciones de admisión
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs tabs */}
      <section id="formations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">
            Nuestras formaciones
          </h2>
          <p className="text-center text-slate-600 mt-4 max-w-3xl mx-auto mb-12">
            Las fichas que figuran a continuación constituyen la base editorial del catálogo web. Antes de toda
            inscripción, la administración confirma para cada curso académico los itinerarios efectivamente
            abiertos, las denominaciones oficiales de los diplomas, las condiciones de acceso y las tasas.
          </p>

          <Tabs defaultValue="licences" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-10 h-12">
              <TabsTrigger value="licences" className="text-base md:text-lg">
                Licencias (grado) (5)
              </TabsTrigger>
              <TabsTrigger value="masters" className="text-base md:text-lg">
                Másteres (10)
              </TabsTrigger>
            </TabsList>

            {/* Licences */}
            <TabsContent value="licences">
              <div className="space-y-10">
                {filieres.map((f, i) => (
                  <Card
                    key={f.title}
                    className={`overflow-hidden border-slate-200 shadow-sm hover:shadow-xl transition-shadow ${
                      i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    } md:flex`}
                  >
                    <div className="relative md:w-2/5 h-56 md:h-auto">
                      <Image
                        src={f.image}
                        alt={f.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <span className="absolute top-4 left-4 rounded-full bg-blue-900/90 text-white text-xs font-semibold px-3 py-1">
                        {f.duration}
                      </span>
                    </div>
                    <div className="md:w-3/5">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl text-blue-900">
                          <f.icon className="h-6 w-6 text-cyan-500" />
                          {f.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-5">{f.intro}</p>
                        <div className="mb-5">
                          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                            Enseñanzas destacadas
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-slate-700">
                            {f.modules.map((m) => (
                              <li key={m} className="flex items-start gap-2">
                                <BookOpen className="h-4 w-4 mt-0.5 text-cyan-500 shrink-0" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-sm text-slate-500 mb-5">
                          Idiomas : francés e inglés en cada semestre (progresión bilingüe,{" "}
                          <Link href="/academics/pedagogy" className="text-blue-700 underline">
                            consulte la página de Pedagogía
                          </Link>
                          ).
                        </p>
                        <Link href={f.link}>
                          <Button className="bg-blue-700 hover:bg-blue-900 text-white">
                            Descubrir la rama <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Masters */}
            <TabsContent value="masters">
              <div className="rounded-lg border border-amber-300 bg-amber-50 p-5 mb-8 text-sm text-amber-900">
                Los itinerarios de Máster enumerados a continuación corresponden a ejes de formación a confirmar
                por la Dirección antes de su publicación como admisiones abiertas (Máster : 2 años, 4 semestres,
                120 créditos, únicamente para los itinerarios efectivamente abiertos y validados).
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                {masters.map((m) => (
                  <Link key={m.title} href="/programs/masters" className="group">
                    <div className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-cyan-300 transition-all">
                      <h3 className="font-semibold text-blue-900 leading-snug mb-2">{m.title}</h3>
                      <p className="text-sm text-slate-600">{m.description}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:text-cyan-600">
                        Ver el catálogo de Másteres <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cadre pédagogique */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Marco de Licencia (grado)",
                text: "3 años, 6 semestres, 180 créditos según el marco pedagógico de trabajo. La distribución de las unidades de enseñanza se detalla en el plan semestral de cada rama.",
              },
              {
                icon: GraduationCap,
                title: "Enfoque 40 % / 60 %",
                text: "Aproximadamente un 40 % de aportaciones teóricas y un 60 % de prácticas, proyectos, clases dirigidas, trabajo de terreno, prácticas e inmersiones, con sujeción al plan aprobado.",
              },
              {
                icon: Languages,
                title: "Idiomas de trabajo",
                text: "Inglés en cada semestre con una progresión bilingüe francés–inglés ; en Relaciones y Asuntos Internacionales, español progresivo según el dispositivo validado.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
                <f.icon className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment candidater */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
            ¿Cómo candidatarse ?
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Un proceso de admisión sencillo, cuyas modalidades definitivas son precisadas por
            la administración para cada curso académico.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-xl bg-slate-50 border border-slate-200 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white font-bold mb-4">
                  {s.n}
                </span>
                <h3 className="font-semibold text-blue-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/apply">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-900 text-white px-8 py-3 text-lg">
                Presentar mi candidatura <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Preparado para construir su proyecto de estudios ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-200">
            Explore el catálogo de cursos, consulte las ramas en detalle o contacte con el equipo
            de admisiones para verificar las condiciones, los documentos a presentar y las plazas
            disponibles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/academics/course-catalog">
              <Button
                size="lg"
                className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold px-8 py-3 text-lg"
              >
                Catálogo de cursos
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg"
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
