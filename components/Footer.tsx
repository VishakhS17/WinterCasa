'use client'

import { motion } from 'framer-motion'
import { getBranding } from '@/lib/theme'

export default function Footer() {
  const branding = getBranding()

  return (
    <footer className="relative bg-forest text-white py-20 px-6">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-heading font-bold mb-4 text-gold">
              {branding.siteTitle}
            </h3>
            <p className="text-lg md:text-xl text-white/60 font-body leading-relaxed max-w-2xl mx-auto">
              A sanctuary where luxury meets nature. Experience the tranquility
              of the forest in unparalleled comfort.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-lg text-white/50 font-body">
            © {new Date().getFullYear()} {branding.siteTitle}. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

