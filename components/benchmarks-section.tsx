import { Activity, ShieldCheck, Lock } from "lucide-react"
import { FlankMotif } from "@/components/flank-motif"

const metrics = [
  {
    icon: Activity,
    value: "99.9%",
    label: "Fewer Outages",
    copy: "Your systems stay up and running, so your business never grinds to a halt.",
    tone: "gold" as const,
  },
  {
    icon: ShieldCheck,
    value: "Zero-Trust",
    label: "Safer Access",
    copy: "Strict access controls keep the wrong people out, even as your team grows.",
    tone: "blue" as const,
  },
  {
    icon: Lock,
    value: "100%",
    label: "Data Under Your Control",
    copy: "Your business information stays yours — never locked into a third-party platform.",
    tone: "gold" as const,
  },
]

export function BenchmarksSection() {
  return (
    <section id="benchmarks" aria-labelledby="benchmarks-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FlankMotif tone="gold" className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground">
            Why Businesses Trust ATS
          </FlankMotif>
          <h2 id="benchmarks-heading" className="mt-5 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built to keep your business running smoothly
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {metrics.map((m) => {
            const Icon = m.icon
            const accent = m.tone === "gold" ? "text-gold-foreground" : "text-brand-blue"
            return (
              <div
                key={m.label}
                className="relative overflow-hidden rounded-xl border border-ink/15 bg-card p-8 text-center shadow-sm"
              >
                <Icon className={`mx-auto size-7 ${accent}`} aria-hidden="true" />
                <p className={`mt-5 font-mono text-4xl font-bold tracking-tight ${accent}`}>{m.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-ink">{m.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.copy}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
