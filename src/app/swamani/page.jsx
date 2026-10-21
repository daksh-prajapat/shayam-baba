import SwamaniClient from '@/components/pages/SwamaniClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'स्वामणी भोग बुकिंग | Swamani Bhog Price — खाटू श्याम जी',
  description: 'Swamani bhog booking online: laddu, churma, kheer, chhappan bhog. कीमत ₹8,100 से ₹31,000। प्रसाद घर डिलीवरी।',
  path: '/swamani',
  keywords: [
    'स्वामणी भोग',
    'स्वामणी भोग बुकिंग',
    'swamani bhog',
    'swamani bhog booking',
    'swamani bhog price',
    'छप्पन भोग',
    'chhappan bhog',
    'लड्डू पूरी सब्जी',
    'खाटू श्याम भोग',
  ],
})

export default function Page() { return <SwamaniClient /> }
