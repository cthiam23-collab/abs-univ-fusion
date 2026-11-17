"use client"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

/**
 * Synchronise le contexte de langue avec la locale de l'arbre visité
 * (ex. /en/... → chrome en anglais) au montage de la page.
 */
export function LocaleSync({ locale }: { locale: "en" | "es" | "de" | "ar" }) {
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    if (language !== locale) setLanguage(locale)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale])

  return null
}
