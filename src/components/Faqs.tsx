import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does payment work?',
      answer:
        'You pay upfront when you checkout. Your total includes the items subtotal, delivery fee, and a small service fee. All charges are shown clearly before you place your order.',
    },
    {
      question: 'What if the store has no dispatch riders?',
      answer:
        'That is exactly what Peekup solves. Our riders go to the store, purchase your items, and deliver them to you. We handle everything so vendors do not need their own delivery infrastructure.',
    },
    {
      question: 'How are delivery fees calculated?',
      answer:
        'Transparent pricing: you pay the items subtotal, a delivery fee, and a Peekup service fee. You see the exact breakdown before placing your order.',
    },
  ],
  [
    {
      question: 'Can I order from multiple vendors?',
      answer:
        'Each order is tied to one vendor for faster, more reliable delivery. Adding items from a second vendor creates a separate cart. This keeps fulfillment simple and fast.',
    },
    {
      question: 'What categories are available?',
      answer:
        'We cover everyday needs: Food and Restaurants, Groceries, Pharmacy and Health, Water and Drinks, Ice Cream and Desserts, Electronics, Appliances, Household essentials, and more.',
    },
    {
      question: 'How do vendors get listed?',
      answer:
        'Vendors can join Peekup without building delivery infrastructure. We aggregate local businesses and handle all logistics. Contact us to get your store listed.',
    },
  ],
  [
    {
      question: 'Where does Peekup operate?',
      answer:
        'We cover Enugu metropolis with 220+ local businesses including Ntachi Osa, Crunchies, SPAR Enugu, Kilimanjaro, and Apollo Pharmacy. More areas coming soon.',
    },
    {
      question: 'How are orders tracked?',
      answer:
        'Follow your order in real time from placement to delivery. Our riders accept orders, shop at the vendor, and deliver to your doorstep. You get notifications at every step.',
    },
    {
      question: 'Do you offer business logistics solutions?',
      answer:
        'Yes. Peekup offers B2B logistics with corporate wallets, batch delivery requests, digital proof of delivery, and audit-ready records. Perfect for banks, pharmacies, law firms, and distributors.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:hello@peekup.ng"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
