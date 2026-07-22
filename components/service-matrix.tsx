import { TrendingUp, Settings2, Brain, Check, ArrowRight, ShieldCheck } from "lucide-react"
import { FlankMotif } from "@/components/flank-motif"
import { cn } from "@/lib/utils"

// Tone-keyed style lookup — replaces the old two-state isGold boolean now that a third
// (purple) tone exists. Each tone supplies every className fragment the card needs.
const toneStyles = {
  gold: {
    bar: "bg-gold",
    chip: "border-gold/40 bg-gold/10 text-gold-foreground",
    text: "text-gold-foreground",
    check: "text-gold",
    ctaBorder: "border-gold/40",
    hoverBorder: "hover:border-gold focus-visible:border-gold",
    hoverFill: "bg-gold",
    hoverTrackBg: "group-hover:bg-gold-foreground/40 group-focus-visible:bg-gold-foreground/40",
    hoverText: "group-hover:text-gold-foreground group-focus-visible:text-gold-foreground",
    hoverArrowBorder: "group-hover:border-gold-foreground group-focus-visible:border-gold-foreground",
  },
  blue: {
    bar: "bg-brand-blue",
    chip: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue",
    text: "text-brand-blue",
    check: "text-brand-blue",
    ctaBorder: "border-brand-blue/30",
    hoverBorder: "hover:border-brand-blue focus-visible:border-brand-blue",
    hoverFill: "bg-brand-blue",
    hoverTrackBg: "group-hover:bg-brand-blue-foreground/40 group-focus-visible:bg-brand-blue-foreground/40",
    hoverText: "group-hover:text-brand-blue-foreground group-focus-visible:text-brand-blue-foreground",
    hoverArrowBorder: "group-hover:border-brand-blue-foreground group-focus-visible:border-brand-blue-foreground",
  },
  purple: {
    bar: "bg-brand-purple",
    chip: "border-brand-purple/30 bg-brand-purple/10 text-brand-purple",
    text: "text-brand-purple",
    check: "text-brand-purple",
    ctaBorder: "border-brand-purple/30",
    hoverBorder: "hover:border-brand-purple focus-visible:border-brand-purple",
    hoverFill: "bg-brand-purple",
    hoverTrackBg: "group-hover:bg-brand-purple-foreground/40 group-focus-visible:bg-brand-purple-foreground/40",
    hoverText: "group-hover:text-brand-purple-foreground group-focus-visible:text-brand-purple-foreground",
    hoverArrowBorder: "group-hover:border-brand-purple-foreground group-focus-visible:border-brand-purple-foreground",
  },
} as const

const phases = [
  {
    icon: TrendingUp,
    tone: "gold" as const,
    eyebrow: "GROWTH",
    title: "Lead Growth Platform",
    url: "https://go.abantutech.co.ke/growth/",
    copy: "Grow revenue with intelligent lead capture and engagement.",
    bullets: [
      "Always-on lead capture",
      "AI-powered lead qualification",
      "Faster responses across WhatsApp, email, and calls",
    ],
  },
  {
    icon: Settings2,
    tone: "blue" as const,
    eyebrow: "OPERATIONS",
    title: "Operations Intelligence Platform",
    url: "https://go.abantutech.co.ke/operations/",
    copy: "Reduce operational friction with AI-powered business assistance.",
    bullets: [
      "Draft quotations in minutes",
      "Automate follow-ups and tasks",
      "Instant access to business knowledge",
      "Improve team productivity",
    ],
  },
  {
    icon: Brain,
    tone: "purple" as const,
    eyebrow: "TRANSFORMATION",
    title: "Business AI Operating System",
    url: "https://go.abantutech.co.ke/transformation/",
    copy: "Build an AI-native organization with enterprise intelligence and autonomous operations.",
    bullets: [
      "Handles higher volume with ease",
      "Deep automation across departments",
      "Sovereign AI with full data ownership",
      "Enterprise-grade intelligence layer",
    ],
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

        <div className="relative mt-14">
          <div className="grid gap-6 lg:grid-cols-3">
            {phases.map((phase) => {
              const Icon = phase.icon
              const styles = toneStyles[phase.tone]
              return (
                <article
                  key={phase.title}
                  className="group relative flex flex-col rounded-xl border border-border bg-card p-7 shadow-sm ring-1 ring-transparent transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-md"
                >
                  <span aria-hidden="true" className={cn("absolute inset-x-0 top-0 h-1 rounded-t-xl", styles.bar)} />
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={cn(
                        "inline-flex size-12 items-center justify-center rounded-lg border",
                        styles.chip,
                      )}
                    >
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className={cn("text-xs font-semibold uppercase tracking-[0.14em]", styles.text)}>
                      {phase.eyebrow}
                    </span>
                  </div>

                  <h3 className={cn("mt-5 text-lg font-semibold leading-snug", styles.text)}>{phase.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{phase.copy}</p>

                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-border pt-5">
                    {phase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <Check className={cn("mt-0.5 size-4 shrink-0", styles.check)} aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={phase.url}
                    aria-label={`Explore ${phase.title}`}
                    className={cn(
                      "group relative mt-6 flex h-14 items-center justify-center overflow-hidden rounded-full border text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                      styles.ctaBorder,
                      styles.hoverBorder,
                    )}
                  >
                    {/* fill that reveals on hover/focus, standing in for ELEKS's photo+mask */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",
                        styles.hoverFill,
                      )}
                    />

                    {/* track line the arrow travels along */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-1/2 h-px w-3/4 -translate-x-1/2 bg-border transition-colors duration-300",
                        styles.hoverTrackBg,
                      )}
                    />

                    {/* label — always visible, just recolours on hover/focus */}
                    <span
                      className={cn(
                        "relative z-10 transition-colors duration-300",
                        styles.hoverText,
                        styles.text,
                      )}
                    >
                      Explore this platform
                    </span>

                    {/* arrow circle sliding left to right along the rail */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-[10%] top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border bg-card transition-[left,background-color,border-color] duration-500 ease-out group-hover:left-[calc(90%-1rem)] group-hover:bg-transparent group-focus-visible:left-[calc(90%-1rem)] group-focus-visible:bg-transparent",
                        styles.hoverArrowBorder,
                        styles.ctaBorder,
                      )}
                    >
                      <ArrowRight
                        className={cn(
                          "size-4 transition-colors duration-300",
                          styles.hoverText,
                          styles.text,
                        )}
                      />
                    </span>
                  </a>
                </article>
              )
            })}
          </div>

          {/* Connector arrows between adjacent cards — decorative only, lg+ (three-column) layout only.
              Positioned level with the icon-badge/eyebrow row near the top of the cards, not the card's
              vertical centre. Neutral gray regardless of which tones they sit between. */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
            <span className="absolute left-1/3 top-14 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card shadow-sm">
              <ArrowRight className="size-5 text-muted-foreground" />
            </span>
            <span className="absolute left-2/3 top-14 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card shadow-sm">
              <ArrowRight className="size-5 text-muted-foreground" />
            </span>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center text-center sm:mt-16">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 shrink-0 text-brand-blue" aria-hidden="true" />
            <p className="text-base font-semibold text-ink sm:text-lg">
              Built locally. Owned by you. Designed for growth.
            </p>
          </div>
          <p className="mt-2 text-sm font-normal text-muted-foreground">
            From first lead to full-scale transformation — we grow with you.
          </p>
        </div>
      </div>
    </section>
  )
}
