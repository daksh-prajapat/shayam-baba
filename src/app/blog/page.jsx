import BlogClient from '@/components/pages/BlogClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Khatu Shyam Blog | मेला, यात्रा और कथा',
  description: 'Khatu Shyam articles: Falgun Mela 2027, how to reach, Barbareek katha and darshan. खाटू जाने से पहले पढ़ें।',
  path: '/blog',
  keywords: [
    'Khatu Shyam blog',
    'खाटू श्याम लेख',
    'Falgun Mela guide',
    'Khatu travel guide',
    'Barbareek katha',
    'darshan guide',
  ],
})

export default function Page() { return <BlogClient /> }
