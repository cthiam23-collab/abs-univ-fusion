import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Cultural Integration | ABS",
  description: "Cultural openness and student associations at ABS — African Business School: dialogues, cultures and student initiatives.",
  path: "/cultural-integration",
  locale: "en",
})

export default function CulturalIntegrationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Cultural integration at ABS</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0017.jpg"
            alt="Cultural gatherings between students"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>Cultural gatherings</CardTitle>
            <CardDescription>
              Moments of exchange celebrating the richness and diversity of African cultures.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0022.jpg"
            alt="Cultural events"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>Cultural events</CardTitle>
            <CardDescription>
              Conferences, exhibitions and celebrations punctuate the year once they are officially scheduled.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0018.jpg"
            alt="Cultural diversity"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>Cultural diversity</CardTitle>
            <CardDescription>
              Students from different backgrounds learn to get to know one another and work together.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-semibold mb-6">Our commitment to cultural integration</h2>
        <p className="mb-4">
          At ABS — African Business School, we see cultural openness as an essential dimension of education: it
          prepares graduates capable of thriving in a variety of environments, in Africa and beyond. Life on campus
          encourages dialogue between students of different backgrounds and cultures, in the pan-African spirit that
          drives the institution.
        </p>
        <p className="mb-4">
          This openness is also experienced in the classroom: French-English bilingualism, the gradual introduction of
          Spanish in international relations and business, and the projects and internships set out in the programme
          frameworks all offer opportunities to broaden your cultural horizons.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-2xl font-semibold mb-4">Types of activities offered throughout the year</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gatherings and exchange days focused on African cultures</li>
            <li>Conferences and talks by guest speakers</li>
            <li>Cultural initiatives led by students</li>
            <li>Welcome and orientation activities for new students</li>
          </ul>
          <p className="mt-4 text-sm">
            The exact schedule of these activities is communicated by the administration once the events are officially
            scheduled.
          </p>
        </div>
      </div>
    </div>
  )
}
