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

export const metadata: Metadata = {
  title: branding.siteTitle,
  description: branding.tagline,
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

