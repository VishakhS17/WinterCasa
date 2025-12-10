import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { getBranding } from '@/lib/theme'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const branding = getBranding()

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wintercasa.com'
const siteName = 'Winter Casa Resort & Cottages'
const siteDescription = 'Winter Casa - The best resort in Munnar, Kerala. Luxury forest resort offering Deluxe Rooms and Private Cottages in Chithirapuram. Experience nature\'s finest luxury accommodation. Book your peaceful retreat today.'
const keywords = [
  'resorts in Munnar',
  'best resort in Munnar',
  'Munnar resorts',
  'luxury resorts Munnar',
  'resorts Munnar Kerala',
  'top resorts in Munnar',
  'Munnar resort booking',
  'Winter Casa',
  'resort Kerala',
  'Munnar resort',
  'luxury resort Kerala',
  'forest resort Munnar',
  'cottages Kerala',
  'Chithirapuram resort',
  'nature resort Munnar',
  'luxury accommodation Kerala',
  'eco resort Munnar',
  'mountain resort Kerala',
  'peaceful retreat Munnar',
  'Deluxe Room Munnar',
  'Private Cottage Munnar',
  'resort booking Munnar',
  'Kerala tourism',
  'Munnar accommodation',
  'Munnar hotels',
  'resorts near Munnar',
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${branding.siteTitle} | ${siteName}`,
    template: `%s | ${branding.siteTitle}`,
  },
  description: siteDescription,
  keywords: keywords,
  authors: [{ name: 'Winter Casa Resort' }],
  creator: 'Winter Casa Resort',
  publisher: 'Winter Casa Resort',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: siteName,
    title: `${branding.siteTitle} | ${siteName}`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/Classic1.jpg`,
        width: 1200,
        height: 630,
        alt: 'Winter Casa Resort - Deluxe Room',
      },
      {
        url: `${siteUrl}/Deluxe1.jpg`,
        width: 1200,
        height: 630,
        alt: 'Winter Casa Resort - Deluxe Room',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${branding.siteTitle} | ${siteName}`,
    description: siteDescription,
    images: [`${siteUrl}/Classic1.jpg`],
    creator: '@winter_casa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Travel & Tourism',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cormorantGaramond.variable}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

