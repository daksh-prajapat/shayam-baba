'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { GOOGLE_ADS_ID } from '@/lib/googleAds'

export default function GoogleAdsTag() {
  const pathname = usePathname()
  if (!GOOGLE_ADS_ID) return null
  if (pathname?.startsWith('/admin')) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  )
}
