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
const siteDescription = 'Luxury forest resort in Kerala offering Classic Rooms, Deluxe Rooms, and Private Cottages. Experience nature\'s finest luxury accommodation in Chithirapuram, Munnar. Book your peaceful retreat today.'
const keywords = [
  'Winter Casa',
  'resort Kerala',
  'Munnar resort',
  'luxury resort Kerala',
  'forest resort',
  'cottages Kerala',
  'Chithirapuram resort',
  'nature resort',
  'luxury accommodation Kerala',
  'eco resort',
  'mountain resort',
  'peaceful retreat',
  'Classic Room',
  'Deluxe Room',
  'Private Cottage',
  'resort booking',
  'Kerala tourism',
  'Munnar accommodation',
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
    icon: '/favicon.png',
    apple: '/favicon.png',
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
        alt: 'Winter Casa Resort - Classic Room',
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

