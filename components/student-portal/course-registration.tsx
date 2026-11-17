"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Course {
  id: string
  code: string
  name: string
  credits: number
  instructor: string
  schedule: string
  capacity: number
  enrolled: number
}

export function CourseRegistration() {
  const { t } = useLanguage()
  const [availableCourses, setAvailableCourses] = useState<Course[]>([])
  const [registeredCourses, setRegisteredCourses] = useState<Course[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterDepartment, setFilterDepartment] = useState("all")
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  useEffect(() => {
    // Fetch available courses from API
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/courses")
        if (!response.ok) throw new Error("Failed to fetch courses")
        const data = await response.json()
        setAvailableCourses(data)
      } catch (error) {
        console.error("Error fetching courses:", error)
        toast({
          title: t("error"),
          description: t("coursesFetchError"),
          variant: "destructive",
        })
      }
    }

    fetchCourses()
  }, [t])

  const handleRegister = async (course: Course) => {
    try {
      const response = await fetch("/api/register-course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId: course.id }),
      })
      if (!response.ok) throw new Error("Failed to register course")
      setRegisteredCourses([...registeredCourses, course])
      setAvailableCourses(availableCourses.filter((c) => c.id !== course.id))
      toast({
        title: t("success"),
        description: `${t("courseRegistered")}: ${course.name}`,
      })
    } catch (error) {
      console.error("Error registering course:", error)
      toast({
        title: t("error"),
        description: t("courseRegistrationError"),
        variant: "destructive",
      })
    }
  }

  const filteredCourses = availableCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterDepartment === "all" || course.code.startsWith(filterDepartment)),
  )

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <div className="flex-1">
          <Label htmlFor="search">{t("searchCourses")}</Label>
          <Input
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t("searchCoursesPlaceholder")}
          />
        </div>
        <div className="w-1/3">
          <Label htmlFor="department">{t("filterByDepartment")}</Label>
          <Select value={filterDepartment} onValueChange={setFilterDepartment}>
            <SelectTrigger id="department">
              <SelectValue placeholder={t("allDepartments")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("allDepartments")}</SelectItem>
              <SelectItem value="CS">{t("computerScience")}</SelectItem>
              <SelectItem value="MATH">{t("mathematics")}</SelectItem>
              <SelectItem value="ENG">{t("engineering")}</SelectItem>
              {/* Add more departments as needed */}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t("courseCode")}</TableHead>
            <TableHead>{t("courseName")}</TableHead>
            <TableHead>{t("credits")}</TableHead>
            <TableHead>{t("instructor")}</TableHead>
            <TableHead>{t("schedule")}</TableHead>
            <TableHead>{t("availability")}</TableHead>
            <TableHead>{t("action")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCourses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.code}</TableCell>
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.credits}</TableCell>
              <TableCell>{course.instructor}</TableCell>
              <TableCell>{course.schedule}</TableCell>
              <TableCell>
                {course.enrolled}/{course.capacity}
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" onClick={() => setSelectedCourse(course)}>
                      {t("details")}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{course.name}</DialogTitle>
                      <DialogDescription>{course.code}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <p>
                        <strong>{t("instructor")}:</strong> {course.instructor}
                      </p>
                      <p>
                        <strong>{t("schedule")}:</strong> {course.schedule}
                      </p>
                      <p>
                        <strong>{t("credits")}:</strong> {course.credits}
                      </p>
                      <p>
                        <strong>{t("availability")}:</strong> {course.enrolled}/{course.capacity}
                      </p>
                    </div>
                    <Button onClick={() => handleRegister(course)}>{t("register")}</Button>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h3 className="text-xl font-semibold mt-8">{t("registeredCourses")}</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t("courseCode")}</TableHead>
            <TableHead>{t("courseName")}</TableHead>
            <TableHead>{t("credits")}</TableHead>
            <TableHead>{t("instructor")}</TableHead>
            <TableHead>{t("schedule")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {registeredCourses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.code}</TableCell>
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.credits}</TableCell>
              <TableCell>{course.instructor}</TableCell>
              <TableCell>{course.schedule}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
