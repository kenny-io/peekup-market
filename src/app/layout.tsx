import { type Metadata } from 'next'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Peekup',
    default: 'Peekup Marketplace - Shop Enugu in one app',
  },
  description:
    'Peekup is the Enugu-first marketplace where riders buy and deliver from 220+ local businesses with simple single-vendor carts and tracked statuses.',
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
