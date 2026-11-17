import { remark } from "remark"
import html from "remark-html"
import { readFile } from "fs/promises"
import path from "path"

export async function fetchMarkdownContent(filename: string, section: string) {
  try {
    // Validate filename to prevent path traversal
    const normalized = path.normalize(filename)
    if (normalized.startsWith("..") || path.isAbsolute(normalized)) {
      return "Invalid filename"
    }
    const filePath = path.join(process.cwd(), "public", filename)
    // Double-check resolved path is within public dir
    const publicDir = path.join(process.cwd(), "public")
    if (!filePath.startsWith(publicDir + path.sep)) {
      return "Invalid filename"
    }
    const fileContents = await readFile(filePath, "utf8")

    const sections = fileContents.split("---")
    const sectionIndex = sections.findIndex((s) => s.trim().startsWith(`# ${section}`))

    if (sectionIndex === -1) {
      return "Section not found in document"
    }

    const markdown = sections[sectionIndex + 1].trim()
    const result = await remark().use(html).process(markdown)

    return result.toString()
  } catch (error) {
    console.error("Error fetching markdown:", error)
    return "Error fetching content"
  }
}
