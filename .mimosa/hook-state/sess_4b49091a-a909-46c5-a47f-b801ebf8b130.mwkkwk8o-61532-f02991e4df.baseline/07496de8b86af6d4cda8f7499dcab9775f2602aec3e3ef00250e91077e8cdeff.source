import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = buildMetadata({
  title: "Calendrier académique | ABS",
  description:
    "Consultez le calendrier académique de ABS : dates clés de l'année universitaire, début des cours, vacances, examens finaux et cérémonie de remise des diplômes.",
  path: "/academics/calendar",
})

const academicYears = [
  {
    year: "2023-2024",
    events: [
      { date: "August 25, 2023", event: "Fall Semester Begins" },
      { date: "September 5, 2023", event: "Labor Day (University Closed)" },
      { date: "October 10-11, 2023", event: "Fall Break" },
      { date: "November 23-24, 2023", event: "Thanksgiving Break" },
      { date: "December 8, 2023", event: "Last Day of Classes" },
      { date: "December 11-15, 2023", event: "Final Exams" },
      { date: "January 15, 2024", event: "Spring Semester Begins" },
      { date: "March 11-15, 2024", event: "Spring Break" },
      { date: "May 3, 2024", event: "Last Day of Classes" },
      { date: "May 6-10, 2024", event: "Final Exams" },
      { date: "May 18, 2024", event: "Commencement" },
    ],
  },
  {
    year: "2024-2025",
    events: [
      { date: "August 26, 2024", event: "Fall Semester Begins" },
      { date: "September 2, 2024", event: "Labor Day (University Closed)" },
      { date: "October 14-15, 2024", event: "Fall Break" },
      { date: "November 28-29, 2024", event: "Thanksgiving Break" },
      { date: "December 6, 2024", event: "Last Day of Classes" },
      { date: "December 9-13, 2024", event: "Final Exams" },
      { date: "January 13, 2025", event: "Spring Semester Begins" },
      { date: "March 10-14, 2025", event: "Spring Break" },
      { date: "May 2, 2025", event: "Last Day of Classes" },
      { date: "May 5-9, 2025", event: "Final Exams" },
      { date: "May 17, 2025", event: "Commencement" },
    ],
  },
]

export default function AcademicCalendarPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Academic Calendar</h1>
      <p className="text-xl mb-8">
        Plan your academic year with our comprehensive calendar of important dates and events.
      </p>
      <Tabs defaultValue={academicYears[0].year}>
        <TabsList>
          {academicYears.map((year) => (
            <TabsTrigger key={year.year} value={year.year}>
              {year.year} Academic Year
            </TabsTrigger>
          ))}
        </TabsList>
        {academicYears.map((year) => (
          <TabsContent key={year.year} value={year.year}>
            <Card>
              <CardHeader>
                <CardTitle>{year.year} Academic Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {year.events.map((event, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">{event.date}</span>
                      <span>{event.event}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
