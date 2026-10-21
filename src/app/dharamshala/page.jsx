import DharamshalasClient from '@/components/pages/DharamshalasClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Dharamshala in Khatu | खाटू श्याम जी धर्मशाला',
  description: 'Dharamshala near Khatu Shyam Ji temple. खाटू धाम में दर्शन के दौरान सस्ता ठहरना। Call 9051858687.',
  path: '/dharamshala',
  keywords: [
    'Khatu Shyam dharamshala',
    'dharamshala in Khatu',
    'खाटू श्याम धर्मशाला',
    'खाटू धाम धर्मशाला',
    'cheap stay Khatu Shyam',
    'temple dharamshala',
  ],
})

export default function Page() { return <DharamshalasClient /> }
