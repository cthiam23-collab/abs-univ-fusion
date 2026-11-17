import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Corps professoral | ABS",
  description: "Enseignants et intervenants de ABS — African Business School à Bamako.",
  path: "/faculty",
})

export default function FacultyPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Faculty & Staff</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Dr. Jane Smith", title: "Professor of Business", department: "Business School" },
          { name: "Dr. John Doe", title: "Associate Professor of Engineering", department: "School of Engineering" },
          {
            name: "Dr. Emily Brown",
            title: "Assistant Professor of International Relations",
            department: "School of International Studies",
          },
        ].map((faculty, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{faculty.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{faculty.title}</p>
              <p>{faculty.department}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
