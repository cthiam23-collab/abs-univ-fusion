"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

interface Student {
  id: string
  name: string
  email: string
  program: string
  enrollmentDate: string
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [newStudent, setNewStudent] = useState({ name: "", email: "", program: "" })
  const { toast } = useToast()

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    try {
      const response = await fetch("/api/admin/students")
      if (!response.ok) throw new Error("Failed to fetch students")
      const data = await response.json()
      setStudents(data)
    } catch (error) {
      console.error("Error fetching students:", error)
      toast({
        title: "Error",
        description: "Failed to fetch students. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewStudent((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStudent),
      })
      if (!response.ok) throw new Error("Failed to add student")
      await fetchStudents()
      setNewStudent({ name: "", email: "", program: "" })
      toast({
        title: "Student Added",
        description: "The new student has been successfully added.",
      })
    } catch (error) {
      console.error("Error adding student:", error)
      toast({
        title: "Error",
        description: "Failed to add student. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Management</h1>
      <form onSubmit={handleAddStudent} className="mb-4 space-y-2">
        <Input
          type="text"
          name="name"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Student Email"
          value={newStudent.email}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="program"
          placeholder="Program"
          value={newStudent.program}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add Student</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Program</TableHead>
            <TableHead>Enrollment Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.program}</TableCell>
              <TableCell>{student.enrollmentDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
