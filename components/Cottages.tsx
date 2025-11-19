'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Cottage {
  name: string
  description: string
  image: string
  price?: string
  features?: string[]
}

export default function Cottages() {
  // Default cottages data - can be extended from config
  const cottages: Cottage[] = [
    {
      name: 'Forest View Suite',
      description: 'Panoramic forest vistas with floor-to-ceiling windows',
      image: '/img5.jpg',
      price: 'From $299/night',
      features: ['King Bed', 'Private Deck', 'Fireplace', 'Spa Bath'],
    },
    {
      name: 'Canopy Cabin',
      description: 'Elevated luxury among the treetops',
      image: '/img6.jpg',
      price: 'From $349/night',
      features: ['Loft Style', 'Hot Tub', 'Nature Sounds', 'Minibar'],
    },
    {
      name: 'Riverside Retreat',
      description: 'Serene water views with private access',
      image: '/img7.jpg',
      price: 'From $379/night',
      features: ['Waterfront', 'Kayak Access', 'Outdoor Shower', 'BBQ Area'],
    },
    {
      name: 'Mountain Hideaway',
      description: 'Secluded cabin with mountain panoramas',
      image: '/img8.jpg',
      price: 'From $329/night',
      features: ['Mountain Views', 'Hiking Trails', 'Cozy Fireplace', 'Full Kitchen'],
    },
  ]

  return (
    <section
      id="cottages"
      className="relative min-h-screen py-32 px-6"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80"
          alt="Cabin background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-offwhite/95" />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-forest mb-4">
            Our Cottages
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6" />
          <p className="text-lg md:text-xl text-forest/70 font-body max-w-2xl mx-auto">
            Each retreat is thoughtfully designed to offer comfort and connection with nature
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cottages.map((cottage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-white rounded-lg overflow-hidden border border-forest/10 hover:border-gold/40 transition-all duration-300 shadow-sm hover:shadow-xl"
              whileHover={{ y: -4 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={cottage.image}
                  alt={cottage.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-forest mb-2">
                  {cottage.name}
                </h3>
                <p className="text-base text-forest/60 font-body mb-5 leading-relaxed">
                  {cottage.description}
                </p>

                {cottage.price && (
                  <div className="pt-4 border-t border-forest/10">
                    <p className="text-base font-semibold text-gold">
                      {cottage.price}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

