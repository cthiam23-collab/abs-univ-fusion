"use client"

import * as React from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Set light theme by default and remove any dark class
    document.documentElement.classList.remove("dark")
    document.documentElement.setAttribute("data-theme", "light")
  }, [])

  return <>{children}</>
}
