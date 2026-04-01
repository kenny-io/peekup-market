import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Delete Account & Data',
  description:
    'Request deletion of your Peekup account and associated personal data.',
}

export default function DeleteAccountPage() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 hover:text-orange-600"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Delete Account &amp; Data
          </h1>
          <p className="mt-4 text-sm text-gray-500">Last updated: April 1, 2026</p>

          <div className="mt-12 space-y-10 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Your Right to Delete
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Peekup respects your right to control your personal data. You may
                  request the deletion of your account and all associated personal
                  information at any time. This page explains how to submit a
                  deletion request, what data will be removed, and what data we are
                  legally required to retain.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                How to Request Deletion
              </h2>
              <div className="mt-4 space-y-4">
                <p>To request deletion of your account and data, choose one of the following:</p>
                <ol className="ml-6 list-decimal space-y-3">
                  <li>
                    <strong>Email us directly</strong> — Send a deletion request to{' '}
                    <a
                      href="mailto:privacy@usepeekup.com"
                      className="text-orange-600 underline hover:text-orange-700"
                    >
                      privacy@usepeekup.com
                    </a>{' '}
                    with the subject line <em>&ldquo;Account Deletion Request&rdquo;</em>.
                    Include the email address or phone number linked to your account.
                  </li>
                  <li>
                    <strong>In-app request</strong> — Go to{' '}
                    <strong>Settings → Account → Delete Account</strong> inside the
                    Peekup app.
                  </li>
                </ol>
                <p>
                  We will acknowledge your request within <strong>48 hours</strong> and
                  complete the deletion within <strong>30 days</strong>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Data That Will Be Deleted
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Upon confirmation of your request, we will permanently delete the
                  following personal data:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Account profile (name, email address, phone number, password)</li>
                  <li>Saved delivery addresses</li>
                  <li>Order history and preferences</li>
                  <li>Payment method tokens stored with Peekup</li>
                  <li>Device identifiers and push notification tokens</li>
                  <li>Communication history with support</li>
                  <li>
                    Rider applicant data (NIN, driver&apos;s license, guarantor
                    information, photographs) — if applicable
                  </li>
                  <li>
                    Vendor profile and business information — if applicable
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Data We Are Required to Retain
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Some data may be retained after account deletion to meet our legal
                  and regulatory obligations:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Transaction records</strong> — Retained for up to{' '}
                    <strong>7 years</strong> as required by Nigerian tax and financial
                    regulations.
                  </li>
                  <li>
                    <strong>Fraud and abuse records</strong> — Retained as necessary
                    to prevent fraud and protect the safety of other users.
                  </li>
                  <li>
                    <strong>Legal hold data</strong> — Retained if required by an
                    ongoing legal proceeding or regulatory investigation.
                  </li>
                </ul>
                <p>
                  Any retained data is used solely for the stated legal purpose and
                  will not be used for marketing or product improvement.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Partial Data Deletion (Optional)
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  If you do not want to delete your full account, you can request
                  deletion of specific data — for example, removing saved addresses,
                  clearing order history, or revoking marketing consent — without
                  closing your account.
                </p>
                <p>
                  Send a specific request to{' '}
                  <a
                    href="mailto:privacy@usepeekup.com"
                    className="text-orange-600 underline hover:text-orange-700"
                  >
                    privacy@usepeekup.com
                  </a>{' '}
                  describing the data you would like removed.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
              <div className="mt-4 space-y-4">
                <p>For questions about data deletion or your privacy rights, contact us:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    Email:{' '}
                    <a
                      href="mailto:privacy@usepeekup.com"
                      className="text-orange-600 underline hover:text-orange-700"
                    >
                      privacy@usepeekup.com
                    </a>
                  </li>
                  <li>Phone: 08038927241</li>
                  <li>Address: Enugu, Nigeria</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </section>
  )
}
