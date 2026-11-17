import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Briefcase, FileText, Users, Calendar, Compass } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Careers for Students | ABS",
  description: "Career guidance and employability services for the students of ABS.",
  path: "/student-resources/career-services",
  locale: "en",
})

export default function CareerServicesPage() {
  const services = [
    {
      title: "Career counselling",
      description: "Individual support to build your career plan",
      icon: Compass,
    },
    {
      title: "CV and cover letter review",
      description: "Feedback on your application documents",
      icon: FileText,
    },
    {
      title: "Interview practice",
      description: "Prepare for your internship or job interviews",
      icon: Users,
    },
    {
      title: "Internships and first jobs",
      description: "Leads in line with the programme frameworks",
      icon: Briefcase,
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Career services</h1>
      <p className="text-xl mb-12">
        At African Business School (ABS), we support you in preparing for your professional life. The team in charge of guidance and
        employability offers resources and monitoring adapted to each academic school.
      </p>

      <div className="mb-12">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Career services at African Business School (ABS)"
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

      <Tabs defaultValue="resources" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="employers">For employers</TabsTrigger>
          <TabsTrigger value="alumni">For graduates</TabsTrigger>
        </TabsList>
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Career resources</CardTitle>
              <CardDescription>Tools to help you succeed</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Help defining your career plan</li>
                <li>Points of reference on the sectors connected with your programme</li>
                <li>Methods for searching for internships and jobs</li>
                <li>Networking and outreach advice</li>
                <li>Further study options, from the Licence to the Master</li>
              </ul>
              <Link href="/career-services">
                <Button className="mt-4">Access the resources</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Career events</CardTitle>
              <CardDescription>Get ready and grow your network</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Annual career fair, conferences with professionals and sector meetings: dates are announced once the
                events are officially scheduled.
              </p>
              <Link href="/career-services/events">
                <Button className="mt-4">View career events</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="employers">
          <Card>
            <CardHeader>
              <CardTitle>For employers</CardTitle>
              <CardDescription>Start a conversation with African Business School (ABS)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We connect companies with the students and graduates of African Business School (ABS). Here are the forms this
                collaboration can take:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Offer internships and job opportunities</li>
                <li>Take part in career events and student meetings</li>
                <li>Speak at conferences or workshops</li>
                <li>Meet students as part of your recruitment</li>
                <li>Discuss student projects, in line with the programme frameworks</li>
              </ul>
              <Link href="/employers/recruit">
                <Button>Recruit ABS talent</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alumni">
          <Card>
            <CardHeader>
              <CardTitle>Services for graduates</CardTitle>
              <CardDescription>Support that can continue after graduation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                African Business School (ABS) graduates can, depending on the services offered by the institution, benefit from support
                for the next stage of their journey:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Career counselling and career plan support</li>
                <li>Opportunity leads based on the offers communicated to the institution</li>
                <li>Meetings and events that strengthen the graduate network</li>
                <li>Sharing experience with current students</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Contact the administration to find out which services are currently open to graduates.
              </p>
              <Link href="/alumni/career-services">
                <Button>Explore graduate services</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-secondary p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Request a guidance meeting</h2>
        <p className="mb-6">
          The employability team is here to help you. Request a meeting to discuss your goals and receive personalised
          advice.
        </p>
        <Link href="/contact">
          <Button variant="default">Request a meeting</Button>
        </Link>
      </div>
    </div>
  )
}
