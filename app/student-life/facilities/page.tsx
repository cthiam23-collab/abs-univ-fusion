import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import {
  Presentation,
  BookOpen,
  Wifi,
  MonitorSmartphone,
  Users,
  ArrowRight,
  Library,
  Coffee,
  MonitorDot,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Installations | ABS",
  description: "Installations et espaces du campus de ABS — African Business School à Bamako.",
  path: "/student-life/facilities",
})

const salles = [
  {
    title: "Amphithéâtre principal",
    description:
      "Le grand amphithéâtre accueille les cours magistraux, les conférences professionnelles mensuelles et les cérémonies de rentrée. Son équipement de projection moderne sert aussi les grandes présentations de la semaine de l'entrepreneuriat.",
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    points: ["Projection Full HD et sonorisation", "Cérémonies et conférences", "Accès PMR"],
  },
  {
    title: "Salles de cours modernes",
    description:
      "Salles lumineuses et climatisées, pensées pour la pédagogie active de l'ABS : 80 % de pratique demande des espaces modulables, où l'on passe du cours en groupe à l'atelier en quelques minutes.",
    image: "/images/campus/IMG-20250212-WA0012.jpg",
    points: ["Vidéoprojecteur dans chaque salle", "Tableaux interactifs", "Configurations modulables"],
  },
  {
    title: "Salles informatiques",
    description:
      "Postes récents, logiciels métiers et accès aux outils d'intelligence artificielle intégrés à nos cursus : l'informatique est au cœur de la formation pratique, du Bachelor au Master.",
    image: "/images/gallery/IMG-20250216-WA0030.jpg",
    points: ["Postes dédiés par étudiant", "Logiciels métiers & IA", "Réservation libre hors cours"],
  },
]

const bibliotheque = [
  {
    icon: Library,
    title: "Bibliothèque universitaire",
    description:
      "Ouvrages de gestion, de commerce et d'informatique, ressources en ligne et Documentation en anglais : la bibliothèque soutient les révisions comme les travaux de recherche des Masters.",
    link: "/library",
    linkLabel: "Explorer la bibliothèque",
  },
  {
    icon: Users,
    title: "Salles de travail de groupe",
    description:
      "Des espaces clos et équipés pour préparer les exposés, les études de cas et les projets d'équipe — la pratique étant au cœur de la pédagogie ABS, ces salles sont très demandées.",
    link: "/student-life/facilities",
    linkLabel: "Réserver un créneau",
  },
  {
    icon: Coffee,
    title: "Espaces de détente",
    description:
      "Entre deux cours, les étudiants retrouvent les espaces de convivialité du campus et le service de restauration pour reprendre des forces.",
    link: "/campus-life/dining",
    linkLabel: "Voir la restauration",
  },
]

const numerique = [
  {
    icon: Wifi,
    title: "Wi-Fi sur tout le campus",
    description:
      "Une couverture haut débit dans les salles, la bibliothèque et les espaces communs : vos travaux et vos recherches suivent partout.",
  },
  {
    icon: MonitorSmartphone,
    title: "Plateforme e-campus",
    description:
      "Cours, devoirs, notes et échanges avec les enseignants : la vie académique est centralisée sur notre plateforme en ligne, accessible 24h/24.",
  },
  {
    icon: MonitorDot,
    title: "Anglais & outils numériques",
    description:
      "L'anglais et l'intelligence artificielle sont intégrés à chaque cursus : laboratoires de langue numérique et licences d'outils fournis aux étudiants.",
  },
]

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus moderne de l'ABS à Hamdallaye ACI 2000, Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-950/60" />
        <div className="container mx-auto relative z-10 px-4">
          <Badge className="mb-4 bg-cyan-400 text-blue-950 hover:bg-cyan-400">
            <Presentation className="h-4 w-4 mr-1" /> Nos installations
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight mb-4">
            Des installations pensées pour la pratique
          </h1>
          <p className="text-lg text-cyan-50 max-w-2xl mb-8">
            Salles équipées, bibliothèque, laboratoires informatiques et Wi-Fi de bout en bout : le campus de
            Hamdallaye ACI 2000 met la technologie et le confort au service d'une pédagogie à 80 % pratique.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/e-campus">Découvrir l'e-campus</Link>
            </Button>
            <Button asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
              <Link href="/library">La bibliothèque</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto py-16 px-4">
        <Tabs defaultValue="salles" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-10">
            <TabsTrigger value="salles">Salles & amphithéâtres</TabsTrigger>
            <TabsTrigger value="bibliotheque">Bibliothèque & étude</TabsTrigger>
            <TabsTrigger value="numerique">Numérique & connectivité</TabsTrigger>
          </TabsList>

          <TabsContent value="salles">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Apprendre dans de vraies conditions</h2>
              <p className="text-slate-600">
                Chaque espace du campus est conçu pour l'apprentissage actif : projecteurs, sonorisation et mobiliers
                modulables dans toutes les salles.
              </p>
            </div>
            <div className="space-y-8">
              {salles.map((salle) => (
                <Card key={salle.title} className="overflow-hidden border-slate-200 pt-0 gap-0 grid md:grid-cols-2 hover:shadow-lg transition-shadow">
                  <Image src={salle.image} alt={salle.title} width={700} height={450} className="h-56 md:h-full w-full object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{salle.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{salle.description}</p>
                    <ul className="space-y-1.5">
                      {salle.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-sm text-slate-700">
                          <BookOpen className="h-4 w-4 text-cyan-400 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bibliotheque">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Travailler seul ou ensemble</h2>
              <p className="text-slate-600">
                La bibliothèque et les espaces d'étude du campus offrent le calme pour réviser et l'équipement pour
                collaborer — deux besoins complémentaires de la vie étudiante.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {bibliotheque.map((item) => (
                <Card key={item.title} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <item.icon className="h-8 w-8 text-blue-700 mb-3" />
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 mb-4 flex-1">{item.description}</p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-cyan-400"
                    >
                      {item.linkLabel} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="numerique">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Un campus connecté de bout en bout</h2>
              <p className="text-slate-600">
                À l'heure où l'anglais et l'intelligence artificielle sont intégrés à tous nos cursus, le numérique
                n'est pas une option : c'est l'infrastructure de la formation ABS.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {numerique.map((item) => (
                <div key={item.title} className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded-r-xl">
                  <item.icon className="h-8 w-8 text-blue-700 mb-3" />
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="bg-blue-700 hover:bg-blue-900">
                <Link href="/student-portal">
                  Accéder au portail étudiant <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
                <Link href="/student-resources">Ressources étudiantes</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Visite */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/campus/IMG-20250212-WA0003.jpg"
              alt="Étudiants dans les espaces du campus ABS"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Badge className="mb-3 bg-cyan-50 text-blue-700 border border-cyan-400">
              <Presentation className="h-4 w-4 mr-1" /> Visitez le campus
            </Badge>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Venez voir par vous-même</h2>
            <p className="text-slate-600 mb-4">
              Rien ne vaut une visite : arpentiez les salles, testez le Wi-Fi, asseyez-vous en amphithéâtre et
              échangez avec les étudiants. Nos journées portes ouvertes et les visites sur rendez-vous vous attendent
              à Hamdallaye ACI 2000.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-blue-700 hover:bg-blue-900">
                <Link href="/contact">
                  Planifier une visite <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
                <Link href="/gallery">Voir la galerie</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-blue-950 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Étudier dans les meilleures conditions</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Rejoignez une université où les équipements suivent l'ambition : 5 Bachelors, 16 Masters, 80 % de
            pratique, anglais et IA intégrés.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/apply">Candidater maintenant</Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
              <Link href="/campus-life">Explorer le campus</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
