import { Inbox, Workflow, Rocket, Check, ArrowRight } from "lucide-react"
import { FlankMotif } from "@/components/flank-motif"
import { cn } from "@/lib/utils"

const phases = [
  {
    icon: Inbox,
    tone: "gold" as const,
    phaseLabel: "Phase 1",
    title: "Capture more leads, respond faster",
    productName: "Website + Lead Concierge",
    copy: "Stop losing leads to slow replies and scattered communication across WhatsApp, email, and calls.",
    bullets: ["Always-on lead capture", "Faster first response", "One place for every enquiry"],
  },
  {
    icon: Workflow,
    tone: "blue" as const,
    phaseLabel: "Phase 2",
    title: "Save time, reduce admin",
    productName: "ATS AI Box Tier 1",
    copy: "Your team gets help drafting quotations, following up on leads, and finding business information faster — without losing in-house control.",
    bullets: ["Draft quotations in minutes", "Automatic lead follow-up", "Instant access to business knowledge"],
  },
  {
    icon: Rocket,
    tone: "gold" as const,
    phaseLabel: "Phase 3",
    title: "Scale into a stronger AI operating layer",
    productName: "ATS AI Box Tier 2",
    copy: "Built for growing teams that need more capacity, more automation, and broader local intelligence.",
    bullets: ["Handles higher volume", "Deeper automation across teams", "Broader local AI capability"],
  },
]

export function ServiceMatrix() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FlankMotif tone="blue" className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Growth Path
          </FlankMotif>
          <h2 id="services-heading" className="mt-5 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            How clients grow with ATS
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Start with more leads. Then remove internal friction. Then scale into a fuller local AI
            operating layer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {phases.map((phase) => {
            const Icon = phase.icon
            const isGold = phase.tone === "gold"
            return (
              <article
                key={phase.phaseLabel}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-7 shadow-sm ring-1 ring-transparent transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-md"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 top-0 h-1 rounded-t-xl",
                    isGold ? "bg-gold" : "bg-brand-blue",
                  )}
                />
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      "inline-flex size-12 items-center justify-center rounded-lg border",
                      isGold
                        ? "border-gold/40 bg-gold/10 text-gold-foreground"
                        : "border-brand-blue/30 bg-brand-blue/10 text-brand-blue",
                    )}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.14em]",
                      isGold ? "text-gold-foreground" : "text-brand-blue",
                    )}
                  >
                    {phase.phaseLabel}
                  </span>
                </div>

                <h3
                  className={cn(
                    "mt-5 text-lg font-semibold leading-snug",
                    isGold ? "text-gold-foreground" : "text-brand-blue",
                  )}
                >
                  {phase.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {phase.productName}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{phase.copy}</p>

                <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                  {phase.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check
                        className={cn("mt-0.5 size-4 shrink-0", isGold ? "text-gold" : "text-brand-blue")}
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  aria-label={`Talk through ${phase.phaseLabel}: ${phase.productName}`}
                  className={cn(
                    "group relative mt-6 flex h-14 items-center justify-center overflow-hidden rounded-full border text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    isGold
                      ? "border-gold/40 hover:border-brand-blue focus-visible:border-brand-blue"
                      : "border-brand-blue/30 hover:border-brand-blue focus-visible:border-brand-blue",
                  )}
                >
                  {/* fill that reveals on hover/focus, standing in for ELEKS's photo+mask */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                  />

                  {/* track line the arrow travels along */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 h-px w-3/4 -translate-x-1/2 bg-border transition-colors duration-300 group-hover:bg-brand-blue-foreground/40 group-focus-visible:bg-brand-blue-foreground/40"
                  />

                  {/* label — always visible, just recolours on hover/focus */}
                  <span
                    className={cn(
                      "relative z-10 transition-colors duration-300 group-hover:text-brand-blue-foreground group-focus-visible:text-brand-blue-foreground",
                      isGold ? "text-gold-foreground" : "text-brand-blue",
                    )}
                  >
                    Talk through this phase
                  </span>

                  {/* arrow circle sliding left to right along the rail */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute left-[10%] top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border bg-card transition-[left,background-color,border-color] duration-500 ease-out group-hover:left-[calc(90%-1rem)] group-hover:border-brand-blue-foreground group-hover:bg-transparent group-focus-visible:left-[calc(90%-1rem)] group-focus-visible:border-brand-blue-foreground group-focus-visible:bg-transparent",
                      isGold ? "border-gold/40" : "border-brand-blue/30",
                    )}
                  >
                    <ArrowRight
                      className={cn(
                        "size-4 transition-colors duration-300 group-hover:text-brand-blue-foreground group-focus-visible:text-brand-blue-foreground",
                        isGold ? "text-gold-foreground" : "text-brand-blue",
                      )}
                    />
                  </span>
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
