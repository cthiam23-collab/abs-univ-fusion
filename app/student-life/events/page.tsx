import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, MapPin, ArrowRight, Sparkles, Trophy, GraduationCap } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Événements étudiants | ABS",
  description: "Événements et rencontres de la vie étudiante de ABS — African Business School.",
  path: "/student-life/events",
})

type Evenement = {
  titre: string
  date: string
  heure: string
  lieu: string
  description: string
  image: string
  tag: string
}

const aVenir: Evenement[] = [
  {
    titre: "Journées portes ouvertes",
    date: "Vendredi 6 mars 2026",
    heure: "09h00 – 17h00",
    lieu: "Campus ABS, Hamdallaye ACI 2000",
    description:
      "Visitez les salles, rencontrez les enseignants et les étudiants de la BAGE, et découvrez nos 5 Bachelors et 16 Masters. Ateliers d'orientation sur l'anglais et l'intelligence artificielle au programme.",
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    tag: "Admissions",
  },
  {
    titre: "Semaine de l'entrepreneuriat",
    date: "Du 20 au 24 avril 2026",
    heure: "Toute la journée",
    lieu: "Amphithéâtre principal",
    description:
      "Cinq jours d'ateliers, de pitchs étudiants et de rencontres avec des entrepreneurs maliens et panafricains. Le grand concours de projets primé par un jury de professionnels.",
    image: "/images/gallery/IMG-20250216-WA0030.jpg",
    tag: "Carrière",
  },
  {
    titre: "Tournoi sportif inter-promotions",
    date: "Samedi 16 mai 2026",
    heure: "09h00 – 18h00",
    lieu: "Terrains du campus",
    description:
      "Football, basket-ball et relais : les promotions s'affrontent pour la coupe du recteur. Buvette étudiante et ambiance de tribunes garanties.",
    image: "/images/gallery/IMG-20250216-WA0067.jpg",
    tag: "Sport",
  },
  {
    titre: "Forum métiers & recrutement",
    date: "Jeudi 4 juin 2026",
    heure: "10h00 – 16h00",
    lieu: "Hall central du campus",
    description:
      "Entreprises partenaires, simulations d'entretien et revue de CV : le rendez-vous annuel de l'employabilité, dans la continuité du coaching intégré à nos cursus.",
    image: "/images/gallery/IMG-20250216-WA0072.jpg",
    tag: "Carrière",
  },
  {
    titre: "Gala annuel ABS",
    date: "Samedi 27 juin 2026",
    heure: "19h00 – 02h00",
    lieu: "Salle de réception, Bamako",
    description:
      "La soirée de l'année : remise des prix d'excellence, prestation artistique des clubs, photo de promotion et piste de danse. Dress code : élégant.",
    image: "/images/gallery/IMG-20250216-WA0034.jpg",
    tag: "Célébration",
  },
]

const traditions: Evenement[] = [
  {
    titre: "Journées culturelles Mali-Afrique",
    date: "Chaque mois de novembre",
    heure: "2 jours",
    lieu: "Campus ABS",
    description:
      "Expositions, mode, gastronomie et débats sur l'intégration africaine : une célébration de l'ouverture et de la diversité, valeurs fondatrices de l'ABS.",
    image: "/images/gallery/IMG-20250216-WA0015.jpg",
    tag: "Culture",
  },
  {
    titre: "Cérémonie de rentrée solennelle",
    date: "Chaque mois d'octobre",
    heure: "09h00 – 12h00",
    lieu: "Amphithéâtre principal",
    description:
      "La Directrice Générale, Sokhna M. Thiam, accueille la nouvelle promotion, présente les valeurs de l'école et remet les écharpes aux étudiants de première année.",
    image: "/images/campus/african-business-school-campus.jpg",
    tag: "Tradition",
  },
  {
    titre: "Semaine RSE & engagement",
    date: "Chaque mois de février",
    heure: "Toute la semaine",
    lieu: "Campus et quartiers de Bamako",
    description:
      "Mentorat de lycéens, opérations de recyclage sur le campus et journée de bénévolat associatif : la responsabilité en action, portée par la BAGE.",
    image: "/images/campus/IMG-20250212-WA0003.jpg",
    tag: "Engagement",
  },
  {
    titre: "Soirée intégration des nouveaux étudiants",
    date: "Chaque mois d'octobre",
    heure: "18h00 – 23h00",
    lieu: "Cour du campus",
    description:
      "Parrainage par les promotions supérieures, jeux de connaissance du campus et concert étudiant : la première soirée de votre vie ABS.",
    image: "/images/gallery/IMG-20250216-WA0066.jpg",
    tag: "Célébration",
  },
]

const vieCampus: Evenement[] = [
  {
    titre: "Clubs & ateliers hebdomadaires",
    date: "Tous les mercredis après-midi",
    heure: "15h00 – 18h00",
    lieu: "Salles associatives",
    description:
      "Débats, médias étudiants, club d'anglais, ateliers numériques et IA : les clubs se réunissent chaque semaine et accueillent les nouveaux membres toute l'année.",
    image: "/images/gallery/IMG-20250216-WA0021.jpg",
    tag: "Clubs",
  },
  {
    titre: "Matchs & séances de sport",
    date: "Mardis, jeudis et samedis",
    heure: "16h00 – 18h00",
    lieu: "Terrains du campus",
    description:
      "Le sport est intégré aux cursus : entraînements de football et de basket, cours de fitness et matchs amicaux rythment la semaine de chaque étudiant.",
    image: "/images/gallery/IMG-20250216-WA0059.jpg",
    tag: "Sport",
  },
  {
    titre: "Conférences & rencontres professionnelles",
    date: "Un jeudi par mois",
    heure: "17h00 – 19h00",
    lieu: "Amphithéâtre principal",
    description:
      "Dirigeants, alumni et experts viennent témoigner sur le marché de l'emploi au Mali et en Afrique de l'Ouest. Échanges suivis d'un networking autour d'un thé.",
    image: "/images/gallery/IMG-20250216-WA0060.jpg",
    tag: "Carrière",
  },
]

function EvenementCard({ evenement }: { evenement: Evenement }) {
  return (
    <Card className="overflow-hidden border-slate-200 pt-0 gap-0 hover:shadow-lg transition-shadow">
      <Image src={evenement.image} alt={evenement.titre} width={600} height={400} className="h-48 w-full object-cover" />
      <CardContent className="p-6">
        <Badge className="mb-3 bg-cyan-50 text-blue-700 border border-cyan-400">{evenement.tag}</Badge>
        <h3 className="text-lg font-bold text-blue-900 mb-2">{evenement.titre}</h3>
        <p className="text-sm text-slate-600 mb-4">{evenement.description}</p>
        <div className="space-y-1.5 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-cyan-400 shrink-0" /> {evenement.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-cyan-400 shrink-0" /> {evenement.heure}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-cyan-400 shrink-0" /> {evenement.lieu}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center">
        <Image
          src="/images/gallery/IMG-20250216-WA0015.jpg"
          alt="Événements étudiants à l'ABS"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-950/60" />
        <div className="container mx-auto relative z-10 px-4">
          <Badge className="mb-4 bg-cyan-400 text-blue-950 hover:bg-cyan-400">
            <Sparkles className="h-4 w-4 mr-1" /> Agenda 2026
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight mb-4">
            Les événements qui font vivre le campus ABS
          </h1>
          <p className="text-lg text-cyan-50 max-w-2xl mb-8">
            Plus de 10 rendez-vous par an, co-construits par la BAGE et l'administration : portes ouvertes,
            entrepreneuriat, sport, culture et grands moments de célébration à Hamdallaye ACI 2000.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/events">Tout l'agenda de l'université</Link>
            </Button>
            <Button asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
              <Link href="/gallery">Galerie photos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto py-16 px-4">
        <Tabs defaultValue="a-venir" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-10">
            <TabsTrigger value="a-venir">À venir</TabsTrigger>
            <TabsTrigger value="traditions">Traditions annuelles</TabsTrigger>
            <TabsTrigger value="vie-campus">Vie de campus</TabsTrigger>
          </TabsList>

          <TabsContent value="a-venir">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Prochains rendez-vous — année 2026</h2>
              <p className="text-slate-600">
                Notez les dates, invitez vos proches et venez nombreux : la plupart des événements sont ouverts aux
                familles, aux alumni et aux futurs étudiants.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {aVenir.map((evenement) => (
                <EvenementCard key={evenement.titre} evenement={evenement} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="traditions">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Les rendez-vous qui marquent l'année</h2>
              <p className="text-slate-600">
                Chaque promotion les a vécus, chaque nouvelle promotion les attend : voici les traditions qui
                construisent l'identité de l'ABS.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {traditions.map((evenement) => (
                <EvenementCard key={evenement.titre} evenement={evenement} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vie-campus">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Le rythme hebdomadaire du campus</h2>
              <p className="text-slate-600">
                Au-delà des grands événements, la vie ABS se vit chaque semaine : clubs, sport intégré aux cursus et
                rencontres professionnelles.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {vieCampus.map((evenement) => (
                <EvenementCard key={evenement.titre} evenement={evenement} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Rôle de la BAGE */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/campus/IMG-20250212-WA0012.jpg"
              alt="Étudiants impliqués dans l'organisation des événements"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Badge className="mb-3 bg-cyan-50 text-blue-700 border border-cyan-400">
              <GraduationCap className="h-4 w-4 mr-1" /> Étudiants organisateurs
            </Badge>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Des événements co-construits par la BAGE</h2>
            <p className="text-slate-600 mb-4">
              Le gouvernement étudiant élu — la BAGE — participe à la conception et à l'organisation du calendrier :
              choix des thèmes, gestion des clubs, communication sur le campus et accueil des invités. Un vrai
              terrain d'apprentissage de la responsabilité et de l'esprit d'équipe.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Comités étudiants pour chaque grand événement",
                "Bénévolat valorisé dans le parcours de chaque étudiant",
                "Coupe du recteur remise au tournoi inter-promotions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <Trophy className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-blue-700 hover:bg-blue-900">
                <Link href="/student-life/organizations">
                  S'impliquer dans l'organisation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
                <Link href="/calendar">Calendrier académique</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-blue-950 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ne manquez aucun rendez-vous</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Candidature aux journées portes ouvertes, inscription aux tournois, réservation pour le gala :
            écrivez-nous ou passez au campus.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
              <Link href="/admissions">Découvrir les admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
