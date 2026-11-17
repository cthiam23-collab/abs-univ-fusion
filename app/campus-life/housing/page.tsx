import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BedDouble,
  Wifi,
  ShieldCheck,
  BookOpen,
  Users,
  ShowerHead,
  CookingPot,
  Globe2,
  Bus,
  Building2,
  ClipboardCheck,
  HeartHandshake,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Logement étudiant | African Business School (ABS)",
  description:
    "Résidences du campus, logements partenaires et conseils pour vivre à Bamako : tout sur le logement à l'ABS.",
  path: "/campus-life/housing",
})

const residences = [
  {
    title: "Chambres partagées",
    text: "Formule la plus conviviale : une chambre partagée avec un autre étudiant, idéale pour tisser des liens dès la première année.",
    amenities: [BedDouble, Wifi, ShowerHead],
  },
  {
    title: "Chambres individuelles",
    text: "Pour les étudiants qui recherchent plus de calme et de concentration, avec un cadre de travail personnel adapté aux révisions.",
    amenities: [BedDouble, Wifi, BookOpen],
  },
  {
    title: "Espaces de vie commune",
    text: "Salons, cuisines et espaces de détente partagés : c'est là que se construit la véritable communauté de résidents de l'ABS.",
    amenities: [CookingPot, Users, Wifi],
  },
  {
    title: "Sécurité et accompagnement",
    text: "Un cadre sécurisé et un référent résidence à l'écoute des étudiants, pour que les familles aient l'esprit tranquille.",
    amenities: [ShieldCheck, HeartHandshake, ClipboardCheck],
  },
]

const partenaires = [
  {
    title: "Studios et appartements à proximité",
    text: "L'ABS entretient un réseau de propriétaires de confiance autour d'Hamdallaye ACI 2000, à distance de marche du campus.",
    points: ["Visite accompagnée avant engagement", "Baux encadrés avec le service logement", "Priorité aux étudiants ABS"],
  },
  {
    title: "Colocations étudiantes",
    text: "Pour réduire le budget logement, le service aide à constituer des colocations d'étudiants de l'université.",
    points: ["Mise en relation par promotion", "Charges partagées et transparentes", "Conseils de vie en colocation"],
  },
  {
    title: "Options de long séjour",
    text: "Des solutions pour les étudiants en stage ou en projet de fin d'études qui restent à Bamako sur l'année.",
    points: ["Tarifs dégressifs longue durée", "Proximité des lignes de transport", "Réseau d'anciens locataires fiables"],
  },
]

const bamako = [
  {
    icon: Bus,
    title: "Se déplacer dans la ville",
    text: "Hamdallaye ACI 2000 est un carrefour majeur de Bamako : taxis, transport collectif et accès facile aux axes principaux pour rejoindre le campus.",
  },
  {
    icon: Building2,
    title: "Le quartier ACI 2000",
    text: "Commerces, banques, pharmacies et restaurants autour du campus : tout le nécessaire du quotidien à proximité immédiate.",
  },
  {
    icon: Globe2,
    title: "Conseils pour étudiants internationaux",
    text: "Préparation avant l'arrivée, accueil au campus, aide aux premières démarches : notre équipe accompagne chaque étudiant venu d'ailleurs.",
  },
  {
    icon: ShieldCheck,
    title: "Budget et bon sens",
    text: "Nos équipes partagent les repères de coût réels (loyer, transport, alimentation) pour vous aider à construire un budget réaliste.",
  },
]

export default function HousingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/IMG-20250212-WA0003.jpg"
          alt="Résidences étudiantes de l'ABS"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-700/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <p className="text-cyan-400 font-semibold tracking-wide uppercase mb-3">Vie de campus</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Se sentir chez soi à l&apos;ABS
          </h1>
          <p className="text-slate-200 text-lg mt-4 max-w-2xl">
            Vivre près de ses cours, réviser dans de bonnes conditions, construire des amitiés durables : le logement
            est la première clé d&apos;une année universitaire réussie.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
                Demander de l&apos;aide pour le logement
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="residences" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="residences">Résidences du campus</TabsTrigger>
            <TabsTrigger value="partenaires">Logements partenaires</TabsTrigger>
            <TabsTrigger value="bamako">Vivre à Bamako</TabsTrigger>
          </TabsList>

          {/* Résidences */}
          <TabsContent value="residences">
            <div className="grid md:grid-cols-2 gap-6">
              {residences.map((residence) => (
                <div key={residence.title} className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex gap-2 mb-4">
                    {residence.amenities.map((Icon, i) => (
                      <span key={i} className="h-10 w-10 rounded-lg bg-blue-700/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-blue-700" />
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{residence.title}</h3>
                  <p className="text-slate-600 text-sm">{residence.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
              {[
                { icon: Wifi, label: "Wifi dans les espaces communs" },
                { icon: BookOpen, label: "Salles d'étude accessibles le soir" },
                { icon: ShieldCheck, label: "Accès sécurisé au campus" },
              ].map((item) => (
                <div key={item.label} className="bg-cyan-50 border border-cyan-400/40 rounded-xl p-4 flex items-center justify-center gap-2">
                  <item.icon className="h-5 w-5 text-blue-700 shrink-0" />
                  <p className="text-sm text-slate-700">{item.label}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Partenaires */}
          <TabsContent value="partenaires">
            <div className="grid md:grid-cols-3 gap-6">
              {partenaires.map((option) => (
                <div key={option.title} className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{option.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{option.text}</p>
                  <ul className="space-y-2 text-sm text-slate-700 mt-auto">
                    {option.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center gap-4">
              <ClipboardCheck className="h-8 w-8 text-blue-700 shrink-0" />
              <p className="text-slate-700 flex-1">
                Avant tout engagement, prenez contact avec le service logement de l&apos;ABS : nous vérifions
                l&apos;emplacement, l&apos;état du logement et les conditions du bail avec vous.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-700 hover:bg-blue-900 text-white">Contacter le service</Button>
              </Link>
            </div>
          </TabsContent>

          {/* Vivre à Bamako */}
          <TabsContent value="bamako">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/images/campus/african-business-school-campus.jpg"
                  alt="Le campus de l'ABS à Hamdallaye ACI 2000, Bamako"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Un campus au cœur de la capitale</h3>
                <p className="text-slate-600 mb-6">
                  L&apos;African Business School (ABS) est installée à Hamdallaye ACI 2000, l&apos;un des quartiers les plus animés et
                  les mieux desservis de Bamako. Vivre à proximité, c&apos;est gagner du temps chaque jour et profiter
                  pleinement de la vie étudiante.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {bamako.map((item) => (
                    <div key={item.title} className="bg-white rounded-lg border border-slate-200 p-4">
                      <item.icon className="h-6 w-6 text-blue-700 mb-2" />
                      <h4 className="font-semibold text-blue-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Infos pratiques */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-blue-950 rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Informations pratiques</h2>
            <p className="text-slate-300 text-sm">
              Les demandes de logement sont traitées par le service de la vie étudiante. Contactez-nous pour connaître
              les disponibilités de l&apos;année en cours et préparer votre installation, en particulier si vous
              arrivez de l&apos;extérieur de Bamako ou de l&apos;étranger.
            </p>
            <p className="text-cyan-400 text-sm mt-4">
              African Business School (ABS) · Hamdallaye ACI 2000, Bamako · Direction Générale : Sokhna M. Thiam
            </p>
          </div>
          <div className="flex flex-wrap md:justify-end gap-4">
            <Link href="/admissions">
              <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">Admissions</Button>
            </Link>
            <Link href="/campus/map">
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-50 hover:text-blue-900">
                Plan du campus
              </Button>
            </Link>
            <Link href="/student-resources/health-services">
              <Button variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Santé étudiante
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Prêt à poser vos valises à l&apos;ABS ?</h2>
          <p className="text-cyan-100 max-w-2xl mx-auto mb-8">
            Candidature, visite du campus ou simple question sur le logement : notre équipe est là pour vous guider à
            chaque étape.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
                Postuler maintenant
              </Button>
            </Link>
            <Link href="/campus-tour">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Planifier une visite
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
