const RAW_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || ''
const RAW_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || ''

export const GOOGLE_ADS_ID = /^AW-\d+$/.test(RAW_ADS_ID) ? RAW_ADS_ID : ''
export const GOOGLE_ADS_CONVERSION_LABEL = /^[A-Za-z0-9_-]{4,80}$/.test(RAW_LABEL) ? RAW_LABEL : ''

function gtag() {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtagQueue() {
    window.dataLayer.push(arguments)
  }
  window.gtag.apply(null, arguments)
}

export function trackBookingConversion(booking) {
  if (typeof window === 'undefined') return
  if (!GOOGLE_ADS_ID || !GOOGLE_ADS_CONVERSION_LABEL) return
  if (!booking?.paymentVerified) return

  const transactionId = String(booking.razorpayPaymentId || booking.bookingId || '')
  if (!transactionId) return

  try {
    const key = `gads-booking:${transactionId}`
    if (sessionStorage.getItem(key)) return
    sessionStorage.setItem(key, '1')
  } catch {
    // Private mode can block storage. Still send the conversion once.
  }

  const value = Number(booking.amount)
  gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
    value: Number.isFinite(value) ? value : 0,
    currency: 'INR',
    transaction_id: transactionId,
  })
}
