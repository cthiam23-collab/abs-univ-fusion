import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ORGANIZATION } from "@/lib/constants"
import {
  GraduationCap,
  Users,
  CalendarClock,
  MessagesSquare,
  ClipboardCheck,
  LineChart,
  Globe2,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  Trophy,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "English Academy | African Business School (ABS) — L'anglais au cœur de votre réussite",
  description: "L'English Academy de l'African Business School à Bamako : programmes flexibles, pratique active, évaluation régulière et communauté d'apprenants pour maîtriser l'anglais.",
  path: "/english-academy",
})

const contact = ORGANIZATION.contact

const objectifs = [
  {
    icon: MessagesSquare,
    title: "Renforcer les compétences linguistiques",
    description:
      "Développer la maîtrise de l'anglais à l'écrit comme à l'oral, pour étudier, travailler et échanger en toute confiance.",
  },
  {
    icon: CalendarClock,
    title: "Des programmes flexibles",
    description:
      "Des formats adaptés aux emplois du temps de chacun : étudiants, professionnels en activité, publics en reconversion.",
  },
  {
    icon: FlaskConical,
    title: "La pratique avant tout",
    description:
      "Ateliers, simulations, mises en situation et échanges linguistiques : on apprend l'anglais en le parlant.",
  },
  {
    icon: LineChart,
    title: "Évaluation et suivi réguliers",
    description:
      "Des évaluations périodiques et un parcours de progression individualisé pour mesurer vos progrès pas à pas.",
  },
  {
    icon: Users,
    title: "Une communauté d'apprenants",
    description:
      "Événements culturels, activités sociales et échanges entre apprenants : l'anglais se vit aussi en dehors de la salle de classe.",
  },
]

const programmes = [
  {
    icon: GraduationCap,
    title: "Anglais pour étudiants",
    description:
      "Un parcours conçu pour les étudiants de l'ABS et d'ailleurs : consolidation des bases, anglais académique et préparation aux cours dispensés en anglais.",
    points: [
      "Renforcement de l'oral et de l'écrit",
      "Anglais académique : présentations, rédaction, compréhension de documents",
      "Horaires compatibles avec vos cours à l'université",
    ],
  },
  {
    icon: Briefcase,
    title: "Anglais pour professionnels",
    description:
      "Pour les actifs qui veulent gagner en efficacité : anglais des affaires, réunions, emails, négociation et présentations professionnelles.",
    points: [
      "Anglais professionnel du quotidien et de l'entreprise",
      "Simulations de réunions, entretiens et négociations",
      "Créneaux adaptés aux emplois du temps chargés",
    ],
  },
  {
    icon: Globe2,
    title: "Anglais général & conversation",
    description:
      "Un programme ouvert à tous les niveaux, centré sur la fluidité orale et la confiance en soi dans les situations de la vie courante.",
    points: [
      "Groupes de niveau adaptés après évaluation",
      "Échanges linguistiques et ateliers de conversation",
      "Immersion à travers des activités culturelles",
    ],
  },
]

export default function EnglishAcademyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center justify-center text-white">
        <Image
          src="/images/gallery/IMG-20250216-WA0015.jpg"
          alt="Étudiants de l'English Academy de l'ABS"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/80 to-blue-950/90" />
        <div className="relative z-10 max-w-4xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            African Business School — Bamako
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">L'English Academy de l'ABS</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
            Un environnement d'apprentissage dynamique, entièrement dédié à l'anglais. Parce que dans un monde
            globalisé, les entreprises et les universités recherchent des profils anglophones.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">
                S'inscrire à l'English Academy <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/contact">Poser une question</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi l'anglais */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">
              L'anglais, une compétence décisive pour votre avenir
            </h2>
            <p className="text-lg text-slate-600">
              Nous évoluons dans un environnement globalisé : les entreprises comme les universités recherchent
              aujourd'hui des profils capables de travailler en anglais. C'est pourquoi l'anglais est au cœur de la
              formation à l'ABS — et pourquoi l'English Academy est ouverte à tous.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {objectifs.map((item) => (
              <Card key={item.title} className="border-t-4 border-t-cyan-400 shadow-md">
                <CardHeader>
                  <item.icon className="mb-2 h-9 w-9 text-blue-700" />
                  <CardTitle className="text-lg text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="programmes" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="programmes">Nos programmes</TabsTrigger>
              <TabsTrigger value="methode">Méthode</TabsTrigger>
              <TabsTrigger value="suivi">Test de niveau & suivi</TabsTrigger>
            </TabsList>

            <TabsContent value="programmes">
              <div className="grid gap-6 lg:grid-cols-3">
                {programmes.map((programme) => (
                  <Card key={programme.title} className="flex flex-col shadow-md hover:shadow-xl">
                    <CardHeader>
                      <programme.icon className="mb-2 h-9 w-9 text-blue-700" />
                      <CardTitle className="text-xl text-blue-900">{programme.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-grow flex-col">
                      <p className="mb-4 text-slate-600">{programme.description}</p>
                      <ul className="mt-auto space-y-2">
                        {programme.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center text-slate-700">
                Les horaires, groupes et contenus sont ajustés selon les inscriptions et les niveaux. Contactez-nous au{" "}
                <span className="font-semibold text-blue-900">{contact.phone}</span> pour connaître les prochaines
                sessions.
              </div>
            </TabsContent>

            <TabsContent value="methode">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0016.jpg"
                    alt="Atelier d'anglais à l'English Academy de l'ABS"
                    width={720}
                    height={520}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-blue-900 md:text-3xl">
                    Une méthode 100% pratique, dans l'esprit ABS
                  </h2>
                  <p className="mb-6 text-slate-700">
                    Comme pour l'ensemble des cursus de l'université — 80% de pratique, 20% de théorie — l'English
                    Academy privilégie l'usage actif de la langue plutôt que la récitation de règles.
                  </p>
                  <ul className="mb-8 space-y-4">
                    {[
                      {
                        title: "Ateliers",
                        text: "Travail en petits groupes sur l'expression orale, la prononciation et l'écriture.",
                      },
                      {
                        title: "Simulations",
                        text: "Mises en situation réelles : entretien d'embauche, réunion professionnelle, présentation orale.",
                      },
                      {
                        title: "Échanges linguistiques",
                        text: "Rencontres et conversations régulières pour pratiquer l'anglais dans un cadre détendu.",
                      },
                      {
                        title: "Activités culturelles & sociales",
                        text: "Événements qui font vivre la langue et créent une véritable communauté d'apprenants.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        <span>
                          <span className="font-semibold text-blue-900">{item.title} — </span>
                          <span className="text-slate-700">{item.text}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/apply">
                      Rejoindre la prochaine session <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="suivi">
              <div className="mx-auto max-w-4xl">
                <div className="mb-10 text-center">
                  <h2 className="mb-3 text-2xl font-bold text-blue-900 md:text-3xl">
                    Un départ clair, une progression mesurée
                  </h2>
                  <p className="text-lg text-slate-600">
                    Chaque apprenant connaît son point de départ et suit un parcours balisé : c'est la garantie de
                    progrès visibles, session après session.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="shadow-md">
                    <CardHeader>
                      <ClipboardCheck className="mb-2 h-9 w-9 text-blue-700" />
                      <CardTitle className="text-lg text-blue-900">Test de niveau à l'entrée</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 text-slate-600">
                        Un test d'anglais détermine votre niveau et votre groupe au moment de votre inscription. Il
                        permet d'intégrer un parcours adapté, ni trop facile, ni trop exigeant.
                      </p>
                      <p className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm text-slate-700">
                        Bon à savoir : le test d'anglais fait partie intégrante du processus d'admission de l'Université
                        ABS. En rejoignant un programme de l'université, votre niveau d'anglais est évalué dès
                        l'entrée.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-md">
                    <CardHeader>
                      <LineChart className="mb-2 h-9 w-9 text-blue-700" />
                      <CardTitle className="text-lg text-blue-900">Évaluation & parcours de progression</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {[
                          "Évaluations régulières à l'écrit et à l'oral",
                          "Bilans individuels : vous savez toujours où vous en êtes",
                          "Un parcours de progression structuré, palier après palier",
                          "Attestation de suivi à l'issue de votre parcours",
                        ].map((point) => (
                          <li key={point} className="flex items-start gap-2 text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/gallery/IMG-20250216-WA0067.jpg"
                    alt="Communauté d'apprenants de l'English Academy"
                    width={960}
                    height={420}
                    className="h-72 w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Passez à l'anglais, dès maintenant</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            Étudiant, professionnel ou simple passionné : l'English Academy de l'ABS vous ouvre ses portes sur le campus
            de Hamdallaye ACI 2000, Bamako. Appelez le {contact.phone} ou écrivez à {contact.email}.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">S'inscrire</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/admissions">Admissions ABS</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/international">Dimension internationale</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
