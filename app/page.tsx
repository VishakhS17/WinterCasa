import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Cottages from '@/components/Cottages'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Luxury forest resort in Kerala offering Classic Rooms, Deluxe Rooms, and Private Cottages. Experience nature\'s finest luxury accommodation in Chithirapuram, Munnar. Book your peaceful retreat today.',
  openGraph: {
    title: 'Winter Casa Resort & Cottages | Luxury Forest Resort in Kerala',
    description: 'Experience nature\'s finest luxury accommodation in Chithirapuram, Munnar. Book your peaceful retreat today.',
  },
}

// Structured Data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Resort',
  name: 'Winter Casa Resort & Cottages',
  alternateName: 'Winter Casa',
  description: 'Luxury forest resort in Kerala offering Classic Rooms, Deluxe Rooms, and Private Cottages',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://wintercasa.com',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://wintercasa.com'}/favicon.png`,
  image: [
    `${process.env.NEXT_PUBLIC_SITE_URL || 'https://wintercasa.com'}/Classic1.jpg`,
    `${process.env.NEXT_PUBLIC_SITE_URL || 'https://wintercasa.com'}/Deluxe1.jpg`,
    `${process.env.NEXT_PUBLIC_SITE_URL || 'https://wintercasa.com'}/PrivateCottage.jpg`,
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Power House Road, Chithirapuram',
    addressLocality: 'Chithirapuram',
    addressRegion: 'Kerala',
    postalCode: '685565',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '10.0296132',
    longitude: '77.0495117',
  },
  telephone: ['+917902868450', '+919496101377', '+918113057252'],
  priceRange: '$$',
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Nature Views',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Private Cottages',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Complimentary Coffee & Tea',
      value: true,
    },
  ],
  starRating: {
    '@type': 'Rating',
    ratingValue: '5',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '50',
  },
  sameAs: [
    'https://www.instagram.com/winter_casa/',
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <Cottages />
      <Features />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
    </>
  )
}

