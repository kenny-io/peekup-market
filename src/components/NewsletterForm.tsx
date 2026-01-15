'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

export function NewsletterForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || 'Failed to subscribe')
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
      <div className="flex w-full items-center justify-center md:w-auto">
        <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm text-green-700">
          <svg
            className="h-5 w-5 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>You&apos;re subscribed! We&apos;ll keep you updated.</span>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:items-center">
      <div className="flex w-full justify-center md:w-auto">
        <TextField
          type="email"
          name="email"
          aria-label="Email address"
          placeholder="Email address"
          autoComplete="email"
          required
          className="w-60 min-w-0 shrink"
        />
        <Button
          type="submit"
          color="primary"
          className="ml-4 flex-none"
          disabled={loading}
        >
          <span className="hidden lg:inline">
            {loading ? 'Subscribing...' : 'Join launch updates'}
          </span>
          <span className="lg:hidden">
            {loading ? '...' : 'Get updates'}
          </span>
        </Button>
      </div>
      {error && (
        <p className="text-center text-xs text-red-600 md:ml-2 md:text-left">
          {error}
        </p>
      )}
    </form>
  )
}
