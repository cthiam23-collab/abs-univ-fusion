import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Recycle, Rocket } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Innovation, projets et entrepreneuriat | ABS",
  description: "À ABS, l'innovation et l'entrepreneuriat s'apprennent en agissant : projets étudiants, démarche entrepreneuriale et engagement durable au service du continent.",
  path: "/innovation",
})

const volets = [
  {
    icon: Lightbulb,
    title: "De l'idée au projet",
    text: "L'entrepreneuriat et l'innovation permettent aux étudiants d'apprendre à observer un besoin, formuler une solution, étudier sa faisabilité et présenter un projet. Les travaux peuvent porter sur les entreprises, les services, les technologies ou les défis sociaux et environnementaux du continent.",
  },
  {
    icon: Rocket,
    title: "ABS Startup Lab",
    text: "ABS présente son dispositif d'accompagnement entrepreneurial sous le nom « ABS Startup Lab ». La page précise ce qui est réellement proposé : ateliers, mentorat, accompagnement de projets, accès à des ressources ou mise en relation. Aucun financement automatique ni aucun résultat non documenté n'est annoncé.",
  },
  {
    icon: Recycle,
    title: "Engagement durable",
    text: "ABS souhaite sensibiliser aux enjeux de développement durable, d'économie responsable et d'innovation utile. Les projets présentés précisent leur état d'avancement, leurs objectifs, leurs partenaires confirmés et les résultats réellement mesurés.",
  },
]

export default function InnovationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image2.jpg"
          alt="Étudiants de ABS travaillant ensemble sur un projet"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Innovation & entrepreneuriat</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Transformer les idées en projets utiles
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Observer un besoin, formuler une solution, étudier sa faisabilité, présenter un projet : une démarche
            apprise en agissant, au service des entreprises, des technologies et des défis du continent.
          </p>
        </div>
      </section>

      {/* Les trois volets */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Trois volets, une même exigence de réalisme</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Les projets présentés correspondent à des activités réellement encadrées. Ce qui est proposé est décrit
            tel qu&apos;il fonctionne ; ce qui est en préparation est présenté comme tel.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {volets.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardContent className="p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Icon className="size-6 text-cyan-700" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Encadrement et critères */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Cadre de travail</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Des projets adossés aux enseignements et au terrain
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Les projets de fin de module, les études de cas, les projets tutorés, les immersions et les stages
                constituent les principaux terrains d&apos;exercice de la démarche entrepreneuriale à ABS. Leurs
                objectifs, leurs critères d&apos;évaluation et leurs échéances sont expliqués au début de chaque
                module, conformément aux maquettes officielles de chaque formation.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Les étudiants souhaitant faire évoluer un projet vers la création d&apos;activité peuvent solliciter
                l&apos;accompagnement prévu par l&apos;institution : les modalités concrètes d&apos;accès, les
                responsables et les services effectivement disponibles sont communiqués par
                l&apos;administration.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/academics/programs">
                    Découvrir nos formations <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  <Link href="/contact">Proposer un projet ou un partenariat</Link>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image
                src="/images/documents/v3-image1.png"
                alt="Étudiants de ABS sur le campus universitaire"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Une idée, un projet, une ambition ?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Échangez avec l&apos;équipe ABS pour découvrir l&apos;accompagnement réellement proposé et les pistes de
            collaboration avec les entreprises et les institutions.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/contact">Contacter l&apos;équipe ABS</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/international/partnerships">Entreprises et partenaires</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
