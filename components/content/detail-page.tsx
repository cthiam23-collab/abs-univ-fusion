import Link from "next/link"
import { cookies } from "next/headers"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type DetailPageProps = {
  title: string
  description: string
  highlights: readonly string[]
  primaryHref?: string
  primaryLabel?: string
}

// Libellés internes traduits selon la langue du visiteur (cookie abs-language).
const LABELS = {
  fr: {
    kicker: "African Business School · Bamako, Mali",
    whatYouWillFind: "Ce que vous trouverez à ABS",
    back: "Retour à l’African Business School (ABS)",
    defaultPrimaryLabel: "Contact African Business School (ABS)",
  },
  en: {
    kicker: "African Business School · Bamako, Mali",
    whatYouWillFind: "What you will find at ABS",
    back: "Back to the African Business School (ABS)",
    defaultPrimaryLabel: "Contact African Business School (ABS)",
  },
  es: {
    kicker: "African Business School · Bamako, Malí",
    whatYouWillFind: "Lo que encontrará en ABS",
    back: "Volver a la African Business School (ABS)",
    defaultPrimaryLabel: "Contactar con African Business School (ABS)",
  },
  de: {
    kicker: "African Business School · Bamako, Mali",
    whatYouWillFind: "Was Sie an der ABS finden",
    back: "Zurück zur African Business School (ABS)",
    defaultPrimaryLabel: "African Business School (ABS) kontaktieren",
  },
  ar: {
    kicker: "مدرسة الأعمال الأفريقية · باماكو، مالي",
    whatYouWillFind: "ما ستلفظه في ABS",
    back: "العودة إلى African Business School (ABS)",
    defaultPrimaryLabel: "اتصل بـ African Business School (ABS)",
  },
} as const

type Lang = keyof typeof LABELS

const LOCALES: Lang[] = ["fr", "en", "es", "de", "ar"]

export async function DetailPage({ title, description, highlights, primaryHref = "/contact", primaryLabel }: DetailPageProps) {
  const cookieLang = (await cookies()).get("abs-language")?.value as Lang | undefined
  const lang: Lang = cookieLang && LOCALES.includes(cookieLang) ? cookieLang : "fr"
  const t = LABELS[lang]
  return (
    <main className="container mx-auto max-w-5xl px-4 py-12">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t.kicker}</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{description}</p>
      </div>
      <Card className="mt-10">
        <CardHeader><CardTitle>{t.whatYouWillFind}</CardTitle></CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          {highlights.map((highlight) => <div key={highlight} className="flex gap-3 rounded-lg border p-4"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" /><span>{highlight}</span></div>)}
        </CardContent>
      </Card>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild><Link href={primaryHref}>{primaryLabel ?? t.defaultPrimaryLabel}<ArrowRight data-icon="inline-end" /></Link></Button>
        <Button asChild variant="outline"><Link href="/">{t.back}</Link></Button>
      </div>
    </main>
  )
}
