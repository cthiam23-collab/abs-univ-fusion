"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Book, RefreshCw } from "lucide-react"

interface Book {
  id: string
  title: string
  author: string
  status: "Available" | "Checked Out" | "Reserved"
  dueDate?: string
}

interface BorrowedBook {
  id: string
  title: string
  author: string
  borrowDate: string
  dueDate: string
}

export function Library() {
  const [searchTerm, setSearchTerm] = useState("")

  const books: Book[] = [
    { id: "1", title: "Introduction to Business", author: "John Smith", status: "Available" },
    {
      id: "2",
      title: "Principles of Economics",
      author: "N. Gregory Mankiw",
      status: "Checked Out",
      dueDate: "2023-05-15",
    },
    { id: "3", title: "Data Structures and Algorithms", author: "Robert Sedgewick", status: "Available" },
    { id: "4", title: "The Art of Public Speaking", author: "Stephen Lucas", status: "Reserved" },
    { id: "5", title: "Organic Chemistry", author: "Paula Bruice", status: "Checked Out", dueDate: "2023-05-20" },
  ]

  const borrowedBooks: BorrowedBook[] = [
    {
      id: "2",
      title: "Principles of Economics",
      author: "N. Gregory Mankiw",
      borrowDate: "2023-04-15",
      dueDate: "2023-05-15",
    },
    { id: "5", title: "Organic Chemistry", author: "Paula Bruice", borrowDate: "2023-04-20", dueDate: "2023-05-20" },
  ]

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Library Catalog</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex mb-4">
            <Input
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mr-2"
            />
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBooks.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        book.status === "Available"
                          ? "default"
                          : book.status === "Checked Out"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {book.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {book.status === "Available" && <Button size="sm">Reserve</Button>}
                    {book.status === "Checked Out" && (
                      <span className="text-sm text-muted-foreground">Due: {book.dueDate}</span>
                    )}
                    {book.status === "Reserved" && (
                      <Button size="sm" variant="outline">
                        Cancel Reservation
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Borrowed Books</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Borrow Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {borrowedBooks.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.borrowDate}</TableCell>
                  <TableCell>{book.dueDate}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Renew
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Library Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="w-full">
              <Book className="mr-2 h-4 w-4" />
              Access E-Books
            </Button>
            <Button className="w-full">
              <Search className="mr-2 h-4 w-4" />
              Research Databases
            </Button>
            <Button className="w-full">
              <RefreshCw className="mr-2 h-4 w-4" />
              Interlibrary Loan
            </Button>
            <Button className="w-full">
              <Book className="mr-2 h-4 w-4" />
              Study Room Reservation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Library
