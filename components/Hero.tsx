'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { getBranding } from '@/lib/theme'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(useTransform(mouseX, [-1, 1], [-20, 20]), springConfig)
  const y = useSpring(useTransform(mouseY, [-1, 1], [-20, 20]), springConfig)

  const branding = getBranding()

  // Forest-themed image placeholders from Unsplash
  const slideImages = [
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80', // Misty forest path
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', // Mountain forest
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80', // Dense forest
    'https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80', // Forest cabin
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1920&q=80', // Serene forest
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80', // Woodland trail
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, 5000) // 5 seconds per slide

    return () => clearInterval(interval)
  }, [slideImages.length])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / (rect.width / 2))
    mouseY.set((e.clientY - centerY) / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {slideImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1.05 : 1,
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        ))}
      </div>

      {/* Forest gradient overlay */}
      <div className="absolute inset-0 forest-gradient z-10" />

      {/* Subtle fog animation layer */}
      <motion.div
        className="absolute inset-0 z-10 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6"
        style={{ x, y }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6"
        >
          {branding.siteTitle}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 w-24 bg-gold mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-12 max-w-2xl font-body"
        >
          {branding.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#book"
            className="px-8 py-3.5 bg-gold text-forest font-semibold rounded-lg hover:bg-gold/90 transition-all duration-200 font-body text-lg uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Now
          </Link>
          <Link
            href="#about"
            className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 font-body text-lg uppercase tracking-wider border border-white/20 hover:scale-105"
          >
            Explore
          </Link>
        </motion.div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-300 ${
              currentSlide === index
                ? 'w-8 bg-gold'
                : 'w-1.5 bg-white/50 hover:bg-white/75'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
