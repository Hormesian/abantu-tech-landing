"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { useAtsLeadModal } from "@/components/ats-lead-modal"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Approach", href: "#benchmarks" },
  { label: "Engagement Models", href: "#engagement" },
  { label: "About", href: "https://abantutech.co.ke/about/" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { openModal } = useAtsLeadModal()

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          aria-label="Abantu Tech Solutions home"
        >
          <Image
            src="/images/abantu-logo.png"
            alt="Abantu Tech Solutions logo"
            width={120}
            height={120}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </a>

        {/* Center nav with flanking motif */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          <span className="size-1.5 rotate-45 bg-gold" aria-hidden="true" />
          <span className="mr-1 h-px w-5 bg-gold" aria-hidden="true" />
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="ml-1 h-px w-5 bg-gold" aria-hidden="true" />
          <span className="size-1.5 rotate-45 bg-gold" aria-hidden="true" />
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openModal}
            className="hidden items-center gap-2 rounded-md border border-gold bg-brand-blue px-4 py-2.5 text-sm font-semibold text-brand-blue-foreground shadow-sm transition-colors hover:bg-brand-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex"
          >
            Book a discovery call
            <ArrowUpRight className="size-4 text-gold" />
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-background md:hidden" aria-label="Mobile">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  openModal()
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold bg-brand-blue px-4 py-2.5 text-sm font-semibold text-brand-blue-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Book a discovery call
                <ArrowUpRight className="size-4 text-gold" />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
