'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackScrollDepth } from '@/lib/analytics'

const SCROLL_THRESHOLDS = [25, 50, 75, 90, 100]

export function useScrollDepth() {
  const pathname = usePathname()
  const trackedThresholds = useRef<Set<number>>(new Set())

  useEffect(() => {
    // Reset tracked thresholds on page change
    trackedThresholds.current = new Set()

    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100)

      SCROLL_THRESHOLDS.forEach((threshold) => {
        if (scrollPercent >= threshold && !trackedThresholds.current.has(threshold)) {
          trackedThresholds.current.add(threshold)
          trackScrollDepth(threshold, pathname)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])
}
