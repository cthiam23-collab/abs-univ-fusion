import { cookies } from "next/headers"
import { DetailPage } from "@/components/content/detail-page"

// Contenu du bloc « points forts », traduit selon la langue du visiteur
// (cookie abs-language, cohérent avec DetailPage).
const HIGHLIGHTS = {
  fr: [
    "Un accompagnement clair par l’équipe de l’African Business School (ABS)",
    "Des informations pratiques pour les étudiants et les familles",
    "Un appui adapté à notre campus de Bamako",
    "Une étape directe, sans impasse",
  ],
  en: [
    "Clear guidance from the African Business School (ABS) team",
    "Practical information for students and families",
    "Support tailored to our Bamako campus",
    "A direct next step with no dead ends",
  ],
  es: [
    "El acompañamiento claro del equipo de la African Business School (ABS)",
    "Información práctica para estudiantes y familias",
    "Un apoyo adaptado a nuestro campus de Bamako",
    "Un paso directo, sin callejones sin salida",
  ],
  de: [
    "Klare Begleitung durch das Team der African Business School (ABS)",
    "Praktische Informationen für Studierende und Familien",
    "Unterstützung, zugeschnitten auf unseren Campus in Bamako",
    "Ein direkter nächster Schritt ohne Sackgassen",
  ],
  ar: [
    "مواكبة واضحة من فريق مدرسة الأعمال الأفريقية (ABS)",
    "معلومات عملية للطلبة والأسر",
    "دعم ملائم لحرمنا الجامعي في باماكو",
    "خطوة مباشرة دون طرق مسدودة",
  ],
} as const

const PRIMARY_LABELS = {
  fr: "Continuer avec l’African Business School (ABS)",
  en: "Continue with African Business School (ABS)",
  es: "Continuar con la African Business School (ABS)",
  de: "Weiter mit der African Business School (ABS)",
  ar: "متابعة مع African Business School (ABS)",
} as const

export async function CtaDestination({ title, description, primaryHref = "/contact" }: { title: string; description: string; primaryHref?: string }) {
  const cookieLang = (await cookies()).get("abs-language")?.value as keyof typeof HIGHLIGHTS | undefined
  const lang = cookieLang && cookieLang in HIGHLIGHTS ? cookieLang : "fr"
  return (
    <DetailPage
      title={title}
      description={description}
      highlights={HIGHLIGHTS[lang]}
      primaryHref={primaryHref}
      primaryLabel={PRIMARY_LABELS[lang]}
    />
  )
}
