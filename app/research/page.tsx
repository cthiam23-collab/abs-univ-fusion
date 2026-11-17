import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  BookOpen,
  Building2,
  Coins,
  Globe2,
  Handshake,
  Landmark,
  Laptop,
  LineChart,
  Microscope,
  Newspaper,
  Pickaxe,
  Sprout,
  Users,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Recherche | African Business School (ABS)",
  description: "La recherche appliquée à l'Université Privée African Business School de Bamako : entrepreneuriat, mines et développement durable, finance islamique, numérique et IA, intégration africaine.",
  path: "/research",
})

const stats = [
  { value: "6", label: "Domaines de recherche appliquée", icon: Microscope },
  { value: "16", label: "Masters spécialisés adossés à la recherche", icon: Landmark },
  { value: "80%", label: "De pratique dans la pédagogie ABS", icon: Laptop },
  { value: "1", label: "Chaire dédiée à l'intégration africaine", icon: Globe2 },
]

const axes = [
  {
    icon: Sprout,
    title: "Entrepreneuriat & PME africaines",
    description:
      "Comment naissent, grandissent et résistent les entreprises maliennes : modèles économiques, financement des PME, écosystème startup de Bamako, formalisation du secteur informel et entrepreneuriat féminin.",
    image: "/images/campus/IMG-20250212-WA0016.jpg",
    tags: ["Écosystème startup", "Financement des PME", "Entrepreneuriat féminin"],
  },
  {
    icon: Pickaxe,
    title: "Industries extractives & développement durable",
    description:
      "Le Mali est une terre d'or et de bauxite. Nos travaux analysent la gouvernance minière, la redistribution locale des revenus, l'impact environnemental et la responsabilité sociale des entreprises du secteur.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    tags: ["Gouvernance minière", "RSE", "Impact environnemental"],
  },
  {
    icon: Coins,
    title: "Finance, finance islamique & inclusion",
    description:
      "Microfinance, mobile money, finance islamique et ingénierie financière : comment connecter les acteurs économiques ouest-africains aux circuits de financement, y compris conformes aux principes de l'Islam.",
    image: "/images/gallery/IMG-20250216-WA0015.jpg",
    tags: ["Finance islamique", "Mobile money", "Inclusion financière"],
  },
  {
    icon: Laptop,
    title: "Numérique, IA & transformation des organisations",
    description:
      "Intelligence artificielle appliquée à la gestion, cybersécurité des PME, gouvernance des données et digitalisation des services publics dans le contexte ouest-africain.",
    image: "/images/campus/IMG-20250212-WA0022.jpg",
    tags: ["IA appliquée", "Gouvernance des données", "Transformation digitale"],
  },
  {
    icon: Globe2,
    title: "Relations internationales & intégration africaine",
    description:
      "CEDEAO, ZLECAf, diplomatie économique et géopolitique des ressources : la Chaire ABS éclaire la place du Mali et de l'Afrique de l'Ouest dans les chaînes de valeur mondiales.",
    image: "/images/gallery/IMG-20250216-WA0030.jpg",
    tags: ["ZLECAf", "CEDEAO", "Diplomatie économique"],
  },
  {
    icon: Newspaper,
    title: "Médias, communication & information publique",
    description:
      "Qualité de l'information économique, journalisme de données, communication de crise et liberté de la presse : un axe au service d'une opinion publique éclairée et d'entreprises transparentes.",
    image: "/images/gallery/IMG-20250216-WA0060.jpg",
    tags: ["Journalisme de données", "Communication", "Information économique"],
  },
]

const centers = [
  { name: "Centre d'Excellence en Management & Entrepreneuriat", icon: Building2 },
  { name: "Observatoire des Industries Minières et du Développement Durable", icon: Pickaxe },
  { name: "Laboratoire Finance & Ingénierie Financière", icon: LineChart },
  { name: "Laboratoire Numérique & Intelligence Artificielle", icon: Laptop },
  { name: "Centre Médias & Communication", icon: Newspaper },
  { name: "Chaire Relations Internationales & Intégration Africaine", icon: Globe2 },
]

const projects = [
  {
    title: "Cartographie de l'écosystème startup de Bamako",
    lead: "Centre d'Excellence en Management & Entrepreneuriat",
    description:
      "Recensement et analyse des jeunes entreprises de la capitale : secteurs porteurs, obstacles au financement, rôle des incubateurs et des diasporas.",
    icon: Sprout,
  },
  {
    title: "Baromètre de la gouvernance minière au Mali",
    lead: "Observatoire des Industries Minières",
    description:
      "Suivi annuel des pratiques des compagnies aurifères : contenu local, redevances, dialogue communautaire et trajectoires de développement durable.",
    icon: Pickaxe,
  },
  {
    title: "Finance islamique et financement des infrastructures",
    lead: "Laboratoire Finance & Ingénierie Financière",
    description:
      "Étude des mécanismes mourabaha et sukuk appliqués au financement de projets en Afrique de l'Ouest, avec scénarios d'application au Mali.",
    icon: Coins,
  },
  {
    title: "IA et pilotage des PME maliennes",
    lead: "Laboratoire Numérique & IA",
    description:
      "Prototypage d'outils d'aide à la décision accessibles aux dirigeants de PME : prévision de trésorerie, gestion des stocks, analyse client.",
    icon: Laptop,
  },
  {
    title: "Médias et information économique : la couverture du secteur minier dans la presse malienne",
    lead: "Centre Médias & Communication",
    description:
      "Analyse de la qualité de l'information économique citoyenne : données citées, journalisme de données et enjeux du débat public sur la gouvernance des ressources.",
    icon: Newspaper,
  },
]

const publications = [
  {
    title: "Entreprendre à Bamako : trajectoires et modèles économiques des jeunes entreprises",
    authors: "Corps professoral ABS — Centre d'Excellence en Management & Entrepreneuriat",
    journal: "Cahiers de la Recherche ABS",
    date: "2025",
  },
  {
    title: "Or, bauxite et développement : quel contenu local pour les industries extractives maliennes ?",
    authors: "Équipe ABS — Observatoire des Industries Minières",
    journal: "Recherche & Territoires Ouest-Africains",
    date: "2025",
  },
  {
    title: "Mobile money et inclusion financière des femmes entrepreneures au Sahel",
    authors: "Laboratoire Finance & Ingénierie Financière ABS",
    journal: "Cahiers de la Recherche ABS",
    date: "2024",
  },
]

const partnerships = [
  {
    partner: "Entreprises et fédérations professionnelles du Mali",
    description:
      "Chaires d'entreprise, études commanditées et stages-recherche : nos étudiants et enseignants travaillent sur des problèmes réels du secteur privé malien.",
    icon: Handshake,
  },
  {
    partner: "Institutions publiques et collectivités",
    description:
      "Expertise sur la gouvernance des marchés publics, les politiques de développement local et l'élaboration de politiques publiques fondées sur les données.",
    icon: Landmark,
  },
  {
    partner: "Réseaux académiques africains et internationaux",
    description:
      "Co-publications, séminaires conjoints et mobilité des enseignants-chercheurs avec des universités partenaires en Afrique et ailleurs.",
    icon: Users,
  },
]

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center text-white">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus de l'ABS, Bamako"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-950/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Recherche appliquée — Bamako, Mali
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            La recherche ABS : penser l'Afrique depuis Bamako
          </h1>
          <p className="mb-8 text-lg md:text-xl text-slate-100">
            Entrepreneuriat, mines et développement durable, finance islamique, intelligence artificielle, médias et
            intégration africaine : six domaines au service des défis réels du Mali et de l'Afrique de l'Ouest.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/centers">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                Découvrir nos centres <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/research/collaborate">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                Collaborer avec nous
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-cyan-50 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-cyan-400">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ambition */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">
              Une grande école de business, une véritable mission de recherche
            </h2>
            <p className="mb-4 text-lg text-slate-600">
              À l'Université Privée African Business School, la recherche n'est pas un ornement : elle alimente
              directement nos 80% de pédagogie pratique. Chaque axe de recherche est adossé à nos bachelors et à nos 16
              masters, pour que les étudiants apprennent en résolvant les problèmes concrets des entreprises et des
              territoires maliens.
            </p>
            <p className="mb-6 text-lg text-slate-600">
              De la gouvernance des ressources minières (or, bauxite) à la finance islamique, en passant par
              l'intelligence artificielle appliquée à la gestion, nos équipes produisent des connaissances utiles aux
              décideurs, aux entrepreneurs et aux citoyens.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/research/publications">
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                  <BookOpen className="mr-2 h-4 w-4" /> Voir les publications
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="text-blue-700 hover:bg-cyan-50">
                  Notre vision <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl shadow-xl lg:h-96">
            <Image
              src="/images/campus/IMG-20250212-WA0025.jpg"
              alt="Étudiants de l'ABS en travail de groupe"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tabs : Axes / Centres / Publications / Partenariats */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl font-bold text-blue-900 md:text-4xl">Explorer la recherche ABS</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600">
            Axes d'excellence, centres dédiés, publications du corps professoral et partenariats : tout l'écosystème
            de recherche de l'ABS.
          </p>
          <Tabs defaultValue="axes" className="w-full">
            <TabsList className="mb-10 grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="axes" className="text-base">
                Axes de recherche
              </TabsTrigger>
              <TabsTrigger value="centres" className="text-base">
                Centres
              </TabsTrigger>
              <TabsTrigger value="publications" className="text-base">
                Publications
              </TabsTrigger>
              <TabsTrigger value="partenariats" className="text-base">
                Partenariats
              </TabsTrigger>
            </TabsList>

            <TabsContent value="axes">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {axes.map((axe, i) => (
                  <Card key={i} className="group overflow-hidden transition-shadow hover:shadow-xl">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={axe.image}
                        alt={axe.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent" />
                      <axe.icon className="absolute bottom-3 left-4 h-8 w-8 text-cyan-400" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">{axe.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-slate-600">{axe.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {axe.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-blue-900"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="centres">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {centers.map((center, i) => (
                  <Link href="/research/centers" key={i}>
                    <Card className="group h-full transition-all hover:border-blue-700 hover:shadow-lg">
                      <CardContent className="flex h-full flex-col items-start gap-4 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900 text-cyan-400 transition-transform group-hover:scale-110">
                          <center.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700">
                          {center.name}
                        </h3>
                        <span className="mt-auto inline-flex items-center text-sm font-medium text-blue-700">
                          En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="publications">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {publications.map((pub, i) => (
                  <Card key={i} className="transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">{pub.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2 text-sm text-slate-600">{pub.authors}</p>
                      <p className="text-sm font-medium text-blue-700">
                        {pub.journal} · {pub.date}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/research/publications">
                  <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                    Toutes les publications <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="partenariats">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {partnerships.map((p, i) => (
                  <Card key={i} className="h-full transition-shadow hover:shadow-lg">
                    <CardContent className="flex h-full flex-col gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-blue-900">
                        <p.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">{p.partner}</h3>
                      <p className="text-sm text-slate-600">{p.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/research/partnerships">
                  <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                    Nos partenariats de recherche <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projets en cours */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl font-bold text-blue-900 md:text-4xl">Projets en cours</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600">
            Des travaux de recherche appliquée, menés avec les étudiants des masters ABS, sur les enjeux majeurs du
            Mali et de la sous-région.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Card key={i} className="flex gap-4 p-6 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-cyan-400">
                  <project.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-blue-900">{project.title}</h3>
                  <p className="mb-2 text-sm font-medium text-blue-700">{project.lead}</p>
                  <p className="text-sm text-slate-600">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Rejoignez notre communauté de recherche</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Étudiant en master, enseignant-chercheur, entreprise ou institution : il existe mille façons de contribuer
            à la recherche ABS. Parlons-en.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/collaborate">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                Collaborer avec l'ABS
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                Contacter la Direction Générale
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            {ORGANIZATION.contact.address.formatted} · {ORGANIZATION.contact.phone} · {ORGANIZATION.contact.email}
          </p>
        </div>
      </section>
    </div>
  )
}
