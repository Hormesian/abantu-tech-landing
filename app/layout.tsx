import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Abantu Tech Solutions | Save Time, Close More Leads, Stay in Control',
  description:
    'Abantu Tech Solutions helps Kenyan SMEs turn their website into a lead engine, then adds a local AI assistant to follow up, quote, and find business information faster — without losing control of their data. Nairobi & Kisii, Kenya.',
  generator: 'v0.app',
  metadataBase: new URL('https://www.abantutech.co.ke'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Abantu Tech Solutions | Save Time, Close More Leads, Stay in Control',
    description:
      'Abantu Tech Solutions helps Kenyan SMEs turn their website into a lead engine, then adds a local AI assistant to follow up, quote, and find business information faster — without losing control of their data. Nairobi & Kisii, Kenya.',
    url: 'https://www.abantutech.co.ke',
    siteName: 'Abantu Tech Solutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abantu Tech Solutions — Save time. Close more business. Reduce admin stress.',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abantu Tech Solutions | Save Time, Close More Leads, Stay in Control',
    description:
      'Abantu Tech Solutions helps Kenyan SMEs turn their website into a lead engine, then adds a local AI assistant to follow up, quote, and find business information faster — without losing control of their data. Nairobi & Kisii, Kenya.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f6f8',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Abantu Tech Solutions',
  telephone: '+254740844520',
  url: 'https://www.abantutech.co.ke',
  address: {
    '@type': 'PostalAddress',
    postOfficeBoxNumber: 'P.O. Box 11476-00100',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`light ${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics gaId="[GA4_MEASUREMENT_ID]" />}
    </html>
  )
}
