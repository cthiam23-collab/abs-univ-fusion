import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, CalendarDays, HeartPulse, Dumbbell, ArrowRight, Medal, Target } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Sport | ABS",
  description: "Activités sportives à ABS — African Business School.",
  path: "/student-life/athletics",
})

const equipes = [
  {
    title: "Football ABS",
    description:
      "L'équipe de football de l'ABS s'entraîne chaque semaine sur le terrain du campus et représente l'école lors des rencontres inter-universitaires de Bamako. Sélections ouvertes à toutes les promotions.",
    details: ["Entraînements : mardi & jeudi, 16h–18h", "Championnat inter-universitaire de Bamako", "Effectif : 20 joueurs + staff étudiant"],
    image: "/images/campus/IMG-20250212-WA0012.jpg",
  },
  {
    title: "Basket-ball ABS",
    description:
      "Rapide, collectif et spectaculaire : notre section basket rassemble les étudiants autour d'un championnat interne puis de matchs contre les écoles partenaires. Le sport est intégré aux cursus, chacun progresse à son rythme.",
    details: ["Entraînements : mercredi, 16h–18h", "Tournoi 3x3 au printemps", "Toutes les promotions bienvenues"],
    image: "/images/gallery/IMG-20250216-WA0067.jpg",
  },
  {
    title: "Athlétisme & course",
    description:
      "Sprint, demi-fond, relais : la section athlétisme prépare les étudiants aux journées sportives de l'Université et encourage la pratique régulière, pilier du bien-être physique et mental que nous promouvons.",
    details: ["Entraînement collectif : samedi matin", "Journées d'athlétisme du campus", "Relais inter-promotions en fin d'année"],
    image: "/images/campus/IMG-20250212-WA0021.jpg",
  },
]

const installations = [
  {
    title: "Terrain de football",
    description: "Le terrain du campus accueille les entraînements, les cours de sport intégrés aux cursus et le grand tournoi inter-promotions.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    title: "Terrain de basket",
    description: "Un espace polyvalent en plein air pour le basket, le 3x3 et les échauffements des journées sportives.",
    image: "/images/gallery/IMG-20250216-WA0059.jpg",
  },
  {
    title: "Espace fitness",
    description: "Zone dédiée au renforcement musculaire et aux cours encadrés, au service de la santé et de l'équilibre des étudiants.",
    image: "/images/gallery/IMG-20250216-WA0060.jpg",
  },
]

const bienEtre = [
  {
    icon: Dumbbell,
    title: "Cours de fitness encadrés",
    description:
      "Échauffements, renforcement et cardio : des séances régulières intégrées à l'emploi du temps pour garder la forme pendant toute l'année académique.",
  },
  {
    icon: HeartPulse,
    title: "Bien-être physique & mental",
    description:
      "Le sport à l'ABS n'est pas une compétition réservée aux élites : c'est un outil d'équilibre. Notre équipe de soutien accompagne les étudiants dans la gestion du stress et de la charge de travail.",
  },
  {
    icon: Target,
    title: "Esprit d'équipe & valeurs",
    description:
      "Créativité, ouverture, responsabilité, esprit d'équipe : les valeurs de l'ABS se vivent d'abord sur les terrains, puis en entreprise.",
  },
]

export default function AthleticsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center">
        <Image
          src="/images/gallery/IMG-20250216-WA0067.jpg"
          alt="Sport et activités physiques sur le campus de l'ABS"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-950/60" />
        <div className="container mx-auto relative z-10 px-4">
          <Badge className="mb-4 bg-cyan-400 text-blue-950 hover:bg-cyan-400">
            <Trophy className="h-4 w-4 mr-1" /> Sport & bien-être
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight mb-4">
            Athlétisme, sports et esprit d'équipe à l'ABS
          </h1>
          <p className="text-lg text-cyan-50 max-w-2xl mb-8">
            Le sport est intégré à tous nos cursus : football, basket-ball, athlétisme et fitness rythment la semaine
            de chaque étudiant. Parce que la réussite se construit aussi sur les terrains.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/campus-life/recreation">Découvrir la récréation</Link>
            </Button>
            <Button asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
              <Link href="/student-life/events">Tournois & événements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sport intégré aux cursus */}
      <section className="bg-cyan-50 border-b border-cyan-400/30 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center gap-4">
          <Medal className="h-8 w-8 text-blue-700 shrink-0" />
          <p className="text-blue-900 font-medium">
            <strong>Le sport fait partie du cursus.</strong> À l'ABS, chaque étudiant — Bachelor ou Master —
              consacre des heures hebdomadaires au sport : bien-être physique et mental, esprit d'équipe et persévérance
              sont des compétences d'employabilité à part entière.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto py-16 px-4">
        <Tabs defaultValue="equipes" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-10">
            <TabsTrigger value="equipes">Équipes & compétitions</TabsTrigger>
            <TabsTrigger value="installations">Installations sportives</TabsTrigger>
            <TabsTrigger value="bien-etre">Bien-être & fitness</TabsTrigger>
          </TabsList>

          <TabsContent value="equipes">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Trois sections, une seule équipe</h2>
              <p className="text-slate-600">
                Nos équipes portent les couleurs de l'ABS lors des compétitions inter-écoles et des grands
                tournois internes. Les sélections sont ouvertes à tous, du débutant au confirmé.
              </p>
            </div>
            <div className="space-y-8">
              {equipes.map((equipe) => (
                <Card key={equipe.title} className="overflow-hidden border-slate-200 pt-0 gap-0 grid md:grid-cols-2 hover:shadow-lg transition-shadow">
                  <Image
                    src={equipe.image}
                    alt={equipe.title}
                    width={700}
                    height={450}
                    className="h-56 md:h-full w-full object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{equipe.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{equipe.description}</p>
                    <ul className="space-y-1.5">
                      {equipe.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-slate-700">
                          <CalendarDays className="h-4 w-4 text-cyan-400 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="installations">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Des espaces pour bouger au cœur de Bamako</h2>
              <p className="text-slate-600">
                Le campus de Hamdallaye ACI 2000 dispose d'installations accessibles à tous les étudiants, en cours
                encadré comme en accès libre.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {installations.map((install) => (
                <Card key={install.title} className="overflow-hidden border-slate-200 pt-0 gap-0 hover:shadow-lg transition-shadow">
                  <Image src={install.image} alt={install.title} width={600} height={400} className="h-48 w-full object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{install.title}</h3>
                    <p className="text-sm text-slate-600">{install.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="bg-blue-700 hover:bg-blue-900">
                <Link href="/campus-life/recreation">
                  Toutes les activités du campus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
                <Link href="/student-life/facilities">Installations académiques</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="bien-etre">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Un programme pour l'équilibre étudiant</h2>
              <p className="text-slate-600">
                Intensité des cours, exigence des cursus : l'ABS place le bien-être au centre de sa
                pédagogie, avec 80 % de pratique dont le sport et le fitness.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {bienEtre.map((item) => (
                <div key={item.title} className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded-r-xl">
                  <item.icon className="h-8 w-8 text-blue-700 mb-3" />
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Tournois inter-promotions */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <Badge className="mb-3 bg-cyan-50 text-blue-700 border border-cyan-400">
              <Users className="h-4 w-4 mr-1" /> Fierté de campus
            </Badge>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Le tournoi sportif inter-promotions</h2>
            <p className="text-slate-600 mb-4">
              Chaque année, les promotions s'affrontent dans une compétition qui devient le rendez-vous le plus
              attendu du campus : football, basket, relais et concours de soutien. Les équipes mixtes, le fair-play et
              l'ambiance des tribunes font de ce tournoi un vrai laboratoire d'esprit d'équipe — et le vivier des
              équipes de l'Université.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Phase de groupes puis finale, arbitrée par les étudiants",
                "Équipes mixtes Bachelor / Master",
                "Coupe remise lors de la cérémonie de clôture",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <Trophy className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="bg-blue-700 hover:bg-blue-900">
              <Link href="/student-life/events">
                Voir le calendrier sportif <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/campus/IMG-20250212-WA0006.jpg"
              alt="Étudiants de l'ABS lors des activités sportives"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-blue-950 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Portez les couleurs de l'ABS</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Rejoignez une section sportive, proposez un nouveau sport à la BAGE ou participez simplement aux séances
            de fitness : le terrain vous attend.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/contact">Contacter l'équipe sportive</Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
              <Link href="/student-life/extracurricular-activities">Activités extrascolaires</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
