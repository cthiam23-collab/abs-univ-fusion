"use client"

import { useState, Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import dynamic from "next/dynamic"
import Image from "next/image"

const Attendance = dynamic(() => import("./attendance").then((mod) => mod.Attendance), { ssr: false })
const CourseRegistration = dynamic(() => import("./course-registration").then((mod) => mod.CourseRegistration), { ssr: false })
const GradeViewer = dynamic(() => import("./grade-viewer").then((mod) => mod.GradeViewer), { ssr: false })
const StudentProfile = dynamic(() => import("./student-profile").then((mod) => mod.StudentProfile), { ssr: false })
const FinancialAid = dynamic(() => import("./financial-aid").then((mod) => mod.FinancialAid), { ssr: false })
const CareerServices = dynamic(() => import("./career-services").then((mod) => mod.CareerServices), { ssr: false })
const AcademicAdvising = dynamic(() => import("./academic-advising").then((mod) => mod.AcademicAdvising), { ssr: false })
const CourseEvaluations = dynamic(() => import("./course-evaluations").then((mod) => mod.CourseEvaluations), { ssr: false })
const ExtracurricularActivities = dynamic(() => import("./extracurricular-activities").then((mod) => mod.ExtracurricularActivities), { ssr: false })
const CampusHousing = dynamic(() => import("./campus-housing").then((mod) => mod.CampusHousing), { ssr: false })
const StudentHealthServices = dynamic(() => import("./student-health-services").then((mod) => mod.StudentHealthServices), { ssr: false })
const AcademicCalendar = dynamic(() => import("./academic-calendar").then((mod) => mod.AcademicCalendar), { ssr: false })

function LoadingFallback() {
  return <Skeleton className="w-full h-[200px]" />
}

export function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto p-6">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Welcome to Your Student Dashboard</CardTitle>
          <CardDescription>Access all your academic information and services in one place.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/images/student-dashboard-banner.jpg"
            alt="Student Dashboard Banner"
            width={1200}
            height={300}
            className="rounded-lg"
            priority
          />
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 gap-4 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="academics">Academics</TabsTrigger>
          <TabsTrigger value="campus-life">Campus Life</TabsTrigger>
          <TabsTrigger value="support">Support Services</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2">
            <Suspense fallback={<LoadingFallback />}>
              <StudentProfile />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <Attendance />
            </Suspense>
          </div>
        </TabsContent>

        <TabsContent value="academics">
          <div className="grid gap-6 md:grid-cols-2">
            <Suspense fallback={<LoadingFallback />}>
              <CourseRegistration />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <GradeViewer />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <AcademicAdvising />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <CourseEvaluations />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <AcademicCalendar />
            </Suspense>
          </div>
        </TabsContent>

        <TabsContent value="campus-life">
          <div className="grid gap-6 md:grid-cols-2">
            <Suspense fallback={<LoadingFallback />}>
              <ExtracurricularActivities />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <CampusHousing />
            </Suspense>
          </div>
        </TabsContent>

        <TabsContent value="support">
          <div className="grid gap-6 md:grid-cols-2">
            <Suspense fallback={<LoadingFallback />}>
              <FinancialAid />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <CareerServices />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <StudentHealthServices />
            </Suspense>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default StudentDashboard
