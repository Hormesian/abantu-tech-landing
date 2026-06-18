import Image from "next/image"
import { ArrowRight, ShieldCheck, Server, Workflow } from "lucide-react"
import { FlankMotif } from "@/components/flank-motif"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* subtle background grid */}
      <div aria-hidden="true" className="bg-grid-light pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-24">
        <div>
          <FlankMotif tone="gold" className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground">
            Enterprise IT for East Africa
          </FlankMotif>

          <h1 className="mt-6 text-pretty text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Engineered IT Infrastructure.{" "}
            <span className="text-brand-blue">Autonomous Workflows.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            We design, deploy, and maintain secure, high-performance tech stacks—giving your
            enterprise total data sovereignty and automated operational efficiency.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gold bg-brand-blue px-6 py-3.5 text-sm font-semibold text-brand-blue-foreground shadow-sm transition-colors hover:bg-brand-blue-dark"
            >
              Schedule Technical Consultation
              <ArrowRight className="size-4 text-gold" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gold bg-transparent px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/10"
            >
              Explore Architecture
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { icon: Server, label: "Managed Infrastructure" },
              { icon: Workflow, label: "Workflow Automation" },
              { icon: ShieldCheck, label: "Data Sovereignty" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col gap-2">
                <Icon className="size-5 text-brand-blue" aria-hidden="true" />
                <dt className="text-xs font-medium leading-snug text-muted-foreground">{label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Deep-dark tech showcase container */}
        <div className="relative">
          <div className="rounded-2xl border border-gold/40 bg-ink p-2 shadow-2xl shadow-ink/20 ring-1 ring-ink/5">
            <div className="flex items-center gap-2 px-3 py-2.5">
              <span className="size-2.5 rounded-full bg-gold/70" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-brand-blue/70" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-white/20" aria-hidden="true" />
              <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-white/40">
                abantu // systems-architecture
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/architecture-map.png"
                alt="Live systems architecture map showing server nodes, cloud containers and data pipelines"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* floating stat chip */}
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card px-5 py-3 shadow-lg sm:block">
            <p className="font-mono text-2xl font-bold text-brand-blue">99.9%</p>
            <p className="text-xs font-medium text-muted-foreground">Uptime architecture</p>
          </div>
        </div>
      </div>
    </section>
  )
}
