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
  Globe2,
  GraduationCap,
  Landmark,
  Languages,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licenciatura en Relaciones y Asuntos Internacionales | ABS",
  description:
    "Licenciatura en Relaciones y Asuntos Internacionales en Bamako: geopolítica, derecho internacional, diplomacia, cooperación, economía internacional y comunicación intercultural. Francés e inglés cada semestre, español progresivo. 3 años, 6 semestres, 180 créditos. Tarifa anual indicativa 1 250 000 FCFA (confirmación escrita 2026-2027 requerida).",
  path: "/programs/international-relations",
  locale: "es",
})

const competences = [
  {
    code: "RAI01",
    competence: "Analizar un contexto internacional",
    resultat: "Presentar los actores, intereses y retos de una situación.",
  },
  {
    code: "RAI02",
    competence: "Investigar y verificar la información",
    resultat: "Comparar fuentes y distinguir hechos y opiniones.",
  },
  {
    code: "RAI03",
    competence: "Redactar notas y síntesis",
    resultat: "Producir una nota estructurada, fundamentada en fuentes y argumentada.",
  },
  {
    code: "RAI04",
    competence: "Comprender las instituciones",
    resultat: "Describir el papel de las organizaciones y de los marcos de cooperación.",
  },
  {
    code: "RAI05",
    competence: "Comunicar en contexto intercultural",
    resultat: "Adaptar un mensaje a un público y a un contexto dados.",
  },
  {
    code: "RAI06",
    competence: "Movilizar las lenguas",
    resultat: "Presentar un análisis en francés y en inglés; progresar en español.",
  },
]

const enseignements = [
  "Introducción a las relaciones internacionales",
  "Historia contemporánea y geopolítica",
  "Derecho internacional e instituciones",
  "Diplomacia y negociación",
  "Economía política internacional",
  "Integración regional y cooperación africana",
  "Metodología de investigación y análisis de fuentes",
  "Comunicación institucional y redacción de notas",
  "Inglés en cada semestre",
  "Español progresivo en cada etapa prevista por la malla curricular validada",
  "Desarrollo personal, simulaciones y proyectos",
  "Inmersiones y visitas institucionales según convenios",
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
  {
    label: "Titulación",
    value: "Licenciatura — 3 años, 6 semestres, 180 créditos según el marco de trabajo",
  },
  { label: "Lugar", value: "Bamako, Mali — Hamdallaye ACI 2000" },
  {
    label: "Idiomas",
    value:
      "Francés e inglés en cada semestre; español progresivo para esta carrera (volúmenes y niveles por validar)",
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
    icon: Globe2,
    titre: "Geopolítica y análisis estratégico",
    texte:
      "Analizar las interacciones entre Estados, organizaciones internacionales, instituciones regionales, empresas y actores de la sociedad civil.",
  },
  {
    icon: Landmark,
    titre: "Integración africana y cooperación",
    texte:
      "Unión Africana, CEDEAO y organizaciones regionales; realidades africanas, dinámicas regionales y desafíos estratégicos del Sahel.",
  },
  {
    icon: Languages,
    titre: "Lenguas y comunicación intercultural",
    texte:
      "Inglés en cada semestre y español progresivo: investigación, redacción, negociación y comunicación en entornos complejos.",
  },
]

export default function InternationalRelationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Polo 3 — Relaciones y asuntos internacionales
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licenciatura en Relaciones y Asuntos Internacionales
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Comprender el mundo. Analizar las relaciones de fuerza. Sostener las ambiciones de
            África.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Dotar a los estudiantes de herramientas de análisis de las relaciones internacionales,
            de las instituciones, de la diplomacia, de la cooperación y de los desafíos
            geopolíticos, con una comprensión de las realidades africanas y una apertura a las
            dinámicas mundiales. Se presta una atención particular a las dinámicas regionales, a las
            relaciones entre los países del continente y a los desafíos estratégicos del Sahel.
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
                      Formar perfiles capaces de analizar los desafíos internacionales, preparar
                      expedientes y contribuir a actividades de cooperación, de comunicación y de
                      relaciones institucionales.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objetivos generales</p>
                      <ul className="space-y-1.5">
                        <li>Comprender los actores, instituciones y relaciones de fuerza internacionales.</li>
                        <li>
                          Desarrollar la investigación documental, el análisis político y la
                          redacción de notas.
                        </li>
                        <li>Reforzar las competencias lingüísticas e interculturales.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objetivos específicos</p>
                      <ul className="space-y-1.5">
                        <li>
                          Analizar un acontecimiento internacional distinguiendo hechos, fuentes e
                          interpretaciones.
                        </li>
                        <li>Redactar una nota de síntesis o un expediente país.</li>
                        <li>Preparar una presentación o una simulación de negociación.</li>
                        <li>
                          Comunicar en francés y en inglés y progresar en español según el
                          dispositivo validado.
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
                        condiciones oficiales de ABS. Se recomienda interés por la actualidad, la
                        lectura, el análisis y las lenguas. Máster: Licenciatura pertinente o
                        equivalente, según el itinerario efectivamente abierto.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        Dispositivo lingüístico previsto: francés e inglés, con español progresivo
                        para esta carrera. Volúmenes, niveles y modalidades de evaluación por
                        validar.
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
                        Ensayos académicos, notas de síntesis, exposiciones, expedientes de
                        investigación, simulaciones, exámenes e informe de práctica. Los criterios
                        de calidad de las
                        fuentes y de razonamiento son explícitos.
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
                    controlados y armonizados antes de su publicación como datos definitivos. La
                    progresión del español — volúmenes, créditos y evaluaciones — deberá precisarse
                    en la malla curricular.
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
                    <CardTitle className="text-blue-900">Ejes fundamentales de la formación</CardTitle>
                    <CardDescription>
                      Una lectura de las relaciones internacionales anclada en las realidades
                      africanas.
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
                    <p className="text-sm text-slate-500 border-t border-slate-200 pt-4">
                      Las alianzas diplomáticas o internacionales solo se muestran si están
                      formalizadas. Los cursos de lenguas precisan los niveles objetivo y las horas
                      por semestre.
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
                      Expediente país, nota de política pública, análisis de crisis, simulación
                      diplomática, conferencia estudiantil o estudio de cooperación regional. Informe
                      documentado y presentación oral.
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
                      Visitas y encuentros institucionales, conferencias, simulaciones, proyectos con
                      asociaciones o estructuras de cooperación cuando se concluyan acuerdos;
                      práctica según convenio.
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
              src="/images/documents/v3-image2.jpg"
              alt="Estudiantes de ABS trabajando juntos en un proyecto"
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
              Docentes en relaciones internacionales, derecho, economía y lenguas; acceso a una
              biblioteca y a recursos digitales, prensa y fuentes institucionales. Las alianzas
              diplomáticas o internacionales solo se muestran si están formalizadas.
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
            Perspectivas indicativas, sujetas a la experiencia y a las condiciones de contratación
            de cada empleador — las salidas profesionales son perspectivas, no garantías de empleo:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Asistente de proyecto de cooperación",
              "Asistente de monitoreo junior",
              "Asistente de relaciones institucionales",
              "Redactor/analista principiante",
              "Apoyo a ONG y programas",
            ].map((d) => (
              <Badge key={d} variant="secondary" className="text-sm px-3 py-1">
                {d}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500 max-w-3xl">
            Sectores concernidos (a título indicativo): administraciones, servicios de cooperación,
            organizaciones regionales o internacionales, ONG, proyectos de desarrollo, relaciones
            institucionales, gabinetes de análisis y funciones de apoyo diplomático, según los
            concursos y criterios propios de cada empleador.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Desea saber más sobre la carrera de Relaciones y Asuntos Internacionales?
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
