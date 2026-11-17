import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = buildMetadata({
  title: "Student Support Services | ABS",
  description: "Support and guidance services for the students of ABS — African Business School: academic monitoring, listening and support.",
  path: "/student-resources/support-services",
  locale: "en",
})

export default function StudentSupportServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Student support services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Academic monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="Academic monitoring"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              Support in organising your studies and succeeding in your programme.
            </CardDescription>
            <Link href="/student-resources/academic-advising">
              <Button className="mt-4">Learn more</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Listening and support</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="Listening and support"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              A team available to listen to you and guide you in case of personal or academic difficulties.
            </CardDescription>
            <Link href="/student-resources/counseling">
              <Button className="mt-4">Learn more</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Career guidance</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="Career guidance"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              Support in building your career plan, in line with your academic school.
            </CardDescription>
            <Link href="/career-services">
              <Button className="mt-4">Learn more</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
