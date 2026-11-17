import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Career Events | ABS",
  description: "Meetings, conferences and career events organised by ABS — African Business School.",
  path: "/career-services/events",
  locale: "en",
})

export default function CareerEventsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Career events</h1>
      <p className="text-xl mb-8">
        Meetings with professionals, sector conferences and moments of exchange to prepare your entry into professional
        life. Dates are announced once the events are officially scheduled.
      </p>

      <h2 className="text-3xl font-bold mb-4">Types of events offered</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Annual Career Fair</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <MapPin className="inline mr-2" />
              African Business School (ABS) campus, Bamako
            </p>
            <p className="mb-4">
              A meeting between students and companies from different sectors, in support of employability.
            </p>
            <Link href="/events/annual-career-fair">
              <Button>Learn more</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sector conferences</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Throughout the year
            </p>
            <p className="mb-4">
              Talks by professionals connected with the five academic schools, on site or remotely depending on the
              edition.
            </p>
            <Button>Register</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Meetings and networking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <MapPin className="inline mr-2" />
              On campus
            </p>
            <p className="mb-4">
              Moments of exchange with professionals and alumni to grow your network.
            </p>
            <Button>Register</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Workshops already offered to students</h2>
      <p className="mb-8">
        Throughout the year, hands-on workshops support your preparation for professional life.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>CV and cover letter workshop</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Build a clear, convincing CV and cover letter.</p>
            <Link href="/career-services/resume-workshop">
              <Button variant="outline">See CV workshops</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interview preparation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Practise presenting your background and answering with confidence.</p>
            <Link href="/career-services/counseling">
              <Button variant="outline">See career counselling</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Meetings with graduates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Hear inspiring career stories and ask your questions.</p>
            <Button variant="outline">Contact us</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Take part or speak</h2>
      <p className="mb-8">
        Would you like to host an event, speak as a professional or suggest a topic? Contact the administration: we
        will be glad to talk with you.
      </p>
      <Link href="/contact">
        <Button>Contact us</Button>
      </Link>

      <div className="mt-12">
        <Link href="/career-services">
          <Button variant="outline">Back to career services</Button>
        </Link>
      </div>
    </div>
  )
}
