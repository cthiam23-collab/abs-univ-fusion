import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import {
  Users,
  CalendarDays,
  Megaphone,
  Images,
  Quote,
  Leaf,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = buildMetadata({
  title: "Vie étudiante | ABS",
  description:
    "La vie étudiante à ABS — African Business School : une communauté qui apprend ensemble, événements et rencontres, ambassadeurs, galerie et témoignages à Bamako.",
  path: "/campus-life",
})

// Vie étudiante — document V3, §8
const sections = [
  {
    icon: CalendarDays,
    title: "Événements et rencontres",
    description:
      "Conférences, journées d'orientation, rencontres avec des professionnels, visites et activités de sensibilisation peuvent enrichir le parcours des étudiants. Chaque annonce précise l'intitulé, la date, le lieu, les conditions de participation et le contact responsable.",
  },
  {
    icon: Megaphone,
    title: "Ambassadeurs de ABS",
    description:
      "Les ambassadeurs de ABS contribuent à faire connaître la vie de l'établissement, à partager leur expérience et à orienter les personnes qui souhaitent en savoir davantage. Leur rôle repose sur une communication authentique, respectueuse et vérifiable.",
  },
  {
    icon: Images,
    title: "Galerie photos et vidéos",
    description:
      "La galerie valorise les cours, projets, événements et moments de vie du campus. Les photos et vidéos publiées sont datées, légendées et accompagnées des autorisations nécessaires, sans information personnelle ni donnée sensible.",
  },
  {
    icon: Quote,
    title: "Témoignages",
    description:
      "Les témoignages d'étudiants, d'anciens étudiants, de parents ou de professionnels sont authentiques, relus par leurs auteurs et publiés avec leur consentement. Ils ne sont pas présentés comme une preuve statistique de réussite ou d'insertion.",
  },
]

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero — document V3, §8.1 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <Users className="mr-1 h-3.5 w-3.5" />
            Vie étudiante · Bamako
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Une communauté qui apprend ensemble
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            La vie étudiante se construit par la participation, la curiosité et le respect mutuel.
            ABS encourage les initiatives qui renforcent l&apos;expression, le sens des
            responsabilités, l&apos;entraide et l&apos;ouverture sur la société.
          </p>
        </div>
      </section>

      {/* Image + citation — document V3, §3.6 */}
      <section className="container mx-auto -mt-10 px-4 pb-4">
        <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg lg:grid-cols-2 lg:p-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/documents/v3-image1.png"
              alt="Étudiants de ABS sur le campus universitaire"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              La vie à ABS, en dehors des cours
            </h2>
            <blockquote className="border-l-4 border-cyan-400 pl-4 text-slate-600">
              « La vie à ABS se construit aussi en dehors des cours : conférences, rencontres,
              visites, projets, événements et initiatives étudiantes contribuent à l&apos;ouverture
              d&apos;esprit et à la professionnalisation. »
            </blockquote>
            <p className="mt-4 text-sm text-slate-500">
              Les activités présentées sur le site correspondent à des événements réalisés ou
              officiellement programmés.
            </p>
          </div>
        </div>
      </section>

      {/* Volets de la vie étudiante — document V3, §8.2 à §8.5 */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900">Ce qui fait la vie du campus</h2>
          <p className="mt-3 text-slate-600">
            Événements, ambassadeurs, galerie et témoignages : les différentes facettes de
            l&apos;expérience étudiante à ABS.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <Card key={section.title} className="border-slate-200">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700/10">
                  <section.icon className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-blue-900">{section.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Engagement durable — document CM1, §5 */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/10">
              <Leaf className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Engagement durable</h2>
            <p className="text-blue-100">
              ABS entend intégrer la responsabilité sociétale et le développement durable dans sa
              vision de la formation : sensibiliser les étudiants aux conséquences économiques,
              sociales, environnementales et éthiques des décisions, et encourager les initiatives
              en faveur de la réduction et de la valorisation des déchets, de l&apos;économie
              circulaire, de la sensibilisation environnementale et des projets étudiants à impact
              social.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-md">
          <h2 className="mb-3 text-2xl font-bold text-blue-900">
            Envie de rejoindre la communauté ABS ?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-slate-600">
            Découvrez les formations, explorez les admissions ou contactez l&apos;équipe pour toute
            question sur la vie à ABS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions">
              <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-900">
                Candidater
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-700 text-blue-700 hover:bg-blue-50"
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
