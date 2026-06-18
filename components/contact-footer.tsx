"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react"

export function ContactFooter() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-ink p-8 text-center shadow-2xl sm:p-12">
          {/* faint grid backdrop */}
          <div aria-hidden="true" className="bg-grid-dark pointer-events-none absolute inset-0" />
          <div className="relative">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to stabilize and scale your infrastructure?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/70">
              Share your corporate email and we&apos;ll arrange a focused discovery briefing tailored to
              your operational goals.
            </p>

            {submitted ? (
              <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-md border border-gold/40 bg-white/5 px-5 py-4 text-sm font-medium text-white">
                <CheckCircle2 className="size-5 text-gold" aria-hidden="true" />
                Thank you — our engineering team will reach out shortly.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="corporate-email" className="sr-only">
                  Corporate email address
                </label>
                <input
                  id="corporate-email"
                  type="email"
                  required
                  placeholder="Corporate email address"
                  className="w-full rounded-md border border-gold/50 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-gold bg-brand-blue px-5 py-3 text-sm font-semibold text-brand-blue-foreground transition-colors hover:bg-brand-blue-dark"
                >
                  Initiate Discovery Briefing
                  <ArrowUpRight className="size-4 text-gold" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="about" className="scroll-mt-20 border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 lg:px-8">
          <Image
            src="/images/abantu-logo.png"
            alt="Abantu Tech Solutions logo"
            width={140}
            height={140}
            className="h-16 w-auto"
          />

          <p className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
            <span className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
              <span className="size-1.5 rotate-45 bg-gold" />
              <span className="h-px w-6 bg-gold" />
            </span>
            <MapPin className="size-4 text-brand-blue" aria-hidden="true" />
            Corporate Operations: Nairobi
            <span className="text-gold">|</span>
            Regional Workspace: Kisii, Kenya
            <span className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
              <span className="h-px w-6 bg-gold" />
              <span className="size-1.5 rotate-45 bg-gold" />
            </span>
          </p>

          <p className="text-xs text-muted-foreground">
            &copy; {`${new Date().getFullYear()} `}Abantu Tech Solutions. Engineered IT infrastructure
            &amp; autonomous workflows.
          </p>
        </div>
      </footer>
    </section>
  )
}
