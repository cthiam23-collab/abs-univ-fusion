import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Calendrier académique étudiant | ABS",
  description: "Calendrier académique de ABS — African Business School : semestres, examens et échéances.",
  path: "/student-resources/academic-calendar",
})

export default function AcademicCalendarPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Academic Calendar</h1>

      <p className="text-xl text-muted-foreground mb-8">
        Stay informed about important dates and deadlines throughout the academic year [^4].
      </p>

      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Calendar className="mr-2 h-6 w-6" />
              Fall Semester 2023
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>August 28:</strong> Classes Begin
              </li>
              <li>
                <strong>September 4:</strong> Labor Day (No Classes)
              </li>
              <li>
                <strong>October 9-10:</strong> Fall Break
              </li>
              <li>
                <strong>November 22-24:</strong> Thanksgiving Break
              </li>
              <li>
                <strong>December 8:</strong> Last Day of Classes
              </li>
              <li>
                <strong>December 11-15:</strong> Final Exams
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Calendar className="mr-2 h-6 w-6" />
              Spring Semester 2024
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>January 15:</strong> Classes Begin
              </li>
              <li>
                <strong>March 11-15:</strong> Spring Break
              </li>
              <li>
                <strong>April 19:</strong> Good Friday (No Classes)
              </li>
              <li>
                <strong>May 3:</strong> Last Day of Classes
              </li>
              <li>
                <strong>May 6-10:</strong> Final Exams
              </li>
              <li>
                <strong>May 18:</strong> Commencement
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Important Deadlines</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <strong>Add/Drop Deadline:</strong> First week of each semester
            </li>
            <li>
              <strong>Withdrawal Deadline:</strong> 10th week of each semester
            </li>
            <li>
              <strong>Graduation Application Deadline:</strong> February 1 for Spring, October 1 for Fall
            </li>
            <li>
              <strong>Financial Aid Application Priority Deadline:</strong> March 1 for the following academic year
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
