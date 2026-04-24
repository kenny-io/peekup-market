import { type Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import '@/styles/tailwind.css'
import { GoogleAnalyticsScripts } from '@/components/GoogleAnalyticsScripts'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const siteUrl = 'https://usepeekup.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Peekup',
    default: 'Peekup - Shop Enugu in One App | Fast Local Delivery',
  },
  description:
    'Peekup is the Enugu-first marketplace where riders buy and deliver from 220+ local businesses. Order food, groceries, pharmacy items and more with real-time tracking.',
  keywords: [
    'Peekup',
    'Enugu delivery',
    'local delivery',
    'marketplace',
    'food delivery Enugu',
    'grocery delivery',
    'pharmacy delivery',
    'Nigeria delivery app',
    'same day delivery',
    'on-demand delivery',
  ],
  authors: [{ name: 'Peekup', url: siteUrl }],
  creator: 'Peekup',
  publisher: 'Peekup',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteUrl,
    siteName: 'Peekup',
    title: 'Peekup - Shop Enugu in One App | Fast Local Delivery',
    description:
      'Order everyday items from 220+ local businesses in Enugu. Food, groceries, pharmacy and more delivered fast by Peekup riders.',
    images: [
      {
        url: '/seo/peekupseo.png',
        width: 1200,
        height: 630,
        alt: 'Peekup - Shop Enugu in One App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peekup - Shop Enugu in One App | Fast Local Delivery',
    description:
      'Order everyday items from 220+ local businesses in Enugu. Food, groceries, pharmacy and more delivered fast.',
    images: ['/seo/peekupseo.png'],
    creator: '@peekupng',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.PNG',
    apple: '/favicon.PNG',
  },
  manifest: '/site.webmanifest',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Peekup',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.PNG`,
        width: 512,
        height: 512,
      },
      description:
        'Peekup is the Enugu-first digital marketplace connecting residents to 220+ local vendors for same-day delivery.',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@usepeekup.com',
        contactType: 'customer support',
        availableLanguage: ['English'],
      },
      sameAs: ['https://twitter.com/peekupng'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Peekup',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en-NG',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} bg-gray-50 text-gray-900 antialiased font-sans`}
    >
      <body>
        <GoogleAnalyticsScripts />
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
