import EkadashiClient from '@/components/pages/EkadashiClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Ekadashi Calendar 2026 | खाटू श्याम एकादशी',
  description: 'Khatu Shyam Ekadashi calendar 2026. एकादशी व्रत तिथि। उस दिन मंदिर 24 घंटे दर्शन के लिए खुला रहता है।',
  path: '/ekadashi',
  keywords: [
    'एकादशी कैलेंडर 2026',
    'Ekadashi calendar',
    'Khatu Shyam Ekadashi',
    'खाटू श्याम एकादशी',
    '24 hour darshan',
    'निर्जला एकादशी',
    'देवउठनी एकादशी',
  ],
})

export default function EkadashiPage() { return <EkadashiClient /> }
