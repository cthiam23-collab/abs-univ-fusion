import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Kulturelle Integration | ABS",
  description: "Kulturelle Offenheit und Gemeinschaftsleben an der ABS — African Business School: Dialoge, Kulturen und Studierendeninitiativen.",
  path: "/cultural-integration",
  locale: "de",
})

export default function CulturalIntegrationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Kulturelle Integration an der ABS</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0017.jpg"
            alt="Kulturelle Begegnungen zwischen Studierenden"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>Kulturelle Begegnungen</CardTitle>
            <CardDescription>
              Momente des Austauschs, die den Reichtum und die Vielfalt der afrikanischen Kulturen feiern.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0022.jpg"
            alt="Kulturelle Veranstaltungen"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>Kulturelle Veranstaltungen</CardTitle>
            <CardDescription>
              Konferenzen, Ausstellungen und Feiern begleiten das Jahr, sobald sie offiziell geplant sind.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0018.jpg"
            alt="Kulturelle Vielfalt"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>Kulturelle Vielfalt</CardTitle>
            <CardDescription>
              Studierende aus verschiedenen Herkünften lernen einander kennen und lernen, gemeinsam zu arbeiten.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-semibold mb-6">Unser Einsatz für die kulturelle Integration</h2>
        <p className="mb-4">
          An der ABS — African Business School betrachten wir kulturelle Offenheit als eine wesentliche
          Dimension der Ausbildung: Sie bereitet Absolventinnen und Absolventen darauf vor, sich in unterschiedlichen
          Umgebungen zu bewegen, in Afrika und darüber hinaus. Das Campusleben fördert den Dialog zwischen
          Studierenden verschiedener Wege und Kulturen, im panafrikanischen Geist, der die Einrichtung trägt.
        </p>
        <p className="mb-4">
          Diese Offenheit lebt auch im Unterricht: die Zweisprachigkeit Französisch-Englisch, die schrittweise
          Einführung ins Spanische in den internationalen Beziehungen und im Business sowie die in den Studienplänen
          vorgesehenen Projekte und Praktika bieten vielfältige Gelegenheiten, den eigenen kulturellen Horizont zu
          erweitern.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-2xl font-semibold mb-4">Arten von Aktivitäten im Laufe des Jahres</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Begegnungen und Austauschtage rund um die afrikanischen Kulturen</li>
            <li>Konferenzen und Auftritte von Gastrednern</li>
            <li>Kulturelle Initiativen der Studierenden</li>
            <li>Momente des Empfangs und der Integration neuer Studierender</li>
          </ul>
          <p className="mt-4 text-sm">
            Der genaue Kalender dieser Aktivitäten wird von der Verwaltung mitgeteilt, sobald die Veranstaltungen
            offiziell geplant sind.
          </p>
        </div>
      </div>
    </div>
  )
}
