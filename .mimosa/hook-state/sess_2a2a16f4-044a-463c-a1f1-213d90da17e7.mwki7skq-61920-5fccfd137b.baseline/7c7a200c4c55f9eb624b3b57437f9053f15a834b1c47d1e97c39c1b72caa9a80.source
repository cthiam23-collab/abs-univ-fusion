// @ts-nocheck
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { useToast } from "@/hooks/use-toast"

export default function DepreciationPage() {
  const [assets, setAssets] = useState<any[]>([])
  const [depreciation, setDepreciation] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      setLoading(true)
      const response = await fetch("/api/assets")
      const data = await response.json()

      if (data.success) {
        setAssets(data.data)

        // Calculate depreciation for all assets
        const allDepreciation: any[] = []
        for (const asset of data.data) {
          try {
            const depResponse = await fetch(`/api/assets/depreciation?asset_id=${asset.id}`)
            const depData = await depResponse.json()
            if (depData.success) {
              allDepreciation.push(...(depData.data || []))
            }
          } catch (error) {
            console.error("[v0] Error fetching depreciation for asset:", error)
          }
        }
        setDepreciation(allDepreciation)
      }
    } catch (error) {
      console.error("[v0] Error fetching data:", error)
      toast({ title: "Error", description: "Failed to fetch depreciation data", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  // Calculate depreciation summary
  const deprecationSummary = assets.map((asset: any) => {
    const totalDepreciation = depreciation
      .filter((d: any) => d.asset_id === asset.id)
      .reduce((sum: number, d: any) => sum + (d.depreciation_amount || 0), 0)
    const currentValue = asset.purchase_price - totalDepreciation
    return {
      name: asset.name,
      originalValue: asset.purchase_price,
      totalDepreciation,
      currentValue,
      deprecationPercentage: (totalDepreciation / asset.purchase_price) * 100,
    }
  })

  const chartData = depreciation
    .sort((a: any, b: any) => a.depreciation_year - b.depreciation_year)
    .reduce((acc: any, curr: any) => {
      const existing = acc.find((item: any) => item.year === curr.depreciation_year)
      if (existing) {
        existing.amount += curr.depreciation_amount
      } else {
        acc.push({ year: curr.depreciation_year, amount: curr.depreciation_amount })
      }
      return acc
    }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Asset Depreciation</h1>
        <p className="text-gray-600 mt-1">Track and analyze asset value depreciation</p>
      </div>

      {/* Summary Stats */}
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
            <CardTitle className="text-sm font-medium">Original Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₵{assets.reduce((sum: number, a: any) => sum + a.purchase_price, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Depreciation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₵{depreciation.reduce((sum: number, d: any) => sum + (d.depreciation_amount || 0), 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Current Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₵
              {(
                assets.reduce((sum: number, a: any) => sum + a.purchase_price, 0) -
                depreciation.reduce((sum: number, d: any) => sum + (d.depreciation_amount || 0), 0)
              ).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      {chartData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Annual Depreciation Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => `₵${value.toLocaleString()}`} />
                <Bar dataKey="amount" fill="#3b82f6" name="Depreciation Amount" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Depreciation Details Table */}
      <Card>
        <CardHeader>
          <CardTitle>Asset Depreciation Details</CardTitle>
          <CardDescription>Detailed depreciation for each asset</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : deprecationSummary.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No depreciation data available</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Asset</th>
                    <th className="text-right py-3 px-4 font-semibold">Original Value</th>
                    <th className="text-right py-3 px-4 font-semibold">Total Depreciation</th>
                    <th className="text-right py-3 px-4 font-semibold">Current Value</th>
                    <th className="text-right py-3 px-4 font-semibold">Depreciation %</th>
                  </tr>
                </thead>
                <tbody>
                  {deprecationSummary.map((item: any, index: number) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{item.name}</td>
                      <td className="text-right py-3 px-4">₵{item.originalValue.toLocaleString()}</td>
                      <td className="text-right py-3 px-4">₵{item.totalDepreciation.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 font-semibold">₵{item.currentValue.toLocaleString()}</td>
                      <td className="text-right py-3 px-4">{item.deprecationPercentage.toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
