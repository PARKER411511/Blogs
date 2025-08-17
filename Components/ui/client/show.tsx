'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const fans = [
  { name: "Sarah", message: "Can't wait for this tour! 🔥", image: "/Fans/image1.png", x: "20%", y: "15%" },
  { name: "Mike", message: "Drake is a legend 💯", image: "/Fans/image2.jpg", x: "80%", y: "20%" },
  { name: "Liam", message: "Got my tickets already! 🎟️", image: "/Fans/image.png", x: "11%", y: "60%" },
  { name: "Emma", message: "This will be epic! 😍", image: "/Fans/image4.jpg", x: "70%", y: "75%" },
  { name: "Liam", message: "Got my tickets already! 🎟️", image: "/Fans/image5.jpg", x: "8%", y: "38%" },
  { name: "Emma", message: "This will be epic! 😍", image: "/Fans/image6.jpg", x: "77%", y: "45%" },
]

export default function Show() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  })

  // Animations
  const textOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])
  const textScale = useTransform(scrollYProgress, [0, 0.05], [0.8, 1])
  const videoOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1])
  const videoScale = useTransform(scrollYProgress, [0.15, 0.45], [1.1, 1])
  const videoY = useTransform(scrollYProgress, [0.15, 0.45], [50, 0])
  const fansOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1])
  const fansScale = useTransform(scrollYProgress, [0.3, 0.4], [0.8, 1])

  return (
    <motion.section ref={sectionRef} className="py-20 relative overflow-visible">
      {/* Top Title */}
      <motion.div
        style={{ opacity: textOpacity, scale: textScale }}
        className="relative text-center text-6xl sm:text-8xl md:text-10xl font-extrabold text-white mb-6 tracking-tight z-10"
      >
        <h1>WATCH</h1>
        <h1>OUR</h1>
        <h1>SHOW</h1>
      </motion.div>

      {/* Video Thumbnail */}
      <motion.div
        style={{ opacity: videoOpacity, scale: videoScale, y: videoY }}
        className="relative max-w-[350px] md:max-w-[600px] lg:max-w-[900px] mx-auto z-20 -mt-16 md:-mt-20 pt-[20px]"
      >
        <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-30">
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-40">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white ml-1 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
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
      </motion.div>


      {/* Title & Description */}
      <div className="flex flex-col items-center px-4 mt-10 sm:mt-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
          Drake Tour Announcement
        </h2>
        <p className="mt-4 text-gray-200 text-base sm:text-lg md:text-xl">
          Catch all the excitement from Drake&apos;s upcoming tour. Watch the official announcement
          featuring exclusive behind-the-scenes planning and high-energy teasers from the artist himself.
        </p>

        {/* CTA */}
        <a
          href="https://www.drakemusic.com/tour"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg transition duration-300 hover:shadow-lg"
        >
          Watch Now
        </a>
      </div>

      {/* Floating Fan Messages */}
      {fans.map((fan, index) => (
        <motion.div
          key={index}
          style={{ opacity: fansOpacity, scale: fansScale, top: fan.y, left: fan.x, position: "absolute" }}
          initial={{ scale: 0.8 }}
          transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
          className="z-[60]"   // 🔥 Force above video + overlay
        >
          <motion.div
            className="items-center gap-2 hidden md:flex cursor-pointer"
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
            <Image
              src={fan.image}
              alt={fan.name}
              width={40}
              height={40}
              className="sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-white shadow-lg"
              draggable={false}
            />
            <div className="bg-black/70 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-xl shadow-md font-medium text-xs sm:text-sm md:text-base max-w-[140px] sm:max-w-[180px] md:max-w-xs">
              {fan.message}
            </div>
          </motion.div>
        </motion.div>
      ))}

    </motion.section>
  )
}
