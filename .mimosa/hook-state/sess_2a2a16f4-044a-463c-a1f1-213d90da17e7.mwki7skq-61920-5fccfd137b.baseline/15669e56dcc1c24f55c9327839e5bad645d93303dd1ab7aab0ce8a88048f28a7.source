import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  Landmark,
  Pickaxe,
  Scale,
  Newspaper,
  Wifi,
  Database,
  Laptop,
  Users,
  Printer,
  Search,
  Clock,
  MapPin,
  Phone,
  Mail,
  Headphones,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Bibliothèque | ABS",
  description: "Bibliothèque et ressources documentaires de ABS — African Business School à Bamako.",
  path: "/library",
})

const collections = [
  {
    icon: Landmark,
    title: "Management & Gestion",
    description:
      "Stratégie, marketing, GRH, entrepreneuriat : les ouvrages de référence et les manuels des 5 Bachelors de l'université, complétés par des études de cas africaines et internationales.",
  },
  {
    icon: BookOpen,
    title: "Finance, Banque & Finance islamique",
    description:
      "Une collection rare dans la région : finance d'entreprise, ingénierie financière, marchés, microfinance et principes de la finance islamique (moudaraba, moucharaka, sukuk) — en français et en anglais.",
  },
  {
    icon: Pickaxe,
    title: "Mines, Géologie & Énergie",
    description:
      "Génie minier, exploitation des carrières, sécurité des sites, droit minier et enjeux environnementaux : le socle documentaire de nos filières techniques, en phase avec le secteur malien.",
  },
  {
    icon: Scale,
    title: "Droit & Gouvernance",
    description:
      "Droit des affaires, droit international, marchés publics, gouvernance et éthique : ressources indispensables pour le Master Gouvernance des Marchés Publics et les préparations aux concours.",
  },
  {
    icon: Newspaper,
    title: "Presse malienne et africaine",
    description:
      "Journaux, magazines et revues économiques du Mali et du continent : gardez le pouls de l'actualité pour vos exposés, débats et mémoires.",
  },
  {
    icon: Database,
    title: "Ressources numériques",
    description:
      "E-books, bases de données académiques, mémoires d'étudiants et annales d'examens accessibles depuis les postes de la bibliothèque ou en wifi sur le campus.",
  },
]

const services = [
  {
    icon: Search,
    title: "Aide à la recherche documentaire",
    description:
      "Un bibliothécaire vous guide pour trouver la bonne source, citer correctement et exploiter les bases de données.",
  },
  {
    icon: Laptop,
    title: "Postes informatiques & wifi",
    description:
      "Un espace connecté pour consulter les ressources numériques, rédiger vos travaux et préparer vos présentations.",
  },
  {
    icon: Users,
    title: "Salles de travail en groupe",
    description:
      "Des espaces pour préparer vos projets d'équipe — la pédagogie ABS repose à 80 % sur la pratique et le travail collectif.",
  },
  {
    icon: Printer,
    title: "Impression & reprographie",
    description:
      "Impression, photocopie et numérisation de documents sur place, à tarif étudiant.",
  },
  {
    icon: Headphones,
    title: "Espace anglais & langues",
    description:
      "Ressources dédiées à l'English Academy : manuels, audio, préparation aux tests et lecture en anglais pour tous niveaux.",
  },
  {
    icon: BookOpen,
    title: "Prêt entre bibliothèques",
    description:
      "Un document absent de nos rayons ? Nous activons nos partenaires pour l'obtenir dans les meilleurs délais.",
  },
]

export default function LibraryPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/IMG-20250212-WA0013.jpg"
          alt="Bibliothèque universitaire de l'African Business School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">
                Bibliothèque universitaire
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                La bibliothèque ABS : le carburant de vos mémoires et de vos ambitions
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                Collections alignées sur nos programmes, ressources numériques, espaces de travail et une équipe qui
                vous accompagne : ici, chaque projet — exposé, mémoire, business plan — commence par une bonne
                recherche documentaire.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/library/catalog">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    Rechercher dans le catalogue
                  </Button>
                </Link>
                <Link href="/library/hours">
                  <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                    Horaires d&apos;ouverture
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="collections" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="collections">Collections</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="horaires">Horaires & accès</TabsTrigger>
          </TabsList>

          {/* Collections */}
          <TabsContent value="collections">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Des collections pensées pour nos cursus</h2>
              <p className="text-slate-600 text-lg">
                Du Bachelor au MBA, chaque filière de l&apos;ABS dispose de son fonds documentaire. Nos acquisitions
                suivent les maquettes pédagogiques et l&apos;actualité économique de l&apos;Afrique de l&apos;Ouest.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {collections.map((c, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow border-t-4 border-t-cyan-400">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                        <c.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">{c.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{c.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-blue-950 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <Wifi className="h-10 w-10 text-cyan-400 shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Une bibliothèque connectée</h3>
                    <p className="text-slate-300 text-sm">
                      Wifi sur l&apos;ensemble du campus, catalogue en ligne, bases de données académiques : la
                      documentation ABS vous suit partout, du campus de Hamdallaye à votre domicile.
                    </p>
                  </div>
                  <Link href="/resources/library">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold shrink-0">
                      Ressources en ligne
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services */}
          <TabsContent value="services">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Bien plus que des étagères</h2>
              <p className="text-slate-600 text-lg">
                La bibliothèque est un lieu de travail, d&apos;échange et de formation méthodologique. Découvrez tout
                ce qu&apos;elle met à votre disposition, en complément des cours.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {services.map((s, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                        <s.icon className="h-5 w-5 text-blue-700" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">{s.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/library/catalog">
                <Button className="bg-blue-700 hover:bg-blue-900">
                  <Search className="mr-2 h-4 w-4" />
                  Explorer le catalogue
                </Button>
              </Link>
              <Link href="/library/hours">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Clock className="mr-2 h-4 w-4" />
                  Planifier ma visite
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Horaires & accès */}
          <TabsContent value="horaires">
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Horaires d&apos;ouverture</h2>
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <ul className="divide-y divide-slate-100">
                      {[
                        { day: "Lundi — Vendredi", hours: "8h00 — 18h00", note: "Journée continue, espace de travail ouvert" },
                        { day: "Samedi", hours: "9h00 — 13h00", note: "Révisions et consultation sur place" },
                        { day: "Dimanche & jours fériés", hours: "Fermé", note: "Ressources numériques accessibles à distance" },
                      ].map((row, i) => (
                        <li key={i} className="flex items-center justify-between py-3">
                          <div>
                            <p className="font-semibold text-blue-900">{row.day}</p>
                            <p className="text-sm text-slate-500">{row.note}</p>
                          </div>
                          <span
                            className={`font-bold ${
                              row.hours === "Fermé" ? "text-slate-400" : "text-cyan-600"
                            }`}
                          >
                            {row.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-slate-500 mt-4">
                      Les horaires peuvent varier pendant les périodes d&apos;examens, les vacances académiques et les
                      jours fériés maliens. Consultez la page dédiée pour les mises à jour.
                    </p>
                    <Link href="/library/hours">
                      <Button variant="outline" size="sm" className="mt-3 border-blue-700 text-blue-700 hover:bg-blue-50">
                        Horaires détaillés
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <Card className="border-t-4 border-t-cyan-400">
                  <CardHeader>
                    <CardTitle className="text-blue-900">Accès & conditions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-600 text-sm">
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Accès prioritaire aux étudiants de l&apos;ABS sur présentation de la carte étudiante.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Conditions d&apos;emprunt communiquées à l&apos;accueil de la bibliothèque.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Anciens élèves : renseignez-vous sur les formules d&apos;accès au fonds documentaire.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Emplacement : campus de Hamdallaye ACI 2000, au cœur de Bamako, facile d&apos;accès depuis tout
                        le district.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Contacter la bibliothèque</CardTitle>
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
                        Envoyer une question
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
          <h2 className="text-3xl font-bold text-white mb-4">Votre prochaine grande idée commence ici</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Que vous prépariez un exposé, un mémoire ou votre propre entreprise, la bibliothèque ABS est votre premier
            partenaire de réussite. Venez la découvrir.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/library/catalog">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                Consulter le catalogue
              </Button>
            </Link>
            <Link href="/campus-tour">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Visiter le campus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
