import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Briefcase,
  Cpu,
  Globe2,
  Mountain,
  Newspaper,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Nos filières de formation | ABS",
  description: "Cinq filières de Licence réparties en cinq pôles de formation : administration des affaires, ingénierie informatique, génie géologique civil et minier, relations et affaires internationales, journalisme-communication. Une école pluridisciplinaire à Bamako.",
  path: "/programs",
})

const filieres = [
  {
    pole: "Pôle 1",
    title: "Génie Géologique, Civil et Minier",
    tagline:
      "Explorer les ressources. Construire les infrastructures. Valoriser durablement le potentiel africain.",
    description:
      "Sciences de la Terre, techniques de terrain, génie civil et secteur minier : observer les terrains, cartographier, comprendre les matériaux et contribuer aux projets d'infrastructures et de ressources.",
    icon: Mountain,
    link: "/programs/geological-civil-mining-engineering",
  },
  {
    pole: "Pôle 2",
    title: "Ingénierie Informatique",
    tagline:
      "Maîtriser les technologies. Concevoir les innovations. Renforcer la souveraineté numérique de l'Afrique.",
    description:
      "Algorithmique, programmation, développement web et mobile, bases de données, systèmes, réseaux et cybersécurité, avec une initiation progressive à l'intelligence artificielle.",
    icon: Cpu,
    link: "/programs/engineering/computer-science",
  },
  {
    pole: "Pôle 3",
    title: "Relations et Affaires Internationales",
    tagline:
      "Comprendre le monde. Analyser les rapports de force. Porter les ambitions de l'Afrique.",
    description:
      "Géopolitique, droit international, diplomatie, coopération et économie internationale, avec une attention particulière aux réalités africaines et aux langues de travail.",
    icon: Globe2,
    link: "/programs/international-relations",
  },
  {
    pole: "Pôle 4",
    title: "Journalisme-Communication",
    tagline:
      "Informer avec rigueur. Communiquer avec impact. Faire entendre et rayonner les voix africaines.",
    description:
      "Recherche et vérification de l'information, rédaction, production multimédia, journalisme web et stratégies de communication, dans le respect de l'éthique et de la déontologie.",
    icon: Newspaper,
    link: "/programs/journalism-communication",
  },
  {
    pole: "Pôle 5",
    title: "Administration des Affaires",
    tagline: "Manager avec méthode. Entreprendre avec audace. Créer une valeur durable.",
    description:
      "Management, comptabilité, économie, marketing, finance, ressources humaines et entrepreneuriat : comprendre les organisations, analyser leurs résultats et contribuer à leur pilotage.",
    icon: Briefcase,
    link: "/programs/business-administration",
  },
]

const domaines = [
  "Sciences et ingénierie : géologie, géotechnique, génie civil.",
  "Numérique et technologies : développement informatique, systèmes, données, réseaux, cybersécurité et initiation progressive à l'intelligence artificielle.",
  "Sciences sociales et internationales : relations internationales, diplomatie, coopération, institutions, enjeux géopolitiques et communication interculturelle.",
  "Information, médias et communication : journalisme, rédaction, production de contenus, communication institutionnelle et médias numériques.",
  "Sciences de gestion : administration des affaires, finance, marketing, ressources humaines, audit, contrôle de gestion, logistique et entrepreneuriat, selon les options formellement retenues.",
]

export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
        Nos filières de formation
      </h1>

      {/* Intro pluridisciplinaire */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 mb-10 max-w-4xl">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">
          ABS : une école pluridisciplinaire, au-delà du seul mot « Business »
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Le mot « Business » dans la dénomination African Business School ne signifie pas que
          ABS est exclusivement une école de commerce. Il exprime une ambition de formation tournée vers
          l&apos;action, la résolution de problèmes, l&apos;organisation, l&apos;innovation et la création
          de valeur. Cette ambition s&apos;appuie sur plusieurs familles disciplinaires : les sciences et
          l&apos;ingénierie, les technologies numériques, les sciences sociales et internationales,
          l&apos;information et la communication, ainsi que les sciences de gestion.
        </p>
        <p className="text-slate-700 leading-relaxed text-sm">
          Nos grands domaines disciplinaires :
        </p>
        <ul className="mt-2 space-y-1.5">
          {domaines.map((d) => (
            <li key={d} className="text-sm text-slate-600 flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>

      {/* Cartes des 5 pôles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filieres.map((f) => (
          <Card key={f.title} className="hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600">{f.pole}</p>
                  <CardTitle className="text-blue-900">{f.title}</CardTitle>
                </div>
              </div>
              <CardDescription className="italic text-cyan-700 mt-2">{f.tagline}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1">
              <p className="text-slate-600 mb-4">{f.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Licence — 3 ans · 6 semestres · 180 crédits</Badge>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <Link href={f.link} className="text-primary hover:underline font-medium">
                  Découvrir la filière
                </Link>
                <Link href={f.link} aria-label={f.title}>
                  <ArrowRight className="h-4 w-4 text-blue-700" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Masters */}
      <div className="mt-12 rounded-xl border border-slate-200 bg-blue-950 text-white p-8">
        <h2 className="text-2xl font-bold mb-3">Et après la Licence ? Les Masters</h2>
        <p className="text-slate-200 mb-6 max-w-3xl">
          Les parcours de Master listés correspondent à des axes de formation à confirmer par la
          Direction avant affichage comme admissions ouvertes. Chaque fiche de Master précise le diplôme
          délivré, les prérequis, la durée, la maquette, les frais et les conditions de candidature.
        </p>
        <Link href="/programs/masters">
          <Button className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold">
            Consulter le catalogue des Masters <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Garde-fou éditorial */}
      <p className="mt-10 text-sm text-slate-500 max-w-4xl">
        Les parcours effectivement ouverts, les intitulés officiels des diplômes, les conditions
        d&apos;accès et les frais sont confirmés par l&apos;administration de ABS pour chaque rentrée.
        Les débouchés présentés sont des perspectives indicatives, pas des garanties d&apos;emploi.
      </p>
    </div>
  )
}
