import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Simulated books data (replace with actual database operations in a real application)
const books = [
  {
    id: "1",
    title: "Introduction to Computer Science",
    author: "John Smith",
    isbn: "1234567890",
    quantity: 10,
    available: 8,
  },
  { id: "2", title: "Advanced Mathematics", author: "Jane Doe", isbn: "0987654321", quantity: 5, available: 3 },
  { id: "3", title: "Modern Physics", author: "Albert Einstein", isbn: "1111222233", quantity: 7, available: 7 },
]

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json(books)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const newBook = await request.json()
  const id = (books.length + 1).toString()
  const createdBook = { id, ...newBook, available: newBook.quantity }
  books.push(createdBook)

  return NextResponse.json(createdBook, { status: 201 })
}
