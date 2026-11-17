import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Student Dining | ABS",
  description: "Dining for the students of ABS — African Business School.",
  path: "/student-life/dining",
  locale: "en",
})

const diningOptions = [
  {
    name: "Dining on campus",
    description:
      "Dining options accessible to students on campus, in line with the institution's rules of community life.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "Meal plans and hours",
    description:
      "The meal plans offered and the service hours are communicated by the administration at the start of the year.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "Special needs",
    description:
      "For any specific dietary request, contact the administration, which will look into possible solutions.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "Dining nearby",
    description:
      "The campus is located in Hamdallaye ACI 2000, Bamako, a neighbourhood where students find a variety of dining options.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
]

export default function DiningPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Student dining</h1>

      <p className="text-xl mb-8">
        African Business School (ABS) makes sure its students have dining options suited to their constraints and their schedule. The
        specific arrangements (locations, meal plans, prices) are communicated by the administration.
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
          <CardTitle>Practical information</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Dining hours follow the class schedule communicated by the administration</li>
            <li>Meal plans and access conditions are set out at the start of the academic year</li>
            <li>For any question about dining, contact the administration at +223 78 14 14 88 or by email at abs.mail1290@gmail.com</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
