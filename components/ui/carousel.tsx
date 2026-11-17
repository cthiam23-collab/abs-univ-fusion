"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CarouselProps {
  items: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

export function Carousel({ items, autoPlay = false, interval = 5000, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, [items.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  React.useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(goToNext, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, goToNext])

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="relative h-full w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              index === currentIndex ? "opacity-100" : "opacity-0",
            )}
          >
            {item}
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === currentIndex ? "bg-white w-8" : "bg-white/50",
            )}
            onClick={() => goToSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
