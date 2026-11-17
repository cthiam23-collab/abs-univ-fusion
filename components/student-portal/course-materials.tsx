"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download } from "lucide-react"

interface CourseMaterial {
  id: number
  courseId: string
  title: string
  type: string
  size: string
  downloadLink?: string
}

export function CourseMaterials() {
  const [selectedCourse, setSelectedCourse] = useState("All")
  const [materials, setMaterials] = useState<CourseMaterial[]>([
    {
      id: 1,
      courseId: "BUS101",
      title: "Week 1 Lecture Notes",
      type: "PDF",
      size: "2.3 MB",
      downloadLink: "/materials/1",
    },
    {
      id: 2,
      courseId: "BUS101",
      title: "Business Plan Template",
      type: "DOCX",
      size: "1.1 MB",
      downloadLink: "/materials/2",
    },
    {
      id: 3,
      courseId: "ECO201",
      title: "Supply and Demand Slides",
      type: "PPTX",
      size: "5.7 MB",
      downloadLink: "/materials/3",
    },
    {
      id: 4,
      courseId: "ECO201",
      title: "Market Structures Reading",
      type: "PDF",
      size: "3.2 MB",
      downloadLink: "/materials/4",
    },
    {
      id: 5,
      courseId: "MAT110",
      title: "Limits and Continuity Handout",
      type: "PDF",
      size: "1.8 MB",
      downloadLink: "/materials/5",
    },
    {
      id: 6,
      courseId: "ENG105",
      title: "Essay Writing Guidelines",
      type: "PDF",
      size: "0.9 MB",
      downloadLink: "/materials/6",
    },
  ])

  const courses = [
    { id: "BUS101", name: "Introduction to Business" },
    { id: "ECO201", name: "Microeconomics" },
    { id: "MAT110", name: "Calculus I" },
    { id: "ENG105", name: "Academic Writing" },
  ]

  const filteredMaterials =
    selectedCourse === "All" ? materials : materials.filter((material) => material.courseId === selectedCourse)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Materials</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select value={selectedCourse} onValueChange={setSelectedCourse}>
            <SelectTrigger>
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Courses</SelectItem>
              {courses.map((course) => (
                <SelectItem key={course.id} value={course.id}>
                  {course.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMaterials.map((material) => (
              <TableRow key={material.id}>
                <TableCell>{material.title}</TableCell>
                <TableCell>{courses.find((course) => course.id === material.courseId)?.name}</TableCell>
                <TableCell>{material.type}</TableCell>
                <TableCell>{material.size}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" asChild disabled={!material.downloadLink}>
                    <Link href={material.downloadLink || "/student-resources/library#course-materials"}>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {!filteredMaterials.length && <p className="text-muted-foreground mt-2">No materials found.</p>}
      </CardContent>
    </Card>
  )
}
