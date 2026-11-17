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
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  HardHat,
  Layers,
  Mail,
  MapPin,
  Mountain,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licenciatura en Ingeniería Geológica, Civil y Minera | ABS",
  description:
    "Licenciatura en Ingeniería Geológica, Civil y Minera en Bamako: geología, topografía, materiales, ingeniería civil, recursos mineros, seguridad y medio ambiente. 3 años, 6 semestres, 180 créditos. Tarifa anual indicativa 1 350 000 FCFA (confirmación escrita 2026-2027 requerida).",
  path: "/programs/geological-civil-mining-engineering",
  locale: "es",
})

const competences = [
  {
    code: "GCM01",
    competence: "Observar y describir los terrenos",
    resultat: "Recoger observaciones y caracterizar materiales.",
  },
  {
    code: "GCM02",
    competence: "Cartografiar y medir",
    resultat: "Organizar datos de levantamiento y producir una representación legible.",
  },
  {
    code: "GCM03",
    competence: "Comprender los materiales y las obras",
    resultat: "Explicar las propiedades y las restricciones principales.",
  },
  {
    code: "GCM04",
    competence: "Contribuir a los estudios técnicos",
    resultat: "Leer planos y aplicar métodos de cálculo adaptados al nivel.",
  },
  {
    code: "GCM05",
    competence: "Integrar seguridad y medio ambiente",
    resultat: "Detectar los riesgos y proponer medidas de prevención.",
  },
  {
    code: "GCM06",
    competence: "Comunicar los resultados",
    resultat: "Redactar un informe y presentar datos técnicos.",
  },
]

const enseignements = [
  "Matemáticas aplicadas y física",
  "Química general y materiales",
  "Geología general y estructural",
  "Mineralogía, petrografía y cartografía geológica",
  "Topografía y levantamientos de terreno",
  "Mecánica de suelos y materiales de construcción",
  "Hidrología y geotecnia según la malla curricular",
  "Dibujo técnico y software de diseño",
  "SIG: QGIS y herramientas cartográficas según recursos",
  "Iniciación a las herramientas profesionales: AutoCAD Civil 3D, Surpac según disponibilidad",
  "Explotación minera, seguridad y medio ambiente",
  "Inglés científico, proyectos y salidas de terreno",
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
    value: "1 350 000 FCFA/año (tarifa comunicada, confirmación escrita 2026–2027 requerida)",
  },
  {
    label: "Costos adicionales comunicados",
    value: "Expediente: 15 000 FCFA; defensa de Licenciatura: 80 000 FCFA — importes por confirmar para 2026–2027",
  },
  { label: "Contacto", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

export default function GeologicalCivilMiningEngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Polo 1 — Ingeniería geológica, civil y minera
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licenciatura en Ingeniería Geológica, Civil y Minera
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Explorar los recursos. Construir las infraestructuras. Valorizar de manera sostenible el
            potencial africano.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Asociar la comprensión de los terrenos y de los materiales, las técnicas de ingeniería
            civil y los conocimientos del sector minero para formar profesionales atentos a la
            seguridad, a la calidad de las obras y a la gestión responsable de los recursos
            naturales. África cuenta con un patrimonio geológico y minero considerable y con
            necesidades importantes en infraestructuras: esta formación apunta a las competencias
            científicas y técnicas capaces de acompañar estos proyectos de desarrollo.
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
                      Formar técnicos superiores y cuadros principiantes capables de participar en
                      el estudio de los terrenos, en la preparación de proyectos y en el seguimiento
                      de actividades geológicas, civiles y mineras.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objetivos generales</p>
                      <ul className="space-y-1.5">
                        <li>
                          Dominar los fundamentos científicos necesarios para el estudio del suelo y
                          de los materiales.
                        </li>
                        <li>
                          Comprender los métodos de levantamiento, cartografía, concepción y
                          seguimiento de las obras.
                        </li>
                        <li>Integrar las normas de seguridad, de medio ambiente y de calidad.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objetivos específicos</p>
                      <ul className="space-y-1.5">
                        <li>
                          Describir formaciones geológicas e interpretar datos de terreno.
                        </li>
                        <li>Realizar relevamientos y producir mapas o planos de base.</li>
                        <li>
                          Contribuir a la preparación y al seguimiento de trabajos civiles o mineros.
                        </li>
                        <li>
                          Utilizar software especializado cuando esté disponible y sea enseñado.
                        </li>
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
                        Acceso a la Licenciatura: Baccalauréat científico o título equivalente
                        recomendado, sujeto a las condiciones oficiales de admisión. Acceso al
                        Máster: Licenciatura pertinente en geología, ingeniería civil, minas o ámbito
                        conexo, expediente académico e itinerario efectivamente abierto.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        Por confirmar antes de la publicación: perímetro disciplinario, software y
                        equipamientos realmente accesibles, salidas de terreno y eventuales exigencias
                        profesionales.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <ShieldCheck className="h-5 w-5 text-cyan-500" /> Métodos y evaluación
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        Controles escritos, informes de prácticas de laboratorio, mapas/planos,
                        estudios de caso, evaluaciones de terreno, exámenes, proyecto y práctica.
                        Validación según las normas institucionales aprobadas.
                      </p>
                      <p className="mt-3">
                        Enfoque pedagógico previsto: aproximadamente 40 % de aportes teóricos y 60 %
                        de prácticas, proyectos, trabajos dirigidos, trabajo de campo, prácticas e
                        inmersiones, sujeto a la malla curricular aprobada. Las salidas de terreno
                        respetan instrucciones de seguridad y equipos de protección definidos por la
                        malla curricular.
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
                  <CardTitle className="text-blue-900">
                    Competencias objetivo y resultados de aprendizaje
                  </CardTitle>
                  <CardDescription>
                    Cada competencia está asociada a un resultado de aprendizaje esperado al final
                    de la formación.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-24">Código</TableHead>
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
                    controlados y armonizados antes de su publicación como datos definitivos. Las
                    mallas curriculares del Máster del ámbito geológico, civil y minero deben ser
                    validadas antes de la apertura de las inscripciones.
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
                    <p className="mt-4 text-sm text-slate-500 border-t border-slate-200 pt-4">
                      Software como QGIS, AutoCAD Civil 3D y Surpac pueden utilizarse según los
                      objetivos pedagógicos y los equipos disponibles.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Tres componentes articulados</CardTitle>
                    <CardDescription>
                      Una formación en la encrucijada de las ciencias de la Tierra, de la ingeniería
                      de las obras y de los recursos minerales.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <Mountain className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Componente geológico</p>
                        <p className="text-sm text-slate-600">
                          Observar y caracterizar los terrenos, interpretar los datos geológicos y
                          geotécnicos, cartografiar.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <HardHat className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Componente de ingeniería civil</p>
                        <p className="text-sm text-slate-600">
                          Materiales, mecánica de suelos, concepción y seguimiento de las obras,
                          planos y cálculos de base.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Layers className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Componente minero</p>
                        <p className="text-sm text-slate-600">
                          Exploración y explotación de los recursos minerales, seguridad, medio
                          ambiente y rehabilitación de los sitios.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 border-t border-slate-200 pt-4">
                      Se presta una atención particular a la seguridad, a la gestión responsable de
                      los recursos, a la reducción de los impactos ambientales y a la toma en cuenta
                      de las necesidades de las comunidades.
                    </p>
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
                      Cuaderno de terreno, cartografía geológica, análisis de un material, estudio de
                      caso geotécnico o miniproyecto de seguimiento de obra. Presentación de los
                      resultados e informe técnico.
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
                      Salidas de terreno supervisadas, visitas a obras, sitios geológicos y empresas
                      mineras si los convenios y la seguridad lo permiten; práctica profesional con
                      tutor e informe.
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
              src="/images/campus/IMG-20250212-WA0009.jpg"
              alt="Estudiantes del polo de Ingeniería geológica, civil y minera en el campus de ABS"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Medios puestos a disposición de los estudiantes
            </h2>
            <p className="text-slate-700 mb-4">
              Docentes en geología, topografía, materiales e ingeniería civil; instrumentos de
              medición, equipos de protección individual, recursos cartográficos y software según
              licencias y disponibilidad. No se reivindica ningún laboratorio ni alianza precisa sin
              verificación.
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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Salidas profesionales y perspectivas
          </h2>
          <p className="max-w-3xl text-slate-700 mb-6">
            Perspectivas indicativas, sujetas a las competencias, habilitaciones y exigencias del
            empleador — las salidas profesionales son perspectivas, no garantías de empleo:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Asistente geólogo",
              "Técnico de terreno",
              "Asistente topógrafo",
              "Técnico de materiales",
              "Asistente de obra",
              "Asistente de estudios geotécnicos o mineros",
            ].map((d) => (
              <Badge key={d} variant="secondary" className="text-sm px-3 py-1">
                {d}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500 max-w-3xl">
            Sectores concernidos (a título indicativo): oficinas de estudios, empresas de
            construcción, sociedades mineras, laboratorios, organismos de cartografía, servicios
            técnicos y estructuras ambientales y geotécnicas.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Desea saber más sobre la carrera de Ingeniería Geológica, Civil y Minera?
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
