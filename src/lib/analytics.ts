// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = 'G-PX61QSDNYQ'

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer: unknown[]
  }
}

// Check if GA is available
function isGtagAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

// Page view tracking
export function trackPageView(url: string) {
  if (!isGtagAvailable()) return
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

// Generic event tracking
export function trackEvent(
  eventName: string,
  parameters?: Record<string, unknown>
) {
  if (!isGtagAvailable()) return
  window.gtag('event', eventName, parameters)
}

// ============================================
// CTA & Button Click Events
// ============================================

export function trackButtonClick(
  buttonName: string,
  buttonLocation: string,
  additionalParams?: Record<string, unknown>
) {
  trackEvent('cta_click', {
    button_name: buttonName,
    button_location: buttonLocation,
    ...additionalParams,
  })
}

export function trackDownloadPeekup(location: string) {
  trackEvent('download_cta_click', {
    cta_type: 'download_peekup',
    location,
  })
}

export function trackBecomeRider(location: string) {
  trackEvent('become_rider_click', {
    cta_type: 'become_rider',
    location,
  })
}

export function trackJoinWaitlist(location: string) {
  trackEvent('join_waitlist_click', {
    cta_type: 'join_waitlist',
    location,
  })
}

// ============================================
// Form Events
// ============================================

export function trackFormStart(formName: string) {
  trackEvent('form_start', {
    form_name: formName,
  })
}

export function trackFormStepComplete(formName: string, step: number, stepName: string) {
  trackEvent('form_step_complete', {
    form_name: formName,
    step_number: step,
    step_name: stepName,
  })
}

export function trackFormSubmit(formName: string, success: boolean) {
  trackEvent('form_submit', {
    form_name: formName,
    success,
  })
}

export function trackFormError(formName: string, errorMessage: string) {
  trackEvent('form_error', {
    form_name: formName,
    error_message: errorMessage,
  })
}

// ============================================
// Scroll Depth Tracking
// ============================================

export function trackScrollDepth(depth: number, pagePath: string) {
  trackEvent('scroll_depth', {
    percent_scrolled: depth,
    page_path: pagePath,
  })
}

// ============================================
// Navigation Events
// ============================================

export function trackNavigation(linkName: string, destination: string, location: string) {
  trackEvent('navigation_click', {
    link_name: linkName,
    destination,
    nav_location: location,
  })
}

// ============================================
// Conversion Events
// ============================================

export function trackWaitlistSignup(email: string) {
  trackEvent('waitlist_signup', {
    method: 'email',
    // Don't send actual email for privacy, just track the event
  })
}

export function trackRiderApplicationSubmit() {
  trackEvent('rider_application_submit', {
    conversion: true,
  })
}

export function trackNewsletterSignup() {
  trackEvent('newsletter_signup', {
    conversion: true,
  })
}

export function trackAccountCreated(referralSource?: string) {
  trackEvent('account_created', {
    conversion: true,
    referral_source: referralSource,
  })
}

// ============================================
// Engagement Events
// ============================================

export function trackSectionView(sectionName: string, pagePath: string) {
  trackEvent('section_view', {
    section_name: sectionName,
    page_path: pagePath,
  })
}

export function trackExternalLinkClick(url: string, linkText: string) {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
  })
}

export function trackVideoPlay(videoName: string) {
  trackEvent('video_play', {
    video_name: videoName,
  })
}
