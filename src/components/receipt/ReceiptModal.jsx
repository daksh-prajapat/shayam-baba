'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiDownload, FiPrinter, FiX, FiCheck, FiShare2, FiClock } from 'react-icons/fi'
import { formatDate, setVerifiedPhone } from '@/lib/bookingStorage'
import './ReceiptModal.css'

export default function ReceiptModal({ booking, onClose }) {
  const receiptRef = useRef(null)

  if (!booking) return null

  const handlePrint = () => {
    const content = receiptRef.current.innerHTML
    const printWindow = window.open('', '_blank', 'width=600,height=800')
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Receipt - ${booking.id}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi&family=Poppins:wght@400;600;700&display=swap');
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Poppins', sans-serif; background: #fff; color: #1a0a24; padding: 20px; }
            .hindi-text { font-family: 'Tiro Devanagari Hindi', serif; }
            .receipt-print { max-width: 500px; margin: 0 auto; border: 2px solid #D4A017; border-radius: 12px; overflow: hidden; }
            .rp-header { background: linear-gradient(135deg, #1a0a24, #2d1040); color: #D4A017; text-align: center; padding: 20px; }
            .rp-header h2 { font-size: 1.4rem; margin-bottom: 4px; }
            .rp-header p { font-size: 0.8rem; opacity: 0.8; }
            .rp-id { background: #D4A017; color: #1a0a24; text-align: center; padding: 8px; font-weight: 700; font-size: 0.9rem; }
            .rp-body { padding: 20px; }
            .rp-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; font-size: 0.88rem; }
            .rp-row:last-child { border-bottom: none; }
            .rp-label { color: #666; }
            .rp-value { font-weight: 600; color: #1a0a24; text-align: right; max-width: 60%; }
            .rp-price-box { background: #fff8e7; border: 2px solid #D4A017; border-radius: 10px; padding: 14px; text-align: center; margin: 16px 0; }
            .rp-price-box .amount { font-size: 2rem; font-weight: 800; color: #D4A017; }
            .rp-footer { background: #1a0a24; color: #D4A017; text-align: center; padding: 14px; font-size: 0.82rem; }
            .rp-status { display: inline-block; background: #25d366; color: white; padding: 4px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; margin: 8px 0; }
          </style>
        </head>
        <body>${content}</body>
      </html>
    `)
    printWindow.document.close()
    printWindow.focus()
    setTimeout(() => { printWindow.print(); printWindow.close() }, 500)
  }

  const handleWhatsApp = () => {
    const msg = `🙏 *जय श्री श्याम*%0A%0A` +
      `📄 *बुकिंग रसीद / Receipt*%0A` +
      `━━━━━━━━━━━━━━━━━━━━%0A` +
      `🔖 Booking ID: *${booking.id}*%0A` +
      `📌 सेवा: *${booking.serviceName}*%0A` +
      `💰 राशि: *₹${booking.amount}*%0A` +
      `👤 नाम: *${booking.name}*%0A` +
      `📞 फोन: *${booking.phone}*%0A` +
      (booking.date ? `📅 दिनांक: *${booking.date}*%0A` : '') +
      `📊 स्थिति: *${booking.status}*%0A` +
      `🕐 बुकिंग समय: *${formatDate(booking.createdAt)}*%0A` +
      `━━━━━━━━━━━━━━━━━━━━%0A` +
      `🙏 बाबा श्याम की कृपा आप पर बनी रहे!%0A` +
      `📞 सम्पर्क: 9929975116`
    window.open(`https://wa.me/?text=${msg}`, '_blank')
  }

  const handleShare = async () => {
    const text = `🙏 जय श्री श्याम\n\nBooking ID: ${booking.id}\nसेवा: ${booking.serviceName}\nराशि: ₹${booking.amount}\nनाम: ${booking.name}\nस्थिति: ${booking.status}\n\nखाटू श्याम जी - 9929975116`
    if (navigator.share) {
      await navigator.share({ title: 'बुकिंग रसीद', text })
    } else {
      navigator.clipboard.writeText(text)
      alert('Receipt copied to clipboard!')
    }
  }

  return (
    <div className="receipt-overlay" onClick={onClose}>
      <div className="receipt-modal" onClick={e => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="rm-header">
          <h3 className="hindi-text">🎉 बुकिंग सफल!</h3>
          <button className="rm-close" onClick={onClose}><FiX /></button>
        </div>

        {/* Action Buttons */}
        <div className="rm-actions">
          <button className="rm-btn rm-print" onClick={handlePrint}>
            <FiPrinter /> <span className="hindi-text">Print / Download</span>
          </button>
          <button className="rm-btn rm-wa" onClick={handleWhatsApp}>
            <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
          </button>
          <button className="rm-btn rm-share" onClick={handleShare}>
            <FiShare2 /> <span className="hindi-text">Share</span>
          </button>
        </div>

        {/* Receipt Content */}
        <div className="rm-receipt-wrap">
          <div ref={receiptRef}>
            <div className="receipt-print">
              {/* Receipt Header */}
              <div className="rp-header">
                <div className="rp-logo">🙏</div>
                <h2 className="hindi-text">खाटू श्याम जी</h2>
                <p>Khatu Shyam Ji — Official Booking Receipt</p>
                <p>📞 9929975116</p>
              </div>

              {/* Booking ID */}
              <div className="rp-id">
                🔖 Booking ID: {booking.id}
                <span className="rp-status">✓ {booking.status}</span>
              </div>

              {/* Price */}
              <div className="rp-price-box">
                <div className="hindi-text" style={{ fontSize: '0.85rem', color: '#666', marginBottom: 4 }}>कुल राशि</div>
                <div className="amount">₹{booking.amount?.toLocaleString('hi-IN')}</div>
                <div className="hindi-text" style={{ fontSize: '0.75rem', color: '#888', marginTop: 4 }}>{booking.serviceName}</div>
              </div>

              {/* Details */}
              <div className="rp-body">
                <div className="rp-row">
                  <span className="rp-label hindi-text">👤 नाम</span>
                  <span className="rp-value hindi-text">{booking.name}</span>
                </div>
                <div className="rp-row">
                  <span className="rp-label hindi-text">📞 फोन</span>
                  <span className="rp-value">{booking.phone}</span>
                </div>
                {booking.date && (
                  <div className="rp-row">
                    <span className="rp-label hindi-text">📅 दिनांक</span>
                    <span className="rp-value hindi-text">{booking.date}</span>
                  </div>
                )}
                {booking.occasion && (
                  <div className="rp-row">
                    <span className="rp-label hindi-text">🎊 अवसर</span>
                    <span className="rp-value hindi-text">{booking.occasion}</span>
                  </div>
                )}
                {booking.address && (
                  <div className="rp-row">
                    <span className="rp-label hindi-text">🏠 पता</span>
                    <span className="rp-value hindi-text">{booking.address}</span>
                  </div>
                )}
                {booking.persons && (
                  <div className="rp-row">
                    <span className="rp-label hindi-text">👥 व्यक्ति</span>
                    <span className="rp-value hindi-text">{booking.persons}</span>
                  </div>
                )}
                <div className="rp-row">
                  <span className="rp-label hindi-text">📌 सेवा</span>
                  <span className="rp-value hindi-text">{booking.serviceName}</span>
                </div>
                <div className="rp-row">
                  <span className="rp-label hindi-text">🕐 बुकिंग समय</span>
                  <span className="rp-value hindi-text">{formatDate(booking.createdAt)}</span>
                </div>
                <div className="rp-row">
                  <span className="rp-label hindi-text">📊 स्थिति</span>
                  <span className="rp-value" style={{ color: '#25d366', fontWeight: 700 }}>✓ {booking.status}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="rp-footer">
                <p className="hindi-text">🙏 बाबा श्याम की कृपा आप पर बनी रहे!</p>
                <p style={{ marginTop: 6, fontSize: '0.75rem', opacity: 0.8 }}>खाटू श्याम जी, सीकर, राजस्थान • 9929975116</p>
                <p style={{ marginTop: 4, fontSize: '0.7rem', opacity: 0.6 }}>This is a digital receipt. Keep it safe.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Close + History */}
        <div className="rm-bottom-actions">
          <Link
            href="/booking-history"
            className="rm-history-btn hindi-text"
            onClick={() => {
              // Pre-verify phone so history page opens directly
              if (booking?.phone) {
                const clean = booking.phone.replace(/\D/g, '').slice(-10)
                if (clean.length === 10) setVerifiedPhone(clean)
              }
            }}
          >
            <FiClock /> अपनी सभी बुकिंग देखें
          </Link>
          <button className="rm-close-btn hindi-text" onClick={onClose}>बंद करें</button>
        </div>
      </div>
    </div>
  )
}
