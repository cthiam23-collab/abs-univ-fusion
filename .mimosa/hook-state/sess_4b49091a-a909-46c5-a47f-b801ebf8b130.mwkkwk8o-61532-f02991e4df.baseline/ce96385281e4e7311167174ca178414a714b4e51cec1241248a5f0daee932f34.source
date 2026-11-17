"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function AuthError({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  const router = useRouter()
  const error = searchParams?.error || "An error occurred during authentication"

  useEffect(() => {
    // Log the error for debugging
    console.error("Auth error:", error)
  }, [error])

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12">
      <Alert variant="destructive" className="max-w-md">
        <AlertTitle>Authentication Error</AlertTitle>
        <AlertDescription>
          {error === "Configuration"
            ? "There is a problem with the server configuration."
            : error === "AccessDenied"
              ? "You do not have permission to sign in."
              : error === "Verification"
                ? "The verification link is no longer valid."
                : "An error occurred during the authentication process."}
        </AlertDescription>
      </Alert>
      <div className="mt-6 space-x-4">
        <Button onClick={() => router.push("/login")}>Return to Login</Button>
        <Button variant="outline" onClick={() => router.push("/")}>
          Go to Homepage
        </Button>
      </div>
    </div>
  )
}
