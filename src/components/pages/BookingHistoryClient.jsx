'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiTrash2, FiEye, FiClock, FiSearch, FiFilter } from 'react-icons/fi'
import { getAllBookings, deleteBooking, clearAllBookings, formatDate } from '@/lib/bookingStorage'
import ReceiptModal from '@/components/receipt/ReceiptModal'
import './BookingHistory.css'

const serviceTypeLabel = {
  prasad: '🍯 प्रसाद',
  swamani: '👑 स्वामणी',
  bhandara: '🍽️ भंडारा',
}

export default function BookingHistoryClient() {
  const [bookings, setBookings] = useState([])
  const [filtered, setFiltered] = useState([])
  const [selectedReceipt, setSelectedReceipt] = useState(null)
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [confirmClear, setConfirmClear] = useState(false)

  useEffect(() => {
    const all = getAllBookings()
    setBookings(all)
    setFiltered(all)
  }, [])

  useEffect(() => {
    let result = bookings
    if (filterType !== 'all') {
      result = result.filter(b => b.serviceType === filterType)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(b =>
        b.name?.toLowerCase().includes(q) ||
        b.phone?.includes(q) ||
        b.serviceName?.toLowerCase().includes(q) ||
        b.id?.toLowerCase().includes(q)
      )
    }
    setFiltered(result)
  }, [search, filterType, bookings])

  const handleDelete = (id) => {
    deleteBooking(id)
    const updated = getAllBookings()
    setBookings(updated)
  }

  const handleClearAll = () => {
    clearAllBookings()
    setBookings([])
    setFiltered([])
    setConfirmClear(false)
  }

  return (
    <div className="bh-page">
      {selectedReceipt && <ReceiptModal booking={selectedReceipt} onClose={() => setSelectedReceipt(null)} />}

      {/* Hero */}
      <div className="bh-hero">
        <div className="bh-hero-overlay"></div>
        <div className="container bh-hero-content">
          <div className="bh-hero-badge hindi-text">📋 बुकिंग इतिहास</div>
          <h1 className="hindi-text">आपकी सभी बुकिंग</h1>
          <p className="hindi-text bh-hero-sub">सभी बुकिंग का रिकॉर्ड — Receipt देखें, Print करें, Share करें</p>
        </div>
      </div>

      <div className="container bh-container">

        {/* Stats */}
        <div className="bh-stats">
          <div className="bh-stat-card">
            <span className="bh-stat-num">{bookings.length}</span>
            <span className="hindi-text bh-stat-label">कुल बुकिंग</span>
          </div>
          <div className="bh-stat-card">
            <span className="bh-stat-num">{bookings.filter(b => b.serviceType === 'swamani').length}</span>
            <span className="hindi-text bh-stat-label">👑 स्वामणी</span>
          </div>
          <div className="bh-stat-card">
            <span className="bh-stat-num">{bookings.filter(b => b.serviceType === 'prasad').length}</span>
            <span className="hindi-text bh-stat-label">🍯 प्रसाद</span>
          </div>
          <div className="bh-stat-card">
            <span className="bh-stat-num">{bookings.filter(b => b.serviceType === 'bhandara').length}</span>
            <span className="hindi-text bh-stat-label">🍽️ भंडारा</span>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bh-toolbar">
          <div className="bh-search-box">
            <FiSearch className="bh-search-icon" />
            <input
              type="text"
              placeholder="नाम, फोन, Booking ID से खोजें..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bh-search-input hindi-text"
            />
          </div>
          <div className="bh-filter-tabs">
            {[
              { id: 'all', label: 'सभी' },
              { id: 'swamani', label: '👑 स्वामणी' },
              { id: 'prasad', label: '🍯 प्रसाद' },
              { id: 'bhandara', label: '🍽️ भंडारा' },
            ].map(f => (
              <button key={f.id}
                className={`bh-filter-btn hindi-text ${filterType === f.id ? 'active' : ''}`}
                onClick={() => setFilterType(f.id)}>
                {f.label}
              </button>
            ))}
          </div>
          {bookings.length > 0 && (
            <button className="bh-clear-btn hindi-text" onClick={() => setConfirmClear(true)}>
              <FiTrash2 /> सभी हटाएं
            </button>
          )}
        </div>

        {/* Confirm Clear */}
        {confirmClear && (
          <div className="bh-confirm-box">
            <p className="hindi-text">⚠️ क्या आप सभी बुकिंग हटाना चाहते हैं? यह वापस नहीं होगा।</p>
            <div className="bh-confirm-btns">
              <button className="bh-confirm-yes hindi-text" onClick={handleClearAll}>हाँ, हटाएं</button>
              <button className="bh-confirm-no hindi-text" onClick={() => setConfirmClear(false)}>रद्द करें</button>
            </div>
          </div>
        )}

        {/* Bookings List */}
        {filtered.length === 0 ? (
          <div className="bh-empty">
            <div className="bh-empty-icon">📋</div>
            <h3 className="hindi-text">
              {bookings.length === 0 ? 'कोई बुकिंग नहीं मिली' : 'खोज में कुछ नहीं मिला'}
            </h3>
            <p className="hindi-text">
              {bookings.length === 0
                ? 'जब आप कोई बुकिंग करेंगे, वो यहाँ दिखेगी।'
                : 'दूसरे शब्दों में खोजें।'}
            </p>
            {bookings.length === 0 && (
              <div className="bh-empty-links">
                <Link href="/swamani" className="btn-primary hindi-text">👑 स्वामणी बुकिंग</Link>
                <Link href="/prasad-puja" className="btn-secondary hindi-text">🍯 प्रसाद बुकिंग</Link>
              </div>
            )}
          </div>
        ) : (
          <div className="bh-list">
            {filtered.map(booking => (
              <div key={booking.id} className="bh-item card">
                {/* Left */}
                <div className="bh-item-left">
                  <div className="bh-item-icon">{booking.icon || '🙏'}</div>
                  <div className="bh-item-info">
                    <div className="bh-item-type hindi-text">
                      {serviceTypeLabel[booking.serviceType] || '🙏 बुकिंग'}
                    </div>
                    <h3 className="hindi-text bh-item-name">{booking.serviceName}</h3>
                    <div className="bh-item-meta">
                      <span className="hindi-text">👤 {booking.name}</span>
                      <span>📞 {booking.phone}</span>
                      {booking.date && <span className="hindi-text">📅 {booking.date}</span>}
                    </div>
                    <div className="bh-item-time hindi-text">
                      <FiClock /> {formatDate(booking.createdAt)}
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="bh-item-right">
                  <div className="bh-item-id">{booking.id}</div>
                  {booking.amount > 0 && (
                    <div className="bh-item-amount">₹{booking.amount?.toLocaleString('hi-IN')}</div>
                  )}
                  <span className="bh-item-status hindi-text">✓ {booking.status}</span>
                  <div className="bh-item-actions">
                    <button className="bh-view-btn hindi-text" onClick={() => setSelectedReceipt(booking)}>
                      <FiEye /> Receipt
                    </button>
                    <button className="bh-wa-btn" onClick={() => {
                      const msg = `🙏 Booking ID: ${booking.id}%0A📌 ${booking.serviceName}%0A👤 ${booking.name}%0A📞 ${booking.phone}`
                      window.open(`https://wa.me/?text=${msg}`, '_blank')
                    }}>
                      <FaWhatsapp />
                    </button>
                    <button className="bh-del-btn" onClick={() => handleDelete(booking.id)}>
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bh-cta-box">
          <div>
            <h3 className="hindi-text">नई बुकिंग करें</h3>
            <p className="hindi-text">Call या WhatsApp पर बात करें: 9929975116</p>
          </div>
          <div className="bh-cta-btns">
            <a href="tel:9929975116" className="bh-cta-call"><FiPhone /> 9929975116</a>
            <a href="https://wa.me/919929975116" className="bh-cta-wa" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
