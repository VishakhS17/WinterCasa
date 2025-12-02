'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: '',
    breakfast: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    specialRequests: '',
  })

  const roomTypes = [
    'Classic Room',
    'Deluxe Room',
    'Private Cottage',
  ]

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the message
    const message = `*Booking Inquiry - Winter Casa Resort*

*Guest Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Number of Guests: ${formData.guests}

*Booking Details:*
Room Type: ${formData.roomType}
Check-in Date: ${formData.checkIn}
Check-out Date: ${formData.checkOut}
Breakfast Required: ${formData.breakfast}

${formData.specialRequests ? `Special Requests: ${formData.specialRequests}` : ''}

Thank you!`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)

    // WhatsApp number: +91 73060 79005 (remove + and spaces)
    const whatsappNumber = '917306079005'

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80"
          alt="Booking background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-forest/85" />
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
            Book Your Stay
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6" />
          <p className="text-xl md:text-2xl lg:text-3xl text-white/70 font-body max-w-2xl mx-auto">
            Reserve your perfect forest sanctuary experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/20 space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-white mb-2 font-body"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-body text-lg"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-semibold text-white mb-2 font-body"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-body text-lg"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Room Type */}
            <div>
              <label
                htmlFor="roomType"
                className="block text-lg font-semibold text-white mb-2 font-body"
              >
                Room Type *
              </label>
              <select
                id="roomType"
                name="roomType"
                required
                value={formData.roomType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-body text-lg"
              >
                <option value="" className="text-forest">
                  Select a room type
                </option>
                {roomTypes.map((room) => (
                  <option key={room} value={room} className="text-forest">
                    {room}
                  </option>
                ))}
              </select>
            </div>

            {/* Dates and Guests Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Check-in Date */}
              <div>
                <label
                  htmlFor="checkIn"
                  className="block text-lg font-semibold text-white mb-2 font-body"
                >
                  Check-in Date *
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  required
                  value={formData.checkIn}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-body text-lg"
                />
              </div>

              {/* Check-out Date */}
              <div>
                <label
                  htmlFor="checkOut"
                  className="block text-lg font-semibold text-white mb-2 font-body"
                >
                  Check-out Date *
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  required
                  value={formData.checkOut}
                  onChange={handleChange}
                  min={formData.checkIn || new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-body text-lg"
                />
              </div>
            </div>

            {/* Guests and Breakfast Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Number of Guests */}
              <div>
                <label
                  htmlFor="guests"
                  className="block text-lg font-semibold text-white mb-2 font-body"
                >
                  Number of Guests *
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  required
                  min="1"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-body text-lg"
                  placeholder="Number of guests"
                />
              </div>

              {/* Breakfast */}
              <div>
                <label
                  htmlFor="breakfast"
                  className="block text-lg font-semibold text-white mb-2 font-body"
                >
                  Breakfast Required? *
                </label>
                <select
                  id="breakfast"
                  name="breakfast"
                  required
                  value={formData.breakfast}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-body text-lg"
                >
                  <option value="" className="text-forest">
                    Select option
                  </option>
                  <option value="Yes" className="text-forest">
                    Yes
                  </option>
                  <option value="No" className="text-forest">
                    No
                  </option>
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label
                htmlFor="specialRequests"
                className="block text-lg font-semibold text-white mb-2 font-body"
              >
                Special Requests (Optional)
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows={4}
                value={formData.specialRequests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-body text-lg resize-none"
                placeholder="Any special requests or additional information..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gold text-forest font-semibold rounded-lg hover:bg-gold/90 transition-all duration-200 font-body text-lg uppercase tracking-wider shadow-lg hover:shadow-xl"
            >
              Send Booking Request via WhatsApp
            </motion.button>

            <p className="text-white/60 text-center text-base font-body">
              Clicking the button will open WhatsApp with your booking details
              pre-filled
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

