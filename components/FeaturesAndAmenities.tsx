'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Attraction {
  name: string
  distance: string
}

interface Facility {
  name: string
}

export default function FeaturesAndAmenities() {
  const attractions: Attraction[] = [
    {
      name: 'Dream Land Fun and Adventure Park',
      distance: '4.8 km',
    },
    {
      name: 'Wonder Valley Adventure and Amusement Park',
      distance: '4.7 km',
    },
    {
      name: 'Hot Air Balloon',
      distance: '4.1 km',
    },
    {
      name: 'Zip line',
      distance: '4.1 km',
    },
  ]

  const facilities: Facility[] = [
    {
      name: 'Car Parking',
    },
    {
      name: 'Free wifi',
    },
    {
      name: 'Rooftop Events and Party space',
    },
    {
      name: 'Food available on order',
    },
    {
      name: 'Jeep safari arrangements on request',
    },
    {
      name: 'Campfire and barbecue facilities available',
    },
  ]

  const LocationIcon = () => (
    <svg className="w-5 h-5 fill-gold text-gold" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )

  const CheckIcon = () => (
    <svg className="w-5 h-5 fill-gold text-gold flex-shrink-0" viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  )

  return (
    <section
      id="features-amenities"
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Mountain forest background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-forest/80" />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Features & Highlights
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-white/80 font-body max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Our scenic rooftop lounge offers a refined open-air setting for private events and celebrations. Curated food services can be arranged from select partner restaurants, and guided jeep safari experiences are available on request through licensed operators.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Nearby Attractions Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-gold/30 transition-all duration-300"
          >
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Nearby Attractions
            </h3>
            <div className="space-y-4">
              {attractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-b-0"
                >
                  <div className="flex items-center gap-2 mt-1">
                    <LocationIcon />
                    <span className="text-gold font-semibold font-body text-base">
                      {attraction.distance}
                    </span>
                  </div>
                  <p className="text-white font-body text-lg md:text-xl flex-1">
                    {attraction.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Facilities Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-gold/30 transition-all duration-300"
          >
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Facilities
            </h3>
            <div className="space-y-4">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 pb-4 border-b border-white/10 last:border-b-0"
                >
                  <CheckIcon />
                  <p className="text-white font-body text-lg md:text-xl flex-1">
                    {facility.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

