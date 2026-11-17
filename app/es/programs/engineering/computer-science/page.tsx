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
  Cpu,
  GitBranch,
  GraduationCap,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licenciatura en Ingeniería Informática | ABS",
  description:
    "Licenciatura en Ingeniería Informática en Bamako: algoritmia, programación, desarrollo web y móvil, bases de datos, sistemas, redes y ciberseguridad. 3 años, 6 semestres, 180 créditos. Tarifa anual indicativa 1 025 000 FCFA (confirmación escrita 2026-2027 requerida).",
  path: "/programs/engineering/computer-science",
  locale: "es",
})

const competences = [
  {
    code: "II01",
    competence: "Resolver un problema mediante algoritmia",
    resultat: "Formalizar una solución y traducirla en un programa.",
  },
  {
    code: "II02",
    competence: "Desarrollar una aplicación",
    resultat: "Concebir, codificar, probar y documentar una aplicación.",
  },
  {
    code: "II03",
    competence: "Gestionar datos",
    resultat: "Modelizar una base y ejecutar consultas adecuadas.",
  },
  {
    code: "II04",
    competence: "Comprender sistemas y redes",
    resultat: "Describir una arquitectura y diagnosticar incidentes sencillos.",
  },
  {
    code: "II05",
    competence: "Asegurar los desarrollos",
    resultat: "Identificar los riesgos habituales y aplicar las buenas prácticas.",
  },
  {
    code: "II06",
    competence: "Trabajar en modo proyecto",
    resultat: "Utilizar un repositorio de código, seguir las tareas y presentar una demostración.",
  },
]

const enseignements = [
  "Matemáticas aplicadas y lógica",
  "Algoritmia y programación",
  "Python y/o Java según la malla curricular",
  "Desarrollo web: HTML, CSS, JavaScript y frameworks según recursos",
  "Bases de datos y SQL",
  "Sistemas operativos y redes",
  "Ingeniería de software, pruebas y aseguramiento de la calidad",
  "Desarrollo móvil según la malla curricular",
  "Ciberseguridad y protección de datos",
  "Datos e introducción progresiva a la IA",
  "Inglés técnico en cada semestre",
  "Proyectos tutorizados, desarrollo personal e inmersión",
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

const axes = [
  {
    icon: Cpu,
    titre: "Ingeniería de software",
    texte: "Concepción, programación, pruebas y calidad de las aplicaciones.",
  },
  {
    icon: Smartphone,
    titre: "Desarrollo web y móvil",
    texte: "Interfaces web, aplicaciones conectadas y servicios digitales.",
  },
  {
    icon: GitBranch,
    titre: "Inteligencia artificial y ciencia de datos",
    texte: "Iniciación progresiva a la IA, a los datos y a su explotación.",
  },
  {
    icon: Lock,
    titre: "Ciberseguridad",
    texte: "Protección de los sistemas, de los datos y buenas prácticas de seguridad.",
  },
]

export default function ComputerSciencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Polo 2 — Ingeniería informática y tecnologías digitales
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licenciatura en Ingeniería Informática
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Dominar las tecnologías. Concebir las innovaciones. Reforzar la soberanía digital de
            África.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Formar especialistas capaces de concebir, desarrollar, probar y mantener soluciones
            digitales adaptadas a las necesidades de las organizaciones, integrando al mismo tiempo
            la seguridad, la calidad del software y las evoluciones de la inteligencia artificial. La
            base científica — matemáticas, lógica, algoritmia, estructuras de datos, sistemas, redes
            y bases de datos — abre una especialización progresiva hacia la ingeniería de software,
            el web y móvil, la IA, la ciencia de datos y la ciberseguridad.
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
                      Concebir e implementar soluciones informáticas fiables, útiles y seguras.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objetivos generales</p>
                      <ul className="space-y-1.5">
                        <li>
                          Adquirir las bases de la algoritmia, de la programación y de los sistemas.
                        </li>
                        <li>Desarrollar aplicaciones y bases de datos.</li>
                        <li>Aplicar métodos de prueba, de ciberseguridad y de gestión de proyectos.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objetivos específicos</p>
                      <ul className="space-y-1.5">
                        <li>Escribir, documentar y probar programas.</li>
                        <li>Crear interfaces web y aplicaciones conectadas a datos.</li>
                        <li>
                          Administrar los entornos de desarrollo y comprender las redes.
                        </li>
                        <li>
                          Realizar un proyecto informático en equipo y presentar sus decisiones
                          técnicas.
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
                        Acceso a la Licenciatura: Baccalauréat o título equivalente; se recomienda un
                        perfil científico para facilitar los aprendizajes matemáticos y algorítmicos.
                        Condiciones definitivas por confirmar en el procedimiento de admisión de ABS.
                        Máster: Licenciatura pertinente o equivalente y expediente según el itinerario
                        abierto.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        Por confirmar antes de la publicación: denominación oficial del diploma,
                        tecnologías enseñadas, laboratorios, equipamientos y especialización exacta
                        en IA.
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
                        Evaluaciones prácticas en laboratorio, ejercicios, controles, proyectos,
                        exámenes y defensa. Los criterios versan, entre otros, sobre el funcionamiento,
                        la seguridad, la calidad del código, la documentación y la capacidad de
                        explicación.
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
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Ejes de especialización progresiva</CardTitle>
                    <CardDescription>
                      Tras una base científica y técnica común, la especialización se construye
                      progresivamente según los recursos y la malla curricular validada.
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
                      Las herramientas de software citadas en la malla curricular deben estar
                      instaladas y ser accesibles para los estudiantes; su disponibilidad efectiva se
                      verifica antes de la publicación. La adscripción de un Máster en Inteligencia
                      Artificial, Redes y Telecomunicaciones debe ser validada antes de publicar una
                      promesa de especialización.
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
                      Aplicación web o móvil, API, base de datos, automatización, prototipo de IA o
                      auditoría de seguridad pedagógica. Depósito del código, documentación,
                      demostración y defensa.
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
                      Talleres de programación, visitas o intercambios con servicios informáticos,
                      proyectos reales supervisados y práctica en una empresa o servicio digital,
                      según disponibilidad y convenio.
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
              Docentes en programación, sistemas, redes y datos; laboratorio informático con
              ordenadores, acceso a red, herramientas de desarrollo y entorno de control de
              versiones. La disponibilidad efectiva de los equipamientos debe ser verificada antes de
              la publicación.
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
            Perspectivas indicativas, según las competencias adquiridas y la continuación de la
            especialización — las salidas profesionales son perspectivas, no garantías de empleo:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Desarrollador junior",
              "Integrador web",
              "Técnico de soporte",
              "Asistente de administrador de sistemas/redes",
              "Probador de software junior",
              "Analista de datos principiante",
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
            ¿Desea saber más sobre la carrera de Ingeniería Informática?
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
