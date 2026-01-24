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

export interface RiderApplication {
  id?: string
  full_name: string
  phone: string
  email: string
  residential_address: string
  residential_address_proof_url?: string
  drivers_license_url?: string
  nin: string
  passport_photo_url?: string
  academic_qualification: string
  english_fluency: string
  igbo_fluency: string
  previous_employment_history?: string
  riding_experience?: string
  guarantor1_name: string
  guarantor1_address: string
  guarantor1_occupation: string
  guarantor1_email: string
  guarantor1_phone: string
  guarantor2_name: string
  guarantor2_address: string
  guarantor2_occupation: string
  guarantor2_email: string
  guarantor2_phone: string
  status?: 'pending' | 'under_review' | 'approved' | 'rejected'
  admin_notes?: string
  reviewed_at?: string
  created_at?: string
  updated_at?: string
}
