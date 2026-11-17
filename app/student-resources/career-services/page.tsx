import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Briefcase, FileText, Users, Calendar, Compass } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Carrières pour étudiants | ABS",
  description: "Services d'orientation et d'insertion professionnelle des étudiants de ABS.",
  path: "/student-resources/career-services",
})

export default function CareerServicesPage() {
  const services = [
    {
      title: "Conseil en orientation",
      description: "Un accompagnement individuel pour construire votre projet professionnel",
      icon: Compass,
    },
    {
      title: "Relecture CV et lettre de motivation",
      description: "Un avis sur vos documents de candidature",
      icon: FileText,
    },
    {
      title: "Entraînement aux entretiens",
      description: "Préparer vos entretiens de stage ou d'embauche",
      icon: Users,
    },
    {
      title: "Stages et premiers emplois",
      description: "Des pistes en cohérence avec les maquettes de formation",
      icon: Briefcase,
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Services carrières</h1>
      <p className="text-xl mb-12">
        À l'ABS, nous vous accompagnons dans la préparation de votre vie professionnelle. L'équipe chargée
        de l'orientation et de l'insertion propose des ressources et un suivi adaptés à chaque pôle de formation.
      </p>

      <div className="mb-12">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Services carrières à l'ABS"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <service.icon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="resources" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="resources">Ressources</TabsTrigger>
          <TabsTrigger value="events">Événements</TabsTrigger>
          <TabsTrigger value="employers">Pour les employeurs</TabsTrigger>
          <TabsTrigger value="alumni">Pour les diplômés</TabsTrigger>
        </TabsList>
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Ressources carrières</CardTitle>
              <CardDescription>Des outils pour vous aider à réussir</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Aides à la définition de votre projet professionnel</li>
                <li>Repères sur les secteurs liés à votre formation</li>
                <li>Méthodes de recherche de stage et d'emploi</li>
                <li>Conseils de réseautage et de prise de contact</li>
                <li>Pistes de poursuite d'études, de la Licence au Master</li>
              </ul>
              <Link href="/career-services">
                <Button className="mt-4">Accéder aux ressources</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Événements carrières</CardTitle>
              <CardDescription>Se préparer et développer son réseau</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Forum annuel des carrières, conférences avec des professionnels et rencontres par secteur : les dates
                sont annoncées lorsque les événements sont officiellement programmés.
              </p>
              <Link href="/career-services/events">
                <Button className="mt-4">Voir les événements carrières</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="employers">
          <Card>
            <CardHeader>
              <CardTitle>Pour les employeurs</CardTitle>
              <CardDescription>Nouer un échange avec l'ABS</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Nous mettons en relation les entreprises avec les étudiants et les diplômés de l'ABS.
                Voici les formes que peut prendre cette collaboration :
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Proposer des stages et des opportunités d'emploi</li>
                <li>Participer aux événements carrières et aux rencontres étudiantes</li>
                <li>Intervenir lors de conférences ou d'ateliers</li>
                <li>Rencontrer les étudiants dans le cadre du recrutement</li>
                <li>Échanger sur les projets étudiants, selon les maquettes de formation</li>
              </ul>
              <Link href="/employers/recruit">
                <Button>Recruter les talents de l'ABS</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alumni">
          <Card>
            <CardHeader>
              <CardTitle>Services pour les diplômés</CardTitle>
              <CardDescription>Un accompagnement qui peut se poursuivre après la formation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Les diplômés de l'ABS peuvent, selon les services proposés par l'établissement, bénéficier
                d'un appui pour la suite de leur parcours :
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Conseil en orientation et accompagnement de projet professionnel</li>
                <li>Pistes d'opportunités selon les offres communiquées à l'établissement</li>
                <li>Rencontres et événements favorisant le réseau des diplômés</li>
                <li>Partage d'expérience avec les étudiants en cours de formation</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Contactez l'administration pour connaître les services actuellement ouverts aux diplômés.
              </p>
              <Link href="/alumni/career-services">
                <Button>Explorer les services aux diplômés</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-secondary p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Demander un entretien d'orientation</h2>
        <p className="mb-6">
          L'équipe chargée de l'insertion professionnelle est là pour vous aider. Demandez un entretien pour discuter
          de vos objectifs et recevoir des conseils personnalisés.
        </p>
        <Link href="/contact">
          <Button variant="default">Demander un entretien</Button>
        </Link>
      </div>
    </div>
  )
}
