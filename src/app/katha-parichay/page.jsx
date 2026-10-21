import KathaClient from '@/components/pages/KathaClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Barbareek Katha | बर्बरीक शीश दान — खाटू श्याम जी',
  description: 'Barbareek sheesh daan katha and Khatu Shyam history. बर्बरीक कौन थे, शीश दान और खाटू धाम का परिचय।',
  path: '/katha-parichay',
  keywords: [
    'बर्बरीक कथा',
    'Barbareek katha',
    'शीश दान',
    'sheesh daan',
    'खाटू श्याम जी का इतिहास',
    'Khatu Shyam history',
    'Khatu Dham parichay',
  ],
})

export default function Page() { return <KathaClient /> }
