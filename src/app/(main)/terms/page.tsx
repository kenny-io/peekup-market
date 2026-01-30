import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for using the Peekup platform, mobile application, and delivery services in Enugu, Nigeria.',
}

export default function TermsOfServicePage() {
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
            Terms of Service
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
                  Welcome to Peekup (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Peekup mobile application, website (usepeekup.com), and all related services (collectively, the &ldquo;Platform&rdquo;). By accessing or using our Platform, you agree to be bound by these Terms.
                </p>
                <p>
                  Peekup is an on-demand delivery platform operating in Enugu, Nigeria, connecting customers with local vendors through our network of delivery riders (&ldquo;Peekup Riders&rdquo; or &ldquo;Logistics Pilots&rdquo;).
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">2. Eligibility</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>To use our Platform, you must:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Be at least 18 years of age</li>
                  <li>Have the legal capacity to enter into binding contracts</li>
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Reside in or have a delivery address within our service areas in Enugu State</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">3. Account Registration</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  When you create an account with Peekup, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">4. Services Description</h2>
              <div className="mt-4 space-y-6 text-gray-600 leading-relaxed">
                <div>
                  <h3 className="font-medium text-gray-800">4.1 For Customers</h3>
                  <p className="mt-2">Peekup enables you to:</p>
                  <ul className="ml-6 mt-2 list-disc space-y-2">
                    <li>Browse and order products from participating local vendors</li>
                    <li>Request peer-to-peer (P2P) package delivery through Peekup Go</li>
                    <li>Track your orders and deliveries in real-time</li>
                    <li>Communicate with riders during active deliveries</li>
                    <li>Rate and review your delivery experience</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800">4.2 For Vendors</h3>
                  <p className="mt-2">Registered vendors can:</p>
                  <ul className="ml-6 mt-2 list-disc space-y-2">
                    <li>List products and manage inventory through our vendor portal</li>
                    <li>Receive and fulfill orders from Peekup customers</li>
                    <li>Access sales analytics and reporting</li>
                    <li>Benefit from our rider network for order fulfillment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800">4.3 For Riders</h3>
                  <p className="mt-2">Approved Peekup Riders agree to:</p>
                  <ul className="ml-6 mt-2 list-disc space-y-2">
                    <li>Complete deliveries safely, efficiently, and professionally</li>
                    <li>Maintain all required documentation and qualifications</li>
                    <li>Use provided equipment (bike, gear) responsibly</li>
                    <li>Adhere to all traffic laws and safety regulations</li>
                    <li>Represent Peekup positively in all customer interactions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">5. Payments and Pricing</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  All prices displayed on the Platform are in Nigerian Naira (₦). Delivery fees are calculated based on distance and package size. Payment can be made through supported methods including wallet, card payment and bank transfers.
                </p>
                <p>
                  By placing an order, you authorize Peekup to charge your selected payment method for the total order amount including product costs, delivery fees, and any applicable service charges.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">6. Delivery and Insurance</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We strive to complete all deliveries within the estimated timeframe provided at checkout. However, delivery times may vary due to traffic, weather, or other unforeseen circumstances.
                </p>
                <p>
                  All Peekup Go deliveries include basic insurance coverage up to ₦50,000 for loss or damage. Additional coverage may be purchased for high-value items. Claims must be reported within 24 hours of delivery.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">7. Cancellations and Refunds</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Orders may be cancelled before a rider is assigned at no charge. Once a rider has been dispatched, cancellation fees may apply. Refunds for defective products or failed deliveries will be processed within 5-7 business days to the original payment method.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">8. Prohibited Conduct</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>You agree not to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Use the Platform for any illegal or unauthorized purpose</li>
                  <li>Request delivery of prohibited items (weapons, drugs, hazardous materials)</li>
                  <li>Harass, abuse, or harm Peekup riders, vendors, or staff</li>
                  <li>Attempt to defraud Peekup or other users</li>
                  <li>Interfere with the proper operation of the Platform</li>
                  <li>Create multiple accounts to abuse promotions or discounts</li>
                  <li>Share your account credentials with others</li>
                </ul>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">9. Intellectual Property</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Peekup name, logo, and all related trademarks, service marks, and trade names are the exclusive property of Peekup. You may not use, copy, or distribute our intellectual property without prior written consent.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">10. Limitation of Liability</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  To the maximum extent permitted by Nigerian law, Peekup shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform. Our total liability for any claim shall not exceed the amount you paid to Peekup in the 12 months preceding the claim.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">11. Indemnification</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  You agree to indemnify and hold harmless Peekup, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Platform or violation of these Terms.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">12. Modifications to Terms</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We reserve the right to modify these Terms at any time. We will notify you of significant changes via email or through the Platform. Your continued use of the Platform after such changes constitutes acceptance of the modified Terms.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">13. Governing Law</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms shall be resolved in the courts of Enugu State, Nigeria.
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">14. Contact Information</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>For questions about these Terms of Service, please contact us:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Email: legal@usepeekup.com</li>
                  <li>Phone: 08038927241</li>
                  <li>Address: Enugu, Nigeria</li>
                </ul>
              </div>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">15. Severability</h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </section>
  )
}
