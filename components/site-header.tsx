"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { Logo } from "@/components/common/logo"
import { useLanguage } from "@/contexts/language-context"
import { localizedPath } from "@/lib/i18n"
import { cn } from "@/lib/utils"

type Link = { labelKey: string; href: string }

// Plan du site complet — toutes les routes publiques existantes de l'application.
// Les libellés passent par le système de traduction (fr par défaut, en disponible).
const universiteLinks: Link[] = [
  { labelKey: "nav.presentation", href: "/about" },
  { labelKey: "nav.mission", href: "/about/mission" },
  { labelKey: "nav.valeurs", href: "/about/values" },
  { labelKey: "nav.histoire", href: "/about/history" },
  { labelKey: "nav.equipe", href: "/about/faculty-staff" },
  { labelKey: "nav.gouvernance", href: "/about/governance" },
  { labelKey: "nav.motDirectrice", href: "/about/mot-de-la-directrice" },
  { labelKey: "nav.actualites", href: "/about/news" },
  { labelKey: "nav.galerie", href: "/about/gallery" },
  { labelKey: "nav.campus", href: "/campus" },
  { labelKey: "nav.visiteCampus", href: "/campus-tour" },
  { labelKey: "nav.planCampus", href: "/campus/map" },
]

const bachelors: Link[] = [
  { labelKey: "nav.filiereAdmin", href: "/programs/business-administration" },
  { labelKey: "nav.filiereRai", href: "/programs/international-relations" },
  { labelKey: "nav.filiereJc", href: "/programs/journalism-communication" },
  { labelKey: "nav.filiereInfo", href: "/programs/engineering/computer-science" },
  { labelKey: "nav.filiereGcm", href: "/programs/geological-civil-mining-engineering" },
]

const masters: Link[] = [
  { labelKey: "nav.tousMasters", href: "/programs/masters" },
  { labelKey: "nav.mba", href: "/programs/masters/mba" },
  { labelKey: "nav.managementProjets", href: "/programs/masters/project-management" },
  { labelKey: "nav.managementInternational", href: "/programs/masters/international-business" },
  // Les 13 Masters avec fiche dédiée générée dynamiquement (lib/masters-data.ts).
  { labelKey: "nav.masterFif", href: "/programs/masters/finance-entreprise-ingenierie-financiere" },
  { labelKey: "nav.masterFinIslamique", href: "/programs/masters/finance-islamique" },
  { labelKey: "nav.masterAcg", href: "/programs/masters/audit-controle-gestion" },
  { labelKey: "nav.masterScm", href: "/programs/masters/supply-chain-management" },
  { labelKey: "nav.masterDdrse", href: "/programs/masters/developpement-durable-rse" },
  { labelKey: "nav.masterGmp", href: "/programs/masters/gouvernance-marches-publics" },
  { labelKey: "nav.masterMrh", href: "/programs/masters/management-rh" },
  { labelKey: "nav.masterInfo", href: "/programs/masters/ingenierie-informatique" },
  { labelKey: "nav.masterGmin", href: "/programs/masters/genie-minier" },
  { labelKey: "nav.masterJou", href: "/programs/masters/journalisme" },
  { labelKey: "nav.masterRi", href: "/programs/masters/relations-affaires-internationales" },
  { labelKey: "nav.masterEnt", href: "/programs/masters/entrepreneuriat" },
  { labelKey: "nav.masterDef", href: "/programs/masters/strategie-politique-defense" },
]

const academicsLinks: Link[] = [
  { labelKey: "nav.catalogueProgrammes", href: "/academics/programs" },
  { labelKey: "nav.approchePedagogique", href: "/academics/pedagogy" },
  { labelKey: "nav.catalogueCours", href: "/academics/course-catalog" },
  { labelKey: "nav.departements", href: "/academics/departments" },
  { labelKey: "nav.calendrierAcademique", href: "/academics/calendar" },
  { labelKey: "nav.innovation", href: "/innovation" },
  { labelKey: "nav.englishAcademy", href: "/english-academy" },
]

const admissionsLinks: Link[] = [
  { labelKey: "nav.conditionsAdmission", href: "/admissions" },
  { labelKey: "nav.admissionBachelor", href: "/admissions/undergraduate" },
  { labelKey: "nav.admissionMaster", href: "/admissions/graduate" },
  { labelKey: "nav.dossierMaster", href: "/admissions/graduate/requirements" },
  { labelKey: "nav.etudiantsInternationaux", href: "/admissions/international" },
  { labelKey: "nav.candidaterEnLigne", href: "/apply" },
  { labelKey: "nav.candidatureBachelor", href: "/apply/undergraduate" },
  { labelKey: "nav.candidatureInternationale", href: "/apply/international" },
  { labelKey: "nav.aideFinanciere", href: "/financial-aid" },
  { labelKey: "nav.annonces", href: "/announcements" },
]

// Services numériques de l'université (rattachés à la section Université)
const universiteServicesLinks: Link[] = [
  { labelKey: "nav.eCampus", href: "/e-campus" },
  { labelKey: "nav.plateformeLms", href: "/e-campus/lms" },
  { labelKey: "nav.classesVirtuelles", href: "/e-campus/virtual-classrooms" },
  { labelKey: "nav.supportInfo", href: "/e-campus/it-support" },
  { labelKey: "nav.portailEtudiant", href: "/student-portal" },
  { labelKey: "nav.ressourcesEtudiantes", href: "/student-resources" },
]

const vieEtudianteLinks: Link[] = [
  { labelKey: "nav.vieSurCampus", href: "/campus-life" },
  { labelKey: "nav.restauration", href: "/campus-life/dining" },
  { labelKey: "nav.logement", href: "/campus-life/housing" },
  { labelKey: "nav.organisationsEtudiantes", href: "/campus-life/organizations" },
  { labelKey: "nav.sportsLoisirs", href: "/campus-life/recreation" },
  { labelKey: "nav.vieEtudiante", href: "/student-life" },
  { labelKey: "nav.sport", href: "/student-life/athletics" },
  { labelKey: "nav.evenements", href: "/student-life/events" },
  { labelKey: "nav.clubsActivites", href: "/student-life/extracurricular-activities" },
  { labelKey: "nav.installations", href: "/student-life/facilities" },
  { labelKey: "nav.soutienEtudiants", href: "/student-life/support" },
]

const rechercheLinks: Link[] = [
  { labelKey: "nav.rechercheLien", href: "/research" },
  { labelKey: "nav.centresRecherche", href: "/research/centers" },
  { labelKey: "nav.publications", href: "/research/publications" },
  { labelKey: "nav.partenariats", href: "/research/partnerships" },
  { labelKey: "nav.opportunites", href: "/research/opportunities" },
  { labelKey: "nav.collaborer", href: "/research/collaborate" },
]

const servicesLinks: Link[] = [
  { labelKey: "nav.servicesCarrieres", href: "/career-services" },
  { labelKey: "nav.bourseEmplois", href: "/career-services/job-board" },
  { labelKey: "nav.ateliersCv", href: "/career-services/resume-workshop" },
  { labelKey: "nav.carrieresInternationales", href: "/career-services/global-careers" },
  { labelKey: "nav.bibliotheque", href: "/library" },
  { labelKey: "nav.catalogueBibliotheque", href: "/library/catalog" },
  { labelKey: "nav.anciensEleves", href: "/alumni" },
  { labelKey: "nav.reseauAnciens", href: "/alumni/networking" },
  { labelKey: "nav.internationale", href: "/international" },
  { labelKey: "nav.partenariatsInternationaux", href: "/international/partnerships" },
  { labelKey: "nav.integrationCulturelle", href: "/cultural-integration" },
]

const contactLinks: Link[] = [
  { labelKey: "nav.nousContacter", href: "/contact" },
  { labelKey: "nav.faq", href: "/faq" },
  { labelKey: "nav.admissionsMaster", href: "/contact/graduate-admissions" },
  { labelKey: "nav.admissionsInternationales", href: "/contact/international-admissions" },
  { labelKey: "nav.bibliotheque", href: "/contact/library" },
  { labelKey: "nav.planifierVisite", href: "/visit" },
  { labelKey: "nav.evenements", href: "/events" },
  { labelKey: "nav.galeriePhotos", href: "/gallery" },
  { labelKey: "nav.calendrier", href: "/calendar" },
]

// Langues disponibles : fr (par défaut, langue des contenus), en (bilinguisme documenté),
// es/de/ar pour l'accessibilité internationale. Chaque langue s'affiche sous son propre nom.
const languages: { code: "fr" | "en" | "es" | "de" | "ar"; name: string; flag: string }[] = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
]

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Préfixe les liens par la locale lorsque la page existe dans l'arbre traduit.
  const L = React.useCallback((href: string) => localizedPath(language, href), [language])

  // Changement de langue : met à jour le chrome ET navigue vers la version
  // traduite de la page courante lorsqu'elle existe.
  const switchLanguage = (lang: "fr" | "en" | "es" | "de" | "ar") => {
    setLanguage(lang)
    const basePath = pathname.replace(/^\/(en|es|de|ar)(\/|$)/, "/")
    const target = localizedPath(lang, basePath)
    if (target !== basePath) router.push(target)
    else if (basePath !== pathname && basePath === "/") router.push("/")
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 shadow-sm backdrop-blur">
      <div className="container flex h-16 items-center gap-2 px-3 sm:gap-4 sm:px-4">
        <Logo size="sm" className="shrink-0" />

        {/* Navigation desktop — menus déroulants en CSS pur (fonctionnent sans JS) */}
        <nav aria-label="Navigation principale" className="hidden flex-1 items-center xl:flex">
          <ul className="flex items-center gap-0.5">
            <NavItem label={t("nav.accueil")} href={L("/")} />
            <DropdownNavItem label={t("nav.universite")} wide>
              <div className="grid grid-cols-3 gap-x-4">
                <Column title={t("nav.colUniversite")} links={universiteLinks.slice(0, 5)} localize={L} />
                <Column title={t("nav.colCampus")} links={universiteLinks.slice(5)} localize={L} />
                <Column title={t("nav.colServicesEnLigne")} links={universiteServicesLinks} localize={L} />
              </div>
            </DropdownNavItem>
            <DropdownNavItem label={t("nav.formations")} wide>
              <div className="grid grid-cols-3 gap-x-4">
                <Column title={t("nav.colBachelors")} links={bachelors} localize={L} />
                <Column title={t("nav.colMasters")} links={masters} localize={L} />
                <Column title={t("nav.colAcademique")} links={academicsLinks} localize={L} />
              </div>
            </DropdownNavItem>
            <DropdownNavItem label={t("nav.admissions")} wide>
              <div className="grid grid-cols-2 gap-x-4">
                <Column title={t("nav.colCandidatures")} links={admissionsLinks.slice(0, 5)} localize={L} />
                <Column title={t("nav.colDossiers")} links={admissionsLinks.slice(5)} localize={L} />
              </div>
            </DropdownNavItem>
            <DropdownNavItem label={t("nav.vieEtudiante")} wide>
              <div className="grid grid-cols-2 gap-x-4">
                <Column title={t("nav.colSurLeCampus")} links={vieEtudianteLinks.slice(0, 5)} localize={L} />
                <div>
                  <ColumnTitle>{t("nav.colVieEtudiante")}</ColumnTitle>
                  {vieEtudianteLinks.slice(5).map((l) => <DropdownLink key={l.href + l.labelKey} href={L(l.href)}>{t(l.labelKey)}</DropdownLink>)}
                </div>
              </div>
            </DropdownNavItem>
            <DropdownNavItem label={t("nav.recherche")} wide>
              <div className="grid grid-cols-2 gap-x-4">
                <Column title={t("nav.colExplorer")} links={rechercheLinks.slice(0, 3)} localize={L} />
                <Column title={t("nav.colCollaborer")} links={rechercheLinks.slice(3)} localize={L} />
              </div>
            </DropdownNavItem>
            <DropdownNavItem label={t("nav.services")} wide>
              <div className="grid grid-cols-2 gap-x-4">
                <Column title={t("nav.colCarrieres")} links={servicesLinks.slice(0, 5)} localize={L} />
                <Column title={t("nav.colCommunaute")} links={servicesLinks.slice(5)} localize={L} />
              </div>
            </DropdownNavItem>
            <NavItem label={t("nav.contact")} href={L("/contact")} />
          </ul>
        </nav>

        {/* Menu mobile — <details> natif, fonctionne sans JS. Le panneau est
            ancré au header (positionné) pour occupe toute la largeur. */}
        <details className="xl:hidden" open={mobileOpen} onToggle={(e) => setMobileOpen((e.target as HTMLDetailsElement).open)}>
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md hover:bg-slate-100 [&::-webkit-details-marker]:hidden">
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            <span className="sr-only">{t("nav.menu")}</span>
          </summary>
          <div className="absolute left-0 right-0 top-16 max-h-[70vh] overflow-y-auto border-b bg-white p-4 shadow-lg">
            <MobileSection label={t("nav.accueil")} href={L("/")} onNavigate={() => setMobileOpen(false)} />
            <MobileGroup
              label={t("nav.universite")}
              links={[...universiteLinks, ...universiteServicesLinks]}
              localize={L}
              onNavigate={() => setMobileOpen(false)}
            />
            <MobileGroup
              label={t("nav.formations")}
              links={[...bachelors, ...masters, ...academicsLinks]}
              localize={L}
              onNavigate={() => setMobileOpen(false)}
            />
            <MobileGroup label={t("nav.admissions")} links={admissionsLinks} localize={L} onNavigate={() => setMobileOpen(false)} />
            <MobileGroup
              label={t("nav.vieEtudiante")}
              links={vieEtudianteLinks}
              localize={L}
              onNavigate={() => setMobileOpen(false)}
            />
            <MobileGroup label={t("nav.recherche")} links={rechercheLinks} localize={L} onNavigate={() => setMobileOpen(false)} />
            <MobileGroup label={t("nav.services")} links={servicesLinks} localize={L} onNavigate={() => setMobileOpen(false)} />
            <MobileSection label={t("nav.contact")} href={L("/contact")} onNavigate={() => setMobileOpen(false)} />
            <div className="grid grid-cols-2 gap-2 pt-3">
              {contactLinks.map((l) => (
                <Link
                  key={l.href + l.labelKey}
                  href={L(l.href)}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-600 hover:bg-cyan-50 hover:text-blue-700"
                >
                  {t(l.labelKey)}
                </Link>
              ))}
            </div>
          </div>
        </details>

        {/* Actions à droite — sélecteur de langue en <details> natif */}
        <div className="ml-auto flex items-center gap-2">
          <details className="group relative">
            <summary className="flex h-9 cursor-pointer list-none items-center gap-1 rounded-md px-3 text-sm font-medium hover:bg-slate-100 [&::-webkit-details-marker]:hidden">
              {languages.find((lang) => lang.code === language)?.flag} {language.toUpperCase()}
              <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="absolute right-0 top-11 z-50 w-44 rounded-md border bg-white py-1 shadow-lg">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-slate-100",
                    language === lang.code && "bg-cyan-50 font-semibold",
                  )}
                >
                  <span>{lang.flag}</span>
                  {lang.name}
                </button>
              ))}
            </div>
          </details>
          <Link
            href="/login"
            className="hidden h-9 items-center rounded-md px-3 text-sm font-medium hover:bg-slate-100 sm:flex"
          >
            {t("nav.login")}
          </Link>
          <Link
            href="/apply"
            className="flex h-9 items-center rounded-md bg-blue-700 px-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 sm:px-4"
          >
            {t("nav.apply")}
          </Link>
        </div>
      </div>
    </header>
  )
}

/** Lien simple de premier niveau. */
function NavItem({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="rounded-md px-2.5 py-2 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-100 hover:text-blue-700"
      >
        {label}
      </Link>
    </li>
  )
}

/**
 * Menu déroulant CSS pur : s'ouvre au survol ET au focus clavier
 * (group-hover / focus-within) — aucun JavaScript requis.
 */
function DropdownNavItem({
  label,
  children,
  wide = false,
}: {
  label: string
  children: React.ReactNode
  wide?: boolean
}) {
  return (
    <li className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-slate-800 transition-colors group-hover:bg-slate-100 group-hover:text-blue-700"
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
      </button>
      <div
        className={cn(
          "invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100",
          wide ? "-left-32" : "",
        )}
      >
        <div
          className={cn(
            "max-h-[75vh] overflow-y-auto rounded-lg border border-slate-200 bg-white p-3 shadow-xl",
            wide ? "w-[640px]" : "w-72",
          )}
        >
          {children}
        </div>
      </div>
    </li>
  )
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-1 mt-2 px-3 text-xs font-bold uppercase tracking-wider text-cyan-700 first:mt-0">{children}</p>
  )
}

function Column({ title, links, localize }: { title: string; links: Link[]; localize: (href: string) => string }) {
  const { t } = useLanguage()
  return (
    <div>
      <ColumnTitle>{title}</ColumnTitle>
      {links.map((l) => (
        <DropdownLink key={l.href + l.labelKey} href={localize(l.href)}>{t(l.labelKey)}</DropdownLink>
      ))}
    </div>
  )
}

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block rounded-md px-3 py-1.5 text-sm text-slate-700 transition-colors hover:bg-cyan-50 hover:text-blue-700"
    >
      {children}
    </Link>
  )
}

/** Section mobile : lien simple. */
function MobileSection({ label, href, onNavigate }: { label: string; href: string; onNavigate: () => void }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block border-b border-slate-100 py-3 font-semibold text-slate-900"
    >
      {label}
    </Link>
  )
}

/** Groupe mobile : <details> imbriqué pour la liste de liens. */
function MobileGroup({
  label,
  links,
  localize,
  onNavigate,
}: {
  label: string
  links: Link[]
  localize: (href: string) => string
  onNavigate: () => void
}) {
  const { t } = useLanguage()
  return (
    <details className="border-b border-slate-100">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
        {label}
        <ChevronDown className="size-4" />
      </summary>
      <div className="pb-2 pl-3">
        {links.map((l) => (
          <Link
            key={l.href + l.labelKey}
            href={localize(l.href)}
            onClick={onNavigate}
            className="block py-1.5 text-sm text-slate-600 hover:text-blue-700"
          >
            {t(l.labelKey)}
          </Link>
        ))}
      </div>
    </details>
  )
}
