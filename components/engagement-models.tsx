import { Zap, RefreshCw, Compass, ArrowRight } from "lucide-react"
import { FlankMotif } from "@/components/flank-motif"
import { cn } from "@/lib/utils"

const models = [
  {
    icon: Zap,
    tone: "gold" as const,
    title: "Project-Based Sprints",
    copy: "Best for discrete migrations, website front-end overhauls, or custom automation pipeline builds with a fixed scope.",
  },
  {
    icon: RefreshCw,
    tone: "blue" as const,
    title: "Retainer-Based Managed Services",
    copy: "Best for ongoing network administration, infrastructure monitoring, and continuous systems optimization.",
  },
  {
    icon: Compass,
    tone: "gold" as const,
    title: "Dedicated Technical Advisory",
    copy: "Best for long-term digital transformation planning, compliance audits, and custom systems architecture design.",
  },
]

export function EngagementModels() {
  return (
    <section id="engagement" className="scroll-mt-20 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FlankMotif tone="blue" className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Engagement Models
          </FlankMotif>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Partner with us on your terms
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {models.map((model) => {
            const Icon = model.icon
            const isGold = model.tone === "gold"
            return (
              <article
                key={model.title}
                className="flex flex-col rounded-xl border border-ink/20 bg-card p-7 shadow-sm transition-colors hover:border-gold/60"
              >
                <span
                  className={cn(
                    "inline-flex size-11 items-center justify-center rounded-lg",
                    isGold ? "bg-gold/15 text-gold-foreground" : "bg-brand-blue/15 text-brand-blue",
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3
                  className={cn(
                    "mt-5 text-lg font-semibold",
                    isGold ? "text-gold-foreground" : "text-brand-blue",
                  )}
                >
                  {model.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{model.copy}</p>
                <a
                  href="#contact"
                  className={cn(
                    "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold",
                    isGold ? "text-gold-foreground hover:text-gold" : "text-brand-blue hover:text-brand-blue-dark",
                  )}
                >
                  Discuss this model
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
