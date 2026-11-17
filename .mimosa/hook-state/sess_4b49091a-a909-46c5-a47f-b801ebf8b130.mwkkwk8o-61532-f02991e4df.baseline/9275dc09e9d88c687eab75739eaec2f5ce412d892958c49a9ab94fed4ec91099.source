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
  title: "Licence en Journalisme-Communication | ABS",
  description: "Licence en Journalisme-Communication à Bamako : recherche et vérification de l'information, rédaction, production audiovisuelle, journalisme web, communication institutionnelle et éthique des médias. 3 ans, 6 semestres, 180 crédits. Tarif annuel indicatif 1 250 000 FCFA (confirmation écrite 2026-2027 requise).",
  path: "/programs/journalism-communication",
})

const competences = [
  {
    code: "JC01",
    competence: "Collecter et vérifier l'information",
    resultat: "Croiser les sources et documenter une information.",
  },
  {
    code: "JC02",
    competence: "Rédiger pour différents formats",
    resultat: "Produire un texte clair, structuré et adapté au public.",
  },
  {
    code: "JC03",
    competence: "Préparer une interview",
    resultat: "Élaborer des questions, conduire l'entretien et restituer fidèlement.",
  },
  {
    code: "JC04",
    competence: "Produire des contenus multimédias",
    resultat: "Préparer un contenu photo, audio, vidéo ou web selon les moyens disponibles.",
  },
  {
    code: "JC05",
    competence: "Élaborer une communication",
    resultat: "Définir un public, un message, des supports et des indicateurs.",
  },
  {
    code: "JC06",
    competence: "Appliquer l'éthique professionnelle",
    resultat: "Respecter la vérification, la vie privée, le droit à l'image et la déontologie.",
  },
]

const enseignements = [
  "Techniques d'expression écrite et orale",
  "Genres journalistiques et rédaction",
  "Méthodologie de recherche et vérification des faits",
  "Droit des médias et déontologie",
  "Communication institutionnelle et relations presse",
  "Stratégie de communication et marketing des médias",
  "Photographie et prise de son",
  "Production vidéo et montage selon équipements",
  "Journalisme web et réseaux sociaux",
  "Conception de campagnes et mesure d'audience",
  "Anglais professionnel à chaque semestre",
  "Projets éditoriaux, développement personnel et stage",
]

const parcours = [
  {
    cycle: "Licence 1",
    organisation: "Semestres 1 et 2 : fondamentaux, méthodes de travail et premières applications",
    statut: "Cadre général de 30 crédits par semestre ; consulter les maquettes détaillées annexées",
  },
  {
    cycle: "Licence 2",
    organisation: "Semestres 3 et 4 : approfondissement, pratiques et projets",
    statut: "Unités, volumes horaires et crédits selon la maquette de la filière",
  },
  {
    cycle: "Licence 3",
    organisation: "Semestres 5 et 6 : spécialisation progressive, projet, stage et mémoire selon maquette",
    statut: "Validation académique selon règlement approuvé",
  },
]

const info = [
  { label: "Diplôme", value: "Licence — 3 ans, 6 semestres, 180 crédits selon cadre de travail" },
  { label: "Lieu", value: "Bamako, Mali — Hamdallaye ACI 2000" },
  {
    label: "Langues",
    value: "Français et anglais à chaque semestre (progression bilingue, voir la page Pédagogie)",
  },
  {
    label: "Tarif annuel indicatif",
    value: "1 250 000 FCFA/an (tarif communiqué, confirmation écrite 2026–2027 requise)",
  },
  {
    label: "Frais annexes communiqués",
    value:
      "Dossier : 15 000 FCFA ; soutenance Licence : 80 000 FCFA — montants à confirmer pour 2026–2027",
  },
  { label: "Contact", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

const axes = [
  {
    icon: Newspaper,
    titre: "Journalisme",
    texte:
      "Rechercher, vérifier, analyser et diffuser l'information ; reportage, interview et journalisme numérique.",
  },
  {
    icon: Megaphone,
    titre: "Communication des organisations",
    texte:
      "Concevoir des stratégies de communication adaptées aux objectifs et aux publics : institutionnelle, relations presse, digitale.",
  },
  {
    icon: Camera,
    titre: "Production de contenus",
    texte:
      "Productions multimédias, projets éditoriaux et mises en situation ; vérification des faits, responsabilité éditoriale et lutte contre la désinformation.",
  },
  {
    icon: Mic,
    titre: "Rayonnement des voix africaines",
    texte:
      "Raconter les réalités du continent avec justesse, valoriser ses réussites, éclairer ses défis et contribuer à son rayonnement.",
  },
]

export default function JournalismCommunicationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Pôle 4 — Journalisme et communication
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence en Journalisme-Communication
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Informer avec rigueur. Communiquer avec impact. Faire entendre et rayonner les voix
            africaines.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Développer les compétences nécessaires à la collecte, la vérification, la production et la
            diffusion de l&apos;information ainsi qu&apos;à la communication des organisations, dans un
            environnement marqué par le numérique, l&apos;image et les nouveaux usages médiatiques.
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
                Finalité et objectifs
              </TabsTrigger>
              <TabsTrigger value="competences" className="text-sm">
                Compétences visées
              </TabsTrigger>
              <TabsTrigger value="parcours" className="text-sm">
                Organisation du parcours
              </TabsTrigger>
              <TabsTrigger value="enseignements" className="text-sm">
                Enseignements
              </TabsTrigger>
              <TabsTrigger value="projets" className="text-sm">
                Projets et stages
              </TabsTrigger>
            </TabsList>

            {/* Finalité */}
            <TabsContent value="finalite">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Target className="h-5 w-5 text-cyan-500" /> Finalité
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 text-slate-700">
                    <p className="font-medium">
                      Former des profils capables de produire des contenus fiables, clairs et adaptés à
                      différents supports, dans le respect de l&apos;éthique et des responsabilités de la
                      communication.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objectifs généraux</p>
                      <ul className="space-y-1.5">
                        <li>
                          Maîtriser les bases de l&apos;écriture journalistique et de la communication.
                        </li>
                        <li>S&apos;initier à la production audio, vidéo, photo et numérique.</li>
                        <li>
                          Comprendre l&apos;éthique, le droit de l&apos;information et la stratégie de
                          communication.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objectifs spécifiques</p>
                      <ul className="space-y-1.5">
                        <li>Rédiger un article, un communiqué ou un dossier de presse.</li>
                        <li>Préparer une interview et vérifier les informations.</li>
                        <li>Réaliser un contenu audio-visuel adapté à un format.</li>
                        <li>
                          Concevoir une action de communication et en évaluer les résultats.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <GraduationCap className="h-5 w-5 text-cyan-500" /> Conditions d&apos;accès
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        Accès en Licence : baccalauréat ou titre équivalent, selon les conditions
                        officielles de ABS. Curiosité, qualité rédactionnelle, intérêt pour
                        l&apos;actualité et aptitude au travail d&apos;équipe recommandés. Master :
                        Licence pertinente ou équivalent, selon parcours ouvert.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        À confirmer avant publication : équipements de production, studio, logiciels et
                        modalités de réalisation des projets. Aucun Master distinct n&apos;est affiché
                        dans cette filière sans maquette et décision d&apos;ouverture formelles.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <ShieldCheck className="h-5 w-5 text-cyan-500" /> Méthodes et évaluation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        Articles, dossiers, productions audio-visuelles, travaux pratiques, examens,
                        portfolio, projet éditorial et rapport de stage. Les évaluations pratiques sont
                        accompagnées de critères transparents.
                      </p>
                      <p className="mt-3">
                        Approche pédagogique visée : environ 40 % d&apos;apports théoriques et 60 % de
                        pratiques, projets, travaux dirigés, terrain, stages et immersions, sous réserve
                        de la maquette approuvée.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Compétences */}
            <TabsContent value="competences">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    Compétences visées et résultats d&apos;apprentissage
                  </CardTitle>
                  <CardDescription>
                    Chaque compétence est associée à un résultat d&apos;apprentissage attendu en fin de
                    formation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-20">Code</TableHead>
                        <TableHead>Compétence visée</TableHead>
                        <TableHead>Résultat d&apos;apprentissage attendu</TableHead>
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

            {/* Parcours */}
            <TabsContent value="parcours">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Organisation du parcours de Licence</CardTitle>
                  <CardDescription>
                    Licence : 3 ans, 6 semestres, 180 crédits selon le cadre pédagogique de travail. La
                    répartition détaillée des unités d&apos;enseignement est fixée dans la maquette
                    semestrielle validée de la filière.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-24">Cycle</TableHead>
                        <TableHead>Organisation</TableHead>
                        <TableHead>Statut</TableHead>
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
                    Les tableaux semestriels complets (unités d&apos;enseignement, matières, volumes
                    CM/TD/TP/TPE et crédits) figurent dans le volume pédagogique annexé et doivent être
                    contrôlés et harmonisés avant publication comme données définitives.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Enseignements */}
            <TabsContent value="enseignements">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <BookOpen className="h-5 w-5 text-cyan-500" /> Principaux enseignements
                    </CardTitle>
                    <CardDescription>Liste présentée au public, selon la maquette validée</CardDescription>
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
                      Chaque syllabus précise les formats attendus, les outils disponibles, les critères
                      éditoriaux, les règles de droit à l&apos;image et les modalités d&apos;évaluation.
                      Les productions doivent respecter le cadre éthique.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Axes forts de la formation</CardTitle>
                    <CardDescription>
                      Du journalisme de vérification à la stratégie de communication.
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

            {/* Projets et stages */}
            <TabsContent value="projets">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <ClipboardList className="h-5 w-5 text-cyan-500" /> Projets de fin de module et
                      soutenances
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-700">
                    <p>
                      Journal-école, podcast, reportage, interview, mini-documentaire, campagne
                      institutionnelle ou stratégie éditoriale. Livrables : script, contenu final, fiche
                      de vérification et présentation.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Users className="h-5 w-5 text-cyan-500" /> Immersions, sorties pédagogiques et
                      stages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-700">
                    <p>
                      Visites de médias et services communication, exercices de reportage encadrés,
                      participation à des événements et stage dans une rédaction, agence ou service de
                      communication lorsque possible.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image + moyens */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/campus/IMG-20250212-WA0016.jpg"
              alt="Étudiants du pôle Journalisme et communication sur le campus ABS"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Moyens mis à la disposition des étudiants
            </h2>
            <p className="text-slate-700 mb-4">
              Enseignants en journalisme, communication et médias ; ordinateurs, connexion, appareil
              photo/caméra, micros et logiciels disponibles. Aucun studio ou matériel n&apos;est présenté
              comme acquis sans inventaire physique confirmé.
            </p>
            <p className="text-sm text-slate-500">
              Suivi et amélioration continue : résultats par unité d&apos;enseignement et par semestre,
              évaluation des enseignements par les étudiants, suivi des projets et stages, collecte
              annuelle des retours des diplômés et employeurs lorsque les données sont disponibles,
              révision périodique des maquettes et des contenus.
            </p>
          </div>
        </div>
      </section>

      {/* Débouchés */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Débouchés et perspectives professionnelles
          </h2>
          <p className="max-w-3xl text-slate-700 mb-6">
            Perspectives indicatives, selon le portfolio et l&apos;expérience de chaque diplômé — les
            débouchés sont des perspectives, pas des garanties d&apos;emploi :
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Assistant communication",
              "Rédacteur junior",
              "Journaliste débutant",
              "Community manager",
              "Assistant relations presse",
              "Producteur de contenus",
              "Chargé de communication junior",
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
            Vous souhaitez en savoir plus sur la filière Journalisme-Communication ?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-slate-200">
            Contactez l&apos;équipe de ABS pour vérifier les conditions d&apos;admission, les pièces à
            fournir, le calendrier et les places disponibles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold">
                Demander des informations
              </Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold"
              >
                <Phone className="mr-2 h-4 w-4" /> Contacter ABS sur WhatsApp
              </Button>
            </a>
            <Link href="/apply">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold"
              >
                Candidater
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
