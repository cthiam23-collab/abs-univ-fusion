import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import {
  Globe2,
  Handshake,
  Leaf,
  Lightbulb,
  Quote,
  Recycle,
  ShieldCheck,
  Sprout,
  Target,
  Users,
  HeartHandshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = buildMetadata({
  title: "Nos Valeurs | ABS — African Business School",
  description:
    "Les valeurs de ABS : exigence, responsabilité, ouverture, innovation, engagement africain et esprit d'équipe, au service d'une formation rigoureuse et engagée pour l'Afrique.",
  path: "/about/values",
})

// Les six valeurs officielles de ABS (source : V3 §4.4 — définitions verbatim).
const values = [
  {
    id: "exigence",
    name: "Exigence",
    icon: Target,
    definition: "S'engager dans le travail, la rigueur et la progression.",
  },
  {
    id: "responsabilite",
    name: "Responsabilité",
    icon: ShieldCheck,
    definition: "Agir avec intégrité, respect et conscience des conséquences.",
  },
  {
    id: "ouverture",
    name: "Ouverture",
    icon: Globe2,
    definition: "Apprendre à dialoguer entre les cultures, les disciplines et les générations.",
  },
  {
    id: "innovation",
    name: "Innovation",
    icon: Lightbulb,
    definition: "Explorer des idées et des méthodes utiles, sans perdre de vue les besoins réels.",
  },
  {
    id: "engagement-africain",
    name: "Engagement africain",
    icon: Handshake,
    definition: "Valoriser les talents, les ressources et les initiatives du continent.",
  },
  {
    id: "esprit-equipe",
    name: "Esprit d'équipe",
    icon: Users,
    definition: "Construire avec les autres, écouter et contribuer à un objectif commun.",
  },
]

// Dimensions humaines de la formation (source : brochure institutionnelle CM1, §7).
const humanQualities = [
  "La discipline",
  "Le respect",
  "La rigueur",
  "La solidarité",
  "La curiosité intellectuelle",
  "Le sens des responsabilités",
]

// Responsabilité sociétale et développement durable (source : brochure institutionnelle CM1, §5).
const rseCommitments = [
  {
    icon: Leaf,
    title: "Une excellence qui a du sens",
    description:
      "ABS entend intégrer la Responsabilité Sociétale des Entreprises (RSE) et le développement durable dans sa vision de la formation et de la professionnalisation, afin de sensibiliser les étudiants aux conséquences économiques, sociales, environnementales et éthiques des décisions.",
  },
  {
    icon: Recycle,
    title: "Université verte",
    description:
      "En tant qu'institution attachée à la notion d'université verte, ABS entend encourager les initiatives en faveur de la réduction et de la valorisation des déchets, de l'économie circulaire, de la sensibilisation environnementale et des projets étudiants à impact social.",
  },
  {
    icon: Sprout,
    title: "Une performance responsable",
    description:
      "Une conception de la performance qui associe résultats économiques, respect des personnes, gestion responsable des ressources, transparence et contribution au bien commun.",
  },
  {
    icon: HeartHandshake,
    title: "Tous les pôles concernés",
    description:
      "Gestion durable des ressources en ingénierie, éthique de l'intelligence artificielle et sobriété numérique en informatique, gouvernance en relations internationales, information responsable en journalisme, pratiques managériales responsables en administration des affaires.",
  },
]

export default function ValuesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="Étudiants de ABS sur le campus universitaire"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-blue-900/40" />
        <div className="container relative py-20 md:py-28">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            À propos · Nos valeurs
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Six valeurs qui guident notre action
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            Au-delà des diplômes et des compétences techniques, ABS accorde une place importante à la dimension humaine
            de la formation : former des femmes et des hommes compétents, intègres, responsables et capables de
            travailler au service de l&apos;intérêt collectif.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about/mission">Découvrir notre mission</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Les 6 valeurs : cartes */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Nos six valeurs</h2>
          <p className="mt-4 text-lg text-slate-600">
            Ces valeurs ne sont pas un slogan : elles orientent la pédagogie, la vie du campus et la manière dont ABS
            conçoit la réussite de ses étudiants.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.id} className="group border border-slate-200 transition-shadow hover:shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-blue-900">{value.name}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{value.definition}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tabs : chaque valeur en détail */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10">
          <h3 className="text-center text-2xl font-bold text-blue-900">Chaque valeur en détail</h3>
          <p className="mt-2 text-center text-slate-600">
            Sélectionnez une valeur pour lire ce qu&apos;elle signifie concrètement à ABS.
          </p>
          <Tabs defaultValue="exigence" className="mt-8">
            <TabsList className="mx-auto flex-wrap">
              {values.map((value) => (
                <TabsTrigger key={value.id} value={value.id}>
                  {value.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {values.map((value) => {
              const Icon = value.icon
              return (
                <TabsContent key={value.id} value={value.id}>
                  <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 md:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h4 className="text-xl font-bold text-blue-900">{value.name}</h4>
                    </div>
                    <p className="mt-4 text-lg font-medium text-slate-800">{value.definition}</p>
                    <p className="mt-4 border-l-4 border-cyan-400 pl-4 text-sm italic text-slate-500">
                      Cette valeur s&apos;inscrit dans la mission de ABS : développer les connaissances
                      disciplinaires, les compétences pratiques, l&apos;autonomie intellectuelle et les qualités
                      humaines des apprenants.
                    </p>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Former des compétences, cultiver des valeurs, révéler des leaders (CM1 §7) */}
      <section className="bg-blue-900 py-16 text-white md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Former des compétences, cultiver des valeurs, révéler des leaders
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-200">
              La construction d&apos;une Afrique plus forte exige des femmes et des hommes compétents, mais également
              intègres, responsables, créatifs et capables de travailler au service de l&apos;intérêt collectif.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/15 bg-blue-950/60 p-8 md:p-10">
            <ul className="flex flex-wrap gap-2">
              {humanQualities.map((quality) => (
                <li
                  key={quality}
                  className="rounded-full border border-cyan-400/30 bg-blue-900/60 px-4 py-1.5 text-sm font-medium text-cyan-100"
                >
                  {quality}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-cyan-400/30 bg-blue-900/60 p-5">
              <h3 className="font-bold text-cyan-400">Notre définition du leadership</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Le leadership est envisagé comme la capacité à prendre des initiatives, à fédérer les énergies, à
                conduire des projets et à contribuer positivement à son environnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSE et développement durable (CM1 §5) */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            Responsabilité sociétale et développement durable
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Former pour réussir, entreprendre pour transformer et agir pour les générations futures : le développement
            de l&apos;Afrique ne peut être dissocié de la protection de l&apos;environnement, de la responsabilité
            sociale et de la bonne gouvernance.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {rseCommitments.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="border border-slate-200 transition-shadow hover:shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-blue-700">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-blue-900">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center leading-relaxed text-slate-600">
          Cette démarche peut s&apos;inscrire dans la perspective des Objectifs de développement durable des Nations
          unies. À ABS, l&apos;excellence ne se résume pas à la réussite individuelle : elle prend également tout son
          sens dans la valeur que l&apos;on crée pour la société.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-center text-white">
        <div className="container">
          <Quote className="mx-auto h-10 w-10 text-cyan-400" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Vivez ces valeurs, ne les lisez pas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Rejoignez une université où l&apos;exigence académique, la pratique professionnelle et
            l&apos;engagement africain avancent ensemble.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300">
              <Link href="/admissions">Admissions</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
