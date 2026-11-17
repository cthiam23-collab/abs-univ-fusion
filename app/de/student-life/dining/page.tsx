import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Studentenverpflegung | ABS",
  description: "Verpflegung für die Studierenden der ABS — African Business School: Lösungen auf dem Campus und in der Umgebung, gemäß den Angaben der Verwaltung.",
  path: "/student-life/dining",
  locale: "de",
})

const diningOptions = [
  {
    name: "Verpflegung auf dem Campus",
    description:
      "Verpflegungsmöglichkeiten, die den Studierenden auf dem Campus zugänglich sind, im Einklang mit den Lebensregeln der Einrichtung.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "Angebote und Zeiten",
    description:
      "Die angebotenen Formeln und die Servierzeiten werden von der Verwaltung zu Beginn des Jahres mitgeteilt.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "Besondere Bedürfnisse",
    description:
      "Wenden Sie sich bei besonderen Anliegen im Zusammenhang mit der Ernährung an die Verwaltung, die die möglichen Lösungen prüfen wird.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "Verpflegung in der Umgebung",
    description:
      "Der Campus liegt in Hamdallaye ACI 2000, Bamako, in einem Stadtviertel, in dem die Studierenden vielfältige Verpflegungsmöglichkeiten finden.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
]

export default function DiningPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Studentenverpflegung</h1>

      <p className="text-xl mb-8">
        Die ABS-Universität achtet darauf, dass ihre Studierenden über Verpflegungslösungen verfügen, die ihren
        Anforderungen und ihrem Stundenplan entsprechen. Die genauen Modalitäten (Orte, Formeln, Tarife) werden von
        der Verwaltung mitgeteilt.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-12">
        {diningOptions.map((option, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={option.image || "/placeholder.svg"}
              alt={option.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{option.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{option.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Praktische Informationen</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Die Verpflegungszeiten folgen der von der Verwaltung mitgeteilten Kursorganisation</li>
            <li>Formeln und Zugangsbedingungen werden zu Beginn des akademischen Jahres präzisiert</li>
            <li>Für Fragen zur Verpflegung kontaktieren Sie die Verwaltung unter +223 78 14 14 88 oder per E-Mail an abs.mail1290@gmail.com</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
