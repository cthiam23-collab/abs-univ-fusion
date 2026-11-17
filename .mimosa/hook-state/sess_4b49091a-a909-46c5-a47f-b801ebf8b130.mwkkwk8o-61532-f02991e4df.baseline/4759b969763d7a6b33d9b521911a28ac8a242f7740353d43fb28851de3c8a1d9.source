import { DetailPage } from "@/components/content/detail-page"

export default async function FinancialAidDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ")
  return <DetailPage title={title} description={`Explore financial aid guidance for African Business School (ABS) students and graduate applicants in Bamako, Mali.`} highlights={["Funding guidance matched to your situation", "Scholarship and support information", "Transparent next steps and deadlines", "Assistance from the student finance team"]} primaryHref="/contact" primaryLabel="Contact student finance" />
}
