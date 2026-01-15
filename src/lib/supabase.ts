import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our tables
export interface WaitlistEntry {
  id?: string
  name: string
  email: string
  phone: string
  device: string
  use_case?: string
  created_at?: string
}

export interface SignupEntry {
  id?: string
  first_name: string
  last_name: string
  email: string
  password_hash: string
  referral_source?: string
  created_at?: string
}

export interface NewsletterEntry {
  id?: string
  email: string
  created_at?: string
}
