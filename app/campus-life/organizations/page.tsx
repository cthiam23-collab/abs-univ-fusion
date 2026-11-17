import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Vote,
  Megaphone,
  ClipboardList,
  BadgeCheck,
  MessagesSquare,
  Rocket,
  Newspaper,
  Bot,
  Palette,
  Trophy,
  HeartHandshake,
  HandHeart,
  Recycle,
  Users,
  Landmark,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Organisations étudiantes | African Business School (ABS)",
  description:
    "BAGE, clubs académiques, clubs culturels et sportifs, engagement citoyen : découvrez la vie associative de l'ABS à Bamako.",
  path: "/campus-life/organizations",
})

const etapesElection = [
  {
    icon: Megaphone,
    title: "1. Campagne",
    text: "Les listes candidates présentent leur programme devant l'ensemble des étudiants : meetings, affiches et débats organisés sur le campus.",
  },
  {
    icon: Vote,
    title: "2. Élection",
    text: "Le scrutin a lieu dans le respect des règles électorales : chaque étudiant vote, l'organisation veille à la transparence du dépouillement.",
  },
  {
    icon: BadgeCheck,
    title: "3. Investiture",
    text: "Le bureau élu est investi officiellement et prend ses fonctions au cœur de la vie étudiante pour l'année universitaire.",
  },
  {
    icon: ClipboardList,
    title: "4. Critères d'éligibilité",
    text: "Pour se présenter, il faut être régulièrement inscrit à l'ABS, être en règle avec l'administration et respecter les conditions statutaires fixées par le règlement du BAGE.",
  },
]

const clubsAcademiques = [
  {
    icon: MessagesSquare,
    title: "Club Débat & Éloquence",
    text: "S'exprimer, argumenter, convaincre : le club débat entraîne les étudiants aux concours d'éloquence et aux débats d'actualité.",
  },
  {
    icon: Rocket,
    title: "Club Entrepreneuriat",
    text: "Ateliers d'idéation, études de cas, rencontres de fondateurs : le club accompagne les projets entrepreneuriaux des étudiants, de l'idée au pitch.",
  },
  {
    icon: Newspaper,
    title: "Club Médias & Journalisme",
    text: "Rédaction, reportage, photo et réseaux sociaux : les étudiants produisent le média du campus et racontent la vie de l'ABS.",
  },
  {
    icon: Bot,
    title: "Club Robotique & IA",
    text: "Initiation aux technologies, projets de code, défis techniques : le club explore la robotique et l'intelligence artificielle par la pratique.",
  },
]

const clubsCulturels = [
  {
    icon: Palette,
    title: "Club Arts & Culture",
    text: "Théâtre, musique, arts visuels : le club anime les temps forts culturels de l'année et met en avant les talents du campus.",
  },
  {
    icon: Trophy,
    title: "Équipes de football",
    text: "Entraînements réguliers, matchs inter-promotions et compétitions inter-écoles : l'équipe de football porte les couleurs de l'ABS.",
  },
  {
    icon: Trophy,
    title: "Équipe de basket-ball",
    text: "Le basket occupe une place de choix dans la vie sportive du campus, avec des créneaux dédiés en fin de journée.",
  },
  {
    icon: Landmark,
    title: "Rendez-vous de l'année",
    text: "Journées culturelles, semaines de l'entrepreneuriat et tournois : le calendrier associatif rythme chaque semestre.",
  },
]

const engagements = [
  {
    icon: HeartHandshake,
    title: "Mentorat",
    text: "Les étudiants de l'ABS accompagnent des jeunes des établissements partenaires : orientation scolaire, méthodes de travail et confiance en soi.",
  },
  {
    icon: HandHeart,
    title: "Bénévolat communautaire",
    text: "Journées de volontariat, actions de solidarité et soutien aux associations locales de Bamako, organisés avec le BAGE.",
  },
  {
    icon: Recycle,
    title: "Recyclage et environnement",
    text: "Tri sur le campus, campagnes de nettoyage et sensibilisation aux énergies renouvelables : la RSE se vit au quotidien.",
  },
]

export default function OrganizationsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/IMG-20250212-WA0011.jpg"
          alt="Étudiants de l'ABS réunis lors d'une activité associative"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-700/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <p className="text-cyan-400 font-semibold tracking-wide uppercase mb-3">Vie de campus</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Les organisations étudiantes de l&apos;ABS
          </h1>
          <p className="text-slate-200 text-lg mt-4 max-w-2xl">
            Un gouvernement étudiant élu démocratiquement, des clubs qui portent vos passions et un engagement
            citoyen qui dépasse les murs du campus : à l&apos;ABS, la vie associative forme autant que les cours.
          </p>
          <div className="mt-8">
            <Link href="/student-life/organizations">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
                Toute la vie associative
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="bage" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="bage">BAGE</TabsTrigger>
            <TabsTrigger value="academiques">Clubs académiques</TabsTrigger>
            <TabsTrigger value="culturels">Clubs culturels & sportifs</TabsTrigger>
            <TabsTrigger value="citoyen">Engagement citoyen</TabsTrigger>
          </TabsList>

          {/* BAGE */}
          <TabsContent value="bage">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="bg-blue-950 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Landmark className="h-8 w-8 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">
                    BAGE — Bureau de l&apos;Assemblée Générale des Étudiants
                  </h2>
                </div>
                <p className="text-slate-300 max-w-3xl">
                  Le BAGE est le gouvernement étudiant de l&apos;African Business School (ABS), élu démocratiquement chaque année. Son
                  bureau siège au cœur de la vie étudiante : il porte la voix des étudiants auprès de
                  l&apos;administration, organise les grands événements du campus et encadre les clubs.
                </p>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-blue-900 mb-6">Comment se déroule l&apos;élection</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {etapesElection.map((etape) => (
                    <div key={etape.title} className="rounded-xl border border-slate-200 p-5">
                      <etape.icon className="h-7 w-7 text-blue-700 mb-3" />
                      <h4 className="font-semibold text-blue-900 text-sm mb-2">{etape.title}</h4>
                      <p className="text-xs text-slate-600">{etape.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 bg-cyan-50 border border-cyan-400/40 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4">
                  <Users className="h-8 w-8 text-blue-700 shrink-0" />
                  <p className="text-slate-700 flex-1 text-sm">
                    Vous souhaitez vous impliquer ? Contactez le BAGE ou le service de la vie étudiante pour découvrir
                    les mandats ouverts, les commissions et les modalités de candidature de l&apos;année en cours.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-blue-700 hover:bg-blue-900 text-white">Nous écrire</Button>
                  </Link>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Clubs académiques */}
          <TabsContent value="academiques">
            <div className="grid md:grid-cols-2 gap-6">
              {clubsAcademiques.map((club) => (
                <div key={club.title} className="bg-white rounded-xl border border-slate-200 p-6 flex gap-4">
                  <span className="h-12 w-12 rounded-lg bg-blue-700/10 flex items-center justify-center shrink-0">
                    <club.icon className="h-6 w-6 text-blue-700" />
                  </span>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">{club.title}</h3>
                    <p className="text-slate-600 text-sm">{club.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-600 mb-4">
                Les inscriptions aux clubs se font en début de semestre, lors de la journée des associations.
              </p>
              <Link href="/student-life/extracurricular-activities">
                <Button className="bg-blue-700 hover:bg-blue-900 text-white">Activités extra-scolaires</Button>
              </Link>
            </div>
          </TabsContent>

          {/* Clubs culturels & sportifs */}
          <TabsContent value="culturels">
            <div className="grid md:grid-cols-2 gap-6">
              {clubsCulturels.map((club) => (
                <div key={club.title} className="bg-white rounded-xl border border-slate-200 p-6 flex gap-4">
                  <span className="h-12 w-12 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                    <club.icon className="h-6 w-6 text-blue-700" />
                  </span>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">{club.title}</h3>
                    <p className="text-slate-600 text-sm">{club.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Link href="/student-life/athletics">
                <div className="bg-blue-950 rounded-xl p-6 h-full hover:bg-blue-900 transition-colors">
                  <Trophy className="h-7 w-7 text-cyan-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">Sport & athlétisme</h3>
                  <p className="text-slate-300 text-sm">Le sport est intégré aux cursus : équilibre entre études et bien-être physique.</p>
                </div>
              </Link>
              <Link href="/student-life/events">
                <div className="bg-white rounded-xl border border-slate-200 p-6 h-full hover:border-blue-700 transition-colors">
                  <Palette className="h-7 w-7 text-blue-700 mb-3" />
                  <h3 className="text-blue-900 font-semibold mb-1">Événements du campus</h3>
                  <p className="text-slate-600 text-sm">Retrouvez les temps forts culturels et festifs organisés toute l&apos;année.</p>
                </div>
              </Link>
            </div>
          </TabsContent>

          {/* Engagement citoyen */}
          <TabsContent value="citoyen">
            <div className="grid md:grid-cols-3 gap-6">
              {engagements.map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-6">
                  <item.icon className="h-8 w-8 text-blue-700 mb-4" />
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-blue-950 rounded-xl p-6 md:p-8">
              <h3 className="text-white font-semibold mb-2">La RSE, une valeur qui s&apos;apprend</h3>
              <p className="text-slate-300 text-sm max-w-3xl">
                La créativité, l&apos;ouverture, la responsabilité et l&apos;esprit d&apos;équipe sont les valeurs de
                l&apos;ABS. À travers le mentorat, le bénévolat, le recyclage et les projets communautaires, chaque
                étudiant contribue concrètement à la société malienne — et développe des qualités recherchées par les
                employeurs.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Rejoignez la vie associative de l&apos;ABS</h2>
          <p className="text-cyan-100 max-w-2xl mx-auto mb-8">
            Que vous souhaitiez diriger, débattre, créer ou servir : il y a une place pour vous dans les organisations
            étudiantes. Candidature ou simple curiosité, écrivez-nous.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
                Postuler maintenant
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Contacter le BAGE via l&apos;administration
              </Button>
            </Link>
            <Link href="/campus-life">
              <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-50 hover:text-blue-900">
                Retour à la vie de campus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
