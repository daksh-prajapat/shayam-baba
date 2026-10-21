import TravelClient from '@/components/pages/TravelClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'खाटू श्याम कैसे पहुंचें | How to Reach Khatu Shyam Ji',
  description: 'How to reach Khatu Shyam Ji: Jaipur 80 km, Delhi 310 km, Reengus station 17 km. ट्रेन, बस और टैक्सी।',
  path: '/travel-guide',
  keywords: [
    'खाटू श्याम कैसे पहुंचें',
    'how to reach Khatu Shyam',
    'Delhi to Khatu Shyam',
    'Jaipur to Khatu Shyam',
    'Reengus to Khatu',
    'रींगस से खाटू',
    'Khatu Shyam train',
    'Khatu Shyam bus',
  ],
})

export default function Page() { return <TravelClient /> }
