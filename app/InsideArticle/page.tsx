'use client'

import { motion } from "framer-motion"
import Nav from "@/Components/Nav";

export default function InsideArticle() {
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

      {/* Content */}
      <div className="relative z-50">
        <Nav />
      </div>
    </div>
  );
}
