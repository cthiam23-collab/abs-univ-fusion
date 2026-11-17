import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import {
  Briefcase,
  Users,
  FileText,
  Globe,
  Compass,
  Network,
  Handshake,
  Target,
  Building2,
  Landmark,
  Zap,
  HeartHandshake,
  Rocket,
  Linkedin,
  MessagesSquare,
  Presentation,
  MapPin,
  Phone,
  Mail,
  TrendingUp,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Servicios de carrera | ABS",
  description: "Acompañamiento a la empleabilidad de los estudiantes de ABS: orientación, pasantías, talleres y puesta en contacto con los empleadores.",
  path: "/career-services",
  locale: "es",
})

const coachingSteps = [
  {
    icon: Compass,
    step: "Etapa 1",
    title: "Explorar",
    description:
      "Haga balance de sus fortalezas, sus aspiraciones y los oficios que contratan en Malí y en África Occidental. Nuestros consejeros le ayudan a definir un proyecto profesional claro y realista, alineado con su carrera — gestión, finanzas, cadena de suministro o ingeniería minera.",
  },
  {
    icon: FileText,
    step: "Etapa 2",
    title: "Preparar",
    description:
      "Un CV impactante, una carta de motivación convincente, un expediente de candidatura cuidado: trabajamos con usted todos los soportes que marcan la diferencia ante los reclutadores, incluidas las candidaturas internacionales.",
  },
  {
    icon: Network,
    step: "Etapa 3",
    title: "Crear red de contactos",
    description:
      "Conozca a profesionales en nuestros foros, conferencias y encuentros con empresas. En ABS, la red — antiguos alumnos, docentes, socios — es su primera puerta de acceso al mercado laboral.",
  },
  {
    icon: Target,
    step: "Etapa 4",
    title: "Conseguir el puesto",
    description:
      "Simulaciones de entrevista, coaching individual y acceso a nuestro tablero de pasantías y ofertas de empleo: hasta la firma de su contrato, nunca está solo en su búsqueda.",
  },
]

const sectors = [
  {
    icon: Landmark,
    title: "Bancos y Microfinanzas",
    description:
      "El sector bancario malí y regional — bancos comerciales, instituciones de microfinanzas, fintechs — contrata regularmente a nuestros titulados en finanzas, contabilidad y MBA.",
  },
  {
    icon: Building2,
    title: "Minas y Energía",
    description:
      "El oro, las canteras y los proyectos energéticos son motores de la economía malí. Nuestros programas de Ingeniería Minera y de Cadena de Suministro preparan para las carreras de este sector exigente.",
  },
  {
    icon: Zap,
    title: "Telecomunicaciones",
    description:
      "Los operadores móviles y proveedores de servicios digitales buscan perfiles en gestión, marketing y logística — competencias que ABS forma con un 80 % de práctica.",
  },
  {
    icon: HeartHandshake,
    title: "ONG y Organizaciones internacionales",
    description:
      "Los programas de las Naciones Unidas, las ONG, las agencias de desarrollo y los proyectos bilaterales ofrecen pasantías y empleos en gestión de proyectos, finanzas y contratación pública.",
  },
  {
    icon: Rocket,
    title: "Startups y Emprendimiento",
    description:
      "El ecosistema emprendedor de Bamako se organiza. Para quienes quieren crear, ABS acompaña la idea, el plan de negocios y los primeros encuentros con inversores.",
  },
]

const workshops = [
  {
    icon: FileText,
    title: "Taller de CV y Carta de motivación",
    description:
      "Construya un CV que supere los filtros y ponga en valor sus proyectos prácticos, sus pasantías y sus competencias en inglés.",
    href: "/career-services/resume-workshop",
    cta: "Participar en el taller",
  },
  {
    icon: MessagesSquare,
    title: "Preparación para entrevistas",
    description:
      "Entrevistas simuladas grabadas, preguntas clásicas de recursos humanos, casos prácticos: llegue a la entrevista real con la seguridad de quien ya se ha entrenado.",
    href: "/career-services/counseling",
    cta: "Reservar un coaching",
  },
  {
    icon: Linkedin,
    title: "LinkedIn e imagen profesional",
    description:
      "Cree un perfil que trabaje para usted y desarrolle su visibilidad ante los reclutadores malienses e internacionales.",
    href: "/career-services/events",
    cta: "Ver el calendario",
  },
  {
    icon: Presentation,
    title: "Búsqueda estructurada de pasantías",
    description:
      "Método completo: focalización de las empresas, seguimiento, convenio de pasantía, valorización de la experiencia al final de la misión.",
    href: "/career-services/job-board",
    cta: "Explorar el tablero de empleo",
  },
]

const stats = [
  { value: "80 %", label: "de pedagogía práctica, alineada con las necesidades reales de los empleadores" },
  { value: "21", label: "programas de Licenciatura y Máster abiertos al empleo" },
  { value: "5", label: "grandes sectores socios: banca, minería, telecomunicaciones, ONG, startups" },
  { value: "1", label: "coach dedicado a cada proyecto profesional a partir de la Licenciatura" },
]

export default function CareerServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus de la Universidad African Business School en Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">
                Career Services — ABS
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Su futuro profesional se construye desde el primer día
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                En la African Business School, la empleabilidad no es un servicio accesorio: es una estrategia.
                Coaching personalizado, preparación para las pasantías y el empleo, red profesional y apertura
                internacional — todo está pensado para que cada estudiante salga de ABS con un oficio, no solo con un
                diploma.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/career-services/job-board">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    Consultar el tablero de empleo
                  </Button>
                </Link>
                <Link href="/career-services/counseling">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900"
                  >
                    Solicitar una cita
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-950 py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{s.value}</p>
              <p className="text-sm text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="accompagnement" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="accompagnement">Acompañamiento</TabsTrigger>
            <TabsTrigger value="stages-emploi">Pasantías y empleo</TabsTrigger>
            <TabsTrigger value="ateliers">Talleres</TabsTrigger>
            <TabsTrigger value="entreprises">Empresas socias</TabsTrigger>
          </TabsList>

          {/* Accompagnement */}
          <TabsContent value="accompagnement">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Un recorrido de coaching en 4 etapas</h2>
              <p className="text-slate-600 text-lg">
                Desde el primer semestre hasta la entrega de diplomas, el Career Center de ABS le acompaña según un
                método probado: explorar, preparar, crear red de contactos, conseguir el puesto.
              </p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-100" aria-hidden="true" />
              <div className="space-y-8">
                {coachingSteps.map((s, i) => (
                  <div key={i} className={`md:flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                    <Card className="md:w-[46%] border-t-4 border-t-cyan-400 shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                            <s.icon className="h-6 w-6 text-cyan-400" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">{s.step}</p>
                            <CardTitle className="text-blue-900">{s.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600">{s.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/career-services/counseling">
                <Button className="bg-blue-700 hover:bg-blue-900">Descubrir la asesoría individual</Button>
              </Link>
              <Link href="/student-resources/career-services">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Recursos para estudiantes
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Stages & emploi */}
          <TabsContent value="stages-emploi">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Pasantías y primeros empleos: los sectores que contratan</h2>
              <p className="text-slate-600 text-lg">
                Nuestro tablero de empleo centraliza las ofertas de pasantías y empleos transmitidas por las empresas
                socias de ABS. Estos son los cinco grandes sectores donde nuestros estudiantes encuentran sus
                oportunidades.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {sectors.map((s, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                        <s.icon className="h-5 w-5 text-blue-700" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">{s.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
              <Card className="bg-blue-900 text-white border-0 flex flex-col justify-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Briefcase className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Ofertas en línea de forma permanente</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Pasantías académicas, contratos profesionales, misiones freelance: consulte los anuncios, deposte
                    su CV y siga sus candidaturas.
                  </p>
                  <Link href="/career-services/job-board">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold w-full">
                      Acceder al tablero de empleo
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/career-services/global-careers">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Globe className="mr-2 h-4 w-4" />
                  Carreras internacionales
                </Button>
              </Link>
              <Link href="/career-services/events">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Users className="mr-2 h-4 w-4" />
                  Eventos de carrera
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Ateliers */}
          <TabsContent value="ateliers">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Talleres prácticos durante todo el año</h2>
              <p className="text-slate-600 text-lg">
                Cada semestre, el Career Center organiza talleres breves y concretos. Venga con su borrador de CV o
                con sus dudas sobre una entrevista: se irá con una versión mejorada y un plan de acción.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {workshops.map((w, i) => (
                <Card key={i} className="border-l-4 border-l-blue-700 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                        <w.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <CardTitle className="text-blue-900 text-lg">{w.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{w.description}</p>
                    <Link href={w.href}>
                      <Button variant="outline" size="sm" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                        {w.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-cyan-50 border-cyan-400/40">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <TrendingUp className="h-8 w-8 text-blue-700 shrink-0" />
                  <p className="text-blue-900 flex-1">
                    <strong>Consejo de ABS:</strong> participe al menos en un taller por semestre y en un evento de
                    empresas al año. Es el ritmo que siguen los titulados que consiguen empleo más rápido.
                  </p>
                  <Link href="/career-services/resume-workshop">
                    <Button className="bg-blue-700 hover:bg-blue-900 shrink-0">Ver los talleres de CV</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Entreprises partenaires */}
          <TabsContent value="entreprises">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Un puente directo entre la escuela y la empresa</h2>
              <p className="text-slate-600 text-lg">
                Bancos, sociedades mineras, operadores de telecomunicaciones, ONG e instituciones regionales: nuestros
                socios intervienen en clase, acogen pasantes y contratan a nuestros titulados. ¿Es usted una
                organización? Únase a la red.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              <Card className="border-t-4 border-t-cyan-400">
                <CardHeader>
                  <CardTitle className="text-blue-900">Contratar en ABS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600 mb-6">
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Publique sus ofertas de pasantías y empleos en nuestro tablero de empleo, gratuitamente.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Participe en los foros de empresas y en las jornadas de reclutamiento en el campus de
                      Hamdallaye.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Acceda a bolsas de talento específicas: MBA, Finanzas e Ingeniería Financiera, Cadena de
                      Suministro, Ingeniería Minera.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Coconstruya proyectos pedagógicos con la vertiente del 80 % práctico de nuestros programas.
                    </li>
                  </ul>
                  <Link href="/employers/recruit">
                    <Button className="bg-blue-700 hover:bg-blue-900">
                      <Handshake className="mr-2 h-4 w-4" />
                      Servicios de reclutamiento
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-blue-950 text-white border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Por qué los empleadores confían en nosotros</h3>
                  <ul className="space-y-3 text-slate-300 text-sm mb-6">
                    <li>Estudiantes formados según la norma LMD/ECTS, comparables a nivel internacional.</li>
                    <li>80 % de práctica: casos de empresa, estudios de terreno, simulaciones.</li>
                    <li>El inglés integrado desde la Licenciatura mediante la English Academy — una ventaja en los grupos regionales.</li>
                    <li>Valores de integración y unidad africana, muy apreciados por la dirección general, la señora Sokhna M. Thiam.</li>
                  </ul>
                  <Link href="/academics/programs">
                    <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
                      Nuestros programas
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para llevar su carrera al siguiente nivel?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Contacte con el Career Center de la African Business School — Hamdallaye ACI 2000, Bamako — o consulte
            desde ahora las ofertas de pasantías y empleo.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/career-services/job-board">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                Ver las ofertas
              </Button>
            </Link>
            <Link href="/employers/recruit">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Soy un empleador
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.address.formatted}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.email}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
