import HotelsClient from '@/components/pages/HotelsClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Hotels Near Khatu Shyam Ji | खाटू के पास होटल',
  description: 'Hotels near Khatu Shyam Ji temple. फाल्गुन मेला 2027 से पहले ठहरने की जगह बुक करें।',
  path: '/hotels',
  keywords: [
    'hotels near Khatu Shyam Ji',
    'Khatu Shyam hotel',
    'खाटू श्याम होटल',
    'stay near Khatu temple',
    'Falgun Mela hotel booking',
    'खाटू धाम होटल',
  ],
})

export default function Page() { return <HotelsClient /> }
