import { Server, Workflow, Database, Check } from "lucide-react"
import { FlankMotif } from "@/components/flank-motif"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Server,
    tone: "gold" as const,
    title: "Managed IT Infrastructure & Private Cloud",
    copy: "High-availability server deployments, network engineering, and hybrid cloud migrations. We build resilient corporate networks optimized for low-latency edge performance and maximum uptime.",
    bullets: [
      "Virtualization sandboxes",
      "Secure remote access architectures",
      "Automated off-site backup arrays",
    ],
  },
  {
    icon: Workflow,
    tone: "blue" as const,
    title: "Workflow Automation & AI Orchestration",
    copy: "Eliminate manual data silos. We design and integrate intelligent, autonomous agent frameworks and webhook-driven pipelines that sync your business operations 24/7.",
    bullets: [
      "Customized API integrations",
      "Self-hosted automation engines",
      "Secure local LLM deployments",
    ],
  },
  {
    icon: Database,
    tone: "gold" as const,
    title: "Data Sovereignty & Self-Hosted Solutions",
    copy: "Reclaim control over your operational data. Move away from restrictive, high-cost third-party SaaS dependencies with secure, independent open-source application stacks.",
    bullets: [
      "Dedicated private storage containers",
      "Self-hosted collaboration suites",
      "Independent data lifecycle management",
    ],
  },
]

export function ServiceMatrix() {
  return (
    <section id="services" className="scroll-mt-20 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FlankMotif tone="blue" className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Service Matrix
          </FlankMotif>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            A full-stack engineering partner
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Three integrated practice areas built to stabilize, automate, and secure your enterprise
            technology.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            const isGold = service.tone === "gold"
            return (
              <article
                key={service.title}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-7 shadow-sm ring-1 ring-transparent transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-md"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 top-0 h-1 rounded-t-xl",
                    isGold ? "bg-gold" : "bg-brand-blue",
                  )}
                />
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

                <h3
                  className={cn(
                    "mt-5 text-lg font-semibold leading-snug",
                    isGold ? "text-gold-foreground" : "text-brand-blue",
                  )}
                >
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.copy}</p>

                <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check
                        className={cn("mt-0.5 size-4 shrink-0", isGold ? "text-gold" : "text-brand-blue")}
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
