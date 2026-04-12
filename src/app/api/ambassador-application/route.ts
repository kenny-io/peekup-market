import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendAmbassadorConfirmationEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      first_name,
      last_name,
      phone,
      email,
      institution,
      department,
      year_of_study,
      instagram_handle,
      tiktok_handle,
      twitter_handle,
      total_followers,
      posting_frequency,
      whatsapp_groups_count,
      is_whatsapp_admin,
      active_group_types,
      campus_activities,
      campus_reputation,
      why_ambassador,
      convince_story,
      lead_ambassador_interest,
      hours_per_week,
      voice_note_link,
      availability,
      important_dates,
      referral_source,
    } = body

    const requiredFields: Record<string, string> = {
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 'Phone Number',
      email: 'Email Address',
      institution: 'Institution',
      department: 'Department',
      year_of_study: 'Year of Study',
      total_followers: 'Total Followers',
      posting_frequency: 'Posting Frequency',
      whatsapp_groups_count: 'WhatsApp Groups',
      is_whatsapp_admin: 'WhatsApp Admin Status',
      active_group_types: 'Active Group Types',
      campus_activities: 'Campus Activities',
      campus_reputation: 'Campus Reputation',
      why_ambassador: 'Why Ambassador',
      convince_story: 'Convince Story',
      lead_ambassador_interest: 'Lead Ambassador Interest',
      hours_per_week: 'Hours Per Week',
      availability: 'Availability',
      referral_source: 'Referral Source',
    }

    const missing = Object.entries(requiredFields)
      .filter(([key]) => !body[key])
      .map(([, label]) => label)

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 },
      )
    }

    const { data, error } = await supabase
      .from('peekup_ambassador_applications')
      .insert([
        {
          first_name,
          last_name,
          phone,
          email,
          institution,
          department,
          year_of_study,
          instagram_handle: instagram_handle || null,
          tiktok_handle: tiktok_handle || null,
          twitter_handle: twitter_handle || null,
          total_followers,
          posting_frequency,
          whatsapp_groups_count,
          is_whatsapp_admin,
          active_group_types,
          campus_activities,
          campus_reputation,
          why_ambassador,
          convince_story,
          lead_ambassador_interest,
          hours_per_week,
          voice_note_link: voice_note_link || null,
          availability,
          important_dates: important_dates || null,
          referral_source,
          status: 'pending',
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)

      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'An application with this email already exists' },
          { status: 409 },
        )
      }

      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 },
      )
    }

    sendAmbassadorConfirmationEmail(email, first_name, institution).catch((err) =>
      console.error('Failed to send confirmation email:', err),
    )

    return NextResponse.json(
      { message: 'Application submitted successfully', data },
      { status: 201 },
    )
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
