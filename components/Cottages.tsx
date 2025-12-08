'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface Cottage {
  name: string
  description: string
  image: string
  images?: string[]
}

export default function Cottages() {
  const cottages: Cottage[] = [
    {
      name: 'Classic Room',
      description: 'Comfortable and cozy accommodations nestled in nature, perfect for a peaceful retreat. Complimentary coffee and tea included.',
      image: '/Classic1.jpg',
      images: ['/Classic1.jpg', '/Classic2.jpg', '/Classic3.jpg'],
    },
    {
      name: 'Deluxe Room',
      description: 'Spacious and elegantly designed rooms with premium amenities, offering an enhanced stay experience. Complimentary coffee and tea included.',
      image: '/Deluxe1.jpg',
      images: ['/Deluxe1.jpg', '/Deluxe2.jpg', '/Deluxe3.jpg'],
    },
    {
      name: 'Private Cottage',
      description: 'Exclusive cottage accommodations with private outdoor space, perfect for gatherings, campfire evenings, and special celebrations. Complimentary coffee and tea included.',
      image: '/PrivateCottage.jpg',
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})

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
          <p className="text-xl md:text-2xl lg:text-3xl text-forest/70 font-body max-w-2xl mx-auto">
            Each retreat is thoughtfully designed to offer comfort and connection with nature
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cottages.map((cottage, index) => {
            const hasMultipleImages = cottage.images && cottage.images.length > 1
            const currentIndex = currentImageIndex[index] || 0
            const images = cottage.images || [cottage.image]

            const nextImage = () => {
              if (hasMultipleImages) {
                setCurrentImageIndex((prev) => ({
                  ...prev,
                  [index]: (currentIndex + 1) % images.length,
                }))
              }
            }

            const prevImage = () => {
              if (hasMultipleImages) {
                setCurrentImageIndex((prev) => ({
                  ...prev,
                  [index]: (currentIndex - 1 + images.length) % images.length,
                }))
              }
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-white rounded-lg overflow-hidden border border-forest/10 hover:border-gold/40 transition-all duration-300 shadow-sm hover:shadow-xl"
                whileHover={{ y: -4 }}
              >
                {/* Image Carousel */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  {hasMultipleImages ? (
                    <>
                      {/* Images Container */}
                      <div className="relative h-full w-full">
                        {images.map((img, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            initial={false}
                            animate={{
                              x: `-${currentIndex * 100}%`,
                              opacity: imgIndex === currentIndex ? 1 : 0,
                            }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={img}
                              alt={`${cottage.name} - Image ${imgIndex + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                          </motion.div>
                        ))}
                      </div>

                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-forest p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        aria-label="Previous image"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-forest p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        aria-label="Next image"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>

                      {/* Dots Indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() =>
                              setCurrentImageIndex((prev) => ({
                                ...prev,
                                [index]: imgIndex,
                              }))
                            }
                            className={`h-2 rounded-full transition-all duration-300 ${
                              imgIndex === currentIndex
                                ? 'w-6 bg-gold'
                                : 'w-2 bg-white/60 hover:bg-white/80'
                            }`}
                            aria-label={`Go to image ${imgIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <Image
                      src={cottage.image}
                      alt={cottage.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-forest mb-2">
                    {cottage.name}
                  </h3>
                  <p className="text-lg md:text-xl text-forest/60 font-body mb-5 leading-relaxed">
                    {cottage.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

