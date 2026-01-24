import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      full_name,
      phone,
      email,
      residential_address,
      nin,
      academic_qualification,
      english_fluency,
      igbo_fluency,
      previous_employment_history,
      riding_experience,
      guarantor1_name,
      guarantor1_address,
      guarantor1_occupation,
      guarantor1_email,
      guarantor1_phone,
      guarantor2_name,
      guarantor2_address,
      guarantor2_occupation,
      guarantor2_email,
      guarantor2_phone,
    } = body

    // Validate required fields
    if (
      !full_name ||
      !phone ||
      !email ||
      !residential_address ||
      !nin ||
      !academic_qualification ||
      !english_fluency ||
      !igbo_fluency ||
      !guarantor1_name ||
      !guarantor1_address ||
      !guarantor1_occupation ||
      !guarantor1_email ||
      !guarantor1_phone ||
      !guarantor2_name ||
      !guarantor2_address ||
      !guarantor2_occupation ||
      !guarantor2_email ||
      !guarantor2_phone
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('peekup_rider_applications')
      .insert([
        {
          full_name,
          phone,
          email,
          residential_address,
          nin,
          academic_qualification,
          english_fluency,
          igbo_fluency,
          previous_employment_history: previous_employment_history || null,
          riding_experience: riding_experience || null,
          guarantor1_name,
          guarantor1_address,
          guarantor1_occupation,
          guarantor1_email,
          guarantor1_phone,
          guarantor2_name,
          guarantor2_address,
          guarantor2_occupation,
          guarantor2_email,
          guarantor2_phone,
          status: 'pending',
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)

      // Check for unique constraint violation (duplicate email or NIN)
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'An application with this email or NIN already exists' },
          { status: 409 }
        )
      }

      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Application submitted successfully', data },
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
