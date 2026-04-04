import { type Metadata } from 'next'

import { ComingSoonFeature } from '@/components/ComingSoonFeature'

export const metadata: Metadata = {
  title: 'Peekup Go — Coming Soon | Peekup',
  description:
    'Peer-to-peer delivery across Enugu is coming soon. For now, shop the Peekup marketplace with fast local delivery from 220+ vendors.',
  openGraph: {
    title: 'Peekup Go — Coming Soon | Peekup',
    description:
      'P2P package delivery in Enugu is on the roadmap. Browse the marketplace today while we build Peekup Go.',
    url: 'https://usepeekup.com/go',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Peekup Go — Coming Soon',
    description: 'P2P delivery in Enugu is coming soon. Shop the marketplace today.',
    images: ['/seo/peekupseo.png'],
  },
  alternates: {
    canonical: 'https://usepeekup.com/go',
  },
}

export default function GoPage() {
  return (
    <ComingSoonFeature
      productName="Peekup Go"
      headline="Instant P2P delivery is on the way"
      body="Send packages across Enugu with live tracking and simple pricing. We're building Peekup Go for right after our marketplace launch."
      roadmapLabel="Peekup Go"
      features={[
        'Live map tracking',
        'Per-km pricing',
        'Insured up to ₦50k',
        'Book in 3 taps',
      ]}
    />
  )
}
