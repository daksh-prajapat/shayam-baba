import BookingConfirmedClient from '@/components/booking/BookingConfirmedClient'

export const metadata = {
  title: 'बुकिंग Confirmed — खाटू श्याम जी',
}

export default function BookingConfirmedPage({ params }) {
  return <BookingConfirmedClient bookingId={params.id} />
}
