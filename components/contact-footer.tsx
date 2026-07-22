"use client"

import Image from "next/image"
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react"
import { useAtsLeadModal } from "@/components/ats-lead-modal"

export function ContactFooter() {
  const { openModal } = useAtsLeadModal()

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-ink p-8 text-center shadow-2xl sm:p-12">
          {/* faint grid backdrop */}
          <div aria-hidden="true" className="bg-grid-dark pointer-events-none absolute inset-0" />
          <div className="relative">
            <h2 id="contact-heading" className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to save time and close more leads?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/70">
              Tell us about your business and we&apos;ll book a short discovery call to map out your growth path.
            </p>

            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-gold bg-brand-blue px-5 py-3 text-sm font-semibold text-brand-blue-foreground transition-colors hover:bg-brand-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Book a discovery call
                <ArrowUpRight className="size-4 text-gold" />
              </button>
            </div>

            <div className="mx-auto mt-4 max-w-md">
              <a
                href="https://wa.me/254740844520"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <MessageCircle className="size-4 text-gold" aria-hidden="true" />
                Chat with us on WhatsApp
              </a>
            </div>
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
            Regional Workspace: Kenya
            <span className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
              <span className="h-px w-6 bg-gold" />
              <span className="size-1.5 rotate-45 bg-gold" />
            </span>
          </p>

          <p className="text-xs text-muted-foreground">
            &copy; {`${new Date().getFullYear()} `}Abantu Tech Solutions. Business systems & local AI
            for Kenyan SMEs.
          </p>
        </div>
      </footer>
    </section>
  )
}
