export interface BlogArticle {
  slug: string
  title: string
  headline: string
  description: string
  category: string
  categoryColor: string
  readMinutes: number
  datePublished: string
  dateModified: string
  keywords: string[]
  sections: ArticleSection[]
  faqs: FAQ[]
  relatedSlugs: string[]
}

export interface ArticleSection {
  type:
    | 'intro'
    | 'h2'
    | 'h3'
    | 'paragraph'
    | 'ul'
    | 'ol'
    | 'callout'
    | 'card-grid'
    | 'table'
    | 'cta'
  content?: string
  items?: string[]
  cards?: CardItem[]
  headers?: string[]
  rows?: string[][]
  ctaHref?: string
  ctaLabel?: string
}

export interface CardItem {
  icon: string
  title: string
  description: string
}

export interface FAQ {
  q: string
  a: string
}

// ---------------------------------------------------------------------------
// Shared schema building blocks
// ---------------------------------------------------------------------------

const SITE_URL = 'https://peekup.ng'

const peekupOrganization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Peekup',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/favicon.PNG`,
    width: 512,
    height: 512,
  },
  description:
    'Peekup is the Enugu-first digital marketplace connecting residents to 220+ local vendors for same-day delivery.',
  areaServed: {
    '@type': 'State',
    name: 'Enugu State',
    containedInPlace: {
      '@type': 'Country',
      name: 'Nigeria',
    },
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@peekup.ng',
    contactType: 'customer support',
    availableLanguage: ['English'],
  },
}

const peekupWebSite = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Peekup',
  description:
    'The Enugu-first marketplace for same-day local delivery — groceries, food, electronics, fashion, pharmacy and more.',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-NG',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/vendors?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const enugu = {
  '@type': 'City',
  name: 'Enugu',
  containedInPlace: {
    '@type': 'State',
    name: 'Enugu State',
    containedInPlace: { '@type': 'Country', name: 'Nigeria' },
  },
}

/**
 * Builds a rich JSON-LD graph for an individual blog article.
 * Optimised for:
 *  - Google rich results (Article, FAQPage, BreadcrumbList, Speakable)
 *  - AI agents (ChatGPT, Perplexity, Claude, Gemini) that consume structured data
 *    to answer shopping queries about Enugu
 */
export function buildArticleSchemas(article: BlogArticle): object[] {
  const articleUrl = `${SITE_URL}/blog/${article.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      peekupOrganization,
      peekupWebSite,
      {
        '@type': 'Article',
        '@id': `${articleUrl}#article`,
        headline: article.headline,
        description: article.description,
        keywords: article.keywords.join(', '),
        inLanguage: 'en-NG',
        url: articleUrl,
        mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: [
          enugu,
          {
            '@type': 'Thing',
            name: 'Online Shopping',
            description: 'Purchasing goods via the internet with home delivery',
          },
          {
            '@type': 'Thing',
            name: article.category,
          },
        ],
        mentions: [
          {
            '@type': 'Organization',
            name: 'Peekup',
            url: SITE_URL,
            description: 'Enugu-first local delivery marketplace',
          },
          enugu,
        ],
        audience: {
          '@type': 'Audience',
          audienceType: 'Enugu State residents, university students, local shoppers',
          geographicArea: {
            '@type': 'State',
            name: 'Enugu State',
            containedInPlace: { '@type': 'Country', name: 'Nigeria' },
          },
        },
        // Speakable: tell AI voice agents which CSS selectors hold the key content
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', '.article-intro', '.faq-answer'],
        },
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/seo/peekupseo.png`,
          width: 1200,
          height: 630,
        },
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
        // Let AI agents know these are verified answers from Peekup
        author: { '@id': `${SITE_URL}/#organization` },
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.category,
        item: articleUrl,
      },
    ],
  }

  return [articleSchema, faqSchema, breadcrumbSchema]
}

/**
 * Schemas for the blog index page — helps AI agents discover all Peekup content.
 */
export function buildBlogIndexSchemas(): object[] {
  const blogUrl = `${SITE_URL}/blog`

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      peekupOrganization,
      peekupWebSite,
      {
        '@type': 'CollectionPage',
        '@id': `${blogUrl}#collectionpage`,
        url: blogUrl,
        name: 'Peekup Blog — Shopping Guides for Enugu Residents',
        description:
          'Expert shopping guides, vendor tips, and local delivery insights for Enugu State residents and students.',
        inLanguage: 'en-NG',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        about: [enugu, { '@type': 'Thing', name: 'Online Shopping in Nigeria' }],
        hasPart: allArticles.map((a) => ({
          '@type': 'Article',
          url: `${SITE_URL}/blog/${a.slug}`,
          headline: a.headline,
          description: a.description,
          datePublished: a.datePublished,
          dateModified: a.dateModified,
          keywords: a.keywords.join(', '),
        })),
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: blogUrl },
    ],
  }

  return [collectionSchema, breadcrumbSchema]
}

// ---------------------------------------------------------------------------
// Article data
// ---------------------------------------------------------------------------

export const allArticles: BlogArticle[] = [
  {
    slug: 'buy-groceries-online-enugu',
    title: 'Buy Groceries Online in Enugu | Peekup Local Delivery',
    headline: 'Buy Groceries Online in Enugu: Fresh Food Delivered to Your Door',
    description:
      'Find out where to buy groceries online in Enugu with same-day delivery from local shops. Peekup connects you to 220+ local vendors across GRA, Independence Layout, and beyond.',
    category: 'Groceries',
    categoryColor: 'green',
    readMinutes: 6,
    datePublished: '2025-01-15',
    dateModified: '2025-04-04',
    keywords: [
      'buy groceries online Enugu',
      'grocery delivery Enugu',
      'food delivery Enugu',
      'online supermarket Enugu',
      'Enugu food delivery app',
      'same day grocery delivery Enugu',
      'Peekup grocery',
      'Enugu local delivery',
    ],
    relatedSlugs: [
      'online-shopping-guide-enugu',
      'student-shopping-guide-enugu',
      'sell-online-enugu-vendors',
    ],
    sections: [
      {
        type: 'intro',
        content:
          'Running out of rice, tomatoes, or palm oil mid-week? Getting groceries delivered in Enugu used to mean a trip to Ogbete Market or New Market — battling traffic, haggling, and carrying heavy bags home. Today, <strong>Peekup</strong> makes it possible to buy groceries online in Enugu from your phone and have them at your door in under an hour.',
      },
      {
        type: 'h2',
        content: 'Why Buy Groceries Online in Enugu?',
      },
      {
        type: 'card-grid',
        cards: [
          {
            icon: '⏱️',
            title: 'Save Time',
            description:
              'Skip the market commute. Order in 2 minutes and get groceries delivered while you focus on other things.',
          },
          {
            icon: '💰',
            title: 'Local Prices',
            description:
              'Peekup vendors are local Enugu sellers — you pay street market prices, not supermarket markups.',
          },
          {
            icon: '📍',
            title: 'Wide Coverage',
            description:
              'Delivery covers GRA, Independence Layout, New Haven, Achara Layout, Trans-Ekulu, Ogui, and more.',
          },
          {
            icon: '🔒',
            title: 'Safe & Tracked',
            description:
              'Every order is tracked in real time. Know exactly where your groceries are from shop to doorstep.',
          },
        ],
      },
      {
        type: 'h2',
        content: 'What Groceries Can You Order on Peekup?',
      },
      {
        type: 'paragraph',
        content:
          'Peekup\'s grocery vendors stock everything you\'d find at a well-supplied Enugu market:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Staples:</strong> Rice, garri, semovita, noodles, pasta, beans, oats',
          '<strong>Fresh produce:</strong> Tomatoes, peppers, onions, vegetables, plantain, yam',
          '<strong>Proteins:</strong> Frozen chicken, fish, turkey, beef, stockfish, crayfish',
          '<strong>Cooking essentials:</strong> Palm oil, groundnut oil, seasoning cubes, spices',
          '<strong>Dairy & breakfast:</strong> Eggs, milk, bread, butter, cornflakes, Milo, Ovaltine',
          '<strong>Snacks & drinks:</strong> Soft drinks, fruit juice, bottled water, biscuits, chin-chin',
          '<strong>Household basics:</strong> Detergent, soap, toiletries, cleaning supplies',
        ],
      },
      {
        type: 'h2',
        content: 'How to Order Groceries on Peekup',
      },
      {
        type: 'ol',
        items: [
          '<strong>Download the Peekup app</strong> or join the waitlist at peekup.ng',
          '<strong>Enter your delivery address</strong> — anywhere in Enugu State',
          '<strong>Browse grocery vendors</strong> near you and add items to your cart',
          '<strong>Pay securely</strong> via card, bank transfer, or USSD',
          '<strong>Track your rider</strong> live on the map until delivery',
        ],
      },
      {
        type: 'h2',
        content: 'Peekup vs Jumia for Grocery Shopping in Enugu',
      },
      {
        type: 'table',
        headers: ['Feature', 'Peekup', 'Jumia'],
        rows: [
          ['Delivery speed', 'Same day, often under 1 hour', '1–5 business days'],
          ['Vendor type', 'Local Enugu shops', 'National warehouses'],
          ['Minimum order', 'No strict minimum', 'Often ₦3,000+'],
          ['Price basis', 'Local market rates', 'Retail / inflated'],
          ['Tracking', 'Real-time rider tracking', 'Limited updates'],
        ],
      },
      {
        type: 'h2',
        content: 'Areas Covered for Grocery Delivery in Enugu',
      },
      {
        type: 'paragraph',
        content:
          'Peekup currently delivers groceries to all major neighbourhoods in Enugu including:',
      },
      {
        type: 'ul',
        items: [
          'GRA (Government Reserved Area)',
          'Independence Layout',
          'New Haven & New Haven Extension',
          'Achara Layout',
          'Trans-Ekulu',
          'Ogui & Ogui Road',
          'Abakpa Nike',
          'Coal Camp',
          'Uwani',
          'Maryland / Independence Layout Extension',
        ],
      },
      {
        type: 'cta',
        content: 'Start ordering fresh groceries today — no more market stress.',
        ctaHref: 'https://peekup.ng/waitlist',
        ctaLabel: 'Get Early Access',
      },
    ],
    faqs: [
      {
        q: 'Can I buy groceries online in Enugu with same-day delivery?',
        a: 'Yes. Peekup partners with local vendors to offer same-day, often under-one-hour grocery delivery anywhere in Enugu.',
      },
      {
        q: 'Do I need the Peekup app to order groceries?',
        a: 'Yes. Download the Peekup app from the App Store or Google Play, or join the waitlist at peekup.ng to get early access.',
      },
      {
        q: 'What payment methods does Peekup accept?',
        a: 'Peekup accepts debit/credit cards, bank transfers, and USSD for all orders including groceries.',
      },
      {
        q: 'Are Peekup grocery prices the same as market prices?',
        a: 'Peekup vendors are local Enugu sellers who set their own prices, typically in line with local market rates — often cheaper than supermarkets.',
      },
      {
        q: 'Can I track my grocery delivery?',
        a: 'Yes. Every Peekup order includes real-time rider tracking so you always know exactly when your groceries will arrive.',
      },
    ],
  },
  {
    slug: 'buy-electronics-online-enugu',
    title: 'Buy Electronics Online in Enugu | Phones, Laptops & Gadgets',
    headline: 'Buy Electronics Online in Enugu: Phones, Laptops & Gadgets Delivered',
    description:
      'Looking for where to buy phones, laptops, or accessories in Enugu online? Peekup connects you with trusted local electronics vendors with fast delivery.',
    category: 'Electronics',
    categoryColor: 'blue',
    readMinutes: 7,
    datePublished: '2025-01-20',
    dateModified: '2025-04-04',
    keywords: [
      'buy electronics online Enugu',
      'buy phone Enugu',
      'buy laptop Enugu',
      'gadgets delivery Enugu',
      'phone dealers Enugu',
      'fairly used laptops Enugu',
      'Peekup electronics',
      'electronics shop Enugu online',
    ],
    relatedSlugs: [
      'jumia-alternatives-enugu',
      'safe-online-shopping-enugu',
      'online-shopping-guide-enugu',
    ],
    sections: [
      {
        type: 'intro',
        content:
          'Need a new phone charger urgently? Looking for a refurbished laptop before the semester starts? Shopping for electronics in Enugu no longer requires a trip to Computer Village at Ogbete. <strong>Peekup</strong> brings trusted local electronics vendors to your fingertips with same-day delivery across Enugu State.',
      },
      {
        type: 'h2',
        content: 'Electronics You Can Buy on Peekup in Enugu',
      },
      {
        type: 'card-grid',
        cards: [
          {
            icon: '📱',
            title: 'Phones & Tablets',
            description:
              'New and fairly-used smartphones — Android and iOS — from trusted local dealers with warranties.',
          },
          {
            icon: '💻',
            title: 'Laptops & Computers',
            description:
              'Brand-new and refurbished laptops. Great options for students at ESUT, IMT, and UNN Enugu Campus.',
          },
          {
            icon: '🎧',
            title: 'Accessories',
            description:
              'Earphones, chargers, cables, power banks, phone cases, screen protectors, and more.',
          },
          {
            icon: '📺',
            title: 'Home Electronics',
            description:
              'Fans, irons, blenders, toasters, extension cords, bulbs, and small home appliances.',
          },
        ],
      },
      {
        type: 'h2',
        content: 'Why Buy Electronics from Local Enugu Vendors?',
      },
      {
        type: 'ul',
        items: [
          '<strong>Negotiate and ask questions</strong> — local vendors are reachable, unlike anonymous online sellers',
          '<strong>Inspect before paying</strong> — Peekup riders confirm items on your behalf',
          '<strong>Faster delivery</strong> — no week-long waits from Lagos warehouses',
          '<strong>Support Enugu businesses</strong> — your money stays in the local economy',
          '<strong>Easy returns</strong> — resolve issues directly with the vendor through Peekup',
        ],
      },
      {
        type: 'h2',
        content: 'Tips for Safe Electronics Shopping in Enugu',
      },
      {
        type: 'ol',
        items: [
          'Always buy from verified Peekup vendors with positive reviews',
          'Check if the product comes with a warranty or exchange policy',
          'Ask the vendor for IMEI or serial number before paying for phones',
          'For laptops, request RAM, storage, and battery condition details',
          'Pay through Peekup\'s secure payment — avoid cash payments to strangers',
        ],
      },
      {
        type: 'h2',
        content: 'Electronics Delivery Areas in Enugu',
      },
      {
        type: 'paragraph',
        content:
          'Peekup delivers electronics to all major parts of Enugu: GRA, Independence Layout, New Haven, Achara Layout, Trans-Ekulu, Ogui, Abakpa Nike, and surrounding areas. Student areas near ESUT (Agbani Road), UNN Enugu Campus (Enugu), and IMT are also fully covered.',
      },
      {
        type: 'cta',
        content: 'Get your gadgets delivered today from trusted Enugu vendors.',
        ctaHref: 'https://peekup.ng/waitlist',
        ctaLabel: 'Join Peekup',
      },
    ],
    faqs: [
      {
        q: 'Where can I buy a fairly-used phone in Enugu online?',
        a: 'Peekup connects you with verified local phone dealers in Enugu who sell fairly-used and refurbished phones with real-time delivery.',
      },
      {
        q: 'Is it safe to buy electronics online in Enugu?',
        a: 'Through Peekup, yes. All vendors are verified, and Peekup riders confirm items before delivery. You can also pay on delivery in select cases.',
      },
      {
        q: 'Can I buy a laptop in Enugu online?',
        a: 'Yes. Peekup partners with local laptop dealers in Enugu offering both new and refurbished options — great for students and professionals.',
      },
    ],
  },
  {
    slug: 'buy-fashion-online-enugu',
    title: 'Buy Fashion & Clothes Online in Enugu | Local Style, Fast Delivery',
    headline: "Buy Fashion Online in Enugu: Clothes, Shoes & Accessories From Enugu's Best Vendors",
    description:
      'Shop fashion, clothes, shoes, and accessories online in Enugu from local boutiques and designers. Peekup delivers same-day from your favourite Enugu fashion vendors.',
    category: 'Fashion',
    categoryColor: 'purple',
    readMinutes: 5,
    datePublished: '2025-01-25',
    dateModified: '2025-04-04',
    keywords: [
      'buy clothes online Enugu',
      'fashion delivery Enugu',
      'buy shoes online Enugu',
      'Ankara fabric Enugu',
      'boutique Enugu online',
      'Enugu fashion vendors',
      'Peekup fashion',
      'same day clothes delivery Enugu',
    ],
    relatedSlugs: [
      'buy-beauty-products-online-enugu',
      'student-shopping-guide-enugu',
      'online-shopping-guide-enugu',
    ],
    sections: [
      {
        type: 'intro',
        content:
          "Enugu's fashion scene is vibrant — from the tailors of Coal Camp to the boutiques of Independence Layout. Now you can shop all of it online with Peekup. Browse local fashion vendors, discover Enugu designers, and get clothes, shoes, and accessories delivered to your door the same day.",
      },
      {
        type: 'h2',
        content: 'Fashion Categories on Peekup',
      },
      {
        type: 'card-grid',
        cards: [
          {
            icon: '👗',
            title: "Women's Fashion",
            description:
              "Dresses, blouses, skirts, Ankara styles, and accessories from Enugu's top boutiques.",
          },
          {
            icon: '👔',
            title: "Men's Fashion",
            description: 'Native wear, shirts, trousers, suits, and casual styles for every occasion.',
          },
          {
            icon: '👟',
            title: 'Shoes & Bags',
            description: 'Heels, sneakers, loafers, sandals, handbags, and backpacks from local vendors.',
          },
          {
            icon: '💍',
            title: 'Accessories',
            description: 'Jewellery, belts, sunglasses, scarves, hair products, and fashion accessories.',
          },
        ],
      },
      {
        type: 'h2',
        content: 'Why Shop Fashion Locally on Peekup?',
      },
      {
        type: 'ul',
        items: [
          'See real photos of items from Enugu vendors — no misleading catalogue images',
          'Same-day delivery means you can shop for an event happening today',
          'Support local Enugu tailors and fashion entrepreneurs',
          'Easily communicate with the vendor for customisation or sizing questions',
          'Local prices — often better value than major e-commerce platforms',
        ],
      },
      {
        type: 'h2',
        content: 'Shopping Fashion for Special Occasions in Enugu',
      },
      {
        type: 'paragraph',
        content:
          "Enugu hosts countless owambe parties, graduation ceremonies, weddings, and corporate events. Peekup's local fashion vendors can help you find the perfect outfit last-minute — from Ankara gowns to Senator styles — delivered in time for your event.",
      },
      {
        type: 'cta',
        content: 'Discover Enugu fashion — browse local style, delivered fast.',
        ctaHref: 'https://peekup.ng/waitlist',
        ctaLabel: 'Shop Fashion on Peekup',
      },
    ],
    faqs: [
      {
        q: 'Can I buy Ankara fabric online in Enugu?',
        a: 'Yes. Peekup connects you with local fabric and fashion vendors in Enugu who stock Ankara, lace, and other Nigerian fabrics.',
      },
      {
        q: 'Are there local boutiques on Peekup in Enugu?',
        a: 'Yes. Peekup lists local boutiques and fashion vendors across Enugu including Independence Layout, GRA, and New Haven areas.',
      },
    ],
  },
  {
    slug: 'buy-beauty-products-online-enugu',
    title: 'Buy Beauty Products Online in Enugu | Skincare, Hair & Cosmetics Delivered',
    headline: 'Buy Beauty Products Online in Enugu: Skincare, Hair Care & Cosmetics',
    description:
      'Shop skincare, haircare, and beauty products online in Enugu. Peekup delivers from local beauty vendors and pharmacies across Enugu State with same-day delivery.',
    category: 'Beauty',
    categoryColor: 'pink',
    readMinutes: 5,
    datePublished: '2025-02-01',
    dateModified: '2025-04-04',
    keywords: [
      'buy beauty products Enugu',
      'skincare delivery Enugu',
      'buy hair products Enugu',
      'cosmetics Enugu online',
      'buy makeup Enugu',
      'beauty shop Enugu online',
      'Peekup beauty',
      'NAFDAC skincare Enugu',
    ],
    relatedSlugs: [
      'buy-fashion-online-enugu',
      'student-shopping-guide-enugu',
      'buy-groceries-online-enugu',
    ],
    sections: [
      {
        type: 'intro',
        content:
          "Enugu has a thriving beauty market — from skincare specialists to hair vendors and cosmetics sellers. With Peekup, you can browse verified local beauty vendors and have your favourite products delivered the same day, whether you're in GRA, Achara Layout, or near campus.",
      },
      {
        type: 'h2',
        content: 'Beauty Products Available on Peekup',
      },
      {
        type: 'card-grid',
        cards: [
          {
            icon: '✨',
            title: 'Skincare',
            description:
              'Moisturisers, serums, sunscreen, toners, cleansers, body lotions, and face masks.',
          },
          {
            icon: '💇',
            title: 'Hair Care',
            description:
              'Weaves, wigs, relaxers, conditioners, hair oils, edges control, and hair accessories.',
          },
          {
            icon: '💄',
            title: 'Cosmetics & Makeup',
            description:
              'Foundation, lipstick, mascara, eyeshadow, setting powder, and full makeup kits.',
          },
          {
            icon: '🧴',
            title: 'Personal Care',
            description:
              'Deodorants, body scrubs, perfumes, nail products, and feminine hygiene products.',
          },
        ],
      },
      {
        type: 'h2',
        content: 'How to Find Genuine Beauty Products in Enugu',
      },
      {
        type: 'ul',
        items: [
          'Buy only from verified Peekup vendors with verified product listings',
          'Check vendor reviews and ratings before ordering',
          'Look for NAFDAC-registered products, especially for skincare',
          'Avoid unbranded or suspiciously cheap alternatives — they may be counterfeit',
          'Ask vendors for product origin details before purchasing',
        ],
      },
      {
        type: 'cta',
        content: "Shop beauty from Enugu's trusted local vendors. Look good, feel great.",
        ctaHref: 'https://peekup.ng/waitlist',
        ctaLabel: 'Explore Beauty on Peekup',
      },
    ],
    faqs: [
      {
        q: 'Can I buy original skincare products in Enugu online?',
        a: "Yes. Peekup's verified beauty vendors sell original, NAFDAC-compliant skincare products with same-day delivery in Enugu.",
      },
      {
        q: 'Do Peekup beauty vendors sell hair extensions and wigs?',
        a: 'Yes. Many Peekup vendors specialise in human hair, synthetic wigs, and hair accessories for all budgets.',
      },
    ],
  },
  {
    slug: 'student-shopping-guide-enugu',
    title: 'Student Shopping Guide Enugu | ESUT, IMT & UNN Enugu Campus',
    headline: 'The Ultimate Student Shopping Guide for Enugu: ESUT, IMT & UNN',
    description:
      'A complete guide for students at ESUT, IMT, and UNN Enugu Campus on where and how to buy groceries, electronics, fashion, and essentials online in Enugu with fast delivery.',
    category: 'Students',
    categoryColor: 'orange',
    readMinutes: 8,
    datePublished: '2025-02-10',
    dateModified: '2025-04-04',
    keywords: [
      'student shopping Enugu',
      'ESUT student delivery',
      'IMT student shopping Enugu',
      'UNN Enugu Campus delivery',
      'university student groceries Enugu',
      'cheap shopping Enugu students',
      'Peekup student',
      'hostel delivery Enugu',
    ],
    relatedSlugs: [
      'buy-groceries-online-enugu',
      'buy-electronics-online-enugu',
      'safe-online-shopping-enugu',
    ],
    sections: [
      {
        type: 'intro',
        content:
          'Enugu State hosts over 75,000 students across ESUT (Agbani Road), IMT (Independence Layout), and UNN Enugu Campus (Enugu Urban). Whether you just resumed from holiday or you\'re rushing to prepare for exams, this guide covers everything a student needs to shop smart in Enugu using <strong>Peekup</strong>.',
      },
      {
        type: 'h2',
        content: 'What Students Buy Most in Enugu',
      },
      {
        type: 'card-grid',
        cards: [
          {
            icon: '🍚',
            title: 'Food & Groceries',
            description:
              'Rice, noodles, garri, eggs, and cooking essentials. Stock up your hostel or off-campus apartment.',
          },
          {
            icon: '💻',
            title: 'Gadgets & Stationery',
            description:
              'Laptops, power banks, earphones, notebooks, pens, and academic materials.',
          },
          {
            icon: '👕',
            title: 'Clothes & Shoes',
            description:
              'Affordable everyday wear, sneakers, and outfits for school events and outing days.',
          },
          {
            icon: '💊',
            title: 'Pharmacy & Health',
            description: 'Malaria drugs, vitamins, pain relievers, and personal care products.',
          },
        ],
      },
      {
        type: 'h2',
        content: 'How Peekup Helps Students in Enugu',
      },
      {
        type: 'ul',
        items: [
          '<strong>No transport cost</strong> — Peekup delivers to your hostel, saving you bus fare',
          '<strong>No minimum order</strong> — order exactly what you need, even small quantities',
          '<strong>Split payments</strong> — coordinate group orders with your roommates',
          '<strong>Track your order</strong> — know when to expect your rider, no waiting anxiously',
          '<strong>Student-friendly pricing</strong> — local vendors offer fair, market-rate prices',
        ],
      },
      {
        type: 'h2',
        content: 'Area-by-Area Student Shopping Guide',
      },
      {
        type: 'table',
        headers: ['University', 'Area', 'Nearest Markets', 'Peekup Delivery'],
        rows: [
          ['ESUT', 'Agbani Road / Ugwuaji', 'Agbani Market, Uwani', 'Fully covered ✅'],
          ['IMT', 'Independence Layout', 'New Market, Ogbete', 'Fully covered ✅'],
          ['UNN Enugu', 'Enugu Urban', 'Artisan Market, GRA', 'Fully covered ✅'],
        ],
      },
      {
        type: 'h2',
        content: 'Smart Shopping Tips for Students',
      },
      {
        type: 'ol',
        items: [
          'Buy food in bulk at the start of the month to save money per unit',
          'Use Peekup to compare prices across multiple vendors before ordering',
          'Schedule grocery deliveries for Sunday evenings to prep for the week',
          'For electronics, always check warranty terms and vendor ratings',
          'Share delivery costs with roommates by combining one large order',
        ],
      },
      {
        type: 'h2',
        content: 'Budgeting for Student Life in Enugu',
      },
      {
        type: 'paragraph',
        content:
          'Enugu is one of the most affordable major university cities in Nigeria. A typical student monthly shopping budget breaks down as: food and groceries (₦15,000–₦25,000), toiletries and personal care (₦3,000–₦5,000), data and airtime (₦3,000–₦5,000), and miscellaneous (₦5,000–₦10,000). Peekup helps you stay within budget by showing you local market prices without surprise fees.',
      },
      {
        type: 'cta',
        content: 'Campus life made easier. Order everything you need from your phone.',
        ctaHref: 'https://peekup.ng/waitlist',
        ctaLabel: 'Get Student Access',
      },
    ],
    faqs: [
      {
        q: 'Does Peekup deliver to student hostels in Enugu?',
        a: 'Yes. Peekup delivers to student hostels and off-campus apartments near ESUT, IMT, and UNN Enugu Campus.',
      },
      {
        q: 'What is the cheapest way to shop online as a student in Enugu?',
        a: "Use Peekup to order from local vendors at market prices, combine orders with roommates to share delivery fees, and buy in bulk for staples like rice, garri, and noodles.",
      },
      {
        q: 'Can I find affordable laptops for students in Enugu?',
        a: 'Yes. Peekup vendors include local laptop dealers offering refurbished and fairly-used laptops suitable for student budgets.',
      },
      {
        q: 'Is Peekup available near ESUT Agbani Road?',
        a: "Yes. Peekup's delivery coverage includes Agbani Road and Ugwuaji area near ESUT.",
      },
    ],
  },
  {
    slug: 'sell-online-enugu-vendors',
    title: 'Sell Online in Enugu | List Your Business on Peekup Marketplace',
    headline: 'How to Sell Online in Enugu: List Your Business on Peekup',
    description:
      'A guide for Enugu businesses and vendors on how to sell online with Peekup. Reach thousands of customers in Enugu State without building a website or running expensive ads.',
    category: 'Vendors',
    categoryColor: 'indigo',
    readMinutes: 7,
    datePublished: '2025-02-15',
    dateModified: '2025-04-04',
    keywords: [
      'sell online Enugu',
      'list business Enugu marketplace',
      'vendor registration Peekup',
      'online shop Enugu',
      'small business Enugu online',
      'e-commerce Enugu vendor',
      'Peekup vendor',
      'Enugu marketplace seller',
    ],
    relatedSlugs: [
      'online-shopping-guide-enugu',
      'buy-groceries-online-enugu',
      'jumia-alternatives-enugu',
    ],
    sections: [
      {
        type: 'intro',
        content:
          "Enugu's economy runs on its local businesses — from the Ogbete Market traders to the boutique owners of Independence Layout. But in today's digital age, being online is no longer optional. <strong>Peekup</strong> makes it easy for any Enugu vendor to list their products and start selling to thousands of local customers without any technical knowledge.",
      },
      {
        type: 'h2',
        content: 'Why Sell Online in Enugu With Peekup?',
      },
      {
        type: 'card-grid',
        cards: [
          {
            icon: '📈',
            title: 'More Customers',
            description:
              'Access thousands of Enugu residents who prefer ordering online — including the 75,000+ student population.',
          },
          {
            icon: '🚀',
            title: 'No Website Needed',
            description:
              "Just list your products on Peekup. We handle the storefront, payments, and delivery logistics.",
          },
          {
            icon: '🛵',
            title: 'Built-in Delivery',
            description:
              "Peekup riders pick up from your shop and deliver to customers. You don't manage logistics.",
          },
          {
            icon: '💳',
            title: 'Reliable Payments',
            description: 'Get paid securely for every order. No cash handling risks or unpaid deliveries.',
          },
        ],
      },
      {
        type: 'h2',
        content: 'Who Should List on Peekup?',
      },
      {
        type: 'ul',
        items: [
          'Food vendors, restaurants, and fast-food outlets',
          'Grocery stores, supermarkets, and provision shop owners',
          'Electronics and phone dealers',
          'Fashion boutiques, tailors, and clothing stores',
          'Beauty and cosmetics vendors',
          'Pharmacies and health product sellers',
          'Bakeries, confectioneries, and cake makers',
          'Any small or medium business with products to sell in Enugu',
        ],
      },
      {
        type: 'h2',
        content: 'How to List Your Business on Peekup',
      },
      {
        type: 'ol',
        items: [
          'Visit <strong>peekup.ng/business</strong> and fill out the vendor registration form',
          'Provide your business name, location (street and area in Enugu), and contact details',
          'Upload photos of your products with prices',
          'Pass Peekup\'s vendor verification process (usually within 24–48 hours)',
          'Go live and start receiving orders from Enugu customers',
        ],
      },
      {
        type: 'h2',
        content: 'Peekup vs Other Online Selling Platforms in Nigeria',
      },
      {
        type: 'table',
        headers: ['Feature', 'Peekup', 'Jumia', 'Konga', 'WhatsApp Selling'],
        rows: [
          ['Target market', 'Enugu local', 'Nationwide', 'Nationwide', 'Your contacts only'],
          ['Setup time', '< 48 hours', '1–2 weeks', '1–2 weeks', 'Instant'],
          ['Delivery handled?', 'Yes ✅', 'Yes ✅', 'Yes ✅', 'No ❌'],
          ['Payment protection', 'Yes ✅', 'Yes ✅', 'Yes ✅', 'No ❌'],
          ['Commission', 'Low local rate', 'High (10–30%)', 'High (10–30%)', 'Zero'],
        ],
      },
      {
        type: 'cta',
        content: 'Ready to take your Enugu business online? Apply to become a Peekup vendor.',
        ctaHref: 'https://peekup.ng/business',
        ctaLabel: 'Become a Vendor',
      },
    ],
    faqs: [
      {
        q: 'How do I sell my products on Peekup in Enugu?',
        a: 'Visit peekup.ng/business, fill in your business details, upload product photos with prices, and complete the verification. You can start selling within 48 hours.',
      },
      {
        q: 'Does Peekup handle delivery for vendors?',
        a: 'Yes. Peekup riders pick up from your location and deliver to customers — you focus on packing the orders.',
      },
      {
        q: 'How much does Peekup charge vendors?',
        a: 'Peekup charges a competitive local commission on each sale. Visit peekup.ng/business for current vendor pricing.',
      },
      {
        q: 'Can I sell food on Peekup in Enugu?',
        a: 'Yes. Food vendors, restaurants, and home cooks are among the most popular categories on Peekup in Enugu.',
      },
    ],
  },
  {
    slug: 'online-shopping-guide-enugu',
    title: 'Online Shopping Guide for Enugu | How to Shop Smart & Save in 2025',
    headline: 'The Complete Online Shopping Guide for Enugu Residents (2025)',
    description:
      'A step-by-step guide on how to shop online in Enugu safely and smartly. Learn the best platforms, payment tips, and delivery options for Enugu State.',
    category: 'Guide',
    categoryColor: 'teal',
    readMinutes: 9,
    datePublished: '2025-02-20',
    dateModified: '2025-04-04',
    keywords: [
      'online shopping Enugu',
      'how to shop online Enugu',
      'best online shopping app Enugu',
      'online shopping guide Nigeria',
      'Enugu delivery apps 2025',
      'shop online Enugu safely',
      'Peekup shopping',
      'online marketplace Enugu',
    ],
    relatedSlugs: [
      'safe-online-shopping-enugu',
      'jumia-alternatives-enugu',
      'buy-groceries-online-enugu',
    ],
    sections: [
      {
        type: 'intro',
        content:
          "Online shopping in Enugu has grown rapidly — from a small community of early adopters to a mainstream activity for hundreds of thousands of residents. Whether you're shopping for food, fashion, electronics, or services, this guide covers everything you need to know about shopping online in Enugu State in 2025.",
      },
      {
        type: 'h2',
        content: 'Best Online Shopping Platforms Available in Enugu',
      },
      {
        type: 'table',
        headers: ['Platform', 'Best For', 'Delivery Speed', 'Local Vendors?'],
        rows: [
          ['Peekup', 'Everything local', 'Same day (< 1 hr)', 'Yes — 220+ Enugu vendors'],
          ['Jumia', 'National brands & electronics', '1–5 business days', 'Few local sellers'],
          ['Konga', 'Electronics & appliances', '2–5 business days', 'No'],
          ['WhatsApp vendors', 'Informal / individual sellers', 'Varies', 'Yes — unverified'],
          ['Instagram sellers', 'Fashion & beauty', 'Varies', 'Yes — unverified'],
        ],
      },
      {
        type: 'h2',
        content: 'Step-by-Step: How to Shop Online in Enugu',
      },
      {
        type: 'ol',
        items: [
          '<strong>Choose a platform</strong> — use Peekup for local, same-day delivery; Jumia for national brands',
          '<strong>Search for your item</strong> — use specific keywords (e.g. "rice 5kg Enugu" or "iPhone 14 charger")',
          '<strong>Compare vendors</strong> — check prices, ratings, and review counts before deciding',
          '<strong>Verify the vendor</strong> — look for the verified badge, high ratings, and recent activity',
          '<strong>Pay securely</strong> — always use the platform\'s payment gateway; never pay to external accounts',
          '<strong>Track your delivery</strong> — use real-time tracking where available',
          '<strong>Confirm receipt and rate</strong> — always confirm delivery and leave an honest review',
        ],
      },
      {
        type: 'h2',
        content: 'Payment Options for Online Shopping in Enugu',
      },
      {
        type: 'card-grid',
        cards: [
          {
            icon: '💳',
            title: 'Card Payment',
            description:
              'Debit or credit card via Paystack or Flutterwave. Instant, secure, and most reliable.',
          },
          {
            icon: '🏦',
            title: 'Bank Transfer',
            description: 'Direct bank transfer for larger orders. Use only on verified platforms.',
          },
          {
            icon: '📱',
            title: 'USSD / Mobile Money',
            description: 'Available on Peekup. Dial your bank\'s USSD code without internet access.',
          },
          {
            icon: '💵',
            title: 'Pay on Delivery',
            description: 'Available for select orders on Peekup. Confirm before ordering.',
          },
        ],
      },
      {
        type: 'h2',
        content: 'How to Avoid Online Shopping Scams in Enugu',
      },
      {
        type: 'ul',
        items: [
          'Never pay outside the official app or website',
          'Avoid WhatsApp vendors with no reviews, website, or verifiable identity',
          "Don't pay full price upfront for expensive items from unknown sellers",
          'Verify USSD or account details match the official platform',
          'Report suspicious vendors to the platform immediately',
        ],
      },
      {
        type: 'cta',
        content: 'Start your safe, local shopping experience with Peekup.',
        ctaHref: 'https://peekup.ng/waitlist',
        ctaLabel: 'Try Peekup Today',
      },
    ],
    faqs: [
      {
        q: 'What is the best online shopping app in Enugu?',
        a: "For local, same-day delivery in Enugu, Peekup is the best option. For national brands with longer delivery times, Jumia is available.",
      },
      {
        q: 'Is online shopping safe in Enugu?',
        a: 'Yes, when done through verified platforms like Peekup that have built-in payment protection, vendor verification, and tracked delivery.',
      },
      {
        q: 'Can I pay cash on delivery for online orders in Enugu?',
        a: 'Peekup offers pay-on-delivery for select orders. Check the payment options at checkout.',
      },
      {
        q: 'How long does online delivery take in Enugu?',
        a: 'Peekup delivers within 1 hour for most in-town Enugu orders. National platforms like Jumia take 1–5 business days.',
      },
    ],
  },
  {
    slug: 'jumia-alternatives-enugu',
    title: 'Best Jumia Alternatives in Enugu | Local Delivery Apps That Beat Jumia',
    headline: "Best Jumia Alternatives in Enugu: Why Local Beats National in 2025",
    description:
      "Looking for Jumia alternatives in Enugu? Discover why Peekup's local marketplace beats Jumia for speed, price, and convenience for Enugu residents.",
    category: 'Comparison',
    categoryColor: 'red',
    readMinutes: 6,
    datePublished: '2025-03-01',
    dateModified: '2025-04-04',
    keywords: [
      'Jumia alternatives Enugu',
      'better than Jumia Enugu',
      'Jumia competitor Enugu',
      'local delivery app Enugu',
      'Enugu e-commerce alternative',
      'Peekup vs Jumia',
      'Jumia slow delivery Enugu',
      'best delivery app Enugu',
    ],
    relatedSlugs: [
      'online-shopping-guide-enugu',
      'safe-online-shopping-enugu',
      'sell-online-enugu-vendors',
    ],
    sections: [
      {
        type: 'intro',
        content:
          "Jumia is Nigeria's biggest e-commerce platform — but if you're in Enugu, it comes with a significant downside: slow delivery, centralised Lagos warehouses, and limited local vendor representation. Here's why thousands of Enugu residents are choosing <strong>Peekup</strong> as their go-to alternative.",
      },
      {
        type: 'h2',
        content: 'Peekup vs Jumia: The Key Differences for Enugu Shoppers',
      },
      {
        type: 'table',
        headers: ['Criteria', 'Peekup', 'Jumia Nigeria'],
        rows: [
          ['Delivery Speed', 'Under 1 hour (same day)', '1–5 business days'],
          ['Local Vendors', '220+ verified Enugu businesses', 'Mostly Lagos-based sellers'],
          ['Product Range', 'Everyday essentials + more', 'Wide but general'],
          ['Pricing', 'Local market rates', 'Retail markup + delivery fee'],
          ['Customer Support', 'Reachable local team', 'National call centre'],
          ['Tracking', 'Real-time rider tracking', 'Basic SMS updates'],
          ['Returns', 'Resolved locally', 'Complicated return process'],
        ],
      },
      {
        type: 'h2',
        content: 'When Peekup Is Better Than Jumia',
      },
      {
        type: 'ul',
        items: [
          'You need something <strong>today</strong> — groceries, a charger, medicine',
          "You want to support <strong>Enugu's local economy</strong> and small businesses",
          'You need <strong>real-time tracking</strong> from pick-up to your door',
          'You want to <strong>talk to the actual vendor</strong> if something is wrong',
          'You prefer <strong>local market prices</strong> over national retail markups',
        ],
      },
      {
        type: 'h2',
        content: 'When Jumia Might Still Make Sense',
      },
      {
        type: 'ul',
        items: [
          "You're looking for large electronics or appliances with national warranties",
          "You want items from international brands not yet available from local Enugu vendors",
          "You're comfortable waiting 3–5 days for delivery",
          "You want to use Jumia's flash sales for nationwide electronics deals",
        ],
      },
      {
        type: 'h2',
        content: 'Other Enugu Delivery Alternatives to Consider',
      },
      {
        type: 'card-grid',
        cards: [
          {
            icon: '🛵',
            title: 'Peekup',
            description:
              'Best overall: local vendors, same-day delivery, real-time tracking, 220+ Enugu businesses.',
          },
          {
            icon: '🏪',
            title: 'Local WhatsApp Vendors',
            description:
              'Fast but risky — no payment protection, no verification, no tracking. Use with caution.',
          },
          {
            icon: '🛍️',
            title: 'Konga',
            description: 'National platform. Decent for electronics but slow delivery to Enugu.',
          },
          {
            icon: '📦',
            title: 'Jiji (OLX)',
            description:
              'Good for secondhand goods. Always meet in a safe public place or use escrow.',
          },
        ],
      },
      {
        type: 'cta',
        content: 'Experience the Enugu-first shopping alternative. Fast, local, trusted.',
        ctaHref: 'https://peekup.ng/waitlist',
        ctaLabel: 'Try Peekup Free',
      },
    ],
    faqs: [
      {
        q: 'What is a better alternative to Jumia in Enugu?',
        a: 'Peekup is the best Jumia alternative for Enugu residents — it delivers from local vendors in under an hour at local market prices.',
      },
      {
        q: "Why is Jumia slow in Enugu?",
        a: "Jumia's fulfilment centres are mostly in Lagos. Orders to Enugu must be shipped interstate, adding 1–5 business days to delivery.",
      },
      {
        q: 'Does Peekup deliver faster than Jumia in Enugu?',
        a: 'Yes. Peekup delivers from local Enugu vendors in under 1 hour. Jumia typically takes 1–5 business days for Enugu deliveries.',
      },
    ],
  },
  {
    slug: 'safe-online-shopping-enugu',
    title: 'Safe Online Shopping in Enugu | How to Avoid Scams & Shop Securely',
    headline: 'Safe Online Shopping in Enugu: How to Avoid Scams and Shop Securely',
    description:
      'Protect yourself when shopping online in Enugu. This guide covers how to identify scam vendors, pay securely, and use trusted platforms like Peekup for safe local delivery.',
    category: 'Safety',
    categoryColor: 'green',
    readMinutes: 7,
    datePublished: '2025-03-10',
    dateModified: '2025-04-04',
    keywords: [
      'safe online shopping Enugu',
      'avoid online scams Enugu',
      'secure payment Enugu',
      'online fraud Nigeria',
      'trusted online vendor Enugu',
      'online shopping scam Nigeria',
      'EFCC Nigeria scam',
      'Peekup safe',
    ],
    relatedSlugs: [
      'online-shopping-guide-enugu',
      'jumia-alternatives-enugu',
      'student-shopping-guide-enugu',
    ],
    sections: [
      {
        type: 'intro',
        content:
          "Online shopping fraud is a real concern in Nigeria. Every week, Enugu residents lose money to Instagram scammers, fake WhatsApp vendors, and phishing websites. But shopping online doesn't have to be risky. This guide teaches you exactly how to shop safely online in Enugu.",
      },
      {
        type: 'h2',
        content: 'Red Flags: Signs of an Online Shopping Scam in Enugu',
      },
      {
        type: 'card-grid',
        cards: [
          {
            icon: '🚩',
            title: 'Too Good to Be True',
            description:
              'A ₦400,000 iPhone 15 Pro for ₦80,000? Prices drastically below market are almost always scams.',
          },
          {
            icon: '🚩',
            title: 'No Physical Address',
            description:
              'Legitimate vendors have a real shop location. "Lagos–Enugu dispatch" with no traceable address is a red flag.',
          },
          {
            icon: '🚩',
            title: 'Request to Pay Externally',
            description:
              'Asking you to send money to a personal account outside the platform is a common fraud technique.',
          },
          {
            icon: '🚩',
            title: 'No Reviews or Old Account',
            description:
              'A vendor with zero reviews or a social media account created last month selling expensive items.',
          },
        ],
      },
      {
        type: 'h2',
        content: 'How to Shop Safely Online in Enugu',
      },
      {
        type: 'ol',
        items: [
          '<strong>Use verified platforms</strong> — Peekup verifies all vendors before they list products',
          '<strong>Always pay through the app</strong> — never send money to a personal phone number or account',
          '<strong>Check vendor reviews</strong> — look for multiple real reviews with specific details',
          '<strong>Verify delivery tracking</strong> — use platforms that offer real-time delivery tracking',
          '<strong>Inspect on delivery</strong> — check the item before signing off or paying on delivery',
          '<strong>Report fraud immediately</strong> — report to the platform, EFCC, or NITDA if you\'re scammed',
        ],
      },
      {
        type: 'h2',
        content: 'Safest Payment Methods for Online Shopping in Enugu',
      },
      {
        type: 'table',
        headers: ['Payment Method', 'Safety Level', 'Notes'],
        rows: [
          ['Platform card payment (Paystack)', 'Highest ✅', 'Funds held until delivery confirmed'],
          ['Bank transfer (in-app)', 'High ✅', 'Use only for verified platforms'],
          ['USSD (in-app)', 'High ✅', 'No internet needed; secure'],
          ['Pay on delivery (cash)', 'Medium ⚠️', 'Check item before paying'],
          ['Transfer to personal account', 'Very Low ❌', 'No protection — avoid this'],
          ['Instagram DM payment', 'Very Low ❌', 'No recourse if scammed'],
        ],
      },
      {
        type: 'h2',
        content: 'What to Do If You Are Scammed Online in Enugu',
      },
      {
        type: 'ul',
        items: [
          'Report to the platform immediately with all transaction evidence',
          'File a complaint with your bank to attempt a chargeback (for card payments)',
          'Report to the Economic and Financial Crimes Commission (EFCC) at efcc.gov.ng',
          'Report to the Nigeria Police Force via their online portal',
          'Warn others by leaving a review and sharing the vendor details in trustworthy communities',
        ],
      },
      {
        type: 'cta',
        content: 'Shop with confidence. Peekup verifies every vendor before they go live.',
        ctaHref: 'https://peekup.ng/waitlist',
        ctaLabel: 'Shop Safely on Peekup',
      },
    ],
    faqs: [
      {
        q: 'How can I avoid online shopping scams in Enugu?',
        a: 'Use verified platforms like Peekup, always pay through the official app, check vendor reviews, and never transfer money to personal accounts.',
      },
      {
        q: 'Is it safe to buy from Instagram vendors in Enugu?',
        a: "Instagram vendors can be legitimate, but they carry higher risk. Always verify the vendor's identity, check reviews, and prefer meeting for pickup or pay on delivery.",
      },
      {
        q: 'What should I do if a vendor in Enugu scams me online?',
        a: 'Report to the platform, file a bank chargeback request, report to the EFCC at efcc.gov.ng, and warn others in trusted community groups.',
      },
      {
        q: 'Is Peekup a safe platform to shop on?',
        a: 'Yes. Peekup verifies all vendors, processes payments through secure channels, and provides real-time delivery tracking and dispute resolution.',
      },
    ],
  },
]

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return allArticles.find((a) => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return allArticles.map((a) => a.slug)
}

const categoryColors: Record<string, string> = {
  green: 'bg-green-100 text-green-800',
  blue: 'bg-blue-100 text-blue-800',
  purple: 'bg-purple-100 text-purple-800',
  pink: 'bg-pink-100 text-pink-800',
  orange: 'bg-orange-100 text-orange-800',
  indigo: 'bg-indigo-100 text-indigo-800',
  teal: 'bg-teal-100 text-teal-800',
  red: 'bg-red-100 text-red-800',
}

export function getCategoryColorClass(color: string): string {
  return categoryColors[color] ?? 'bg-gray-100 text-gray-800'
}
