'use client'

import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";
import 'swiper/css';
import 'swiper/css/navigation';
import FeaturedNews from '@/Components/ui/client/featuredNews';
import WeeklyNews from '@/Components/ui/client/weeklyNews';
import Show from "@/Components/ui/client/show";
import Shop from "@/Components/ui/client/shop";
import Hero from "@/Components/ui/client/hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative bg-black/90 w-full flex flex-col text-white overflow-hidden min-h-screen">
      
      {/* Floating gradient blobs */}
      <div className="fixed inset-0 z-20 overflow-hidden">
        {/* Blob 1 */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-[200px] opacity-50"
          animate={{ x: [0, 100, -100, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "-200px", left: "-200px" }}
        />
        {/* Blob 2 */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-[200px] opacity-50"
          animate={{ x: [0, -150, 150, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "-200px", right: "-200px" }}
        />
        {/* Blob 3 */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-[250px] opacity-40"
          animate={{ x: [0, 80, -80, 0], y: [0, -80, 80, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "40%", left: "50%", transform: "translateX(-50%)" }}
        />
      </div>

      <div className="relative z-50">
        <Nav />
      </div>

      <div>
        <div className="relative z-40">
          <Hero />
        </div>
        <div className="md:-mt-[200px] -mt-[260px] relative z-30">
          <Show />
        </div>
      </div>

      <div className="px-4 md:px-[60px] z-30 xl:px-[120px] py-[14px] w-full max-w-[1400px] mx-auto">
        <WeeklyNews />
        <FeaturedNews />
        <Shop />
      </div>

      <div className="pt-[40px] z-30">
        <Footer />
      </div>
    </div>
  )
}
