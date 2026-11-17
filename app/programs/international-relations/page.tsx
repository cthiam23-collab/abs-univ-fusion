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
  Globe2,
  GraduationCap,
  Landmark,
  Languages,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licence en Relations et Affaires Internationales | ABS",
  description: "Licence en Relations et Affaires Internationales à Bamako : géopolitique, droit international, diplomatie, coopération, économie internationale et communication interculturelle. Français et anglais chaque semestre, espagnol progressif. 3 ans, 6 semestres, 180 crédits. Tarif annuel indicatif 1 250 000 FCFA (confirmation écrite 2026-2027 requise).",
  path: "/programs/international-relations",
})

const competences = [
  {
    code: "RAI01",
    competence: "Analyser un contexte international",
    resultat: "Présenter les acteurs, intérêts et enjeux d'une situation.",
  },
  {
    code: "RAI02",
    competence: "Rechercher et vérifier l'information",
    resultat: "Comparer des sources et distinguer faits et opinions.",
  },
  {
    code: "RAI03",
    competence: "Rédiger des notes et synthèses",
    resultat: "Produire une note structurée, sourcée et argumentée.",
  },
  {
    code: "RAI04",
    competence: "Comprendre les institutions",
    resultat: "Décrire le rôle des organisations et cadres de coopération.",
  },
  {
    code: "RAI05",
    competence: "Communiquer en contexte interculturel",
    resultat: "Adapter un message à un public et à un contexte donnés.",
  },
  {
    code: "RAI06",
    competence: "Mobiliser les langues",
    resultat: "Présenter une analyse en français et en anglais ; progresser en espagnol.",
  },
]

const enseignements = [
  "Introduction aux relations internationales",
  "Histoire contemporaine et géopolitique",
  "Droit international et institutions",
  "Diplomatie et négociation",
  "Économie politique internationale",
  "Intégration régionale et coopération africaine",
  "Méthodologie de recherche et analyse de sources",
  "Communication institutionnelle et rédaction de notes",
  "Anglais à chaque semestre",
  "Espagnol progressif à chaque étape prévue par la maquette validée",
  "Développement personnel, simulations et projets",
  "Immersions et visites institutionnelles selon conventions",
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
  {
    label: "Diplôme",
    value: "Licence — 3 ans, 6 semestres, 180 crédits selon cadre de travail",
  },
  { label: "Lieu", value: "Bamako, Mali — Hamdallaye ACI 2000" },
  {
    label: "Langues",
    value:
      "Français et anglais à chaque semestre ; espagnol progressif pour cette filière (volumes et niveaux à valider)",
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
    icon: Globe2,
    titre: "Géopolitique et analyse stratégique",
    texte:
      "Analyser les interactions entre États, organisations internationales, institutions régionales, entreprises et acteurs de la société civile.",
  },
  {
    icon: Landmark,
    titre: "Intégration africaine et coopération",
    texte:
      "Union africaine, CEDEAO et organisations régionales ; réalités africaines, dynamiques régionales et enjeux stratégiques du Sahel.",
  },
  {
    icon: Languages,
    titre: "Langues et communication interculturelle",
    texte:
      "Anglais à chaque semestre et espagnol progressif : recherche, rédaction, négociation et communication dans des environnements complexes.",
  },
]

export default function InternationalRelationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Pôle 3 — Relations et affaires internationales
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence en Relations et Affaires Internationales
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Comprendre le monde. Analyser les rapports de force. Porter les ambitions de l&apos;Afrique.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Donner aux étudiants des outils d&apos;analyse des relations internationales, des
            institutions, de la diplomatie, de la coopération et des enjeux géopolitiques, avec une
            compréhension des réalités africaines et une ouverture aux dynamiques mondiales. Une attention
            particulière est accordée aux dynamiques régionales, aux relations entre les pays du continent
            et aux enjeux stratégiques du Sahel.
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
                      Former des profils capables d&apos;analyser les enjeux internationaux, de préparer
                      des dossiers et de contribuer à des activités de coopération, de communication et de
                      relations institutionnelles.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objectifs généraux</p>
                      <ul className="space-y-1.5">
                        <li>Comprendre les acteurs, institutions et rapports de force internationaux.</li>
                        <li>
                          Développer la recherche documentaire, l&apos;analyse politique et la rédaction
                          de notes.
                        </li>
                        <li>Renforcer les compétences linguistiques et interculturelles.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objectifs spécifiques</p>
                      <ul className="space-y-1.5">
                        <li>
                          Analyser un événement international en distinguant faits, sources et
                          interprétations.
                        </li>
                        <li>Rédiger une note de synthèse ou un dossier pays.</li>
                        <li>Préparer une présentation ou une simulation de négociation.</li>
                        <li>
                          Communiquer en français et en anglais et progresser en espagnol selon le
                          dispositif validé.
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
                        officielles de ABS. Intérêt pour l&apos;actualité, la lecture, l&apos;analyse et
                        les langues recommandé. Master : Licence pertinente ou équivalent, selon le
                        parcours réellement ouvert.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        Dispositif linguistique envisagé : français et anglais, avec espagnol progressif
                        pour cette filière. Volumes, niveaux et modalités d&apos;évaluation à valider.
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
                        Dissertations, notes de synthèse, exposés, dossiers de recherche, simulations,
                        examens et rapport de stage. Les critères de qualité des sources et de
                        raisonnement sont explicites.
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
                        <TableHead className="w-24">Code</TableHead>
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
                    contrôlés et harmonisés avant publication comme données définitives. La progression
                    d&apos;espagnol — volumes, crédits et évaluations — est à préciser dans la maquette.
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
                    <CardTitle className="text-blue-900">Axes forts de la formation</CardTitle>
                    <CardDescription>
                      Une lecture des relations internationales ancrée dans les réalités africaines.
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
                      Partenariats diplomatiques ou internationaux affichés uniquement s&apos;ils sont
                      formalisés. Les cours de langues précisent les niveaux visés et les heures par
                      semestre.
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
                      Dossier pays, note de politique publique, analyse de crise, simulation diplomatique,
                      conférence étudiante ou étude de coopération régionale. Rapport documenté et
                      présentation orale.
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
                      Visites et rencontres institutionnelles, conférences, simulations, projets avec
                      associations ou structures de coopération lorsque des accords sont conclus ; stage
                      selon convention.
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
              Enseignants en relations internationales, droit, économie et langues ; accès à une
              bibliothèque et à des ressources numériques, presse et sources institutionnelles. Les
              partenariats diplomatiques ou internationaux ne sont affichés que s&apos;ils sont
              formalisés.
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
            Perspectives indicatives, sous réserve de l&apos;expérience et des conditions de recrutement
            de chaque employeur — les débouchés sont des perspectives, pas des garanties d&apos;emploi :
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Assistant de projet de coopération",
              "Chargé de veille junior",
              "Assistant de relations institutionnelles",
              "Rédacteur/analyste débutant",
              "Appui aux ONG et programmes",
            ].map((d) => (
              <Badge key={d} variant="secondary" className="text-sm px-3 py-1">
                {d}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500 max-w-3xl">
            Secteurs concernés (à titre indicatif) : administrations, services de coopération,
            organisations régionales ou internationales, ONG, projets de développement, relations
            institutionnelles, cabinets d&apos;analyse et fonctions d&apos;appui diplomatique, selon les
            concours et critères propres aux employeurs.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vous souhaitez en savoir plus sur la filière Relations et Affaires Internationales ?
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
