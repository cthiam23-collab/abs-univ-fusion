import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { buildMetadata } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Cpu,
  GraduationCap,
  Globe2,
  Languages,
  Mountain,
  Newspaper,
  Sprout,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Formations Licence et Master | ABS Bamako",
  description:
    "Explorez les domaines de formation de ABS et contactez l'administration pour connaître les parcours ouverts.",
  path: "/academics/programs",
})

const filieres = [
  {
    title: "Administration des Affaires",
    intro:
      "Comprendre le fonctionnement des organisations, analyser leurs résultats et contribuer à la gestion, à la finance, au marketing, aux ressources humaines et au développement des activités.",
    duration: "Licence · 3 ans · 6 semestres · 180 crédits",
    image: "/images/campus/IMG-20250212-WA0003.jpg",
    link: "/programs/business-administration",
    icon: Briefcase,
    modules: [
      "Comptabilité générale et analytique",
      "Finance d'entreprise et analyse financière",
      "Marketing fondamental et digital",
      "Entrepreneuriat et business plan",
    ],
  },
  {
    title: "Relations et Affaires Internationales",
    intro:
      "Analyser les acteurs, institutions et rapports de force internationaux, avec une compréhension des réalités africaines et une ouverture aux dynamiques mondiales.",
    duration: "Licence · 3 ans · 6 semestres · 180 crédits",
    image: "/images/documents/v3-image2.jpg",
    link: "/programs/international-relations",
    icon: Globe2,
    modules: [
      "Droit international et institutions",
      "Diplomatie et négociation",
      "Intégration régionale et coopération africaine",
      "Espagnol progressif selon maquette validée",
    ],
  },
  {
    title: "Journalisme-Communication",
    intro:
      "Collecter, vérifier, produire et diffuser l'information, et concevoir la communication des organisations, dans le respect de l'éthique et du droit de l'information.",
    duration: "Licence · 3 ans · 6 semestres · 180 crédits",
    image: "/images/campus/IMG-20250212-WA0016.jpg",
    link: "/programs/journalism-communication",
    icon: Newspaper,
    modules: [
      "Genres journalistiques et rédaction",
      "Vérification des faits et déontologie",
      "Production vidéo et montage selon équipements",
      "Journalisme web et réseaux sociaux",
    ],
  },
  {
    title: "Ingénierie Informatique",
    intro:
      "Concevoir, développer, tester et maintenir des solutions numériques adaptées aux besoins des organisations, en intégrant sécurité, qualité logicielle et initiation progressive à l'IA.",
    duration: "Licence · 3 ans · 6 semestres · 180 crédits",
    image: "/images/documents/v3-image3.jpg",
    link: "/programs/engineering/computer-science",
    icon: Cpu,
    modules: [
      "Algorithmique et programmation",
      "Développement web et bases de données",
      "Systèmes d'exploitation et réseaux",
      "Cybersécurité et protection des données",
    ],
  },
  {
    title: "Génie Géologique, Civil et Minier",
    intro:
      "Associer la compréhension des terrains et des matériaux, les techniques de génie civil et les connaissances du secteur minier, en intégrant sécurité et environnement.",
    duration: "Licence · 3 ans · 6 semestres · 180 crédits",
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    link: "/programs/geological-civil-mining-engineering",
    icon: Mountain,
    modules: [
      "Géologie générale et structurale",
      "Topographie et levés de terrain",
      "Mécanique des sols et matériaux",
      "Exploitation minière, sécurité et environnement",
    ],
  },
]

const masters = [
  {
    title: "Master en Administration des Affaires",
    description:
      "Approfondir le management, la stratégie, la gouvernance et le pilotage des organisations.",
  },
  {
    title: "Master en Banque et Ingénierie Financière",
    description:
      "Développer des compétences en analyse financière, financement, banque, gestion des risques et décisions d'investissement.",
  },
  {
    title: "Master en Relations Internationales et Diplomatie",
    description:
      "Approfondir l'analyse des relations internationales, la négociation, les institutions et les enjeux diplomatiques.",
  },
  {
    title: "Master en Développement Durable et Responsabilité Sociétale des Entreprises (RSE)",
    description:
      "Étudier les démarches de durabilité, la responsabilité des organisations, la gouvernance et la mesure des impacts.",
  },
  {
    title: "Master en Audit et Contrôle de Gestion",
    description:
      "Développer des compétences en contrôle, audit, pilotage de la performance, gestion des risques et reporting.",
  },
  {
    title: "Master en Marketing Digital",
    description:
      "Approfondir la stratégie numérique, la communication digitale, l'analyse des performances et la relation client.",
  },
  {
    title: "Master en Intelligence Artificielle, Réseaux et Télécommunications",
    description:
      "Explorer les systèmes intelligents, les infrastructures numériques et les réseaux, selon la spécialisation effectivement retenue.",
  },
  {
    title: "Master en Management International",
    description:
      "Approfondir la stratégie, la gestion interculturelle, le développement international et le pilotage d'activités transfrontalières.",
  },
  {
    title: "Master en Gestion de Projets",
    description:
      "Former des professionnels capables de concevoir, planifier, financer, exécuter, suivre et évaluer des projets.",
  },
  {
    title: "Master en Qualité, Hygiène, Sécurité et Environnement (QHSE)",
    description:
      "Concevoir, déployer et piloter des systèmes de management intégrés de la qualité, de l'hygiène, de la santé et sécurité au travail et de l'environnement.",
  },
]

const steps = [
  {
    n: "1",
    title: "Prise de contact",
    text: "Échangez avec l'équipe de ABS sur la filière envisagée, les profils recherchés et les places disponibles.",
  },
  {
    n: "2",
    title: "Dépôt du dossier",
    text: "Constituez votre dossier de candidature avec les pièces demandées par l'administration (dossier : 15 000 FCFA).",
  },
  {
    n: "3",
    title: "Étude du dossier",
    text: "Le dossier est examiné selon les conditions officielles d'admission de ABS en vigueur.",
  },
  {
    n: "4",
    title: "Inscription",
    text: "Confirmation des modalités — calendrier, frais et parcours — puis finalisation de l'inscription.",
  },
]

export default function AcademicProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center text-white">
        <Image
          src="/images/campus/IMG-20250212-WA0022.jpg"
          alt="Étudiants de ABS sur le campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900/60" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <span className="inline-block mb-4 rounded-full bg-cyan-400/20 border border-cyan-400/40 px-4 py-1 text-sm font-medium text-cyan-300">
            Licence : 3 ans · 6 semestres · 180 crédits
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            L&apos;offre de formation de ABS
          </h1>
          <p className="text-lg md:text-xl mb-8 text-slate-200">
            Cinq Licences réparties en cinq pôles — sciences et ingénierie, numérique, sciences sociales
            et internationales, information et communication, sciences de gestion — et un catalogue de
            Masters dont les parcours sont à confirmer par la Direction avant affichage comme admissions
            ouvertes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#formations">
              <Button
                size="lg"
                className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold px-8 py-3 text-lg"
              >
                Explorer les formations <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/admissions">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg"
              >
                Conditions d&apos;admission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs tabs */}
      <section id="formations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">
            Nos formations
          </h2>
          <p className="text-center text-slate-600 mt-4 max-w-3xl mx-auto mb-12">
            Les fiches ci-dessous constituent la base éditoriale du catalogue web. Avant toute
            inscription, l&apos;administration confirme pour chaque rentrée les parcours effectivement
            ouverts, les intitulés officiels des diplômes, les conditions d&apos;accès et les frais.
          </p>

          <Tabs defaultValue="licences" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-10 h-12">
              <TabsTrigger value="licences" className="text-base md:text-lg">
                Licences (5)
              </TabsTrigger>
              <TabsTrigger value="masters" className="text-base md:text-lg">
                Masters (10)
              </TabsTrigger>
            </TabsList>

            {/* Licences */}
            <TabsContent value="licences">
              <div className="space-y-10">
                {filieres.map((f, i) => (
                  <Card
                    key={f.title}
                    className={`overflow-hidden border-slate-200 shadow-sm hover:shadow-xl transition-shadow ${
                      i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    } md:flex`}
                  >
                    <div className="relative md:w-2/5 h-56 md:h-auto">
                      <Image
                        src={f.image}
                        alt={f.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <span className="absolute top-4 left-4 rounded-full bg-blue-900/90 text-white text-xs font-semibold px-3 py-1">
                        {f.duration}
                      </span>
                    </div>
                    <div className="md:w-3/5">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl text-blue-900">
                          <f.icon className="h-6 w-6 text-cyan-500" />
                          {f.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-5">{f.intro}</p>
                        <div className="mb-5">
                          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                            Enseignements phares
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-slate-700">
                            {f.modules.map((m) => (
                              <li key={m} className="flex items-start gap-2">
                                <BookOpen className="h-4 w-4 mt-0.5 text-cyan-500 shrink-0" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-sm text-slate-500 mb-5">
                          Langues : français et anglais à chaque semestre (progression bilingue,{" "}
                          <Link href="/academics/pedagogy" className="text-blue-700 underline">
                            voir la page Pédagogie
                          </Link>
                          ).
                        </p>
                        <Link href={f.link}>
                          <Button className="bg-blue-700 hover:bg-blue-900 text-white">
                            Découvrir la filière <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Masters */}
            <TabsContent value="masters">
              <div className="rounded-lg border border-amber-300 bg-amber-50 p-5 mb-8 text-sm text-amber-900">
                Les parcours de Master listés ci-dessous correspondent à des axes de formation à confirmer
                par la Direction avant affichage comme admissions ouvertes (Master : 2 ans, 4 semestres,
                120 crédits, uniquement pour les parcours effectivement ouverts et validés).
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                {masters.map((m) => (
                  <Link key={m.title} href="/programs/masters" className="group">
                    <div className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-cyan-300 transition-all">
                      <h3 className="font-semibold text-blue-900 leading-snug mb-2">{m.title}</h3>
                      <p className="text-sm text-slate-600">{m.description}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:text-cyan-600">
                        Voir le catalogue des Masters <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cadre pédagogique */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Cadre Licence",
                text: "3 ans, 6 semestres, 180 crédits selon le cadre pédagogique de travail. La répartition des unités d'enseignement est détaillée dans la maquette semestrielle de chaque filière.",
              },
              {
                icon: GraduationCap,
                title: "Approche 40 % / 60 %",
                text: "Environ 40 % d'apports théoriques et 60 % de pratiques, projets, travaux dirigés, terrain, stages et immersions, sous réserve de la maquette approuvée.",
              },
              {
                icon: Languages,
                title: "Langues de travail",
                text: "Anglais à chaque semestre avec une progression bilingue français–anglais ; en Relations et Affaires Internationales, espagnol progressif selon le dispositif validé.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
                <f.icon className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment candidater */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
            Comment candidater ?
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Un parcours d&apos;admission simple, dont les modalités définitives sont précisées par
            l&apos;administration pour chaque rentrée.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-xl bg-slate-50 border border-slate-200 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white font-bold mb-4">
                  {s.n}
                </span>
                <h3 className="font-semibold text-blue-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/apply">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-900 text-white px-8 py-3 text-lg">
                Déposer ma candidature <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à construire votre projet d&apos;études ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-200">
            Explorez le catalogue des cours, consultez les filières en détail ou contactez l&apos;équipe
            d&apos;admissions pour vérifier les conditions, les pièces à fournir et les places
            disponibles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/academics/course-catalog">
              <Button
                size="lg"
                className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold px-8 py-3 text-lg"
              >
                Catalogue des cours
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
