# Peekup

Peekup is a digital marketplace where users order everyday items from local businesses in Enugu and get them delivered fast by Peekup riders.

## About

Peekup connects customers with 220+ local vendors across Enugu metropolis, including popular businesses like Ntachi Osa, Crunchies, SPAR Enugu, Kilimanjaro, and Apollo Pharmacy. Our riders handle the entire fulfillment process—going to the store, purchasing items, and delivering to customers.

### Key Features

- **One Vendor Per Checkout** - Simple, fast fulfillment with items from one vendor at a time
- **Prepaid Orders** - Transparent pricing with upfront payment (items + delivery fee + service fee)
- **Real-time Tracking** - Follow your order from placement to delivery
- **Multiple Categories** - Food, Groceries, Pharmacy, Electronics, Household essentials, and more

### Product Categories

- Food and Restaurants
- Groceries and Supermarkets
- Pharmacy and Health
- Water and Drinks
- Ice Cream and Desserts
- Electronics and Accessories
- Appliances and Home
- Household Essentials

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **UI Components**: [Headless UI](https://headlessui.dev), [Radix UI](https://radix-ui.com)
- **Database**: [Supabase](https://supabase.com)
- **Animations**: [Framer Motion](https://framer.com/motion)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/peekup-market.git
cd peekup-market
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (main)/            # Main layout group
│   │   ├── page.tsx       # Homepage
│   │   ├── waitlist/      # Waitlist page
│   │   ├── register/      # Sign up page
│   │   ├── login/         # Sign in page
│   │   └── business/      # Business page
│   └── api/               # API routes
│       ├── waitlist/      # Waitlist submissions
│       ├── signup/        # User sign ups
│       └── newsletter/    # Newsletter subscriptions
├── components/            # React components
├── images/                # Static images
├── lib/                   # Utility functions and clients
└── styles/                # Global styles
```

## Database Tables (Supabase)

| Table | Purpose |
|-------|---------|
| `peekup_consumer_waitlist` | Consumer waitlist submissions |
| `peekup_signups` | User account sign ups |
| `peekup_newsletter` | Newsletter subscriptions |

## B2B Logistics (Coming Soon)

Peekup V2 will offer B2B logistics SaaS for businesses:

- Corporate Wallet for prepaid deliveries
- Batch delivery requests
- Digital proof of delivery
- Rider fleet management

Target customers: Banks, law firms, pharmacies, distributors, retail stores, and more.

## License

This project is proprietary software. All rights reserved.

## Contact

- Website: [peekup.ng](https://peekup.ng)
- Email: hello@peekup.ng
