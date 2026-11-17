import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = buildMetadata({
  title: "Campus de l'ABS à Bamako",
  description:
    "Découvrez le campus de l'ABS à Bamako : salles de cours modernes, bibliothèque, espaces numériques et vie communautaire au service de la réussite étudiante.",
  path: "/campus",
})

export default function CampusPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Notre campus</h1>

      <div className="mb-12">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus de l'ABS"
          width={1200}
          height={600}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Le campus en un coup d'œil</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            L'ABS — African Business School vous accueille à Hamdallaye ACI 2000, Bamako, dans un
            environnement pensé pour la formation et la réussite étudiante. Salles de cours, espaces de travail et lieux
            de vie commune y sont organisés au service des cinq pôles de formation de l'établissement et de la
            communauté étudiante.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="facilities" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="facilities">Installations</TabsTrigger>
          <TabsTrigger value="housing">Logement étudiant</TabsTrigger>
          <TabsTrigger value="recreation">Vie étudiante</TabsTrigger>
        </TabsList>
        <TabsContent value="facilities">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Salles de cours",
                description:
                  "Des salles aménagées pour les enseignements des cinq pôles de formation, des cours magistraux aux travaux dirigés.",
                image:
                  "/images/campus/IMG-20250212-WA0021.jpg",
              },
              {
                title: "Bibliothèque et ressources",
                description:
                  "Un espace dédié à la lecture et à la recherche, avec des ouvrages et des ressources adaptés aux programmes.",
                image:
                  "/images/campus/IMG-20250212-WA0003.jpg",
              },
              {
                title: "Espaces de travail",
                description:
                  "Des lieux pour travailler seul ou en groupe, préparer les projets et réviser entre les cours.",
                image:
                  "/images/campus/IMG-20250212-WA0004.jpg",
              },
              {
                title: "Amphithéâtres et salles de conférence",
                description:
                  "Des espaces pour les cours en grand groupe, les conférences et les rencontres avec des professionnels.",
                image:
                  "/images/campus/IMG-20250212-WA0006.jpg",
              },
              {
                title: "Espaces de travaux pratiques",
                description:
                  "Des espaces dédiés à la mise en pratique, notamment pour les formations en ingénierie informatique et en génie géologique, civil et minier.",
                image:
                  "/images/campus/IMG-20250212-WA0007.jpg",
              },
              {
                title: "Espaces de vie commune",
                description:
                  "Des lieux d'échange et de détente qui favorisent le dialogue et la vie communautaire entre étudiants.",
                image:
                  "/images/campus/IMG-20250212-WA0009.jpg",
              },
            ].map((facility, index) => (
              <Card key={index}>
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="housing">
          <p className="text-lg mb-6">
            L'ABS accompagne ses étudiants dans leurs démarches de logement à Bamako. Les modalités et les
            disponibilités sont précisées chaque année par l'administration : nous vous invitons à la contacter pour
            connaître les options possibles et les conseils d'orientation.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <Image
                src="/images/campus/IMG-20250212-WA0010.jpg"
                alt="Se loger à proximité du campus"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Se loger à Bamako</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Informations sur les options de logement selon les disponibilités</li>
                  <li>Conseils pour la recherche d'un logement adapté à votre situation</li>
                  <li>Repères sur les quartiers proches du campus</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/images/campus/IMG-20250212-WA0011.jpg"
                alt="Accompagnement des étudiants"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Accompagnement des étudiants</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Orientation par l'administration pour les questions pratiques</li>
                  <li>Aide à l'installation des nouveaux étudiants, y compris ceux venant d'autres régions</li>
                  <li>Contact direct pour toute demande particulière</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="recreation">
          <p className="text-lg mb-6">
            La vie étudiante à ABS dépasse la salle de classe : échanges, activités culturelles et initiatives portées
            par les étudiants contribuent à un équilibre entre les études et la vie personnelle.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Échanges et convivialité",
                description:
                  "Des espaces et des moments pour se retrouver entre étudiants, échanger et se détendre après les cours.",
                image:
                  "/images/campus/IMG-20250212-WA0012.jpg",
              },
              {
                title: "Activités culturelles",
                description:
                  "Des temps forts culturels célébrant la diversité des cultures africaines, selon le programme de l'année.",
                image:
                  "/images/campus/IMG-20250212-WA0013.jpg",
              },
              {
                title: "Espaces de détente",
                description:
                  "Des lieux de repos et de conversation au sein du campus, propices au bien-être étudiant.",
                image:
                  "/images/campus/IMG-20250212-WA0014.jpg",
              },
              {
                title: "Initiatives étudiantes",
                description:
                  "Clubs et projets portés par les étudiants selon leurs centres d'intérêt, avec l'appui de l'administration.",
                image:
                  "/images/campus/IMG-20250212-WA0015.jpg",
              },
              {
                title: "Événements de l'année",
                description:
                  "Conférences, journées d'orientation et rencontres annoncées lorsque elles sont officiellement programmées.",
                image:
                  "/images/gallery/IMG-20250216-WA0015.jpg",
              },
              {
                title: "Restauration",
                description:
                  "Des solutions de restauration sur place et à proximité, précisées par l'administration en début d'année.",
                image:
                  "/images/gallery/IMG-20250216-WA0021.jpg",
              },
            ].map((rec, index) => (
              <Card key={index}>
                <Image
                  src={rec.image || "/placeholder.svg"}
                  alt={rec.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{rec.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{rec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Venez découvrir notre campus</h2>
        <p className="text-lg mb-6">
          Une visite du campus est le meilleur moyen de vous projeter dans vos études à ABS : espaces de formation,
          lieux de vie et équipe pédagogique. Contactez-nous pour organiser votre venue.
        </p>
        <a
          href="/visit"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Planifier une visite du campus
        </a>
      </div>
    </div>
  )
}
