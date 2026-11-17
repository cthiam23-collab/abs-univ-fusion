"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Users, DollarSign, BookOpen, Calendar, BarChart3, PieChart, Activity } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ReportsPage() {
  const { toast } = useToast()
  const [reportType, setReportType] = useState("all")
  const [reportPeriod, setReportPeriod] = useState("month")

  const reportCategories = [
    {
      title: "Academic Reports",
      icon: BookOpen,
      color: "bg-blue-500",
      reports: [
        { name: "Student Performance Report", description: "Grade analysis and academic progress" },
        { name: "Attendance Report", description: "Student attendance statistics" },
        { name: "Class Performance Report", description: "Class-wise academic metrics" },
        { name: "Exam Analysis Report", description: "Exam results and trends" },
      ],
    },
    {
      title: "Financial Reports",
      icon: DollarSign,
      color: "bg-green-500",
      reports: [
        { name: "Revenue Report", description: "Income and revenue analysis" },
        { name: "Expense Report", description: "Expenditure breakdown" },
        { name: "Fee Collection Report", description: "Payment collection status" },
        { name: "Profit & Loss Statement", description: "Financial performance overview" },
      ],
    },
    {
      title: "Administrative Reports",
      icon: Users,
      color: "bg-purple-500",
      reports: [
        { name: "Student Enrollment Report", description: "Enrollment statistics and trends" },
        { name: "Staff Performance Report", description: "Faculty evaluation and metrics" },
        { name: "Resource Utilization Report", description: "Facility and resource usage" },
        { name: "Admission Report", description: "Application and admission analysis" },
      ],
    },
    {
      title: "Custom Reports",
      icon: BarChart3,
      color: "bg-orange-500",
      reports: [
        { name: "Custom Analytics Dashboard", description: "Build your own report" },
        { name: "Comparative Analysis", description: "Year-over-year comparisons" },
        { name: "Trend Analysis", description: "Long-term trend identification" },
        { name: "Predictive Analytics", description: "Forecast future trends" },
      ],
    },
  ]

  const handleGenerateReport = (reportName: string) => {
    toast({
      title: "Report Generation Started",
      description: `Generating ${reportName}...`,
    })
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Reports & Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Generate comprehensive reports and insights</p>
        </div>
        <div className="flex gap-2">
          <Select value={reportPeriod} onValueChange={setReportPeriod}>
            <SelectTrigger className="w-[180px]">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-gray-500">Generated this month</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Reports</CardTitle>
            <Calendar className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500">Automated reports</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Custom Dashboards</CardTitle>
            <PieChart className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-gray-500">Active dashboards</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Data Points</CardTitle>
            <Activity className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M</div>
            <p className="text-xs text-gray-500">Tracked metrics</p>
          </CardContent>
        </Card>
      </div>

      {/* Report Categories */}
      {reportCategories.map((category) => (
        <Card key={category.title} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-3">
              <div className={`${category.color} p-2 rounded-lg`}>
                <category.icon className="h-5 w-5 text-white" />
              </div>
              {category.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.reports.map((report) => (
                <Card
                  key={report.name}
                  className="hover:shadow-md transition-all border-2 border-transparent hover:border-primary"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{report.name}</h4>
                        <p className="text-sm text-gray-500">{report.description}</p>
                      </div>
                      <Button size="sm" onClick={() => handleGenerateReport(report.name)} className="ml-2">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
