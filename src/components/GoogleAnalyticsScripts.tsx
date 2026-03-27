import Script from 'next/script'
import { GA_MEASUREMENT_ID } from '@/lib/analytics'

/**
 * Server-rendered GA4 snippet so crawlers (e.g. Search Console GA verification)
 * see the tracking code in the initial HTML. Client-only afterInteractive scripts
 * are not present in that HTML.
 */
export function GoogleAnalyticsScripts() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  )
}
