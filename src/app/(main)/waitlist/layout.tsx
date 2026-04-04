import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join the Waitlist - Be First to Use Peekup',
  description:
    'Join the Peekup waitlist to be notified when we launch on iOS and Android. Get early access to order from 220+ local businesses in Enugu.',
  keywords: [
    'Peekup waitlist',
    'early access',
    'Enugu delivery app',
    'coming soon',
  ],
  openGraph: {
    title: 'Join the Peekup Waitlist',
    description:
      'Be the first to know when Peekup launches. Order from local businesses in Enugu with fast delivery.',
    url: 'https://usepeekup.com/waitlist',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Join the Peekup Waitlist',
    description: 'Be first to use Peekup when we launch in Enugu.',
    images: ['/seo/peekupseo.png'],
  },
  alternates: {
    canonical: 'https://usepeekup.com/waitlist',
  },
}

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
