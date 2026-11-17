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
  title: "Licence en Ingénierie Informatique | ABS",
  description: "Licence en Ingénierie Informatique à Bamako : algorithmique, programmation, développement web et mobile, bases de données, systèmes, réseaux et cybersécurité. 3 ans, 6 semestres, 180 crédits. Tarif annuel indicatif 1 025 000 FCFA (confirmation écrite 2026-2027 requise).",
  path: "/programs/engineering/computer-science",
})

const competences = [
  {
    code: "II01",
    competence: "Résoudre un problème par algorithmique",
    resultat: "Formaliser une solution et la traduire en programme.",
  },
  {
    code: "II02",
    competence: "Développer une application",
    resultat: "Concevoir, coder, tester et documenter une application.",
  },
  {
    code: "II03",
    competence: "Gérer des données",
    resultat: "Modéliser une base et exécuter des requêtes adaptées.",
  },
  {
    code: "II04",
    competence: "Comprendre systèmes et réseaux",
    resultat: "Décrire une architecture et diagnostiquer des incidents simples.",
  },
  {
    code: "II05",
    competence: "Sécuriser les développements",
    resultat: "Identifier les risques courants et appliquer les bonnes pratiques.",
  },
  {
    code: "II06",
    competence: "Travailler en mode projet",
    resultat: "Utiliser un dépôt de code, suivre les tâches et présenter une démonstration.",
  },
]

const enseignements = [
  "Mathématiques appliquées et logique",
  "Algorithmique et programmation",
  "Python et/ou Java selon maquette",
  "Développement web : HTML, CSS, JavaScript et frameworks selon ressources",
  "Bases de données et SQL",
  "Systèmes d'exploitation et réseaux",
  "Génie logiciel, tests et assurance qualité",
  "Développement mobile selon maquette",
  "Cybersécurité et protection des données",
  "Données et introduction progressive à l'IA",
  "Anglais technique à chaque semestre",
  "Projets tutorés, développement personnel et immersion",
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

const axes = [
  {
    icon: Cpu,
    titre: "Génie logiciel",
    texte: "Conception, programmation, tests et qualité des applications.",
  },
  {
    icon: Smartphone,
    titre: "Développement web et mobile",
    texte: "Interfaces web, applications connectées et services numériques.",
  },
  {
    icon: GitBranch,
    titre: "Intelligence artificielle et science des données",
    texte: "Initiation progressive à l'IA, aux données et à leur exploitation.",
  },
  {
    icon: Lock,
    titre: "Cybersécurité",
    texte: "Protection des systèmes, des données et bonnes pratiques de sécurité.",
  },
]

export default function ComputerSciencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Pôle 2 — Ingénierie informatique et technologies numériques
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence en Ingénierie Informatique
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Maîtriser les technologies. Concevoir les innovations. Renforcer la souveraineté numérique de
            l&apos;Afrique.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Former des spécialistes capables de concevoir, développer, tester et maintenir des solutions
            numériques adaptées aux besoins des organisations, tout en intégrant la sécurité, la qualité
            logicielle et les évolutions de l&apos;intelligence artificielle. Le socle scientifique —
            mathématiques, logique, algorithmique, structures de données, systèmes, réseaux et bases de
            données — ouvre une spécialisation progressive vers le génie logiciel, le web et mobile,
            l&apos;IA, la science des données et la cybersécurité.
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
                      Concevoir et mettre en œuvre des solutions informatiques fiables, utiles et
                      sécurisées.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objectifs généraux</p>
                      <ul className="space-y-1.5">
                        <li>
                          Acquérir les bases de l&apos;algorithmique, de la programmation et des systèmes.
                        </li>
                        <li>Développer des applications et des bases de données.</li>
                        <li>Appliquer des méthodes de test, de cybersécurité et de gestion de projet.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objectifs spécifiques</p>
                      <ul className="space-y-1.5">
                        <li>Écrire, documenter et tester des programmes.</li>
                        <li>Créer des interfaces web et des applications connectées à des données.</li>
                        <li>
                          Administrer les environnements de développement et comprendre les réseaux.
                        </li>
                        <li>
                          Réaliser un projet informatique en équipe et présenter ses choix techniques.
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
                        Accès en Licence : baccalauréat ou titre équivalent ; un profil scientifique est
                        recommandé pour faciliter les apprentissages mathématiques et algorithmiques.
                        Conditions définitives à confirmer dans la procédure d&apos;admission de ABS.
                        Master : Licence pertinente ou équivalent et dossier selon parcours ouvert.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        À confirmer avant publication : intitulé officiel du diplôme, technologies
                        enseignées, laboratoires, équipements et spécialisation exacte en IA.
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
                        Évaluations pratiques en laboratoire, exercices, contrôles, projets, examens et
                        soutenance. Les critères portent notamment sur le fonctionnement, la sécurité, la
                        qualité du code, la documentation et la capacité d&apos;explication.
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
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Axes de spécialisation progressive</CardTitle>
                    <CardDescription>
                      Après un socle scientifique et technique commun, la spécialisation se construit
                      progressivement selon les ressources et la maquette validée.
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
                      Les outils logiciels cités dans la maquette doivent être installés et accessibles
                      aux étudiants ; leur disponibilité effective est vérifiée avant publication. Le
                      rattachement d&apos;un Master en Intelligence Artificielle, Réseaux et
                      Télécommunications doit être validé avant de publier une promesse de spécialisation.
                    </p>
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
                      Application web ou mobile, API, base de données, automatisation, prototype IA ou
                      audit de sécurité pédagogique. Dépôt du code, documentation, démonstration et
                      soutenance.
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
                      Ateliers de programmation, visites ou échanges avec des services informatiques,
                      projets réels encadrés et stage en entreprise ou service numérique, selon
                      disponibilité et convention.
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
              src="/images/documents/v3-image2.jpg"
              alt="Étudiants de ABS travaillant ensemble sur un projet"
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
              Enseignants en programmation, systèmes, réseaux et données ; laboratoire informatique avec
              ordinateurs, accès réseau, outils de développement et environnement de versionnement. La
              disponibilité effective des équipements doit être vérifiée avant publication.
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
            Perspectives indicatives, selon les compétences acquises et la poursuite de spécialisation —
            les débouchés sont des perspectives, pas des garanties d&apos;emploi :
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Développeur junior",
              "Intégrateur web",
              "Technicien support",
              "Assistant administrateur systèmes/réseaux",
              "Testeur logiciel junior",
              "Analyste de données débutant",
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
            Vous souhaitez en savoir plus sur la filière Ingénierie Informatique ?
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
