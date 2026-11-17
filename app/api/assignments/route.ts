import { NextResponse } from "next/server"

export async function GET() {
  // In a real application, this data would come from a database
  const assignments = [
    { id: 1, course: "BUS101", title: "Business Plan", dueDate: "2023-05-20", status: "Pending" },
    { id: 2, course: "ECO201", title: "Economic Analysis Paper", dueDate: "2023-05-15", status: "Submitted" },
    { id: 3, course: "MAT110", title: "Calculus Problem Set", dueDate: "2023-05-18", status: "Graded", grade: "A-" },
    { id: 4, course: "CSC150", title: "Programming Project", dueDate: "2023-05-25", status: "Pending" },
  ]

  return NextResponse.json(assignments)
}
