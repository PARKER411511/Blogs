'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Shows', href: '/Shows' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <div className="w-full flex justify-center">
      <nav className="flex space-x-8 py-4 px-6 relative">
        {navItems.map(({ label, href }) => {
          const isActive = pathname === href

          return (
            <Link
              key={label}
              href={href}
              className="relative uppercase font-semibold text-[12px] tracking-wide text-black hover:text-gray-800"
            >
              {label}
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-black"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
