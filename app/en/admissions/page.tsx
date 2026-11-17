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
  title: "Admissions and enrolment | ABS",
  description: "Review the application steps and obtain the entry requirements, documents and official fees from ABS — African Business School.",
  path: "/admissions",
  locale: "en",
})

const CONTACT_EMAIL = "abs.mail1290@gmail.com"

const steps = [
  {
    title: "Discover the programmes that are open",
    text: "Review the ABS programme offering and identify the desired programme (Licence (Bachelor's degree) or Master), checking that the pathway is actually open to admissions for the relevant academic intake.",
  },
  {
    title: "Enquire about admission requirements",
    text: "Contact the Registrar's and Admissions Office to verify the entry requirements, academic prerequisites, tuition fees and the official list of documents to provide.",
  },
  {
    title: "Compile and submit your application file",
    text: "Gather the required documents and submit the application file to the ABS administration, in accordance with the procedures and deadlines communicated.",
  },
  {
    title: "Review and follow up on your application",
    text: "The administration verifies the documents and examines the academic file. Applicants remain available to provide any additional document or information needed to process their application.",
  },
  {
    title: "Receive the admission decision and finalise your enrolment",
    text: "After notification of the admission decision, successful applicants complete the administrative and financial formalities: payment of the required fees, validation of enrolment and collection of the corresponding administrative documents.",
  },
  {
    title: "Prepare for the new academic year and join the ABS community",
    text: "After enrolment is confirmed, the new student receives information about the academic year, the course timetable, the academic organisation, the internal regulations, the uniform and integration activities.",
  },
]

const stepIcons = [Search, Phone, FolderOpen, FileText, BadgeCheck, GraduationCap]

const piecesL1 = [
  "A copy of a valid ID card or passport;",
  "A copy of the Baccalauréat diploma or a diploma recognised as equivalent;",
  "Proof of success in the Baccalauréat, where applicable;",
  "Baccalauréat transcripts;",
  "Two recent passport photographs;",
  "A birth certificate extract;",
  "The official application form, duly completed;",
  "Any additional document requested by the administration.",
]

const piecesL2L3 = [
  "A copy of the ID card or passport;",
  "A copy of the Baccalauréat diploma;",
  "University diplomas or certificates obtained;",
  "Transcripts from previous academic years;",
  "Semester validation certificates, where applicable;",
  "Two recent passport photographs;",
  "A curriculum vitae;",
  "The official application form;",
  "Any additional document needed to review the file and validate prior academic achievement.",
]

const piecesM1 = [
  "A copy of the ID card or passport;",
  "A copy of the Licence (Bachelor's degree) diploma or a diploma recognised as equivalent;",
  "A certificate of success, where applicable;",
  "Transcripts from the three years of the Licence (L1, L2 and L3);",
  "An up-to-date curriculum vitae;",
  "A letter of motivation presenting the academic and professional project;",
  "Two recent passport photographs;",
  "The official application form, duly completed;",
  "Any additional document required depending on the chosen specialisation.",
]

const piecesM2 = [
  "A copy of the ID card or passport;",
  "A copy of the Master 1 diploma or an equivalent diploma;",
  "Transcripts from previous university studies;",
  "A certificate of validation of M1, where applicable;",
  "An up-to-date curriculum vitae;",
  "A letter of motivation;",
  "Two recent passport photographs;",
  "The official application form;",
  "Any additional document needed to review the file.",
]

const dispositionsAdministratives = [
  "Certified copies may be required for certain documents.",
  "Foreign diplomas may require an official translation and a certificate of equivalence or recognition.",
  "Admission to L2, L3 and M2 is subject to review of the academic record and validation of prerequisites.",
  "A Validation of Prior Experience (VAE) procedure, where applicable and authorised, may be considered under the regulatory provisions in force.",
]

const fraisNonInclus = [
  "Mandatory uniform;",
  "Study and immersion trip;",
  "Defence fees, where applicable.",
]

const modalitesPaiement = [
  "Payment terms;",
  "The instalment schedule;",
  "Any payment facilities that may be granted;",
  "The special conditions applicable to scholarship holders.",
]

const dispositionsFrais = [
  "The file opening fee is set at 15 000 FCFA.",
  "Every payment must be supported by a receipt or official proof of payment.",
  "Cancellation and refund conditions are communicated by the administration.",
  "Ancillary fees are not included in the annual tuition rates.",
]

const protectionDonnees = [
  "Contact the administration before transmitting any personal documents.",
  "Submit your files only through the official channels communicated by ABS.",
  "Avoid sending sensitive documents to unverified numbers or addresses.",
  "ABS ensures the confidentiality of information provided as part of the application and enrolment procedures.",
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
              Academic year 2026–2027
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Turn your ambition into a concrete plan
            </h1>
            <p className="text-lg text-slate-200">
              Admission to ABS starts with good information. Our team can guide you towards the
              pathways on offer, explain the entry requirements and specify the steps to take. The
              definitive criteria depend on the level of study, the chosen pathway and the rules in
              force for the relevant academic year.
            </p>
          </div>
        </div>
      </section>

      {/* 6.2 Steps */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">The application process in 6 steps</h2>
            <p className="text-lg text-slate-600">
              The application process at ABS — African Business School takes place in six steps.
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
            <h3 className="mb-2 text-xl font-bold text-blue-900">Welcome to ABS</h3>
            <p className="text-slate-700">
              Our commitment: to support every applicant throughout their journey, from the first
              point of contact through to effective integration into the ABS university community.
            </p>
          </div>
        </div>
      </section>

      {/* 6.3 Documents to provide */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">Documents to provide</h2>
            <p className="text-lg text-slate-600">
              The application file for ABS — African Business School varies depending on the
              level of study requested. The documents listed below are indicative and must be
              confirmed by the administration.
            </p>
          </div>

          <Tabs defaultValue="l1" className="mx-auto max-w-4xl">
            <TabsList className="mb-6 grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="l1">Licence L1</TabsTrigger>
              <TabsTrigger value="l2l3">Licence L2 / L3</TabsTrigger>
              <TabsTrigger value="m1">Master M1</TabsTrigger>
              <TabsTrigger value="m2">Master M2</TabsTrigger>
            </TabsList>

            <TabsContent value="l1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <GraduationCap className="h-6 w-6" /> Application for the Licence (L1)
                  </CardTitle>
                  <CardDescription>Applicants must provide:</CardDescription>
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
                    <GraduationCap className="h-6 w-6" /> Application for the Licence (L2 or L3)
                  </CardTitle>
                  <CardDescription>Applicants must provide:</CardDescription>
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
                    <UserCheck className="h-6 w-6" /> Application for the Master (M1)
                  </CardTitle>
                  <CardDescription>Applicants must provide:</CardDescription>
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
                    <UserCheck className="h-6 w-6" /> Application for the Master (M2)
                  </CardTitle>
                  <CardDescription>Applicants must provide:</CardDescription>
                </CardHeader>
                <CardContent>
                  <PiecesList items={piecesM2} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Special administrative provisions */}
          <div className="mx-auto mt-10 grid max-w-4xl gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <FolderOpen className="h-6 w-6" /> Special administrative provisions
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
                <p className="font-semibold text-amber-900">Important</p>
                <p className="text-amber-900">
                  Submitting a file does not constitute automatic admission. Every application is
                  subject to verification of the documents, review of the academic file and the
                  decision of the Directorate of Studies or the competent ABS authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.4 Tuition fees */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">Tuition fees</h2>
            <p className="text-lg text-slate-600">
              ABS — African Business School applies a transparent pricing policy, specifying
              tuition and ancillary fees related to training. For the 2026–2027 academic year, the
              annual rates are set as follows:
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Table>
              <TableCaption>Official tuition fee schedule — academic year 2026–2027.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Programme</TableHead>
                  <TableHead className="text-right">Annual amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Licence (L1, L2, L3)</TableCell>
                  <TableCell className="text-right font-semibold">1 025 000 FCFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Master (M1, M2)</TableCell>
                  <TableCell className="text-right font-semibold">1 500 000 FCFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">File opening fee</TableCell>
                  <TableCell className="text-right font-semibold">15 000 FCFA</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Landmark className="h-6 w-6" /> Fees not included in tuition
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
                    These fees are communicated separately by the administration depending on the
                    programme and the level of study.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <CalendarCheck className="h-6 w-6" /> Payment terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-slate-700">
                    Tuition is payable according to the schedule and terms defined by the ABS
                    Directorate General. Admitted applicants receive information about:
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
                  <ShieldCheck className="h-6 w-6" /> Administrative provisions
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
              ABS may grant scholarships, half-scholarships or other reductions according to the
              selection criteria and the decisions of the Directorate General. The award of a
              scholarship is subject to academic, disciplinary and administrative conditions specified
              in a commitment document.{" "}
              <Link href="/financial-aid" className="font-semibold text-blue-700 hover:underline">
                Discover scholarships and reductions
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 6.6 Contact */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Your future starts here</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
              Would you like to join ABS — African Business School at Licence or Master level?
              Our administrative team and the Registrar's and Admissions Office are at your disposal
              to support and guide you at every step of your application. Do not wait to prepare your
              future.
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
                <p className="font-semibold">Email</p>
                <p className="text-sm text-slate-200">{CONTACT_EMAIL}</p>
              </a>
              <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                <MapPin className="mb-2 h-6 w-6 text-cyan-400" />
                <p className="font-semibold">Levels offered</p>
                <p className="text-sm text-slate-200">Licence and Master</p>
                <p className="text-sm text-slate-200">Bamako – Hamdallaye ACI 2000, Mali</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                <a href={WHATSAPP_URL}>
                  Join the ABS community <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/apply">Submit an application</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-white/15 bg-white/5 p-6 text-left">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <ShieldCheck className="h-5 w-5 text-cyan-400" /> Protection of your personal data
              </h3>
              <p className="mb-3 text-sm text-slate-300">
                To guarantee the confidentiality and security of your information:
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
