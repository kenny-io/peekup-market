import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Peekup - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: January 24, 2026
          </p>

          <div className="mt-12 space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Peekup (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our mobile application, website (usepeekup.com), and delivery services (collectively, the &ldquo;Platform&rdquo;).
                </p>
                <p>
                  By using our Platform, you consent to the data practices described in this policy. If you do not agree with our policies, please do not use our Platform.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
              <div className="mt-4 space-y-6 text-gray-600 leading-relaxed">
                <div>
                  <h3 className="font-medium text-gray-800">2.1 Information You Provide</h3>
                  <p className="mt-2">We collect information you voluntarily provide, including:</p>
                  <ul className="ml-6 mt-2 list-disc space-y-2">
                    <li><strong>Account Information:</strong> Name, email address, phone number, password</li>
                    <li><strong>Delivery Information:</strong> Delivery addresses, location data, delivery instructions</li>
                    <li><strong>Payment Information:</strong> Payment method details (processed securely through our payment partners)</li>
                    <li><strong>Communication Data:</strong> Messages with our support team, riders, or vendors</li>
                    <li><strong>Rider Applications:</strong> For rider applicants: NIN, driver&apos;s license, employment history, guarantor information, photographs</li>
                    <li><strong>Vendor Information:</strong> Business registration details, bank account information for payouts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800">2.2 Information Collected Automatically</h3>
                  <p className="mt-2">When you use our Platform, we automatically collect:</p>
                  <ul className="ml-6 mt-2 list-disc space-y-2">
                    <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
                    <li><strong>Location Data:</strong> Real-time GPS location (with your permission) for delivery tracking and service optimization</li>
                    <li><strong>Usage Data:</strong> Pages visited, features used, time spent on the Platform</li>
                    <li><strong>Log Data:</strong> IP address, browser type, access times, referring URLs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800">2.3 Information from Third Parties</h3>
                  <p className="mt-2">We may receive information from:</p>
                  <ul className="ml-6 mt-2 list-disc space-y-2">
                    <li>Payment processors regarding transaction status</li>
                    <li>Social media platforms if you choose to link your account</li>
                    <li>Background check providers for rider verification</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">3. How We Use Your Information</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>We use collected information to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Process and fulfill your orders and deliveries</li>
                  <li>Provide real-time delivery tracking</li>
                  <li>Process payments and prevent fraud</li>
                  <li>Communicate with you about orders, updates, and promotions</li>
                  <li>Improve our Platform and develop new features</li>
                  <li>Verify rider and vendor applications</li>
                  <li>Respond to customer service inquiries</li>
                  <li>Comply with legal obligations</li>
                  <li>Analyze usage patterns and optimize our services</li>
                  <li>Send promotional communications (with your consent)</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">4. Information Sharing</h2>
              <div className="mt-4 space-y-6 text-gray-600 leading-relaxed">
                <div>
                  <h3 className="font-medium text-gray-800">4.1 Service Providers</h3>
                  <p className="mt-2">We may share your information with:</p>
                  <ul className="ml-6 mt-2 list-disc space-y-2">
                    <li><strong>Riders:</strong> Name, phone number, and delivery address to complete deliveries</li>
                    <li><strong>Vendors:</strong> Order details and necessary contact information</li>
                    <li><strong>Payment Processors:</strong> Transaction data to process payments securely</li>
                    <li><strong>Cloud Services:</strong> Data storage and processing partners</li>
                    <li><strong>Analytics Providers:</strong> Aggregated usage data for service improvement</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800">4.2 Legal Requirements</h3>
                  <p className="mt-2">
                    We may disclose information when required by law, court order, or government regulation, or when necessary to protect our rights, property, or safety.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800">4.3 Business Transfers</h3>
                  <p className="mt-2">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">5. Data Security</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information, including:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure authentication mechanisms</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls limiting employee access to personal data</li>
                  <li>Secure data centers with physical security measures</li>
                </ul>
                <p>
                  However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">6. Data Retention</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes described in this policy. Specifically:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li><strong>Account Data:</strong> Retained while your account is active, plus 2 years after deletion</li>
                  <li><strong>Transaction Records:</strong> Retained for 7 years for legal and accounting purposes</li>
                  <li><strong>Rider Application Data:</strong> Retained for 3 years for unsuccessful applications</li>
                  <li><strong>Communication Records:</strong> Retained for 1 year after the last interaction</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">7. Your Rights</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>Under the Nigeria Data Protection Regulation (NDPR), you have the right to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your data (subject to legal retention requirements)</li>
                  <li><strong>Restriction:</strong> Limit how we process your data</li>
                  <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Objection:</strong> Object to certain processing activities</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                </ul>
                <p>
                  To exercise these rights, contact us at privacy@usepeekup.com. We will respond within 30 days.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">8. Location Data</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our Platform requires location access to provide delivery services. You can control location permissions through your device settings. Please note that disabling location services may limit certain features.
                </p>
                <p>
                  For riders, continuous location tracking during active shifts is required for dispatch, navigation, and customer tracking features.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">9. Cookies and Tracking</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>We use cookies and similar technologies to enhance your experience. These include:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for Platform functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand usage patterns</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
                <p>You can manage cookie preferences through your browser settings.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">10. Children&apos;s Privacy</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our Platform is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If we discover that we have collected information from a child, we will delete it promptly.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">11. Third-Party Links</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our Platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">12. International Data Transfers</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Your information may be processed on servers located outside Nigeria. We ensure appropriate safeguards are in place to protect your data in accordance with this policy and applicable laws.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">13. Changes to This Policy</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We may update this Privacy Policy periodically. We will notify you of significant changes via email or through the Platform. The &ldquo;Last updated&rdquo; date at the top indicates when the policy was last revised.
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">14. Contact Us</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  For questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Email: privacy@usepeekup.com</li>
                  <li>Phone: 08038927241</li>
                  <li>Address: Enugu, Nigeria</li>
                </ul>
              </div>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">15. Regulatory Compliance</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Peekup complies with the Nigeria Data Protection Regulation (NDPR) and other applicable data protection laws. We are committed to upholding your privacy rights and maintaining transparency in our data practices.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </section>
  )
}
