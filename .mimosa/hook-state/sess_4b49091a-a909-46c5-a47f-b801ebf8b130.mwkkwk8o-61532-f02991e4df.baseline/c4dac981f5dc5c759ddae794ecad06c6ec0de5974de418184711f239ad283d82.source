"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import en from "@/translations/en"
import es from "@/translations/es"
import de from "@/translations/de"
import ar from "@/translations/ar"
import { fr } from "@/translations/fr"

// Le site est francophone par défaut (contenus issus des documents officiels ABS).
// Le dispositif linguistique documenté est le bilinguisme français-anglais ; les
// dictionnaires es/de/ar assurent l'accessibilité internationale de la navigation.
type Language = "fr" | "en" | "es" | "de" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Dictionnaires par langue ; « en » sert de repli pour les clés manquantes.
const SOURCES: Record<Language, Record<string, unknown>> = { fr, en, es, de, ar }
const RTL_LANGUAGES: Language[] = ["ar"]

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr")

  useEffect(() => {
    const saved = document.cookie.match(/(?:^|; )abs-language=([^;]+)/)?.[1]
    if (saved && ["fr", "en", "es", "de", "ar"].includes(saved)) setLanguageState(saved as Language)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    document.cookie = `abs-language=${lang}; path=/; max-age=31536000; samesite=lax`
    document.documentElement.lang = lang
    document.documentElement.dir = RTL_LANGUAGES.includes(lang) ? "rtl" : "ltr"
  }

  const lookup = (source: Record<string, unknown>, key: string): string | undefined => {
    const value = key.split(".").reduce<unknown>((current, part) => (current && typeof current === "object" ? (current as Record<string, unknown>)[part] : undefined), source)
    if (typeof value === "string") return value
    const find = (node: unknown): string | undefined => {
      if (!node || typeof node !== "object") return undefined
      for (const [name, child] of Object.entries(node as Record<string, unknown>)) {
        if (name === key && typeof child === "string") return child
        const nested = find(child)
        if (nested) return nested
      }
      return undefined
    }
    return find(source)
  }

  const t = (key: string) => lookup(SOURCES[language], key) ?? lookup(en, key) ?? key

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
