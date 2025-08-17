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
      className="z-10 bg-white glass h-[400px] w-[329px] text-[14px] font-medium rounded-[14px] overflow-hidden shadow-sm"
    >
      <div className="w-full h-[280px] p-4 relative">
        <img
          src={card.image}
          alt={card.alt}
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>

      <div className="px-[20px] pt-[2px] text-white">
        <h1 className="text-[15px] font-semibold leading-snug">{card.name}</h1>
        <p className="text-[13px] text-white">{card.views}</p>
        <div className='flex pt-[20px]'>
          <button className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-1.5 rounded-full font-medium transition duration-300 hover:shadow-lg">
                Check Out
              </button>
        </div>
      </div>
    </motion.div>
  )
}
