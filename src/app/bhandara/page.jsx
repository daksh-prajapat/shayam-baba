import BhandaraClient from '@/components/pages/BhandaraClient'
import JsonLd from '@/components/JsonLd'
import { pageMeta, faqJsonLd, bhandaraFaqs } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'खाटू श्याम विशाल भंडारा | Bhandara Booking',
  description: 'Khatu Shyam bhandara booking for 1000, 5000 and 10000 people. सात्विक भोजन, टेंट और व्यवस्था। Call 9051858687.',
  path: '/bhandara',
  keywords: [
    'खाटू श्याम भंडारा',
    'bhandara booking',
    'विशाल भंडारा',
    'Khatu Shyam bhandara',
    '1000 person bhandara',
    'भंडारा बुकिंग',
    'satvik bhandara',
  ],
})

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(bhandaraFaqs)} />
      <BhandaraClient />
    </>
  )
}
