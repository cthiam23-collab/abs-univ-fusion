import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Calendrier | ABS",
  description: "Calendrier des événements et échéances de ABS — African Business School à Bamako.",
  path: "/calendar",
})

export default function CalendarPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Academic Calendar</h1>

      <Card>
        <CardHeader>
          <CardTitle>Academic Year 2023-2024</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="multiple"
            selected={[
              new Date(2023, 8, 1), // Fall semester start
              new Date(2023, 11, 15), // Fall semester end
              new Date(2024, 0, 15), // Spring semester start
              new Date(2024, 4, 15), // Spring semester end
            ]}
            className="rounded-md border"
          />
        </CardContent>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Important Dates</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Fall Semester: September 1, 2023 - December 15, 2023</li>
          <li>Spring Semester: January 15, 2024 - May 15, 2024</li>
          <li>Winter Break: December 16, 2023 - January 14, 2024</li>
          <li>Summer Break: May 16, 2024 - August 31, 2024</li>
        </ul>
      </div>
    </div>
  )
}
