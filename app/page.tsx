 import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Cottages from '@/components/Cottages'
import FeaturesAndAmenities from '@/components/FeaturesAndAmenities'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Resort in Munnar | Winter Casa Resort & Cottages | Luxury Forest Resort',
  description: 'Winter Casa - The best resort in Munnar, Kerala. Luxury forest resort offering Deluxe Rooms and Private Cottages in Chithirapuram. Experience nature\'s finest luxury accommodation. Book your peaceful retreat today.',
  openGraph: {
    title: 'Best Resort in Munnar | Winter Casa Resort & Cottages | Luxury Forest Resort',
    description: 'Winter Casa - Premium resort in Munnar, Kerala. Experience nature\'s finest luxury accommodation in Chithirapuram. Book your peaceful retreat today.',
  },
}

// Structured Data for SEO
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wintercasa.com'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Resort',
  '@id': `${siteUrl}#resort`,
  name: 'Winter Casa Resort & Cottages',
  alternateName: 'Winter Casa',
  description: 'The best luxury resort in Munnar, Kerala. Offering Deluxe Rooms and Private Cottages in the heart of pristine forest wilderness.',
  url: siteUrl,
  logo: `${siteUrl}/favicon.png`,
  image: [
    `${siteUrl}/Classic1.jpg`,
    `${siteUrl}/Deluxe1.jpg`,
    `${siteUrl}/PrivateCottage.jpg`,
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Power House Road, Chithirapuram',
    addressLocality: 'Munnar',
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
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Forest Location',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Luxury Accommodation',
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
  keywords: 'resort in Munnar, best resort in Munnar, Munnar resort, luxury resort Munnar, resort Munnar Kerala',
  areaServed: {
    '@type': 'City',
    name: 'Munnar',
  },
}

// LocalBusiness Schema for better local SEO
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}#localbusiness`,
  name: 'Winter Casa Resort & Cottages',
  image: `${siteUrl}/favicon.png`,
  url: siteUrl,
  telephone: '+917902868450',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Power House Road, Chithirapuram',
    addressLocality: 'Munnar',
    addressRegion: 'Kerala',
    postalCode: '685565',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '10.0296132',
    longitude: '77.0495117',
  },
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '50',
  },
}

// FAQ Schema for common questions
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best resort in Munnar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Winter Casa Resort & Cottages is the best luxury resort in Munnar, Kerala. Located in Chithirapuram, we offer Deluxe Rooms and Private Cottages surrounded by pristine forest wilderness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where to stay in Munnar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Winter Casa Resort & Cottages offers premium accommodation in Munnar with luxury forest cottages and rooms. Our resort is located in Chithirapuram, providing an ideal base for exploring Munnar\'s natural beauty.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of rooms are available at Winter Casa Resort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Winter Casa Resort offers two types of accommodation: Deluxe Rooms and Private Cottages. All rooms are designed to blend luxury with nature, providing stunning forest views and premium amenities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to book a resort in Munnar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book your stay at Winter Casa Resort & Cottages directly through our website. We offer easy online booking for Deluxe Rooms and Private Cottages. Contact us at +917902868450 for assistance.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <Cottages />
      <FeaturesAndAmenities />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
    </>
  )
}

