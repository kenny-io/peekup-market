import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ScrollDepthTracker } from '@/components/ScrollDepthTracker'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollDepthTracker />
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}
