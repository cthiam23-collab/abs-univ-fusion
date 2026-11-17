"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

interface Course {
  id: string
  code: string
  name: string
  description: string
  credits: number
  department: string
}

export default function CurriculumPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [newCourse, setNewCourse] = useState({ code: "", name: "", description: "", credits: 0, department: "" })
  const { toast } = useToast()

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      const response = await fetch("/api/admin/curriculum")
      if (!response.ok) throw new Error("Failed to fetch courses")
      const data = await response.json()
      setCourses(data)
    } catch (error) {
      console.error("Error fetching courses:", error)
      toast({
        title: "Error",
        description: "Failed to fetch courses. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewCourse((prev) => ({ ...prev, [name]: name === "credits" ? Number.parseInt(value) : value }))
  }

  const handleAddCourse = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/curriculum", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCourse),
      })
      if (!response.ok) throw new Error("Failed to add course")
      await fetchCourses()
      setNewCourse({ code: "", name: "", description: "", credits: 0, department: "" })
      toast({
        title: "Course Added",
        description: "The new course has been successfully added to the curriculum.",
      })
    } catch (error) {
      console.error("Error adding course:", error)
      toast({
        title: "Error",
        description: "Failed to add course. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Curriculum Management</h1>
      <form onSubmit={handleAddCourse} className="mb-4 space-y-2">
        <Input
          type="text"
          name="code"
          placeholder="Course Code"
          value={newCourse.code}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="name"
          placeholder="Course Name"
          value={newCourse.name}
          onChange={handleInputChange}
          required
        />
        <Textarea
          name="description"
          placeholder="Course Description"
          value={newCourse.description}
          onChange={handleInputChange}
          required
        />
        <Input
          type="number"
          name="credits"
          placeholder="Credits"
          value={newCourse.credits}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="department"
          placeholder="Department"
          value={newCourse.department}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add Course</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Credits</TableHead>
            <TableHead>Department</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.code}</TableCell>
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.description}</TableCell>
              <TableCell>{course.credits}</TableCell>
              <TableCell>{course.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
