import { type Metadata } from 'next'
import '@/styles/tailwind.css'

const siteUrl = 'https://peekup.ng'

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
    icon: '/peekup-favicon.svg',
    apple: '/peekup-favicon.svg',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gray-50 text-gray-900 antialiased font-sans">
      <body>{children}</body>
    </html>
  )
}
