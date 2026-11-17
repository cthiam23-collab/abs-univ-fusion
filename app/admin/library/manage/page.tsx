// @ts-nocheck
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Plus, Search, Edit, Trash2, Download, RefreshCw, Users, CheckCircle } from "lucide-react"
import { getMockLibraryData } from "@/lib/mock-data"
import { exportToCSV, exportToPDF } from "@/lib/helpers"
import { Textarea } from "@/components/ui/textarea"

interface LibraryBook {
  id: string
  title: string
  author: string
  isbn: string
  category: string
  publisher: string
  publishYear: number
  quantity: number
  available: number
  location: string
  description: string
  language: string
  pages: number
}

interface BorrowRecord {
  id: string
  bookId: string
  bookTitle: string
  studentId: string
  studentName: string
  borrowDate: string
  dueDate: string
  returnDate: string | null
  status: "borrowed" | "returned" | "overdue"
}

export default function LibraryManagePage() {
  const [books, setBooks] = useState<LibraryBook[]>([])
  const [borrowRecords, setBorrowRecords] = useState<BorrowRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedBook, setSelectedBook] = useState<LibraryBook | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"books" | "borrows">("books")
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
    publisher: "",
    publishYear: new Date().getFullYear(),
    quantity: 1,
    available: 1,
    location: "",
    description: "",
    language: "English",
    pages: 0,
  })

  useEffect(() => {
    loadLibraryData()
  }, [])

  const loadLibraryData = async () => {
    setLoading(true)
    try {
      const data = getMockLibraryData()
      setBooks(data.books)
      setBorrowRecords(data.borrowRecords)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load library data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.includes(searchTerm)
    const matchesCategory = filterCategory === "all" || book.category === filterCategory
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "available" && book.available > 0) ||
      (filterStatus === "unavailable" && book.available === 0)
    return matchesSearch && matchesCategory && matchesStatus
  })

  const filteredBorrows = borrowRecords.filter((record) => {
    const matchesSearch =
      record.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.studentId.includes(searchTerm)
    return matchesSearch
  })

  const categories = Array.from(new Set(books.map((b) => b.category)))

  const stats = {
    totalBooks: books.reduce((sum, book) => sum + book.quantity, 0),
    availableBooks: books.reduce((sum, book) => sum + book.available, 0),
    borrowedBooks: borrowRecords.filter((r) => r.status === "borrowed").length,
    overdueBooks: borrowRecords.filter((r) => r.status === "overdue").length,
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (selectedBook) {
        setBooks(books.map((b) => (b.id === selectedBook.id ? { ...formData, id: b.id } : b)))
        toast({
          title: "Success",
          description: "Book updated successfully",
        })
      } else {
        const newBook: LibraryBook = {
          ...formData,
          id: `BK${Date.now()}`,
        }
        setBooks([...books, newBook])
        toast({
          title: "Success",
          description: "Book added successfully",
        })
      }
      resetForm()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save book",
        variant: "destructive",
      })
    }
  }

  const handleEdit = (book: LibraryBook) => {
    setSelectedBook(book)
    setFormData(book)
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this book?")) return
    try {
      setBooks(books.filter((b) => b.id !== id))
      toast({
        title: "Success",
        description: "Book deleted successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete book",
        variant: "destructive",
      })
    }
  }

  const handleReturnBook = async (recordId: string) => {
    try {
      const record = borrowRecords.find((r) => r.id === recordId)
      if (!record) return

      setBorrowRecords(
        borrowRecords.map((r) =>
          r.id === recordId
            ? { ...r, returnDate: new Date().toISOString().split("T")[0], status: "returned" as const }
            : r,
        ),
      )

      setBooks(books.map((b) => (b.id === record.bookId ? { ...b, available: b.available + 1 } : b)))

      toast({
        title: "Success",
        description: "Book returned successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process return",
        variant: "destructive",
      })
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      author: "",
      isbn: "",
      category: "",
      publisher: "",
      publishYear: new Date().getFullYear(),
      quantity: 1,
      available: 1,
      location: "",
      description: "",
      language: "English",
      pages: 0,
    })
    setSelectedBook(null)
    setIsFormOpen(false)
  }

  const handleExportCSV = () => {
    const data = activeTab === "books" ? filteredBooks : filteredBorrows
    exportToCSV(data, `library_${activeTab}`)
    toast({
      title: "Success",
      description: `${activeTab === "books" ? "Books" : "Borrow records"} exported to CSV`,
    })
  }

  const handleExportPDF = () => {
    const data = activeTab === "books" ? filteredBooks : filteredBorrows
    exportToPDF(data, `Library ${activeTab === "books" ? "Books" : "Borrow Records"}`, `library_${activeTab}`)
    toast({
      title: "Success",
      description: `${activeTab === "books" ? "Books" : "Borrow records"} exported to PDF`,
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <RefreshCw className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Library Management</h1>
          <p className="text-muted-foreground">Manage library books and borrow records</p>
        </div>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Book
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <span className="h-4 w-4" />
              Total Books
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalBooks}</div>
            <p className="text-xs text-muted-foreground">In collection</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <span className="h-4 w-4 text-green-500" />
              Available
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.availableBooks}</div>
            <p className="text-xs text-muted-foreground">Ready to borrow</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <span className="h-4 w-4 text-blue-500" />
              Borrowed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.borrowedBooks}</div>
            <p className="text-xs text-muted-foreground">Currently out</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <span className="h-4 w-4 text-red-500" />
              Overdue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.overdueBooks}</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>
      </div>

      {isFormOpen && (
        <Card>
          <CardHeader>
            <CardTitle>{selectedBook ? "Edit" : "Add"} Book</CardTitle>
            <CardDescription>{selectedBook ? "Update" : "Enter"} book information</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Book Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter book title"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author">Author *</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="Author name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="isbn">ISBN *</Label>
                  <Input
                    id="isbn"
                    value={formData.isbn}
                    onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
                    placeholder="978-0-123456-78-9"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g., Business, Technology"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="publisher">Publisher</Label>
                  <Input
                    id="publisher"
                    value={formData.publisher}
                    onChange={(e) => setFormData({ ...formData, publisher: e.target.value })}
                    placeholder="Publisher name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="publishYear">Publish Year</Label>
                  <Input
                    id="publishYear"
                    type="number"
                    value={formData.publishYear}
                    onChange={(e) => setFormData({ ...formData, publishYear: Number.parseInt(e.target.value) })}
                    min="1900"
                    max={new Date().getFullYear()}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Total Quantity *</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        quantity: Number.parseInt(e.target.value),
                        available: Number.parseInt(e.target.value),
                      })
                    }
                    min="1"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select
                    value={formData.language}
                    onValueChange={(value) => setFormData({ ...formData, language: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="French">French</SelectItem>
                      <SelectItem value="Arabic">Arabic</SelectItem>
                      <SelectItem value="Spanish">Spanish</SelectItem>
                      <SelectItem value="German">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pages">Number of Pages</Label>
                  <Input
                    id="pages"
                    type="number"
                    value={formData.pages}
                    onChange={(e) => setFormData({ ...formData, pages: Number.parseInt(e.target.value) })}
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Shelf Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g., A-15, B-22"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief description of the book"
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button type="submit">{selectedBook ? "Update" : "Add"} Book</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <Button variant={activeTab === "books" ? "default" : "outline"} onClick={() => setActiveTab("books")}>
              <span className="h-4 w-4 mr-2" />
              Books
            </Button>
            <Button variant={activeTab === "borrows" ? "default" : "outline"} onClick={() => setActiveTab("borrows")}>
              <Users className="h-4 w-4 mr-2" />
              Borrow Records
            </Button>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex-1 flex gap-2">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={`Search ${activeTab}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              {activeTab === "books" && (
                <>
                  <Select value={filterCategory} onValueChange={setFilterCategory}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="unavailable">Unavailable</SelectItem>
                    </SelectContent>
                  </Select>
                </>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleExportCSV}>
                <Download className="h-4 w-4 mr-2" />
                CSV
              </Button>
              <Button variant="outline" onClick={handleExportPDF}>
                <Download className="h-4 w-4 mr-2" />
                PDF
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {activeTab === "books" ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>ISBN</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Available</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell className="font-medium">{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell className="font-mono text-sm">{book.isbn}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{book.category}</Badge>
                    </TableCell>
                    <TableCell>{book.location}</TableCell>
                    <TableCell>{book.quantity}</TableCell>
                    <TableCell>
                      <span className={book.available > 0 ? "text-green-600 font-medium" : "text-red-600"}>
                        {book.available}
                      </span>
                    </TableCell>
                    <TableCell>
                      {book.available > 0 ? (
                        <Badge variant="default" className="bg-green-500">
                          Available
                        </Badge>
                      ) : (
                        <Badge variant="destructive">Unavailable</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEdit(book)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(book.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Book Title</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Borrow Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Return Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBorrows.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">{record.bookTitle}</TableCell>
                    <TableCell>
                      <div>
                        <div>{record.studentName}</div>
                        <div className="text-xs text-muted-foreground">{record.studentId}</div>
                      </div>
                    </TableCell>
                    <TableCell>{record.borrowDate}</TableCell>
                    <TableCell>{record.dueDate}</TableCell>
                    <TableCell>{record.returnDate || "-"}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          record.status === "returned"
                            ? "default"
                            : record.status === "overdue"
                              ? "destructive"
                              : "secondary"
                        }
                        className={record.status === "returned" ? "bg-green-500" : ""}
                      >
                        {record.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {record.status === "borrowed" || record.status === "overdue" ? (
                        <Button variant="outline" size="sm" onClick={() => handleReturnBook(record.id)}>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Return
                        </Button>
                      ) : (
                        <span className="text-sm text-muted-foreground">Completed</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
