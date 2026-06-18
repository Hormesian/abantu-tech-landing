import { cn } from "@/lib/utils"

/**
 * The flanking arrow/diamond motif derived from the Abantu logo
 * (the tapered lines that bracket "TECH SOLUTIONS").
 */
export function FlankMotif({
  children,
  className,
  tone = "gold",
}: {
  children: React.ReactNode
  className?: string
  tone?: "gold" | "blue"
}) {
  const lineColor = tone === "gold" ? "bg-gold" : "bg-brand-blue"
  const diamondColor = tone === "gold" ? "bg-gold" : "bg-brand-blue"

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="flex items-center gap-1.5" aria-hidden="true">
        <span className={cn("size-1.5 rotate-45", diamondColor)} />
        <span className={cn("h-px w-8", lineColor)} />
      </span>
      {children}
      <span className="flex items-center gap-1.5" aria-hidden="true">
        <span className={cn("h-px w-8", lineColor)} />
        <span className={cn("size-1.5 rotate-45", diamondColor)} />
      </span>
    </span>
  )
}
