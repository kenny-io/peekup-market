import { type ReactNode } from 'react'
import { Playfair_Display, DM_Sans } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${playfair.variable} ${dmSans.variable}`}>
      {children}
    </div>
  )
}
