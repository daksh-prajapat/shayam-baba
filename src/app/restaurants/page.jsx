import RestaurantsClient from '@/components/pages/RestaurantsClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Restaurants Near Khatu Shyam | खाटू में खाना',
  description: 'Restaurants near Khatu Shyam temple. खाटू धाम में सात्विक भोजन और खाने की जगह।',
  path: '/restaurants',
  keywords: [
    'restaurants near Khatu Shyam',
    'Khatu Shyam food',
    'खाटू श्याम रेस्टोरेंट',
    'satvik food Khatu',
    'where to eat in Khatu',
    'खाटू धाम खाना',
  ],
})

export default function Page() { return <RestaurantsClient /> }
