import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Simple hash function for demo purposes
// In production, use bcrypt or similar on the server
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { first_name, last_name, email, password, referral_source } = body

    // Validate required fields
    if (!first_name || !last_name || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Hash the password
    const password_hash = await hashPassword(password)

    // Insert into Supabase
    const { data, error } = await supabase
      .from('peekup_signups')
      .insert([
        {
          first_name,
          last_name,
          email,
          password_hash,
          referral_source: referral_source || null,
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      
      // Check for unique constraint violation (duplicate email)
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'An account with this email already exists' },
          { status: 409 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to create account' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Account created successfully', data },
      { status: 201 }
    )
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
