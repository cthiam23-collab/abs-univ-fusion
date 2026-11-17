import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Annual Career Fair | ABS",
  description: "The annual career fair of ABS — African Business School: student-company networking meetings.",
  path: "/events/annual-career-fair",
  locale: "en",
})

export default function AnnualCareerFairPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Annual Career Fair</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        A student-company event organised by ABS — African Business School. The dates and arrangements for each
        edition are announced once the event is officially scheduled.
      </p>

      <Image
        src="/images/campus/IMG-20250212-WA0022.jpg"
        alt="Annual Career Fair"
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Who is it for?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>African Business School (ABS) students, at Licence (Bachelor&apos;s degree) and Master level alike, across all academic schools.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Where?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>On the African Business School (ABS) campus, Hamdallaye ACI 2000, Bamako.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>How to take part?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Registration arrangements are communicated by the administration as the event approaches, through the
              institution&apos;s official channels.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none">
        <h2>About the event</h2>
        <p>
          The African Business School (ABS) annual career fair is an opportunity for students to meet companies and professionals from
          different sectors. Whether you are looking for an internship, a first professional experience or simply some
          pointers on careers, this event is designed to help you along your path.
        </p>

        <h2>What the event may include</h2>
        <ul>
          <li>Meetings with companies and professionals, depending on the edition</li>
          <li>Exchanges on professions connected with the five academic schools</li>
          <li>Advice on preparing your application file and for interviews</li>
          <li>Internship leads, in line with the programme frameworks</li>
        </ul>

        <h2>How to prepare</h2>
        <ol>
          <li>Update your CV and prepare several copies</li>
          <li>Find out in advance about the sectors and companies attending</li>
          <li>Prepare a short presentation of your background and your goals</li>
          <li>Present yourself professionally</li>
        </ol>

        <h2>Practical information</h2>
        <p>
          The date, detailed programme and list of participants for each edition are communicated by the administration
          once the event is officially scheduled. Contact the administration with any question, or to propose your
          company&apos;s participation.
        </p>
      </div>
    </div>
  )
}
