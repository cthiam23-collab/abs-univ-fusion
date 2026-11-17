import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Building2,
  Coins,
  Globe2,
  Laptop,
  LineChart,
  Mail,
  MapPin,
  Newspaper,
  Phone,
  Pickaxe,
  Sprout,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Centres de recherche | African Business School (ABS)",
  description: "Les six structures de recherche de l'Université Privée African Business School de Bamako : management et entrepreneuriat, industries minières, finance et ingénierie financière, numérique et IA, médias et communication, relations internationales.",
  path: "/research/centers",
})

type Category = "tous" | "mgmt" | "ingenierie" | "medias"

const centers: {
  name: string
  short: string
  category: Exclude<Category, "tous">
  image: string
  mission: string
  axes: string[]
  activities: string[]
}[] = [
  {
    name: "Centre d'Excellence en Management & Entrepreneuriat",
    short: "CEME",
    category: "mgmt",
    image: "/images/campus/IMG-20250212-WA0016.jpg",
    mission:
      "Comprendre comment naissent, grandissent et résistent les entreprises maliennes et ouest-africaines. Le CEME accompagne les fondateurs, analyse l'écosystème startup de Bamako et travaille sur la formalisation du secteur informel, qui représente l'essentiel de l'économie malienne.",
    axes: ["Écosystème startup", "Financement des PME", "Entrepreneuriat féminin", "Formalisation de l'informel"],
    activities: [
      "Cartographie annuelle de l'écosystème entrepreneurial de Bamako",
      "Ateliers de business modelling avec les étudiants des masters",
      "Études de cas d'entreprises maliennes diffusées en cours",
    ],
  },
  {
    name: "Observatoire des Industries Minières et du Développement Durable",
    short: "OIMDD",
    category: "ingenierie",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    mission:
      "Le Mali est une terre d'or et de bauxite. L'Observatoire suit en continu les pratiques des compagnies extractives : contenu local, redevances versées aux collectivités, impact environnemental et dialogue communautaire, pour que la richesse minière se transforme en développement durable.",
    axes: ["Gouvernance minière", "Contenu local", "RSE extractive", "Impact environnemental"],
    activities: [
      "Baromètre annuel de la gouvernance minière au Mali",
      "Séminaires avec les opérateurs du secteur de l'or et de la bauxite",
      "Mémoires étudiants sur les retombées locales des sites miniers",
    ],
  },
  {
    name: "Laboratoire Finance & Ingénierie Financière",
    short: "LaFIF",
    category: "mgmt",
    image: "/images/gallery/IMG-20250216-WA0015.jpg",
    mission:
      "Connecter les acteurs économiques ouest-africains aux circuits de financement : microfinance, mobile money, marchés de capitaux de l'UEMOA et finance islamique — mourabaha, moucharaka, sukuk — appliquées au financement des entreprises et des infrastructures.",
    axes: ["Finance islamique", "Mobile money", "Inclusion financière", "Marchés UEMOA"],
    activities: [
      "Études sur le financement des infrastructures par les sukuk en Afrique de l'Ouest",
      "Suivi de l'inclusion financière des femmes entrepreneures au Sahel",
      "Simulations de gestion de portefeuille avec les étudiants en finance",
    ],
  },
  {
    name: "Laboratoire Numérique & Intelligence Artificielle",
    short: "LaNIA",
    category: "ingenierie",
    image: "/images/campus/IMG-20250212-WA0022.jpg",
    mission:
      "L'IA n'est pas réservée aux grandes capitals : le LaNIA prototype des outils accessibles aux dirigeants de PME maliennes — prévision de trésorerie, gestion des stocks, analyse client — et travaille sur la cybersécurité, la gouvernance des données et la digitalisation des services publics.",
    axes: ["IA appliquée à la gestion", "Cybersécurité des PME", "Gouvernance des données", "E-gouvernement"],
    activities: [
      "Prototypage d'outils d'aide à la décision pour PME",
      "Hackathons et projets étudiants sur des données réelles locales",
      "Formations à la culture des données pour les managers",
    ],
  },
  {
    name: "Centre Médias & Communication",
    short: "CMC",
    category: "medias",
    image: "/images/gallery/IMG-20250216-WA0060.jpg",
    mission:
      "Une opinion publique éclairée et des entreprises transparentes passent par une information de qualité. Le CMC travaille sur le journalisme économique et de données, la communication de crise et la liberté de la presse dans le contexte malien et sahélien.",
    axes: ["Journalisme de données", "Information économique", "Communication de crise", "Liberté de la presse"],
    activities: [
      "Analyses de la couverture médiatique de l'économie malienne",
      "Ateliers fact-checking avec les étudiants en communication",
      "Rencontre annuelle médias-entreprises sur le campus ABS",
    ],
  },
  {
    name: "Chaire Relations Internationales & Intégration Africaine",
    short: "CRIIA",
    category: "medias",
    image: "/images/gallery/IMG-20250216-WA0030.jpg",
    mission:
      "CEDEAO, ZLECAf, diplomatie économique, géopolitique des ressources : la Chaire éclaire la place du Mali et de l'Afrique de l'Ouest dans les chaînes de valeur mondiales et forme les futurs négociateurs de l'intégration africaine.",
    axes: ["ZLECAf", "CEDEAO", "Diplomatie économique", "Géopolitique des ressources"],
    activities: [
      "Conférences diplomatiques ouvertes au public",
      "Simulations de négociations commerciales africaines",
      "Notes d'analyse sur les politiques d'intégration régionale",
    ],
  },
]

const filters: { value: Category; label: string }[] = [
  { value: "tous", label: "Tous les centres" },
  { value: "mgmt", label: "Management & Finance" },
  { value: "ingenierie", label: "Ingénierie & Mines" },
  { value: "medias", label: "Médias & RI" },
]

export default function ResearchCentersPage() {
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
            Recherche — Centres & laboratoires
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Six structures de recherche, un seul objectif : l'impact
          </h1>
          <p className="mb-8 text-lg md:text-xl text-slate-100">
            Centres d'excellence, observatoires, laboratoires et chaire : chaque structure ABS est adossée à un
            secteur clé de l'économie malienne et ouest-africaine, du mobile money à l'or et à la bauxite.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/collaborate">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                Collaborer avec un centre <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/research/publications">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                Nos publications
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filtre par domaine */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl font-bold text-blue-900 md:text-4xl">
            Nos centres de recherche
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600">
            Filtrez les structures par grand domaine pour trouver l'interlocuteur adapté à votre projet, votre
            mémoire ou votre partenariat.
          </p>

          <Tabs defaultValue="tous" className="w-full">
            <TabsList className="mx-auto mb-12 grid w-full max-w-3xl grid-cols-2 lg:grid-cols-4">
              {filters.map((f) => (
                <TabsTrigger key={f.value} value={f.value} className="text-sm lg:text-base">
                  {f.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {filters.map((f) => (
              <TabsContent key={f.value} value={f.value}>
                <div className="grid grid-cols-1 gap-10">
                  {centers
                    .filter((c) => f.value === "tous" || c.category === f.value)
                    .map((center) => (
                      <Card
                        key={center.name}
                        className="grid overflow-hidden lg:grid-cols-5 transition-shadow hover:shadow-xl"
                      >
                        <div className="relative h-56 lg:h-auto lg:col-span-2">
                          <Image src={center.image} alt={center.name} fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent lg:bg-gradient-to-r" />
                          <span className="absolute left-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">
                            {center.short}
                          </span>
                        </div>
                        <div className="lg:col-span-3">
                          <CardHeader>
                            <CardTitle className="flex items-start gap-3 text-xl text-blue-900">
                              <Building2 className="mt-1 h-6 w-6 shrink-0 text-cyan-400" />
                              {center.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="mb-4 text-slate-600">{center.mission}</p>
                            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
                              Axes de travail
                            </p>
                            <div className="mb-4 flex flex-wrap gap-2">
                              {center.axes.map((axe) => (
                                <span
                                  key={axe}
                                  className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-blue-900"
                                >
                                  {axe}
                                </span>
                              ))}
                            </div>
                            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
                              Activités emblématiques
                            </p>
                            <ul className="mb-6 space-y-1.5 text-sm text-slate-600">
                              {center.activities.map((a) => (
                                <li key={a} className="flex items-start gap-2">
                                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                                  {a}
                                </li>
                              ))}
                            </ul>
                            <Link href="/research/collaborate">
                              <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                                Travailler avec ce centre <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Recherche & étudiants */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-2xl shadow-xl lg:h-96">
            <Image
              src="/images/gallery/IMG-20250216-WA0070.jpg"
              alt="Étudiants ABS en projet de recherche"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">
              Les étudiants au cœur des centres
            </h2>
            <p className="mb-4 text-lg text-slate-600">
              À l'ABS, la recherche n'est pas réservée aux enseignants-chercheurs. Dans la logique des 80% de
              pédagogie pratique, les étudiants de nos 16 masters participent aux enquêtes, aux baromètres et aux
              prototypes de chaque centre : collecte de terrain auprès des entreprises de Bamako, analyse de données
              minières ou financières, rédaction de notes de synthèse.
            </p>
            <p className="mb-6 text-lg text-slate-600">
              Cette immersion est un tremplin : stages, mémoires professionnellement utiles et premières opportunités
              professionnelles dans les secteurs qui recrutent au Mali.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/programs/masters">
                <Button className="bg-blue-900 text-white hover:bg-blue-700">
                  Nos masters adossés aux centres <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/career-services">
                <Button variant="ghost" className="text-blue-700 hover:bg-cyan-50">
                  Débouchés & carrière <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Un projet de recherche, une étude, un partenariat ?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Entreprises, institutions publiques, ONG ou universités partenaires : nos centres répondent à toute
            demande de collaboration, d'expertise ou d'étude commanditée.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/collaborate">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                Proposer une collaboration
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-slate-300 sm:flex-row sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" /> Hamdallaye ACI 2000, Rue 461 Porte 42, Bamako
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan-400" /> +223 78 14 14 88
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> infos@abs-univ.com
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
