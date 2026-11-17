import io
import re
import json

s = io.open("lib/masters-data.ts", encoding="utf-8").read()
out = []
for m in re.finditer(r'slug:\s*"([^"]+)"', s):
    slug = m.group(1)
    seg = s[m.end():m.end() + 800]
    t = re.search(r'title:\s*"([^"]+)"', seg)
    g = re.search(r'tagline:\s*\n?\s*"([^"]+)"', seg)
    out.append({
        "slug": slug,
        "title": t.group(1) if t else "",
        "tagline": g.group(1) if g else "",
    })
io.open(".extract/masters-fr.json", "w", encoding="utf-8").write(
    json.dumps(out, ensure_ascii=False, indent=1)
)
print("written", len(out))
for d in out:
    print(d["slug"], "=>", d["tagline"][:100])
