import { DetailPage } from "@/components/content/detail-page"

export default async function ResearchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ")
  return <DetailPage title={title} description={`Connect with African Business School (ABS) researchers working on practical, Africa-focused solutions from Bamako.`} highlights={["Interdisciplinary expertise", "Research with regional relevance", "Options for academic and industry partners", "A clear path to begin a conversation"]} primaryHref="/contact" primaryLabel="Talk with African Business School (ABS)" />
}
