import './globals.css'
import { Poppins, Tiro_Devanagari_Hindi } from 'next/font/google'
import ClientLayout from '@/components/ClientLayout'
import GoogleAdsTag from '@/components/GoogleAdsTag'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, siteGraphJsonLd } from '@/lib/seo'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const tiro = Tiro_Devanagari_Hindi({
  subsets: ['devanagari', 'latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-tiro',
  display: 'swap',
})

const title = 'खाटू श्याम जी | Khatu Shyam Ji — Prasad, Swamani, Darshan'
const description = 'Khatu Shyam Ji darshan timing, swamani bhog booking and prasad. खाटू धाम, सीकर। Falgun Mela 2027. Call 9051858687.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: '%s',
  },
  description,
  applicationName: 'खाटू श्याम जी',
  keywords: [
    'खाटू श्याम जी',
    'Khatu Shyam Ji',
    'Khatu Dham',
    'खाटू धाम',
    'दर्शन समय',
    'Khatu Shyam darshan timing',
    'स्वामणी भोग बुकिंग',
    'swamani bhog booking',
    'प्रसाद बुकिंग',
    'prasad booking',
    'फाल्गुन मेला 2027',
    'Falgun Mela',
    'खाटू श्याम कैसे पहुंचें',
    'how to reach Khatu Shyam',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: '/',
    siteName: 'खाटू श्याम जी',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'religion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hi-IN" className={`${poppins.variable} ${tiro.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <GoogleAdsTag />
        <JsonLd data={siteGraphJsonLd} />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
