"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CreditCard, Download, RefreshCw } from "lucide-react"
import Image from "next/image"

export function StudentIDCard() {
  const [studentInfo, setStudentInfo] = useState({
    name: "Étudiant ABS",
    id: "ABS-2025-001",
    program: "Administration des affaires",
    validUntil: "2026-08-31",
    photo: "/images/Thiam-photo.jpg",
  })

  const [isReplacing, setIsReplacing] = useState(false)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setStudentInfo({ ...studentInfo, photo: event.target?.result as string })
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="mr-2 h-6 w-6" />
            Student ID Card
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-64 h-96 bg-primary text-primary-foreground rounded-lg p-4 flex flex-col justify-between">
              <div className="text-center">
                <Image
                  src={studentInfo.photo || "/images/Thiam-photo.jpg"}
                  alt="Student Photo"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold text-lg">{studentInfo.name}</h3>
                <p className="text-sm">{studentInfo.id}</p>
              </div>
              <div className="text-sm">
                <p>
                  <strong>Program:</strong> {studentInfo.program}
                </p>
                <p>
                  <strong>Valid Until:</strong> {studentInfo.validUntil}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Digital ID
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Replace Lost Card
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Replace Lost Card</DialogTitle>
                    <DialogDescription>Request a replacement for your lost student ID card.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="reason">Reason for Replacement</Label>
                      <Input id="reason" placeholder="e.g., Lost card, Damaged card" />
                    </div>
                    <Button onClick={() => setIsReplacing(true)}>Submit Request</Button>
                  </div>
                </DialogContent>
              </Dialog>
              {isReplacing && (
                <p className="text-sm text-muted-foreground">
                  Your replacement request has been submitted. Please check your student email for further instructions.
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
