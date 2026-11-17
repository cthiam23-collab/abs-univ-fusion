import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { Newspaper, Info, Tag, ClipboardList, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = buildMetadata({
  title: "Actualités | ABS",
  description:
    "Retrouvez les actualités de ABS — African Business School : informations académiques, événements, projets étudiants, conférences et annonces institutionnelles à Bamako.",
  path: "/about/news",
})

// Modèle de publication — document V3, §10.2
const publicationModel = [
  { champ: "Titre", contenu: "Court, informatif, sans exagération" },
  { champ: "Date et lieu", contenu: "Date exacte ; lieu confirmé" },
  { champ: "Chapeau", contenu: "Résumé en deux ou trois phrases" },
  { champ: "Article", contenu: "Contexte, objectifs, déroulement ou prochaines étapes" },
  { champ: "Visuel", contenu: "Image autorisée, nette, légendée et correctement créditée" },
  {
    champ: "Appel à l'action",
    contenu: "Inscription, informations pratiques, galerie ou contact si pertinent",
  },
]

// Catégories — document V3, §10.3
const categories = [
  "Vie académique",
  "Admissions et orientation",
  "Conférences et événements",
  "Projets et innovation",
  "Vie étudiante",
  "Partenariats confirmés",
  "Communiqués institutionnels",
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — document V3, §10.1 */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <Newspaper className="mr-1 h-3.5 w-3.5" />
            Actualités
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Actualités et événements
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Retrouvez ici les actualités de ABS : informations académiques, événements, projets
            étudiants, conférences, activités de professionnalisation et annonces institutionnelles.
            Chaque publication comporte une date, un titre précis, un texte relu, un visuel autorisé
            et, lorsque nécessaire, un lien vers les informations pratiques.
          </p>
        </div>
      </section>

      {/* Catégories — document V3, §10.3 */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-blue-900">
            <Tag className="h-5 w-5 text-blue-700" />
            Catégories
          </h2>
          <p className="mb-4 text-sm text-slate-600">
            Les publications sont organisées selon les catégories suivantes :
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((categorie) => (
              <Badge
                key={categorie}
                variant="outline"
                className="border-blue-200 bg-blue-50 px-3 py-1.5 text-sm text-blue-800"
              >
                {categorie}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <Newspaper className="mx-auto mb-4 h-10 w-10 text-blue-300" />
            <h2 className="mb-2 text-xl font-bold text-blue-900">
              Aucune publication pour le moment
            </h2>
            <p className="mx-auto max-w-xl text-sm text-slate-600">
              Les actualités présentées sur cette page correspondront uniquement à des activités
              effectivement réalisées ou officiellement programmées. Revenez bientôt pour découvrir
              les premières publications.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/admissions">
                <Button className="bg-blue-700 text-white hover:bg-blue-900">
                  Explorer les admissions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Note éditoriale : modèle de publication — document V3, §10.2 */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-blue-900">
            <ClipboardList className="h-5 w-5 text-blue-700" />
            Notre modèle de publication
          </h2>
          <p className="mb-6 text-sm text-slate-600">
            Chaque actualité publiée par ABS suit une grille éditoriale commune, afin de garantir
            une information exacte, datée et vérifiable :
          </p>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-900 text-left text-white">
                    <th className="rounded-tl-md px-4 py-3 font-semibold">Champ</th>
                    <th className="rounded-tr-md px-4 py-3 font-semibold">Contenu attendu</th>
                  </tr>
                </thead>
                <tbody>
                  {publicationModel.map((row) => (
                    <tr key={row.champ} className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium text-blue-900">{row.champ}</td>
                      <td className="px-4 py-3 text-slate-600">{row.contenu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
          <div className="mt-6 flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
            <p>
              Toute annonce d&apos;événement précise l&apos;intitulé, la date, le lieu, les
              conditions de participation et le contact responsable.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
