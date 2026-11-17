import { DetailPage } from "@/components/content/detail-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Services de santé | ABS",
  description: "Services de santé accessibles aux étudiants de ABS — African Business School.",
  path: "/student-resources/health-services",
})

export default function HealthServicesPage() {
  return <DetailPage title="Student Health Services" description="Practical health guidance and support that help ABS students stay well and focused on their studies." highlights={["Health guidance on campus", "Wellbeing education", "Trusted referral partners", "Support for international students"]} primaryHref="/contact" primaryLabel="Contact Student Support" />
}
