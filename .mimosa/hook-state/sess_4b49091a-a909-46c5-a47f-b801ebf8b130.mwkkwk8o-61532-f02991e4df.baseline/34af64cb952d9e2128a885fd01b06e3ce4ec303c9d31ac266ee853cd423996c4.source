"use client"

import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ErrorStateProps {
  title?: string
  message?: string
  onRetry?: () => void
}

export function ErrorState({ title = "Error", message = "Something went wrong", onRetry }: ErrorStateProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertCircle className="h-6 w-6 text-destructive" />
          <CardTitle className="text-destructive">{title}</CardTitle>
        </div>
        <CardDescription>{message}</CardDescription>
      </CardHeader>
      {onRetry && (
        <CardContent>
          <Button onClick={onRetry} variant="outline" className="w-full bg-transparent">
            Try Again
          </Button>
        </CardContent>
      )}
    </Card>
  )
}
