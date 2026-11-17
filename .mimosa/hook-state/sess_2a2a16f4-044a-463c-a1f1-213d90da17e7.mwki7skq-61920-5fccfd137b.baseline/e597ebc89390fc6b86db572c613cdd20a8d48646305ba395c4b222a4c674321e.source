import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = buildMetadata({
  title: "Unterstützungsservices für Studierende | ABS",
  description: "Services zur Unterstützung und Begleitung für die Studierenden der ABS — African Business School: akademische Begleitung und Zuhören.",
  path: "/student-resources/support-services",
  locale: "de",
})

export default function StudentSupportServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Unterstützungsservices für Studierende</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Akademische Begleitung</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="Akademische Begleitung"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              Eine Begleitung bei der Organisation Ihres Studiums und beim Gelingen Ihres Studienwegs.
            </CardDescription>
            <Link href="/student-resources/academic-advising">
              <Button className="mt-4">Mehr erfahren</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Zuhören und Begleitung</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="Zuhören und Begleitung"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              Ein Team, das für Sie da ist, um zuzuhören und Sie bei persönlichen oder akademischen Schwierigkeiten
              zu orientieren.
            </CardDescription>
            <Link href="/student-resources/counseling">
              <Button className="mt-4">Mehr erfahren</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Berufsorientierung</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="Berufsorientierung"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              Eine Unterstützung beim Aufbau Ihres beruflichen Projekts, im Einklang mit Ihrem Ausbildungsbereich.
            </CardDescription>
            <Link href="/career-services">
              <Button className="mt-4">Mehr erfahren</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
