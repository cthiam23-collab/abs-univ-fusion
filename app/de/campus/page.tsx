import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = buildMetadata({
  title: "Campus der ABS-Universität in Bamako",
  description:
    "Entdecken Sie den Campus der ABS-Universität in Bamako: moderne Hörsäle, Bibliothek, digitale Arbeitsbereiche und Gemeinschaftsleben im Dienst des Studienerfolgs.",
  path: "/campus",
  locale: "de",
})

export default function CampusPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Unser Campus</h1>

      <div className="mb-12">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus der ABS-Universität"
          width={1200}
          height={600}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Der Campus auf einen Blick</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Die Universität ABS — African Business School empfängt Sie in Hamdallaye ACI 2000, Bamako, in einer
            Umgebung, die auf Ausbildung und Studienerfolg ausgerichtet ist. Hörsäle, Arbeitsbereiche und
            Gemeinschaftsräume sind im Dienst der fünf Ausbildungsbereiche der Einrichtung und der Studierenden
            organisiert.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="facilities" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="facilities">Einrichtungen</TabsTrigger>
          <TabsTrigger value="housing">Studentenwohnraum</TabsTrigger>
          <TabsTrigger value="recreation">Studentenleben</TabsTrigger>
        </TabsList>
        <TabsContent value="facilities">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Unterrichtsräume",
                description:
                  "Räume, die für den Unterricht der fünf Ausbildungsbereiche eingerichtet sind — von Vorlesungen bis zu Übungsgruppen.",
                image:
                  "/images/campus/IMG-20250212-WA0021.jpg",
              },
              {
                title: "Bibliothek und Ressourcen",
                description:
                  "Ein Bereich für Lesen und Recherche, mit Büchern und Ressourcen, die auf die Studiengänge abgestimmt sind.",
                image:
                  "/images/campus/IMG-20250212-WA0003.jpg",
              },
              {
                title: "Arbeitsbereiche",
                description:
                  "Orte zum Arbeiten allein oder in der Gruppe, zum Vorbereiten von Projekten und zum Lernen zwischen den Kursen.",
                image:
                  "/images/campus/IMG-20250212-WA0004.jpg",
              },
              {
                title: "Hörsäle und Konferenzräume",
                description:
                  "Bereiche für Kurse mit großen Gruppen, Konferenzen und Begegnungen mit Fachleuten.",
                image:
                  "/images/campus/IMG-20250212-WA0006.jpg",
              },
              {
                title: "Praktikumsräume",
                description:
                  "Bereiche für die praktische Anwendung, insbesondere für die Studiengänge in Informatik-Ingenieurwesen sowie in Geologie-, Bau- und Bergbautechnik.",
                image:
                  "/images/campus/IMG-20250212-WA0007.jpg",
              },
              {
                title: "Gemeinschaftsräume",
                description:
                  "Orte des Austauschs und der Entspannung, die den Dialog und das Gemeinschaftsleben zwischen den Studierenden fördern.",
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
            Die ABS-Universität unterstützt ihre Studierenden bei ihren Wohnungsangelegenheiten in Bamako. Die
            Modalitäten und Verfügbarkeiten werden jedes Jahr von der Verwaltung mitgeteilt: Wir laden Sie ein, sie zu
            kontaktieren, um die möglichen Optionen und Orientierungshinweise zu erfahren.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <Image
                src="/images/campus/IMG-20250212-WA0010.jpg"
                alt="Wohnen in der Nähe des Campus"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Wohnen in Bamako</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Informationen zu den Wohnoptionen je nach Verfügbarkeit</li>
                  <li>Hinweise für die Suche nach einer Wohnung, die zu Ihrer Situation passt</li>
                  <li>Orientierung über die Stadtviertel in der Nähe des Campus</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/images/campus/IMG-20250212-WA0011.jpg"
                alt="Begleitung der Studierenden"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Begleitung der Studierenden</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Orientierung durch die Verwaltung bei praktischen Fragen</li>
                  <li>Unterstützung beim Einzug neuer Studierender, auch für Studierende aus anderen Regionen</li>
                  <li>Direkter Kontakt für besondere Anliegen</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="recreation">
          <p className="text-lg mb-6">
            Das Studentenleben an der ABS geht über den Hörsaal hinaus: Austausch, kulturelle Aktivitäten und
            Initiativen der Studierenden tragen zu einer Balance zwischen Studium und Privatleben bei.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Austausch und Gemeinschaft",
                description:
                  "Räume und Momente, um sich unter Studierenden zu treffen, sich auszutauschen und nach dem Unterricht zu entspannen.",
                image:
                  "/images/campus/IMG-20250212-WA0012.jpg",
              },
              {
                title: "Kulturelle Aktivitäten",
                description:
                  "Kulturelle Höhepunkte, die die Vielfalt der afrikanischen Kulturen feiern, entsprechend dem Programm des Jahres.",
                image:
                  "/images/campus/IMG-20250212-WA0013.jpg",
              },
              {
                title: "Entspannungsbereiche",
                description:
                  "Orte der Ruhe und des Gesprächs auf dem Campus, die zum Wohlbefinden der Studierenden beitragen.",
                image:
                  "/images/campus/IMG-20250212-WA0014.jpg",
              },
              {
                title: "Studierendeninitiativen",
                description:
                  "Clubs und Projekte, die von Studierenden entsprechend ihren Interessen getragen werden, mit Unterstützung der Verwaltung.",
                image:
                  "/images/campus/IMG-20250212-WA0015.jpg",
              },
              {
                title: "Veranstaltungen des Jahres",
                description:
                  "Konferenzen, Orientierungstage und Begegnungen, die angekündigt werden, sobald sie offiziell geplant sind.",
                image:
                  "/images/gallery/IMG-20250216-WA0015.jpg",
              },
              {
                title: "Verpflegung",
                description:
                  "Verpflegungsmöglichkeiten vor Ort und in der Nähe, die von der Verwaltung zu Beginn des Jahres mitgeteilt werden.",
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
        <h2 className="text-2xl font-bold mb-4">Kommen Sie und entdecken Sie unseren Campus</h2>
        <p className="text-lg mb-6">
          Ein Campusbesuch ist der beste Weg, sich Ihr Studium an der ABS vorzustellen: Ausbildungsbereiche,
          Gemeinschaftsräume und Lehrteam. Kontaktieren Sie uns, um Ihren Besuch zu organisieren.
        </p>
        <a
          href="/visit"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Einen Campusbesuch planen
        </a>
      </div>
    </div>
  )
}
