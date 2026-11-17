"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Download } from "lucide-react"

export function Certificates() {
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      name: "Course Completion Certificate",
      course: "Introduction to Business",
      date: "2023-05-15",
      status: "Available",
    },
    { id: 2, name: "Dean's List Certificate", year: "2023", date: "2023-06-01", status: "Available" },
    { id: 3, name: "Internship Certificate", company: "Tech Corp", date: "2023-08-30", status: "Pending" },
  ])

  const downloadCertificate = (certificateId: number) => {
    // Here you would typically initiate the download process
    console.log(`Downloading certificate ${certificateId}`)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-6 w-6" />
            Your Certificates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Certificate Name</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {certificates.map((cert) => (
                <TableRow key={cert.id}>
                  <TableCell>{cert.name}</TableCell>
                  <TableCell>{cert.course || cert.year || cert.company}</TableCell>
                  <TableCell>{cert.date}</TableCell>
                  <TableCell>{cert.status}</TableCell>
                  <TableCell>
                    {cert.status === "Available" ? (
                      <Button variant="outline" size="sm" onClick={() => downloadCertificate(cert.id)}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
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
