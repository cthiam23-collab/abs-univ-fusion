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
  Camera,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Mail,
  MapPin,
  Megaphone,
  Mic,
  Newspaper,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licenciatura en Periodismo y Comunicación | ABS",
  description:
    "Licenciatura en Periodismo y Comunicación en Bamako: investigación y verificación de la información, redacción, producción audiovisual, periodismo web, comunicación institucional y ética de los medios. 3 años, 6 semestres, 180 créditos. Tarifa anual indicativa 1 250 000 FCFA (confirmación escrita 2026-2027 requerida).",
  path: "/programs/journalism-communication",
  locale: "es",
})

const competences = [
  {
    code: "JC01",
    competence: "Recoger y verificar la información",
    resultat: "Cruzar las fuentes y documentar una información.",
  },
  {
    code: "JC02",
    competence: "Redactar para diferentes formatos",
    resultat: "Producir un texto claro, estructurado y adaptado al público.",
  },
  {
    code: "JC03",
    competence: "Preparar una entrevista",
    resultat: "Elaborar preguntas, conducir la entrevista y restituir con fidelidad.",
  },
  {
    code: "JC04",
    competence: "Producir contenidos multimedia",
    resultat: "Preparar un contenido de foto, audio, vídeo o web según los medios disponibles.",
  },
  {
    code: "JC05",
    competence: "Elaborar una comunicación",
    resultat: "Definir un público, un mensaje, unos soportes y unos indicadores.",
  },
  {
    code: "JC06",
    competence: "Aplicar la ética profesional",
    resultat: "Respetar la verificación, la vida privada, el derecho a la imagen y la deontología.",
  },
]

const enseignements = [
  "Técnicas de expresión escrita y oral",
  "Géneros periodísticos y redacción",
  "Metodología de investigación y verificación de hechos",
  "Derecho de los medios y deontología",
  "Comunicación institucional y relaciones con la prensa",
  "Estrategia de comunicación y marketing de los medios",
  "Fotografía y toma de sonido",
  "Producción de vídeo y montaje según los equipos",
  "Periodismo web y redes sociales",
  "Diseño de campañas y medición de audiencia",
  "Inglés profesional en cada semestre",
  "Proyectos editoriales, desarrollo personal y práctica",
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
    value: "1 250 000 FCFA/año (tarifa comunicada, confirmación escrita 2026–2027 requerida)",
  },
  {
    label: "Costos adicionales comunicados",
    value:
      "Expediente: 15 000 FCFA; defensa de Licenciatura: 80 000 FCFA — importes por confirmar para 2026–2027",
  },
  { label: "Contacto", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

const axes = [
  {
    icon: Newspaper,
    titre: "Periodismo",
    texte:
      "Investigar, verificar, analizar y difundir la información; reportaje, entrevista y periodismo digital.",
  },
  {
    icon: Megaphone,
    titre: "Comunicación de las organizaciones",
    texte:
      "Concebir estrategias de comunicación adaptadas a los objetivos y a los públicos: institucional, relaciones con la prensa, digital.",
  },
  {
    icon: Camera,
    titre: "Producción de contenidos",
    texte:
      "Producciones multimedia, proyectos editoriales y situaciones prácticas; verificación de hechos, responsabilidad editorial y lucha contra la desinformación.",
  },
  {
    icon: Mic,
    titre: "Proyección de las voces africanas",
    texte:
      "Contar las realidades del continente con exactitud, valorizar sus logros, iluminar sus desafíos y contribuir a su proyección.",
  },
]

export default function JournalismCommunicationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Polo 4 — Periodismo y comunicación
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licenciatura en Periodismo y Comunicación
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Informar con rigor. Comunicar con impacto. Hacer oír y destacar las voces africanas.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Desarrollar las competencias necesarias para la recogida, la verificación, la producción
            y la difusión de la información, así como para la comunicación de las organizaciones, en
            un entorno marcado por lo digital, la imagen y los nuevos usos mediáticos.
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
                      Formar perfiles capaces de producir contenidos fiables, claros y adaptados a
                      diferentes soportes, respetando la ética y las responsabilidades de la
                      comunicación.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objetivos generales</p>
                      <ul className="space-y-1.5">
                        <li>
                          Dominar las bases de la escritura periodística y de la comunicación.
                        </li>
                        <li>Iniciarse en la producción de audio, vídeo, foto y digital.</li>
                        <li>
                          Comprender la ética, el derecho de la información y la estrategia de
                          comunicación.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objetivos específicos</p>
                      <ul className="space-y-1.5">
                        <li>Redactar un artículo, un comunicado o un dossier de prensa.</li>
                        <li>Preparar una entrevista y verificar las informaciones.</li>
                        <li>Realizar un contenido audiovisual adaptado a un formato.</li>
                        <li>
                          Concebir una acción de comunicación y evaluar sus resultados.
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
                        Acceso a la Licenciatura: Baccalauréat o título equivalente, según las
                        condiciones oficiales de ABS. Se recomiendan curiosidad, calidad
                        redaccional, interés por la actualidad y aptitud para el trabajo en equipo.
                        Máster: Licenciatura pertinente o equivalente, según itinerario abierto.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        Por confirmar antes de la publicación: equipos de producción, estudio,
                        software y modalidades de realización de los proyectos. No se muestra ningún
                        Máster distinto en esta carrera sin una malla curricular y una decisión
                        formal de apertura.
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
                        Artículos, dossiers, producciones audiovisuales, trabajos prácticos,
                        exámenes, portafolio, proyecto editorial e informe de práctica. Las
                        evaluaciones prácticas se acompañan de criterios transparentes.
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
                    <p className="mt-4 text-sm text-slate-500 border-t border-slate-200 pt-4">
                      Cada programa de asignatura precisa los formatos esperados, las herramientas
                      disponibles, los criterios editoriales, las normas de derecho a la imagen y las
                      modalidades de evaluación. Las producciones deben respetar el marco ético.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Ejes fundamentales de la formación</CardTitle>
                    <CardDescription>
                      Del periodismo de verificación a la estrategia de comunicación.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {axes.map((a) => (
                      <div key={a.titre} className="flex gap-3">
                        <a.icon className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-800">{a.titre}</p>
                          <p className="text-sm text-slate-600">{a.texte}</p>
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
                      Periódico-escuela, pódcast, reportaje, entrevista, minidocumental, campaña
                      institucional o estrategia editorial. Entregables: guion, contenido final,
                      ficha de verificación y presentación.
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
                      Visitas a medios y servicios de comunicación, ejercicios de reportaje
                      supervisados, participación en eventos y práctica en una redacción, agencia o
                      servicio de comunicación cuando sea posible.
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
              src="/images/campus/IMG-20250212-WA0016.jpg"
              alt="Estudiantes del polo de Periodismo y comunicación en el campus de ABS"
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
              Docentes en periodismo, comunicación y medios; ordenadores, conexión, cámara
              fotográfica/de vídeo, micrófonos y software disponibles. No se presenta ningún estudio
              ni material como adquirido sin inventario físico confirmado.
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
            Perspectivas indicativas, según el portafolio y la experiencia de cada egresado — las
            salidas profesionales son perspectivas, no garantías de empleo:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Asistente de comunicación",
              "Redactor junior",
              "Periodista principiante",
              "Community manager",
              "Asistente de relaciones con la prensa",
              "Productor de contenidos",
              "Responsable de comunicación junior",
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
            ¿Desea saber más sobre la carrera de Periodismo y Comunicación?
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
