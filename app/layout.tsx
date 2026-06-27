import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import { type ReactNode } from 'react'
import './globals.css'
import { Navbar }      from '@/components/layout/Navbar'
import { Footer }      from '@/components/layout/Footer'
import { WhatsAppFAB } from '@/components/layout/WhatsAppFAB'
import { FIRM }        from '@/lib/constants'
import { Analytics }   from '@vercel/analytics/next'

// ─── Font loading via next/font (no render-blocking) ─────────────────────

const dmSerifDisplay = DM_Serif_Display({
  subsets:  ['latin'],
  weight:   ['400'],
  style:    ['normal', 'italic'],
  display:  'swap',
  variable: '--font-dm-serif',
  preload:  true,
})

const inter = Inter({
  subsets:  ['latin'],
  display:  'swap',
  variable: '--font-inter',
  preload:  true,
})

// ─── Default site metadata ────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.msmadvocates.co.ug'
  ),
  title: {
    default:  'MSM Advocates | Commercial and Litigation Law Firm in Kampala, Uganda',
    template: '%s | MSM Advocates',
  },
  description:
    'MSM Advocates is a leading Kampala law firm offering corporate, litigation, land, employment, banking, IP, and tax legal services. Trusted counsel before Uganda\'s Supreme Court since 2007.',
  keywords: [
    'law firm Uganda',
    'advocates Kampala',
    'commercial law Uganda',
    'litigation Uganda',
    'MSM Advocates',
    'Uganda High Court',
    'Supreme Court Uganda',
    'employment law Uganda',
    'land law Uganda',
    'banking law Uganda',
  ],
  authors: [{ name: 'MSM Advocates' }],
  creator: 'MSM Advocates',
  publisher: 'MSM Advocates',
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:            true,
      follow:           true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':    -1,
    },
  },
  openGraph: {
    type:        'website',
    locale:      'en_UG',
    url:         'https://www.msmadvocates.co.ug',
    siteName:    'MSM Advocates',
    title:       'MSM Advocates | Commercial and Litigation Law Firm in Kampala, Uganda',
    description: 'Trusted legal counsel in Uganda since 2007. Corporate, litigation, land, employment, banking, IP, and taxation law.',
    images: [
      {
        url:    '/og-default.jpg',
        width:  1200,
        height: 630,
        alt:    'MSM Advocates — Kampala Law Firm',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'MSM Advocates | Kampala Law Firm',
    description: 'Trusted legal counsel in Uganda since 2007.',
    images:      ['/og-default.jpg'],
  },
  icons: {
    icon:   '/favicon.ico',
    apple:  '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  manifest: '/site.webmanifest',
}

// ─── Root layout ──────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">
        <Navbar />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <WhatsAppFAB />
        <Analytics />
      </body>
    </html>
  )
}
