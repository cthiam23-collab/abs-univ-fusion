"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, GraduationCap, Info, Languages, Search } from "lucide-react"

type Bloc = { titre: string }

const filieres: {
  id: string
  label: string
  description: string
  lien: string
  progression: { niveau: string; contenu: string }[]
  blocs: Bloc[]
}[] = [
  {
    id: "administration",
    label: "Administration des Affaires",
    description:
      "Le parcours repose sur un tronc commun (management, économie, comptabilité, finance, marketing, droit, ressources humaines, gestion de projet), puis une spécialisation progressive en L3 selon les options retenues et les effectifs autorisés.",
    lien: "/programs/business-administration",
    progression: [
      {
        niveau: "L1",
        contenu: "Fondamentaux, méthodes de travail et premières applications (tronc commun).",
      },
      {
        niveau: "L2",
        contenu: "Approfondissement du tronc commun, pratiques et projets.",
      },
      {
        niveau: "L3",
        contenu:
          "Options progressives sous réserve de validation de la maquette et des ressources : Marketing ; Audit et Contrôle de Gestion ; Banque et Ingénierie Financière ; Management des Ressources Humaines ; Agrobusiness.",
      },
    ],
    blocs: [
      { titre: "Management et théorie des organisations" },
      { titre: "Économie générale et économie d'entreprise" },
      { titre: "Comptabilité générale, analyse financière et mathématiques financières" },
      { titre: "Finance d'entreprise, budget, trésorerie et contrôle de gestion" },
      { titre: "Droit des affaires et environnement réglementaire" },
      { titre: "Marketing fondamental, techniques commerciales et marketing digital" },
      { titre: "Gestion des ressources humaines" },
      { titre: "Gestion des opérations, achats et chaîne logistique" },
      { titre: "Entrepreneuriat, gestion de projet, stratégie et gouvernance" },
      { titre: "Outils numériques de gestion, analyse de données et anglais des affaires" },
    ],
  },
  {
    id: "informatique",
    label: "Ingénierie Informatique",
    description:
      "Un socle scientifique et technique — mathématiques, logique, algorithmique, programmation, systèmes, réseaux et données — complété par une initiation progressive à l'intelligence artificielle et à la cybersécurité.",
    lien: "/programs/engineering/computer-science",
    progression: [
      {
        niveau: "L1",
        contenu: "Fondamentaux, méthodes de travail et premières applications.",
      },
      { niveau: "L2", contenu: "Approfondissement, pratiques et projets." },
      {
        niveau: "L3",
        contenu: "Spécialisation progressive, projet, stage et mémoire selon maquette.",
      },
    ],
    blocs: [
      { titre: "Mathématiques, logique, statistiques et algorithmique" },
      { titre: "Architecture des ordinateurs et systèmes d'exploitation" },
      { titre: "Programmation, structures de données et génie logiciel" },
      { titre: "Développement web et mobile" },
      { titre: "Bases de données et ingénierie des données" },
      { titre: "Réseaux informatiques et administration des systèmes" },
      { titre: "Intelligence artificielle, apprentissage automatique et analyse de données" },
      { titre: "Cybersécurité, sécurité applicative et protection des systèmes" },
      { titre: "Gestion de projets informatiques, qualité logicielle et méthodes agiles" },
      { titre: "Anglais informatique et documentation technique" },
    ],
  },
  {
    id: "genie-gcm",
    label: "Génie Géologique, Civil et Minier",
    description:
      "Des blocs disciplinaires couvrant les sciences de la Terre, la topographie, la géotechnique, les ouvrages et le secteur minier, avec un accent sur la sécurité, l'environnement et les outils numériques (par exemple QGIS ; AutoCAD Civil 3D et Surpac selon disponibilité).",
    lien: "/programs/geological-civil-mining-engineering",
    progression: [
      {
        niveau: "L1",
        contenu: "Fondamentaux, méthodes de travail et premières applications.",
      },
      { niveau: "L2", contenu: "Approfondissement, pratiques et projets." },
      {
        niveau: "L3",
        contenu: "Spécialisation progressive, projet, stage et mémoire selon maquette.",
      },
    ],
    blocs: [
      { titre: "Mathématiques, physique, chimie et sciences de la Terre" },
      { titre: "Géologie générale, minéralogie, pétrologie et cartographie" },
      { titre: "Topographie, géomatique, SIG et télédétection" },
      { titre: "Mécanique des sols, géotechnique et matériaux de construction" },
      { titre: "Résistance des matériaux et principes de structures" },
      { titre: "Hydrogéologie, géologie de l'ingénieur et risques naturels" },
      { titre: "Prospection minière, géologie minière et méthodes d'exploitation" },
      { titre: "Environnement, réhabilitation des sites et développement durable" },
      { titre: "Outils numériques et logiciels techniques ; anglais scientifique et technique" },
    ],
  },
  {
    id: "rai",
    label: "Relations et Affaires Internationales",
    description:
      "Des blocs disciplinaires consacrés aux relations internationales, aux institutions, à la diplomatie, à l'intégration africaine et à la coopération, avec l'anglais à chaque semestre et l'espagnol progressif intégré à la maquette.",
    lien: "/programs/international-relations",
    progression: [
      {
        niveau: "L1",
        contenu: "Fondamentaux, méthodes de travail et premières applications.",
      },
      { niveau: "L2", contenu: "Approfondissement, pratiques et projets." },
      {
        niveau: "L3",
        contenu: "Spécialisation progressive, projet, stage et mémoire selon maquette.",
      },
    ],
    blocs: [
      { titre: "Histoire et théories des relations internationales" },
      { titre: "Géopolitique, pensée politique et analyse stratégique" },
      { titre: "Droit international public et institutions internationales" },
      { titre: "Économie internationale et économie politique" },
      { titre: "Diplomatie, négociation et protocole" },
      { titre: "Intégration africaine, Union africaine, CEDEAO et organisations régionales pertinentes" },
      { titre: "Paix, sécurité, prévention et résolution des conflits" },
      { titre: "Coopération internationale et gestion de projets de développement" },
      { titre: "Méthodologie de recherche, rédaction diplomatique et analyse de politiques publiques" },
      {
        titre:
          "Anglais diplomatique à chaque semestre et espagnol progressif intégré à la maquette RAI",
      },
    ],
  },
  {
    id: "journalisme",
    label: "Journalisme-Communication",
    description:
      "Des blocs disciplinaires du journalisme et de la communication : écriture, vérification, production, droit des médias, stratégies de communication et anglais des médias à chaque semestre.",
    lien: "/programs/journalism-communication",
    progression: [
      {
        niveau: "L1",
        contenu: "Fondamentaux, méthodes de travail et premières applications.",
      },
      { niveau: "L2", contenu: "Approfondissement, pratiques et projets." },
      {
        niveau: "L3",
        contenu: "Spécialisation progressive, projet, stage et mémoire selon maquette.",
      },
    ],
    blocs: [
      { titre: "Fondements du journalisme, histoire des médias et théorie de la communication" },
      { titre: "Rédaction journalistique, écriture professionnelle et narration" },
      { titre: "Recherche d'information, investigation et vérification des faits" },
      { titre: "Droit des médias, éthique et déontologie" },
      { titre: "Journalisme radio, télévision, presse écrite et médias numériques" },
      { titre: "Photographie, prise de son, vidéo et montage" },
      { titre: "Communication institutionnelle et relations publiques" },
      { titre: "Marketing de contenu, réseaux sociaux et stratégie éditoriale" },
      { titre: "Communication de crise, événementiel et gestion de l'image" },
      { titre: "Anglais des médias, interview et communication interculturelle" },
    ],
  },
]

export default function CourseCatalogPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const q = searchTerm.toLowerCase()
  const matchBloc = (b: Bloc) => b.titre.toLowerCase().includes(q)

  const results = filieres.map((f) => ({
    ...f,
    blocsVisibles: q === "" ? f.blocs : f.blocs.filter(matchBloc),
    matched:
      q === "" ||
      f.label.toLowerCase().includes(q) ||
      f.description.toLowerCase().includes(q) ||
      f.blocs.some(matchBloc) ||
      f.progression.some((p) => p.contenu.toLowerCase().includes(q)),
  }))

  const totalVisible = results.reduce((acc, f) => acc + (f.matched ? f.blocsVisibles.length : 0), 0)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center text-white">
        <Image
          src="/images/campus/IMG-20250212-WA0020.jpg"
          alt="Étudiants de ABS en cours"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-900/60" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">Catalogue des enseignements</h1>
          <p className="text-lg md:text-xl text-slate-200">
            Les blocs disciplinaires de référence des cinq filières de Licence (3 ans, 6 semestres,
            180 crédits), avec la progression L1–L3 documentée pour chaque filière.
          </p>
        </div>
      </section>

      {/* Note maquettes */}
      <section className="pt-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-lg border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900 flex gap-3 max-w-4xl mx-auto">
            <Info className="h-5 w-5 shrink-0 mt-0.5" />
            <p>
              Les tableaux semestriels complets — unités d&apos;enseignement, matières, volumes
              CM/TD/TP/TPE et crédits — figurent dans le volume pédagogique annexé et doivent être
              contrôlés et harmonisés avant publication comme données définitives. Les listes ci-dessous
              présentent les blocs disciplinaires de référence de chaque filière, à confirmer par la
              Direction pour chaque rentrée.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="pt-6">
              <label htmlFor="course-search" className="block text-sm font-semibold text-blue-900 mb-2">
                Rechercher un enseignement
              </label>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    id="course-search"
                    type="text"
                    placeholder="Rechercher par mot-clé (ex. comptabilité, géotechnique, géopolitique, montage...)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Button className="bg-blue-700 hover:bg-blue-900 text-white">
                  <Search className="mr-2 h-4 w-4" /> Rechercher
                </Button>
              </div>
              {q !== "" && (
                <p className="mt-3 text-sm text-slate-600">
                  {totalVisible} enseignement(s) correspondent à « {searchTerm} ».
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tabs per filière */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="administration" className="w-full">
            <TabsList className="flex flex-wrap justify-center w-full mb-8">
              {filieres.map((f) => (
                <TabsTrigger key={f.id} value={f.id} className="text-sm">
                  {f.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {results.map((f) => (
              <TabsContent key={f.id} value={f.id}>
                <p className="text-slate-600 max-w-3xl mb-6">{f.description}</p>

                {/* Progression L1-L3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {f.progression.map((p) => (
                    <div key={p.niveau} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <p className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 mb-1">
                        <GraduationCap className="h-4 w-4 text-cyan-500" /> {p.niveau}
                      </p>
                      <p className="text-sm text-slate-600">{p.contenu}</p>
                    </div>
                  ))}
                </div>

                {/* Blocs disciplinaires */}
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Blocs disciplinaires de référence
                </h3>
                {f.matched && f.blocsVisibles.length > 0 ? (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                    {f.blocsVisibles.map((b) => (
                      <li key={b.titre} className="flex items-start gap-2 text-slate-700">
                        <BookOpen className="h-4 w-4 mt-1 text-cyan-500 shrink-0" />
                        {b.titre}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="rounded-lg bg-slate-50 border border-slate-200 p-6 text-slate-600 mb-8">
                    Aucun enseignement ne correspond à votre recherche dans cette filière.
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={f.lien}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-900"
                  >
                    Voir la fiche complète de la filière <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                    <Languages className="h-4 w-4" /> Anglais à chaque semestre (progression bilingue)
                  </span>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Info band */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-900">180 crédits</p>
            <p className="text-sm text-slate-600 mt-2">
              Licence : 6 semestres de 30 crédits, selon le cadre pédagogique de travail.
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-900">40 % / 60 %</p>
            <p className="text-sm text-slate-600 mt-2">
              Environ 40 % d&apos;apports théoriques, 60 % de pratiques, projets, terrain et stages,
              sous réserve de la maquette approuvée.
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-900">Langues</p>
            <p className="text-sm text-slate-600 mt-2">
              Français et anglais à chaque semestre ; espagnol progressif en Relations et Affaires
              Internationales selon le dispositif validé.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Un enseignement vous intéresse ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-200">
            Découvrez la fiche complète de la filière concernée, ou contactez l&apos;équipe de ABS pour
            vérifier les parcours ouverts, les maquettes et les conditions d&apos;admission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/academics/programs">
              <Button size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold px-8 py-3 text-lg">
                Voir les programmes <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg"
              >
                Demander des informations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
