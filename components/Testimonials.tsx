'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

interface Testimonial {
  name: string
  text: string
  rating: number
  location?: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah & James Wilson',
      text: 'An absolutely magical experience. The forest views, the cozy fireplace, and the attention to detail made our anniversary unforgettable.',
      rating: 5,
      location: 'New York, USA',
    },
    {
      name: 'Michael Chen',
      text: 'Winter Casa exceeded all expectations. Waking up to misty forest mornings from our canopy cabin was a dream come true.',
      rating: 5,
      location: 'San Francisco, USA',
    },
    {
      name: 'Emma Thompson',
      text: 'The perfect blend of luxury and nature. Every moment felt like a scene from a storybook. We will definitely return!',
      rating: 5,
      location: 'London, UK',
    },
    {
      name: 'David Rodriguez',
      text: 'Peace, tranquility, and unmatched hospitality. This resort redefined what a nature retreat should be.',
      rating: 5,
      location: 'Madrid, Spain',
    },
    {
      name: 'Lisa Anderson',
      text: 'From the gold-accented details to the forest immersion, every aspect was thoughtfully designed. A true sanctuary.',
      rating: 5,
      location: 'Vancouver, Canada',
    },
  ]

  const StarIcon = () => (
    <svg className="w-5 h-5 fill-gold text-gold" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )

  return (
    <section
      id="testimonials"
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Mountain forest background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-forest/80" />
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
            Guest Stories
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6" />
          <p className="text-xl md:text-2xl lg:text-3xl text-white/70 font-body max-w-2xl mx-auto">
            Discover what our guests say about their forest sanctuary experience
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-gold !opacity-50',
            bulletActiveClass: 'swiper-pagination-bullet-active !opacity-100',
          }}
          className="!pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full border border-white/10 hover:border-gold/30 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/90 font-body text-xl md:text-2xl leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-5 border-t border-white/10">
                  <p className="text-white font-semibold font-body text-lg">
                    {testimonial.name}
                  </p>
                  {testimonial.location && (
                    <p className="text-white/50 text-base font-body mt-1">
                      {testimonial.location}
                    </p>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

