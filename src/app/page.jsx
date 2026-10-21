import HomeSections from '@/components/HomeSections'
import JsonLd from '@/components/JsonLd'
import { pageMeta, faqJsonLd, homeFaqs } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'खाटू श्याम जी | Khatu Shyam Ji — Prasad, Swamani, Darshan',
  description: 'Khatu Shyam Ji darshan timing, swamani bhog booking and prasad. खाटू धाम, सीकर। Falgun Mela 2027. Call 9051858687.',
  path: '/',
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
    'online booking Khatu Shyam',
  ],
})

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <HomeSections />
    </>
  )
}
