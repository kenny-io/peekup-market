import { type Metadata } from 'next'

import { ComingSoonFeature } from '@/components/ComingSoonFeature'

export const metadata: Metadata = {
  title: 'Peekup Business — Coming Soon | Peekup',
  description:
    'Corporate logistics and team delivery for Enugu businesses is coming soon. Shop the Peekup marketplace today.',
  openGraph: {
    title: 'Peekup Business — Coming Soon | Peekup',
    description:
      'Corporate wallets, batch deliveries, and team logistics are on the roadmap. Start with the marketplace today.',
    url: 'https://usepeekup.com/business',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Peekup Business — Coming Soon',
    description: 'Team and corporate delivery tools are coming soon.',
    images: ['/seo/peekupseo.png'],
  },
  alternates: {
    canonical: 'https://usepeekup.com/business',
  },
}

export default function BusinessPage() {
  return (
    <ComingSoonFeature
      productName="Peekup Business"
      headline="Corporate logistics for Enugu teams"
      body="Centralised delivery ops, spending controls, and batch routes — we're building it for right after our marketplace launch."
      roadmapLabel="Peekup Business"
      features={[
        'Corporate wallet',
        'Batch dispatches',
        'Digital waybills',
        'Monthly invoicing',
      ]}
    />
  )
}
