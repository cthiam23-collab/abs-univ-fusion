import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Book, BookOpen, Database, Globe, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Studierendenbibliothek | ABS",
  description: "Bibliothek und Arbeitsbereiche für die Studierenden der ABS — African Business School in Bamako.",
  path: "/student-resources/library",
  locale: "de",
})

export default function LibraryServicesPage() {
  const services = [
    {
      title: "Ausleihe von Werken",
      description: "Zugriff auf die physischen Bücher, die den Studierenden zur Verfügung gestellt werden",
      icon: Book,
    },
    {
      title: "Digitale Ressourcen",
      description: "Die auf Ihre Ausbildung abgestimmten Online-Ressourcen einsehen",
      icon: Database,
    },
    {
      title: "Recherchehilfe",
      description: "Bei Ihren dokumentarischen Recherchen orientiert werden",
      icon: Globe,
    },
    {
      title: "Arbeitsbereiche",
      description: "In für das Studium geeigneten Bereichen arbeiten, allein oder in der Gruppe",
      icon: BookOpen,
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Bibliothek und Dokumentationsressourcen</h1>
      <p className="text-xl mb-12">
        Die Bibliothek der ABS-Universität ist Ihr Zugang zu den akademischen Ressourcen. Sie begleitet Ihr Lernen
        und Ihre Arbeiten in den fünf Ausbildungsbereichen der Einrichtung.
      </p>

      <div className="mb-12">
        <Image
          src="/images/campus/IMG-20250212-WA0021.jpg"
          alt="Bibliothek der ABS-Universität"
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
          <TabsTrigger value="catalog">Katalog</TabsTrigger>
          <TabsTrigger value="databases">Digitale Ressourcen</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="hours">Öffnungszeiten und Zugang</TabsTrigger>
        </TabsList>
        <TabsContent value="catalog">
          <Card>
            <CardHeader>
              <CardTitle>Katalog</CardTitle>
              <CardDescription>Die verfügbaren Bücher und Ressourcen finden</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Der Katalog verzeichnet die Bücher und Dokumentationsressourcen der Bibliothek. Nutzen Sie das
                folgende Suchfeld, um die benötigten Dokumente zu finden:
              </p>
              <div className="bg-secondary p-4 rounded-lg">
                <input
                  type="text"
                  placeholder="Katalog durchsuchen..."
                  className="w-full p-2 rounded border border-gray-300"
                />
                <Button className="mt-2">Suchen</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="databases">
          <Card>
            <CardHeader>
              <CardTitle>Digitale Ressourcen</CardTitle>
              <CardDescription>Zugriff auf die bereitgestellten Online-Ressourcen</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Digitale Werke im Zusammenhang mit dem Unterricht der fünf Bereiche</li>
                <li>Referenzressourcen für Arbeiten und Projekte der Ausbildung</li>
                <li>Unterlagen zur Vorbereitung der Praktika</li>
                <li>Ergänzende Materialien, die von den Dozierenden empfohlen werden</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Die zugänglichen Ressourcen hängen von den bestehenden Abonnements und Vereinbarungen ab; die Liste
                wird von der Bibliothek mitgeteilt.
              </p>
              <Link href="/library/online-resources">
                <Button className="mt-4">Alle Ressourcen ansehen</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Angebotene Services</CardTitle>
              <CardDescription>Unterstützung, die über die reine Ausleihe hinausgeht</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Orientierung bei den Quellen für Ihre Arbeiten und Projekte</li>
                <li>Begleitung bei Ihren Recherchen</li>
                <li>Hinweise zum Zitieren und zur Organisation der Referenzen</li>
                <li>Arbeitsbereiche für Einzel- und Gruppenstudium</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hours">
          <Card>
            <CardHeader>
              <CardTitle>Öffnungszeiten und Zugang</CardTitle>
              <CardDescription>So finden Sie uns auf dem Campus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 mr-2" />
                <span>Öffnungszeiten werden von der Verwaltung zu Beginn des Jahres mitgeteilt</span>
              </div>
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Öffnung angepasst an den akademischen Kalender der Einrichtung</span>
              </div>
              <p className="mb-4">
                Die Bibliothek befindet sich auf dem Campus der ABS-Universität, Hamdallaye ACI 2000, Bamako. Die
                Zugangs- und Ausleihbedingungen werden von der Verwaltung präzisiert.
              </p>
              <Link href="/campus/map">
                <Button>Campusplan ansehen</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-primary text-primary-foreground p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Brauchen Sie Hilfe?</h2>
        <p className="mb-6">
          Das Bibliotheksteam begleitet Sie gerne bei Ihren Recherchen und orientiert Sie in den Ressourcen. Zögern
          Sie nicht, uns anzusprechen.
        </p>
        <Link href="/contact/library">
          <Button variant="secondary">Die Bibliothek kontaktieren</Button>
        </Link>
      </div>
    </div>
  )
}
