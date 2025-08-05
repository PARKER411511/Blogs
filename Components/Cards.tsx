'use client'

import { motion } from 'framer-motion'

export default function Cards({
  card
}: {
  card: {
    image: string
    alt: string
    name: string
    views: string
  }
}) {
  return (
    <motion.div
      initial={{ y: 0, scale: 1 }}
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="z-10 bg-white h-[340px] w-[329px] text-[14px] font-medium border border-[#C9C9C9] rounded-[14px] overflow-hidden shadow-sm"
    >
      <div className="w-full h-[280px] relative">
        <img
          src={card.image}
          alt={card.alt}
          className="w-full h-full object-cover rounded-t-[12px]"
        />
      </div>

      <div className="px-[16px] pt-[12px] text-[#191C16]">
        <h1 className="text-[15px] font-semibold leading-snug">{card.name}</h1>
        <p className="text-[13px] text-gray-600">{card.views}</p>
      </div>
    </motion.div>
  )
}
