"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

interface Book {
  id: string
  title: string
  author: string
  isbn: string
  quantity: number
  available: number
}

export default function LibraryPage() {
  const [books, setBooks] = useState<Book[]>([])
  const [newBook, setNewBook] = useState({ title: "", author: "", isbn: "", quantity: 0 })
  const { toast } = useToast()

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      const response = await fetch("/api/admin/library")
      if (!response.ok) throw new Error("Failed to fetch books")
      const data = await response.json()
      setBooks(data)
    } catch (error) {
      console.error("Error fetching books:", error)
      toast({
        title: "Error",
        description: "Failed to fetch books. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewBook((prev) => ({ ...prev, [name]: name === "quantity" ? Number.parseInt(value) : value }))
  }

  const handleAddBook = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/library", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      })
      if (!response.ok) throw new Error("Failed to add book")
      await fetchBooks()
      setNewBook({ title: "", author: "", isbn: "", quantity: 0 })
      toast({
        title: "Book Added",
        description: "The new book has been successfully added to the library.",
      })
    } catch (error) {
      console.error("Error adding book:", error)
      toast({
        title: "Error",
        description: "Failed to add book. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Library Management</h1>
      <form onSubmit={handleAddBook} className="mb-4 space-y-2">
        <Input
          type="text"
          name="title"
          placeholder="Book Title"
          value={newBook.title}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
          required
        />
        <Input type="text" name="isbn" placeholder="ISBN" value={newBook.isbn} onChange={handleInputChange} required />
        <Input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newBook.quantity}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add Book</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Available</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.quantity}</TableCell>
              <TableCell>{book.available}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
