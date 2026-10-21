import BookingHistoryClient from '@/components/pages/BookingHistoryClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'मेरी बुकिंग | खाटू श्याम जी',
  description: 'अपनी प्रसाद, स्वामणी और भंडारा बुकिंग देखें।',
  path: '/booking-history',
  index: false,
})

export default function Page() { return <BookingHistoryClient /> }
