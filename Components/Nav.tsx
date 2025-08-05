'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTwitch, FaSoundcloud,
} from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Shows', href: '/Shows' },
]

const mockCart = [
  {
    id: 'TS001',
    name: 'Graphic T-Shirt',
    price: '$19.99',
    quantity: 2,
    image: 'https://ih1.redbubble.net/image.1065595507.9794/ssrco,essential_tee,womens_01,fafafa:ca443f4786,front_lifestyle,tall_portrait,x1000.1.jpg',
  },
  {
    id: 'HD002',
    name: 'Oversized Hoodie',
    price: '$39.99',
    quantity: 1,
    image: 'https://nobero.com/cdn/shop/files/222C021C-8EFF-4A86-A782-A25876663738.jpg?v=1732879745',
  },
  {
    id: 'JN003',
    name: 'Denim Jeans',
    price: '$49.99',
    quantity: 1,
    image: 'https://www.routeone.co.uk/cdn/shop/files/001115118.jpg?v=1732857568&width=1000',
  },
]



export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50">
      {/* Top Social Bar */}
      <div className="bg-black text-white text-sm h-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center h-full space-x-4 sm:space-x-6 overflow-x-auto">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition text-sm sm:text-xl"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition text-sm sm:text-xl"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition text-sm sm:text-xl"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition text-sm sm:text-xl"><FaYoutube /></a>
          <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition text-sm sm:text-xl"><FaTwitch /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition text-sm sm:text-xl"><SiTiktok /></a>
          <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition text-sm sm:text-xl"><FaSoundcloud /></a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="glass shadow-sm bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 text-xl font-bold text-black">Stars</div>

            <div className="flex flex-grow justify-center space-x-6">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-black hover:text-blue-500 px-2 py-1 font-bold rounded-md text-sm transition duration-200 ${pathname === href ? 'text-blue-600' : ''
                    }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
              <button
                aria-label="Shopping Cart"
                onClick={() => setCartOpen(true)}
                className="text-gray-800 hover:text-blue-500 transition text-2xl"
              >
                <HiOutlineShoppingCart />
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 hover:shadow-lg">
                Subscribe
              </button>
            </div>

            {/* Mobile Right */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setCartOpen(true)}
                aria-label="Shopping Cart"
                className="text-gray-800 hover:text-blue-500 text-2xl"
              >
                <HiOutlineShoppingCart />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-800 text-2xl"
                aria-label="Toggle Menu"
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Subscribe Dropdown */}
        {menuOpen && (
          <div className="md:hidden glass shadow-sm bg-white px-4 pb-4 pt-2">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-full py-2 rounded-full text-sm font-medium transition duration-300 hover:shadow-lg">
              Subscribe
            </button>
          </div>
        )}
      </div>

      {/* Cart Drawer with Framer Motion */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-[96px] right-0 h-[calc(100vh-64px)] w-90 bg-[#191919] rounded-bl-md rounded-tl-md text-white z-[999] p-4 overflow-y-auto shadow-xl"
          >
            <div className="flex justify-between items-center ">
              <h2 className="text-[16px] font-bold">Your Cart</h2>


              <button onClick={() => setCartOpen(false)} aria-label="Close" className="text-white text-2xl">
                <IoMdClose />
              </button>
            </div>

            <hr className="my-6 border-white" />

            <div className="space-y-6">
              {mockCart.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-1">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-1 border-white"
                  />

                  {/* Info */}
                  <div className="flex-1 ml-4">
                    <div className="font-bold text-[14px]">{item.name}</div>
                    <div className="text-gray-400 text-[12px]">Clothing & Apparel</div>
                    <div className="text-[11px] text-gray-400 mt-1">ID: {item.id}</div>
                    <div className="text-[11px] text-gray-400">Qty: {item.quantity}</div>
                  </div>

                  {/* Price pill */}
                  <div className="bg-white text-black px-3 py-1 rounded-md font-semibold text-sm">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <hr className="my-6 border-white" />

            {/* Total */}
            <div className="flex justify-between text-[14px] font-bold mb-2">
              <span>Total Cost :</span>
              <span>
                {`$${mockCart
                  .reduce(
                    (sum, item) =>
                      sum + parseFloat(item.price.replace('$', '')) * item.quantity,
                    0
                  )
                  .toFixed(2)}`}
              </span>
            </div>

            {/* Note */}
            <p className="text-xs text-gray-400 text-[12px] mb-6">
              *Total Cost includes delivery charge and tax*
            </p>

            {/* Proceed button */}
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-full py-3 rounded-lg font-semibold text-sm transition duration-300">
              Proceed To Checkout
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}
