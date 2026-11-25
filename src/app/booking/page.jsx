import BookingClient from '@/components/booking/BookingClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Online Booking | स्वामणी, प्रसाद, निशान — खाटू श्याम जी',
  description: 'Khatu Shyam online booking for swamani bhog, prasad, nishan and bhandara. नाम और तिथि भरें या 9051858687 पर कॉल करें।',
  path: '/booking',
  keywords: [
    'Khatu Shyam online booking',
    'खाटू श्याम बुकिंग',
    'swamani booking',
    'prasad booking online',
    'nishan booking',
    'bhandara booking',
    'WhatsApp booking Khatu',
  ],
})

export default function BookingPage() {
  return <BookingClient />
}
