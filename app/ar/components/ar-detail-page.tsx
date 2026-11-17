import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ArDetailPageProps = {
  title: string
  description: string
  highlights: string[]
  primaryHref?: string
  primaryLabel?: string
}

/**
 * نسخة عربية من مكوّن DetailPage (بنية وأصناف Tailwind مطابقة)، تُستخدم داخل
 * شجرة app/ar فقط لأن المكوّن المشترك يحتوي نصوصاً ثابتة بالفرنسية.
 */
export function ArDetailPage({ title, description, highlights, primaryHref = "/contact", primaryLabel = "التواصل مع جامعة ABS" }: ArDetailPageProps) {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-12">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">ABS — African Business School · باماكو، مالي</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{description}</p>
      </div>
      <Card className="mt-10">
        <CardHeader><CardTitle>ما ستجدونه في ABS</CardTitle></CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          {highlights.map((highlight) => <div key={highlight} className="flex gap-3 rounded-lg border p-4"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" /><span>{highlight}</span></div>)}
        </CardContent>
      </Card>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild><Link href={primaryHref}>{primaryLabel}<ArrowRight data-icon="inline-end" /></Link></Button>
        <Button asChild variant="outline"><Link href="/">العودة إلى جامعة ABS</Link></Button>
      </div>
    </main>
  )
}
