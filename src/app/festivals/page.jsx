import FestivalsClient from '@/components/pages/FestivalsClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Falgun Mela 2027 | खाटू श्याम त्यौहार और मेला',
  description: 'Khatu Shyam Falgun Mela 2027, Diwali, Shyam Jayanti and Ekadashi. फाल्गुन मेले की तिथि और दर्शन।',
  path: '/festivals',
  keywords: [
    'फाल्गुन मेला 2027',
    'Falgun Mela 2027',
    'Khatu Shyam Mela',
    'खाटू श्याम मेला',
    'श्याम जयंती',
    'Shyam Jayanti',
    'Khatu Diwali',
    'खाटू श्याम त्यौहार',
  ],
})

export default function Page() { return <FestivalsClient /> }
