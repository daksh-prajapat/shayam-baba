import BookingConfirmedClient from '@/components/booking/BookingConfirmedClient'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'बुकिंग कन्फर्म | खाटू श्याम जी',
  description: 'आपकी खाटू श्याम जी बुकिंग का कन्फर्मेशन पेज।',
  path: '/booking-confirmed',
  index: false,
})

export default function BookingConfirmedPage({ params }) {
  return <BookingConfirmedClient bookingId={params.id} />
}
