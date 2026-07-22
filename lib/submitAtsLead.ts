export interface AtsLeadPayload {
  name: string
  phone: string
  service: string
  email: string | null
  timestamp: string
  source_page: string
  source_label: string
  lead_type: string
  conversion_path: string
}

export async function submitAtsLead(payload: AtsLeadPayload): Promise<{ success: true }> {
  const webhookUrl = process.env.NEXT_PUBLIC_ATS_N8N_WEBHOOK_URL

  if (!webhookUrl) {
    console.error("[Abantu Tech Solutions] NEXT_PUBLIC_ATS_N8N_WEBHOOK_URL is not set.")
    throw new Error("Webhook URL not configured.")
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Webhook responded with status ${response.status}`)
  }

  return { success: true }
}
