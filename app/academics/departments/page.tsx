import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Briefcase, Cpu, Globe2, Mountain, Newspaper } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Pôles de formation | ABS",
  description:
    "ABS structure son offre autour de cinq pôles de formation : génie géologique civil et minier, ingénierie informatique, relations et affaires internationales, journalisme et communication, administration des affaires.",
  path: "/academics/departments",
})

const poles = [
  {
    slug: "genie-geologique-civil-minier",
    name: "Pôle 1 — Génie géologique, civil et minier",
    shortName: "Génie Géologique, Civil et Minier",
    tagline:
      "Explorer les ressources. Construire les infrastructures. Valoriser durablement le potentiel africain.",
    icon: Mountain,
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    description:
      "L'Afrique dispose d'un patrimoine géologique et minier considérable et fait face à des besoins importants en infrastructures. Le pôle prépare des profils aptes à contribuer à l'étude du sol et du sous-sol, à la conception et au suivi des ouvrages ainsi qu'aux activités d'exploration et d'exploitation des ressources minérales, selon leur spécialisation. Des logiciels spécialisés — QGIS, AutoCAD Civil 3D, Surpac — peuvent être mobilisés selon les objectifs pédagogiques et les équipements disponibles.",
    link: "/programs/geological-civil-mining-engineering",
    linkLabel: "Licence en Génie Géologique, Civil et Minier",
  },
  {
    slug: "ingenierie-informatique",
    name: "Pôle 2 — Ingénierie informatique et technologies numériques",
    shortName: "Ingénierie Informatique",
    tagline:
      "Maîtriser les technologies. Concevoir les innovations. Renforcer la souveraineté numérique de l'Afrique.",
    icon: Cpu,
    image: "/images/documents/v3-image2.jpg",
    description:
      "Le numérique transforme les économies, les entreprises et les administrations. Le pôle développe des compétences solides dans la conception, le développement et la gestion des systèmes informatiques, sur un socle scientifique commun — mathématiques, logique, algorithmique, programmation, réseaux et bases de données. La spécialisation se construit progressivement vers le génie logiciel, le web et mobile, l'intelligence artificielle, la science des données et la cybersécurité, pour concevoir des solutions adaptées aux besoins des organisations africaines.",
    link: "/programs/engineering/computer-science",
    linkLabel: "Licence en Ingénierie Informatique",
  },
  {
    slug: "relations-affaires-internationales",
    name: "Pôle 3 — Relations et affaires internationales",
    shortName: "Relations et Affaires Internationales",
    tagline:
      "Comprendre le monde. Analyser les rapports de force. Porter les ambitions de l'Afrique.",
    icon: Globe2,
    image: "/images/documents/v3-image2.jpg",
    description:
      "Dans un environnement international marqué par la recomposition des alliances et les transformations de la gouvernance mondiale, la compréhension des relations internationales constitue une compétence stratégique. Le pôle prépare les étudiants à analyser les interactions entre États, organisations internationales, institutions régionales, entreprises et acteurs de la société civile. Une attention particulière est accordée aux réalités africaines, aux dynamiques régionales et aux enjeux stratégiques du Sahel.",
    link: "/programs/international-relations",
    linkLabel: "Licence en Relations et Affaires Internationales",
  },
  {
    slug: "journalisme-communication",
    name: "Pôle 4 — Journalisme et communication",
    shortName: "Journalisme et Communication",
    tagline:
      "Informer avec rigueur. Communiquer avec impact. Faire entendre et rayonner les voix africaines.",
    icon: Newspaper,
    image: "/images/campus/IMG-20250212-WA0016.jpg",
    description:
      "L'information et la communication influencent la compréhension des enjeux publics, la vie des organisations et la circulation des idées. Le pôle vise à former des professionnels capables de rechercher, vérifier, analyser, produire et diffuser l'information, mais également de concevoir des stratégies de communication adaptées aux objectifs et aux publics. Une attention particulière est accordée à la vérification des faits, à la responsabilité éditoriale et à la lutte contre la désinformation.",
    link: "/programs/journalism-communication",
    linkLabel: "Licence en Journalisme-Communication",
  },
  {
    slug: "administration-des-affaires",
    name: "Pôle 5 — Administration des affaires",
    shortName: "Administration des Affaires",
    tagline: "Manager avec méthode. Entreprendre avec audace. Créer une valeur durable.",
    icon: Briefcase,
    image: "/images/campus/IMG-20250212-WA0003.jpg",
    description:
      "La transformation des économies africaines repose en partie sur la capacité des organisations à mieux gérer leurs ressources, à innover et à créer des emplois. Le pôle forme des professionnels capables de comprendre le fonctionnement des organisations et de contribuer à leur performance économique, financière, commerciale et humaine. Le socle commun — management, économie, comptabilité, finance, marketing, ressources humaines, droit des affaires, stratégie et gestion de projets — ouvre sur des domaines de spécialisation : ingénierie financière, comptabilité-finance, audit, marketing et communication, transport et logistique, agrobusiness, GRH et entrepreneuriat.",
    link: "/programs/business-administration",
    linkLabel: "Licence en Administration des Affaires",
  },
]

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <Image
          src="/images/campus/IMG-20250212-WA0022.jpg"
          alt="Campus de ABS"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-900/60" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Cinq pôles de formation
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            La complémentarité des cinq pôles de ABS permet d&apos;aborder les enjeux du développement
            africain sous plusieurs angles : valorisation des ressources naturelles, transformation
            numérique, relations internationales, circulation de l&apos;information et performance des
            organisations.
          </p>
        </div>
      </section>

      {/* Tabs by pole */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="tous" className="w-full">
            <TabsList className="flex flex-wrap justify-center w-full mb-10">
              <TabsTrigger value="tous" className="text-sm md:text-base">
                Tous les pôles
              </TabsTrigger>
              <TabsTrigger value="ingenierie" className="text-sm md:text-base">
                Ingénierie &amp; numérique
              </TabsTrigger>
              <TabsTrigger value="societes" className="text-sm md:text-base">
                Sociétés &amp; communication
              </TabsTrigger>
              <TabsTrigger value="gestion" className="text-sm md:text-base">
                Sciences de gestion
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tous">
              <PoleGrid slugs={poles.map((p) => p.slug)} />
            </TabsContent>
            <TabsContent value="ingenierie">
              <PoleGrid slugs={["genie-geologique-civil-minier", "ingenierie-informatique"]} />
            </TabsContent>
            <TabsContent value="societes">
              <PoleGrid slugs={["relations-affaires-internationales", "journalisme-communication"]} />
            </TabsContent>
            <TabsContent value="gestion">
              <PoleGrid slugs={["administration-des-affaires"]} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Common frame */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Un même cadre, dans tous les pôles
          </h2>
          <p className="text-slate-600 mb-8">
            Chaque filière de Licence suit le même cadre : 3 ans, 6 semestres, 180 crédits selon le
            cadre pédagogique de travail ; environ 40 % d&apos;apports théoriques et 60 % de pratiques,
            projets, terrain, stages et immersions, sous réserve de la maquette approuvée ; anglais à
            chaque semestre avec une progression bilingue français–anglais. Les parcours effectivement
            ouverts et les frais sont confirmés par l&apos;administration pour chaque rentrée.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/academics/programs">
              <Button className="bg-blue-700 hover:bg-blue-900 text-white">
                Voir l&apos;offre de formation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/academics/pedagogy">
              <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                Découvrir la pédagogie ABS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vous ne savez pas quel pôle choisir ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-200">
            L&apos;équipe de ABS vous aide à identifier la filière qui correspond à votre profil et à vos
            ambitions professionnelles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold px-8 py-3 text-lg">
                Demander des informations
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
    </div>
  )
}

function PoleGrid({ slugs }: { slugs: string[] }) {
  const list = poles.filter((p) => slugs.includes(p.slug))
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {list.map((p) => (
        <Card
          key={p.slug}
          className="overflow-hidden border-slate-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
        >
          <div className="relative h-52">
            <Image src={p.image} alt={p.shortName} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent" />
            <CardTitle className="absolute bottom-4 left-5 right-5 flex items-center gap-2 text-xl text-white">
              <p.icon className="h-6 w-6 text-cyan-400 shrink-0" />
              {p.shortName}
            </CardTitle>
          </div>
          <CardContent className="pt-6 flex flex-col flex-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-2">{p.name}</h3>
            <p className="italic text-cyan-700 text-sm mb-3">{p.tagline}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">{p.description}</p>
            <div className="mt-auto">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-2">
                Formation du pôle
              </p>
              <Link href={p.link} className="text-sm font-medium text-blue-700 hover:text-blue-900 inline-flex items-center gap-1">
                {p.linkLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
