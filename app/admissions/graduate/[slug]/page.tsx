import { DetailPage } from "@/components/content/detail-page"

export default async function GraduateAdmissionsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ")
  return <DetailPage title={title} description={`Find the graduate admissions information you need for your next step at African Business School (ABS) in Bamako.`} highlights={["Clear guidance for graduate applicants", "Program-specific information and requirements", "Support from the admissions team", "A straightforward path to submission"]} primaryHref="/admissions/graduate/apply" primaryLabel="Start your application" />
}
