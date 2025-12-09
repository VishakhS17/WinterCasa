'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { getBranding } from '@/lib/theme'

export default function Navbar() {
  const { scrollY } = useScroll()
  const [heroHeight, setHeroHeight] = useState(800)
  const [textColor, setTextColor] = useState<'white' | 'forest'>('white')
  const heroRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const cottagesRef = useRef<HTMLElement | null>(null)
  const testimonialsRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  const branding = getBranding()

  useEffect(() => {
    setHeroHeight(window.innerHeight)
    
    // Get all section elements
    heroRef.current = document.getElementById('home')
    aboutRef.current = document.getElementById('about')
    cottagesRef.current = document.getElementById('cottages')
    testimonialsRef.current = document.getElementById('testimonials')
    contactRef.current = document.getElementById('contact')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const checkPoint = 200 // Pixels from top of viewport to check section
      
      // Get all section rects
      const heroRect = heroRef.current?.getBoundingClientRect()
      const aboutRect = aboutRef.current?.getBoundingClientRect()
      const cottagesRect = cottagesRef.current?.getBoundingClientRect()
      const testimonialsRect = testimonialsRef.current?.getBoundingClientRect()
      const contactRect = contactRef.current?.getBoundingClientRect()
      
      // Determine which section contains the check point
      // A section is active if the check point is within its bounds
      let currentSection: 'hero' | 'about' | 'cottages' | 'testimonials' | 'contact' | null = null
      
      // Check sections from top to bottom
      // Section is active if check point is between its top and bottom
      if (heroRect && heroRect.top <= checkPoint && heroRect.bottom >= checkPoint) {
        currentSection = 'hero'
      } else if (aboutRect && aboutRect.top <= checkPoint && aboutRect.bottom >= checkPoint) {
        currentSection = 'about'
      } else if (cottagesRect && cottagesRect.top <= checkPoint && cottagesRect.bottom >= checkPoint) {
        currentSection = 'cottages'
      } else if (testimonialsRect && testimonialsRect.top <= checkPoint && testimonialsRect.bottom >= checkPoint) {
        currentSection = 'testimonials'
      } else if (contactRect && contactRect.top <= checkPoint && contactRect.bottom >= checkPoint) {
        currentSection = 'contact'
      }
      
      // Set color: green for cottages/contact, white for others (hero, about, testimonials)
      if (currentSection === 'cottages' || currentSection === 'contact') {
        setTextColor('forest')
      } else if (currentSection) {
        setTextColor('white')
      }
    }

    // Use requestAnimationFrame for smooth updates
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll() // Check on mount
    
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Transform scroll position for navbar shrinking effect
  const navbarPadding = useTransform(
    scrollY,
    [0, heroHeight * 0.5],
    [16, 10]
  )
  const navbarShadow = useTransform(
    scrollY,
    [0, heroHeight * 0.5],
    ['0 0 0 rgba(0, 0, 0, 0)', '0 10px 40px rgba(0, 0, 0, 0.3)']
  )
  const logoSize = useTransform(
    scrollY,
    [0, heroHeight * 0.5],
    [1, 0.9]
  )
  const navbarScale = useTransform(
    scrollY,
    [0, heroHeight * 0.5],
    [1, 0.92]
  )

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cottages', href: '#cottages' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: 0 }}
      className="fixed top-4 left-4 right-4 z-50"
      style={{ scale: navbarScale }}
    >
      <motion.div
        className="max-w-[1300px] mx-auto px-6 rounded-2xl backdrop-blur-xl border border-white/20"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          paddingTop: navbarPadding,
          paddingBottom: navbarPadding,
          boxShadow: navbarShadow,
        }}
      >
        <div className="flex items-center justify-between">
          <motion.div style={{ scale: logoSize }}>
            <Link
              href="/"
              className="text-2xl md:text-3xl font-heading font-bold z-10 block text-transparent bg-clip-text bg-gradient-to-r from-[#8b6b2c] via-[#f5e3a1] to-[#d4af37]"
            >
              {branding.siteTitle}
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative transition-colors duration-200 font-body text-base md:text-lg uppercase tracking-wider group font-medium ${
                  textColor === 'forest'
                    ? 'text-forest/90 hover:text-forest'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </div>

          <Link
            href="/booking"
            className="px-5 md:px-7 py-2.5 md:py-3 bg-gold text-forest font-semibold rounded-lg hover:bg-gold/90 transition-all duration-200 font-body text-base md:text-lg uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  )
}

