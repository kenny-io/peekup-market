'use client'

import { useCallback } from 'react'
import { usePathname } from 'next/navigation'
import * as analytics from '@/lib/analytics'

export function useAnalytics() {
  const pathname = usePathname()

  const trackClick = useCallback(
    (buttonName: string, additionalParams?: Record<string, unknown>) => {
      analytics.trackButtonClick(buttonName, pathname, additionalParams)
    },
    [pathname]
  )

  const trackFormStart = useCallback((formName: string) => {
    analytics.trackFormStart(formName)
  }, [])

  const trackFormStep = useCallback(
    (formName: string, step: number, stepName: string) => {
      analytics.trackFormStepComplete(formName, step, stepName)
    },
    []
  )

  const trackFormSubmit = useCallback((formName: string, success: boolean) => {
    analytics.trackFormSubmit(formName, success)
  }, [])

  const trackFormError = useCallback((formName: string, errorMessage: string) => {
    analytics.trackFormError(formName, errorMessage)
  }, [])

  const trackNavClick = useCallback(
    (linkName: string, destination: string, location: string) => {
      analytics.trackNavigation(linkName, destination, location)
    },
    []
  )

  return {
    trackClick,
    trackFormStart,
    trackFormStep,
    trackFormSubmit,
    trackFormError,
    trackNavClick,
    // Re-export specific conversion events
    trackDownloadPeekup: analytics.trackDownloadPeekup,
    trackBecomeRider: analytics.trackBecomeRider,
    trackJoinWaitlist: analytics.trackJoinWaitlist,
    trackWaitlistSignup: analytics.trackWaitlistSignup,
    trackRiderApplicationSubmit: analytics.trackRiderApplicationSubmit,
    trackNewsletterSignup: analytics.trackNewsletterSignup,
    trackAccountCreated: analytics.trackAccountCreated,
    trackSectionView: analytics.trackSectionView,
  }
}
