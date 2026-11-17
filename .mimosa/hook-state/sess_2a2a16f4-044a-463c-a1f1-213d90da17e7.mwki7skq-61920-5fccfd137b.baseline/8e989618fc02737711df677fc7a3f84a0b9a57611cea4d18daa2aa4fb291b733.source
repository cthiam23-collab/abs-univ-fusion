import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ORGANIZATION } from "@/lib/constants"
import {
  BookOpen,
  Video,
  Bot,
  Wifi,
  MonitorSmartphone,
  ClipboardList,
  MessageSquare,
  Headset,
  Clock,
  Globe2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "E-Campus | African Business School (ABS) — Votre campus numérique",
  description:
    "L'E-Campus de l'African Business School : plateforme LMS, classes virtuelles, ressources IA et support technique dédiés à votre réussite, 24h/24 et 7j/7.",
  path: "/e-campus",
})

const stats = [
  { value: "24/7", label: "Accès à la plateforme, jour et nuit", icon: Clock },
  { value: "100%", label: "Des cours accessibles en ligne", icon: Globe2 },
  { value: "IA", label: "Intelligence artificielle intégrée aux cursus", icon: Bot },
  { value: "1 équipe", label: "Support informatique dédié aux étudiants", icon: Headset },
]

export default function ECampusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center justify-center text-white">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus de l'African Business School à Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-900/80 to-blue-950/90" />
        <div className="relative z-10 max-w-4xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            African Business School — Bamako
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            L'E-Campus : votre université à portée de clic
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
            Cours, devoirs, notes, classes virtuelles et outils d'intelligence artificielle : tout le numérique de l'ABS
            réuni dans un seul environnement, accessible où que vous soyez.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/student-portal">
                Accéder au portail étudiant <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/e-campus/lms">Découvrir la plateforme LMS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-blue-700" />
              <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">Un écosystème numérique complet</h2>
            <p className="text-lg text-slate-600">
              L'apprentissage à l'ABS ne s'arrête jamais à la porte de la salle de classe. Explorez chaque volet de
              l'E-Campus.
            </p>
          </div>

          <Tabs defaultValue="lms" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="lms">Plateforme LMS</TabsTrigger>
              <TabsTrigger value="virtual">Classes virtuelles</TabsTrigger>
              <TabsTrigger value="tools">Outils numériques</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="lms">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0006.jpg"
                    alt="Étudiants de l'ABS travaillant sur la plateforme LMS"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <BookOpen className="h-7 w-7 text-blue-700" /> Tous vos cours, au même endroit
                  </h3>
                  <p className="mb-6 text-slate-700">
                    Le Learning Management System de l'ABS est le cœur de votre vie académique numérique. Chaque
                    enseignant y dépose ses supports de cours, ses devoirs et ses notes, pour que vous ne ratiez jamais
                    rien.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Consultation des supports de cours, polycopiés et ressources partagées par les enseignants",
                      "Dépôt des devoirs en ligne et suivi des échéances",
                      "Consultation des notes et des résultats d'évaluation en temps réel",
                      "Espaces de discussion par cours pour échanger avec vos enseignants et camarades",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/e-campus/lms">
                      Explorer le LMS en détail <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="virtual">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <Video className="h-7 w-7 text-blue-700" /> Apprendre en direct, où que vous soyez
                  </h3>
                  <p className="mb-6 text-slate-700">
                    Les classes virtuelles prolongent la salle de cours. Cours magistraux, travaux dirigés, soutenances
                    et séances de coaching se déroulent en visioconférence, avec interaction en temps réel.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Cours en direct avec les professeurs de l'ABS, en présentiel ou à distance",
                      "Sessions enregistrées pour réviser à votre rythme",
                      "Travaux de groupe et présentations en ligne",
                      "Idéal pour les étudiants professionnels qui concilient travail et études",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/e-campus/virtual-classrooms">
                      Voir les classes virtuelles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="order-1 overflow-hidden rounded-2xl shadow-lg lg:order-2">
                  <Image
                    src="/images/campus/IMG-20250212-WA0007.jpg"
                    alt="Classe virtuelle de l'ABS"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className="mb-8">
                <h3 className="mb-2 flex items-center gap-3 text-2xl font-bold text-blue-900">
                  <MonitorSmartphone className="h-7 w-7 text-blue-700" /> Des outils qui préparent au monde de demain
                </h3>
                <p className="max-w-3xl text-slate-700">
                  Parce que l'intelligence artificielle est intégrée dans tous les cursus de l'ABS, l'E-Campus met à
                  votre disposition un ensemble d'outils numériques qui font de vous un professionnel aguerri aux
                  technologies.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Bot className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Ressources IA</CardTitle>
                    <CardDescription>
                      Initiez-vous à l'intelligence artificielle générative et apprenez à l'utiliser de manière
                      responsable dans vos projets académiques et professionnels.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <BookOpen className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Bibliothèque numérique</CardTitle>
                    <CardDescription>
                      Accédez aux ressources documentaires, ouvrages et références de la bibliothèque de l'ABS depuis
                      l'E-Campus.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/library">
                        Bibliothèque <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Wifi className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Wi-Fi sur tout le campus</CardTitle>
                    <CardDescription>
                      Une connexion disponible dans les salles de cours, la bibliothèque et les espaces de travail pour
                      rester connecté en permanence.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <ClipboardList className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Ressources étudiantes</CardTitle>
                    <CardDescription>
                      Emplois du temps, règlements, documents administratifs et guides pratiques, réunis dans un
                      espace unique.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/student-resources">
                        Ressources étudiantes <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <MessageSquare className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Communication & coaching</CardTitle>
                    <CardDescription>
                      Échangez avec vos coachs et l'administration via les canaux numériques de l'université : le
                      suivi est régulier et personnalisé.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Globe2 className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">Anglais & ouverture internationale</CardTitle>
                    <CardDescription>
                      L'anglais est au cœur de la formation à l'ABS : les outils numériques soutiennent votre
                      pratique quotidienne de la langue.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/english-academy">
                        English Academy <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="support">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0010.jpg"
                    alt="Support informatique au service des étudiants de l'ABS"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <Headset className="h-7 w-7 text-blue-700" /> Une équipe à votre écoute
                  </h3>
                  <p className="mb-6 text-slate-700">
                    Problème de connexion, accès à un cours, compte étudiant : l'équipe support informatique de l'ABS
                    vous accompagne pour que la technologie reste un atout, jamais un obstacle.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Assistance pour vos accès à la plateforme LMS et au portail étudiant",
                      "Aide aux classes virtuelles : configuration, son, partage d'écran",
                      "Support Wi-Fi sur le campus de Hamdallaye ACI 2000",
                      "Conseils et formation aux outils numériques et à l'IA",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                      <Link href="/e-campus/it-support">
                        Contacter le support <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                      <Link href="/contact">Page contact</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pédagogie numérique */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900">Le numérique au service de la pédagogie ABS</h2>
            <p className="mb-10 text-lg text-slate-600">
              Avec 80% de pratique et 20% de théorie, l'E-Campus n'est pas un gadget : c'est le prolongement naturel
              d'une pédagogie orientée vers l'action et l'employabilité.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Apprendre en faisant",
                description:
                  "Projets déposés en ligne, études de cas partagées sur le LMS, simulations en classe virtuelle : la pratique passe aussi par le numérique.",
              },
              {
                title: "Une formation flexible",
                description:
                  "Cours en présentiel sur le campus de Bamako et contenus en ligne accessibles 24h/24 : votre emploi du temps reste maîtrisé.",
              },
              {
                title: "Préparer l'employabilité",
                description:
                  "Maîtriser les outils numériques et l'IA, c'est répondre à ce que les entreprises attendent aujourd'hui de chaque diplômé de l'ABS.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-t-4 border-t-cyan-400 shadow-md">
                <CardHeader>
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Prêt à rejoindre l'E-Campus ABS ?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-100">
            Connectez-vous dès maintenant au portail étudiant, ou contactez-nous au {ORGANIZATION.contact.phone} pour
            toute question sur l'environnement numérique de l'université.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/student-portal">Portail étudiant</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/admissions">Rejoindre l'ABS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
