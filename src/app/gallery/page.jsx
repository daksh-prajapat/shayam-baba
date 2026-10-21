import GalleryClient from '@/components/pages/GalleryClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Khatu Shyam Photos | खाटू श्याम जी फोटो गैलरी',
  description: 'Khatu Shyam Ji photos: temple, darshan, aarti and Falgun Mela. खाटू धाम की फोटो गैलरी।',
  path: '/gallery',
  keywords: [
    'Khatu Shyam photos',
    'खाटू श्याम फोटो',
    'Khatu Dham gallery',
    'Falgun Mela photos',
    'temple darshan photos',
    'आरती फोटो',
  ],
})

export default function Page() { return <GalleryClient /> }
