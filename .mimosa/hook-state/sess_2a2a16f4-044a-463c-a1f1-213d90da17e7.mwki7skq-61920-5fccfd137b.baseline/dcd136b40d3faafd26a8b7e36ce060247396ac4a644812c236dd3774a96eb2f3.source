import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Book, BookOpen, Database, Globe, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Bibliothèque étudiante | ABS",
  description: "Bibliothèque et espaces de travail pour les étudiants de ABS — African Business School.",
  path: "/student-resources/library",
})

export default function LibraryServicesPage() {
  const services = [
    {
      title: "Emprunt d'ouvrages",
      description: "Accéder aux ouvrages physiques mis à disposition des étudiants",
      icon: Book,
    },
    {
      title: "Ressources numériques",
      description: "Consulter les ressources en ligne adaptées à votre formation",
      icon: Database,
    },
    {
      title: "Aide à la recherche",
      description: "Être orienté dans vos recherches documentaires",
      icon: Globe,
    },
    {
      title: "Espaces de travail",
      description: "Travailler dans des espaces propices à l'étude, seul ou en groupe",
      icon: BookOpen,
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Bibliothèque et ressources documentaires</h1>
      <p className="text-xl mb-12">
        La bibliothèque de l'ABS est votre porte d'accès aux ressources académiques. Elle accompagne votre
        apprentissage et vos travaux dans les cinq pôles de formation de l'établissement.
      </p>

      <div className="mb-12">
        <Image
          src="/images/campus/IMG-20250212-WA0021.jpg"
          alt="Bibliothèque de l'ABS"
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

      <Tabs defaultValue="catalog" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="catalog">Catalogue</TabsTrigger>
          <TabsTrigger value="databases">Ressources numériques</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="hours">Horaires et accès</TabsTrigger>
        </TabsList>
        <TabsContent value="catalog">
          <Card>
            <CardHeader>
              <CardTitle>Catalogue</CardTitle>
              <CardDescription>Retrouvez les ouvrages et ressources disponibles</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Le catalogue référence les ouvrages et ressources documentaires de la bibliothèque. Utilisez le champ
                de recherche ci-dessous pour retrouver les documents dont vous avez besoin :
              </p>
              <div className="bg-secondary p-4 rounded-lg">
                <input
                  type="text"
                  placeholder="Rechercher dans le catalogue..."
                  className="w-full p-2 rounded border border-gray-300"
                />
                <Button className="mt-2">Rechercher</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="databases">
          <Card>
            <CardHeader>
              <CardTitle>Ressources numériques</CardTitle>
              <CardDescription>Accéder aux ressources en ligne mises à disposition</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Ouvrages numériques en lien avec les enseignements des cinq pôles</li>
                <li>Ressources de référence pour les travaux et projets de formation</li>
                <li>Documentation d'appui à la préparation des stages</li>
                <li>Supports complémentaires recommandés par les enseignants</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Les ressources accessibles dépendent des abonnements et accords en vigueur ; la liste est communiquée
                par la bibliothèque.
              </p>
              <Link href="/library/online-resources">
                <Button className="mt-4">Voir toutes les ressources</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Services proposés</CardTitle>
              <CardDescription>Un appui au-delà du simple prêt d'ouvrages</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Orientation documentaire pour vos travaux et projets</li>
                <li>Accompagnement dans vos recherches</li>
                <li>Conseils de citation et d'organisation des références</li>
                <li>Espaces de travail pour l'étude individuelle et de groupe</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hours">
          <Card>
            <CardHeader>
              <CardTitle>Horaires et accès</CardTitle>
              <CardDescription>Nous trouver sur le campus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 mr-2" />
                <span>Horaires d'ouverture communiqués par l'administration en début d'année</span>
              </div>
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Ouverture adaptée au calendrier académique de l'établissement</span>
              </div>
              <p className="mb-4">
                La bibliothèque se trouve sur le campus de l'ABS, Hamdallaye ACI 2000, Bamako. Les conditions
                d'accès et d'emprunt sont précisées par l'administration.
              </p>
              <Link href="/campus/map">
                <Button>Voir le plan du campus</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-primary text-primary-foreground p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Besoin d'aide ?</h2>
        <p className="mb-6">
          L'équipe de la bibliothèque est là pour vous accompagner dans vos recherches et vous orienter dans les
          ressources. N'hésitez pas à nous solliciter.
        </p>
        <Link href="/contact/library">
          <Button variant="secondary">Contacter la bibliothèque</Button>
        </Link>
      </div>
    </div>
  )
}
