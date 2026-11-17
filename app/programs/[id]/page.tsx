import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const programs = [
  {
    id: 1,
    name: "Business Administration",
    degree: "Bachelor of Science",
    description:
      "The Business Administration program prepares students for careers in various business fields by providing a comprehensive understanding of business principles, practices, and strategies.",
    duration: "4 years",
    credits: 120,
    careers: [
      "Management Analyst",
      "Financial Analyst",
      "Marketing Manager",
      "Human Resources Specialist",
      "Entrepreneur",
    ],
    courses: [
      "Introduction to Business",
      "Principles of Marketing",
      "Financial Accounting",
      "Business Ethics",
      "Organizational Behavior",
      "Business Law",
      "Strategic Management",
      "International Business",
    ],
  },
  // ... other programs
]

export default function ProgramPage({ params }: { params: { id: string } }) {
  const program = programs.find((p) => p.id === Number.parseInt(params.id))

  if (!program) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{program.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            <strong>Degree:</strong> {program.degree}
          </p>
          <p className="text-lg mb-4">
            <strong>Duration:</strong> {program.duration}
          </p>
          <p className="text-lg mb-4">
            <strong>Total Credits:</strong> {program.credits}
          </p>
          <p className="text-xl font-semibold mt-6 mb-2">Program Description:</p>
          <p className="mb-6">{program.description}</p>
          <p className="text-xl font-semibold mb-2">Key Courses:</p>
          <ul className="list-disc list-inside mb-6">
            {program.courses.map((course, index) => (
              <li key={index} className="mb-2">
                {course}
              </li>
            ))}
          </ul>
          <p className="text-xl font-semibold mb-2">Career Opportunities:</p>
          <ul className="list-disc list-inside">
            {program.careers.map((career, index) => (
              <li key={index} className="mb-2">
                {career}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
