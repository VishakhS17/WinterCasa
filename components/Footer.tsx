'use client'

import { motion } from 'framer-motion'
import { getBranding } from '@/lib/theme'

export default function Footer() {
  const branding = getBranding()

  const footerLinks = {
    explore: [
      { name: 'About', href: '#about' },
      { name: 'Cottages', href: '#cottages' },
      { name: 'Dining', href: '#dining' },
      { name: 'Gallery', href: '#gallery' },
    ],
    information: [
      { name: 'Contact', href: '#contact' },
      { name: 'Booking', href: '#book' },
      { name: 'Policies', href: '#policies' },
      { name: 'FAQ', href: '#faq' },
    ],
    social: [
      { name: 'Facebook', href: '#', icon: '📘' },
      { name: 'Instagram', href: '#', icon: '📷' },
      { name: 'Twitter', href: '#', icon: '🐦' },
    ],
  }

  return (
    <footer className="relative bg-forest text-white py-20 px-6">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-heading font-bold mb-4 text-gold">
              {branding.siteTitle}
            </h3>
            <p className="text-lg md:text-xl text-white/60 font-body leading-relaxed">
              A sanctuary where luxury meets nature. Experience the tranquility
              of the forest in unparalleled comfort.
            </p>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-5 font-body uppercase tracking-wider text-gold">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-lg text-white/60 hover:text-gold transition-colors duration-200 font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-5 font-body uppercase tracking-wider text-gold">
              Information
            </h4>
            <ul className="space-y-3">
              {footerLinks.information.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-lg text-white/60 hover:text-gold transition-colors duration-200 font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-5 font-body uppercase tracking-wider text-gold">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-lg text-white/60 hover:text-gold transition-colors duration-200 font-body flex items-center gap-2"
                  >
                    <span>{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
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

