import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import {
  Users,
  Dumbbell,
  CalendarDays,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
  MapPin,
  Vote,
  Leaf,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Vie étudiante | ABS",
  description: "Vie étudiante à ABS — African Business School : communauté, événements, clubs et accompagnement.",
  path: "/student-life",
})

const stats = [
  { value: "5+", label: "Clubs & associations étudiantes", icon: Users },
  { value: "10+", label: "Événements par an", icon: CalendarDays },
  { value: "80%", label: "De pratique dans les cursus", icon: GraduationCap },
  { value: "1", label: "Gouvernement étudiant : la BAGE", icon: Vote },
]

const vieAssociative = [
  {
    title: "La BAGE, votre voix",
    description:
      "L'Assemblée Générale des Étudiants est le gouvernement étudiant de l'ABS, élu démocratiquement chaque année. Elle représente vos intérêts auprès de l'administration et organise la vie de campus.",
    image: "/images/campus/IMG-20250212-WA0003.jpg",
    link: "/student-life/organizations",
  },
  {
    title: "Clubs thématiques",
    description:
      "Entrepreneuriat, culture, médias, environnement, numérique : rejoignez un club existant ou créez le vôtre avec le soutien de la BAGE et de l'administration.",
    image: "/images/gallery/IMG-20250216-WA0066.jpg",
    link: "/campus-life/organizations",
  },
  {
    title: "Engagement citoyen",
    description:
      "Mentorat de lycéens, bénévolat associatif, campagnes de recyclage sur le campus : la responsabilité et l'ouverture font partie des valeurs que nous vivons au quotidien.",
    image: "/images/gallery/IMG-20250216-WA0015.jpg",
    link: "/student-life/extracurricular-activities",
  },
]

const sportBienEtre = [
  {
    title: "Sport intégré aux cursus",
    description:
      "Le sport fait partie de l'emploi du temps de tous les étudiants : football, basket-ball, athlétisme et fitness. Parce que le bien-être physique soutient la réussite académique.",
    image: "/images/campus/IMG-20250212-WA0006.jpg",
    link: "/student-life/athletics",
  },
  {
    title: "Tournois inter-promotions",
    description:
      "Les grands rendez-vous sportifs de l'année fédèrent les promotions : championnat de football, tournois de basket et journées d'athlétisme sur le campus de Hamdallaye.",
    image: "/images/gallery/IMG-20250216-WA0067.jpg",
    link: "/campus-life/recreation",
  },
  {
    title: "Bien-être mental",
    description:
      "Écoute, accompagnement et prévention : notre équipe de soutien veille à l'équilibre entre vie étudiante, intensité des cursus et vie personnelle.",
    image: "/images/gallery/IMG-20250216-WA0070.jpg",
    link: "/student-life/support",
  },
]

const evenements = [
  {
    title: "Journées portes ouvertes",
    description: "Faites découvrir l'ABS à vos proches et rencontrez les équipes pédagogiques.",
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    link: "/student-life/events",
  },
  {
    title: "Semaine de l'entrepreneuriat",
    description: "Ateliers, pitchs et rencontres avec des entrepreneurs maliens et panafricains.",
    image: "/images/gallery/IMG-20250216-WA0030.jpg",
    link: "/student-life/events",
  },
  {
    title: "Gala annuel ABS",
    description: "Le grand rendez-vous de la communauté : remise des prix, culture et célébration.",
    image: "/images/gallery/IMG-20250216-WA0034.jpg",
    link: "/student-life/events",
  },
]

const soutien = [
  {
    title: "Coaching & employabilité",
    description:
      "Chaque étudiant bénéficie d'un suivi personnalisé : projet professionnel, préparation aux entretiens, stages et mise en réseau avec les entreprises partenaires.",
    image: "/images/campus/IMG-20250212-WA0012.jpg",
    link: "/student-resources",
  },
  {
    title: "Santé & services",
    description: "Orientation santé, services administratifs et appui au quotidien pour étudier l'esprit serein.",
    image: "/images/gallery/IMG-20250216-WA0060.jpg",
    link: "/student-resources/health-services",
  },
  {
    title: "Soutien académique",
    description:
      "Tutorat entre promotions, accès à la bibliothèque et à la plateforme e-campus : personne ne reste seul face aux exigences de la formation.",
    image: "/images/gallery/IMG-20250216-WA0072.jpg",
    link: "/library",
  },
]

function FeatureGrid({ items }: { items: { title: string; description: string; image: string; link: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="overflow-hidden border-slate-200 pt-0 gap-0 hover:shadow-lg transition-shadow">
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            className="h-48 w-full object-cover"
          />
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 mb-4">{item.description}</p>
            <Link href={item.link} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-cyan-400">
              Découvrir <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function StudentLifePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus de l'ABS à Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-950/60" />
        <div className="container mx-auto relative z-10 px-4">
          <Badge className="mb-4 bg-cyan-400 text-blue-950 hover:bg-cyan-400">Vie étudiante</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight mb-4">
            Votre vie étudiante à l'ABS de Bamako
          </h1>
          <p className="text-lg text-cyan-50 max-w-2xl mb-8">
            Au cœur de Hamdallaye ACI 2000, l'ABS offre bien plus qu'une formation d'excellence : un campus
            vivant, un gouvernement étudiant élu, le sport intégré à chaque cursus et une communauté engagée.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/student-life/events">Voir les événements</Link>
            </Button>
            <Button asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
              <Link href="/campus-life">Explorer le campus</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-950 py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto py-16 px-4">
        <Tabs defaultValue="associatif" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-10">
            <TabsTrigger value="associatif">Vie associative</TabsTrigger>
            <TabsTrigger value="sport">Sport & bien-être</TabsTrigger>
            <TabsTrigger value="evenements">Événements</TabsTrigger>
            <TabsTrigger value="soutien">Soutien & services</TabsTrigger>
          </TabsList>

          <TabsContent value="associatif">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">S'engager, décider, construire</h2>
              <p className="text-slate-600">
                À l'ABS, les étudiants ne sont pas spectateurs : ils sont acteurs. Associations, clubs
                thématiques et projets solidaires rythment l'année et développent la créativité, la responsabilité et
                l'esprit d'équipe.
              </p>
            </div>
            <FeatureGrid items={vieAssociative} />
          </TabsContent>

          <TabsContent value="sport">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Un corps sain pour un esprit performant</h2>
              <p className="text-slate-600">
                Le sport et les activités physiques sont intégrés aux cursus de tous nos Bachelors et Masters. Compétition,
                loisir ou fitness : chacun trouve sa place et renforce son esprit d'équipe.
              </p>
            </div>
            <FeatureGrid items={sportBienEtre} />
          </TabsContent>

          <TabsContent value="evenements">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Une année riche en rendez-vous</h2>
              <p className="text-slate-600">
                De la rentrée au gala annuel, la BAGE et les équipes de l'Université programment plus de 10 événements
                par an : culture, entrepreneuriat, sport et ouverture sur l'Afrique.
              </p>
            </div>
            <FeatureGrid items={evenements} />
            <div className="text-center mt-8">
              <Button asChild className="bg-blue-700 hover:bg-blue-900">
                <Link href="/student-life/events">
                  Calendrier complet des événements <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="soutien">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Réussir, ensemble</h2>
              <p className="text-slate-600">
                Coaching carrière, santé, tutorat : nos services accompagnent chaque étudiant de la rentrée jusqu'à
                l'insertion professionnelle.
              </p>
            </div>
            <FeatureGrid items={soutien} />
          </TabsContent>
        </Tabs>
      </section>

      {/* Engagement étudiant — BAGE */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/campus/IMG-20250212-WA0015.jpg"
              alt="Les étudiants de la BAGE réunis sur le campus ABS"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Badge className="mb-3 bg-cyan-50 text-blue-700 border border-cyan-400">
              <Vote className="h-4 w-4 mr-1" /> Engagement étudiant
            </Badge>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">La BAGE : un gouvernement étudiant élu</h2>
            <p className="text-slate-600 mb-4">
              L'Assemblée Générale des Étudiants (BAGE) est élue démocratiquement chaque année. Son bureau siège au
              cœur de la vie étudiante : il porte vos idées, négocie les améliorations du campus et co-construit le
              calendrier des événements avec la Direction Générale.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Représenter les étudiants auprès de l'administration",
                "Animer les clubs et les associations de campus",
                "Organiser les grands événements de l'année",
                "Porter les projets RSE : mentorat, bénévolat, recyclage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <HeartHandshake className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="bg-blue-700 hover:bg-blue-900">
              <Link href="/student-life/organizations">
                Rejoindre une association <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Employabilité */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              icon: Briefcase,
              title: "Coaching & stages",
              text: "Un accompagnement individuel vers l'emploi : CV, simulation d'entretien et stages en entreprise partenaire dès le Bachelor.",
            },
            {
              icon: Users,
              title: "Réseau professionnel",
              text: "Forums métiers, rencontres avec des alumni et entreprises maliennes et panafricaines recrutent directement sur le campus.",
            },
            {
              icon: Leaf,
              title: "Responsabilité & RSE",
              text: "Mentorat de jeunes, bénévolat et recyclage : nos étudiants s'engagent pour un développement durable du Mali et de l'Afrique.",
            },
          ].map((item) => (
            <div key={item.title} className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded-r-xl">
              <item.icon className="h-8 w-8 text-blue-700 mb-3" />
              <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-blue-950 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Prêt à vivre l'expérience ABS ?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Rejoignez une université où la formation d'excellence, la pratique et la vie de campus avancent ensemble,
            au cœur de Bamako.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/apply">Candidater maintenant</Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
              <Link href="/campus-life/housing">Logement & vie de campus</Link>
            </Button>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-cyan-400" /> Hamdallaye ACI 2000, Bamako — Mali
          </p>
        </div>
      </section>
    </div>
  )
}
