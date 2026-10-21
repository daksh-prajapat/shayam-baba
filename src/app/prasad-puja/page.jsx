import PrasadClient from '@/components/pages/PrasadClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'प्रसाद बुकिंग | Prasad Booking Online — खाटू श्याम जी',
  description: 'Khatu Shyam prasad booking from ₹101: arji, nariyal, thali. फोटो-वीडियो और घर डिलीवरी। Call 9051858687.',
  path: '/prasad-puja',
  keywords: [
    'प्रसाद बुकिंग',
    'prasad booking',
    'Khatu Shyam prasad',
    'अर्जी नारियल',
    'पूर्ण प्रसाद थाली',
    'prasad home delivery',
    'खाटू श्याम प्रसाद',
    'online prasad booking',
  ],
})

export default function Page() { return <PrasadClient /> }
