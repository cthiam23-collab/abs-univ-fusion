import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BookMarked,
  Building2,
  Calculator,
  FileText,
  GraduationCap,
  Landmark,
  Megaphone,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  UserCog,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Dirección y gobernanza | ABS",
  description: "La gobernanza de African Business School SARL: Gerente estatutaria, Rector, Director de Estudios, Registrador y servicios, en el marco del Plan Estratégico ABS 2035.",
  path: "/about/governance",
  locale: "es",
})

// Misiones estratégicas de la Gerente estatutaria (fuente: ficha de función ABS/GOUV/FP-001, selección).
const ceoMissions = [
  {
    icon: Target,
    title: "Liderazgo y estrategia institucional",
    points: [
      "Definir la visión y las orientaciones estratégicas de ABS",
      "Elaborar y dirigir el Plan Estratégico ABS 2035",
      "Posicionar a ABS como una institución panafricana de referencia",
      "Garantizar la coherencia entre las ambiciones estratégicas y los recursos disponibles",
    ],
  },
  {
    icon: Scale,
    title: "Representación legal y gobernanza",
    points: [
      "Asegurar la dirección ejecutiva de la sociedad y representarla legalmente ante terceros",
      "Firmar los contratos y convenios que correspondan a sus poderes, en el marco del AUSCGIE y de los estatutos",
      "Velar por la regularidad de las formalidades jurídicas, administrativas e institucionales",
    ],
  },
  {
    icon: GraduationCap,
    title: "Desarrollo académico y calidad",
    points: [
      "Definir las orientaciones generales de desarrollo académico, en coordinación con el Rectorado",
      "Supervisar la evolución de la oferta de formación y apoyar la mejora continua de la calidad pedagógica",
      "Fomentar los acuerdos académicos y científicos",
    ],
  },
  {
    icon: Calculator,
    title: "Dirección financiera y económica",
    points: [
      "Supervisar la elaboración del presupuesto anual y seguir la situación de tesorería",
      "Examinar los estados financieros y los informes contables",
      "Velar por el control de los gastos y por la separación de las funciones de autorización, de pago, de registro y de control",
    ],
  },
  {
    icon: Building2,
    title: "Convenios, emprendimiento e innovación",
    points: [
      "Desarrollar los acuerdos estratégicos y las relaciones con las empresas",
      "Apoyar el Career & Corporate Relations Center y desarrollar ABS Startup Lab",
      "Desarrollar las relaciones con las redes panafricanas e internacionales",
    ],
  },
  {
    icon: Sparkles,
    title: "Transformación digital y desarrollo sostenible",
    points: [
      "Supervisar la transformación digital y la digitalización de los procesos administrativos",
      "Promover el uso responsable de la inteligencia artificial",
      "Desarrollar los proyectos vinculados a la universidad verde y apoyar las iniciativas que contribuyen a los Objetivos de Desarrollo Sostenible",
    ],
  },
]

// Cadena de gobernanza (dependencias procedentes de las fichas de puesto).
const governanceChain = [
  {
    icon: Landmark,
    title: "Directora General",
    subtitle: "Gerente estatutaria — Managing Director & CEO",
    description:
      "Primera autoridad ejecutiva de la sociedad. Asegura la dirección general, la representación legal, el pilotaje estratégico y la gestión operativa, y supervisa el conjunto de las direcciones, departamentos y servicios.",
    rattachement: "Cima de la cadena: nombrada según los estatutos y las decisiones de los socios",
  },
  {
    icon: GraduationCap,
    title: "Rector",
    subtitle: "Primera autoridad académica",
    description:
      "Garantiza la calidad, la pertinencia y el rendimiento académico del establecimiento, define las grandes orientaciones académicas en coherencia con el Plan Estratégico ABS 2035 y supervisa al Director de Estudios así como a los responsables de ramas.",
    rattachement: "Dependencia jerárquica: Directora General",
  },
  {
    icon: BookMarked,
    title: "Director de Estudios",
    subtitle: "Organización pedagógica",
    description:
      "Responsable operativo de la organización, de la coordinación y del seguimiento de las actividades pedagógicas. Asegura la ejecución de las orientaciones académicas definidas por el Rector y el vínculo operativo con los responsables de ramas, los docentes, la secretaría académica y los estudiantes.",
    rattachement: "Dependencia jerárquica: Rector · Dependencia institucional: Dirección General",
  },
  {
    icon: UserCog,
    title: "Registrador (Registrar)",
    subtitle: "Administración académica y secretaría académica",
    description:
      "Responsable de la administración académica y de la gestión centralizada de la matrícula. Garante de la trazabilidad administrativa del itinerario de cada estudiante, desde la candidatura y la admisión hasta la obtención del diploma.",
    rattachement: "Dependencia jerárquica: Dirección General · Dependencia funcional: Rectorado",
  },
  {
    icon: Megaphone,
    title: "Responsable de Marketing y Comunicación",
    subtitle: "Imagen, visibilidad y captación",
    description:
      "Concibe y pone en marcha la estrategia de marketing y de comunicación del establecimiento, desarrolla su visibilidad y dirige las campañas de captación de estudiantes.",
    rattachement: "Dependencia jerárquica: Directora General",
  },
  {
    icon: Calculator,
    title: "Contabilidad, caja y servicios administrativos",
    subtitle: "Gestión administrativa y financiera",
    description:
      "El Contable asegura una contabilidad fiable y regular según el referencial aplicable en Mali (SYSCOHADA revisado); el Cajero garantiza una gestión segura y trazable de los cobros y pagos autorizados.",
    rattachement: "Dependencia jerárquica: Directora General",
  },
]

// Servicios supervisados por la Dirección General (ficha de función de la Gerente estatutaria, §7).
const supervisedFunctions = [
  { icon: GraduationCap, name: "Rectorado", domain: "Dirección académica y científica" },
  { icon: BookMarked, name: "Dirección de Estudios", domain: "Organización pedagógica" },
  { icon: UserCog, name: "Registrador", domain: "Administración académica" },
  { icon: Calculator, name: "Contabilidad y Finanzas", domain: "Gestión contable y financiera" },
  { icon: Building2, name: "Caja", domain: "Cobros y pagos autorizados" },
  { icon: Megaphone, name: "Marketing y Comunicación", domain: "Imagen, visibilidad y captación" },
  { icon: Building2, name: "Career & Corporate Relations Center", domain: "Relaciones con empresas e inserción" },
  { icon: Sparkles, name: "ABS Startup Lab", domain: "Innovación y emprendimiento" },
]

export default function GovernancePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image3.jpg"
          alt="La dirección de ABS en una sesión de trabajo con autoridades oficiales"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Quiénes somos · Gobernanza</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Dirección y gobernanza
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            La Dirección General asegura la orientación institucional y el desarrollo de ABS. Las
            responsabilidades académicas, administrativas y pedagógicas se ejercen conforme a
            la organización interna y a los procedimientos vigentes.
          </p>
        </div>
      </section>

      {/* Cadre juridique */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Marco jurídico</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Una sociedad SARL regida por el derecho OHADA
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              ABS — African Business School SARL es una Sociedad de Responsabilidad Limitada (SARL), cuya
              sede social se encuentra en Bamako, en Mali. La Gerente estatutaria ejerce sus funciones conforme a los estatutos
              de la sociedad, al Acto Uniforme de la OHADA relativo al derecho de las sociedades comerciales y del agrupamiento
              de interés económico (AUSCGIE), a las disposiciones aplicables en Mali y a las decisiones debidamente
              adoptadas por los socios.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Conforme a los artículos 323 y siguientes del AUSCGIE, la SARL es administrada por uno o varios
              gerentes, personas físicas, nombrados en los estatutos o por un acto posterior. La Gerente estatutaria
              asegura la representación legal de la sociedad y ejerce los poderes de gestión y de representación
              previstos por los textos aplicables; los poderes expresamente reservados a los socios por la ley o los
              estatutos permanecen bajo su competencia.
            </p>
          </div>
          <Card className="border-slate-200">
            <CardHeader>
              <FileText className="h-9 w-9 text-blue-700" aria-hidden="true" />
              <CardTitle className="text-xl text-slate-900">Identificación de la función</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {[
                ["Denominación jurídica", "Gerente estatutaria"],
                ["Título ejecutivo e institucional", "Managing Director & Chief Executive Officer"],
                ["Institución", "ABS — African Business School SARL"],
                ["Forma jurídica", "Sociedad de Responsabilidad Limitada (SARL)"],
                ["Posición jerárquica", "Primera autoridad ejecutiva de la sociedad"],
                ["Sede social", "Bamako, Mali"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-0.5 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
                  <span className="font-medium text-slate-800">{value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Finalité et ambition : la Gérante statutaire */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Finalidad de la función</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              La Gerente estatutaria, garante de la coherencia institucional
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              La Gerente estatutaria asegura la dirección general, la representación legal, el pilotaje estratégico y
              la gestión operativa de la ABS — African Business School SARL. Garantiza la coherencia
              entre la visión del establecimiento, sus obligaciones reglamentarias, sus recursos, sus ambiciones de
              desarrollo y sus resultados. Dirige esta ambición en el marco del Plan Estratégico ABS 2035,
              que tiene como objetivo posicionar a ABS como una institución reconocida por la excelencia académica y
              profesional, la calidad y la pertinencia de sus formaciones, la innovación pedagógica y
              tecnológica y la profesionalización de sus titulados.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ceoMissions.map(({ icon: Icon, title, points }) => (
              <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <span className="mb-2 inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="size-6 text-cyan-700" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-blue-700" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chaîne de gouvernance */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Organización</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">La cadena de gobernanza</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Las dependencias jerárquicas y funcionales se detallan en el organigrama validado de ABS. Las
            funciones presentadas a continuación se basan en las fichas de puesto y de función oficiales;
            solo se muestran las funciones, y los nombres, biografías y fotografías de los responsables se
            publican con su autorización de difusión.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <ol className="relative space-y-8 border-l-2 border-blue-200 pl-8">
            {governanceChain.map(({ icon: Icon, title, subtitle, description, rattachement }) => (
              <li key={title} className="relative">
                <span
                  className="absolute -left-[2.85rem] flex size-9 items-center justify-center rounded-full bg-blue-700 text-white ring-4 ring-white"
                  aria-hidden="true"
                >
                  <Icon className="size-4" />
                </span>
                <Card className="border-slate-200 transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900">{title}</h3>
                    <p className="text-sm font-medium text-cyan-700">{subtitle}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">{rattachement}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services supervisés */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Funciones y servicios supervisados</h2>
            <p className="mt-3 leading-7 text-slate-600">
              La Gerente estatutaria asegura la supervisión general de las siguientes funciones y servicios.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supervisedFunctions.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.name} className="border-slate-200 text-center transition-shadow hover:shadow-lg">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-blue-700">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-bold text-blue-900">{service.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{service.domain}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center text-sm leading-6 text-slate-600">
            Mención institucional: las informaciones relativas a autorizaciones, habilitaciones, reconocimientos o
            acreditaciones se comunican únicamente sobre la base de documentos oficiales vigentes. Para cualquier
            precisión, rogamos contactar con la administración de ABS.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Saber más</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Descubra la identidad, la misión y los valores de la institución, así como el equipo y la
            gobernanza académica.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/about/faculty-staff">
                Equipo y gobernanza académica <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about">¿Quiénes somos?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
