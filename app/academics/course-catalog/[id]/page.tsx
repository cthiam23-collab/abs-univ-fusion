import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const courses = [
  {
    id: 1,
    code: "BUS101",
    name: "Introduction to Business",
    department: "Business",
    description:
      "This course provides a comprehensive introduction to the world of business, covering fundamental concepts, practices, and challenges in the modern business environment.",
    credits: 3,
    prerequisites: "None",
    schedule: "Mon, Wed, Fri 10:00 AM - 11:15 AM",
    instructor: "Dr. Jane Smith",
    syllabus: [
      "Week 1-2: Introduction to Business Concepts",
      "Week 3-4: Business Ethics and Social Responsibility",
      "Week 5-6: Forms of Business Ownership",
      "Week 7-8: Management and Organization",
      "Week 9-10: Human Resource Management",
      "Week 11-12: Marketing Principles",
      "Week 13-14: Financial Management",
      "Week 15: Global Business and Economic Concepts",
    ],
  },
  // ... other courses
]

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === Number.parseInt(params.id))

  if (!course) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            {course.code}: {course.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            <strong>Department:</strong> {course.department}
          </p>
          <p className="text-lg mb-4">
            <strong>Credits:</strong> {course.credits}
          </p>
          <p className="text-lg mb-4">
            <strong>Prerequisites:</strong> {course.prerequisites}
          </p>
          <p className="text-lg mb-4">
            <strong>Schedule:</strong> {course.schedule}
          </p>
          <p className="text-lg mb-4">
            <strong>Instructor:</strong> {course.instructor}
          </p>
          <p className="text-xl font-semibold mt-6 mb-2">Course Description:</p>
          <p className="mb-6">{course.description}</p>
          <p className="text-xl font-semibold mb-2">Course Syllabus:</p>
          <ul className="list-disc list-inside">
            {course.syllabus.map((week, index) => (
              <li key={index} className="mb-2">
                {week}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
