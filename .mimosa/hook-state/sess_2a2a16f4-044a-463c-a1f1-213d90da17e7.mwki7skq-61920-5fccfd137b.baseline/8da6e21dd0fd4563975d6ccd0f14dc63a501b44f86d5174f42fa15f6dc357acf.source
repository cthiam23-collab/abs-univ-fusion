import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Mot de la Directrice Générale | ABS",
  description:
    "Le mot de la Directrice Générale de ABS — African Business School : une ambition panafricaine au service du savoir et de la réussite des étudiants.",
  path: "/about/mot-de-la-directrice",
})

const paragraphes = [
  "Chers visiteurs, chers parents, chers étudiants et partenaires,",
  "C'est avec conviction et détermination que je vous souhaite la bienvenue sur le site de ABS — African Business School.",
  "Notre ambition est claire : contribuer à former une génération africaine compétente, responsable et audacieuse, capable de comprendre les mutations du monde, d'innover et de participer activement au développement de nos sociétés.",
  "Je suis profondément convaincue qu'un diplôme n'est pas une finalité, mais le point de départ d'une véritable construction personnelle et professionnelle. La réussite repose sur la solidité des connaissances, la maîtrise des compétences, la richesse de l'expérience, la qualité du jugement et la force des valeurs humaines. Elle exige également de comprendre son environnement, d'anticiper ses évolutions et de transformer les défis en possibilités d'action.",
  "C'est cette conception de l'éducation qui fonde notre engagement à ABS. Nous voulons associer l'exigence académique à la pratique professionnelle, le développement des compétences à l'épanouissement personnel, et la connaissance à la capacité d'agir. Notre ambition est de préparer des femmes et des hommes capables de penser avec rigueur, d'entreprendre avec audace, de décider avec discernement et d'exercer leurs responsabilités avec intégrité.",
  "Dans un monde profondément transformé par le numérique et l'intelligence artificielle, la maîtrise des technologies constitue désormais un enjeu stratégique. Nous entendons préparer nos étudiants à ces évolutions, tout en préservant une conviction essentielle : la technologie doit rester au service de l'intelligence humaine, de la dignité et du progrès collectif.",
  "Fidèle à sa vocation panafricaine, ABS inscrit son action dans une perspective plus large que la seule réussite individuelle. Nous voulons contribuer à l'émergence de compétences capables de répondre aux besoins du Mali, d'accompagner les transformations de l'Afrique et de porter ses ambitions dans un environnement international en constante évolution.",
  "Cette ambition nous impose une exigence permanente : rapprocher la formation des réalités professionnelles, encourager l'initiative, cultiver l'ouverture d'esprit et faire de chaque parcours une occasion de développer son potentiel. Car former, ce n'est pas seulement transmettre un savoir : c'est donner à chacun les moyens de devenir acteur de son avenir et contributeur au progrès de sa société.",
  "Aux futurs étudiants, aux professionnels désireux de renforcer leurs compétences et aux parents qui nous accordent leur confiance, j'adresse une invitation sincère : découvrez nos filières, rencontrez nos équipes et rejoignez la communauté ABS.",
  "Ne choisissez pas seulement un diplôme. Choisissez une formation qui élargit votre vision, renforce votre valeur professionnelle, forge votre discernement et vous prépare à saisir les opportunités de demain. Choisissez un parcours qui vous donne les moyens d'accomplir vos ambitions tout en contribuant à celles de l'Afrique.",
  "Je vous invite à découvrir notre projet éducatif et à engager votre démarche d'inscription. Nous serons heureux de vous accompagner dans la construction de votre avenir.",
  "À ABS, nous ne considérons pas l'éducation comme une simple étape dans un parcours : nous la considérons comme une force capable de révéler les talents, de transformer les trajectoires et de contribuer à bâtir l'Afrique de demain.",
]

export default function MotDeLaDirectricePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Institution</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Mot de la Directrice Générale
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Former les talents. Élever les ambitions. Construire l&apos;avenir de l&apos;Afrique.
          </p>
        </div>
      </section>

      {/* Lettre */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[240px_1fr] lg:items-start">
          <div className="relative mx-auto overflow-hidden rounded-3xl bg-white shadow-xl lg:sticky lg:top-24">
            <Image
              src="/images/documents/dg-seance-travail.jpg"
              alt="Sokhna Maryama Thiam, Directrice Générale de l'ABS — African Business School"
              width={480}
              height={600}
              className="h-[320px] w-full object-cover object-top"
              priority
            />
            <div className="p-5">
              <p className="font-semibold text-slate-950">Sokhna Maryama Thiam</p>
              <p className="text-sm text-slate-500">Directrice Générale</p>
              <p className="mt-1 text-xs text-slate-400">ABS — African Business School</p>
            </div>
          </div>
          <div>
            {paragraphes.map((texte, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-xl font-medium leading-8 text-slate-900"
                    : "mt-5 leading-8 text-slate-600 first:mt-0"
                }
              >
                {texte}
              </p>
            ))}
            <p className="mt-8 leading-8 text-slate-600">Avec ma considération distinguée,</p>
            <p className="mt-3 font-semibold text-slate-950">Sokhna Maryama Thiam</p>
            <p className="text-sm text-slate-500">Directrice Générale — ABS — African Business School</p>
            <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-6">
              <Quote className="size-8 text-cyan-700" aria-hidden="true" />
              <blockquote className="mt-3 text-lg font-medium leading-8 text-slate-800">
                « Former avec exigence, révéler les talents et préparer les bâtisseurs de l&apos;Afrique de demain. »
              </blockquote>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-blue-700 hover:bg-blue-800">
                <Link href="/admissions">Engager ma démarche d&apos;inscription</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
              >
                <Link href="/academics/programs">Découvrir nos filières</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Bienvenue à ABS — African Business School</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Rejoignez une communauté qui révèle les talents et transforme les trajectoires.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">Candidater maintenant</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Parler à l&apos;équipe ABS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
