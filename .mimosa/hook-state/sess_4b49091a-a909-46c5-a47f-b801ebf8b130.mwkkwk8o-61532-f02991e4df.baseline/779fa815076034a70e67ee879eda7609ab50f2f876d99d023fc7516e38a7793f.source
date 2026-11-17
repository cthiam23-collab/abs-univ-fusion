"""Remplace les libellés de jours (constants anglais) par localizedOfficeHours
dans les pages visit/contact des arbres de locales + la page contact française."""
import io

# (fichier, locale)
TARGETS = [
    ("app/en/visit/page.tsx", "en"),
    ("app/en/contact/page.tsx", "en"),
    ("app/es/visit/page.tsx", "es"),
    ("app/es/contact/page.tsx", "es"),
    ("app/de/visit/page.tsx", "de"),
    ("app/de/contact/page.tsx", "de"),
    ("app/ar/visit/page.tsx", "ar"),
    ("app/ar/contact/page.tsx", "ar"),
    ("app/contact/page.tsx", "fr"),
    ("app/visit/page.tsx", "fr"),
]

for f, loc in TARGETS:
    s = io.open(f, encoding="utf-8").read()
    if "localizedOfficeHours" in s:
        print("déjà fait :", f)
        continue
    # 1) import après celui de lib/i18n (localizedPath) ou de constants
    if 'from "@/lib/i18n"' in s:
        s = s.replace('import { localizedPath } from "@/lib/i18n"',
                      'import { localizedOfficeHours, localizedPath } from "@/lib/i18n"', 1)
    else:
        anchor = 'import { ORGANIZATION'
        idx = s.find(anchor)
        line_end = s.find("\n", idx)
        s = s[:line_end + 1] + 'import { localizedOfficeHours } from "@/lib/i18n"\n' + s[line_end + 1:]
    # 2) injecter les libellés localisés après la déclaration hours
    s = s.replace(
        "const hours = ORGANIZATION.officeHours",
        f"const hours = ORGANIZATION.officeHours\nconst days = localizedOfficeHours(\"{loc}\")",
        1,
    )
    # 3) remplacer les usages .days
    s = s.replace("hours.weekday.days", "days.weekday").replace(
        "hours.saturday.days", "days.saturday"
    ).replace("hours.sunday.days", "days.sunday")
    io.open(f, "w", encoding="utf-8", newline="").write(s)
    print("ok", f, "(", loc, ")")
