'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SelectField, TextField } from '@/components/Fields'
import { CirclesBackground } from '@/components/CirclesBackground'

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

export default function Register() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      first_name: formData.get('first_name') as string,
      last_name: formData.get('last_name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      referral_source: formData.get('referral_source') as string,
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || 'Failed to create account')
      }

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
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
              Account created!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Your account has been created successfully.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              We will notify you when Peekup launches and your account is ready.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/login" color="primary">
                Sign in
              </Button>
              <Button href="/" variant="outline">
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
              Create your account
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-orange-600 hover:text-orange-700">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl shadow-gray-900/10 sm:p-12">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <TextField
                  label="First name"
                  name="first_name"
                  type="text"
                  autoComplete="given-name"
                  placeholder="John"
                  required
                />
                <TextField
                  label="Last name"
                  name="last_name"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Doe"
                  required
                />
                <TextField
                  className="col-span-full"
                  label="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
                <TextField
                  className="col-span-full"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  required
                />
                <SelectField
                  className="col-span-full"
                  label="How did you hear about us?"
                  name="referral_source"
                >
                  <option value="">Select an option</option>
                  <option value="social_media">Social media</option>
                  <option value="friend">Friend or family</option>
                  <option value="search">Google search</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
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
                {loading ? 'Creating account...' : 'Create account'}
              </Button>
              <p className="mt-6 text-center text-xs text-gray-500">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
