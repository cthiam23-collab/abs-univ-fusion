"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface Course {
  id: string
  code: string
  name: string
  department: string
  credits: number
  instructor: string
}

export function AdminCourses() {
  const [courses, setCourses] = useState<Course[]>([])
  const [newCourse, setNewCourse] = useState({
    code: "",
    name: "",
    department: "",
    credits: 3,
    instructor: "",
  })
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      const response = await fetch("/api/admin/courses")
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewCourse((prev) => ({ ...prev, [name]: name === "credits" ? Number.parseInt(value) : value }))
  }

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditingCourse((prev) => {
      if (!prev) return prev
      return { ...prev, [name]: name === "credits" ? Number.parseInt(value, 10) || 0 : value }
    })
  }

  const handleAddCourse = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCourse),
      })
      if (!response.ok) throw new Error("Failed to add course")
      await fetchCourses()
      setNewCourse({ code: "", name: "", department: "", credits: 3, instructor: "" })
      toast({
        title: "Course Added",
        description: "The new course has been successfully added.",
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

  const handleEditCourse = async () => {
    if (!editingCourse) return
    try {
      const response = await fetch(`/api/admin/courses/${editingCourse.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingCourse),
      })
      if (!response.ok) throw new Error("Failed to update course")
      await fetchCourses()
      setEditingCourse(null)
      toast({
        title: "Course Updated",
        description: "The course has been successfully updated.",
      })
    } catch (error) {
      console.error("Error updating course:", error)
      toast({
        title: "Error",
        description: "Failed to update course. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleDeleteCourse = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/courses/${id}`, {
        method: "DELETE",
      })
      if (!response.ok) throw new Error("Failed to delete course")
      await fetchCourses()
      toast({
        title: "Course Deleted",
        description: "The course has been successfully deleted.",
      })
    } catch (error) {
      console.error("Error deleting course:", error)
      toast({
        title: "Error",
        description: "Failed to delete course. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Course Management</h1>
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
        <Input
          type="text"
          name="department"
          placeholder="Department"
          value={newCourse.department}
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
          min={1}
          max={6}
        />
        <Input
          type="text"
          name="instructor"
          placeholder="Instructor"
          value={newCourse.instructor}
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
            <TableHead>Department</TableHead>
            <TableHead>Credits</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.code}</TableCell>
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.department}</TableCell>
              <TableCell>{course.credits}</TableCell>
              <TableCell>{course.instructor}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="mr-2" onClick={() => setEditingCourse(course)}>
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Course</DialogTitle>
                      <DialogDescription>Make changes to the course details here.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <Input
                        name="code"
                        value={editingCourse?.code}
                        onChange={handleEditInputChange}
                        aria-label="Course Code"
                      />
                      <Input
                        name="name"
                        value={editingCourse?.name}
                        onChange={handleEditInputChange}
                        aria-label="Course Name"
                      />
                      <Input
                        name="department"
                        value={editingCourse?.department}
                        onChange={handleEditInputChange}
                        aria-label="Department"
                      />
                      <Input
                        name="credits"
                        type="number"
                        value={editingCourse?.credits}
                        onChange={handleEditInputChange}
                        aria-label="Credits"
                      />
                      <Input
                        name="instructor"
                        value={editingCourse?.instructor}
                        onChange={handleEditInputChange}
aria-label="Instructor"
                      />
                    </div>
                    <DialogFooter>
                      <Button type="submit" onClick={handleEditCourse}>
                        Save changes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the course and remove its data from
                        our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDeleteCourse(course.id)}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AdminCourses
