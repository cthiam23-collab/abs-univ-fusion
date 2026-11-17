import { DetailPage } from "@/components/content/detail-page"

export default async function GraduateProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ")
  return <DetailPage title={title} description={`Explore this graduate study pathway at African Business School (ABS), designed to prepare leaders for Mali, Africa, and the global economy.`} highlights={["Practice-led graduate learning", "Faculty mentorship and professional networks", "Flexible pathways for ambitious professionals", "Application guidance from graduate admissions"]} primaryHref="/admissions/graduate/apply" primaryLabel="Start your application" />
}
