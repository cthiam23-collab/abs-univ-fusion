"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Clock, CheckCircle } from "lucide-react"

export function OnlineExams() {
  const [exams, setExams] = useState([
    {
      id: 1,
      name: "Midterm Exam",
      subject: "Mathematics",
      date: "2023-06-15",
      duration: "2 hours",
      status: "Upcoming",
    },
    { id: 2, name: "Final Exam", subject: "Physics", date: "2023-07-01", duration: "3 hours", status: "Upcoming" },
    { id: 3, name: "Quiz 1", subject: "Chemistry", date: "2023-05-20", duration: "30 minutes", status: "Completed" },
  ])

  const startExam = (examId: number) => {
    // Here you would typically redirect to the exam page or start the exam process
    console.log(`Starting exam ${examId}`)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-6 w-6" />
            Online Exams
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Exam Name</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exams.map((exam) => (
                <TableRow key={exam.id}>
                  <TableCell>{exam.name}</TableCell>
                  <TableCell>{exam.subject}</TableCell>
                  <TableCell>{exam.date}</TableCell>
                  <TableCell>{exam.duration}</TableCell>
                  <TableCell>{exam.status}</TableCell>
                  <TableCell>
                    {exam.status === "Upcoming" ? (
                      <Button variant="outline" size="sm" onClick={() => startExam(exam.id)}>
                        Start Exam
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Completed
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
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-6 w-6" />
            Upcoming Exams
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {exams
              .filter((exam) => exam.status === "Upcoming")
              .map((exam) => (
                <li key={exam.id} className="flex justify-between items-center">
                  <span>
                    {exam.name} - {exam.subject}
                  </span>
                  <span>{exam.date}</span>
                </li>
              ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
