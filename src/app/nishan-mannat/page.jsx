import NishanClient from '@/components/pages/NishanClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'निशान यात्रा बुकिंग | Nishan Yatra Khatu Shyam',
  description: 'Khatu Shyam nishan yatra and mannat. निशान चढ़ाने की विधि और बुकिंग। Call 9051858687.',
  path: '/nishan-mannat',
  keywords: [
    'निशान यात्रा',
    'nishan yatra',
    'Khatu Shyam nishan',
    'मन्नत',
    'mannat Khatu Shyam',
    'निशान बुकिंग',
    'nishan chadhana',
  ],
})

export default function Page() { return <NishanClient /> }
