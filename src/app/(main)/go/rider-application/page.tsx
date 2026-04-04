import { type Metadata } from 'next'

import { ComingSoonFeature } from '@/components/ComingSoonFeature'

export const metadata: Metadata = {
  title: 'Become a Peekup Rider — Coming Soon | Peekup',
  description:
    'Rider applications for Peekup will open after our marketplace launch. Join the waitlist to get notified.',
  openGraph: {
    title: 'Become a Peekup Rider — Coming Soon | Peekup',
    description:
      'Delivery partner signup is coming soon. Get launch updates on the Peekup waitlist.',
    url: 'https://usepeekup.com/go/rider-application',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Become a Peekup Rider — Coming Soon',
    description: 'Rider applications open soon. Join the waitlist for updates.',
    images: ['/seo/peekupseo.png'],
  },
  alternates: {
    canonical: 'https://usepeekup.com/go/rider-application',
  },
}

export default function RiderApplicationPage() {
  return (
    <ComingSoonFeature
      productName="Peekup Rider"
      headline="Rider applications are opening soon"
      body="We're onboarding delivery partners in phases after the marketplace goes live. Join the waitlist and we'll reach out when applications open."
      roadmapLabel="Rider onboarding"
      features={[
        'Flexible hours',
        'Weekly payouts',
        'In-app navigation',
        'Earnings dashboard',
      ]}
    />
  )
}
