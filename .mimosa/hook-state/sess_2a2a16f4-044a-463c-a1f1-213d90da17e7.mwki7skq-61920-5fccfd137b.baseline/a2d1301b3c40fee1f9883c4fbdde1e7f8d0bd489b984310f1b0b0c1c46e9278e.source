import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Globe2,
  Handshake,
  Lightbulb,
  Quote,
  Target,
  Users,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Mission & Vision | ABS — African Business School",
  description:
    "La vision et la mission de ABS : contribuer à l'émergence d'une Afrique qui forme, innove et entreprend, en développant les connaissances, les compétences pratiques et les qualités humaines des apprenants.",
  path: "/about/mission",
})

// Les cinq axes de la mission (source : V3 §4.3, textes officiels).
const missionAxes = [
  {
    icon: BookOpen,
    title: "Transmettre",
    text: "Transmettre des connaissances structurées et pertinentes.",
  },
  {
    icon: Target,
    title: "Développer",
    text: "Développer l'analyse, la résolution de problèmes et la capacité à communiquer.",
  },
  {
    icon: Lightbulb,
    title: "Encourager",
    text: "Encourager les projets, l'initiative, l'esprit d'équipe et la culture du résultat.",
  },
  {
    icon: Globe2,
    title: "Renforcer",
    text: "Renforcer l'ouverture linguistique, numérique et interculturelle.",
  },
  {
    icon: Handshake,
    title: "Promouvoir",
    text: "Promouvoir l'éthique, la responsabilité et la contribution au développement.",
  },
]

// Articulation excellence académique ↔ pratique professionnelle (source : brochure institutionnelle CM1, §2).
const professionnalisation = [
  "Études de cas, travaux pratiques, projets, simulations professionnelles et recherches appliquées",
  "Une orientation de référence de 40 % de théorie et 60 % de pratique",
  "Des compétences transversales : anglais, culture numérique, leadership, éthique professionnelle et développement personnel",
  "Une ouverture sur les entreprises, les institutions et les enjeux internationaux",
]

export default function MissionPage() {
  return (
    <div>
      {/* Hero */}
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
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Notre raison d&apos;être</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Mission et vision de ABS — African Business School
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Former des compétences, développer des intelligences, révéler des vocations et préparer des femmes et des
            hommes à devenir des acteurs de transformation pour l&apos;Afrique et le monde.
          </p>
        </div>
      </section>

      {/* Vision (V3 §4.2 — texte officiel) */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Notre vision</p>
          <blockquote className="mt-5 border-l-4 border-cyan-400 pl-6 text-left text-2xl font-semibold leading-9 text-slate-900 md:text-3xl md:leading-10">
            « Contribuer à l&apos;émergence d&apos;une Afrique qui forme, innove, entreprend et participe pleinement à
            la construction des savoirs et des solutions de demain. »
          </blockquote>
          <p className="mt-6 leading-7 text-slate-600">
            Cette vision s&apos;appuie sur une articulation essentielle entre excellence académique,
            professionnalisation, innovation, ouverture internationale, responsabilité sociétale et enracinement
            africain.
          </p>
        </div>
      </section>

      {/* Mission (V3 §4.3 — texte officiel) */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Notre mission</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Cinq axes, une même ambition</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Proposer des parcours d&apos;enseignement supérieur qui développent les connaissances disciplinaires, les
              compétences pratiques, l&apos;autonomie intellectuelle et les qualités humaines nécessaires à
              l&apos;évolution académique et professionnelle des apprenants.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {missionAxes.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
                <CardContent className="p-7">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="size-6 text-cyan-700" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence académique ↔ pratique professionnelle (CM1 §2) */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Concrètement</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Associer l&apos;exigence académique à la pratique professionnelle
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Nous voulons associer l&apos;exigence académique à la pratique professionnelle, le développement des
              compétences à l&apos;épanouissement personnel, et la connaissance à la capacité d&apos;agir. Notre
              ambition est de préparer des femmes et des hommes capables de penser avec rigueur, d&apos;entreprendre
              avec audace, de décider avec discernement et d&apos;exercer leurs responsabilités avec intégrité.
            </p>
            <ul className="mt-7 space-y-4">
              {professionnalisation.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="size-5 shrink-0 text-cyan-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-blue-700 hover:bg-blue-800">
                <Link href="/about/values">
                  Découvrir nos valeurs <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
              >
                <Link href="/about/governance">Direction et gouvernance</Link>
              </Button>
            </div>
          </div>

          {/* Mot de la Directrice Générale (brochure institutionnelle CM1) */}
          <div className="relative overflow-hidden rounded-3xl bg-blue-950 p-8 text-white shadow-xl">
            <Quote className="size-10 text-cyan-300" aria-hidden="true" />
            <div className="mt-5 flex items-start gap-5">
              <Image
                src="/images/documents/dg-seance-travail.jpg"
                alt="Sokhna Maryama Thiam, Directrice Générale d'ABS"
                width={96}
                height={96}
                className="h-24 w-24 shrink-0 rounded-2xl border-2 border-white/20 object-cover"
              />
              <blockquote className="text-xl leading-9">
                « Former avec exigence, révéler les talents et préparer les bâtisseurs de l&apos;Afrique de demain. »
              </blockquote>
            </div>
            <p className="mt-6 font-semibold">Sokhna Maryama Thiam</p>
            <p className="text-sm text-slate-300">Directrice Générale, ABS — African Business School</p>
            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/about/history">Notre parcours</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <Users className="mx-auto size-10 text-cyan-300" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold">Prêt à écrire votre propre chapitre ?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Rejoignez une institution qui valorise l&apos;excellence, l&apos;innovation et l&apos;engagement.
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
