import { ArDetailPage } from "@/app/ar/components/ar-detail-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "الدعم النفسي | ABS",
  description: "الدعم والإصغاء لطلبة ABS — African Business School: استقبال سرّي ومرافقة أكاديمية وشخصية.",
  path: "/student-resources/counseling",
  locale: "ar",
})

export default function CounselingPage() {
  return <ArDetailPage title="الدعم والإصغاء للطلبة" description="ترافق جامعة ABS طلبتها بباماكو في مسارهم: فريق يُصغي للأسئلة الشخصية كما الأكاديمية." highlights={["استقبال بسرّية تامة", "مرافقة أكاديمية وشخصية", "فريق متاح ومُصغي", "توجيه نحو المُحاور المناسبين عند الحاجة"]} primaryHref="/contact" primaryLabel="التواصل مع دعم الطلبة" />
}
