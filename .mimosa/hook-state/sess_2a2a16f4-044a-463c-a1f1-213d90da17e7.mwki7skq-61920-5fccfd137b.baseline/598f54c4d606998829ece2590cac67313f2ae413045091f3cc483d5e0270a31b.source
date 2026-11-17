import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Clock, Wallet, Coffee, UtensilsCrossed, Salad, Phone, MapPin, Star } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Restauration | African Business School (ABS)",
  description:
    "Cafétéria, formules repas et régimes spéciaux : découvrez l'offre de restauration du campus de l'ABS à Bamako.",
  path: "/campus-life/dining",
})

const cafeteriaCards = [
  {
    icon: Coffee,
    title: "La cafétéria centrale",
    hours: "Lundi – Vendredi : 07h30 – 18h00 · Samedi : 08h00 – 13h00",
    text: "Le cœur battant du campus entre deux cours : petit-déjeuner le matin, déjeuner complet à midi, en-cas et boissons chaudes toute la journée.",
  },
  {
    icon: UtensilsCrossed,
    title: "Le point en-cas rapide",
    hours: "Lundi – Vendredi : 09h00 – 17h00",
    text: "Sandwichs, beignets, jus locaux et collations pour les pauses courtes entre les amphithéâtres et les salles de projet.",
  },
  {
    icon: Star,
    title: "Inspirations de la cuisine malienne",
    hours: "Menu du jour affiché chaque matin",
    text: "Notre restauration s'inspire respectueusement des grands classiques du pays : tiegène, yassa, riz au gras — préparés avec des produits frais des marchés de Bamako.",
  },
]

const formules = [
  {
    name: "Formule Étudiante",
    price: "Sur place, à la carte",
    description: "Plat du jour + accompagnement + boisson. Le meilleur rapport qualité-prix pour le quotidien.",
    details: ["Menu renouvelé chaque semaine", "Grandes portions adaptées aux étudiants", "Service en continu à midi"],
  },
  {
    name: "Formule Petit-Déjeuner",
    price: "Dès l'ouverture, 07h30",
    description: "Thé ou café, pain, beurre, œufs ou beignets locaux pour bien démarrer une journée de cours.",
    details: ["Service avant les cours de 08h00", "Options salées et sucrées", "Boissons chaudes à volonté"],
  },
  {
    name: "Panier Étude",
    price: "À commander le matin",
    description: "Un repas à emporter pour les après-midis de projets, les révisions à la bibliothèque ou les déplacements en mission.",
    details: ["Commande au comptoir dès 08h00", "Retrait à midi sans file d'attente", "Idéal pour les journées chargées"],
  },
]

const regimes = [
  {
    icon: Salad,
    title: "Options végétariennes",
    text: "Des plats sans viande proposés chaque jour, à base de légumes frais, de légumineuses et de céréales locales.",
  },
  {
    icon: UtensilsCrossed,
    title: "Régimes sans porc / halal",
    text: "L'ensemble de la restauration du campus respecte les habitudes alimentaires de nos étudiants, avec des plats sans porc en standard.",
  },
  {
    icon: Phone,
    title: "Allergies et besoins spécifiques",
    text: "Signalez vos allergies ou besoins particuliers au comptoir : notre équipe vous oriente vers les plats adaptés du jour.",
  },
]

export default function DiningPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/gallery/IMG-20250216-WA0034.jpg"
          alt="Espace de restauration du campus ABS"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-700/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <p className="text-cyan-400 font-semibold tracking-wide uppercase mb-3">Vie de campus</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            La restauration du campus
          </h1>
          <p className="text-slate-200 text-lg mt-4 max-w-2xl">
            Une cafétéria conviviale, des formules pensées pour le rythme étudiant et des menus inspirés de la riche
            cuisine malienne : bien manger fait partie de la réussite à l&apos;ABS.
          </p>
          <div className="mt-8">
            <Link href="/campus/map">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
                Localiser la cafétéria sur le campus
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="cafeteria" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="cafeteria">Cafétéria</TabsTrigger>
            <TabsTrigger value="formules">Formules repas</TabsTrigger>
            <TabsTrigger value="regimes">Régimes spéciaux</TabsTrigger>
          </TabsList>

          {/* Cafétéria */}
          <TabsContent value="cafeteria">
            <div className="grid lg:grid-cols-3 gap-6">
              {cafeteriaCards.map((card) => (
                <div key={card.title} className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col">
                  <div className="p-6 flex-1">
                    <card.icon className="h-8 w-8 text-blue-700 mb-4" />
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{card.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{card.text}</p>
                  </div>
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-start gap-2">
                    <Clock className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-600">{card.hours}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-cyan-50 border border-cyan-400/40 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4">
              <MapPin className="h-8 w-8 text-blue-700 shrink-0" />
              <p className="text-slate-700 flex-1">
                La cafétéria centrale se trouve au cœur du campus de l&apos;ABS, Hamdallaye ACI 2000, Bamako — à
                quelques pas des amphithéâtres et de la bibliothèque.
              </p>
              <Link href="/campus/map">
                <Button className="bg-blue-700 hover:bg-blue-900 text-white">Voir le plan du campus</Button>
              </Link>
            </div>
          </TabsContent>

          {/* Formules */}
          <TabsContent value="formules">
            <div className="grid md:grid-cols-3 gap-6">
              {formules.map((formule) => (
                <div key={formule.name} className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">{formule.name}</h3>
                  <p className="text-cyan-400 text-sm font-semibold mb-3">{formule.price}</p>
                  <p className="text-slate-600 text-sm mb-4">{formule.description}</p>
                  <ul className="space-y-2 text-sm text-slate-700 flex-1">
                    {formule.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center gap-4">
              <Wallet className="h-8 w-8 text-blue-700 shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900 mb-1">Moyens de paiement acceptés</h3>
                <p className="text-slate-600 text-sm">
                  Espèces, Orange Money et MTN MoMo sont acceptés à tous les points de vente du campus, pour un
                  paiement simple et rapide.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Régimes spéciaux */}
          <TabsContent value="regimes">
            <div className="grid md:grid-cols-3 gap-6">
              {regimes.map((regime) => (
                <div key={regime.title} className="bg-white rounded-xl border border-slate-200 p-6">
                  <regime.icon className="h-8 w-8 text-blue-700 mb-4" />
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{regime.title}</h3>
                  <p className="text-slate-600 text-sm">{regime.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-cyan-50 border border-cyan-400/40 rounded-xl p-6 text-slate-700">
              <p>
                Notre équipe restauration travaille chaque semaine à élargir l&apos;offre pour que chaque étudiant
                trouve un repas adapté, équilibré et abordable. Vos suggestions sont bienvenues !
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Une question sur la restauration ?</h2>
          <p className="text-cyan-100 max-w-2xl mx-auto mb-8">
            Notre équipe vous répond sur les menus, les formules et les régimes spéciaux. Vous pouvez aussi découvrir
            le campus lors d&apos;une visite guidée.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
                Nous contacter
              </Button>
            </Link>
            <Link href="/campus-tour">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Planifier une visite
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
