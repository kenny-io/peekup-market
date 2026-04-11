'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

type NavItem = {
  label: string
  href: string
  muted?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '/#features' },
  { label: 'Services', href: '/#services' },
  { label: 'Peekup Go', href: '/go', muted: true },
  { label: 'Business', href: '/business', muted: true },
  { label: 'Vendors', href: '/vendors' },
  { label: 'Ambassadors', href: '/ambassadors' },
  { label: 'FAQs', href: '/#faqs' },
]

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  let timeoutRef = useRef<number | null>(null)

  return NAV_ITEMS.map(({ label, href, muted }, index) => (
    <Link
      key={label}
      href={href}
      className={
        muted
          ? 'relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700/40 transition-all delay-150 hover:text-gray-700/70 hover:delay-0'
          : 'relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0'
      }
      onMouseEnter={() => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current)
        }
        setHoveredIndex(index)
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => {
          setHoveredIndex(null)
        }, 200)
      }}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-100"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
