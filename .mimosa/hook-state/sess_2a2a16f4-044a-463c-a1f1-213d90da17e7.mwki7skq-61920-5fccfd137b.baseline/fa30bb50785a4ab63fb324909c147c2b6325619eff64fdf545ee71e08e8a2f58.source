import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  FileText,
  HandHeart,
  Handshake,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UserCheck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Becas y reducciones | ABS",
  description: "Descubra los programas de becas y de reducciones de las tasas de matrícula de la ABS — African Business School: criterios de atribución, condiciones de mantenimiento y procedimiento de candidatura.",
  path: "/financial-aid",
  locale: "es",
})

const CONTACT_EMAIL = "abs.mail1290@gmail.com"

const dispositifs = [
  {
    icon: Trophy,
    title: "Beca de excelencia",
    description:
      "Destinada a los candidatos con resultados académicos notables.",
  },
  {
    icon: HandHeart,
    title: "Media beca",
    description:
      "Reducción del 50 % de las tasas de matrícula, concedida según los criterios definidos por la Dirección General.",
  },
  {
    icon: HeartHandshake,
    title: "Beca social",
    description:
      "Destinada a los candidatos que acrediten una situación social o financiera particular.",
  },
  {
    icon: Sparkles,
    title: "Reducción excepcional",
    description:
      "Concedida en el marco de campañas de captación o de dispositivos institucionales específicos.",
  },
  {
    icon: Star,
    title: "Beca al mérito",
    description:
      "Destinada a recompensar los resultados académicos, el compromiso y el comportamiento ejemplar de los estudiantes.",
  },
]

const criteresAttribution = [
  "Los resultados escolares y universitarios del candidato ;",
  "El mérito y el potencial académico ;",
  "La motivación y el proyecto profesional ;",
  "La situación social o financiera, cuando sea aplicable ;",
  "La participación en los concursos de becas organizados por ABS ;",
  "El respeto de los compromisos académicos, administrativos y disciplinarios.",
]

const conditionsMaintien = [
  "Respetar el reglamento interno de ABS ;",
  "Asistir regularmente a las clases y a las actividades pedagógicas ;",
  "Respetar los horarios y las obligaciones académicas ;",
  "Obtener resultados satisfactorios ;",
  "Participar en las actividades institucionales obligatorias ;",
  "Respetar los compromisos contenidos en su convenio o en su carta de atribución.",
]

const procedureCandidature = [
  "Presentar un expediente de candidatura ;",
  "Aportar los documentos justificativos solicitados ;",
  "Participar, en su caso, en el concurso de selección ;",
  "Someterse a la evaluación del expediente ;",
  "Esperar la notificación oficial de la decisión de la Dirección General.",
]

const validiteCampagne = [
  "El número de becas disponibles, en su caso ;",
  "Los porcentajes de reducción concedidos ;",
  "Las ramas y los niveles concernidos ;",
  "Las fechas de apertura y de cierre de las candidaturas ;",
  "Los documentos justificativos exigidos ;",
  "Las condiciones de mantenimiento y de renovación ;",
  "Las posibilidades o prohibiciones de acumulación con otras reducciones.",
]

const dispositionsImportantes = [
  "Una solicitud de beca no garantiza su obtención.",
  "Ninguna beca o reducción se considera adquirida antes de la notificación oficial de la Dirección General.",
  "Las becas y reducciones no son automáticamente acumulables.",
  "Las ventajas concedidas son personales y están sujetas a las condiciones precisadas en la decisión de atribución.",
  "Las tasas complementarias (apertura de expediente, uniforme, viaje de estudios y defensa de proyecto) no están automáticamente cubiertas por las becas, salvo decisión expresa de la Dirección General.",
]

export default function FinancialAidPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-cyan-400 text-cyan-300">
              Año académico 2026–2027
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Becas y reducciones</h1>
            <p className="text-lg text-slate-200">
              En el marco de su política de promoción de la excelencia académica, de la igualdad de oportunidades
              y de la accesibilidad a la educación superior, la ABS — African Business School
              pone en marcha diferentes programas de becas y de reducciones sobre las tasas de matrícula.
            </p>
            <p className="mt-4 text-slate-300">
              Estos programas tienen como objetivo fomentar el mérito, apoyar a los estudiantes motivados y acompañar a las familias
              en la financiación de los estudios superiores.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Dispositifs */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">
              Los programas de apoyo financiero
            </h2>
            <p className="text-lg text-slate-600">
              ABS puede proponer varias formas de acompañamiento :
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dispositifs.map((item) => (
              <Card key={item.title} className="h-full border-t-4 border-t-blue-700 shadow-md">
                <CardHeader>
                  <item.icon className="mb-2 h-9 w-9 text-blue-700" />
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            ABS puede conceder becas de estudios, medias becas u otras reducciones según los criterios
            de selección y las decisiones de la Dirección General. La atribución de una beca está sujeta a
            condiciones académicas, disciplinarias y administrativas precisadas en un documento de compromiso.
          </p>
        </div>
      </section>

      {/* 2-5. Critères, maintien, procédure, validité */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Landmark className="h-6 w-6" /> Criterios de atribución
                </CardTitle>
                <CardDescription>
                  La atribución de una beca o de una reducción puede tener en cuenta los siguientes elementos :
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {criteresAttribution.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <UserCheck className="h-6 w-6" /> Condiciones de mantenimiento de la beca
                </CardTitle>
                <CardDescription>
                  Los beneficiarios de una beca o de una media beca se comprometen a :
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {conditionsMaintien.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  El incumplimiento de estos compromisos puede conllevar una revisión, una suspensión o un retiro de
                  la ventaja concedida, según las disposiciones aplicables.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <FileText className="h-6 w-6" /> Procedimiento de candidatura
                </CardTitle>
                <CardDescription>Los candidatos que deseen beneficiarse de una beca deben :</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {procedureCandidature.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <CalendarCheck className="h-6 w-6" /> Validez y condiciones particulares
                </CardTitle>
                <CardDescription>
                  Cada campaña de becas es objeto de una comunicación que precisa :
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {validiteCampagne.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Dispositions importantes */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-blue-900">
              <ShieldCheck className="h-8 w-8 text-blue-700" /> Disposiciones importantes
            </h2>
            <ul className="mb-10 space-y-3">
              {dispositionsImportantes.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-700"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Notre engagement */}
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-8 text-center">
              <Handshake className="mx-auto mb-4 h-10 w-10 text-blue-700" />
              <h3 className="mb-4 text-2xl font-bold text-blue-900">Nuestro compromiso</h3>
              <p className="mb-3 text-slate-700">
                En ABS, creemos que el potencial, el mérito y la determinación deben poder abrir las puertas
                de la educación superior.
              </p>
              <p className="text-slate-700">
                Una beca es una oportunidad, pero también un compromiso consigo mismo, con la institución y
                con su futuro.
              </p>
              <p className="mt-6 text-lg font-semibold text-blue-900">
                La excelencia se merece, las oportunidades se construyen y el futuro se prepara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Su futuro empieza aquí</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            ¿Desea solicitar una beca o saber más sobre los programas en vigor ? Contacte con nuestra
            administración para obtener las informaciones oficiales y los consejos necesarios para su expediente.
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-sm text-slate-200 sm:flex-row">
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-cyan-400" /> WhatsApp : {WHATSAPP_NUMBER}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> {CONTACT_EMAIL}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" /> Bamako – Hamdallaye ACI 2000
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <a href={WHATSAPP_URL}>Únase a la comunidad ABS</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/admissions">Descubrir las admisiones</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/contact">Contactarnos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
