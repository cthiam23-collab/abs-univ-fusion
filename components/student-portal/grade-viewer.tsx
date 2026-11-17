"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

interface Grade {
  courseCode: string
  courseName: string
  grade: string
  credits: number
  semester?: string
}

export function GradeViewer() {
  const [grades, setGrades] = useState<Grade[]>([])
  const [selectedSemester, setSelectedSemester] = useState<string>("All")
  const { toast } = useToast()

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await fetch("/api/grades")
        if (!response.ok) {
          throw new Error("Failed to fetch grades")
        }
        const data = await response.json()
        setGrades(data)
      } catch (error) {
        console.error("Error fetching grades:", error)
        toast({
          title: "Error",
          description: "Failed to fetch grades. Please try again later.",
          variant: "destructive",
        })
      }
    }

    fetchGrades()
  }, [toast])

  const semesters = ["All", ...new Set(grades.map((grade) => (grade.semester ?? "Unknown")))]

  const filteredGrades =
    selectedSemester === "All" ? grades : grades.filter((grade) => (grade.semester ?? "Unknown") === selectedSemester)

  const calculateGPA = (grades: Grade[]) => {
    const totalCredits = grades.reduce((sum, grade) => sum + grade.credits, 0)
    const totalGradePoints = grades.reduce((sum, grade) => {
      const gradePoint = getGradePoint(grade.grade)
      return sum + gradePoint * grade.credits
    }, 0)
    return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : "N/A"
  }

  const getGradePoint = (grade: string) => {
    const gradePoints: { [key: string]: number } = {
      A: 4.0,
      "A-": 3.7,
      "B+": 3.3,
      B: 3.0,
      "B-": 2.7,
      "C+": 2.3,
      C: 2.0,
      "C-": 1.7,
      "D+": 1.3,
      D: 1.0,
      F: 0.0,
    }
    return gradePoints[grade] || 0
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Grade Viewer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                {semesters.map((semester) => (
                  <SelectItem key={semester} value={semester}>
                    {semester}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="text-right">
              <p className="text-2xl font-bold">{calculateGPA(filteredGrades)}</p>
              <p className="text-sm text-muted-foreground">GPA</p>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course Code</TableHead>
                <TableHead>Course Name</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Credits</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGrades.map((grade, index) => (
                <TableRow key={index}>
                  <TableCell>{grade.courseCode}</TableCell>
                  <TableCell>{grade.courseName}</TableCell>
                  <TableCell>{grade.grade}</TableCell>
                  <TableCell>{grade.credits}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Image src="/images/grade-viewer.jpg" alt="Grade Viewer" width={800} height={400} className="rounded-lg" />
    </div>
  )
}

export default GradeViewer
