'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTwitch, FaSoundcloud,
} from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import { motion, AnimatePresence, useTransform, useScroll } from 'framer-motion'
import { FiTrash2 } from 'react-icons/fi'
import { CartProvider, useCart } from '@/context/CartContext'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Shows', href: '/Shows' },
]

export default function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll()
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { cartItems, updateQuantity } = useCart()
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

  // Create a transform from scrollY: 0 -> windowHeight maps to 0 -> 1
  // Then interpolate color from white to black based on this progress.
  // framer-motion supports colors in string.

  const scrollProgress = useTransform(scrollY, [0, windowHeight || 1], [0, 1])

  // Interpolate text color for nav items
  // white = rgb(255,255,255), black = rgb(0,0,0)
  const textColor = useTransform(
    scrollProgress,
    [0, 1],
    ['rgb(255,255,255)', 'rgb(0,0,0)']
  )

  return (
    <nav className="fixed top-0 z-50 w-full left-0">
      {/* Top Social Bar */}
      <motion.div
        className="bg-black text-sm h-8 text-white"

      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center h-full space-x-4 sm:space-x-6 overflow-x-auto">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition text-sm sm:text-xl"

          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition text-sm sm:text-xl"

          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition text-sm sm:text-xl"

          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition text-sm sm:text-xl"

          >
            <FaYoutube />
          </a>
          <a
            href="https://twitch.tv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition text-sm sm:text-xl"

          >
            <FaTwitch />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition text-sm sm:text-xl"

          >
            <SiTiktok />
          </a>
          <a
            href="https://soundcloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition text-sm sm:text-xl"

          >
            <FaSoundcloud />
          </a>
        </div>
      </motion.div>

      {/* Main Nav */}
      <div className="glass shadow-sm bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex-shrink-0 text-xl font-bold"
              style={{ color: textColor }}
            >
              Stars
            </motion.div>

            <div className="hidden md:flex flex-grow justify-center space-x-6">
              {navItems.map(({ label, href }) => (
                <motion.a
                  key={href} href={href}
                  style={{ color: textColor }}
                  className={`hover:text-blue-500 px-2 py-1 font-bold rounded-md text-sm transition duration-200 ${pathname === href ? 'text-blue-600' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </motion.a>
              ))}
            </div>


            {/* Desktop Right */}
            <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
              <div className="relative">
                <motion.button
                  onClick={() => setCartOpen(true)}
                  aria-label="Shopping Cart"
                  className="pt-[6px] text-2xl"
                  style={{ color: textColor }}
                >
                  <HiOutlineShoppingCart />
                </motion.button>


                <AnimatePresence>
                  {totalQuantity > 0 && (
                    <motion.div
                      key={totalQuantity}
                      initial={{ scale: 0, y: -5 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0, y: -5 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[10px] min-w-[16px] mt-[6px] h-[16px] px-[4px] rounded-full flex items-center justify-center font-bold"
                    >
                      {totalQuantity}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 hover:shadow-lg">
                Subscribe
              </button>
            </div>

            {/* Mobile Right */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="relative">
                <motion.button
                  onClick={() => setCartOpen(true)}
                  aria-label="Shopping Cart"
                  className="pt-[6px] text-2xl"
                  style={{ color: textColor }}
                >
                  <HiOutlineShoppingCart />
                </motion.button>

                <AnimatePresence>
                  {totalQuantity > 0 && (
                    <motion.div
                      key={totalQuantity}
                      initial={{ scale: 0, y: -5 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0, y: -5 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white mt-[6px] text-[10px] min-w-[16px] h-[16px] px-[4px] rounded-full flex items-center justify-center font-bold"
                    >
                      {totalQuantity}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl"
                aria-label="Toggle Menu"
                style={{ color: textColor }}
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </motion.button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden glass shadow-sm bg-white px-4 pb-6 pt-2 space-y-4">
            <div className="flex flex-col space-y-2">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-black hover:text-blue-500 px-2 py-1 font-bold rounded-md text-sm transition duration-200 ${pathname === href ? 'text-blue-600' : ''
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
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
            className="fixed top-[96px] right-0 h-[calc(100vh-64px)] w-90 bg-white rounded-bl-md rounded-tl-md text-black z-[999] p-4 overflow-y-auto shadow-xl"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-[16px] font-bold">Your Cart</h2>
              <button onClick={() => setCartOpen(false)} aria-label="Close" className="text-black text-2xl">
                <IoMdClose />
              </button>
            </div>

            <hr className="my-6 border-gray-500" />

            <div className="space-y-6">
              <div className="space-y-6">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                      <HiOutlineShoppingCart className="text-gray-400 text-xl" />
                    </div>
                    <p className="text-sm text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-1">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover border-1 border-gray-500"
                      />
                      <div className="flex-1 ml-4">
                        <div className="font-bold text-[14px]">{item.name}</div>
                        <div className="text-gray-400 text-[12px]">Clothing & Apparel</div>
                        <div className="text-[11px] text-gray-400 mt-1">ID: {item.id}</div>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            –
                          </button>
                          <span className="text-[13px]">{item.quantity}</span>
                          <button
                            className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-md font-semibold text-sm">
                        {item.price}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <hr className="my-6 border-gray-500" />

            <div className="flex justify-between text-[14px] font-bold mb-2">
              <span>Total Cost :</span>
              <span>
                {`$${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}`}
              </span>
            </div>

            <p className="text-xs text-gray-400 text-[12px] mb-6">
              *Total Cost includes delivery charge and tax*
            </p>

            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-full py-3 rounded-lg font-semibold text-sm transition duration-300">
              Proceed To Checkout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
