import { NextResponse } from "next/server"

export async function GET() {
  // In a real application, this data would come from a database
  const courses = [
    {
      id: "BUS101",
      name: "Introduction to Business",
      credits: 3,
      schedule: "MWF 10:00-11:00",
      instructor: "Dr. Smith",
      capacity: 30,
      enrolled: 25,
    },
    {
      id: "ECO201",
      name: "Microeconomics",
      credits: 3,
      schedule: "TTH 13:00-14:30",
      instructor: "Prof. Johnson",
      capacity: 35,
      enrolled: 30,
    },
    {
      id: "MAT110",
      name: "Calculus I",
      credits: 4,
      schedule: "MWF 09:00-10:30",
      instructor: "Dr. Williams",
      capacity: 25,
      enrolled: 20,
    },
    {
      id: "ENG105",
      name: "Academic Writing",
      credits: 3,
      schedule: "TTH 11:00-12:30",
      instructor: "Prof. Davis",
      capacity: 20,
      enrolled: 18,
    },
    {
      id: "CSC150",
      name: "Introduction to Programming",
      credits: 4,
      schedule: "MWF 14:00-15:30",
      instructor: "Dr. Lee",
      capacity: 30,
      enrolled: 28,
    },
  ]

  return NextResponse.json(courses)
}
