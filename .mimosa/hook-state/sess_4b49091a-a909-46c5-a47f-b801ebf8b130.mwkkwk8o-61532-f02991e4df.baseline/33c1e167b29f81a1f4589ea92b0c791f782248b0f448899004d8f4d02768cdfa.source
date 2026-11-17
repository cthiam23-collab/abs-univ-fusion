import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "LMS-Plattform | ABS",
  description: "Online-Lernplattform der ABS — African Business School: Kursmaterialien, Abgaben, Diskussionen und Fortschrittsverfolgung.",
  path: "/e-campus/lms",
  locale: "de",
})

export default function LMSPage() {
  const lmsFeatures = [
    {
      title: "Kursmaterialien",
      description: "Zugriff auf Mitschriften, Lektüren und multimediale Ressourcen, die von den Dozierenden online gestellt werden",
      image:
        "/images/campus/IMG-20250212-WA0016.jpg",
    },
    {
      title: "Aufgaben und Bewertungen",
      description: "Ihre Arbeiten einreichen und die von Ihren Dozierenden vorgesehenen Online-Bewertungen absolvieren",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Diskussionsbereiche",
      description: "Mit Ihren Kommilitonen und Dozierenden über die Kurse austauschen",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Ergebnisverfolgung",
      description: "Ihre Noten einsehen und Ihren akademischen Fortschritt verfolgen",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Online-Lernplattform (LMS)</h1>

      <p className="text-xl mb-8">
        Die Online-Lernplattform der ABS-Universität ist Ihre zentrale Anlaufstelle für alles rund um Ihre Kurse:
        Materialien einsehen, Arbeiten einreichen, an Diskussionen teilnehmen und Ihren Fortschritt verfolgen — wo auch
        immer Sie sind.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Funktionen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lmsFeatures.map((feature, index) => (
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
        <h2 className="text-3xl font-semibold mb-6">So starten Sie</h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Melden Sie sich mit den von der ABS-Universität bereitgestellten Zugangsdaten an der Plattform an</li>
              <li>Finden Sie auf Ihrem Dashboard alle Ihre eingeschriebenen Kurse</li>
              <li>Öffnen Sie einen Kurs, um auf seine Materialien, Arbeiten und Diskussionen zuzugreifen</li>
              <li>Sehen Sie im Kalender nach, welche Termine und Fristen wichtig sind</li>
              <li>Passen Sie Ihre Benachrichtigungen an, um über die Aktivitäten Ihrer Kurse informiert zu bleiben</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Unterstützung</h2>
        <p className="mb-4">
          Schwierigkeiten mit der Plattform? Kontaktieren Sie die Verwaltung: Das Team leitet Sie an die zuständige
          Unterstützung weiter und teilt Ihnen die Zugangsmodalitäten mit.
        </p>
        <Link href="/e-campus/lms/support">
          <Button size="lg">Unterstützung erhalten</Button>
        </Link>
      </section>
    </div>
  )
}
