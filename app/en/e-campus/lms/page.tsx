import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "LMS Platform | ABS",
  description: "The online learning platform of ABS — African Business School.",
  path: "/e-campus/lms",
  locale: "en",
})

export default function LMSPage() {
  const lmsFeatures = [
    {
      title: "Course materials",
      description: "Access lecture notes, readings and multimedia resources posted online by your teachers",
      image:
        "/images/campus/IMG-20250212-WA0016.jpg",
    },
    {
      title: "Assignments and assessments",
      description: "Submit your coursework and take the online assessments planned by your teachers",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Discussion spaces",
      description: "Exchange with your peers and your teachers about your courses",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Results tracking",
      description: "View your grades and follow your academic progress",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Online Learning Platform (LMS)</h1>

      <p className="text-xl mb-8">
        The African Business School (ABS) online learning platform is your central hub for everything related to your courses: view
        materials, submit your work, take part in discussions and track your progress, wherever you are.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Features</h2>
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
        <h2 className="text-3xl font-semibold mb-6">Getting started</h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Log in to the platform with the credentials provided by African Business School (ABS)</li>
              <li>Find all of your enrolled courses on your dashboard</li>
              <li>Open a course to access its materials, assignments and discussions</li>
              <li>Check the calendar for important dates and deadlines</li>
              <li>Adjust your notifications to stay informed about your courses&apos; activities</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Support</h2>
        <p className="mb-4">
          Having trouble with the platform? Contact the administration: the team will point you to the right support
          and give you the access arrangements.
        </p>
        <Link href="/e-campus/lms/support">
          <Button size="lg">Get support</Button>
        </Link>
      </section>
    </div>
  )
}
