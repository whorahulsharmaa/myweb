import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import './WhatIOffer.css';

const services = [
  {
    icon: '🎨',
    title: 'Branding Design',
    desc: 'Crafting unique brand identities that stand out and connect with your audience.'
  },
  {
    icon: '👕',
    title: 'T-Shirt Design',
    desc: 'Modern, eye-catching t-shirt graphics for brands, events, and merchandise.'
  },
  {
    icon: '📦',
    title: 'Package Design',
    desc: 'Minimalist, functional, and beautiful packaging for products of all kinds.'
  },
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'Responsive, high-performance websites and web apps tailored to your needs.'
  },
  {
    icon: '📱',
    title: 'UI/UX',
    desc: 'Clean, intuitive web app interfaces and user experiences.'
  },
  {
    icon: '🖌️',
    title: 'Illustration',
    desc: 'Custom illustrations to enhance your brand, product, or campaign.'
  }
];

export default function WhatIOffer() {
  return (
    <section className="what-i-offer-clean-section py-5">
      <div className="container">
        <h2 className="what-i-offer-clean-title text-center mb-2">What I Offer</h2>
        <p className="what-i-offer-clean-subtitle text-center mb-5">
          Things that I can do for my clients. Just make your good trust — I love to provide quality works.
        </p>
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="what-i-offer-swiper"
        >
          {services.map((service, idx) => (
            <SwiperSlide key={service.title}>
              <motion.div
                className="what-i-offer-card"
                whileHover={{ scale: 1.045, boxShadow: '0 8px 32px #2222' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="what-i-offer-icon mb-3">{service.icon}</div>
                <h3 className="what-i-offer-card-title mb-2">{service.title}</h3>
                <p className="what-i-offer-card-desc mb-0">{service.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
