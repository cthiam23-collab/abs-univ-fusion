import { LoadingSpinner } from "./loading-spinner"

interface LoadingStateProps {
  text?: string
  fullPage?: boolean
}

export function LoadingState({ text = "Loading...", fullPage = false }: LoadingStateProps) {
  if (fullPage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text={text} />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-12">
      <LoadingSpinner size="md" text={text} />
    </div>
  )
}
