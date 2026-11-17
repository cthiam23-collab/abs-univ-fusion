// Helper functions for the admin system

export function searchFilter<T>(items: T[], searchTerm: string, fields: (keyof T)[]): T[] {
  if (!searchTerm) return items

  const lowerSearch = searchTerm.toLowerCase()
  return items.filter((item) =>
    fields.some((field) => {
      const value = item[field]
      return value && String(value).toLowerCase().includes(lowerSearch)
    }),
  )
}

export function getStatusBadgeColor(status: string): string {
  const statusColors: Record<string, string> = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-gray-100 text-gray-800",
    graduated: "bg-blue-100 text-blue-800",
    suspended: "bg-red-100 text-red-800",
    pending: "bg-yellow-100 text-yellow-800",
    completed: "bg-green-100 text-green-800",
    scheduled: "bg-blue-100 text-blue-800",
    cancelled: "bg-red-100 text-red-800",
    present: "bg-green-100 text-green-800",
    absent: "bg-red-100 text-red-800",
    late: "bg-yellow-100 text-yellow-800",
    pass: "bg-green-100 text-green-800",
    fail: "bg-red-100 text-red-800",
    available: "bg-green-100 text-green-800",
    borrowed: "bg-yellow-100 text-yellow-800",
    reserved: "bg-blue-100 text-blue-800",
    "on-leave": "bg-yellow-100 text-yellow-800",
    terminated: "bg-red-100 text-red-800",
    resigned: "bg-gray-100 text-gray-800",
  }
  return statusColors[status.toLowerCase()] || "bg-gray-100 text-gray-800"
}

export function exportToCSV(data: any[], filename: string): void {
  if (!data || data.length === 0) return

  const headers = Object.keys(data[0])
  const csvContent = [
    headers.join(","),
    ...data.map((row) =>
      headers
        .map((header) => {
          const value = row[header]
          return typeof value === "string" && value.includes(",") ? `"${value}"` : value
        })
        .join(","),
    ),
  ].join("\n")

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const link = document.createElement("a")
  const url = URL.createObjectURL(blob)
  link.setAttribute("href", url)
  link.setAttribute("download", `${filename}_${new Date().toISOString().split("T")[0]}.csv`)
  link.style.visibility = "hidden"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function formatDateTime(date: string | Date, time?: string): string {
  const d = new Date(date)
  const dateStr = d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  if (time) {
    return `${dateStr} ${formatTime(time)}`
  }
  return dateStr
}

export function formatCurrency(amount: number | string): string {
  const num = typeof amount === "string" ? Number.parseFloat(amount) : amount
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(num)
}

export function exportToPDF(data: any[], filename: string): void {
  // Simple PDF export using a data structure
  const csvContent = [
    Object.keys(data[0]).join(","),
    ...data.map((row) =>
      Object.keys(row)
        .map((key) => {
          const value = row[key]
          return typeof value === "string" && value.includes(",") ? `"${value}"` : value
        })
        .join(","),
    ),
  ].join("\n")

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const link = document.createElement("a")
  const url = URL.createObjectURL(blob)
  link.setAttribute("href", url)
  link.setAttribute("download", `${filename}_${new Date().toISOString().split("T")[0]}.pdf`)
  link.style.visibility = "hidden"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":")
  const hour = Number.parseInt(hours)
  const ampm = hour >= 12 ? "PM" : "AM"
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minutes} ${ampm}`
}

export function calculatePercentage(obtained: number, total: number): string {
  return ((obtained / total) * 100).toFixed(2)
}

export function getLetterGrade(percentage: number): string {
  if (percentage >= 90) return "A+"
  if (percentage >= 85) return "A"
  if (percentage >= 80) return "A-"
  if (percentage >= 75) return "B+"
  if (percentage >= 70) return "B"
  if (percentage >= 65) return "B-"
  if (percentage >= 60) return "C+"
  if (percentage >= 55) return "C"
  if (percentage >= 50) return "C-"
  return "F"
}

export function getGradePoint(letterGrade: string): string {
  const gradePoints: Record<string, string> = {
    "A+": "4.0",
    A: "3.7",
    "A-": "3.3",
    "B+": "3.0",
    B: "2.7",
    "B-": "2.3",
    "C+": "2.0",
    C: "1.7",
    "C-": "1.3",
    F: "0.0",
  }
  return gradePoints[letterGrade] || "0.0"
}

export function generateId(prefix: string, count: number): string {
  return `${prefix}-2025-${String(count + 1).padStart(3, "0")}`
}
