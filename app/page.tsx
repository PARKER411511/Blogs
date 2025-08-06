'use client'

import Image from 'next/image'
import Cards from "@/Components/Cards";
import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";
import ShopCards from "@/Components/Shop-Items";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from "swiper/modules";
import ShopCard from '@/Components/Shop-Items';

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  // Ref for hero banner parallax scroll
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

  return (
    <div className="bg-white w-full flex flex-col text-black h-full">
      <Nav />

      <div className="px-4 md:px-[60px] xl:px-[120px] py-[14px] w-full max-w-[1400px] mx-auto">

        {/* Hero Banner with parallax */}
        <motion.div
          ref={heroRef}
          style={{ y }}
          className="bg-gray-400 w-full h-[200px] md:h-[400px] mt-[120px]"
        />

        {/* Featured News with fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-[60px] text-[#191C16]"
        >
          <h1 className="text-[28px] md:text-[36px] pb-[20px]">
            Our Featured Star
          </h1>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10">

            {/* Text Block */}
            <div className="flex flex-col items-start text-[#191C16] max-w-full lg:max-w-[480px] order-2 lg:order-1">
              <h1 className="text-[22px] md:text-[28px] font-semibold">
                Stephen Colbert’s Late Night Allies and Famous Friends Make Cameos on The Late Show After Cancellation
              </h1>
              <h1 className="text-[14px] font-light text-[#C1C1C1] py-[4px]">Date: 23/9/2023</h1>
              <h1 className="text-[14px] pb-[20px]">
                Adam Sandler, Anderson Cooper, Jon Stewart, Jimmy Fallon, Seth Meyers, John Oliver and Andy Cohen were among those who made surprise appearances on Monday's episode after CBS announced that the late night show would be ending in May 2026.
              </h1>
              <button className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 hover:shadow-lg">
                Learn More
              </button>
            </div>

            {/* Image Block */}
            <img
              src="https://www.hollywoodreporter.com/wp-content/uploads/2025/07/Stephen-Colbert-late-show-publicity-H-2025.png?w=488&h=331&crop=1&resize=488%2C331"
              className="w-full lg:w-[588px] rounded-lg h-auto order-1 lg:order-2"
              alt="Stephen Colbert Publicity Photo"
            />
          </div>
        </motion.div>

        {/* This Week’s Top News with fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="pt-[80px] md:pt-[120px]"
        >
          <h1 className="text-[28px] md:text-[36px]">This Weeks Top Stars</h1>

          <div className="pt-[12px] md:pt-[40px]">
            <Swiper
              slidesPerView="auto"
              loop
              spaceBetween={60}
              className="w-full"
            >
              {[
                {
                  image: 'https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676',
                  alt: 'Taylor Swift',
                  name: 'Taylor Swift',
                  views: '2.3M views',
                },
                {
                  image: 'https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae',
                  alt: 'The Weeknd',
                  name: 'The Weeknd',
                  views: '1.9M views',
                },
                {
                  image: 'https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da',
                  alt: 'Billie Eilish',
                  name: 'Billie Eilish',
                  views: '2.1M views',
                },
                {
                  image: 'https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9',
                  alt: 'Drake',
                  name: 'Drake',
                  views: '3.4M views',
                },
                {
                  image: 'https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd',
                  alt: 'Bruno Mars',
                  name: 'Bruno Mars',
                  views: '2.7M views',
                }
              ].map((card, index) => (
                <SwiperSlide key={index} className="!w-[280px] sm:!w-[329px] p-5">
                  <Cards card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        {/* Watch Our Show with fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="pt-[80px] md:pt-[120px]"
        >
          <div className="pt-[20px] md:pt-[40px]">
            
            <div className="flex flex-col xl:flex-row items-start gap-[0px] md:gap-6 xl:gap-16">

              {/* Text Block */}
              <div className="mb-8 xl:mb-0 gap-[10px] max-w-xl">
                <h1 className="text-[28px] md:text-[36px]">Watch Our Show</h1>
                <h2 className="text-3xl font-semibold text-[22px] md:text-[28px] text-blue-600 mb-4">
                  Drake Tour Announcement
                </h2>
                <h1 className="text-gray-700 mb-6">
                  Catch all the excitement from Drake's upcoming tour. Watch the official announcement featuring exclusive behind-the-scenes planning and high-energy teasers from the artist himself.
                </h1>
                <a
                  href="https://www.drakemusic.com/tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 hover:shadow-lg"
                >
                  Watch Now
                </a>
              </div>

              {/* Video Thumbnail with Play Icon */}
              <div className="w-full max-w-xl">
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-black/10">
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white ml-1"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                  <Image
                    src="https://www.nme.com/wp-content/uploads/2024/09/Drake-live@2000x1270.jpg"
                    alt="Drake performing"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Shop Section with fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="pt-[80px] md:pt-[120px]"
        >
          <h1 className="text-[28px] md:text-[36px]">Our Shop</h1>

          <div className="flex flex-wrap gap-4 md:pt-[40px] pt-[30px] justify-center">
            {[
              {
                id: 'suit-1',
                image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
                name: 'Premium Suit',
                price: 249.99,
              },
              {
                id: 'suit-2',
                image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
                name: 'Classic Suit',
                price: 199.99,
              },
              {
                id: 'suit-3',
                image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
                name: 'Modern Suit',
                price: 279.99,
              },
              {
                id: 'suit-4',
                image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
                name: 'Luxury Suit',
                price: 349.99,
              },
            ].map((card) => (
              <ShopCard
                key={card.id}
                id={card.id}
                name={card.name}
                price={card.price}
                image={card.image} subtitle={''} />
            ))}
          </div>

          <div className="flex justify-end pt-[20px]">
            <a
              href="/Shops"
              className="text-[#191C16] font-semibold text-[15px] border-b-[2px] border-[#191C16] pb-[1px] transition"
            >
              See More
            </a>
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <div className="pt-[40px]">
        <Footer />
      </div>
    </div>
  );
}
