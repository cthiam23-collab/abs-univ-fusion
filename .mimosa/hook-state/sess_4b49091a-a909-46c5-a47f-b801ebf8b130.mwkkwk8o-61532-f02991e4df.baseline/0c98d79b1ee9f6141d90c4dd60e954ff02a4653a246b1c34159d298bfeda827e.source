"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function AlumniNetworkingPage() {
  const { t } = useLanguage()

  const networkingOpportunities = [
    {
      title: t("alumniDirectory"),
      description: t("alumniDirectoryDesc"),
      link: "/alumni/directory",
    },
    {
      title: t("mentorshipProgram"),
      description: t("mentorshipProgramDesc"),
      link: "/alumni/mentorship",
    },
    {
      title: t("industryConnections"),
      description: t("industryConnectionsDesc"),
      link: "/alumni/industry-connections",
    },
    {
      title: t("regionalChapters"),
      description: t("regionalChaptersDesc"),
      link: "/alumni/regional-chapters",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{t("alumniNetworking")}</h1>
      <p className="text-lg mb-8 text-center">{t("alumniNetworkingIntro")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {networkingOpportunities.map((opportunity, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{opportunity.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{opportunity.description}</p>
              <Link href={opportunity.link}>
                <Button>{t("exploreMore")}</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">{t("upcomingNetworkingEvents")}</h2>
        <p className="mb-4">{t("upcomingNetworkingEventsDesc")}</p>
        <Link href="/alumni/events">
          <Button>{t("viewEvents")}</Button>
        </Link>
      </div>
    </div>
  )
}
