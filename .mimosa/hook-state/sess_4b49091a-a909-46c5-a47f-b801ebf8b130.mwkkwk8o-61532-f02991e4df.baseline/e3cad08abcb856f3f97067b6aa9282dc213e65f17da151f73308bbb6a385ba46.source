import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { Globe2, Landmark, Quote, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = buildMetadata({
  title: "Notre Parcours | ABS — African Business School",
  description:
    "Lancée en 2016 à Hamdallaye ACI 2000, Bamako, ABS développe cinq pôles de formation et pilote son développement dans le cadre du Plan stratégique ABS 2035.",
  path: "/about/history",
})

// Jalons documentés uniquement : création 2016 (V3 §4.1), cinq pôles et cycles Licence/Master (CM1),
// Plan stratégique ABS 2035 (fiche de fonction de la Gérante statutaire).
const timeline = [
  {
    period: "2016",
    title: "La création d'ABS",
    body: "ABS — African Business School est un établissement privé d'enseignement supérieur implanté à Hamdallaye ACI 2000, à Bamako, au Mali. Lancée en 2016, l'institution s'inscrit dans une ambition : contribuer à la formation de compétences capables de répondre aux besoins des organisations, des entreprises et des sociétés africaines, tout en comprenant les dynamiques internationales.",
    detail:
      "Depuis 2016, ABS porte une ambition panafricaine : comprendre les transformations de son environnement et y apporter des réponses utiles.",
  },
  {
    period: "Le développement",
    title: "Cinq pôles de formation complémentaires",
    body: "ABS a progressivement structuré son offre autour de cinq grands domaines complémentaires : le Génie géologique, civil et minier ; l'Ingénierie informatique ; les Relations et affaires internationales ; le Journalisme et la communication ; et l'Administration des affaires.",
    detail:
      "Cette complémentarité permet d'aborder les enjeux du développement africain sous plusieurs angles : ressources naturelles, transformation numérique, relations internationales, information et performance des organisations.",
  },
  {
    period: "La structuration",
    title: "De la Licence au Master",
    body: "ABS structure son offre de formation autour des cycles de Licence et de Master, dans une logique de progression académique et de spécialisation professionnelle, avec une orientation de référence de 40 % de théorie et 60 % de pratique.",
    detail:
      "Les intitulés des diplômes, les spécialisations ouvertes et les conditions d'admission sont précisés dans l'offre académique officielle de l'établissement.",
  },
  {
    period: "L'horizon",
    title: "Le Plan stratégique ABS 2035",
    body: "Le développement de l'institution est piloté dans le cadre du Plan stratégique ABS 2035, porté par la Direction générale : positionner ABS comme une institution panafricaine reconnue pour l'excellence académique et professionnelle, la qualité de ses formations, l'innovation et la professionnalisation de ses diplômés.",
    detail:
      "Cette ambition suppose une amélioration continue des programmes, une pédagogie adaptée aux évolutions des métiers et un rapprochement avec les milieux professionnels.",
  },
]

// Repères documentés (dates, structures et orientation pédagogique issues des documents officiels).
const landmarks = [
  { value: "2016", label: "Année de création" },
  { value: "5", label: "Pôles de formation" },
  { value: "40 / 60", label: "Théorie / pratique (orientation de référence)" },
  { value: "2035", label: "Horizon du plan stratégique" },
]

const identityCards = [
  {
    icon: Globe2,
    title: "Une université panafricaine",
    description:
      "Le panafricanisme constitue l'un des fondements identitaires et intellectuels de ABS : connaître l'Afrique, croire en ses capacités, valoriser ses talents et contribuer à son rayonnement, tout en restant ouvert au monde.",
  },
  {
    icon: Landmark,
    title: "Ancrée au Mali, ouverte sur l'Afrique et le monde",
    description:
      "Implantée à Bamako, ABS inscrit son projet éducatif dans un environnement marqué par d'importants enjeux de transformation économique, technologique et sociale. L'Afrique constitue le point d'ancrage de son projet ; le monde en élargit les perspectives.",
  },
  {
    icon: Target,
    title: "Excellence et professionnalisation",
    description:
      "La formation est conçue comme un processus de construction intellectuelle, professionnelle et humaine : connaissances solides, compétences spécialisées et préparation aux exigences du monde professionnel.",
  },
]

export default function HistoryPage() {
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
            À propos · Notre parcours
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Lancée en 2016, portée par une ambition panafricaine
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            D&apos;une création à Bamako, à Hamdallaye ACI 2000, à un projet d&apos;enseignement supérieur
            pluridisciplinaire structuré autour de cinq pôles : le parcours d&apos;African Business School —
            ABS.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300">
              <Link href="/academics/programs">Nos formations</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about">À propos d&apos;ABS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline « Notre parcours » */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Notre parcours</h2>
          <p className="mt-4 text-lg text-slate-600">
            Les grandes étapes documentées de la construction de l&apos;institution, de sa création à son horizon
            stratégique.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-2 left-5 top-2 w-px bg-blue-200 md:left-1/2" aria-hidden="true" />
          <ol className="space-y-12">
            {timeline.map((step, index) => (
              <li key={step.period} className="relative pl-14 md:pl-0">
                <span
                  className="absolute left-5 top-1 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-blue-700 ring-4 ring-cyan-50 md:left-1/2"
                  aria-hidden="true"
                />
                <div
                  className={
                    index % 2 === 0
                      ? "md:ml-[calc(50%+2rem)] md:text-left"
                      : "md:mr-[calc(50%+2rem)] md:text-right"
                  }
                >
                  <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">{step.period}</p>
                  <h3 className="mt-1 text-2xl font-bold text-blue-900">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{step.body}</p>
                  <p className="mt-3 inline-block border-l-4 border-cyan-400 pl-4 text-sm italic text-slate-500">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Repères documentés */}
      <section className="bg-blue-900 py-14 text-white">
        <div className="container">
          <dl className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {landmarks.map((stat) => (
              <div key={stat.label}>
                <dt className="order-2 text-sm uppercase tracking-wide text-slate-300">{stat.label}</dt>
                <dd className="order-1 text-4xl font-bold text-cyan-400 md:text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Identité institutionnelle */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Une identité qui perdure</h2>
          <p className="mt-4 text-lg text-slate-600">
            Les fondements qui ont accompagné ABS depuis sa création et continuent de guider son développement.
          </p>
        </div>
        <Tabs defaultValue="panafricanisme">
          <TabsList className="mx-auto">
            <TabsTrigger value="panafricanisme">Panafricanisme</TabsTrigger>
            <TabsTrigger value="ancrage">Ancrage & ouverture</TabsTrigger>
            <TabsTrigger value="pedagogie">Pédagogie</TabsTrigger>
          </TabsList>

          <TabsContent value="panafricanisme">
            <div className="mx-auto max-w-4xl">
              <Card className="border border-slate-200">
                <CardContent className="p-6 md:p-8">
                  <Globe2 className="h-9 w-9 text-blue-700" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-bold text-blue-900">L&apos;Afrique comme identité</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    À ABS, l&apos;africanité n&apos;est ni un simple héritage culturel ni un argument de communication :
                    elle représente un ancrage intellectuel, une orientation pédagogique et une ambition pour
                    l&apos;avenir. Être panafricain à ABS, c&apos;est connaître l&apos;Afrique, croire en ses capacités,
                    valoriser ses talents et contribuer à son rayonnement, tout en restant ouvert aux connaissances,
                    aux innovations et aux échanges avec le reste du monde.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ancrage">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {identityCards.map((card) => {
                const Icon = card.icon
                return (
                  <Card key={card.title} className="border border-slate-200 transition-shadow hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-blue-700">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-blue-900">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="pedagogie">
            <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10">
              <Quote className="h-8 w-8 text-cyan-400" aria-hidden="true" />
              <blockquote className="mt-4 text-lg leading-relaxed text-blue-950 md:text-xl">
                Nous voulons associer l&apos;exigence académique à la pratique professionnelle, le développement des
                compétences à l&apos;épanouissement personnel, et la connaissance à la capacité d&apos;agir.
              </blockquote>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <p className="font-bold text-blue-900">40 % théorie / 60 % pratique</p>
                  <p className="mt-1 text-sm text-slate-600">Orientation de référence de la pédagogie ABS</p>
                </div>
                <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <p className="font-bold text-blue-900">Licence & Master</p>
                  <p className="mt-1 text-sm text-slate-600">Progression académique et spécialisation professionnelle</p>
                </div>
                <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <p className="font-bold text-blue-900">Bilinguisme</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Le français et l&apos;anglais comme compétences progressivement mobilisées
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-center text-white">
        <div className="container">
          <TrendingUp className="mx-auto h-10 w-10 text-cyan-400" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Écrivez la suite avec nous</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            L&apos;histoire d&apos;ABS continue avec ses étudiants, dans le cadre du Plan stratégique ABS 2035.
            Rejoignez une institution qui adapte ses formations aux besoins des organisations et au développement de
            l&apos;Afrique.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300">
              <Link href="/apply">Déposer une candidature</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Visiter le campus</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
