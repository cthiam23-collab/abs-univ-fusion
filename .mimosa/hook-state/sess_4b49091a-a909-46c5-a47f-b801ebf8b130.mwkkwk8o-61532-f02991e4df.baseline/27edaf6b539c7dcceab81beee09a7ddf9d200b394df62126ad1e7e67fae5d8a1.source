import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, Users, FileText } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "CV Workshops | ABS",
  description: "CV and cover letter writing workshops for the students of ABS — African Business School.",
  path: "/career-services/resume-workshop",
  locale: "en",
})

export default function ResumeWorkshopPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">CV and cover letter workshops</h1>
      <p className="text-xl mb-8">
        Learn to build a clear, professional CV and cover letter that showcase your background.
      </p>

      <h2 className="text-3xl font-bold mb-4">Workshop topics</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>The basics of a good CV</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Scheduled according to the year&apos;s calendar
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              Duration communicated at registration
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              Limited places per session
            </p>
            <p className="mb-4">Understand the structure of an effective CV and adapt it to each application.</p>
            <Button>Register</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Advanced techniques</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Scheduled according to the year&apos;s calendar
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              Duration communicated at registration
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              Limited places per session
            </p>
            <p className="mb-4">
              Refine your CV with strategies for presentation and for highlighting your achievements.
            </p>
            <Button>Register</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cover letter</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              Scheduled according to the year&apos;s calendar
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              Duration communicated at registration
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              Limited places per session
            </p>
            <p className="mb-4">Write a cover letter consistent with your CV and the position you are targeting.</p>
            <Button>Register</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Materials and resources</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              CV templates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Examples of CV structures are shared during the workshops and by the administration.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Action verbs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">A list of dynamic phrasings to describe your experiences precisely.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Letter examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Examples of cover letters for different types of applications.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">Personalised review</h2>
      <p className="mb-8">
        Submit your CV to the support team to receive feedback adapted to your situation. Contact the administration to
        find out the arrangements and available time slots.
      </p>
      <Button>Request a review</Button>

      <div className="mt-12">
        <Link href="/career-services">
          <Button variant="outline">Back to career services</Button>
        </Link>
      </div>
    </div>
  )
}
