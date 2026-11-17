"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Music2, Phone } from "lucide-react"
import { ORGANIZATION, WHATSAPP_URL } from "@/lib/constants"
import { useLanguage } from "@/contexts/language-context"
import { localizedPath } from "@/lib/i18n"

const logoUrl = "/images/abs-logo.png"

// Libellés traduits via le contexte de langue (fr par défaut, en disponible).
type FooterLink = { labelKey: string; href: string }

const universiteLinks: FooterLink[] = [
  { labelKey: "nav.presentation", href: "/about" },
  { labelKey: "nav.mission", href: "/about/mission" },
  { labelKey: "nav.valeurs", href: "/about/values" },
  { labelKey: "nav.histoire", href: "/about/history" },
  { labelKey: "nav.equipe", href: "/about/faculty-staff" },
  { labelKey: "nav.actualites", href: "/about/news" },
  { labelKey: "nav.campus", href: "/campus" },
  { labelKey: "nav.visiteCampus", href: "/campus-tour" },
]

const formationsLinks: FooterLink[] = [
  { labelKey: "nav.catalogueProgrammes", href: "/academics/programs" },
  { labelKey: "nav.approchePedagogique", href: "/academics/pedagogy" },
  { labelKey: "nav.innovation", href: "/innovation" },
  { labelKey: "nav.colBachelors", href: "/academics/programs" },
  { labelKey: "nav.filiereAdmin", href: "/programs/business-administration" },
  { labelKey: "nav.filiereInfo", href: "/programs/engineering/computer-science" },
  { labelKey: "nav.filiereJc", href: "/programs/journalism-communication" },
  { labelKey: "nav.filiereRai", href: "/programs/international-relations" },
  { labelKey: "nav.filiereGcm", href: "/programs/geological-civil-mining-engineering" },
  { labelKey: "nav.tousMasters", href: "/programs/masters" },
  { labelKey: "nav.englishAcademy", href: "/english-academy" },
]

const servicesLinks: FooterLink[] = [
  { labelKey: "nav.vieEtudiante", href: "/student-life" },
  { labelKey: "nav.vieSurCampus", href: "/campus-life" },
  { labelKey: "nav.bibliotheque", href: "/library" },
  { labelKey: "nav.servicesCarrieres", href: "/career-services" },
  { labelKey: "nav.eCampus", href: "/e-campus" },
  { labelKey: "nav.portailEtudiant", href: "/student-portal" },
  { labelKey: "nav.rechercheLien", href: "/research" },
  { labelKey: "nav.anciensEleves", href: "/alumni" },
  { labelKey: "nav.etudiantsInternationaux", href: "/international-students" },
  { labelKey: "nav.aideFinanciere", href: "/financial-aid" },
]

const contactLinks: FooterLink[] = [
  { labelKey: "nav.nousContacter", href: "/contact" },
  { labelKey: "nav.faq", href: "/faq" },
  { labelKey: "nav.admissions", href: "/admissions" },
  { labelKey: "nav.candidaterEnLigne", href: "/apply" },
  { labelKey: "nav.planifierVisite", href: "/visit" },
  { labelKey: "nav.evenements", href: "/events" },
  { labelKey: "nav.annonces", href: "/announcements" },
  { labelKey: "nav.calendrierAcademique", href: "/academics/calendar" },
  { labelKey: "nav.galeriePhotos", href: "/gallery" },
]

/** Logo 𝕏 officiel (lucide ne fournit pas le glyphe X). */
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socials = [
  [Facebook, "Facebook", ORGANIZATION.social.facebook],
  [Music2, "TikTok", ORGANIZATION.social.tiktok],
  [Instagram, "Instagram", ORGANIZATION.social.instagram],
  [Linkedin, "LinkedIn", ORGANIZATION.social.linkedin],
  [XIcon, "X (Twitter)", ORGANIZATION.social.twitter],
  [MessageCircle, "WhatsApp", WHATSAPP_URL],
] as const

export function SiteFooter() {
  const { t, language } = useLanguage()
  const L = (href: string) => localizedPath(language, href)

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.85fr_0.95fr_0.85fr_0.9fr]">
          <div className="max-w-sm">
            <Link href={L("/")} className="group inline-flex items-center gap-3" aria-label="ABS — African Business School, accueil">
              <span className="flex h-11 w-[84px] items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg shadow-cyan-400/10">
                <img src={logoUrl} alt="Logo ABS — African Business School" className="h-full w-full object-contain" />
              </span>
              <span className="text-lg font-bold tracking-tight">{ORGANIZATION.name}</span>
            </Link>
            <p className="mt-6 text-sm leading-7 text-slate-400">
              {ORGANIZATION.signature} — {ORGANIZATION.signatureSecondaire}
            </p>
            <div className="mt-7 flex items-center gap-2">
              {socials.map(([Icon, label, href]) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-colors hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <FooterColumn title={t("nav.universite")} links={universiteLinks} localize={L} />
          <FooterColumn title={t("nav.formations")} links={formationsLinks} localize={L} />
          <FooterColumn title={t("nav.services")} links={servicesLinks} localize={L} />
          <FooterColumn title={`${t("nav.admissions")} & ${t("nav.contact")}`} links={contactLinks} localize={L} />
        </div>

        <div className="mt-14 border-t border-slate-800 pt-7">
          <div className="grid gap-6 text-sm text-slate-400 md:grid-cols-3">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-cyan-400" aria-hidden="true" />
              {ORGANIZATION.contact.address.street}, {ORGANIZATION.contact.address.city}, {ORGANIZATION.contact.address.country}
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-cyan-400" aria-hidden="true" />
              <a href={`tel:${ORGANIZATION.contact.phone}`} className="transition-colors hover:text-white">
                {ORGANIZATION.contact.phone}
              </a>
            </p>
            <p className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-cyan-400" aria-hidden="true" />
              <a href={`mailto:${ORGANIZATION.contact.email}`} className="transition-colors hover:text-white">
                {ORGANIZATION.contact.email}
              </a>
            </p>
            <p className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-cyan-400" aria-hidden="true" />
              <a
                href={ORGANIZATION.social.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {language === "fr"
                  ? "Suivre la chaîne WhatsApp de l’ABS"
                  : language === "es"
                    ? "Sigue el canal de WhatsApp de la ABS"
                    : language === "de"
                      ? "Folge dem WhatsApp-Kanal der ABS"
                      : language === "ar"
                        ? "تابع قناة ABS على واتساب"
                        : "Follow the ABS WhatsApp channel"}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-slate-800 pt-7 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {ORGANIZATION.name}. {t("nav.droits")}</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">{t("nav.privacy")}</Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-white">{t("nav.terms")}</Link>
            <Link href="/cookie-policy" className="transition-colors hover:text-white">{t("nav.cookies")}</Link>
          </nav>
          <Link href="/" className="inline-flex items-center gap-1 transition-colors hover:text-cyan-400">
            {t("nav.backToTop")} <ArrowUpRight className="size-3" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links, localize }: { title: string; links: FooterLink[]; localize: (href: string) => string }) {
  const { t } = useLanguage()
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">{title}</h2>
      <ul className="mt-6 flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.href + l.labelKey}>
            <Link href={localize(l.href)} className="text-sm text-slate-400 transition-colors hover:text-white">
              {t(l.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
