import Navbar from '@/components/Navbar'
import Booking from '@/components/Booking'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Your Stay | Winter Casa Resort & Cottages',
  description: 'Reserve your perfect forest sanctuary experience at Winter Casa Resort in Munnar, Kerala. Book your luxury accommodation today.',
}

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Booking />
      <Footer />
    </main>
  )
}

