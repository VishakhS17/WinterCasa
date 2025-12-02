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
      name: 'Arathy Tp',
      text: 'The rooms are all very clean and it is a peaceful place to spend with family or friends. The staff are all well-behaved. The view from the room is worth mentioning. All in all, it was a good experience.',
      rating: 5,
    },
    {
      name: 'Abhishek Kumar',
      text: 'Overall, very good experience with Winter Casa resort. Service is very good, food was very good. One most important thing: Owner himself taking care of all guests. Staff are very helpful. Rooms were very neat and clean. View from room is awesome. Thank you Winter Casa for making our memory beautiful.',
      rating: 5,
    },
    {
      name: 'Aparna Salin',
      text: 'The staff were friendly and accommodating, and went out of their way to make guests feel comfortable. Such an amazing experience I have ever had.',
      rating: 5,
    },
    {
      name: 'Raziq',
      text: 'Wonderful place to stay. The room view and service were amazing, and the price is affordable. I would highly recommend this place.',
      rating: 5,
    },
    {
      name: 'Devanand N',
      text: 'Honestly saw many negative reviews on Google, but personally we loved their hospitality and stay. Got a nice view for day and night without any compromise.',
      rating: 5,
    },
    {
      name: 'Jaimini Shastriji',
      text: 'Really a great experience to stay here. Great location. Nice warm-hearted staff including the owner. Very nice rooms.',
      rating: 5,
    },
    {
      name: 'Pradeep Babu',
      text: "It's a very nice room, amazing view, well maintained by the owner and housekeeping team. Mr. Vijay guided us a lot about Munnar, but we don't have enough time to stay there. I will suggest this resort to my friends and colleagues.",
      rating: 5,
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
            <SwiperSlide key={index} className="!h-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full min-h-[400px] border border-white/10 hover:border-gold/30 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5 flex-shrink-0">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/90 font-body text-xl md:text-2xl leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-5 border-t border-white/10 flex-shrink-0">
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

