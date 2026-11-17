import io
import os
import shutil

# Stubs CtaDestination trop minces (doublons) → redirection vers la page documentée.
REDIRECTS = {
    "app/library/catalog/page.tsx": "/library",
    "app/library/hours/page.tsx": "/library",
    "app/library/online-resources/page.tsx": "/library",
    "app/library/services/page.tsx": "/library",
    "app/research/collaborate/page.tsx": "/research",
    "app/research/opportunities/page.tsx": "/research",
    "app/career-services/global-careers/page.tsx": "/career-services",
    "app/career-services/job-board/page.tsx": "/career-services",
    "app/career-services/employers/post-job/page.tsx": "/career-services",
    "app/programs/graduate/certificates/page.tsx": "/programs/masters",
    "app/programs/graduate/doctoral/page.tsx": "/programs/masters",
    "app/programs/graduate/masters/page.tsx": "/programs/masters",
    "app/programs/graduate/page.tsx": "/programs/masters",
    "app/student-life/extracurricular-activities/join/page.tsx": "/student-life/extracurricular-activities",
}

TPL = '''import { redirect } from "next/navigation"

// Page exhaustive supprimée : redirection vers la page documentée (règles éditoriales ABS).
export default function LegacyRedirectPage() {
  redirect("%s")
}
'''

for f, dest in REDIRECTS.items():
    io.open(f, "w", encoding="utf-8", newline="").write(TPL % dest)
    print("redirect", f, "->", dest)

# Sonde de développement : suppression
shutil.rmtree("app/probe-hydration", ignore_errors=True)
print("deleted app/probe-hydration")
