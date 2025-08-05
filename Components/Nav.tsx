'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTwitch,
  FaSoundcloud,
} from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Shows', href: '/Shows' },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50">
      {/* Top social bar */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center h-8 space-x-4 sm:space-x-6 overflow-x-auto">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition text-sm sm:text-xl" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition text-sm sm:text-xl" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition text-sm sm:text-xl" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition text-sm sm:text-xl" aria-label="YouTube"><FaYoutube /></a>
          <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition text-sm sm:text-xl" aria-label="Twitch"><FaTwitch /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition text-sm sm:text-xl" aria-label="TikTok"><SiTiktok /></a>
          <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition text-sm sm:text-xl" aria-label="SoundCloud"><FaSoundcloud /></a>
        </div>
      </div>

      {/* Main nav */}
      <div className="glass shadow-sm bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex-shrink-0 text-xl font-bold text-black">Stars</div>

            {/* Center: nav links (always visible) */}
            <div className="flex flex-grow justify-center space-x-6">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-black hover:text-blue-500 px-2 py-1 font-bold rounded-md text-sm transition duration-200 ${
                    pathname === href ? 'text-blue-600' : ''
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop Right: Cart + Subscribe */}
            <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
              <button aria-label="Shopping Cart" className="text-gray-800 hover:text-blue-500 transition text-2xl">
                <HiOutlineShoppingCart />
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 hover:shadow-lg">
                Subscribe
              </button>
            </div>

            {/* Mobile Right: Cart + Hamburger */}
            <div className="md:hidden flex items-center space-x-4">
              <button aria-label="Shopping Cart" className="text-gray-800 hover:text-blue-500 text-2xl">
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

        {/* Mobile Dropdown: Only Subscribe button */}
        {menuOpen && (
          <div className="md:hidden glass shadow-sm bg-white px-4 pb-4 pt-2">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-full py-2 rounded-full text-sm font-medium transition duration-300 hover:shadow-lg">
              Subscribe
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
