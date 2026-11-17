"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function MaintenancePage() {
  const [maintenance, setMaintenance] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const { toast } = useToast()

  useEffect(() => {
    fetchMaintenance()
  }, [filterType, filterStatus])

  async function fetchMaintenance() {
    try {
      setLoading(true)
      const response = await fetch("/api/assets/maintenance")
      const data = await response.json()

      if (data.success) {
        let filtered = data.data || []

        if (filterType !== "all") {
          filtered = filtered.filter((m: any) => m.maintenance_type === filterType)
        }
        if (filterStatus !== "all") {
          filtered = filtered.filter((m: any) => m.status === filterStatus)
        }

        setMaintenance(
          filtered.sort(
            (a: any, b: any) => new Date(b.maintenance_date).getTime() - new Date(a.maintenance_date).getTime(),
          ),
        )
      }
    } catch (error) {
      console.error("[v0] Error fetching maintenance:", error)
      toast({ title: "Error", description: "Failed to fetch maintenance records", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const typeColors: Record<string, string> = {
    preventive: "bg-blue-100 text-blue-800",
    corrective: "bg-orange-100 text-orange-800",
    inspection: "bg-cyan-100 text-cyan-800",
    repair: "bg-red-100 text-red-800",
    upgrade: "bg-green-100 text-green-800",
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Maintenance Records</h1>
          <p className="text-gray-600 mt-1">Track all asset maintenance activities</p>
        </div>
      </div>

      {/* Maintenance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{maintenance.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Preventive</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {maintenance.filter((m: any) => m.maintenance_type === "preventive").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Repairs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {maintenance.filter((m: any) => m.maintenance_type === "repair").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₵{maintenance.reduce((sum: number, m: any) => sum + (m.cost || 0), 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Maintenance Type</label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="preventive">Preventive</SelectItem>
                  <SelectItem value="corrective">Corrective</SelectItem>
                  <SelectItem value="inspection">Inspection</SelectItem>
                  <SelectItem value="repair">Repair</SelectItem>
                  <SelectItem value="upgrade">Upgrade</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Maintenance Records */}
      <Card>
        <CardHeader>
          <CardTitle>Maintenance Records</CardTitle>
          <CardDescription>{maintenance.length} total records</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : maintenance.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No maintenance records found</div>
          ) : (
            <div className="space-y-4">
              {maintenance.map((record: any) => (
                <div key={record.id} className="border rounded-lg p-4 hover:bg-gray-50 transition">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={typeColors[record.maintenance_type] || "bg-gray-100 text-gray-800"}>
                          {record.maintenance_type}
                        </Badge>
                        <span className="text-sm text-gray-600 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(record.maintenance_date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="font-semibold">{record.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
                        <div>
                          <p className="text-gray-600">Cost</p>
                          <p className="font-semibold">₵{(record.cost || 0).toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Performed By</p>
                          <p className="font-semibold">{record.performed_by || "N/A"}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Status</p>
                          <p className="font-semibold capitalize">{record.status}</p>
                        </div>
                        {record.next_maintenance_date && (
                          <div>
                            <p className="text-gray-600">Next Due</p>
                            <p className="font-semibold">
                              {new Date(record.next_maintenance_date).toLocaleDateString()}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
