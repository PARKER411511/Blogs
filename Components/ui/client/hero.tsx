'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const celebrities = [
  { name: "Beyoncé", Tweet: "Who Is Ready For My Next Album? 🎉✨🔥", image: "/celebrities/beyonce.png", x: "12%", y: "18%" },
  { name: "Lionel Messi", Tweet: "You have to fight to reach your dream and I do it because I love it", image: "/celebrities/messi.png", x: "55%", y: "25%" },
  { name: "Emma Watson", Tweet: "Congrats To The New Cast of Harry Potter 🎉🎉🎉", image: "/celebrities/emma.png", x: "12%", y: "68%" },
  { name: "Drake", Tweet: "Everyone has an addiction, mine happens to be success", image: "/celebrities/drake.png", x: "45%", y: "80%" },
]

export default function Hero() {
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.3])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  return (
    <motion.div
      ref={heroRef}
      style={{ scale, opacity }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      className="relative w-screen h-screen overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/bgVideo.mp4" type="video/mp4" />
      </video>

      {/* 🌟 Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 max-w-xl"
      >
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
          Ready To Know More About Your Stars?
        </h1>
        <p className="mt-4 text-white text-base sm:text-lg md:text-xl font-medium drop-shadow-md">
          Get started here.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg text-sm sm:text-base"
        >
          Explore Now
        </motion.button>
      </motion.div>

      {/* 🌠 Floating Celebrities */}
      {celebrities.map((celeb, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + index * 0.25, duration: 0.6, ease: "easeOut" }}
          className="absolute"
          style={{ top: celeb.y, left: celeb.x }}
        >
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * 0.15,
            }}
            whileHover={{ scale: 1.08 }}
          >
            <img
              src={celeb.image}
              alt={celeb.name}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-white shadow-lg"
            />
            <div className="bg-black/70 text-white max-w-[160px] sm:max-w-xs md:max-w-md px-3 py-2 rounded-xl shadow-md font-medium text-xs sm:text-sm md:text-base leading-snug">
              {celeb.Tweet}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
