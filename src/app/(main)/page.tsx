import { type Metadata } from 'next'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export const metadata: Metadata = {
  title: 'Peekup - Shop Enugu in One App | Fast Local Delivery',
  description:
    'Order everyday items from 220+ local businesses in Enugu including Ntachi Osa, SPAR, Crunchies, and Apollo Pharmacy. Food, groceries, pharmacy items delivered fast by Peekup riders.',
  openGraph: {
    title: 'Peekup - Shop Enugu in One App',
    description:
      'Order from 220+ local businesses in Enugu. Fast delivery by Peekup riders with real-time tracking.',
    url: 'https://usepeekup.com',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Peekup - Shop Enugu in One App',
    description: 'Order from 220+ local businesses in Enugu with fast delivery.',
    images: ['/seo/peekupseo.png'],
  },
  alternates: {
    canonical: 'https://usepeekup.com',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Reviews />
      <Services />
      <Faqs />
    </>
  )
}
