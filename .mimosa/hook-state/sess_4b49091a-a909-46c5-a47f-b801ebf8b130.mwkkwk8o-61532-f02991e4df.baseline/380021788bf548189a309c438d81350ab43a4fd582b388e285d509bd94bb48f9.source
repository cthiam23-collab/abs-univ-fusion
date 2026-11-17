import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import {
  Network,
  Users,
  GraduationCap,
  Calendar,
  MessageCircle,
  BookOpen,
  Briefcase,
  Quote,
  HandHeart,
  MapPin,
  Phone,
  Mail,
  Globe2,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Anciens élèves | ABS",
  description: "Restez connectés à la communauté des diplômés de ABS — African Business School : réseau, événements et services dédiés aux alumni.",
  path: "/alumni",
})

const benefits = [
  {
    icon: Briefcase,
    title: "Accès à vie au job board",
    description:
      "Offres de stages, d'emplois et missions partagées par le réseau et les entreprises partenaires de l'ABS.",
  },
  {
    icon: Users,
    title: "Mentorat des étudiants",
    description:
      "Accompagnez une promotion : une heure par mois pour partager votre métier, relire un CV ou préparer un entretien.",
  },
  {
    icon: BookOpen,
    title: "Ressources académiques",
    description:
      "Accès à la bibliothèque universitaire et à ses ressources numériques pour rester à jour dans votre domaine.",
  },
  {
    icon: Calendar,
    title: "Événements réservés",
    description:
      "Rencontres débat, soirées networking, conférences de diplômés : des rendez-vous réguliers à Bamako et en ligne.",
  },
]

const industries = [
  "Banque & Microfinance",
  "Mines & Énergie",
  "Télécoms & Digital",
  "ONG & Coopération",
  "Audit & Conseil",
  "Supply Chain & Logistique",
  "Gestion publique",
  "Entrepreneuriat",
]

const testimonials = [
  {
    name: "Aïcha K., Promo 2023",
    role: "Analyste crédit — secteur bancaire, Bamako",
    quote:
      "Les simulations d'entretien du Career Center ont tout changé. Le jour de l'entretien à la banque, je connaissais mes arguments par cœur.",
  },
  {
    name: "Ibrahim D., Promo 2022",
    role: "Chargé logistique — secteur minier, région de Kayes",
    quote:
      "Le Master Supply Chain de l'ABS, c'est 80 % de pratique. Mon stage s'est transformé en contrat, et aujourd'hui je coordonne une équipe sur site.",
  },
  {
    name: "Fatoumata S., Promo 2024",
    role: "Assistante projet — ONG internationale",
    quote:
      "L'anglais intégré au cursus m'a ouvert des portes que je n'imaginais pas : je passe la moitié de mes réunions en anglais.",
  },
  {
    name: "Moussa T., Promo 2021",
    role: "Entrepreneur — startup agroalimentaire, Bamako",
    quote:
      "Mon business plan a été construit à l'ABS et rodé devant un jury d'enseignants et de professionnels. Le réseau continue de me suivre.",
  },
]

export default function AlumniPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/IMG-20250212-WA0022.jpg"
          alt="Communauté des anciens étudiants de l'African Business School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">Réseau des diplômés</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Le réseau ABS : votre diplôme est un passeport professionnel
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                Fierté de l&apos;African Business School, ses diplômés portent les valeurs d&apos;intégration et
                d&apos;unité africaine dans les banques, les mines, les télécoms, les ONG et leurs propres entreprises,
                à Bamako comme dans toute la sous-région. Une fois étudiant, toujours membre du réseau.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/alumni/networking">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    Rejoindre le réseau
                  </Button>
                </Link>
                <Link href="/alumni/career-services">
                  <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                    Services aux alumni
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="reseau" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="reseau">Réseau ABS</TabsTrigger>
            <TabsTrigger value="temoignages">Témoignages</TabsTrigger>
            <TabsTrigger value="connecte">Rester connecté</TabsTrigger>
          </TabsList>

          {/* Réseau */}
          <TabsContent value="reseau">
            <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Un réseau qui travaille pour vous</h2>
                <p className="text-slate-600 mb-6">
                  Le réseau des diplômés de l&apos;ABS réunit des professionnels actifs dans tous les secteurs clés de
                  l&apos;économie malienne et ouest-africaine. Il sert de vivier de talents pour les entreprises
                  partenaires, de filet de sécurité pour les nouveaux diplômés et de laboratoire d&apos;idées pour
                  l&apos;université.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-3 py-1.5 rounded-full bg-cyan-50 text-blue-900 text-sm font-medium border border-cyan-400/40"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm">
                  Ces domaines reflètent la répartition de nos diplômés, fidèles aux grandes filières de
                  l&apos;université : MBA, Finance & Ingénierie Financière, Finance Islamique, Supply Chain,
                  Gouvernance des Marchés Publics, Génie Minier.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery/IMG-20250216-WA0030.jpg"
                  alt="Diplômés de l'ABS lors d'une cérémonie sur le campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-6">Ce que le réseau vous apporte</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
              {benefits.map((b, i) => (
                <Card key={i} className="border-t-4 border-t-cyan-400 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <b.icon className="h-8 w-8 text-blue-700 mb-2" />
                    <CardTitle className="text-lg text-blue-900">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{b.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-950 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <GraduationCap className="h-10 w-10 text-cyan-400 shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Devenez mentor d&apos;un étudiant</h3>
                    <p className="text-slate-300 text-sm">
                      Vous avez un métier, une expérience, un réseau ? Transmettez : un étudiant de Licence ou de
                      Master a besoin de votre regard une heure par mois. C&apos;est la tradition ABS — chacun a reçu,
                      chacun donne.
                    </p>
                  </div>
                  <Link href="/alumni/networking">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold shrink-0">
                      Proposer mon mentorat
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Témoignages */}
          <TabsContent value="temoignages">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Ils sont passés par l&apos;ABS</h2>
              <p className="text-slate-600 text-lg">
                Témoignages illustratifs de diplômés qui portent aujourd&apos;hui l&apos;exigence et le pragmatisme de
                l&apos;African Business School dans leur quotidien professionnel.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {testimonials.map((t, i) => (
                <Card key={i} className="relative pt-8 hover:shadow-md transition-shadow">
                  <Quote className="absolute top-6 left-6 h-8 w-8 text-cyan-400" />
                  <CardContent className="pt-8">
                    <p className="text-slate-700 italic mb-6">« {t.quote} »</p>
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                        <span className="text-cyan-400 font-bold text-sm">
                          {t.name.split(" ")[0].charAt(0)}
                          {t.name.split(" ")[1]?.charAt(0) ?? ""}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-900">{t.name}</p>
                        <p className="text-sm text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-cyan-50 border-cyan-400/40">
              <CardContent className="pt-6">
                <p className="text-blue-900">
                  <strong>Vous êtes diplômé(e) de l&apos;ABS ?</strong> Partagez votre parcours avec la communauté :
                  votre histoire peut guider les promotions suivantes vers la même réussite.
                </p>
                <Link href="/alumni/networking">
                  <Button className="mt-4 bg-blue-700 hover:bg-blue-900">Envoyer mon témoignage</Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rester connecté */}
          <TabsContent value="connecte">
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Rester connecté à l&apos;ABS</h2>
                <p className="text-slate-600 mb-6">
                  Le lien avec votre alma mater ne s&apos;arrête pas à la remise des diplômes. Voici comment continuer
                  à faire partie de la famille ABS — et à en bénéficier.
                </p>
                <div className="space-y-5">
                  {[
                    {
                      icon: MessageCircle,
                      title: "Mettez à jour vos coordonnées",
                      description:
                        "Nouveau poste, nouvelle ville ? Signalez-le pour recevoir les offres, invitations et actualités du réseau.",
                    },
                    {
                      icon: Calendar,
                      title: "Participez aux événements",
                      description:
                        "Journées portes ouvertes, forums entreprises, conférences métiers : revenez sur le campus et croisez les promotions.",
                    },
                    {
                      icon: HandHeart,
                      title: "Donnez du temps ou des opportunités",
                      description:
                        "Une offre de stage dans votre société, un atelier métier, un mentorat : chaque contribution compte pour la communauté.",
                    },
                    {
                      icon: Globe2,
                      title: "Réseau panafricain",
                      description:
                        "L'ouverture africaine est le domaine de prédilection de l'université : connectez-vous avec les alumni présents dans la sous-région.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href="/alumni/networking">
                    <Button className="bg-blue-700 hover:bg-blue-900">Rejoindre le réseau</Button>
                  </Link>
                  <Link href="/events">
                    <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                      Voir les événements
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative h-56 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/gallery/IMG-20250216-WA0059.jpg"
                    alt="Vie associative et événements sur le campus de l'ABS"
                    fill
                    className="object-cover"
                  />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Bureau des anciens</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.address.formatted}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.email}
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="mt-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                        Nous écrire
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-14">
        <div className="container mx-auto px-4 text-center">
          <Network className="h-10 w-10 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Le réseau ne vaut que par ses membres</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Rejoignez la communauté des diplômés de l&apos;African Business School et faites grandir — ensemble —
            l&apos;influence de l&apos;ABS en Afrique et au-delà.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/alumni/networking">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                S&apos;inscrire au réseau
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Voir la vie du campus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
