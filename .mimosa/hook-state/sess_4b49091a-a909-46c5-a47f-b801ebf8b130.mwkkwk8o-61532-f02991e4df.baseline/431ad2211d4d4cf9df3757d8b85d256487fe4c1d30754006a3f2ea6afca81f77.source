"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle } from "lucide-react"

export function DisciplinaryRecords() {
  const [records, setRecords] = useState([
    { id: 1, date: "2023-03-15", incident: "Late to class", action: "Verbal warning", status: "Resolved" },
    {
      id: 2,
      date: "2023-04-02",
      incident: "Missed assignment deadline",
      action: "Written warning",
      status: "Resolved",
    },
    {
      id: 3,
      date: "2023-05-10",
      incident: "Inappropriate behavior in class",
      action: "Meeting with counselor",
      status: "Ongoing",
    },
  ])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-6 w-6" />
            Disciplinary Records
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Incident</TableHead>
                <TableHead>Action Taken</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.incident}</TableCell>
                  <TableCell>{record.action}</TableCell>
                  <TableCell>{record.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
