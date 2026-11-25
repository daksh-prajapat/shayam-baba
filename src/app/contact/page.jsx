import ContactClient from '@/components/pages/ContactClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Contact Khatu Shyam Booking | कॉल और WhatsApp',
  description: 'Call or WhatsApp 9051858687 for Khatu Shyam swamani, prasad and darshan booking. खाटू, सीकर, राजस्थान 332602।',
  path: '/contact',
  keywords: [
    'Khatu Shyam contact',
    'खाटू श्याम सम्पर्क',
    'Khatu Shyam phone number',
    '9051858687',
    'WhatsApp booking',
    'Khatu Sikar Rajasthan',
  ],
})

export default function Page() { return <ContactClient /> }
