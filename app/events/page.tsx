import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Événements | ABS",
  description: "Conférences, journées d'orientation et événements de ABS — African Business School à Bamako.",
  path: "/events",
})

const events = [
  {
    title: "Forum annuel des carrières",
    category: "career",
    description:
      "Un temps de rencontre entre étudiants et professionnels pour explorer les débouchés dans différents secteurs.",
    image:
      "/images/campus/IMG-20250212-WA0022.jpg",
    link: "/events/annual-career-fair",
  },
  {
    title: "Journées d'orientation",
    category: "career",
    description:
      "Des journées dédiées à la découverte des métiers et des parcours de formation des cinq pôles de l'ABS.",
    image:
      "/images/campus/IMG-20250212-WA0017.jpg",
    link: "",
  },
  {
    title: "Conférences et rencontres professionnelles",
    category: "academic",
    description:
      "Des interventions d'invités et des échanges avec des professionnels pour enrichir les enseignements.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    link: "",
  },
  {
    title: "Activités culturelles",
    category: "cultural",
    description:
      "Des temps forts célébrant la diversité des cultures africaines et la créativité des étudiants.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    link: "",
  },
]

export default function EventsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Événements de l'ABS</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Conférences, journées d'orientation, rencontres avec des professionnels et activités culturelles rythment la
        vie de l'établissement. Les dates sont annoncées sur cette page lorsque les événements sont officiellement
        programmés.
      </p>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="all">Tous les événements</TabsTrigger>
          <TabsTrigger value="academic">Académiques</TabsTrigger>
          <TabsTrigger value="cultural">Culturels</TabsTrigger>
          <TabsTrigger value="career">Carrières</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card key={index}>
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{event.description}</p>
                  {event.link && (
                    <Link href={event.link}>
                      <Button>En savoir plus</Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="academic">
          <p className="text-muted-foreground">
            Conférences, interventions d'invités et rencontres professionnelles en lien avec les enseignements des
            cinq pôles de formation. Les événements académiques sont annoncés ici lorsqu'ils sont officiellement
            programmés.
          </p>
        </TabsContent>
        <TabsContent value="cultural">
          <p className="text-muted-foreground">
            Activités culturelles et initiatives étudiantes célébrant la diversité des cultures africaines. Le
            programme de l'année est communiqué par l'administration au fur et à mesure.
          </p>
        </TabsContent>
        <TabsContent value="career">
          <p className="text-muted-foreground">
            Forum annuel des carrières, journées d'orientation et rencontres avec des entreprises pour préparer votre
            insertion professionnelle. Consultez la page dédiée au{" "}
            <Link href="/events/annual-career-fair" className="text-primary underline">
              forum annuel des carrières
            </Link>
            .
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
