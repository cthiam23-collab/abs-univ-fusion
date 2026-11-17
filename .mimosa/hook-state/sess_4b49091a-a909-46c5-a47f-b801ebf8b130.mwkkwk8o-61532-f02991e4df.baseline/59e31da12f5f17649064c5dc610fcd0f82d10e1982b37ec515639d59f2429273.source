import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import {
  Globe2,
  GraduationCap,
  Languages,
  ArrowLeftRight,
  ClipboardList,
  FileCheck2,
  Plane,
  Home,
  Wallet,
  Landmark,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Users,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Étudiants internationaux | ABS",
  description: "Informations pour les étudiants internationaux de ABS — African Business School : équivalences, dossier et vie à Bamako.",
  path: "/international-students",
})

const whyAbs = [
  {
    icon: GraduationCap,
    title: "Des programmes reconnus, norme LMD/ECTS",
    description:
      "5 Bachelors et 16 Masters (MBA, Finance & Ingénierie Financière, Finance Islamique, Supply Chain, Gouvernance des Marchés Publics, Génie Minier…) structurés selon le système LMD. Vos crédits ECTS sont transférables vers d'autres universités en Afrique et en Europe.",
  },
  {
    icon: Languages,
    title: "Étudier en français, gagner l'anglais",
    description:
      "Tous les cours sont dispensés en français, avec l'anglais intégré au cursus via l'English Academy de l'ABS. Vous obtenez ainsi une double compétence linguistique très recherchée par les employeurs de la sous-région.",
  },
  {
    icon: Wallet,
    title: "80 % de pratique, 100 % d'employabilité",
    description:
      "La pédagogie ABS repose à 80 % sur la pratique : cas réels, projets d'entreprise, simulations. Une stratégie d'employabilité assumée, qui prépare un avenir professionnel prometteur — au Mali ou à l'international.",
  },
  {
    icon: Globe2,
    title: "Une université tournée vers l'Afrique",
    description:
      "L'intégration et l'unité africaine sont le domaine de prédilection de l'université. Étudiants de la sous-région, partenariats internationaux, stages et voyages à l'étranger : l'ABS est un carrefour panafricain au cœur de Bamako.",
  },
]

const admissionSteps = [
  {
    icon: ClipboardList,
    title: "1. Choisir votre programme",
    description:
      "Consultez les 5 Bachelors et 16 Masters et sélectionnez la filière correspondant à votre projet : gestion, finance, supply chain, mines, gouvernance…",
  },
  {
    icon: FileCheck2,
    title: "2. Préparer votre dossier",
    description:
      "Relevés de notes et diplômes traduits, pièce d'identité, photos, formulaire de candidature. Nos services vérifient l'équivalence de vos diplômes étrangers.",
  },
  {
    icon: Plane,
    title: "3. Obtenir votre admission & votre visa",
    description:
      "Après acceptation, l'ABS vous remet la lettre d'admission officielle indispensable à la demande de visa d'études auprès des autorités maliennes. Nous vous guidons dans les démarches.",
  },
  {
    icon: Home,
    title: "4. Organiser votre arrivée à Bamako",
    description:
      "Logement, transport, installation à Hamdallaye ACI 2000 : notre équipe des relations internationales vous accompagne avant et après votre arrivée.",
  },
]

const lifeInBamako = [
  {
    icon: MapPin,
    title: "Un campus au cœur de la ville",
    description:
      "Hamdallaye ACI 2000 est un quartier central et animé de Bamako, proche des commerces, des banques et des administrations — et de nos entreprises partenaires.",
  },
  {
    icon: Home,
    title: "Logement",
    description:
      "L'université oriente les étudiants internationaux vers des résidences et chambres proches du campus. Anticipez votre recherche avec notre équipe avant votre arrivée.",
  },
  {
    icon: Wallet,
    title: "Coût de la vie accessible",
    description:
      "Bamako reste l'une des capitales les plus abordables d'Afrique de l'Ouest : transports, alimentation et loisirs à coût modéré. Demandez-nous notre estimation mensuelle indicative.",
  },
  {
    icon: Users,
    title: "Une communauté qui accueille",
    description:
      "La culture malienne de la teranga et l'esprit de la promotion ABS rendent l'intégration naturelle : associations étudiantes, événements culturels, mentorat entre pairs.",
  },
  {
    icon: ShieldCheck,
    title: "Santé & sécurité",
    description:
      "Nous accompagnons l'inscription aux structures de santé locales et vous informons sur les précautions et assurances recommandées avant le départ.",
  },
]

export default function InternationalStudentsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[440px] overflow-hidden">
        <Image
          src="/images/campus/IMG-20250212-WA0021.jpg"
          alt="Étudiants internationaux sur le campus de l'African Business School à Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">
                Étudiants internationaux
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Étudiez à Bamako, construisez votre avenir africain
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                Bienvenue à l&apos;African Business School de Bamako, au Mali. Programmes en français avec anglais
                intégré, diplômes norme LMD/ECTS, pédagogie à 80 % pratique : rejoignez une université dont le domaine
                de prédilection est l&apos;intégration et l&apos;unité africaine.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/apply/international">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    Candidater en ligne
                  </Button>
                </Link>
                <Link href="/contact/international-admissions">
                  <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                    Poser une question
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="pourquoi" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="pourquoi">Pourquoi l&apos;ABS</TabsTrigger>
            <TabsTrigger value="admission">Admission</TabsTrigger>
            <TabsTrigger value="bamako">Vivre à Bamako</TabsTrigger>
            <TabsTrigger value="english">English Academy</TabsTrigger>
          </TabsList>

          {/* Pourquoi l'ABS */}
          <TabsContent value="pourquoi">
            <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Quatre bonnes raisons de choisir l&apos;ABS</h2>
                <p className="text-slate-600 mb-8">
                  Chaque année, des étudiants venus de toute l&apos;Afrique de l&apos;Ouest et au-delà choisissent
                  Bamako pour se former au management, à la finance et aux métiers techniques. Voici ce qu&apos;ils
                  trouvent à l&apos;African Business School.
                </p>
                <div className="space-y-6">
                  {whyAbs.map((w, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-11 w-11 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                        <w.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">{w.title}</h3>
                        <p className="text-slate-600 text-sm">{w.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/gallery/IMG-20250216-WA0021.jpg"
                    alt="Vie étudiante et diversité culturelle à l'ABS"
                    fill
                    className="object-cover"
                  />
                </div>
                <Card className="bg-blue-950 text-white border-0">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-cyan-400">Mobilité & ouverture internationale</h3>
                    <p className="text-slate-300 text-sm mb-4">
                      Grâce à nos partenariats académiques et à la reconnaissance LMD/ECTS, vos études à l&apos;ABS
                      peuvent s&apos;inscrire dans un parcours mobile : semestres d&apos;échange, stages
                      internationaux, poursuite d&apos;études à l&apos;étranger.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/international/partnerships">
                        <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
                          Nos partenariats
                        </Button>
                      </Link>
                      <Link href="/programs/masters">
                        <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                          Nos 16 Masters
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Admission */}
          <TabsContent value="admission">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Votre admission en 4 étapes</h2>
              <p className="text-slate-600 text-lg">
                Un parcours simple et accompagné : de la candidature à votre installation à Bamako, chaque étape est
                balisée par l&apos;équipe des admissions internationales.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {admissionSteps.map((s, i) => (
                <Card key={i} className="border-l-4 border-l-cyan-400 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                        <s.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <CardTitle className="text-blue-900 text-lg">{s.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-cyan-50 border-cyan-400/40 mb-10">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <ArrowLeftRight className="h-8 w-8 text-blue-700 shrink-0" />
                  <p className="text-blue-900 flex-1">
                    <strong>Crédits ECTS transférables :</strong> le système LMD de l&apos;ABS facilite les
                    reconnaissance de diplômes, les passerelles entre universités et les reprises d&apos;études.
                    Apportez vos relevés de notes : nous évaluons vos équivalences.
                  </p>
                  <Link href="/admissions/international">
                    <Button className="bg-blue-700 hover:bg-blue-900 shrink-0">Détails des admissions</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-wrap gap-4">
              <Link href="/apply/international">
                <Button className="bg-blue-700 hover:bg-blue-900">Déposer ma candidature</Button>
              </Link>
              <Link href="/international">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Pôle international
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Vivre à Bamako */}
          <TabsContent value="bamako">
            <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Bienvenue à Bamako, bienvenue chez vous</h2>
                <p className="text-slate-600 mb-8">
                  Capitale au bord du Niger, Bamako est une ville vivante, chaleureuse et abordable. À l&apos;ABS, nous
                  préparons votre arrivée pour que vous vous concentriez sur l&apos;essentiel : vos études.
                </p>
                <div className="space-y-6">
                  {lifeInBamako.map((l, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                        <l.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">{l.title}</h3>
                        <p className="text-slate-600 text-sm">{l.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/gallery/IMG-20250216-WA0067.jpg"
                    alt="Le campus de l'ABS à Hamdallaye ACI 2000, Bamako"
                    fill
                    className="object-cover"
                  />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Landmark className="h-5 w-5 text-cyan-600" />
                      Logement & vie pratique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-600 text-sm">
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Orientation vers des logements proches du campus, pour tous les budgets.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Cafétéria et commerces à proximité immédiate de Hamdallaye ACI 2000.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Transports et liaisons faciles depuis tout le district de Bamako.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        Accompagnement administratif : carte d&apos;étudiant, attestation d&apos;inscription, appui
                        aux démarches de séjour.
                      </li>
                    </ul>
                    <Link href="/housing">
                      <Button variant="outline" size="sm" className="mt-4 border-blue-700 text-blue-700 hover:bg-blue-50">
                        Infos logement
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* English Academy */}
          <TabsContent value="english">
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">L&apos;English Academy : l&apos;anglais intégré à votre diplôme</h2>
                <p className="text-slate-600 mb-6">
                  À l&apos;ABS, l&apos;anglais n&apos;est pas une option : il est intégré au cursus de la Licence au
                  Master via notre English Academy. Objectif : que chaque diplômé soit à l&apos;aise dans un
                  environnement professionnel bilingue — banques régionales, groupes miniers, organisations
                  internationales.
                </p>
                <ul className="space-y-3 text-slate-600 mb-8">
                  <li className="flex gap-2">
                    <span className="text-cyan-600 font-bold">—</span>
                    Cours d&apos;anglais intégrés à la maquette de chaque programme, dès la Licence.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-600 font-bold">—</span>
                    Groupes de niveaux et progression suivie, du professionnel au académique.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-600 font-bold">—</span>
                    Ressources en libre accès à la bibliothèque et entraînement oral régulier.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-600 font-bold">—</span>
                    Un atout direct pour les stages et emplois dans les entreprises internationales du Mali.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/english-academy">
                    <Button className="bg-blue-700 hover:bg-blue-900">Découvrir l&apos;English Academy</Button>
                  </Link>
                  <Link href="/admissions">
                    <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                      Admissions ABS
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery/IMG-20250216-WA0070.jpg"
                  alt="Cours et activités pédagogiques à l'ABS"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à rejoindre l&apos;ABS depuis votre pays ?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Notre équipe des admissions internationales répond à vos questions sur les programmes, le visa, le
            logement et l&apos;installation à Bamako.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/apply/international">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                Candidater maintenant
              </Button>
            </Link>
            <Link href="/contact/international-admissions">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Contacter les admissions internationales
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.address.formatted}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.email}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
