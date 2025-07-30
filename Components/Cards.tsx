'use client'

import { motion } from 'framer-motion'


export default function Cards({
  card
}: {
  card: {
    image: string
    alt: string
    title: string
  }
}) {
  return (
    <motion.div
      initial={{ y: 0, scale: 1 }}
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="z-10 bg-white h-[361px] w-[329px] text-[14px] font-medium border border-[#C9C9C9] rounded-[14px] overflow-hidden"
    >
      <div className="w-full h-[238px] relative">
        <img
          src={card.image}
          alt={card.alt}
          className="w-full h-full object-cover rounded-t-[12px]"
        />
      </div>
      <div className="pt-[12px] mx-[12px] text-[#191C16]">
        <h1>{card.title}</h1>
      </div>
    </motion.div>
  )
}
