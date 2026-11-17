import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, Briefcase, HeartPulse, Library, GraduationCap, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Ressourcen für Studierende | ABS",
  description:
    "Akademische Ressourcen und Unterstützungsdienste für die Studierenden der ABS — African Business School: Studienberatung, Karriereservices, Gesundheit, Bibliothek und Tutoring.",
  path: "/student-resources",
  locale: "de",
})

export default function StudentResourcesPage() {
  const resources = [
    {
      title: "Studienberatung",
      description: "Hilfe bei der Kurswahl und der akademischen Planung erhalten",
      icon: BookOpen,
      link: "/student-resources/academic-advising",
    },
    {
      title: "Karriereservices",
      description: "Berufschancen erkunden und Unterstützung bei der Stellensuche erhalten",
      icon: Briefcase,
      link: "/student-resources/career-services",
    },
    {
      title: "Gesundheit und Wohlbefinden",
      description: "Medizinische und psychologische Dienste in Anspruch nehmen",
      icon: HeartPulse,
      link: "/student-resources/health-wellness",
    },
    {
      title: "Bibliotheksdienste",
      description: "Unsere umfangreiche Sammlung von Büchern und digitalen Ressourcen nutzen",
      icon: Library,
      link: "/student-resources/library",
    },
    {
      title: "Tutoring und Lernunterstützung",
      description: "Bei anspruchsvollen Fächern Hilfe erhalten und Ihre Lerntechniken verbessern",
      icon: GraduationCap,
      link: "/student-resources/tutoring",
    },
    {
      title: "Studierendenvereinigungen",
      description: "Clubs und Vereinigungen beitreten, um Ihr Studium bereichernd zu gestalten",
      icon: Users,
      link: "/student-life/organizations",
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Studierendenressourcen</h1>
      <p className="text-xl mb-12">
        An der ABS-Universität setzen wir uns dafür ein, Ihren akademischen Weg und Ihre persönliche
        Entwicklung zu unterstützen. Entdecken Sie die große Palette an Ressourcen, die Ihnen zum Erfolg
        verhelfen.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {resources.map((resource, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <resource.icon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Link href={resource.link}>
                <Button variant="outline" className="w-full">
                  Mehr erfahren
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="academic" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="academic">Akademische Unterstützung</TabsTrigger>
          <TabsTrigger value="wellness">Gesundheit & Wohlbefinden</TabsTrigger>
          <TabsTrigger value="career">Karriereentwicklung</TabsTrigger>
        </TabsList>
        <TabsContent value="academic">
          <Card>
            <CardHeader>
              <CardTitle>Akademische Unterstützungsdienste</CardTitle>
              <CardDescription>Wir stärken Ihren akademischen Erfolg</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Einzel-Tutoring-Sitzungen</li>
                <li>Schreibzentrum für Unterstützung bei Aufsätzen</li>
                <li>Hilfsstellen für Mathematik und Naturwissenschaften</li>
                <li>Workshops zu Lerntechniken</li>
                <li>Akademisches Coaching</li>
                <li>Dienste für Studierende mit Behinderung</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="wellness">
          <Card>
            <CardHeader>
              <CardTitle>Ressourcen für Gesundheit & Wohlbefinden</CardTitle>
              <CardDescription>Wir begleiten Ihr körperliches und seelisches Wohlbefinden</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Gesundheitsstation auf dem Campus</li>
                <li>Beratungs- und psychologische Dienste</li>
                <li>Fitnesscenter und Freizeitsport</li>
                <li>Ernährungsberatung</li>
                <li>Workshops zum Stressmanagement</li>
                <li>Achtsamkeits- und Meditationskurse</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="career">
          <Card>
            <CardHeader>
              <CardTitle>Möglichkeiten der Karriereentwicklung</CardTitle>
              <CardDescription>Wir bereiten Sie auf den beruflichen Erfolg vor</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Durchsicht von Lebenslauf und Motivationsschreiben</li>
                <li>Probegespräche</li>
                <li>Vermittlung von Praktika</li>
                <li>Karrieremessen und Networking-Veranstaltungen</li>
                <li>Workshops zu Strategien der Stellensuche</li>
                <li>Mentoring-Programm mit Ehemaligen</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-secondary p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Brauchen Sie Hilfe?</h2>
        <p className="mb-6">
          Unser Studierendenservice-Team ist für Sie da. Zögern Sie nicht, uns zu kontaktieren, wenn Sie
          Fragen haben oder Unterstützung benötigen.
        </p>
        <Link href="/contact">
          <Button>Den Studierendenservice kontaktieren</Button>
        </Link>
      </div>
    </div>
  )
}
