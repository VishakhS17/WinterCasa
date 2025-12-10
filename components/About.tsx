'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { getAssets } from '@/lib/theme'

export default function About() {
  const assets = getAssets()

  const aboutContent = {
    title: 'A Sanctuary in the Forest',
    content: `Nestled in the heart of pristine wilderness, Winter Casa offers an escape to tranquility. Our luxury cottages blend seamlessly with nature, providing an unparalleled experience where forest whispers meet refined comfort. Every detail is crafted to immerse you in the serenity of the woods while indulging in premium amenities.`,
    seoContent: `Winter Casa Resort & Cottages stands as the best resort in Munnar, Kerala. Located in the scenic Chithirapuram area, our luxury resort in Munnar offers an exceptional experience for travelers seeking the finest accommodation. As the top resort in Munnar, we provide Deluxe Rooms and Private Cottages that combine luxury with nature. When searching for the best resort in Munnar, Winter Casa offers unmatched forest views, premium amenities, and a peaceful retreat away from the hustle of city life. Book your stay at Munnar's most sought-after luxury resort today.`,
  }

  const imageGrid = ['/IMG20251114132916.jpg', '/img2.jpg', '/img4.jpg'].filter(Boolean)

  return (
    <section
      id="about"
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80"
          alt="Winter Casa Resort - Pristine forest wilderness in Kerala, Munnar"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-forest/75" />
      </div>

      <div className="relative z-20 max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight"
            >
              {aboutContent.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 w-20 bg-gold"
            />

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed font-body"
            >
              {aboutContent.content}
            </motion.p>

            {/* SEO-optimized content section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-gold/20"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-gold mb-4">
                Best Resort in Munnar
              </h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                {aboutContent.seoContent}
              </p>
            </motion.div>
          </div>

          {/* Right: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative grid grid-cols-2 grid-rows-2 gap-3 h-[500px]"
          >
            {imageGrid.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`relative rounded-lg overflow-hidden ${
                  index === 0
                    ? 'col-span-2 border border-gold/40'
                    : 'border border-gold/20'
                }`}
                whileHover={{ scale: 1.02, zIndex: 10 }}
              >
                <Image
                  src={img}
                  alt={`Winter Casa Resort ${index === 0 ? 'luxury accommodation' : index === 1 ? 'forest cottage exterior' : 'nature retreat views'} - Premium resort in Chithirapuram, Kerala`}
                  fill
                  className="object-cover transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

