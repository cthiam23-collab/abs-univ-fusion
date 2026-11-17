import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Coins, Download, Globe2, Laptop, Newspaper, Pickaxe, Sprout, Users } from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Publications | African Business School (ABS)",
  description: "Publications de recherche appliquée du corps professoral de l'Université Privée African Business School de Bamako : finance islamique, mines et développement durable, entrepreneuriat au Mali, IA appliquée à la gestion, gouvernance.",
  path: "/research/publications",
})

type Year = "2026" | "2025" | "2024"

const publications: {
  year: Year
  title: string
  type: string
  unit: string
  icon: typeof BookOpen
  summary: string
  keywords: string[]
}[] = [
  {
    year: "2026",
    title: "Finance islamique et financement des infrastructures en Afrique de l'Ouest : quelles trajectoires pour le Mali ?",
    type: "Étude de recherche appliquée",
    unit: "Laboratoire Finance & Ingénierie Financière",
    icon: Coins,
    summary:
      "Analyse des mécanismes mourabaha et sukuk appliqués au financement de projets d'infrastructures, avec scénarios concrets d'application au contexte malien et recommandations à destination des décideurs et investisseurs de la région.",
    keywords: ["Sukuk", "Mourabaha", "Infrastructures", "UEMOA"],
  },
  {
    year: "2026",
    title: "IA générative et pilotage des PME : usages, opportunités et garde-fous pour les entreprises maliennes",
    type: "Note de recherche",
    unit: "Laboratoire Numérique & Intelligence Artificielle",
    icon: Laptop,
    summary:
      "Premiers résultats d'un prototypage d'outils d'aide à la décision accessibles aux dirigeants de PME : prévision de trésorerie, gestion des stocks et analyse client, avec un accent sur la sobriété technologique et la confidentialité des données.",
    keywords: ["IA appliquée", "PME", "Prévision de trésorerie", "Gouvernance des données"],
  },
  {
    year: "2025",
    title: "Or, bauxite et développement : quel contenu local pour les industries extractives maliennes ?",
    type: "Rapport d'observatoire",
    unit: "Observatoire des Industries Minières et du Développement Durable",
    icon: Pickaxe,
    summary:
      "Baromètre annuel des pratiques des compagnies aurifères et bauxitiques opérant au Mali : contenu local, redevances versées aux collectivités, dialogue communautaire et trajectoires de développement durable. Une référence pour les acteurs du secteur.",
    keywords: ["Gouvernance minière", "Contenu local", "RSE", "Développement durable"],
  },
  {
    year: "2025",
    title: "Entreprendre à Bamako : trajectoires et modèles économiques des jeunes entreprises",
    type: "Cahier de recherche",
    unit: "Centre d'Excellence en Management & Entrepreneuriat",
    icon: Sprout,
    summary:
      "Recensement et analyse de l'écosystème startup de la capitale malienne : secteurs porteurs, obstacles au financement, rôle des incubateurs et des diasporas, et trajectoires de formalisation des jeunes entreprises issues du secteur informel.",
    keywords: ["Écosystème startup", "Bamako", "Financement des PME", "Formalisation"],
  },
  {
    year: "2025",
    title: "Supply chain régionale : logistique et compétitivité des échanges commerciaux au sein de l'espace CEDEAO",
    type: "Étude de recherche appliquée",
    unit: "Chaire Relations Internationales & Intégration Africaine",
    icon: Globe2,
    summary:
      "Comment les corridors logistiques ouest-africains et la mise en œuvre de la ZLECAf transforment les chaînes d'approvisionnement : coûts, délais, douanes et opportunités pour les opérateurs économiques maliens.",
    keywords: ["Supply chain", "ZLECAf", "CEDEAO", "Logistique"],
  },
  {
    year: "2025",
    title: "Gouvernance des marchés publics au Mali : transparence, numérique et confiance",
    type: "Note de recherche",
    unit: "Centre d'Excellence en Management & Entrepreneuriat",
    icon: Newspaper,
    summary:
      "État des lieux de la commande publique malienne et pistes de digitalisation pour renforcer la transparence et l'accès des PME locales aux marchés publics, à partir d'un corpus de dossiers d'appels d'offres analysés avec les étudiants.",
    keywords: ["Marchés publics", "Transparence", "Digitalisation", "PME"],
  },
  {
    year: "2024",
    title: "Mobile money et inclusion financière des femmes entrepreneures au Sahel",
    type: "Cahier de recherche",
    unit: "Laboratoire Finance & Ingénierie Financière",
    icon: Coins,
    summary:
      "Enquête auprès de femmes entrepreneures de Bamako et des régions : comment le mobile money court-circuite les barrières classiques de l'accès au crédit et ce qu'il reste à construire pour une inclusion financière complète.",
    keywords: ["Mobile money", "Inclusion financière", "Entrepreneuriat féminin", "Sahel"],
  },
  {
    year: "2024",
    title: "Médias et information économique au Mali : la couverture du secteur minier dans la presse nationale",
    type: "Étude de recherche appliquée",
    unit: "Centre Médias & Communication",
    icon: Newspaper,
    summary:
      "Analyse quantitative et qualitative de la couverture médiatique des questions minières : qualité des données citées, place du journalisme de données et enjeux pour le débat public sur la gouvernance des ressources.",
    keywords: ["Journalisme de données", "Information économique", "Secteur minier", "Mali"],
  },
  {
    year: "2024",
    title: "Former les managers africains à l'ère de l'intelligence artificielle : le pari de la pédagogie 80% pratique",
    type: "Article pédagogique",
    unit: "Corps professoral ABS",
    icon: Users,
    summary:
      "Retour d'expérience du modèle ABS : comment intégrer l'IA, l'anglais professionnel et l'entrepreneuriat dans un cursus LMD fondé sur 80% de pratique, et ce que cela change pour l'employabilité des diplômés au Mali.",
    keywords: ["Pédagogie", "IA", "LMD", "Employabilité"],
  },
]

const years: { value: Year; label: string }[] = [
  { value: "2026", label: "Publications 2026" },
  { value: "2025", label: "Publications 2025" },
  { value: "2024", label: "Publications 2024" },
]

const stats = [
  { value: "6", label: "Domaines de recherche couverts", icon: BookOpen },
  { value: "3", label: "Années de publications accessibles", icon: Sprout },
  { value: "6", label: "Centres et laboratoires producteurs", icon: Users },
]

export default function ResearchPublicationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-center justify-center text-white">
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
            Recherche — Publications
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Des connaissances utiles, ancrées dans les réalités africaines
          </h1>
          <p className="mb-8 text-lg md:text-xl text-slate-100">
            Études, baromètres et cahiers de recherche produits par le corps professoral ABS : finance islamique,
            mines et développement durable, entrepreneuriat, IA appliquée à la gestion, gouvernance et médias.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/collaborate">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                Co-publier avec l'ABS <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/research/centers">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                Découvrir nos centres
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3">
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

      {/* Approche */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-2xl shadow-xl lg:h-96">
            <Image
              src="/images/gallery/IMG-20250216-WA0059.jpg"
              alt="Travail de recherche au sein de l'ABS"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">
              Une recherche appliquée, au service du terrain
            </h2>
            <p className="mb-4 text-lg text-slate-600">
              À l'ABS, chaque publication part d'un problème réel : une entreprise qui ne trouve pas de financement,
              une collectivité qui interroge les retombées d'un site minier, une PME qui veut digitaliser sa gestion.
              Nos enseignants-chercheurs mènent ces enquêtes avec les étudiants des masters, dans la logique des 80%
              de pédagogie pratique.
            </p>
            <p className="mb-6 text-lg text-slate-600">
              Les résultats nourrissent nos cours, nos études de cas et nos partenariats avec les entreprises et les
              institutions du Mali et de l'Afrique de l'Ouest.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/research/partnerships">
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                  Nos partenariats de recherche <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about/faculty-staff">
                <Button variant="ghost" className="text-blue-700 hover:bg-cyan-50">
                  Rencontrer le corps professoral <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Publications par année */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl font-bold text-blue-900 md:text-4xl">Publications par année</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600">
            L'ensemble des travaux signés par les équipes et le corps professoral ABS. Chaque publication est rattachée
            à son centre ou laboratoire d'origine.
          </p>

          <Tabs defaultValue="2026" className="w-full">
            <TabsList className="mx-auto mb-12 grid w-full max-w-2xl grid-cols-3">
              {years.map((y) => (
                <TabsTrigger key={y.value} value={y.value} className="text-base">
                  {y.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {years.map((y) => (
              <TabsContent key={y.value} value={y.value}>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {publications
                    .filter((p) => p.year === y.value)
                    .map((pub) => (
                      <Card key={pub.title} className="group transition-shadow hover:shadow-xl">
                        <CardHeader>
                          <div className="mb-3 flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-cyan-400">
                              <pub.icon className="h-5 w-5" />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                              {pub.type}
                            </span>
                          </div>
                          <CardTitle className="text-lg leading-snug text-blue-900">{pub.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3 text-sm text-slate-600">{pub.summary}</p>
                          <div className="mb-4 flex flex-wrap gap-2">
                            {pub.keywords.map((k) => (
                              <span
                                key={k}
                                className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-blue-900"
                              >
                                {k}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm font-medium text-blue-700">{pub.unit}</p>
                          <p className="mt-1 text-xs text-slate-500">
                            Corps professoral ABS · Cahiers de la Recherche ABS · {pub.year}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
            Les publications sont consultables sur le campus et auprès de la{" "}
            <Link href="/library" className="font-medium text-blue-700 underline hover:text-cyan-400">
              bibliothèque universitaire ABS
            </Link>
            . Pour toute demande de collaboration scientifique,{" "}
            <Link href="/research/collaborate" className="font-medium text-blue-700 underline hover:text-cyan-400">
              contactez nos équipes
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Rejoignez la recherche ABS</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Enseignant-chercheur, doctorant, entreprise ou institution : proposez un sujet, commandez une étude ou
            rejoignez nos équipes. La recherche appliquée se construit à plusieurs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/collaborate">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                <Download className="mr-2 h-4 w-4" /> Proposer une collaboration
              </Button>
            </Link>
            <Link href="/apply">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                Candidater à un master
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
