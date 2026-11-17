"""Ajoute le JSON-LD FAQPage sur les pages FAQ traduites (en/es/de/ar)."""
import io

for loc in ("en", "es", "de", "ar"):
    p = f"app/{loc}/faq/page.tsx"
    s = io.open(p, encoding="utf-8").read()
    if "FaqJsonLd" in s:
        print("déjà présent :", p)
        continue
    # 1) import du composant après l'import de buildMetadata
    anchor = 'import { buildMetadata } from "@/lib/seo"'
    s = s.replace(anchor, anchor + '\nimport { FaqJsonLd } from "@/components/seo-jsonld"', 1)
    # 2) rendu du JSON-LD juste avant la section des questions/réponses
    marker = '{/* Questions / answers'
    if marker not in s:
        # secours : avant la première <section après le hero
        marker = "<section"
        idx = s.find(marker)
    else:
        idx = s.find(marker)
    s = s[:idx] + "<FaqJsonLd items={faqs} />\n\n      " + s[idx:]
    io.open(p, "w", encoding="utf-8", newline="").write(s)
    print("ajouté :", p)
