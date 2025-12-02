'use client'

import { motion } from 'framer-motion'
import { getAssets } from '@/lib/theme'
import Image from 'next/image'

export default function Contact() {
  const assets = getAssets()

  const contactInfo = {
    address: 'Power House Road,Chithirapuram, Chithirapuram, Kerala 685565',
    phonePrimary: '+91 9496101377',
    phoneSecondary: '+91 8113057252',
    instagramUrl: 'https://www.instagram.com/winter_casa/',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4302.290346115264!2d77.0495117!3d10.0296132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07985c371978c9%3A0x9cbd5c488cc247e9!2sWinter%20Casa%20Resort%20and%20Cottages!5e1!3m2!1sen!2sin!4v1764669175330!5m2!1sen!2sin',
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen py-32 px-6 bg-offwhite"
    >
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-forest mb-4">
            Find Us
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6" />
          <p className="text-xl md:text-2xl lg:text-3xl text-forest/70 font-body max-w-2xl mx-auto">
            Nestled in nature's embrace, discover your path to tranquility
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-forest mb-8">
                Get in Touch
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-forest mb-1 font-body">
                      Address
                    </p>
                    <p className="text-lg md:text-xl text-forest/60 font-body leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-forest mb-1 font-body">
                      Phone
                    </p>
                    <div className="space-y-1">
                      <a
                        href={`tel:${contactInfo.phonePrimary}`}
                        className="block text-lg md:text-xl text-forest/60 hover:text-gold transition-colors font-body"
                      >
                        {contactInfo.phonePrimary}
                      </a>
                      <a
                        href={`tel:${contactInfo.phoneSecondary}`}
                        className="block text-lg md:text-xl text-forest/60 hover:text-gold transition-colors font-body"
                      >
                        {contactInfo.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-forest mb-1 font-body">
                      Instagram
                    </p>
                    <a
                      href={contactInfo.instagramUrl}
                      className="text-lg md:text-xl text-forest/60 hover:text-gold transition-colors font-body"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @winter_casa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-lg overflow-hidden shadow-lg border border-forest/20"
          >
            {contactInfo.mapUrl ? (
              <iframe
                src={contactInfo.mapUrl}
                width="100%"
                height="100%"
                style={{ minHeight: '400px', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            ) : (
              <div className="relative w-full h-[400px]">
                <Image
                  src={assets.contactMapFallback || '/img1.jpg'}
                  alt="Location map"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

