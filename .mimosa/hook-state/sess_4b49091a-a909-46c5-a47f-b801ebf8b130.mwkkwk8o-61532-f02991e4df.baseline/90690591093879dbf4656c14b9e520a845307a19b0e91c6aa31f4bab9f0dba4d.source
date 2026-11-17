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
  GraduationCap,
  HardHat,
  Layers,
  Mail,
  MapPin,
  Mountain,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licence en Génie Géologique, Civil et Minier | ABS",
  description: "Licence en Génie Géologique, Civil et Minier à Bamako : géologie, topographie, matériaux, génie civil, ressources minières, sécurité et environnement. 3 ans, 6 semestres, 180 crédits. Tarif annuel indicatif 1 350 000 FCFA (confirmation écrite 2026-2027 requise).",
  path: "/programs/geological-civil-mining-engineering",
})

const competences = [
  {
    code: "GCM01",
    competence: "Observer et décrire les terrains",
    resultat: "Collecter des observations et caractériser des matériaux.",
  },
  {
    code: "GCM02",
    competence: "Cartographier et mesurer",
    resultat: "Organiser des données de levé et produire une représentation lisible.",
  },
  {
    code: "GCM03",
    competence: "Comprendre les matériaux et ouvrages",
    resultat: "Expliquer les propriétés et les contraintes principales.",
  },
  {
    code: "GCM04",
    competence: "Contribuer aux études techniques",
    resultat: "Lire des plans et appliquer des méthodes de calcul adaptées au niveau.",
  },
  {
    code: "GCM05",
    competence: "Intégrer sécurité et environnement",
    resultat: "Repérer les risques et proposer des mesures de prévention.",
  },
  {
    code: "GCM06",
    competence: "Communiquer les résultats",
    resultat: "Rédiger un compte rendu et présenter des données techniques.",
  },
]

const enseignements = [
  "Mathématiques appliquées et physique",
  "Chimie générale et matériaux",
  "Géologie générale et structurale",
  "Minéralogie, pétrographie et cartographie géologique",
  "Topographie et levés de terrain",
  "Mécanique des sols et matériaux de construction",
  "Hydrologie et géotechnique selon maquette",
  "Dessin technique et logiciels de conception",
  "SIG : QGIS et outils cartographiques selon ressources",
  "Initiation aux outils métiers : AutoCAD Civil 3D, Surpac selon disponibilité",
  "Exploitation minière, sécurité et environnement",
  "Anglais scientifique, projets et sorties de terrain",
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
    value: "1 350 000 FCFA/an (tarif communiqué, confirmation écrite 2026–2027 requise)",
  },
  {
    label: "Frais annexes communiqués",
    value: "Dossier : 15 000 FCFA ; soutenance Licence : 80 000 FCFA — montants à confirmer pour 2026–2027",
  },
  { label: "Contact", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

export default function GeologicalCivilMiningEngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Pôle 1 — Génie géologique, civil et minier
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence en Génie Géologique, Civil et Minier
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Explorer les ressources. Construire les infrastructures. Valoriser durablement le potentiel
            africain.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Associer la compréhension des terrains et des matériaux, les techniques de génie civil et les
            connaissances du secteur minier pour former des professionnels attentifs à la sécurité, à la
            qualité des ouvrages et à la gestion responsable des ressources naturelles. L&apos;Afrique
            dispose d&apos;un patrimoine géologique et minier considérable et de besoins importants en
            infrastructures : cette formation vise les compétences scientifiques et techniques capables
            d&apos;accompagner ces projets de développement.
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
                      Former des techniciens supérieurs et cadres débutants capables de participer à
                      l&apos;étude des terrains, à la préparation de projets et au suivi d&apos;activités
                      géologiques, civiles et minières.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objectifs généraux</p>
                      <ul className="space-y-1.5">
                        <li>
                          Maîtriser les fondamentaux scientifiques nécessaires à l&apos;étude du sol et
                          des matériaux.
                        </li>
                        <li>
                          Comprendre les méthodes de levé, cartographie, conception et suivi des
                          ouvrages.
                        </li>
                        <li>Intégrer les règles de sécurité, d&apos;environnement et de qualité.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Objectifs spécifiques</p>
                      <ul className="space-y-1.5">
                        <li>
                          Décrire des formations géologiques et interpréter des données de terrain.
                        </li>
                        <li>Réaliser des relevés et produire des cartes ou plans de base.</li>
                        <li>
                          Contribuer à la préparation et au suivi de travaux civils ou miniers.
                        </li>
                        <li>
                          Utiliser des logiciels spécialisés lorsqu&apos;ils sont disponibles et
                          enseignés.
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
                        Accès en Licence : baccalauréat scientifique ou titre équivalent recommandé, sous
                        réserve des conditions d&apos;admission officielles. Accès en Master : Licence
                        pertinente en géologie, génie civil, mines ou domaine connexe, dossier académique
                        et parcours effectivement ouvert.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        À confirmer avant publication : périmètre disciplinaire, logiciels et équipements
                        réellement accessibles, sorties de terrain et éventuelles exigences
                        professionnelles.
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
                        Contrôles écrits, comptes rendus de TP, cartes/plans, études de cas, évaluations
                        de terrain, examens, projet et stage. Validation selon les règles
                        institutionnelles approuvées.
                      </p>
                      <p className="mt-3">
                        Approche pédagogique visée : environ 40 % d&apos;apports théoriques et 60 % de
                        pratiques, projets, travaux dirigés, terrain, stages et immersions, sous réserve
                        de la maquette approuvée. Les sorties de terrain respectent des consignes de
                        sécurité et des équipements de protection définis par la maquette.
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
                    contrôlés et harmonisés avant publication comme données définitives. Les maquettes de
                    Master du domaine géologique, civil et minier doivent être validées avant ouverture
                    des inscriptions.
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
                      Des logiciels tels que QGIS, AutoCAD Civil 3D et Surpac peuvent être mobilisés selon
                      les objectifs pédagogiques et les équipements disponibles.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Trois volets articulés</CardTitle>
                    <CardDescription>
                      Une formation au carrefour des sciences de la Terre, de l&apos;ingénierie des
                      ouvrages et des ressources minérales.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <Mountain className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Volet géologique</p>
                        <p className="text-sm text-slate-600">
                          Observer et caractériser les terrains, interpréter les données géologiques et
                          géotechniques, cartographier.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <HardHat className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Volet génie civil</p>
                        <p className="text-sm text-slate-600">
                          Matériaux, mécanique des sols, conception et suivi des ouvrages, plans et
                          calculs de base.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Layers className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Volet minier</p>
                        <p className="text-sm text-slate-600">
                          Exploration et exploitation des ressources minérales, sécurité, environnement
                          et réhabilitation des sites.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 border-t border-slate-200 pt-4">
                      Une attention particulière est accordée à la sécurité, à la gestion responsable des
                      ressources, à la réduction des impacts environnementaux et à la prise en compte des
                      besoins des communautés.
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
                      Carnet de terrain, cartographie géologique, analyse d&apos;un matériau, étude de
                      cas géotechnique ou mini-projet de suivi de chantier. Présentation des résultats et
                      rapport technique.
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
                      Sorties de terrain encadrées, visites de chantiers, sites géologiques et entreprises
                      minières si conventions et sécurité le permettent ; stage professionnel avec tuteur
                      et rapport.
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
              src="/images/campus/IMG-20250212-WA0009.jpg"
              alt="Étudiants du pôle Génie géologique, civil et minier sur le campus ABS"
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
              Enseignants en géologie, topographie, matériaux et génie civil ; instruments de mesure,
              équipements de protection individuelle, ressources cartographiques et logiciels selon
              licences et disponibilité. Aucun laboratoire ou partenariat précis n&apos;est revendiqué
              sans vérification.
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
            Perspectives indicatives, sous réserve des compétences, habilitations et exigences de
            l&apos;employeur — les débouchés sont des perspectives, pas des garanties d&apos;emploi :
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Assistant géologue",
              "Technicien de terrain",
              "Assistant topographe",
              "Technicien matériaux",
              "Assistant chantier",
              "Assistant d'études géotechniques ou minières",
            ].map((d) => (
              <Badge key={d} variant="secondary" className="text-sm px-3 py-1">
                {d}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500 max-w-3xl">
            Secteurs concernés (à titre indicatif) : bureaux d&apos;études, entreprises de construction,
            sociétés minières, laboratoires, organismes de cartographie, services techniques et
            structures environnementales et géotechniques.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vous souhaitez en savoir plus sur la filière Génie Géologique, Civil et Minier ?
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
