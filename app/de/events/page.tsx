import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Veranstaltungen | ABS",
  description: "Konferenzen, Orientierungstage und Veranstaltungen der ABS — African Business School in Bamako.",
  path: "/events",
  locale: "de",
})

const events = [
  {
    title: "Jährliches Karriereforum",
    category: "career",
    description:
      "Ein Begegnungsformat zwischen Studierenden und Fachleuten, um die Berufsfelder in verschiedenen Sektoren zu erkunden.",
    image:
      "/images/campus/IMG-20250212-WA0022.jpg",
    link: "/events/annual-career-fair",
  },
  {
    title: "Orientierungstage",
    category: "career",
    description:
      "Tage, die der Entdeckung der Berufe und der Studienwege der fünf Ausbildungsbereiche der ABS gewidmet sind.",
    image:
      "/images/campus/IMG-20250212-WA0017.jpg",
    link: "",
  },
  {
    title: "Konferenzen und berufliche Begegnungen",
    category: "academic",
    description:
      "Beiträge von Gästen und Austausch mit Fachleuten, um den Unterricht zu bereichern.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    link: "",
  },
  {
    title: "Kulturelle Aktivitäten",
    category: "cultural",
    description:
      "Höhepunkte, die die Vielfalt der afrikanischen Kulturen und die Kreativität der Studierenden feiern.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    link: "",
  },
]

export default function EventsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Veranstaltungen der ABS-Universität</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Konferenzen, Orientierungstage, Begegnungen mit Fachleuten und kulturelle Aktivitäten prägen das Leben der
        Einrichtung. Die Termine werden auf dieser Seite angekündigt, sobald die Veranstaltungen offiziell geplant
        sind.
      </p>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="all">Alle Veranstaltungen</TabsTrigger>
          <TabsTrigger value="academic">Akademische</TabsTrigger>
          <TabsTrigger value="cultural">Kulturelle</TabsTrigger>
          <TabsTrigger value="career">Karriere</TabsTrigger>
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
                      <Button>Mehr erfahren</Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="academic">
          <p className="text-muted-foreground">
            Konferenzen, Gastbeiträge und berufliche Begegnungen im Zusammenhang mit dem Unterricht der fünf
            Ausbildungsbereiche. Akademische Veranstaltungen werden hier angekündigt, sobald sie offiziell geplant
            sind.
          </p>
        </TabsContent>
        <TabsContent value="cultural">
          <p className="text-muted-foreground">
            Kulturelle Aktivitäten und Studierendeninitiativen, die die Vielfalt der afrikanischen Kulturen feiern.
            Das Programm des Jahres wird von der Verwaltung nach und nach mitgeteilt.
          </p>
        </TabsContent>
        <TabsContent value="career">
          <p className="text-muted-foreground">
            Jährliches Karriereforum, Orientierungstage und Begegnungen mit Unternehmen, um Ihren Berufseinstieg
            vorzubereiten. Sehen Sie sich die Seite zum{" "}
            <Link href="/events/annual-career-fair" className="text-primary underline">
              jährlichen Karriereforum
            </Link>{" "}
            an.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
