import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Your Account - Get Started with Peekup',
  description:
    'Create your Peekup account to order from 220+ local businesses in Enugu. Fast delivery, real-time tracking, and transparent pricing.',
  openGraph: {
    title: 'Sign Up for Peekup',
    description:
      'Create your account and start ordering from local businesses in Enugu.',
    url: 'https://peekup.ng/register',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://peekup.ng/register',
  },
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
