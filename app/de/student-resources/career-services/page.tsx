import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Briefcase, FileText, Users, Calendar, Compass } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Karriere für Studierende | ABS",
  description: "Orientierungs- und Berufseinstiegsservices der Studierenden der ABS — African Business School in Bamako.",
  path: "/student-resources/career-services",
  locale: "de",
})

export default function CareerServicesPage() {
  const services = [
    {
      title: "Orientierungsberatung",
      description: "Eine individuelle Begleitung beim Aufbau Ihres beruflichen Projekts",
      icon: Compass,
    },
    {
      title: "Durchsicht von Lebenslauf und Motivationsschreiben",
      description: "Eine Einschätzung Ihrer Bewerbungsunterlagen",
      icon: FileText,
    },
    {
      title: "Training für Vorstellungsgespräche",
      description: "Ihre Praktikums- oder Einstellungsgespräche vorbereiten",
      icon: Users,
    },
    {
      title: "Praktika und erste Anstellungen",
      description: "Ansätze im Einklang mit den Studienplänen",
      icon: Briefcase,
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Karriereservices</h1>
      <p className="text-xl mb-12">
        An der ABS-Universität begleiten wir Sie bei der Vorbereitung Ihres Berufslebens. Das Team für Orientierung
        und Berufseinstieg bietet Ressourcen und eine Begleitung, die an jeden Ausbildungsbereich angepasst sind.
      </p>

      <div className="mb-12">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Karriereservices an der ABS-Universität"
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
          <TabsTrigger value="resources">Ressourcen</TabsTrigger>
          <TabsTrigger value="events">Veranstaltungen</TabsTrigger>
          <TabsTrigger value="employers">Für Arbeitgeber</TabsTrigger>
          <TabsTrigger value="alumni">Für Absolventen</TabsTrigger>
        </TabsList>
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Karriereressourcen</CardTitle>
              <CardDescription>Werkzeuge für Ihren Erfolg</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Unterstützung bei der Definition Ihres beruflichen Projekts</li>
                <li>Orientierung über die Branchen Ihrer Ausbildung</li>
                <li>Methoden der Suche nach Praktikum und Anstellung</li>
                <li>Hinweise zum Networking und zur Kontaktaufnahme</li>
                <li>Ansätze für die Studienfortsetzung, vom Licence (Bachelorabschluss) bis zum Master</li>
              </ul>
              <Link href="/career-services">
                <Button className="mt-4">Zu den Ressourcen</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Karriereveranstaltungen</CardTitle>
              <CardDescription>Sich vorbereiten und sein Netzwerk ausbauen</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Jährliches Karriereforum, Konferenzen mit Fachleuten und Begegnungen nach Branchen: Die Termine
                werden angekündigt, sobald die Veranstaltungen offiziell geplant sind.
              </p>
              <Link href="/career-services/events">
                <Button className="mt-4">Karriereveranstaltungen ansehen</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="employers">
          <Card>
            <CardHeader>
              <CardTitle>Für Arbeitgeber</CardTitle>
              <CardDescription>Einen Austausch mit der ABS-Universität knüpfen</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Wir bringen Unternehmen mit den Studierenden und Absolventen der ABS-Universität in Verbindung. Hier
                sind die Formen, die diese Zusammenarbeit annehmen kann:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Praktika und Beschäftigungsmöglichkeiten anbieten</li>
                <li>An den Karriereveranstaltungen und Studierendenbegegnungen teilnehmen</li>
                <li>Bei Konferenzen oder Workshops mitwirken</li>
                <li>Studierende im Rahmen der Personalgewinnung treffen</li>
                <li>Über Studierendenprojekte austauschen, gemäß den Studienplänen</li>
              </ul>
              <Link href="/employers/recruit">
                <Button>Talente der ABS gewinnen</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alumni">
          <Card>
            <CardHeader>
              <CardTitle>Services für Absolventen</CardTitle>
              <CardDescription>Eine Begleitung, die nach der Ausbildung fortgesetzt werden kann</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Die Absolventen der ABS-Universität können, je nach den von der Einrichtung angebotenen Services, von
                einer Unterstützung für die Fortsetzung ihres Werdegangs profitieren:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Orientierungsberatung und Begleitung des beruflichen Projekts</li>
                <li>Hinweise zu Möglichkeiten entsprechend den der Einrichtung mitgeteilten Angeboten</li>
                <li>Begegnungen und Veranstaltungen, die das Absolventennetzwerk stärken</li>
                <li>Erfahrungsaustausch mit Studierenden in der Ausbildung</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Kontaktieren Sie die Verwaltung, um die derzeit für Absolventen geöffneten Services zu erfahren.
              </p>
              <Link href="/alumni/career-services">
                <Button>Services für Absolventen entdecken</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-secondary p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ein Orientierungsgespräch anfragen</h2>
        <p className="mb-6">
          Das Team für Berufseinstieg ist für Sie da. Fordern Sie ein Gespräch an, um Ihre Ziele zu besprechen und
          persönliche Ratschläge zu erhalten.
        </p>
        <Link href="/contact">
          <Button variant="default">Ein Gespräch anfragen</Button>
        </Link>
      </div>
    </div>
  )
}
