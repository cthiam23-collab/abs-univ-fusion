import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Virtuelle Klassenräume | ABS",
  description: "Virtuelle Klassenräume und Fernstudienwerkzeuge der ABS — African Business School: Live-Kurse, Zusammenarbeit und Aufzeichnungen.",
  path: "/e-campus/virtual-classrooms",
  locale: "de",
})

export default function VirtualClassroomsPage() {
  const features = [
    {
      title: "Live-Kurse",
      description: "Unterricht in Echtzeit verfolgen und während der Sitzung Ihre Fragen stellen",
      image:
        "/images/campus/IMG-20250212-WA0016.jpg",
    },
    {
      title: "Gemeinschaftsarbeit",
      description: "Ihre Gruppenprojekte mit den Werkzeugen für die Remote-Zusammenarbeit voranbringen",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Aufgezeichnete Sitzungen",
      description: "Die bereitgestellten Aufzeichnungen erneut ansehen, um in Ihrem eigenen Tempo zu lernen",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Austausch mit den Dozierenden",
      description: "Von individuellen Austauschzeiten mit Ihren Dozierenden profitieren, gemäß den festgelegten Modalitäten",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
  ]

  const tips = [
    "Achten Sie auf eine stabile Internetverbindung",
    "Verwenden Sie einen Kopfhörer für eine bessere Tonqualität",
    "Halten Sie sich an einem ruhigen Ort auf, um den Kursen zu folgen",
    "Beteiligen Sie sich aktiv am Austausch",
    "Machen Sie regelmäßige Pausen, um Ermüdung der Augen zu vermeiden",
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Virtuelle Klassenräume</h1>

      <p className="text-xl mb-8">
        Die virtuellen Klassenräume ermöglichen es, interaktiven Unterricht aus der Ferne zu verfolgen, im Einklang mit
        den Studienplänen der fünf Ausbildungsbereiche der ABS-Universität. Verbinden Sie sich mit Ihren Dozierenden
        und Kommilitonen, wo auch immer Sie sind.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Kernpunkte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">So läuft es ab</h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Melden Sie sich am Online-Portal der ABS-Universität an</li>
              <li>Sehen Sie den Plan Ihrer virtuellen Klassenräume ein, der von der Verwaltung mitgeteilt wird</li>
              <li>Klicken Sie auf den Link der Sitzung, die in Ihrem Stundenplan vorgesehen ist</li>
              <li>Treten Sie der Videokonferenz mit Ihren ABS-Zugangsdaten bei</li>
              <li>Nehmen Sie am Kurs teil, stellen Sie Ihre Fragen und tauschen Sie sich mit Ihren Kommilitonen aus</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Tipps für den erfolgreichen Fernunterricht</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <p>{tip}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Technische Unterstützung</h2>
        <p className="mb-4">
          Ein technisches Problem mit den virtuellen Klassenräumen? Kontaktieren Sie die Verwaltung, um an die
          zuständige Unterstützung weitergeleitet zu werden.
        </p>
        <Link href="/e-campus/support">
          <Button size="lg">Technische Unterstützung erhalten</Button>
        </Link>
      </section>
    </div>
  )
}
