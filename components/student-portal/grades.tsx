"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/components/ui/use-toast"

interface Grade {
  courseCode: string
  courseName: string
  grade: string
  credits: number
  semester: string
  year: number
}

export function Grades() {
  const { t } = useLanguage()
  const [grades, setGrades] = useState<Grade[]>([])
  const [selectedSemester, setSelectedSemester] = useState<string>("all")
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await fetch("/api/grades")
        if (!response.ok) throw new Error("Failed to fetch grades")
        const data = await response.json()
        setGrades(data)
      } catch (error) {
        console.error("Error fetching grades:", error)
        toast({
          title: t("error"),
          description: t("gradesFetchError"),
          variant: "destructive",
        })
      }
    }

    fetchGrades()
  }, [t])

  const filteredGrades = grades.filter(
    (grade) =>
      (selectedSemester === "all" || grade.semester === selectedSemester) &&
      (selectedYear === 0 || grade.year === selectedYear),
  )

  const calculateGPA = (grades: Grade[]) => {
    const gradePoints: { [key: string]: number } = {
      A: 4,
      "A-": 3.7,
      "B+": 3.3,
      B: 3,
      "B-": 2.7,
      "C+": 2.3,
      C: 2,
      "C-": 1.7,
      D: 1,
      F: 0,
    }
    const totalPoints = grades.reduce((sum, grade) => sum + gradePoints[grade.grade] * grade.credits, 0)
    const totalCredits = grades.reduce((sum, grade) => sum + grade.credits, 0)
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00"
  }

  const gpa = calculateGPA(filteredGrades)

  const semesters = ["all", ...new Set(grades.map((grade) => grade.semester))]
  const years = [0, ...new Set(grades.map((grade) => grade.year))]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t("gradeReport")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="space-x-4">
              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t("selectSemester")} />
                </SelectTrigger>
                <SelectContent>
                  {semesters.map((semester) => (
                    <SelectItem key={semester} value={semester}>
                      {semester === "all" ? t("allSemesters") : t(semester)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedYear.toString()} onValueChange={(value) => setSelectedYear(Number(value))}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t("selectYear")} />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year === 0 ? t("allYears") : year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">{gpa}</p>
              <p className="text-sm text-muted-foreground">{t("gpa")}</p>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("courseCode")}</TableHead>
                <TableHead>{t("courseName")}</TableHead>
                <TableHead>{t("grade")}</TableHead>
                <TableHead>{t("credits")}</TableHead>
                <TableHead>{t("semester")}</TableHead>
                <TableHead>{t("year")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGrades.map((grade, index) => (
                <TableRow key={index}>
                  <TableCell>{grade.courseCode}</TableCell>
                  <TableCell>{grade.courseName}</TableCell>
                  <TableCell>{grade.grade}</TableCell>
                  <TableCell>{grade.credits}</TableCell>
                  <TableCell>{t(grade.semester)}</TableCell>
                  <TableCell>{grade.year}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("gradeDistribution")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {["A", "B", "C", "D", "F"].map((grade) => {
              const count = filteredGrades.filter((g) => g.grade.startsWith(grade)).length
              const percentage = (count / filteredGrades.length) * 100 || 0
              return (
                <div key={grade} className="flex items-center">
                  <span className="w-8">{grade}</span>
                  <Progress value={percentage} className="flex-1 mx-2" />
                  <span className="w-12 text-right">{percentage.toFixed(1)}%</span>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
