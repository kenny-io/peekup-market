'use client'

import { useState } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SelectField, TextField } from '@/components/Fields'
import { CirclesBackground } from '@/components/CirclesBackground'

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      device: formData.get('device') as string,
      use_case: formData.get('use_case') as string,
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || 'Failed to join waitlist')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="relative overflow-hidden py-20 sm:py-32">
        <CirclesBackground
          width="1090"
          height="1090"
          className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/30 sm:-top-9 sm:h-auto"
        />
        <Container>
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckIcon className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="mt-8 text-3xl font-medium tracking-tight text-gray-900">
              You're on the list!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We will notify you as soon as Peekup launches on the app store.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              Keep an eye on your inbox. In the meantime, explore what Peekup has to offer.
            </p>
            <div className="mt-8">
              <Button href="/" color="primary">
                Back to home
              </Button>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <CirclesBackground
        width="1090"
        height="1090"
        className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/30 sm:-top-9 sm:h-auto"
      />
      <Container>
        <div className="mx-auto max-w-lg">
          <div className="text-center">
            <h1 className="text-3xl font-medium tracking-tight text-gray-900">
              Join the Waitlist
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Be the first to know when Peekup launches on iOS and Android.
            </p>
          </div>

          <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl shadow-gray-900/10 sm:p-12">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <TextField
                  label="Full name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
                <TextField
                  label="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
                <TextField
                  label="Phone number"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+234 800 000 0000"
                  required
                />
                <SelectField
                  label="Preferred device"
                  name="device"
                  required
                >
                  <option value="">Select your device</option>
                  <option value="ios">iPhone (iOS)</option>
                  <option value="android">Android</option>
                  <option value="both">Both</option>
                </SelectField>
                <SelectField
                  label="What will you use Peekup for?"
                  name="use_case"
                >
                  <option value="">Select an option</option>
                  <option value="personal">Personal shopping and delivery</option>
                  <option value="business">Business or office deliveries</option>
                  <option value="vendor">I own a store and want to list</option>
                  <option value="rider">I want to become a rider</option>
                </SelectField>
              </div>
              {error && (
                <div className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
                  {error}
                </div>
              )}
              <Button
                type="submit"
                color="primary"
                className="mt-8 w-full"
                disabled={loading}
              >
                {loading ? 'Joining...' : 'Join the Waitlist'}
              </Button>
              <p className="mt-6 text-center text-xs text-gray-500">
                We respect your privacy. No spam, just launch updates.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
