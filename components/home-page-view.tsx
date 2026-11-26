"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, GraduationCap, Newspaper, Users } from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"

const logoUrl = "/images/abs-logo.png"
const heroUrl = "/images/campus/IMG-20250212-WA0021.jpg"
const directorUrl = "/images/documents/dg-seance-travail.jpg"

const domains = [
  {
    title: "Administration des Affaires",
    description: "Management, finance, marketing, organisation, entrepreneuriat et pilotage des activités.",
    href: "/programs/business-administration",
  },
  {
    title: "Ingénierie Informatique",
    description: "Développement logiciel, systèmes numériques, données et initiation progressive aux enjeux de l’intelligence artificielle.",
    href: "/programs/engineering/computer-science",
  },
  {
    title: "Génie Géologique, Civil et Minier",
    description: "Compréhension des ressources, des matériaux, des ouvrages et des projets techniques, avec une attention à la sécurité et à l’environnement.",
    href: "/programs/geological-civil-mining-engineering",
  },
  {
    title: "Relations et Affaires Internationales",
    description: "Analyse des enjeux internationaux, diplomatie, coopération, institutions et communication interculturelle.",
    href: "/programs/international-relations",
  },
  {
    title: "Journalisme-Communication",
    description: "Information, rédaction, communication, production de contenus et médias numériques.",
    href: "/programs/journalism-communication",
  },
]

const whyAbs = [
  "Une ambition panafricaine : apprendre à partir des réalités du continent et dialoguer avec le monde.",
  "Une pédagogie tournée vers l’action : études de cas, projets, présentations et mises en situation selon les enseignements.",
  "Des compétences transversales : communication, anglais, outils numériques, développement personnel et travail en équipe.",
  "Une culture de responsabilité : éthique, professionnalisme, respect et prise en compte des enjeux de développement durable.",
  "Un environnement à taille humaine : une relation de proximité favorisant l’orientation, l’écoute et l’engagement.",
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonials = [
    ["Former avec exigence, révéler les talents et préparer les bâtisseurs de l’Afrique de demain.", "Sokhna Maryama Thiam", "Directrice Générale"],
    ["À ABS, nous apprenons à transformer les idées en projets utiles pour notre société.", "Aïssata Diarra", "Étudiante en management"],
    ["L’approche pratique nous prépare à devenir des leaders responsables et opérationnels.", "Mamadou Traoré", "Alumni ABS"],
  ]

  return (
    <main id="top" className="overflow-hidden">
      {/* Bandeau principal — V3 §3.1 */}
      <section className="relative min-h-[620px] bg-slate-950 text-white">
        <img src={heroUrl} alt="Campus de l’ABS — African Business School à Bamako" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-blue-950/55" />
        <div className="container relative mx-auto flex min-h-[620px] items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <span className="-my-1 flex size-12 shrink-0 items-center justify-center rounded-lg bg-white p-1">
                <img src={logoUrl} alt="Logo ABS" className="h-full w-full object-contain" />
              </span>
              <span>{ORGANIZATION.territoire}</span>
            </div>
            <p className="mb-4 font-semibold uppercase tracking-[0.28em] text-cyan-300">{ORGANIZATION.signature}</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">ABS — African Business School</h1>
            <p className="mt-4 text-xl font-medium text-cyan-200 sm:text-2xl">{ORGANIZATION.signatureSecondaire}</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">À Bamako, ABS porte une vision de l’enseignement supérieur qui associe connaissances, compétences pratiques, ouverture internationale et responsabilité. Notre ambition : accompagner les étudiants dans la construction de leur projet académique et professionnel, avec une attention particulière portée aux réalités africaines et aux transformations du monde.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/academics/programs">Découvrir nos formations <ArrowRight className="ml-2 size-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 bg-transparent text-white hover:bg-white/15"><Link href="/apply">Préparer ma candidature</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 bg-transparent text-white hover:bg-white/15"><Link href="/contact">Échanger avec ABS</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc de présentation — V3 §3.2 */}
      <section className="border-b bg-white py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Présentation</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Apprendre, pratiquer, construire son avenir</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">Choisir une formation, c’est choisir une direction. À ABS, nous voulons aider chaque étudiant à comprendre les enjeux de son domaine, à développer des méthodes de travail solides et à transformer progressivement ses acquis en compétences mobilisables. Les enseignements sont conçus pour faire dialoguer les fondamentaux, les études de cas, les projets et la découverte du monde professionnel, selon les modalités définies pour chaque formation.</p>
        </div>
      </div></section>

      {/* Bloc « Pourquoi ABS ? » — V3 §3.3 */}
      <section className="bg-slate-50 py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div><p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Pourquoi ABS ?</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Une université africaine tournée vers l’action.</h2><p className="mt-5 leading-7 text-slate-600">{ORGANIZATION.mission}</p><ul className="mt-7 space-y-4">{whyAbs.map(item => <li key={item} className="flex gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="size-5 shrink-0 text-cyan-600" />{item}</li>)}</ul><Button asChild variant="outline" className="mt-8"><Link href="/about/mission">Notre vision et nos valeurs <ArrowRight className="ml-2 size-4" /></Link></Button></div>
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl"><img src={directorUrl} alt="Sokhna Maryama Thiam, Directrice Générale de l’ABS — African Business School" className="h-[420px] w-full object-cover object-top" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-7 pt-24 text-white"><p className="font-semibold">Sokhna Maryama Thiam</p><p className="text-sm text-slate-200">Directrice Générale</p></div></div>
        </div>
      </div></section>

      {/* Nos domaines de formation — V3 §3.4 */}
      <section className="bg-white py-20"><div className="container mx-auto px-6 lg:px-8"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Nos domaines de formation</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Cinq domaines, une même exigence.</h2></div><Link href="/academics/programs" className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900">Voir toutes les formations <ArrowRight className="ml-2 size-4" /></Link></div><p className="mt-5 max-w-3xl leading-7 text-slate-600">ABS développe des parcours dans les domaines du management, de l’ingénierie, du numérique, des relations internationales et de la communication. La liste des parcours effectivement ouverts pour chaque rentrée est affichée et mise à jour par l’administration.</p><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{domains.map(domain => <Card key={domain.title} className="border-slate-200 transition-shadow hover:shadow-lg"><CardHeader><div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-700"><GraduationCap className="size-4" />Licence · Master</div><CardTitle className="text-xl">{domain.title}</CardTitle></CardHeader><CardContent><p className="leading-7 text-slate-600">{domain.description}</p><Button asChild variant="link" className="mt-3 h-auto px-0 text-blue-700"><Link href={domain.href}>En savoir plus <ArrowRight className="ml-2 size-4" /></Link></Button></CardContent></Card>)}</div></div></section>

      {/* Bloc Admissions — V3 §3.5 */}
      <section className="bg-blue-950 py-20 text-white"><div className="container mx-auto px-6 text-center lg:px-8"><GraduationCap className="mx-auto size-10 text-cyan-300" /><h2 className="mt-5 text-4xl font-bold">Votre projet commence ici</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">Vous souhaitez rejoindre ABS ? Découvrez les formations proposées, vérifiez les conditions d’accès et contactez l’équipe pour être orienté vers les étapes correspondant à votre situation. Les conditions, pièces, dates et frais applicables sont ceux communiqués officiellement par l’administration pour l’année académique concernée.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/admissions">Comprendre les admissions</Link></Button><Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10"><Link href="/contact">Contacter l’administration</Link></Button></div></div></section>

      {/* Vie de campus et actualités — V3 §3.6 */}
      <section className="bg-slate-50 py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Vie de campus & actualités</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">La vie à ABS se construit aussi en dehors des cours.</h2>
            <p className="mt-5 leading-7 text-slate-600">Conférences, rencontres, visites, projets, événements et initiatives étudiantes contribuent à l’ouverture d’esprit et à la professionnalisation. Les actualités du site présentent uniquement les activités effectivement réalisées ou officiellement programmées.</p>
            <Button asChild variant="outline" className="mt-8"><Link href="/about/news">Voir les actualités <Newspaper className="ml-2 size-4" /></Link></Button>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <Newspaper className="size-8 text-blue-700" />
            <h3 className="mt-4 text-xl font-semibold text-slate-950">Suivre la vie de l’institution</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Retrouvez les événements, les projets étudiants et les initiatives de la communauté ABS dans la rubrique Actualités.</p>
          </div>
        </div>
      </div></section>

      {/* Témoignages */}
      <section className="bg-white py-20"><div className="container mx-auto px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><Users className="mx-auto size-8 text-blue-700" /><h2 className="mt-4 text-3xl font-bold text-slate-950">La communauté ABS en quelques mots</h2><blockquote className="mt-8 text-xl leading-9 text-slate-700">“{testimonials[activeTestimonial][0]}”</blockquote><p className="mt-5 font-semibold text-slate-950">{testimonials[activeTestimonial][1]}</p><p className="text-sm text-slate-500">{testimonials[activeTestimonial][2]}</p><div className="mt-7 flex justify-center gap-2">{testimonials.map((_, index) => <button key={index} aria-label={`Afficher le témoignage ${index + 1}`} onClick={() => setActiveTestimonial(index)} className={`h-2 rounded-full transition-all ${activeTestimonial === index ? "w-8 bg-blue-700" : "w-2 bg-slate-300"}`} />)}</div></div></div></section>

      {/* Appel final — V3 §3.7 */}
      <section className="bg-slate-950 py-20 text-white"><div className="container mx-auto px-6 text-center lg:px-8"><h2 className="text-4xl font-bold">Votre ambition mérite un projet solide.</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">Prenez contact avec ABS pour découvrir les parcours disponibles et obtenir des informations fiables sur votre orientation.</p><div className="mt-8"><Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/contact">Parler à l’équipe ABS <ArrowRight className="ml-2 size-4" /></Link></Button></div></div></section>
    </main>
  )
}
