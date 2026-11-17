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
  Briefcase,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Factory,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Phone,
  SearchCheck,
  Sprout,
  Target,
  Truck,
  UserCog,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licence en Administration des Affaires | ABS",
  description: "Licence en Administration des Affaires à Bamako : management, comptabilité, finance, marketing, ressources humaines et entrepreneuriat. 3 ans, 6 semestres, 180 crédits. Tarif annuel indicatif 1 025 000 FCFA (confirmation écrite 2026-2027 requise).",
  path: "/programs/business-administration",
})

const competences = [
  {
    code: "AA01",
    competence: "Analyser l'environnement économique et organisationnel",
    resultat: "Produire une analyse structurée du contexte d'une organisation.",
  },
  {
    code: "AA02",
    competence: "Gérer les ressources financières",
    resultat: "Élaborer un budget, interpréter des indicateurs et expliquer les écarts.",
  },
  {
    code: "AA03",
    competence: "Concevoir une action marketing",
    resultat: "Définir une cible, une proposition de valeur et un plan d'action.",
  },
  {
    code: "AA04",
    competence: "Organiser les ressources humaines",
    resultat: "Contribuer à la planification, au recrutement et au développement des équipes.",
  },
  {
    code: "AA05",
    competence: "Piloter un projet",
    resultat: "Planifier des tâches, suivre les résultats et présenter un bilan.",
  },
  {
    code: "AA06",
    competence: "Communiquer professionnellement",
    resultat:
      "Rédiger un rapport et défendre une recommandation en français et en anglais.",
  },
]

const enseignements = [
  "Économie générale et économie d'entreprise",
  "Comptabilité générale et analytique",
  "Mathématiques financières et statistiques",
  "Finance d'entreprise et analyse financière",
  "Marketing fondamental et marketing digital",
  "Management et stratégie",
  "Gestion des ressources humaines",
  "Droit des affaires et fiscalité selon maquette",
  "Entrepreneuriat et business plan",
  "Audit, contrôle de gestion et tableaux de bord",
  "Anglais professionnel à chaque semestre",
  "Développement personnel, projets et immersion",
]

const options = [
  {
    icon: LineChart,
    titre: "Ingénierie financière",
    texte: "Analyse financière, gestion budgétaire, financement des entreprises et gestion des risques.",
  },
  {
    icon: Calculator,
    titre: "Comptabilité-finance",
    texte: "Comptabilité générale et analytique, fiscalité, contrôle de gestion et pilotage financier.",
  },
  {
    icon: SearchCheck,
    titre: "Audit",
    texte: "Contrôle interne, analyse des risques, évaluation des procédures et amélioration des performances.",
  },
  {
    icon: Target,
    titre: "Marketing et communication",
    texte: "Études de marché, stratégie commerciale, marketing digital et développement de marque.",
  },
  {
    icon: Truck,
    titre: "Transport et logistique",
    texte: "Approvisionnement, gestion des flux, transport, distribution et optimisation de la chaîne logistique.",
  },
  {
    icon: Sprout,
    titre: "Agrobusiness",
    texte: "Gestion des entreprises agricoles et agroalimentaires, valorisation des productions et chaînes de valeur.",
  },
  {
    icon: UserCog,
    titre: "Gestion des ressources humaines",
    texte: "Recrutement, développement des compétences, administration du personnel et management des équipes.",
  },
  {
    icon: Factory,
    titre: "Entrepreneuriat",
    texte: "Création d'entreprise, élaboration de business plans, innovation, financement et développement des activités.",
  },
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
    value: "1 025 000 FCFA/an (tarif communiqué, confirmation écrite 2026–2027 requise)",
  },
  {
    label: "Frais annexes communiqués",
    value: "Dossier : 15 000 FCFA ; soutenance Licence : 80 000 FCFA — montants à confirmer pour 2026–2027",
  },
  { label: "Contact", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

export default function BusinessAdministrationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Pôle 5 — Administration des affaires
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence en Administration des Affaires
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Manager avec méthode. Entreprendre avec audace. Créer une valeur durable.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Former des professionnels capables de comprendre le fonctionnement des organisations,
            d&apos;analyser leurs résultats et de contribuer à la gestion, à la finance, au marketing,
            aux ressources humaines et au développement des activités. La formation répond aux besoins
            des entreprises, administrations, associations et projets entrepreneuriaux.
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
                      Développer une capacité de gestion responsable, analytique et opérationnelle.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objectifs généraux</p>
                      <ul className="space-y-1.5">
                        <li>Maîtriser les fondamentaux de la gestion et de l&apos;économie.</li>
                        <li>
                          Développer l&apos;analyse financière, la communication professionnelle et la
                          prise de décision.
                        </li>
                        <li>
                          Conduire des projets, travailler en équipe et intégrer l&apos;éthique et la
                          durabilité.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objectifs spécifiques</p>
                      <ul className="space-y-1.5">
                        <li>Construire un budget et lire des états financiers.</li>
                        <li>Élaborer un plan marketing et analyser un marché.</li>
                        <li>
                          Contribuer au recrutement, à l&apos;organisation et au suivi de la performance.
                        </li>
                        <li>Présenter des recommandations argumentées à partir de données.</li>
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
                        Accès en Licence : baccalauréat ou titre équivalent, sous réserve des conditions
                        officielles d&apos;admission de ABS. Accès en Master : Licence ou diplôme
                        équivalent dans un domaine pertinent, dossier académique et conditions du
                        parcours retenu.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        Les parcours effectivement ouverts, les intitulés officiels et les frais sont
                        confirmés par l&apos;administration pour chaque rentrée.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <Briefcase className="h-5 w-5 text-cyan-500" /> Méthodes et évaluation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        Contrôle continu, devoirs, études de cas, exposés, travaux de groupe, examens
                        semestriels, projets et stage. Les pondérations exactes sont celles du règlement
                        et de la maquette validés.
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
                  <CardTitle className="text-blue-900">Compétences visées et résultats d&apos;apprentissage</CardTitle>
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
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Domaines de spécialisation du pôle</CardTitle>
                    <CardDescription>
                      Options envisagées dans le pôle Administration des affaires. À confirmer :
                      options réellement ouvertes pour chaque rentrée.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {options.map((o) => (
                      <div key={o.titre} className="flex gap-3">
                        <o.icon className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-800">{o.titre}</p>
                          <p className="text-sm text-slate-600">{o.texte}</p>
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
                      Étude de cas d&apos;entreprise, budget prévisionnel, audit simplifié, plan
                      marketing ou business plan. Présentation orale et rapport écrit ; soutenance de fin
                      de Licence selon le règlement approuvé.
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
                      Visites d&apos;entreprises et d&apos;organisations, études de cas, projets tutorés
                      et stage en milieu professionnel selon calendrier validé. Le stage donne lieu à un
                      rapport, une évaluation du tuteur et une présentation/soutenance selon les règles
                      de ABS.
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
              src="/images/campus/IMG-20250212-WA0003.jpg"
              alt="Étudiants en cours d'Administration des Affaires"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Moyens mis à la disposition des étudiants</h2>
            <p className="text-slate-700 mb-4">
              Enseignants en gestion, comptabilité, finance, marketing et ressources humaines ; salle de
              cours, bibliothèque et ressources numériques, tableurs et outils de présentation. Les
              logiciels spécialisés et partenariats nominatifs ne sont annoncés qu&apos;après vérification
              de leur disponibilité.
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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Débouchés et perspectives professionnelles</h2>
          <p className="max-w-3xl text-slate-700 mb-6">
            Perspectives indicatives, selon l&apos;expérience et la spécialisation de chaque diplômé —
            les débouchés sont des perspectives, pas des garanties d&apos;emploi :
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Assistant de gestion",
              "Assistant comptable ou financier",
              "Chargé de clientèle",
              "Assistant RH",
              "Assistant marketing",
              "Gestionnaire de projet junior",
              "Entrepreneur ou appui à une PME",
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
            Vous souhaitez en savoir plus sur la filière Administration des Affaires ?
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
