import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
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
  title: "Admissions et inscriptions | ABS",
  description:
    "Consultez les étapes de candidature et obtenez les conditions d'accès, les pièces et les frais officiels auprès de ABS.",
  path: "/admissions",
})

const CONTACT_EMAIL = "abs.mail1290@gmail.com"

const steps = [
  {
    title: "Découvrir les formations ouvertes",
    text: "Consulter l'offre de formation de l'ABS et identifier le programme souhaité (Licence ou Master), en vérifiant que le parcours est effectivement ouvert aux admissions pour la rentrée académique concernée.",
  },
  {
    title: "Se renseigner sur les conditions d'admission",
    text: "Prendre contact avec le Service de la Scolarité et des Admissions afin de vérifier les conditions d'accès, les prérequis académiques, les frais de formation et la liste officielle des pièces à fournir.",
  },
  {
    title: "Constituer et déposer son dossier de candidature",
    text: "Rassembler les documents requis et soumettre le dossier de candidature auprès de l'administration de l'ABS, conformément aux modalités et aux délais communiqués.",
  },
  {
    title: "Étudier et suivre sa candidature",
    text: "L'administration procède à la vérification des pièces et à l'examen du dossier académique. Le candidat reste disponible pour fournir tout document complémentaire ou toute information nécessaire à l'instruction de sa demande.",
  },
  {
    title: "Recevoir la décision d'admission et finaliser son inscription",
    text: "Après notification de la décision d'admission, le candidat retenu accomplit les formalités administratives et financières : paiement des frais requis, validation de son inscription et retrait des documents administratifs correspondants.",
  },
  {
    title: "Préparer sa rentrée et intégrer la communauté ABS",
    text: "Après confirmation de son inscription, le nouvel étudiant reçoit les informations relatives à la rentrée académique, au calendrier des cours, à l'organisation pédagogique, au règlement intérieur, à l'uniforme et aux activités d'intégration.",
  },
]

const stepIcons = [Search, Phone, FolderOpen, FileText, BadgeCheck, GraduationCap]

const piecesL1 = [
  "Une copie de la pièce d'identité ou du passeport en cours de validité ;",
  "Une copie du diplôme du Baccalauréat ou d'un diplôme reconnu équivalent ;",
  "Une attestation de réussite au Baccalauréat, le cas échéant ;",
  "Les relevés de notes du Baccalauréat ;",
  "Deux photos d'identité récentes ;",
  "Un extrait d'acte de naissance ;",
  "Le formulaire officiel de candidature dûment rempli ;",
  "Toute pièce complémentaire demandée par l'administration.",
]

const piecesL2L3 = [
  "Une copie de la pièce d'identité ou du passeport ;",
  "Une copie du Baccalauréat ;",
  "Les diplômes ou attestations universitaires obtenus ;",
  "Les relevés de notes des années universitaires précédentes ;",
  "Les attestations de validation des semestres, le cas échéant ;",
  "Deux photos d'identité récentes ;",
  "Un curriculum vitae ;",
  "Le formulaire officiel de candidature ;",
  "Toute pièce complémentaire nécessaire à l'étude du dossier et à la validation des acquis académiques.",
]

const piecesM1 = [
  "Une copie de la pièce d'identité ou du passeport ;",
  "Une copie du diplôme de Licence ou d'un diplôme reconnu équivalent ;",
  "Une attestation de réussite, le cas échéant ;",
  "Les relevés de notes des trois années de Licence (L1, L2 et L3) ;",
  "Un curriculum vitae actualisé ;",
  "Une lettre de motivation présentant le projet académique et professionnel ;",
  "Deux photos d'identité récentes ;",
  "Le formulaire officiel de candidature dûment rempli ;",
  "Toute pièce complémentaire exigée selon la spécialité choisie.",
]

const piecesM2 = [
  "Une copie de la pièce d'identité ou du passeport ;",
  "Une copie du diplôme de Master 1 ou d'un diplôme équivalent ;",
  "Les relevés de notes du parcours universitaire antérieur ;",
  "Une attestation de validation du M1, le cas échéant ;",
  "Un curriculum vitae actualisé ;",
  "Une lettre de motivation ;",
  "Deux photos d'identité récentes ;",
  "Le formulaire officiel de candidature ;",
  "Toute pièce complémentaire nécessaire à l'étude du dossier.",
]

const dispositionsAdministratives = [
  "Les copies certifiées conformes pourront être exigées pour certains documents.",
  "Les diplômes étrangers pourront nécessiter une traduction officielle et une attestation d'équivalence ou de reconnaissance.",
  "Les admissions en L2, L3 et M2 sont soumises à l'examen du parcours académique et à la validation des prérequis.",
  "Une procédure de Validation des Acquis de l'Expérience (VAE), lorsqu'elle est applicable et autorisée, peut être étudiée selon les dispositions réglementaires en vigueur.",
]

const fraisNonInclus = [
  "Uniforme obligatoire ;",
  "Voyage d'études et d'immersion ;",
  "Frais de soutenance, le cas échéant.",
]

const modalitesPaiement = [
  "Les modalités de paiement ;",
  "Le calendrier des échéances ;",
  "Les facilités de paiement éventuellement accordées ;",
  "Les conditions particulières applicables aux bénéficiaires de bourses.",
]

const dispositionsFrais = [
  "Les frais d'ouverture de dossier sont fixés à 15 000 FCFA.",
  "Tout règlement doit faire l'objet d'un reçu ou d'une preuve officielle de paiement.",
  "Les conditions d'annulation et de remboursement sont communiquées par l'administration.",
  "Les frais annexes ne sont pas compris dans les tarifs annuels de scolarité.",
]

const protectionDonnees = [
  "Prenez contact avec l'administration avant toute transmission de documents personnels.",
  "Déposez vos dossiers uniquement par les canaux officiels communiqués par ABS.",
  "Évitez de transmettre des documents sensibles à des numéros ou adresses non vérifiés.",
  "L'ABS veille à la confidentialité des informations communiquées dans le cadre des procédures de candidature et d'inscription.",
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
              Année académique 2026–2027
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Faites de votre ambition un projet concret
            </h1>
            <p className="text-lg text-slate-200">
              L&apos;admission à ABS commence par une bonne information. Notre équipe peut vous orienter vers les
              parcours proposés, vous expliquer les conditions d&apos;accès et vous préciser les démarches à accomplir.
              Les critères définitifs dépendent du niveau d&apos;études, du parcours choisi et des règles en vigueur
              pour l&apos;année académique concernée.
            </p>
          </div>
        </div>
      </section>

      {/* 6.2 Étapes */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">La procédure de candidature en 6 étapes</h2>
            <p className="text-lg text-slate-600">
              La procédure de candidature à l&apos;ABS — African Business School se déroule en six étapes.
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
            <h3 className="mb-2 text-xl font-bold text-blue-900">Bienvenue à ABS</h3>
            <p className="text-slate-700">
              Notre engagement : accompagner chaque candidat tout au long de son parcours, de la première prise de
              contact jusqu&apos;à son intégration effective dans la communauté universitaire ABS.
            </p>
          </div>
        </div>
      </section>

      {/* 6.3 Pièces à fournir */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">Pièces à fournir</h2>
            <p className="text-lg text-slate-600">
              Le dossier de candidature à ABS — African Business School varie selon le cycle de formation
              sollicité. Les pièces ci-dessous constituent une liste indicative, à confirmer par l&apos;administration.
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
                    <GraduationCap className="h-6 w-6" /> Candidature en Licence (L1)
                  </CardTitle>
                  <CardDescription>Le candidat doit fournir :</CardDescription>
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
                    <GraduationCap className="h-6 w-6" /> Candidature en Licence (L2 ou L3)
                  </CardTitle>
                  <CardDescription>Le candidat doit fournir :</CardDescription>
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
                    <UserCheck className="h-6 w-6" /> Candidature en Master (M1)
                  </CardTitle>
                  <CardDescription>Le candidat doit fournir :</CardDescription>
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
                    <UserCheck className="h-6 w-6" /> Candidature en Master (M2)
                  </CardTitle>
                  <CardDescription>Le candidat doit fournir :</CardDescription>
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
                  <FolderOpen className="h-6 w-6" /> Dispositions administratives particulières
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
                  Le dépôt d&apos;un dossier ne vaut pas admission automatique. Toute candidature est soumise à la
                  vérification des pièces, à l&apos;étude du dossier académique et à la décision de la Direction des
                  Études ou de l&apos;autorité compétente de l&apos;ABS.
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
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">Frais de formation</h2>
            <p className="text-lg text-slate-600">
              ABS — African Business School applique une politique tarifaire transparente, précisant les frais
              de scolarité et les frais annexes liés à la formation. Pour l&apos;année académique 2026–2027, les
              tarifs annuels sont fixés comme suit :
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Table>
              <TableCaption>Tableau officiel des frais de formation — année académique 2026–2027.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Désignation</TableHead>
                  <TableHead className="text-right">Montant annuel</TableHead>
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
                  <TableCell className="font-medium">Frais d&apos;ouverture de dossier</TableCell>
                  <TableCell className="text-right font-semibold">15 000 FCFA</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Landmark className="h-6 w-6" /> Frais non inclus dans la scolarité
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
                    Ces frais sont communiqués séparément par l&apos;administration selon le programme et le niveau
                    d&apos;études.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <CalendarCheck className="h-6 w-6" /> Modalités de paiement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-slate-700">
                    Les frais de scolarité sont payables selon les échéances et modalités définies par la Direction
                    Générale de l&apos;ABS. Les candidats admis reçoivent les informations relatives :
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
                  <ShieldCheck className="h-6 w-6" /> Dispositions administratives
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
              ABS peut accorder des bourses d&apos;études, des demi-bourses ou d&apos;autres réductions selon les
              critères de sélection et les décisions de la Direction Générale. L&apos;attribution d&apos;une bourse
              est soumise à des conditions académiques, disciplinaires et administratives précisées dans un document
              d&apos;engagement.{" "}
              <Link href="/financial-aid" className="font-semibold text-blue-700 hover:underline">
                Découvrir les bourses et réductions
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 6.6 Contact */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Votre avenir commence ici</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
              Vous souhaitez intégrer ABS — African Business School en Licence ou en Master ? Notre équipe
              administrative et le Service de la Scolarité et des Admissions sont à votre disposition pour vous
              accompagner et vous orienter à chaque étape de votre candidature. N&apos;attendez pas pour préparer votre
              avenir.
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
                <p className="font-semibold">Cycles proposés</p>
                <p className="text-sm text-slate-200">Licence et Master</p>
                <p className="text-sm text-slate-200">Bamako – Hamdallaye ACI 2000, Mali</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                <a href={WHATSAPP_URL}>
                  Rejoignez la communauté ABS <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/apply">Déposer une candidature</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-white/15 bg-white/5 p-6 text-left">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <ShieldCheck className="h-5 w-5 text-cyan-400" /> Protection de vos données personnelles
              </h3>
              <p className="mb-3 text-sm text-slate-300">
                Pour garantir la confidentialité et la sécurité de vos informations :
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
