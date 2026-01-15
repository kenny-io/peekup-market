import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { CirclesBackground } from '@/components/CirclesBackground'

export const metadata: Metadata = {
  title: 'Sign In to Your Account',
  description:
    'Sign in to your Peekup account to order from local businesses, track deliveries, and manage your orders in Enugu.',
  openGraph: {
    title: 'Sign In - Peekup',
    description: 'Access your Peekup account to order and track deliveries.',
    url: 'https://peekup.ng/login',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://peekup.ng/login',
  },
}

export default function Login() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <CirclesBackground
        width="1090"
        height="1090"
        className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/30 sm:-top-9 sm:h-auto"
      />
      <Container>
        <div className="mx-auto max-w-md">
          <div className="text-center">
            <h1 className="text-3xl font-medium tracking-tight text-gray-900">
              Sign in to your account
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Don't have an account?{' '}
              <Link href="/register" className="text-orange-600 hover:text-orange-700">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl shadow-gray-900/10 sm:p-12">
            <form>
              <div className="space-y-6">
                <TextField
                  label="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="group relative mt-8">
                <Button
                  type="submit"
                  color="primary"
                  className="w-full cursor-not-allowed opacity-50"
                  disabled
                >
                  Sign in
                </Button>
                <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  Coming soon
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                </span>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
