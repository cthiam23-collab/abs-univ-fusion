"use client"

import type React from "react"

import { FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmptyStateProps {
  title?: string
  message?: string
  action?: {
    label: string
    onClick: () => void
  }
  icon?: React.ReactNode
}

export function EmptyState({ title = "No data found", message, action, icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="mb-4 text-muted-foreground">{icon || <FileQuestion className="h-12 w-12" />}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {message && <p className="text-sm text-muted-foreground mb-4 max-w-md">{message}</p>}
      {action && (
        <Button onClick={action.onClick} variant="outline">
          {action.label}
        </Button>
      )}
    </div>
  )
}
