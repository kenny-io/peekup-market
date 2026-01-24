'use client'

import Link from 'next/link'
import { trackButtonClick, trackDownloadPeekup, trackBecomeRider, trackJoinWaitlist } from '@/lib/analytics'

interface TrackedLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  trackingName: string
  trackingLocation?: string
  trackingType?: 'download' | 'rider' | 'waitlist' | 'generic'
  children: React.ReactNode
}

export function TrackedLink({
  trackingName,
  trackingLocation = 'unknown',
  trackingType = 'generic',
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track based on type
    switch (trackingType) {
      case 'download':
        trackDownloadPeekup(trackingLocation)
        break
      case 'rider':
        trackBecomeRider(trackingLocation)
        break
      case 'waitlist':
        trackJoinWaitlist(trackingLocation)
        break
      default:
        trackButtonClick(trackingName, trackingLocation)
    }

    // Call original onClick if provided
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Link onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
