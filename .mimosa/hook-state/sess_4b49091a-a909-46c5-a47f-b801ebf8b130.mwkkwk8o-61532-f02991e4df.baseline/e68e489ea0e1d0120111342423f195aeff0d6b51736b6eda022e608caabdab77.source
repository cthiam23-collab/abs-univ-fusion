// @ts-nocheck
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AssetReportsPage() {
  const [assets, setAssets] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      setLoading(true)
      const [assetsRes, categoriesRes] = await Promise.all([fetch("/api/assets"), fetch("/api/assets/categories")])

      const assetsData = await assetsRes.json()
      const categoriesData = await categoriesRes.json()

      if (assetsData.success) {
        setAssets(assetsData.data)
      }
      if (categoriesData.success) {
        setCategories(categoriesData.data)
      }
    } catch (error) {
      console.error("[v0] Error fetching data:", error)
      toast({ title: "Error", description: "Failed to fetch report data", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  // Category Distribution
  const categoryData = categories
    .map((cat: any) => ({
      name: cat.name,
      value: assets.filter((a: any) => a.category_id === cat.id).length,
    }))
    .filter((item: any) => item.value > 0)

  // Condition Distribution
  const conditionData = [
    {
      name: "Excellent",
      value: assets.filter((a: any) => a.condition === "excellent").length,
    },
    { name: "Good", value: assets.filter((a: any) => a.condition === "good").length },
    { name: "Fair", value: assets.filter((a: any) => a.condition === "fair").length },
    { name: "Poor", value: assets.filter((a: any) => a.condition === "poor").length },
  ].filter((item: any) => item.value > 0)

  // Status Distribution
  const statusData = [
    { name: "Active", value: assets.filter((a: any) => a.status === "active").length },
    { name: "Maintenance", value: assets.filter((a: any) => a.status === "maintenance").length },
    { name: "Inactive", value: assets.filter((a: any) => a.status === "inactive").length },
    { name: "Disposed", value: assets.filter((a: any) => a.status === "disposed").length },
  ].filter((item: any) => item.value > 0)

  // Value by Category
  const valueByCategory = categories
    .map((cat: any) => ({
      name: cat.name,
      value: assets
        .filter((a: any) => a.category_id === cat.id)
        .reduce((sum: number, a: any) => sum + a.purchase_price * a.quantity, 0),
    }))
    .filter((item: any) => item.value > 0)

  // Top Assets by Value
  const topAssets = assets
    .sort((a: any, b: any) => b.purchase_price * b.quantity - a.purchase_price * a.quantity)
    .slice(0, 5)

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"]

  const handleExportReport = async () => {
    try {
      const reportData = {
        generatedAt: new Date().toISOString(),
        totalAssets: assets.length,
        totalValue: assets.reduce((sum: number, a: any) => sum + a.purchase_price * a.quantity, 0),
        byCategory: categoryData,
        byCondition: conditionData,
        byStatus: statusData,
        topAssets: topAssets.map((a: any) => ({
          code: a.asset_code,
          name: a.name,
          value: a.purchase_price * a.quantity,
        })),
      }

      const csv = [
        ["Asset Report", new Date().toLocaleDateString()],
        [],
        ["Summary"],
        ["Total Assets", assets.length],
        ["Total Value", reportData.totalValue],
        [],
        ["Top 5 Assets"],
        ["Code", "Name", "Value"],
        ...topAssets.map((a: any) => [a.asset_code, a.name, a.purchase_price * a.quantity]),
        [],
        ["By Category"],
        ["Category", "Count"],
        ...categoryData.map((c: any) => [c.name, c.value]),
        [],
        ["By Condition"],
        ["Condition", "Count"],
        ...conditionData.map((c: any) => [c.name, c.value]),
      ]
        .map((row) => row.join(","))
        .join("\n")

      const blob = new Blob([csv], { type: "text/csv" })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `asset-report-${new Date().getTime()}.csv`
      a.click()

      toast({ title: "Success", description: "Report exported successfully" })
    } catch (error) {
      console.error("[v0] Error exporting:", error)
      toast({ title: "Error", description: "Failed to export report", variant: "destructive" })
    }
  }

  if (loading) return <div className="text-center py-8">Loading report data...</div>

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Asset Reports</h1>
          <p className="text-gray-600 mt-1">Comprehensive asset analytics and insights</p>
        </div>
        <Button onClick={handleExportReport}>
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assets.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₵{assets.reduce((sum: number, a: any) => sum + a.purchase_price * a.quantity, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Avg Asset Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₵
              {(
                assets.reduce((sum: number, a: any) => sum + a.purchase_price * a.quantity, 0) / assets.length || 0
              ).toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Active Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assets.filter((a: any) => a.status === "active").length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Distribution */}
        {categoryData.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Assets by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} (${value})`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {/* Condition Distribution */}
        {conditionData.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Assets by Condition</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={conditionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" name="Count" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {/* Status Distribution */}
        {statusData.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Assets by Status</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} (${value})`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {statusData.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {/* Value by Category */}
        {valueByCategory.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Asset Value by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={valueByCategory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip formatter={(value) => `₵${value.toLocaleString()}`} />
                  <Bar dataKey="value" fill="#10b981" name="Value" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Top Assets */}
      <Card>
        <CardHeader>
          <CardTitle>Top 5 Most Valuable Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topAssets.map((asset: any, index: number) => (
              <div key={asset.id} className="flex items-center justify-between pb-4 border-b last:border-b-0">
                <div className="flex-1">
                  <p className="font-semibold">
                    {index + 1}. {asset.name}
                  </p>
                  <p className="text-sm text-gray-600">{asset.asset_code}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">₵{(asset.purchase_price * asset.quantity).toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Qty: {asset.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
