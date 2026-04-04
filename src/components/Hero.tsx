'use client'

import { useId } from 'react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { trackDownloadPeekup } from '@/lib/analytics'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#e2e8f0"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f97316" />
            <stop offset="1" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#e2e8f0"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f97316" />
            <stop offset="1" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-[2.5rem] font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-5xl">
              Shop from Enugu&apos;s
              <br />
              best stores in one app.
              <br />
              <span className="text-orange-600">Delivered fast.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              Order food, groceries, pharmacy items, water, and electronics from
              trusted Enugu vendors. Peekup riders buy in-store and deliver to
              your doorstep with live updates.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4">
              <Button
                href="/waitlist"
                color="primary"
                onClick={() => trackDownloadPeekup('hero')}
              >
                Download Peekup
              </Button>
              <Button href="/vendors" color="soft">
                Become a vendor
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  'bg-orange-400',
                  'bg-gray-900',
                  'bg-orange-600',
                  'bg-gray-700',
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${bg} ring-2 ring-gray-50 text-[10px] font-bold text-white`}
                  >
                    {['AO', 'CK', 'NG', 'IF'][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  1,500+ people on the waitlist
                </p>
                <p className="text-xs text-gray-500">
                  Join Enugu&apos;s fastest-growing marketplace
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/70 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] mask-[linear-gradient(to_bottom,white_60%,transparent)] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <Image
                src="/mockup1-portrait.png"
                alt="Peekup app showing Enugu vendors, categories, and delivery options"
                width={300}
                height={615}
                className="mx-auto h-auto w-full max-w-[300px] drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              Launch partners
            </p>
            <div className="relative mt-4">
              <p className="select-none text-center text-sm text-gray-600 blur-[6px] lg:text-left">
                Ntachi Osa • Crunchies • SPAR • Kilimanjaro • Apollo Pharmacy • and more
              </p>
              <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                  Reveal coming soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
