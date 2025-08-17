'use client'

import { useCart } from '@/context/CartContext'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useState, useEffect } from 'react'

interface ShopCardProps {
  id: string
  name: string
  subtitle: string
  price: number
  image: string
  badge?: string
}

export default function ShopCard({ id, name, subtitle, price, image, badge }: ShopCardProps) {
  const { addToCart } = useCart()
  const [showAdded, setShowAdded] = useState(false)

  const handleAdd = () => {
    addToCart({ id, name, price, image })
    setShowAdded(true)
  }

  useEffect(() => {
    if (showAdded) {
      const timer = setTimeout(() => setShowAdded(false), 2000) // Hide after 2 seconds
      return () => clearTimeout(timer)
    }
  }, [showAdded])

  return (
    <div className="bg-white glass rounded-[10px] shadow-sm overflow-hidden hover:shadow-md transition  w-[260px] h-min-[324px] relative">
      <div className="relative w-full h-[280px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {badge && (
          <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-0.5">{name}</h3>
        <p className="text-xs text-gray-500 mb-2">{subtitle}</p>
        <div className="flex justify-between items-center relative">
          <span className="font-bold text-blue-600 text-sm">${price.toFixed(2)}</span>

          <button
            onClick={handleAdd}
            className=" w-[100px] h-[36px] rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white flex items-center justify-center hover:bg-rose-600 transition relative"
            aria-label={`Add ${name} to cart`}
          >
            <h1 className='text-[12px] font-semibold'>Add To Cart</h1>
          </button>

          {/* Popup message */}
          {showAdded && (
            <div className="absolute top-[-24px] right-0 bg-black text-white text-xs rounded px-2 py-1 shadow-lg select-none">
              Added to cart
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
