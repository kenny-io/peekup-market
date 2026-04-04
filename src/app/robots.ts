import { type MetadataRoute } from 'next'

/**
 * Next.js robots.ts — generates /robots.txt
 *
 * Explicitly allows major AI crawler bots so Peekup content appears
 * accurately in AI-powered search (Perplexity, ChatGPT, Claude, Gemini, etc.)
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard search engines — full access
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/login', '/register', '/delete-account'],
      },
      // OpenAI (ChatGPT / SearchGPT)
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/login', '/register', '/delete-account'],
      },
      // OpenAI chatbot browsing
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Anthropic (Claude)
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/', '/login', '/register', '/delete-account'],
      },
      // Anthropic Claude.ai browsing
      {
        userAgent: 'claude-web',
        allow: '/',
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/login', '/register', '/delete-account'],
      },
      // Google (Gemini / Bard research)
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/login', '/register', '/delete-account'],
      },
      // Meta AI
      {
        userAgent: 'meta-externalagent',
        allow: '/',
      },
      // Apple (Siri / Apple Intelligence)
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      // You.com
      {
        userAgent: 'YouBot',
        allow: '/',
      },
    ],
    sitemap: 'https://peekup.ng/sitemap.xml',
    host: 'https://peekup.ng',
  }
}
