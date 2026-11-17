import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, Users } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Career Counselling | ABS",
  description: "Individual career guidance and counselling for the students of ABS — African Business School.",
  path: "/career-services/counseling",
  locale: "en",
})

export default function CareerCounselingPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Career counselling</h1>
      <p className="text-xl mb-8">
        Benefit from personalised support in defining your career plan, in line with your academic school.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2" />
              One-on-one meetings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              A meeting with the support team to discuss your plan and build an action plan suited to your goals.
            </p>
            <Button>Request a meeting</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2" />
              Group workshops
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Group workshops to explore professions, exchange with your peers and prepare your entry into
              professional life.
            </p>
            <Button>See the workshops</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2" />
              Quick questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              For a one-off question about your career direction or your CV, contact the administration, which will
              tell you the available time slots.
            </p>
            <Button>Contact us</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Our support team</h2>
      <p className="mb-8">
        The team in charge of career guidance and employability supports students from every academic school. Its
        members are introduced to students during support sessions.
      </p>

      {/* Add adviser profiles here */}

      <h2 className="text-3xl font-bold mb-4">Resources</h2>
      <p className="mb-8">Prepare your guidance session by exploring our resources.</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Skills assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Identify your strengths and interests to give your plan direction.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sector guides</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover the sectors connected with your programme and the career paths they open.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interview preparation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Advice for approaching your internship or job interviews with confidence.</p>
          </CardContent>
        </Card>
      </div>

      <Link href="/career-services">
        <Button variant="outline">Back to career services</Button>
      </Link>
    </div>
  )
}
