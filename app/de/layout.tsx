import { LocaleSync } from "@/components/locale-sync"

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocaleSync locale="de" />
      {children}
    </>
  )
}
