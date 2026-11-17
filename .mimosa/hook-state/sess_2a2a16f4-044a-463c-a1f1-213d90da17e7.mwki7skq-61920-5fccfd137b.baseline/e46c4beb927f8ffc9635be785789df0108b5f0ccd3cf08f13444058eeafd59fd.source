import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import {
  Briefcase,
  Users,
  FileText,
  Globe,
  Compass,
  Network,
  Handshake,
  Target,
  Building2,
  Landmark,
  Zap,
  HeartHandshake,
  Rocket,
  Linkedin,
  MessagesSquare,
  Presentation,
  MapPin,
  Phone,
  Mail,
  TrendingUp,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Services carrières | ABS",
  description: "Accompagnement à l'employabilité des étudiants de ABS : orientation, stages, ateliers et mise en relation avec les employeurs.",
  path: "/career-services",
})

const coachingSteps = [
  {
    icon: Compass,
    step: "Étape 1",
    title: "Explorer",
    description:
      "Faites le point sur vos forces, vos aspirations et les métiers qui recrutent au Mali et en Afrique de l'Ouest. Nos conseillers vous aident à définir un projet professionnel clair et réaliste, aligné sur votre filière — gestion, finance, supply chain ou génie minier.",
  },
  {
    icon: FileText,
    step: "Étape 2",
    title: "Préparer",
    description:
      "CV percutant, lettre de motivation convaincante, dossier de candidature soigné : nous travaillons avec vous sur tous les supports qui font la différence auprès des recruteurs, y compris les candidatures internationales.",
  },
  {
    icon: Network,
    step: "Étape 3",
    title: "Réseauter",
    description:
      "Rencontrez des professionnels lors de nos forums, conférences et rencontres entreprises. À l'ABS, le réseau — anciens élèves, enseignants, partenaires — est votre premier accès au marché de l'emploi.",
  },
  {
    icon: Target,
    step: "Étape 4",
    title: "Décrocher",
    description:
      "Simulations d'entretien, coaching individuel et accès à notre board de stages et d'offres d'emploi : jusqu'à la signature de votre contrat, vous n'êtes jamais seul dans votre recherche.",
  },
]

const sectors = [
  {
    icon: Landmark,
    title: "Banques & Microfinance",
    description:
      "Le secteur bancaire malien et régional — banques commerciales, institutions de microfinance, fintechs — recrute régulièrement nos diplômés en finance, comptabilité et MBA.",
  },
  {
    icon: Building2,
    title: "Mines & Énergie",
    description:
      "L'or, les carrières et les projets énergétiques sont des moteurs de l'économie malienne. Nos programmes de Génie Minier et de Supply Chain préparent aux carrières de ce secteur exigeant.",
  },
  {
    icon: Zap,
    title: "Télécoms",
    description:
      "Opérateurs mobiles et fournisseurs de services numériques cherchent des profils en gestion, marketing et logistique — des compétences que l'ABS forme avec 80 % de pratique.",
  },
  {
    icon: HeartHandshake,
    title: "ONG & Organisations internationales",
    description:
      "Programmes des Nations Unies, ONG, agences de développement et projets bilatéraux offrent des stages et des emplois en gestion de projet, finances et passation des marchés.",
  },
  {
    icon: Rocket,
    title: "Startups & Entrepreneuriat",
    description:
      "L'écosystème entrepreneurial de Bamako s'organise. Pour ceux qui veulent créer, l'ABS accompagne l'idée, le business plan et les premières rencontres investisseurs.",
  },
]

const workshops = [
  {
    icon: FileText,
    title: "Atelier CV & Lettre de motivation",
    description:
      "Construisez un CV qui passe les filtres et met en avant vos projets pratiques, vos stages et vos compétences en anglais.",
    href: "/career-services/resume-workshop",
    cta: "Participer à l'atelier",
  },
  {
    icon: MessagesSquare,
    title: "Préparation aux entretiens",
    description:
      "Entretiens blancs filmés, questions RH classiques, mises en situation : arrivez au vrai entretien avec l'assurance de celui qui s'est déjà entraîné.",
    href: "/career-services/counseling",
    cta: "Réserver un coaching",
  },
  {
    icon: Linkedin,
    title: "LinkedIn & image professionnelle",
    description:
      "Créez un profil qui travaille pour vous, développez votre visibilité auprès des recruteurs maliens et internationaux.",
    href: "/career-services/events",
    cta: "Voir le calendrier",
  },
  {
    icon: Presentation,
    title: "Recherche de stage structurée",
    description:
      "Méthode complète : ciblage des entreprises, relances, convention de stage, valorisation de l'expérience à la fin de la mission.",
    href: "/career-services/job-board",
    cta: "Explorer le job board",
  },
]

const stats = [
  { value: "80 %", label: "de pédagogie pratique, alignée sur les besoins réels des employeurs" },
  { value: "21", label: "programmes Licence & Master ouverts sur l'emploi" },
  { value: "5", label: "grands secteurs partenaires : banque, mines, télécoms, ONG, startups" },
  { value: "1", label: "coach dédié pour chaque projet professionnel à partir de la Licence" },
]

export default function CareerServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus de l'African Business School à Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">
                Career Services — ABS
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Votre avenir professionnel se construit dès le premier jour
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                À l&apos;African Business School, l&apos;employabilité n&apos;est pas un service annexe : c&apos;est une
                stratégie. Coaching personnalisé, préparation aux stages et à l&apos;emploi, réseau professionnel et
                ouverture internationale — tout est pensé pour que chaque étudiant quitte l&apos;ABS avec un métier, pas
                seulement un diplôme.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/career-services/job-board">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    Consulter le job board
                  </Button>
                </Link>
                <Link href="/career-services/counseling">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900"
                  >
                    Prendre rendez-vous
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-950 py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{s.value}</p>
              <p className="text-sm text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="accompagnement" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="accompagnement">Accompagnement</TabsTrigger>
            <TabsTrigger value="stages-emploi">Stages & emploi</TabsTrigger>
            <TabsTrigger value="ateliers">Ateliers</TabsTrigger>
            <TabsTrigger value="entreprises">Entreprises partenaires</TabsTrigger>
          </TabsList>

          {/* Accompagnement */}
          <TabsContent value="accompagnement">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Un parcours de coaching en 4 étapes</h2>
              <p className="text-slate-600 text-lg">
                Du premier semestre à la remise des diplômes, le Career Center de l&apos;ABS vous suit selon une méthode
                éprouvée : explorer, préparer, réseauter, décrocher.
              </p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-100" aria-hidden="true" />
              <div className="space-y-8">
                {coachingSteps.map((s, i) => (
                  <div key={i} className={`md:flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                    <Card className="md:w-[46%] border-t-4 border-t-cyan-400 shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                            <s.icon className="h-6 w-6 text-cyan-400" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">{s.step}</p>
                            <CardTitle className="text-blue-900">{s.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600">{s.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/career-services/counseling">
                <Button className="bg-blue-700 hover:bg-blue-900">Découvrir le conseil individuel</Button>
              </Link>
              <Link href="/student-resources/career-services">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Ressources étudiants
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Stages & emploi */}
          <TabsContent value="stages-emploi">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Stages & premiers emplois : les secteurs qui recrutent</h2>
              <p className="text-slate-600 text-lg">
                Notre job board centralise les offres de stages et d&apos;emplois transmises par les entreprises
                partenaires de l&apos;ABS. Voici les cinq grands secteurs où nos étudiants trouvent leurs opportunités.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {sectors.map((s, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-cyan-50 flex items-center justify-center">
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
              <Card className="bg-blue-900 text-white border-0 flex flex-col justify-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Briefcase className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Offres en ligne en permanence</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Stages académiques, contrats professionnels, missions freelance : consultez les annonces, déposez
                    votre CV et suivez vos candidatures.
                  </p>
                  <Link href="/career-services/job-board">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold w-full">
                      Accéder au job board
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/career-services/global-careers">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Globe className="mr-2 h-4 w-4" />
                  Carrières internationales
                </Button>
              </Link>
              <Link href="/career-services/events">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Users className="mr-2 h-4 w-4" />
                  Événements carrière
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Ateliers */}
          <TabsContent value="ateliers">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Ateliers pratiques tout au long de l&apos;année</h2>
              <p className="text-slate-600 text-lg">
                Chaque semestre, le Career Center anime des ateliers courts et concrets. Venez avec votre brouillon de
                CV ou vos doutes sur un entretien : vous repartez avec une version améliorée et un plan d&apos;action.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {workshops.map((w, i) => (
                <Card key={i} className="border-l-4 border-l-blue-700 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                        <w.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <CardTitle className="text-blue-900 text-lg">{w.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{w.description}</p>
                    <Link href={w.href}>
                      <Button variant="outline" size="sm" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                        {w.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-cyan-50 border-cyan-400/40">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <TrendingUp className="h-8 w-8 text-blue-700 shrink-0" />
                  <p className="text-blue-900 flex-1">
                    <strong>Astuce ABS :</strong> participez à au moins un atelier par semestre et à un événement
                    entreprises par an. C&apos;est le rythme que suivent les diplômés qui décrochent le plus vite.
                  </p>
                  <Link href="/career-services/resume-workshop">
                    <Button className="bg-blue-700 hover:bg-blue-900 shrink-0">Voir les ateliers CV</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Entreprises partenaires */}
          <TabsContent value="entreprises">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Un pont direct entre l&apos;école et l&apos;entreprise</h2>
              <p className="text-slate-600 text-lg">
                Banques, sociétés minières, opérateurs télécoms, ONG et institutions régionales : nos partenaires
                interviennent en classe, accueillent des stagiaires et recrutent nos diplômés. Vous êtes une
                organisation ? Rejoignez le réseau.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              <Card className="border-t-4 border-t-cyan-400">
                <CardHeader>
                  <CardTitle className="text-blue-900">Recruter à l&apos;ABS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600 mb-6">
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Publiez vos offres de stages et d&apos;emplois sur notre job board, gratuitement.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Participez aux forums entreprises et aux journées de recrutement sur le campus de Hamdallaye.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Accédez à des viviers ciblés : MBA, Finance & Ingénierie Financière, Supply Chain, Génie Minier.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      Co-construisez des projets pédagogiques avec la diagonale 80 % pratique de nos programmes.
                    </li>
                  </ul>
                  <Link href="/employers/recruit">
                    <Button className="bg-blue-700 hover:bg-blue-900">
                      <Handshake className="mr-2 h-4 w-4" />
                      Services de recrutement
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-blue-950 text-white border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Pourquoi les employeurs nous font confiance</h3>
                  <ul className="space-y-3 text-slate-300 text-sm mb-6">
                    <li>Des étudiants formés à la norme LMD/ECTS, comparables à l&apos;international.</li>
                    <li>80 % de pratique : cas d&apos;entreprise, études de terrain, simulations.</li>
                    <li>L&apos;anglais intégré dès la Licence via l&apos;English Academy — un atout dans les groupes régionaux.</li>
                    <li>Des valeurs d&apos;intégration et d&apos;unité africaine, chères à la direction générale, Mme Sokhna M. Thiam.</li>
                  </ul>
                  <Link href="/academics/programs">
                    <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
                      Nos programmes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à faire passer votre carrière au niveau supérieur ?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Contactez le Career Center de l&apos;African Business School — Hamdallaye ACI 2000, Bamako — ou consultez
            dès maintenant les offres de stages et d&apos;emploi.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/career-services/job-board">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                Voir les offres
              </Button>
            </Link>
            <Link href="/employers/recruit">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Je suis un employeur
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
