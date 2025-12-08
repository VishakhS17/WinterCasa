'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Features() {
  const nearbyAttractions = [
    { name: 'Dream Land Fun and Adventure Park', distance: '4.8 km' },
    { name: 'Wonder Valley Adventure and Amusement Park', distance: '4.7 km' },
    { name: 'Hot Air Balloon', distance: '4.1 km' },
    { name: 'Zip line', distance: '4.1 km' },
  ]

  const facilities = [
    'Car Parking',
    'Free wifi',
    'Rooftop Events and Party space',
    'Food available on order',
    'Jeep safari arrangements on request',
    'Campfire and barbecue facilities available',
  ]

  return (
    <section
      id="features"
      className="relative min-h-screen py-32 px-6"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Winter Casa Resort features and amenities in forest setting, Kerala"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-forest/75" />
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
            Features & Amenities
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6" />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-white/90 font-body leading-relaxed text-center">
            Guests can unwind at our scenic open-air rooftop lounge, ideal for private gatherings and celebrations. Curated dining options are available on request from select nearby restaurants, and thrilling jeep safari experiences can be arranged through licensed operators.
          </p>
        </motion.div>

        {/* Two Frosted Glass Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Nearby Attractions Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 lg:p-10 border border-white/10 hover:border-gold/30 transition-all duration-300 shadow-lg"
          >
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 pb-4 border-b border-white/20">
              Nearby Attractions
            </h3>
            <ul className="space-y-4">
              {nearbyAttractions.map((attraction, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-gold font-semibold text-lg mt-1 flex-shrink-0">
                    {index + 1}.
                  </span>
                  <div className="flex-1">
                    <p className="text-white font-body text-lg md:text-xl mb-1">
                      {attraction.name}
                    </p>
                    <p className="text-white/70 font-body text-base md:text-lg">
                      {attraction.distance}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Facilities Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 lg:p-10 border border-white/10 hover:border-gold/30 transition-all duration-300 shadow-lg"
          >
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 pb-4 border-b border-white/20">
              Facilities
            </h3>
            <ul className="space-y-4">
              {facilities.map((facility, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-gold font-semibold text-lg mt-1 flex-shrink-0">
                    {index + 1}.
                  </span>
                  <p className="text-white font-body text-lg md:text-xl">
                    {facility}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

