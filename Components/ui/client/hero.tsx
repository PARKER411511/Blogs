'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const celebrities = [
    { name: "Beyoncé", image: "/celebrities/beyonce.png", x: "12%", y: "18%" },
    { name: "Lionel Messi", image: "/celebrities/messi.png", x: "65%", y: "25%" },
    { name: "Emma Watson", image: "/celebrities/emma.png", x: "35%", y: "55%" },
    { name: "Drake", image: "/celebrities/drake.png", x: "78%", y: "68%" },
];

export default function Hero() {
    const heroRef = useRef(null)

    // Scroll progress relative to the Hero section
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    // Animate zoom and fade as user scrolls
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.3])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <motion.div
            ref={heroRef}
            style={{
                scale,
                opacity,
            }}
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
                Your browser does not support the video tag.
            </video>

            {/* 🌟 Hero Text in Center */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4"
            >
                <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                    Ready to know more about your stars?
                </h1>
                <p className="mt-4 text-white text-lg md:text-xl font-medium drop-shadow-md">
                    Get started here.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
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
                    transition={{ delay: 0.3 + index * 0.3, duration: 0.6 }}
                    className="absolute"
                    style={{ top: celeb.y, left: celeb.x }}
                >
                    <motion.div
                        className="flex items-center gap-2 cursor-pointer"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <img
                            src={celeb.image}
                            alt={celeb.name}
                            className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                        />
                        <div className="bg-white/90 px-3 py-1 rounded-lg text-sm font-semibold shadow-md">
                            {celeb.name}
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>

    )
}
