'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { getBranding } from '@/lib/theme'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(useTransform(mouseX, [-1, 1], [-20, 20]), springConfig)
  const y = useSpring(useTransform(mouseY, [-1, 1], [-20, 20]), springConfig)

  const branding = getBranding()

  // Set mounted state on client side only
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handle audio playback based on hero section visibility
  useEffect(() => {
    if (!isMounted) return

    const audio = audioRef.current
    const section = document.getElementById('home')
    
    if (!audio || !section) return

    // Set audio volume (0.0 to 1.0)
    audio.volume = 0.5

    // Function to play/resume audio
    const playAudio = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        // Autoplay was prevented - will be enabled on user interaction
        setIsPlaying(false)
      }
    }

    // Function to pause audio
    const pauseAudio = () => {
      audio.pause()
      setIsPlaying(false)
    }

    // Try to play immediately when page loads
    const tryInitialPlay = () => {
      // Wait for audio to be ready
      if (audio.readyState >= 2) { // HAVE_CURRENT_DATA or higher
        playAudio()
      } else {
        // Wait for audio to load
        audio.addEventListener('canplaythrough', playAudio, { once: true })
      }
    }

    // Start playing immediately
    const initialTimeout = setTimeout(tryInitialPlay, 200)

    // Handle intersection changes (scroll in/out of hero section)
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          // Hero section is visible - resume/play audio
          playAudio()
        } else {
          // Hero section is not visible - pause audio
          pauseAudio()
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.3, 0.5], // Multiple thresholds for smoother transitions
    })

    observer.observe(section)

    // Enable audio on first user interaction if autoplay was blocked
    const enableAudioOnInteraction = () => {
      if (audio.paused && section.getBoundingClientRect().top < window.innerHeight) {
        playAudio()
      }
      // Remove listeners after first successful interaction
      document.removeEventListener('click', enableAudioOnInteraction)
      document.removeEventListener('scroll', enableAudioOnInteraction)
      document.removeEventListener('touchstart', enableAudioOnInteraction)
      document.removeEventListener('keydown', enableAudioOnInteraction)
    }

    // Add multiple interaction listeners to catch any user action
    document.addEventListener('click', enableAudioOnInteraction, { once: true })
    document.addEventListener('scroll', enableAudioOnInteraction, { once: true })
    document.addEventListener('touchstart', enableAudioOnInteraction, { once: true })
    document.addEventListener('keydown', enableAudioOnInteraction, { once: true })

    return () => {
      clearTimeout(initialTimeout)
      observer.disconnect()
      audio.pause()
      audio.removeEventListener('canplaythrough', playAudio)
      document.removeEventListener('click', enableAudioOnInteraction)
      document.removeEventListener('scroll', enableAudioOnInteraction)
      document.removeEventListener('touchstart', enableAudioOnInteraction)
      document.removeEventListener('keydown', enableAudioOnInteraction)
    }
  }, [isMounted])

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
      {/* Background audio - plays only when hero section is visible */}
      {isMounted && (
        <audio
          ref={audioRef}
          loop
          preload="auto"
          crossOrigin="anonymous"
        >
          <source src="/hero-music.mp3" type="audio/mpeg" />
          <source src="/hero-music.ogg" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      )}
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/IMG_3646.mp4" type="video/mp4" />
        </video>
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
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-gold to-gold/70"
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
            href="/booking"
            className="px-8 py-3.5 bg-gold text-forest font-semibold rounded-lg hover:bg-gold/90 transition-all duration-200 font-body text-lg uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Now
          </Link>
        </motion.div>
      </motion.div>

    </section>
  )
}
