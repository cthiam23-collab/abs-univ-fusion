import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Academic Advising | ABS",
  description: "Academic guidance and monitoring for the students of ABS — African Business School.",
  path: "/student-resources/academic-advising",
  locale: "en",
})

export default function AcademicAdvisingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Academic monitoring and advising</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What is academic advising?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Academic advising is a supportive relationship between the student and the teaching team. Its purpose is to
            help the student build a coherent course of study aligned with their interests, abilities and career plan,
            within the five academic schools of African Business School (ABS).
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our services</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Help organising your studies and following the academic calendar</li>
            <li>Guidance in choosing pathways within each academic school</li>
            <li>Monitoring of academic progress from semester to semester</li>
            <li>Preparation for the internships and projects set out in the programme frameworks</li>
            <li>Exploration of possible further study, from the Licence (3 years, 180 credits) to the Master (2 years, 120 credits)</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Meeting your adviser</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The academic monitoring team supports students throughout their studies. To book an appointment with an
            adviser, contact the administration, which will give you the arrangements and available time slots.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
