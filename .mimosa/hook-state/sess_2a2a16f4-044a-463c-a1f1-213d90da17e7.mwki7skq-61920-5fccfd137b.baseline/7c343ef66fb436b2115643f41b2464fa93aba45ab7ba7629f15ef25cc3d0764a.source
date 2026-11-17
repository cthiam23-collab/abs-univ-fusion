import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  FileText,
  FolderOpen,
  GraduationCap,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  UserCheck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Admisiones e inscripciones | ABS",
  description: "Consulte las etapas de candidatura y obtenga las condiciones de acceso, los documentos y las tasas oficiales de ABS.",
  path: "/admissions",
  locale: "es",
})

const CONTACT_EMAIL = "abs.mail1290@gmail.com"

const steps = [
  {
    title: "Descubrir las formaciones abiertas",
    text: "Consultar la oferta de formación de ABS e identificar el programa deseado (Licencia (grado) o Máster), verificando que el itinerario esté efectivamente abierto a las admisiones para el curso académico correspondiente.",
  },
  {
    title: "Informarse sobre las condiciones de admisión",
    text: "Tomar contacto con el Servicio de Matrícula y Admisiones a fin de verificar las condiciones de acceso, los prerrequisitos académicos, las tasas de formación y la lista oficial de los documentos a presentar.",
  },
  {
    title: "Confeccionar y presentar su expediente de candidatura",
    text: "Reunir los documentos requeridos y presentar el expediente de candidatura ante la administración de ABS, conforme a las modalidades y a los plazos comunicados.",
  },
  {
    title: "Hacer un seguimiento de su candidatura",
    text: "La administración procede a la verificación de los documentos y al examen del expediente académico. El candidato permanece disponible para aportar cualquier documento complementario o cualquier información necesaria para la instrucción de su solicitud.",
  },
  {
    title: "Recibir la decisión de admisión y finalizar su inscripción",
    text: "Tras la notificación de la decisión de admisión, el candidato retenido realiza las formalidades administrativas y financieras: pago de las tasas requeridas, validación de su inscripción y retiro de los documentos administrativos correspondientes.",
  },
  {
    title: "Preparar su incorporación e integrarse en la comunidad ABS",
    text: "Tras la confirmación de su inscripción, el nuevo estudiante recibe las informaciones relativas al inicio del curso académico, al calendario de las clases, a la organización pedagógica, al reglamento interno, al uniforme y a las actividades de integración.",
  },
]

const stepIcons = [Search, Phone, FolderOpen, FileText, BadgeCheck, GraduationCap]

const piecesL1 = [
  "Una copia del documento de identidad o del pasaporte en vigor ;",
  "Una copia del diploma de Bachillerato o de un diploma reconocido como equivalente ;",
  "Un certificado de aprobación del Bachillerato, en su caso ;",
  "Los certificados de notas del Bachillerato ;",
  "Dos fotografías recientes tipo carnet ;",
  "Una partida de nacimiento ;",
  "El formulario oficial de candidatura debidamente cumplimentado ;",
  "Cualquier documento complementario solicitado por la administración.",
]

const piecesL2L3 = [
  "Una copia del documento de identidad o del pasaporte ;",
  "Una copia del Bachillerato ;",
  "Los diplomas o certificados universitarios obtenidos ;",
  "Los certificados de notas de los años universitarios anteriores ;",
  "Los certificados de validación de los semestres, en su caso ;",
  "Dos fotografías recientes tipo carnet ;",
  "Un currículum vitae ;",
  "El formulario oficial de candidatura ;",
  "Cualquier documento complementario necesario para el estudio del expediente y la validación de las adquisiciones académicas.",
]

const piecesM1 = [
  "Una copia del documento de identidad o del pasaporte ;",
  "Una copia del diploma de Licencia (grado) o de un diploma reconocido como equivalente ;",
  "Un certificado de aprobación, en su caso ;",
  "Los certificados de notas de los tres años de Licencia (grado) (L1, L2 y L3) ;",
  "Un currículum vitae actualizado ;",
  "Una carta de motivación que presente el proyecto académico y profesional ;",
  "Dos fotografías recientes tipo carnet ;",
  "El formulario oficial de candidatura debidamente cumplimentado ;",
  "Cualquier documento complementario exigido según la especialidad elegida.",
]

const piecesM2 = [
  "Una copia del documento de identidad o del pasaporte ;",
  "Una copia del diploma de Máster 1 o de un diploma equivalente ;",
  "Los certificados de notas del itinerario universitario anterior ;",
  "Un certificado de validación del M1, en su caso ;",
  "Un currículum vitae actualizado ;",
  "Una carta de motivación ;",
  "Dos fotografías recientes tipo carnet ;",
  "El formulario oficial de candidatura ;",
  "Cualquier documento complementario necesario para el estudio del expediente.",
]

const dispositionsAdministratives = [
  "Podrán exigirse copias certificadas conforme para ciertos documentos.",
  "Los diplomas extranjeros podrán requerir una traducción oficial y un certificado de equivalencia o de reconocimiento.",
  "Las admisiones en L2, L3 y M2 están sujetas al examen del itinerario académico y a la validación de los prerrequisitos.",
  "Un procedimiento de Validación de Adquisiciones de la Experiencia (VAE), cuando sea aplicable y autorizado, puede estudiarse según las disposiciones reglamentarias vigentes.",
]

const fraisNonInclus = [
  "Uniforme obligatorio ;",
  "Viaje de estudios e inmersión ;",
  "Tasas de defensa de proyecto, en su caso.",
]

const modalitesPaiement = [
  "Las modalidades de pago ;",
  "El calendario de los vencimientos ;",
  "Las facilidades de pago eventualmente concedidas ;",
  "Las condiciones particulares aplicables a los beneficiarios de becas.",
]

const dispositionsFrais = [
  "La tasa de apertura de expediente se fija en 15 000 FCFA.",
  "Todo pago debe ir acompañado de un recibo o de una prueba oficial de pago.",
  "Las condiciones de anulación y de reembolso son comunicadas por la administración.",
  "Las tasas complementarias no están incluidas en las tarifas anuales de matrícula.",
]

const protectionDonnees = [
  "Contacte con la administración antes de cualquier transmisión de documentos personales.",
  "Presente sus expedientes únicamente por los canales oficiales comunicados por ABS.",
  "Evite transmitir documentos sensibles a números o direcciones no verificados.",
  "ABS vela por la confidencialidad de las informaciones comunicadas en el marco de los procedimientos de candidatura y de inscripción.",
]

function PiecesList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-slate-700">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-cyan-400 text-cyan-300">
              Año académico 2026–2027
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Convierta su ambición en un proyecto concreto
            </h1>
            <p className="text-lg text-slate-200">
              La admisión en ABS empieza por una buena información. Nuestro equipo puede orientarle hacia los
              itinerarios propuestos, explicarle las condiciones de acceso y precisarle los trámites a realizar.
              Los criterios definitivos dependen del nivel de estudios, del itinerario elegido y de las reglas vigentes
              para el curso académico correspondiente.
            </p>
          </div>
        </div>
      </section>

      {/* 6.2 Étapes */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">El procedimiento de candidatura en 6 etapas</h2>
            <p className="text-lg text-slate-600">
              El procedimiento de candidatura a la ABS — African Business School se desarrolla en seis etapas.
            </p>
          </div>

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => {
              const StepIcon = stepIcons[index]
              return (
                <li key={step.title}>
                  <Card className="h-full border-t-4 border-t-blue-700 shadow-md">
                    <CardHeader>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white">
                          {index + 1}
                        </span>
                        <StepIcon className="h-7 w-7 text-blue-700" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{step.text}</p>
                    </CardContent>
                  </Card>
                </li>
              )
            })}
          </ol>

          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-blue-100 bg-blue-50 p-6 text-center">
            <h3 className="mb-2 text-xl font-bold text-blue-900">Bienvenido a ABS</h3>
            <p className="text-slate-700">
              Nuestro compromiso: acompañar a cada candidato a lo largo de su recorrido, desde el primer
              contacto hasta su integración efectiva en la comunidad universitaria ABS.
            </p>
          </div>
        </div>
      </section>

      {/* 6.3 Pièces à fournir */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">Documentos a presentar</h2>
            <p className="text-lg text-slate-600">
              El expediente de candidatura a la ABS — African Business School varía según el ciclo de formación
              solicitado. Los documentos que figuran a continuación constituyen una lista indicativa, a confirmar por la administración.
            </p>
          </div>

          <Tabs defaultValue="l1" className="mx-auto max-w-4xl">
            <TabsList className="mb-6 grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="l1">Licencia (grado) L1</TabsTrigger>
              <TabsTrigger value="l2l3">Licencia (grado) L2 / L3</TabsTrigger>
              <TabsTrigger value="m1">Máster M1</TabsTrigger>
              <TabsTrigger value="m2">Máster M2</TabsTrigger>
            </TabsList>

            <TabsContent value="l1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <GraduationCap className="h-6 w-6" /> Candidatura a la Licencia (grado) (L1)
                  </CardTitle>
                  <CardDescription>El candidato debe presentar :</CardDescription>
                </CardHeader>
                <CardContent>
                  <PiecesList items={piecesL1} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="l2l3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <GraduationCap className="h-6 w-6" /> Candidatura a la Licencia (grado) (L2 o L3)
                  </CardTitle>
                  <CardDescription>El candidato debe presentar :</CardDescription>
                </CardHeader>
                <CardContent>
                  <PiecesList items={piecesL2L3} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="m1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <UserCheck className="h-6 w-6" /> Candidatura al Máster (M1)
                  </CardTitle>
                  <CardDescription>El candidato debe presentar :</CardDescription>
                </CardHeader>
                <CardContent>
                  <PiecesList items={piecesM1} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="m2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <UserCheck className="h-6 w-6" /> Candidatura al Máster (M2)
                  </CardTitle>
                  <CardDescription>El candidato debe presentar :</CardDescription>
                </CardHeader>
                <CardContent>
                  <PiecesList items={piecesM2} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Dispositions administratives particulières */}
          <div className="mx-auto mt-10 grid max-w-4xl gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <FolderOpen className="h-6 w-6" /> Disposiciones administrativas particulares
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dispositionsAdministratives.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex items-start gap-4 rounded-xl border border-amber-300 bg-amber-50 p-6">
              <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
              <div>
                <p className="font-semibold text-amber-900">Importante</p>
                <p className="text-amber-900">
                  La presentación de un expediente no equivale a una admisión automática. Toda candidatura está sujeta a la
                  verificación de los documentos, al estudio del expediente académico y a la decisión de la Dirección de
                  Estudios o de la autoridad competente de ABS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.4 Frais de formation */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">Tasas de formación</h2>
            <p className="text-lg text-slate-600">
              La ABS — African Business School aplica una política tarifaria transparente, que precisa las tasas
              de matrícula y las tasas complementarias vinculadas a la formación. Para el curso académico 2026–2027, las
              tarifas anuales se fijan como sigue :
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Table>
              <TableCaption>Tabla oficial de las tasas de formación — año académico 2026–2027.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Denominación</TableHead>
                  <TableHead className="text-right">Importe anual</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Licencia (grado) (L1, L2, L3)</TableCell>
                  <TableCell className="text-right font-semibold">1 025 000 FCFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Máster (M1, M2)</TableCell>
                  <TableCell className="text-right font-semibold">1 500 000 FCFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tasa de apertura de expediente</TableCell>
                  <TableCell className="text-right font-semibold">15 000 FCFA</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Landmark className="h-6 w-6" /> Tasas no incluidas en la matrícula
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="mb-4 space-y-2">
                    {fraisNonInclus.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-500">
                    Estas tasas son comunicadas aparte por la administración según el programa y el nivel
                    de estudios.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <CalendarCheck className="h-6 w-6" /> Modalidades de pago
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-slate-700">
                    Las tasas de matrícula son pagaderas según los vencimientos y modalidades definidos por la Dirección
                    General de ABS. Los candidatos admitidos reciben las informaciones relativas a :
                  </p>
                  <ul className="space-y-2">
                    {modalitesPaiement.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <ShieldCheck className="h-6 w-6" /> Disposiciones administrativas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dispositionsFrais.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <p className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
              ABS puede conceder becas de estudios, medias becas u otras reducciones según los
              criterios de selección y las decisiones de la Dirección General. La atribución de una beca
              está sujeta a condiciones académicas, disciplinarias y administrativas precisadas en un documento
              de compromiso.{" "}
              <Link href="/financial-aid" className="font-semibold text-blue-700 hover:underline">
                Descubrir las becas y reducciones
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 6.6 Contact */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Su futuro empieza aquí</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
              ¿Desea incorporarse a la ABS — African Business School en Licencia (grado) o en Máster ? Nuestro equipo
              administrativo y el Servicio de Matrícula y Admisiones están a su disposición para acompañarle y orientarle en cada etapa de su candidatura. No espere para preparar su
              futuro.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-3">
              <a
                href={WHATSAPP_URL}
                className="rounded-xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <MessageCircle className="mb-2 h-6 w-6 text-cyan-400" />
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-slate-200">{WHATSAPP_NUMBER}</p>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded-xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <Mail className="mb-2 h-6 w-6 text-cyan-400" />
                <p className="font-semibold">Correo electrónico</p>
                <p className="text-sm text-slate-200">{CONTACT_EMAIL}</p>
              </a>
              <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                <MapPin className="mb-2 h-6 w-6 text-cyan-400" />
                <p className="font-semibold">Ciclos propuestos</p>
                <p className="text-sm text-slate-200">Licencia (grado) y Máster</p>
                <p className="text-sm text-slate-200">Bamako – Hamdallaye ACI 2000, Mali</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                <a href={WHATSAPP_URL}>
                  Únase a la comunidad ABS <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/apply">Presentar una candidatura</Link>
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

            <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-white/15 bg-white/5 p-6 text-left">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <ShieldCheck className="h-5 w-5 text-cyan-400" /> Protección de sus datos personales
              </h3>
              <p className="mb-3 text-sm text-slate-300">
                Para garantizar la confidencialidad y la seguridad de sus informaciones :
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                {protectionDonnees.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
