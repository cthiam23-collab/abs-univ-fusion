import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

/** Dimensions of the official ABS lockup published as /images/abs-logo.png (480×309). */
export const ABS_LOGO_DIMENSIONS = { width: 480, height: 309 } as const

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

export function Logo({ size = "md", showText = true, className }: LogoProps) {
  const sizeClasses = {
    sm: {
      icon: "h-9 w-auto max-w-[7.5rem]",
      text: "text-base",
    },
    md: {
      icon: "h-11 w-auto max-w-[9rem]",
      text: "text-lg",
    },
    lg: {
      icon: "h-14 w-auto max-w-[11rem]",
      text: "text-xl",
    },
  }

  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Image
        src="/images/abs-logo.png"
        alt="ABS — African Business School"
        {...ABS_LOGO_DIMENSIONS}
        className={cn("object-contain", sizeClasses[size].icon)}
      />
      {showText && (
        <div className="hidden flex-col sm:flex xl:hidden 2xl:flex">
          <span className={cn("font-bold text-primary", sizeClasses[size].text)}>ABS</span>
          <span className="text-xs text-muted-foreground">African Business School</span>
        </div>
      )}
    </Link>
  )
}
