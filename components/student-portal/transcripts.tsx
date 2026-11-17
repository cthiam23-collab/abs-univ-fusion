"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Download } from "lucide-react"

export function Transcripts() {
  const [transcripts, setTranscripts] = useState([
    { id: 1, semester: "Fall 2022", date: "2022-12-20", status: "Available", link: "/transcripts/1" },
    { id: 2, semester: "Spring 2023", date: "2023-05-25", status: "Available", link: "/transcripts/2" },
    { id: 3, semester: "Summer 2023", date: "2023-08-15", status: "Pending", link: "" },
  ])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-6 w-6" />
            Your Transcripts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Semester</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transcripts.map((transcript) => (
                <TableRow key={transcript.id}>
                  <TableCell>{transcript.semester}</TableCell>
                  <TableCell>{transcript.date}</TableCell>
                  <TableCell>{transcript.status}</TableCell>
                  <TableCell>
                    {transcript.status === "Available" ? (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={transcript.link}>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
                        Pending
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
