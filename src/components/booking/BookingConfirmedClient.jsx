'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiClock, FiCheck, FiDownload } from 'react-icons/fi'
import { getAllBookings, formatDate } from '@/lib/bookingStorage'

export default function BookingConfirmedClient({ bookingId }) {
  const [booking, setBooking] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Try localStorage first (instant), then show
    const all = getAllBookings()
    const found = all.find(b => (b.bookingId || b.id) === bookingId)
    if (found) setBooking(found)
    setLoading(false)
  }, [bookingId])

  if (loading) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>⏳ Loading...</div>
      </div>
    )
  }

  const isPaid = booking?.paymentVerified || booking?.paymentStatus === 'paid'

  const shareWhatsApp = () => {
    if (!booking) return
    const msg = encodeURIComponent(
      `🙏 *जय श्री श्याम*\n\n` +
      `✅ *बुकिंग Confirmed!*\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `🔖 Booking ID: *${booking.bookingId || booking.id}*\n` +
      `📌 सेवा: *${booking.serviceName}*\n` +
      `💰 राशि: *₹${booking.amount}*\n` +
      `👤 नाम: *${booking.name}*\n` +
      (booking.date ? `📅 दिनांक: *${booking.date}*\n` : '') +
      `━━━━━━━━━━━━━━━━━━\n` +
      `📞 सम्पर्क: 9051858687\n` +
      `🙏 बाबा श्याम की कृपा आप पर बनी रहे!`
    )
    window.open(`https://wa.me/91${booking.phone}?text=${msg}`, '_blank')
  }

  return (
    <div style={{ minHeight: '80vh', background: 'var(--bg-primary)', padding: '40px 20px' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>

        {/* Success Banner */}
        <div style={{
          background: isPaid ? 'rgba(37,211,102,0.1)' : 'rgba(212,160,23,0.1)',
          border: `1px solid ${isPaid ? 'rgba(37,211,102,0.4)' : 'rgba(212,160,23,0.4)'}`,
          borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginBottom: 24,
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: 12 }}>
            {isPaid ? '✅' : '🙏'}
          </div>
          <h1 className="hindi-text" style={{ color: isPaid ? '#25d366' : '#D4A017', fontSize: '1.5rem', marginBottom: 8 }}>
            {isPaid ? 'बुकिंग Confirmed!' : 'बुकिंग Request भेजी गई!'}
          </h1>
          <p className="hindi-text" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {isPaid
              ? 'आपकी payment सफलतापूर्वक हो गई। बाबा श्याम की कृपा आप पर बनी रहे!'
              : 'हम जल्द ही आपसे सम्पर्क करेंगे।'}
          </p>
        </div>

        {/* Booking Details Card */}
        {booking ? (
          <div className="card" style={{ padding: '24px', marginBottom: 20 }}>
            <div style={{ background: 'rgba(212,160,23,0.08)', border: '1px solid rgba(212,160,23,0.3)', borderRadius: 10, padding: '12px 16px', textAlign: 'center', marginBottom: 20 }}>
              <div style={{ color: '#aaa', fontSize: '0.78rem', marginBottom: 4 }}>Booking ID</div>
              <div style={{ color: '#D4A017', fontWeight: 700, fontSize: '1.1rem', letterSpacing: 1 }}>
                {booking.bookingId || booking.id}
              </div>
            </div>

            {[
              { label: '📌 सेवा', value: booking.serviceName },
              { label: '👤 नाम', value: booking.name },
              { label: '📞 फोन', value: booking.phone },
              booking.date     && { label: '📅 दिनांक', value: booking.date },
              booking.occasion && { label: '🎊 अवसर',   value: booking.occasion },
              booking.address  && { label: '🏠 पता',    value: booking.address },
              { label: '💰 राशि', value: `₹${(booking.amount || 0).toLocaleString('hi-IN')}` },
              { label: '💳 Payment', value: isPaid ? '✅ Paid' : '⏳ Pending', color: isPaid ? '#25d366' : '#f57c00' },
              { label: '📊 Status', value: booking.status || 'Confirmed' },
              { label: '🕐 समय', value: formatDate(booking.createdAt) },
            ].filter(Boolean).map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="hindi-text" style={{ color: '#aaa', fontSize: '0.85rem' }}>{row.label}</span>
                <span className="hindi-text" style={{ fontWeight: 600, color: row.color || '#e0d0f0', fontSize: '0.88rem', textAlign: 'right', maxWidth: '60%' }}>{row.value}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="card" style={{ padding: 24, textAlign: 'center', marginBottom: 20 }}>
            <p className="hindi-text" style={{ color: 'var(--text-muted)' }}>
              Booking ID: <strong style={{ color: '#D4A017' }}>{bookingId}</strong>
            </p>
            <p className="hindi-text" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 8 }}>
              अपनी बुकिंग देखने के लिए booking history page पर जाएं।
            </p>
          </div>
        )}

        {/* Next Steps */}
        <div className="card" style={{ padding: '20px 24px', marginBottom: 20 }}>
          <h3 className="hindi-text" style={{ color: '#D4A017', marginBottom: 14, fontSize: '1rem' }}>📋 अगले कदम</h3>
          {[
            'हम आपकी बुकिंग review करेंगे',
            'WhatsApp/Call पर confirm करेंगे',
            'निर्धारित समय पर भोग/प्रसाद चढ़ाया जाएगा',
            'Photo/Video आपको WhatsApp पर भेजी जाएगी',
            'प्रसाद आपके घर पहुंचाया जाएगा',
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
              <div style={{ background: 'rgba(212,160,23,0.15)', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#D4A017', fontWeight: 700, fontSize: '0.78rem' }}>{i + 1}</div>
              <span className="hindi-text" style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>{step}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button onClick={shareWhatsApp}
            style={{ flex: 1, minWidth: 140, background: '#25d366', color: '#fff', border: 'none', borderRadius: 10, padding: '13px 16px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: '0.9rem' }}>
            <FaWhatsapp /> <span className="hindi-text">Receipt भेजें</span>
          </button>
          <a href="tel:9051858687"
            style={{ flex: 1, minWidth: 140, background: 'rgba(33,150,243,0.15)', color: '#2196F3', border: '1px solid rgba(33,150,243,0.3)', borderRadius: 10, padding: '13px 16px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: '0.9rem', textDecoration: 'none' }}>
            <FiPhone /> 9051858687
          </a>
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
          <Link href="/booking-history"
            style={{ flex: 1, textAlign: 'center', background: 'rgba(212,160,23,0.1)', color: '#D4A017', border: '1px solid rgba(212,160,23,0.3)', borderRadius: 10, padding: '11px', fontSize: '0.88rem', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <FiClock /> <span className="hindi-text">सभी बुकिंग देखें</span>
          </Link>
          <Link href="/"
            style={{ flex: 1, textAlign: 'center', background: 'rgba(123,45,139,0.1)', color: '#7B2D8B', border: '1px solid rgba(123,45,139,0.3)', borderRadius: 10, padding: '11px', fontSize: '0.88rem', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <span className="hindi-text">🏠 होम पेज</span>
          </Link>
        </div>

      </div>
    </div>
  )
}
