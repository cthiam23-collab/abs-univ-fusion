import type { ReactNode } from "react"
import { LocaleSync } from "@/components/locale-sync"

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LocaleSync locale="en" />
      {children}
    </>
  )
}
