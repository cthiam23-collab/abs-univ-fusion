"""Normalisation du nom de l'institution : ABS — African Business School.
Remplacements ordonnés (du plus long au plus court) pour éviter les résidus."""
import io
import glob
import re

# Ordre critique : les variantes longues d'abord.
REPLACEMENTS = [
    ("African Business Private School — ABS", "ABS — African Business School"),
    ("African Business Private School - ABS", "ABS — African Business School"),
    ("African Business Private School–ABS", "ABS — African Business School"),
    ("AFRICAN BUSINESS PRIVATE SCHOOL — ABS", "ABS — AFRICAN BUSINESS SCHOOL"),
    ("African Business Private School SARL", "African Business School SARL"),
    ("African Business Private School", "African Business School"),
    ("African Business University", "African Business School"),
    ("Université African Business School", "African Business School"),
    ("l'Université ABS", "l'ABS"),
    ("L'Université ABS", "L'ABS"),
    ("d'Université ABS", "d'ABS"),
    ("ABS University", "African Business School (ABS)"),
    ("Université ABS", "African Business School (ABS)"),
    ("ABS SARL", "African Business School SARL"),
]

FILES = (
    glob.glob("app/**/*.tsx", recursive=True)
    + glob.glob("app/**/*.ts", recursive=True)
    + glob.glob("components/**/*.tsx", recursive=True)
    + glob.glob("components/**/*.ts", recursive=True)
    + glob.glob("lib/**/*.ts", recursive=True)
    + glob.glob("translations/**/*.ts", recursive=True)
    + ["mobile-assets/README.md"]
)

changed = {}
total = 0
for f in sorted(set(FILES)):
    try:
        s = io.open(f, encoding="utf-8").read()
    except Exception:
        continue
    orig = s
    n = 0
    for old, new in REPLACEMENTS:
        c = s.count(old)
        if c:
            s = s.replace(old, new)
            n += c
    if s != orig:
        io.open(f, "w", encoding="utf-8", newline="").write(s)
        changed[f] = n
        total += n

print(f"{total} remplacements dans {len(changed)} fichiers")
for f, n in sorted(changed.items(), key=lambda x: -x[1])[:30]:
    print(f"  {n:4d}  {f}")
