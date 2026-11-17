import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Award,
  Compass,
  Globe2,
  Landmark,
  Network,
  Newspaper,
  Briefcase,
  ShieldCheck,
  Users,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "À propos de ABS | Vision et mission",
  description:
    "Découvrez la vision panafricaine, la mission, les valeurs et la démarche de développement de ABS à Bamako.",
  path: "/about",
})

// Les cinq grands domaines disciplinaires (source : V3 §4.1 et présentation institutionnelle).
const domains = [
  {
    icon: Landmark,
    title: "Sciences et ingénierie",
    description: "Géologie, géotechnique, génie civil.",
    href: "/programs/geological-civil-mining-engineering",
  },
  {
    icon: Network,
    title: "Numérique et technologies",
    description:
      "Développement informatique, systèmes, données, réseaux, cybersécurité et initiation progressive à l'intelligence artificielle.",
    href: "/programs/engineering/computer-science",
  },
  {
    icon: Globe2,
    title: "Sciences sociales et internationales",
    description:
      "Relations internationales, diplomatie, coopération, institutions, enjeux géopolitiques et communication interculturelle.",
    href: "/programs/international-relations",
  },
  {
    icon: Newspaper,
    title: "Information, médias et communication",
    description:
      "Journalisme, rédaction, production de contenus, communication institutionnelle et médias numériques.",
    href: "/programs/journalism-communication",
  },
  {
    icon: Briefcase,
    title: "Sciences de gestion",
    description:
      "Administration des affaires, finance, marketing, ressources humaines, audit, contrôle de gestion, logistique et entrepreneuriat, selon les options formellement retenues.",
    href: "/programs/business-administration",
  },
]

const aboutLinks = [
  {
    icon: Compass,
    title: "Notre mission et notre vision",
    description:
      "Former des compétences capables de comprendre les transformations de leur environnement et d'y apporter des réponses utiles.",
    href: "/about/mission",
  },
  {
    icon: Award,
    title: "Nos valeurs",
    description:
      "Exigence, responsabilité, ouverture, innovation, engagement africain et esprit d'équipe.",
    href: "/about/values",
  },
  {
    icon: Users,
    title: "Direction et gouvernance",
    description:
      "L'organisation institutionnelle de ABS : Direction générale, Rectorat, Direction des Études et services.",
    href: "/about/governance",
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero : Qui sommes-nous */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="Étudiants de ABS sur le campus universitaire"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Qui sommes-nous ?</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Une institution pluridisciplinaire : sciences, ingénierie, numérique, sciences sociales et
            internationales, communication et gestion
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            ABS — African Business School est un établissement privé d&apos;enseignement supérieur basé à
            Bamako, au Mali. Depuis 2016, ABS porte une ambition panafricaine : contribuer à la formation de
            compétences capables de comprendre les transformations de leur environnement et d&apos;y apporter des
            réponses utiles.
          </p>
        </div>
      </section>

      {/* Présentation institutionnelle */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-white p-8 shadow-xl">
            <Image
              src="/images/abs-logo.png"
              alt="Logo officiel d'ABS — African Business School"
              width={480}
              height={294}
              className="h-auto w-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">L&apos;identité de ABS</h2>
            <p className="mt-5 leading-7 text-slate-600">
              Lancée en 2016, implantée à Hamdallaye ACI 2000, à Bamako, l&apos;institution s&apos;inscrit dans une
              ambition : contribuer à la formation de compétences capables de répondre aux besoins des organisations,
              des entreprises et des sociétés africaines, tout en comprenant les dynamiques internationales.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              ABS développe une identité panafricaine et une approche orientée vers la professionnalisation. Elle
              souhaite faire de la formation un espace où les connaissances académiques rencontrent les réalités du
              terrain, où l&apos;étudiant apprend à analyser, à proposer, à collaborer et à agir avec responsabilité.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Son identité est pluridisciplinaire. À côté des sciences de gestion, ABS développe des domaines liés aux
              sciences et à l&apos;ingénierie, au numérique, aux relations internationales, ainsi qu&apos;au
              journalisme et à la communication.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Le mot « Business » dans la dénomination African Business School ne signifie pas que ABS est
              exclusivement une école de commerce. Il exprime une ambition de formation tournée vers l&apos;action, la
              résolution de problèmes, l&apos;organisation, l&apos;innovation et la création de valeur.
            </p>
          </div>
        </div>
      </section>

      {/* Les cinq grands domaines de formation */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Nos cinq grands domaines de formation</h2>
            <p className="mt-3 leading-7 text-slate-600">
              La diversité de ces domaines permet à ABS d&apos;aborder les défis contemporains sous plusieurs angles :
              comprendre les territoires et les ressources, concevoir des solutions techniques, maîtriser les outils
              numériques, analyser les relations entre sociétés et institutions, produire une information fiable,
              communiquer avec impact et piloter des organisations de manière responsable.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {domains.map(({ icon: Icon, title, description, href }) => (
              <Link key={title} href={href} className="group">
                <Card className="h-full border-slate-200 transition-shadow group-hover:shadow-lg">
                  <CardHeader>
                    <span className="mb-2 inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                      <Icon className="size-6 text-cyan-700" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-slate-600">{description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                      Explorer cette filière
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approche pédagogique */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Notre approche</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Rapprocher les connaissances académiques des applications concrètes
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              ABS entend rapprocher les connaissances académiques des applications concrètes, encourager la rigueur,
              l&apos;ouverture internationale, la responsabilité et l&apos;engagement au service du développement
              africain. Son approche pédagogique privilégie l&apos;articulation entre les fondements théoriques et
              leur application concrète, selon une orientation de référence de 40 % de théorie et 60 % de pratique.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Études de cas, travaux pratiques, projets et simulations professionnelles",
                "Compétences transversales : anglais, culture numérique, leadership, éthique professionnelle",
                "Une formation ouverte sur les entreprises, les institutions et les enjeux internationaux",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium text-slate-700">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-cyan-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm leading-6 text-slate-600">
              Les formations et spécialisations affichées sur le site sont celles confirmées pour la rentrée concernée.
              Les informations relatives aux autorisations, habilitations, reconnaissances ou accréditations sont
              communiquées uniquement sur la base de documents officiels en vigueur ; pour toute précision, veuillez
              contacter l&apos;administration de ABS.
            </p>
          </div>

          {/* Liens vers les pages institutionnelles */}
          <div className="space-y-4">
            {aboutLinks.map(({ icon: Icon, title, description, href }) => (
              <Link key={href} href={href} className="group block">
                <Card className="border-slate-200 transition-shadow group-hover:shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <Icon className="size-5 text-blue-700" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
              <Link href="/about/history">
                Découvrir notre parcours <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Rejoignez la communauté ABS</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Découvrez nos filières, rencontrez nos équipes et engagez votre démarche d&apos;inscription.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/academics/programs">Explorer les formations</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Contacter l&apos;administration</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
