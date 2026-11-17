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
  title: "Zulassung und Einschreibung | ABS",
  description: "Sehen Sie die Schritte der Bewerbung ein und erhalten Sie die Zulassungsbedingungen, Unterlagen und offiziellen Gebühren der ABS.",
  path: "/admissions",
  locale: "de",
})

const CONTACT_EMAIL = "abs.mail1290@gmail.com"

const steps = [
  {
    title: "Die geöffneten Studiengänge entdecken",
    text: "Das Studienangebot von ABS einsehen und den gewünschten Studiengang (Licence (Bachelorabschluss) oder Master) identifizieren, wobei zu prüfen ist, ob der Studiengang für das betreffende akademische Jahr tatsächlich für Zulassungen geöffnet ist.",
  },
  {
    title: "Über die Zulassungsbedingungen informieren",
    text: "Mit dem Dienst für Studierendensekretariat und Zulassung Kontakt aufnehmen, um die Zugangsbedingungen, die akademischen Voraussetzungen, die Studiengebühren und die offizielle Liste der vorzulegenden Unterlagen zu prüfen.",
  },
  {
    title: "Die Bewerbungsunterlagen zusammenstellen und einreichen",
    text: "Die erforderlichen Dokumente zusammenstellen und die Bewerbungsunterlagen bei der Verwaltung von ABS einreichen – gemäß den mitgeteilten Modalitäten und Fristen.",
  },
  {
    title: "Die Bewerbung prüfen und verfolgen",
    text: "Die Verwaltung führt die Prüfung der Unterlagen und die Begutachtung des akademischen Dossiers durch. Die Bewerberin oder der Bewerber bleibt verfügbar, um jede ergänzende Unterlage oder jede für die Bearbeitung des Antrags notwendige Information beizubringen.",
  },
  {
    title: "Die Zulassungsentscheidung erhalten und die Einschreibung abschließen",
    text: "Nach Mitteilung der Zulassungsentscheidung erledigt die zugelassene Bewerberin oder der zugelassene Bewerber die administrativen und finanziellen Formalitäten: Zahlung der erforderlichen Gebühren, Bestätigung der Einschreibung und Abholung der entsprechenden Verwaltungsdokumente.",
  },
  {
    title: "Das Studienjahr vorbereiten und in die ABS-Gemeinschaft eintreten",
    text: "Nach Bestätigung der Einschreibung erhält die neue Studentin oder der neue Student die Informationen zum akademischen Jahresbeginn, zum Vorlesungskalender, zur pädagogischen Organisation, zur Hausordnung, zur Uniform und zu den Integrationsaktivitäten.",
  },
]

const stepIcons = [Search, Phone, FolderOpen, FileText, BadgeCheck, GraduationCap]

const piecesL1 = [
  "Eine Kopie des gültigen Ausweises oder Reisepasses;",
  "Eine Kopie des Baccalauréat-Diploms oder eines als gleichwertig anerkannten Diploms;",
  "Eine Bescheinigung über das Bestehen des Baccalauréat, gegebenenfalls;",
  "Die Zeugnisse des Baccalauréat;",
  "Zwei aktuelle Passfotos;",
  "Eine Auszug aus der Geburtsurkunde;",
  "Das offizielle, ordnungsgemäß ausgefüllte Bewerbungsformular;",
  "Jede von der Verwaltung angeforderte ergänzende Unterlage.",
]

const piecesL2L3 = [
  "Eine Kopie des Ausweises oder Reisepasses;",
  "Eine Kopie des Baccalauréat;",
  "Die erworbenen Universitätsdiplome oder -bescheinigungen;",
  "Die Zeugnisse der vorherigen Studienjahre;",
  "Die Bescheinigungen über die Validierung der Semester, gegebenenfalls;",
  "Zwei aktuelle Passfotos;",
  "Ein Lebenslauf;",
  "Das offizielle Bewerbungsformular;",
  "Jede ergänzende Unterlage, die für die Prüfung des Dossiers und die Anerkennung der akademischen Leistungen notwendig ist.",
]

const piecesM1 = [
  "Eine Kopie des Ausweises oder Reisepasses;",
  "Eine Kopie des Licence-Diploms (Bachelorabschluss) oder eines als gleichwertig anerkannten Diploms;",
  "Eine Bescheinigung über das Bestehen, gegebenenfalls;",
  "Die Zeugnisse der drei Jahre des Licence-Studiums (L1, L2 und L3);",
  "Ein aktualisierter Lebenslauf;",
  "Ein Motivationsschreiben, das das akademische und berufliche Projekt darstellt;",
  "Zwei aktuelle Passfotos;",
  "Das offizielle, ordnungsgemäß ausgefüllte Bewerbungsformular;",
  "Jede je nach gewählter Spezialisierung geforderte ergänzende Unterlage.",
]

const piecesM2 = [
  "Eine Kopie des Ausweises oder Reisepasses;",
  "Eine Kopie des Master-1-Diploms oder eines gleichwertigen Diploms;",
  "Die Zeugnisse des bisherigen Studienverlaufs;",
  "Eine Bescheinigung über die Validierung des M1, gegebenenfalls;",
  "Ein aktualisierter Lebenslauf;",
  "Ein Motivationsschreiben;",
  "Zwei aktuelle Passfotos;",
  "Das offizielle Bewerbungsformular;",
  "Jede ergänzende Unterlage, die für die Prüfung des Dossiers notwendig ist.",
]

const dispositionsAdministratives = [
  "Beglaubigte Kopien können für bestimmte Dokumente gefordert werden.",
  "Ausländische Diplome können eine offizielle Übersetzung sowie eine Gleichwertigkeits- oder Anerkennungsbescheinigung erfordern.",
  "Zulassungen in L2, L3 und M2 unterliegen der Prüfung des Studienverlaufs und der Anerkennung der Voraussetzungen.",
  "Ein Verfahren zur Validierung beruflich erworbener Kompetenzen (VAE) kann, sofern anwendbar und genehmigt, gemäß den geltenden regulatorischen Bestimmungen geprüft werden.",
]

const fraisNonInclus = [
  "Verpflichtende Uniform;",
  "Studien- und Praxisexkursion;",
  "Gebühren für die Verteidigung, gegebenenfalls.",
]

const modalitesPaiement = [
  "Die Zahlungsmodalitäten;",
  "Der Kalender der Fälligkeiten;",
  "Die gegebenenfalls gewährten Zahlungserleichterungen;",
  "Die besonderen Bedingungen für Stipendienempfänger.",
]

const dispositionsFrais = [
  "Die Aktenöffnungsgebühren sind auf 15 000 FCFA festgesetzt.",
  "Jede Zahlung muss durch eine Quittung oder einen offiziellen Zahlungsnachweis belegt werden.",
  "Die Bedingungen für Stornierung und Rückerstattung werden von der Verwaltung mitgeteilt.",
  "Die Nebengebühren sind in den jährlichen Studiengebühren nicht enthalten.",
]

const protectionDonnees = [
  "Nehmen Sie vor jeder Übermittlung persönlicher Dokumente Kontakt mit der Verwaltung auf.",
  "Reichen Sie Ihre Unterlagen ausschließlich über die von ABS mitgeteilten offiziellen Kanäle ein.",
  "Übermitteln Sie keine sensiblen Dokumente an nicht verifizierte Nummern oder Adressen.",
  "ABS achtet auf die Vertraulichkeit der im Rahmen der Bewerbungs- und Einschreibungsverfahren übermittelten Informationen.",
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
              Akademisches Jahr 2026–2027
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Machen Sie aus Ihrem Ehrgeiz ein konkretes Vorhaben
            </h1>
            <p className="text-lg text-slate-200">
              Die Zulassung an ABS beginnt mit einer guten Information. Unser Team kann Sie zu den angebotenen
              Studiengängen leiten, Ihnen die Zugangsbedingungen erläutern und Ihnen die zu erledigenden Schritte
              präzisieren. Die endgültigen Kriterien hängen vom Studienlevel, vom gewählten Studiengang und von den
              für das betreffende akademische Jahr geltenden Regeln ab.
            </p>
          </div>
        </div>
      </section>

      {/* 6.2 Étapes */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">Das Bewerbungsverfahren in 6 Schritten</h2>
            <p className="text-lg text-slate-600">
              Das Bewerbungsverfahren an der ABS — African Business School verläuft in sechs Schritten.
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
            <h3 className="mb-2 text-xl font-bold text-blue-900">Willkommen an ABS</h3>
            <p className="text-slate-700">
              Unser Engagement: jede Bewerberin und jeden Bewerber während des gesamten Werdegangs zu begleiten –
              vom ersten Kontakt bis zur tatsächlichen Integration in die ABS-Universitätsgemeinschaft.
            </p>
          </div>
        </div>
      </section>

      {/* 6.3 Pièces à fournir */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">Vorzulegende Unterlagen</h2>
            <p className="text-lg text-slate-600">
              Die Bewerbungsunterlagen an der ABS — African Business School variieren je nach dem
              beantragten Studienzyklus. Die nachstehenden Unterlagen stellen eine indikative Liste dar, die von
              der Verwaltung zu bestätigen ist.
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
                    <GraduationCap className="h-6 w-6" /> Bewerbung für das Licence-Studium (L1)
                  </CardTitle>
                  <CardDescription>Die Bewerberin oder der Bewerber muss vorlegen:</CardDescription>
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
                    <GraduationCap className="h-6 w-6" /> Bewerbung für das Licence-Studium (L2 oder L3)
                  </CardTitle>
                  <CardDescription>Die Bewerberin oder der Bewerber muss vorlegen:</CardDescription>
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
                    <UserCheck className="h-6 w-6" /> Bewerbung für das Master-Studium (M1)
                  </CardTitle>
                  <CardDescription>Die Bewerberin oder der Bewerber muss vorlegen:</CardDescription>
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
                    <UserCheck className="h-6 w-6" /> Bewerbung für das Master-Studium (M2)
                  </CardTitle>
                  <CardDescription>Die Bewerberin oder der Bewerber muss vorlegen:</CardDescription>
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
                  <FolderOpen className="h-6 w-6" /> Besondere administrative Bestimmungen
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
                <p className="font-semibold text-amber-900">Wichtig</p>
                <p className="text-amber-900">
                  Die Einreichung eines Dossiers bedeutet keine automatische Zulassung. Jede Bewerbung unterliegt
                  der Prüfung der Unterlagen, der Begutachtung des akademischen Dossiers und der Entscheidung der
                  Studienleitung oder der zuständigen Autorität von ABS.
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
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">Studiengebühren</h2>
            <p className="text-lg text-slate-600">
              ABS — African Business School wendet eine transparente Gebührenpolitik an, die die
              Studiengebühren und die mit der Ausbildung verbundenen Nebenkosten präzisiert. Für das akademische
              Jahr 2026–2027 sind die jährlichen Tarife wie folgt festgesetzt:
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Table>
              <TableCaption>Offizielle Tabelle der Studiengebühren — akademisches Jahr 2026–2027.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Bezeichnung</TableHead>
                  <TableHead className="text-right">Jahresbetrag</TableHead>
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
                  <TableCell className="font-medium">Aktenöffnungsgebühr</TableCell>
                  <TableCell className="text-right font-semibold">15 000 FCFA</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Landmark className="h-6 w-6" /> Nicht in den Studiengebühren enthaltene Kosten
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
                    Diese Kosten werden von der Verwaltung je nach Studiengang und Studienlevel separat mitgeteilt.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <CalendarCheck className="h-6 w-6" /> Zahlungsmodalitäten
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-slate-700">
                    Die Studiengebühren sind entsprechend den von der Generaldirektion von ABS festgelegten
                    Fälligkeiten und Modalitäten zahlbar. Zugelassene Bewerberinnen und Bewerber erhalten die
                    Informationen zu:
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
                  <ShieldCheck className="h-6 w-6" /> Administrative Bestimmungen
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
              ABS kann je nach Auswahlkriterien und Entscheidungen der Generaldirektion Vollstipendien,
              Halbvertstipendien oder weitere Ermäßigungen gewähren. Die Vergabe eines Stipendiums unterliegt
              akademischen, disziplinarischen und administrativen Bedingungen, die in einer Verpflichtungserklärung
              präzisiert werden.{" "}
              <Link href="/financial-aid" className="font-semibold text-blue-700 hover:underline">
                Stipendien und Ermäßigungen entdecken
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 6.6 Contact */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ihre Zukunft beginnt hier</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
              Sie möchten an der ABS — African Business School im Licence- oder Master-Studium studieren?
              Unser Verwaltungsteam und der Dienst für Studierendensekretariat und Zulassung stehen Ihnen zur
              Verfügung, um Sie in jedem Schritt Ihrer Bewerbung zu begleiten und zu leiten. Warten Sie nicht, um
              Ihre Zukunft vorzubereiten.
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
                <p className="font-semibold">E-Mail</p>
                <p className="text-sm text-slate-200">{CONTACT_EMAIL}</p>
              </a>
              <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                <MapPin className="mb-2 h-6 w-6 text-cyan-400" />
                <p className="font-semibold">Angebotene Zyklen</p>
                <p className="text-sm text-slate-200">Licence (Bachelorabschluss) und Master</p>
                <p className="text-sm text-slate-200">Bamako – Hamdallaye ACI 2000, Mali</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                <a href={WHATSAPP_URL}>
                  Treten Sie der ABS-Gemeinschaft bei <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/apply">Eine Bewerbung einreichen</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/contact">Kontaktieren Sie uns</Link>
              </Button>
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-white/15 bg-white/5 p-6 text-left">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <ShieldCheck className="h-5 w-5 text-cyan-400" /> Schutz Ihrer persönlichen Daten
              </h3>
              <p className="mb-3 text-sm text-slate-300">
                Um die Vertraulichkeit und die Sicherheit Ihrer Informationen zu gewährleisten:
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
