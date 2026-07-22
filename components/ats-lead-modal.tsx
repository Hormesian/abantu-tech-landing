"use client"

import { useCallback, useEffect, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { X } from "lucide-react"
import { submitAtsLead } from "@/lib/submitAtsLead"

export function useAtsLeadModal() {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-ats-lead-modal"))
  }
  return { openModal }
}

const SERVICE_OPTIONS = [
  "Lead Growth Platform",
  "Operations Intelligence Platform",
  "Business AI Operating System",
  "Other",
]

const EMPTY_FORM = {
  name: "",
  phone: "",
  service: "",
  email: "",
}

export function AtsLeadModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [serviceError, setServiceError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const closeModal = useCallback(() => {
    setIsVisible(false)
    window.setTimeout(() => {
      setIsOpen(false)
      setIsSuccess(false)
      setFormData(EMPTY_FORM)
      setNameError(false)
      setPhoneError(false)
      setServiceError(false)
      setIsSubmitting(false)
      setSubmitError(null)
    }, 200)
  }, [])

  useEffect(() => {
    const handler = () => {
      setIsOpen(true)
      requestAnimationFrame(() => setIsVisible(true))
    }
    window.addEventListener("open-ats-lead-modal", handler)
    return () => window.removeEventListener("open-ats-lead-modal", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, closeModal])

  const updateField =
    (key: keyof typeof formData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }))
      setSubmitError(null)
      if (key === "name") setNameError(false)
      if (key === "phone") setPhoneError(false)
      if (key === "service") setServiceError(false)
    }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    let valid = true
    if (!formData.name.trim()) {
      setNameError(true)
      valid = false
    }
    if (!formData.phone.trim()) {
      setPhoneError(true)
      valid = false
    }
    if (!formData.service) {
      setServiceError(true)
      valid = false
    }
    if (!valid) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      await submitAtsLead({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        email: formData.email.trim() || null,
        timestamp: new Date().toISOString(),
        source_page: typeof window !== "undefined" ? window.location.href : "",
        source_label: "Abantu Tech Solutions Landing Page",
        lead_type: "inbound_enquiry",
        conversion_path: "ats_lead_modal",
      })
      setIsSuccess(true)
    } catch (err) {
      const detail = err instanceof Error ? err.message : String(err)
      console.error("[Abantu Tech Solutions] Lead modal submission failed:", err)
      setSubmitError(
        `Something went wrong (${detail}). Please try again or contact us directly at hello@abantutech.co.ke`
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "rgba(10,8,6,0.85)" }}
      onClick={closeModal}
      role="presentation"
    >
      <div
        className={`flex max-h-[90vh] w-full max-w-[560px] flex-col overflow-hidden rounded-2xl border border-gold/40 bg-card shadow-2xl transition-all duration-200 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ats-lead-modal-heading"
      >
        {/* Header */}
        <div className="relative bg-ink px-6 py-6 sm:px-8">
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            className="absolute right-3 top-3 flex size-11 items-center justify-center text-white/50 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <X size={20} />
          </button>
          <h2 id="ats-lead-modal-heading" className="pr-8 text-2xl font-bold text-white">
            Book a <span className="text-gold">discovery call</span>
          </h2>
          <p className="mt-1.5 text-sm text-white/60">
            Tell us a bit about your business and we&apos;ll be in touch.
          </p>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto bg-background px-6 py-8 sm:px-8">
          {isSuccess ? (
            <div className="py-4 text-center">
              <span className="mb-6 block text-5xl text-gold" aria-hidden="true">
                ✦
              </span>
              <h3 className="text-2xl font-bold text-foreground">Enquiry received</h3>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Thanks for reaching out. Our team will review your details and contact you
                shortly to schedule your discovery call.
              </p>
              <button
                type="button"
                onClick={closeModal}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-md border border-gold bg-brand-blue px-8 py-3 text-sm font-semibold text-brand-blue-foreground transition-colors hover:bg-brand-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div>
                <label
                  htmlFor="ats-lead-name"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="ats-lead-name"
                  type="text"
                  value={formData.name}
                  onChange={updateField("name")}
                  aria-invalid={nameError}
                  className={`w-full rounded-md border bg-white px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold ${
                    nameError ? "border-gold" : "border-border"
                  }`}
                />
                {nameError && (
                  <p className="mt-1.5 text-xs font-medium text-gold-dark">Please enter your name</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="ats-lead-phone"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  Phone Number
                </label>
                <input
                  id="ats-lead-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={updateField("phone")}
                  aria-invalid={phoneError}
                  className={`w-full rounded-md border bg-white px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold ${
                    phoneError ? "border-gold" : "border-border"
                  }`}
                />
                {phoneError && (
                  <p className="mt-1.5 text-xs font-medium text-gold-dark">
                    Please enter your phone number
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="ats-lead-service"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  Service
                </label>
                <select
                  id="ats-lead-service"
                  value={formData.service}
                  onChange={updateField("service")}
                  aria-invalid={serviceError}
                  className={`w-full rounded-md border bg-white px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold ${
                    serviceError ? "border-gold" : "border-border"
                  }`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {serviceError && (
                  <p className="mt-1.5 text-xs font-medium text-gold-dark">Please select a service</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="ats-lead-email"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  Email Address (optional)
                </label>
                <input
                  id="ats-lead-email"
                  type="email"
                  value={formData.email}
                  onChange={updateField("email")}
                  className="w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold"
                />
              </div>

              {submitError && (
                <p className="text-sm font-medium text-gold-dark">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-gold bg-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue-foreground transition-colors hover:bg-brand-blue-dark disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {isSubmitting ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
