"""Second passage : fragments coupés par des sauts de ligne (JSX multilignes)."""
import io
import glob
import re

# « African Business \n Private School — ABS » et variantes, tolérant aux espaces/sauts.
PATTERN = re.compile(
    r"African\s+Business\s+Private\s+School(\s*—\s*ABS\s*|\s+-\s+ABS\s*)?",
    re.IGNORECASE,
)

def repl(m):
    if m.group(1):
        return "ABS — African Business School"
    return "African Business School"

changed = 0
for f in sorted(set(
    glob.glob("app/**/*.tsx", recursive=True)
    + glob.glob("app/**/*.ts", recursive=True)
    + glob.glob("components/**/*.tsx", recursive=True)
    + glob.glob("lib/**/*.ts", recursive=True)
    + glob.glob("translations/**/*.ts", recursive=True)
)):
    try:
        s = io.open(f, encoding="utf-8").read()
    except Exception:
        continue
    s2, n = PATTERN.subn(repl, s)
    if n and s2 != s:
        io.open(f, "w", encoding="utf-8", newline="").write(s2)
        changed += n
        print(f"  {n:3d}  {f}")
print("total:", changed)
