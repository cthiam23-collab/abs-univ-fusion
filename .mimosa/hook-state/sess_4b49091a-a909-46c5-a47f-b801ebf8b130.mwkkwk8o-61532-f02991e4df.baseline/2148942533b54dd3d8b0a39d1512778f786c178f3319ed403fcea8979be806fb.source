import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Briefcase,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Factory,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Phone,
  SearchCheck,
  Sprout,
  Target,
  Truck,
  UserCog,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licenciatura en Administración de Empresas | ABS",
  description:
    "Licenciatura en Administración de Empresas en Bamako: gestión, contabilidad, finanzas, marketing, recursos humanos y emprendimiento. 3 años, 6 semestres, 180 créditos. Tarifa anual indicativa 1 025 000 FCFA (confirmación escrita 2026-2027 requerida).",
  path: "/programs/business-administration",
  locale: "es",
})

const competences = [
  {
    code: "AA01",
    competence: "Analizar el entorno económico y organizativo",
    resultat: "Producir un análisis estructurado del contexto de una organización.",
  },
  {
    code: "AA02",
    competence: "Gestionar los recursos financieros",
    resultat: "Elaborar un presupuesto, interpretar indicadores y explicar las desviaciones.",
  },
  {
    code: "AA03",
    competence: "Diseñar una acción de marketing",
    resultat: "Definir un público objetivo, una propuesta de valor y un plan de acción.",
  },
  {
    code: "AA04",
    competence: "Organizar los recursos humanos",
    resultat: "Contribuir a la planificación, al reclutamiento y al desarrollo de los equipos.",
  },
  {
    code: "AA05",
    competence: "Dirigir un proyecto",
    resultat: "Planificar tareas, seguir los resultados y presentar un balance.",
  },
  {
    code: "AA06",
    competence: "Comunicar profesionalmente",
    resultat: "Redactar un informe y defender una recomendación en francés y en inglés.",
  },
]

const enseignements = [
  "Economía general y economía de la empresa",
  "Contabilidad general y analítica",
  "Matemáticas financieras y estadística",
  "Finanzas empresariales y análisis financiero",
  "Marketing fundamental y marketing digital",
  "Management y estrategia",
  "Gestión de los recursos humanos",
  "Derecho empresarial y fiscalidad según la malla curricular",
  "Emprendimiento y plan de negocios",
  "Auditoría, control de gestión y cuadros de mando",
  "Inglés profesional en cada semestre",
  "Desarrollo personal, proyectos e inmersión",
]

const options = [
  {
    icon: LineChart,
    titre: "Ingeniería financiera",
    texte: "Análisis financiero, gestión presupuestaria, financiación de empresas y gestión de riesgos.",
  },
  {
    icon: Calculator,
    titre: "Contabilidad y finanzas",
    texte: "Contabilidad general y analítica, fiscalidad, control de gestión y dirección financiera.",
  },
  {
    icon: SearchCheck,
    titre: "Auditoría",
    texte: "Control interno, análisis de riesgos, evaluación de los procedimientos y mejora del rendimiento.",
  },
  {
    icon: Target,
    titre: "Marketing y comunicación",
    texte: "Estudios de mercado, estrategia comercial, marketing digital y desarrollo de marca.",
  },
  {
    icon: Truck,
    titre: "Transporte y logística",
    texte: "Abastecimiento, gestión de flujos, transporte, distribución y optimización de la cadena logística.",
  },
  {
    icon: Sprout,
    titre: "Agrobusiness",
    texte: "Gestión de empresas agrícolas y agroalimentarias, valorización de las producciones y cadenas de valor.",
  },
  {
    icon: UserCog,
    titre: "Gestión de los recursos humanos",
    texte: "Reclutamiento, desarrollo de competencias, administración del personal y gestión de equipos.",
  },
  {
    icon: Factory,
    titre: "Emprendimiento",
    texte: "Creación de empresas, elaboración de planes de negocios, innovación, financiación y desarrollo de las actividades.",
  },
]

const parcours = [
  {
    cycle: "Licenciatura 1",
    organisation: "Semestres 1 y 2: fundamentos, métodos de trabajo y primeras aplicaciones",
    statut: "Marco general de 30 créditos por semestre; consultar las mallas curriculares detalladas anexas",
  },
  {
    cycle: "Licenciatura 2",
    organisation: "Semestres 3 y 4: profundización, prácticas y proyectos",
    statut: "Unidades, volúmenes horarios y créditos según la malla curricular de la carrera",
  },
  {
    cycle: "Licenciatura 3",
    organisation: "Semestres 5 y 6: especialización progresiva, proyecto, práctica y memoria según la malla curricular",
    statut: "Validación académica según el reglamento aprobado",
  },
]

const info = [
  { label: "Titulación", value: "Licenciatura — 3 años, 6 semestres, 180 créditos según el marco de trabajo" },
  { label: "Lugar", value: "Bamako, Mali — Hamdallaye ACI 2000" },
  {
    label: "Idiomas",
    value: "Francés e inglés en cada semestre (progresión bilingüe, véase la página de Pedagogía)",
  },
  {
    label: "Tarifa anual indicativa",
    value: "1 025 000 FCFA/año (tarifa comunicada, confirmación escrita 2026–2027 requerida)",
  },
  {
    label: "Costos adicionales comunicados",
    value: "Expediente: 15 000 FCFA; defensa de Licenciatura: 80 000 FCFA — importes por confirmar para 2026–2027",
  },
  { label: "Contacto", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

export default function BusinessAdministrationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Polo 5 — Administración de empresas
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licenciatura en Administración de Empresas
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Gestionar con método. Emprender con audacia. Crear un valor duradero.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Formar profesionales capaces de comprender el funcionamiento de las organizaciones,
            analizar sus resultados y contribuir a la gestión, a las finanzas, al marketing, a los
            recursos humanos y al desarrollo de las actividades. La formación responde a las
            necesidades de las empresas, administraciones, asociaciones y proyectos emprendedores.
          </p>
        </div>
      </section>

      {/* Info bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {info.map((i) => (
              <div key={i.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-1">
                  {i.label}
                </p>
                <p className="text-sm text-slate-700">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="finalite">
            <TabsList className="flex flex-wrap justify-center w-full mb-8">
              <TabsTrigger value="finalite" className="text-sm">
                Finalidad y objetivos
              </TabsTrigger>
              <TabsTrigger value="competences" className="text-sm">
                Competencias objetivo
              </TabsTrigger>
              <TabsTrigger value="parcours" className="text-sm">
                Organización del itinerario
              </TabsTrigger>
              <TabsTrigger value="enseignements" className="text-sm">
                Enseñanzas
              </TabsTrigger>
              <TabsTrigger value="projets" className="text-sm">
                Proyectos y prácticas
              </TabsTrigger>
            </TabsList>

            {/* Finalidad */}
            <TabsContent value="finalite">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Target className="h-5 w-5 text-cyan-500" /> Finalidad
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 text-slate-700">
                    <p className="font-medium">
                      Desarrollar una capacidad de gestión responsable, analítica y operativa.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objetivos generales</p>
                      <ul className="space-y-1.5">
                        <li>Dominar los fundamentos de la gestión y de la economía.</li>
                        <li>
                          Desarrollar el análisis financiero, la comunicación profesional y la toma
                          de decisiones.
                        </li>
                        <li>
                          Dirigir proyectos, trabajar en equipo e integrar la ética y la
                          sostenibilidad.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objetivos específicos</p>
                      <ul className="space-y-1.5">
                        <li>Construir un presupuesto y leer estados financieros.</li>
                        <li>Elaborar un plan de marketing y analizar un mercado.</li>
                        <li>
                          Contribuir al reclutamiento, a la organización y al seguimiento del
                          rendimiento.
                        </li>
                        <li>Presentar recomendaciones argumentadas a partir de datos.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <GraduationCap className="h-5 w-5 text-cyan-500" /> Condiciones de acceso
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        Acceso a la Licenciatura: Baccalauréat o título equivalente, sujeto a las
                        condiciones oficiales de admisión de ABS. Acceso al Máster: Licenciatura o
                        título equivalente en un ámbito pertinente, expediente académico y
                        condiciones del itinerario elegido.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        Los itinerarios efectivamente abiertos, las denominaciones oficiales y las
                        tasas son confirmados por la administración para cada ingreso.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <Briefcase className="h-5 w-5 text-cyan-500" /> Métodos y evaluación
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        Evaluación continua, deberes, estudios de caso, exposiciones, trabajos en
                        grupo, exámenes semestrales, proyectos y práctica. Las ponderaciones exactas
                        son las del reglamento y la malla curricular aprobados.
                      </p>
                      <p className="mt-3">
                        Enfoque pedagógico previsto: aproximadamente 40 % de aportes teóricos y 60 %
                        de prácticas, proyectos, trabajos dirigidos, trabajo de campo, prácticas e
                        inmersiones, sujeto a la malla curricular aprobada.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Competencias */}
            <TabsContent value="competences">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Competencias objetivo y resultados de aprendizaje</CardTitle>
                  <CardDescription>
                    Cada competencia está asociada a un resultado de aprendizaje esperado al final
                    de la formación.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-20">Código</TableHead>
                        <TableHead>Competencia objetivo</TableHead>
                        <TableHead>Resultado de aprendizaje esperado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {competences.map((c) => (
                        <TableRow key={c.code}>
                          <TableCell>
                            <Badge variant="secondary" className="font-semibold text-blue-800">
                              {c.code}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium">{c.competence}</TableCell>
                          <TableCell className="text-slate-600">{c.resultat}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Itinerario */}
            <TabsContent value="parcours">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Organización del itinerario de Licenciatura</CardTitle>
                  <CardDescription>
                    Licenciatura: 3 años, 6 semestres, 180 créditos según el marco pedagógico de
                    trabajo. La distribución detallada de las unidades de enseñanza se fija en la
                    malla curricular semestral validada de la carrera.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-24">Ciclo</TableHead>
                        <TableHead>Organización</TableHead>
                        <TableHead>Estado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {parcours.map((p) => (
                        <TableRow key={p.cycle}>
                          <TableCell className="font-semibold text-blue-800">{p.cycle}</TableCell>
                          <TableCell>{p.organisation}</TableCell>
                          <TableCell className="text-slate-600">{p.statut}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <p className="mt-4 text-sm text-slate-500">
                    Los cuadros semestrales completos (unidades de enseñanza, asignaturas, volúmenes
                    CM/TD/TP/TPE y créditos) figuran en el volumen pedagógico anexo y deben ser
                    controlados y armonizados antes de su publicación como datos definitivos.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Enseñanzas */}
            <TabsContent value="enseignements">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <BookOpen className="h-5 w-5 text-cyan-500" /> Principales enseñanzas
                    </CardTitle>
                    <CardDescription>Lista presentada al público, según la malla curricular validada</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {enseignements.map((e) => (
                        <li key={e} className="flex items-start gap-2 text-slate-700">
                          <CheckCircle2 className="h-4 w-4 mt-1 text-cyan-500 shrink-0" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Ámbitos de especialización del polo</CardTitle>
                    <CardDescription>
                      Opciones previstas en el polo de Administración de empresas. Por confirmar:
                      opciones efectivamente abiertas para cada ingreso.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {options.map((o) => (
                      <div key={o.titre} className="flex gap-3">
                        <o.icon className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-800">{o.titre}</p>
                          <p className="text-sm text-slate-600">{o.texte}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Proyectos y prácticas */}
            <TabsContent value="projets">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <ClipboardList className="h-5 w-5 text-cyan-500" /> Proyectos de fin de módulo y
                      defensas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-700">
                    <p>
                      Estudio de caso de una empresa, presupuesto previsional, auditoría simplificada,
                      plan de marketing o plan de negocios. Presentación oral e informe escrito;
                      defensa de fin de Licenciatura según el reglamento aprobado.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Users className="h-5 w-5 text-cyan-500" /> Inmersiones, salidas pedagógicas y
                      prácticas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-700">
                    <p>
                      Visitas a empresas y organizaciones, estudios de caso, proyectos tutorizados y
                      práctica en entorno profesional según calendario validado. La práctica da lugar
                      a un informe, una evaluación del tutor y una presentación/defensa según las
                      normas de ABS.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Imagen + medios */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/campus/IMG-20250212-WA0003.jpg"
              alt="Estudiantes en clase de Administración de Empresas"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Medios puestos a disposición de los estudiantes</h2>
            <p className="text-slate-700 mb-4">
              Docentes en gestión, contabilidad, finanzas, marketing y recursos humanos; aula,
              biblioteca y recursos digitales, hojas de cálculo y herramientas de presentación. Los
              softwares especializados y las alianzas nominativas solo se anuncian después de
              verificar su disponibilidad.
            </p>
            <p className="text-sm text-slate-500">
              Seguimiento y mejora continua: resultados por unidad de enseñanza y por semestre,
              evaluación de las enseñanzas por los estudiantes, seguimiento de los proyectos y
              prácticas, recogida anual de las devoluciones de los egresados y empleadores cuando
              los datos están disponibles, revisión periódica de las mallas curriculares y de los
              contenidos.
            </p>
          </div>
        </div>
      </section>

      {/* Salidas profesionales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Salidas profesionales y perspectivas</h2>
          <p className="max-w-3xl text-slate-700 mb-6">
            Perspectivas indicativas, según la experiencia y la especialización de cada egresado —
            las salidas profesionales son perspectivas, no garantías de empleo:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Asistente de gestión",
              "Asistente contable o financiero",
              "Asistente de atención a clientes",
              "Asistente de RR. HH.",
              "Asistente de marketing",
              "Gestor de proyectos junior",
              "Emprendedor o apoyo a una PYME",
            ].map((d) => (
              <Badge key={d} variant="secondary" className="text-sm px-3 py-1">
                {d}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Desea saber más sobre la carrera de Administración de Empresas?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-slate-200">
            Contacte con el equipo de ABS para verificar las condiciones de admisión, los documentos
            a presentar, el calendario y las plazas disponibles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold">
                Solicitar información
              </Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold"
              >
                <Phone className="mr-2 h-4 w-4" /> Contactar a ABS por WhatsApp
              </Button>
            </a>
            <Link href="/apply">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold"
              >
                Postularse
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="inline-flex items-center gap-1">
              <Phone className="h-4 w-4" /> {WHATSAPP_NUMBER}
            </span>
            <span className="inline-flex items-center gap-1">
              <Mail className="h-4 w-4" /> abs.mail1290@gmail.com
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Hamdallaye ACI 2000, Bamako, Mali
            </span>
          </p>
        </div>
      </section>
    </div>
  )
}
