// @ts-nocheck
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  AlertCircle,
  CheckCircle,
  DollarSign,
  FileText,
  Award,
  TrendingUp,
  Calendar,
  Clock,
  BarChart3,
} from "lucide-react"
import {
  mockStudents,
  mockTeachers,
  mockClasses,
  mockExams,
  mockGrades,
  mockAttendance,
  mockLibraryBooks,
} from "@/lib/mock-data"
import { formatCurrency } from "@/lib/helpers"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function ComprehensiveDashboard() {
  const [timeRange, setTimeRange] = useState("month")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Calculate comprehensive statistics
  const totalStudents = mockStudents.length
  const activeStudents = mockStudents.filter((s) => s.status === "active").length
  const totalTeachers = mockTeachers.length
  const activeTeachers = mockTeachers.filter((t) => t.status === "active").length
  const totalClasses = mockClasses.length
  const totalExams = mockExams.length
  const upcomingExams = mockExams.filter((e) => new Date(e.date) > new Date()).length

  // Calculate academic performance
  const allGrades = mockGrades
  const averageGPA = allGrades.reduce((acc, g) => acc + g.gradePoint, 0) / allGrades.length
  const passRate = (allGrades.filter((g) => g.gradePoint >= 2.0).length / allGrades.length) * 100

  // Calculate attendance statistics
  const allAttendance = mockAttendance
  const overallAttendanceRate =
    (allAttendance.filter((a) => a.status === "present").length / allAttendance.length) * 100

  // Calculate financial metrics
  const totalRevenue = mockStudents.length * 5000
  const pendingFees = mockStudents.filter((s) => s.status === "active").length * 500

  // Department performance
  const departments = [
    { name: "Business Administration", students: 245, gpa: 3.2, attendance: 92, color: "bg-blue-500" },
    { name: "Computer Science", students: 189, gpa: 3.4, attendance: 89, color: "bg-green-500" },
    { name: "Engineering", students: 156, gpa: 3.1, attendance: 91, color: "bg-yellow-500" },
    { name: "Arts & Humanities", students: 123, gpa: 3.3, attendance: 88, color: "bg-purple-500" },
  ]

  // Recent activities
  const recentActivities = [
    { id: 1, type: "exam", description: "Final Exam for CS101 completed", time: "2 hours ago", icon: FileText },
    { id: 2, type: "enrollment", description: "15 new students enrolled", time: "5 hours ago", icon: Users },
    { id: 3, type: "grade", description: "Grades published for MATH201", time: "1 day ago", icon: Award },
    {
      id: 4,
      type: "attendance",
      description: "Attendance marked for all classes",
      time: "1 day ago",
      icon: CheckCircle,
    },
  ]

  // System alerts
  const alerts = [
    { id: 1, type: "warning", message: "12 students with low attendance (<75%)", severity: "medium" },
    { id: 2, type: "info", message: "8 library books overdue", severity: "low" },
    { id: 3, type: "success", message: "All exam schedules published", severity: "info" },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Enhanced Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Comprehensive Analytics Dashboard
          </h1>
          <p className="text-lg text-muted-foreground mt-1">Complete overview of your institution&apos;s performance</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => window.print()} className="shadow-sm">
            <FileText className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px] shadow-sm">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Enhanced Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalStudents}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 font-medium">+{activeStudents}</span> active students
            </p>
            <Progress value={(activeStudents / totalStudents) * 100} className="mt-3 h-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average GPA</CardTitle>
            <Award className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{averageGPA.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 font-medium">+0.2</span> from last semester
            </p>
            <Progress value={(averageGPA / 4) * 100} className="mt-3 h-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            <CheckCircle className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{overallAttendanceRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 font-medium">+2.3%</span> from last month
            </p>
            <Progress value={overallAttendanceRate} className="mt-3 h-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{formatCurrency(totalRevenue)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-yellow-600 font-medium">{formatCurrency(pendingFees)}</span> pending
            </p>
            <Progress value={((totalRevenue - pendingFees) / totalRevenue) * 100} className="mt-3 h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Tabs for different views */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 h-12">
          <TabsTrigger value="overview" className="text-sm font-medium">
            Overview
          </TabsTrigger>
          <TabsTrigger value="academic" className="text-sm font-medium">
            Academic Performance
          </TabsTrigger>
          <TabsTrigger value="financial" className="text-sm font-medium">
            Financial
          </TabsTrigger>
          <TabsTrigger value="operations" className="text-sm font-medium">
            Operations
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Today's Overview */}
            <Card className="col-span-2 shadow-lg">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Today&apos;s Overview
                </CardTitle>
                <CardDescription>Real-time statistics for today</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">Classes Today</p>
                    <p className="text-3xl font-bold">24</p>
                    <p className="text-xs text-green-600">All scheduled</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">Exams Today</p>
                    <p className="text-3xl font-bold">{upcomingExams}</p>
                    <p className="text-xs text-blue-600">In progress</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">Attendance Marked</p>
                    <p className="text-3xl font-bold">18/24</p>
                    <p className="text-xs text-yellow-600">6 pending</p>
                  </div>
                </div>
                <div className="pt-4 border-t space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Daily Progress</span>
                    <span className="text-sm font-bold text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* System Alerts */}
            <Card className="shadow-lg">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  System Alerts
                </CardTitle>
                <CardDescription>Important notifications</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border hover:shadow-md transition-shadow"
                  >
                    <AlertCircle
                      className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                        alert.severity === "medium"
                          ? "text-yellow-600"
                          : alert.severity === "low"
                            ? "text-blue-600"
                            : "text-green-600"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Department Performance */}
          <Card className="shadow-lg">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Department Performance
              </CardTitle>
              <CardDescription>Comparative analysis across departments</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {departments.map((dept) => (
                  <div key={dept.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">{dept.name}</span>
                      <div className="flex gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {dept.students} students
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          GPA: {dept.gpa}
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          {dept.attendance}%
                        </span>
                      </div>
                    </div>
                    <Progress value={dept.attendance} className="h-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="shadow-lg">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Activities
              </CardTitle>
              <CardDescription>Latest system events and updates</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon
                  return (
                    <div
                      key={activity.id}
                      className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition-shadow"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{activity.description}</p>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Academic Performance Tab */}
        <TabsContent value="academic" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-lg">
              <CardHeader className="border-b">
                <CardTitle>Grade Distribution</CardTitle>
                <CardDescription>Student performance breakdown</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    { grade: "A (90-100%)", count: 245, percentage: 35, color: "bg-green-500" },
                    { grade: "B (80-89%)", count: 189, percentage: 27, color: "bg-blue-500" },
                    { grade: "C (70-79%)", count: 156, percentage: 22, color: "bg-yellow-500" },
                    { grade: "D (60-69%)", count: 78, percentage: 11, color: "bg-orange-500" },
                    { grade: "F (<60%)", count: 35, percentage: 5, color: "bg-red-500" },
                  ].map((item) => (
                    <div key={item.grade} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold">{item.grade}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{item.count} students</span>
                          <span className="text-sm font-bold">{item.percentage}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-secondary h-3 rounded-full overflow-hidden">
                        <div
                          className={`${item.color} h-3 rounded-full transition-all`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="border-b">
                <CardTitle>Pass/Fail Rates</CardTitle>
                <CardDescription>Overall academic success metrics</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Pass Rate
                    </span>
                    <span className="text-lg font-bold text-green-600">{passRate.toFixed(1)}%</span>
                  </div>
                  <Progress value={passRate} className="h-4 bg-green-100" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      Fail Rate
                    </span>
                    <span className="text-lg font-bold text-red-600">{(100 - passRate).toFixed(1)}%</span>
                  </div>
                  <Progress value={100 - passRate} className="h-4 bg-red-100" />
                </div>
                <div className="pt-6 border-t">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground font-medium">Highest GPA</p>
                      <p className="text-3xl font-bold text-green-600">4.0</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground font-medium">Lowest GPA</p>
                      <p className="text-3xl font-bold text-red-600">1.2</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="border-b">
              <CardTitle>Attendance Patterns</CardTitle>
              <CardDescription>Weekly attendance trends</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, index) => {
                  const rate = 90 - index * 2
                  return (
                    <div key={day} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold">{day}</span>
                        <span className="text-sm font-bold">{rate}%</span>
                      </div>
                      <Progress value={rate} className="h-3" />
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Financial Tab */}
        <TabsContent value="financial" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-l-4 border-l-green-500 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{formatCurrency(totalRevenue)}</div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="text-green-600 font-medium">+12.5%</span> from last period
                </p>
                <Progress value={85} className="mt-4 h-2" />
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  Pending Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{formatCurrency(pendingFees)}</div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="text-yellow-600 font-medium">-3.2%</span> collection rate
                </p>
                <Progress value={92.5} className="mt-4 h-2" />
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Collection Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">92.5%</div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="text-green-600 font-medium">+1.8%</span> improvement
                </p>
                <Progress value={92.5} className="mt-4 h-2" />
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="border-b">
              <CardTitle>Revenue by Department</CardTitle>
              <CardDescription>Financial contribution analysis</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {departments.map((dept) => {
                  const revenue = dept.students * 5000
                  const percentage = (revenue / totalRevenue) * 100
                  return (
                    <div key={dept.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold">{dept.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">{formatCurrency(revenue)}</span>
                          <span className="text-sm font-bold">{percentage.toFixed(1)}%</span>
                        </div>
                      </div>
                      <Progress value={percentage} className="h-3" />
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Operations Tab */}
        <TabsContent value="operations" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Active Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{totalClasses}</div>
                <p className="text-xs text-muted-foreground mt-1">Running sessions</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Teachers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {activeTeachers}/{totalTeachers}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Active/Total</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Library Books</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{mockLibraryBooks.length}</div>
                <p className="text-xs text-muted-foreground mt-1">Total collection</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Upcoming Exams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{upcomingExams}</div>
                <p className="text-xs text-muted-foreground mt-1">This month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-lg">
              <CardHeader className="border-b">
                <CardTitle>Class Capacity Utilization</CardTitle>
                <CardDescription>Room occupancy rates</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {mockClasses.slice(0, 5).map((cls) => {
                    const utilization = (cls.enrolled / cls.capacity) * 100
                    return (
                      <div key={cls.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold">{cls.name}</span>
                          <span className="text-sm font-medium">
                            {cls.enrolled}/{cls.capacity} ({utilization.toFixed(0)}%)
                          </span>
                        </div>
                        <div className="w-full bg-secondary h-3 rounded-full overflow-hidden">
                          <div
                            className={`h-3 rounded-full transition-all ${
                              utilization > 90 ? "bg-red-600" : utilization > 70 ? "bg-yellow-600" : "bg-green-600"
                            }`}
                            style={{ width: `${utilization}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="border-b">
                <CardTitle>Teacher Workload</CardTitle>
                <CardDescription>Classes per teacher</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {mockTeachers.slice(0, 5).map((teacher) => {
                    const workload = Math.floor(Math.random() * 5) + 3
                    const maxWorkload = 8
                    const percentage = (workload / maxWorkload) * 100
                    return (
                      <div key={teacher.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold">{teacher.name}</span>
                          <span className="text-sm font-medium">
                            {workload}/{maxWorkload} classes
                          </span>
                        </div>
                        <div className="w-full bg-secondary h-3 rounded-full overflow-hidden">
                          <div
                            className={`h-3 rounded-full transition-all ${
                              percentage > 80 ? "bg-red-600" : percentage > 60 ? "bg-yellow-600" : "bg-green-600"
                            }`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
