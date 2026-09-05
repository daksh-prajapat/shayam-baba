'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiTrash2, FiEye, FiClock, FiSearch, FiLogOut, FiShield } from 'react-icons/fi'
import {
  getBookingsByPhone, deleteBooking, clearAllBookings,
  formatDate, setVerifiedPhone, getVerifiedPhone,
  clearVerifiedPhone, isOwner, getAllBookings, OWNER_PHONE
} from '@/lib/bookingStorage'
import ReceiptModal from '@/components/receipt/ReceiptModal'
import './BookingHistory.css'

const serviceTypeLabel = {
  prasad: '🍯 प्रसाद',
  swamani: '👑 स्वामणी',
  bhandara: '🍽️ भंडारा',
}

/* ─── Phone Verify Gate ─── */
function PhoneGate({ onVerified }) {
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const clean = phone.replace(/\D/g, '')
    if (clean.length !== 10) {
      setError('कृपया 10 अंकों का मोबाइल नंबर डालें')
      return
    }
    setLoading(true)
    setTimeout(() => {
      // Check if this phone has any bookings OR is owner
      const bookings = getBookingsByPhone(clean)
      if (isOwner(clean)) {
        setVerifiedPhone(clean)
        onVerified(clean)
      } else if (bookings.length > 0) {
        setVerifiedPhone(clean)
        onVerified(clean)
      } else {
        setError('इस नंबर पर कोई बुकिंग नहीं मिली। कृपया वही नंबर डालें जिससे बुकिंग की थी।')
        setLoading(false)
      }
    }, 600)
  }

  return (
    <div className="bh-gate-wrap">
      <div className="bh-gate-card">
        <div className="bh-gate-icon">🔒</div>
        <h2 className="hindi-text">अपनी बुकिंग देखें</h2>
        <p className="hindi-text bh-gate-sub">
          वही मोबाइल नंबर डालें जिससे बुकिंग की थी।<br />
          सिर्फ आपकी बुकिंग दिखेगी।
        </p>

        <form className="bh-gate-form" onSubmit={handleSubmit}>
          <div className="bh-gate-field">
            <span className="bh-gate-prefix"><FiPhone /></span>
            <input
              type="tel"
              placeholder="10 अंकों का मोबाइल नंबर"
              value={phone}
              maxLength={10}
              onChange={e => { setPhone(e.target.value.replace(/\D/g, '')); setError('') }}
              autoFocus
            />
          </div>
          {error && <p className="bh-gate-error hindi-text">⚠️ {error}</p>}
          <button type="submit" className="bh-gate-btn hindi-text" disabled={loading}>
            {loading ? '⏳ जाँच रहे हैं...' : '🔍 बुकिंग देखें'}
          </button>
        </form>

        <div className="bh-gate-note">
          <p className="hindi-text">📞 मदद के लिए Call करें: <a href="tel:9929975116">9929975116</a></p>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Component ─── */
export default function BookingHistoryClient() {
  const [verifiedPhone, setVerifiedPhoneState] = useState(null)
  const [bookings, setBookings] = useState([])
  const [filtered, setFiltered] = useState([])
  const [selectedReceipt, setSelectedReceipt] = useState(null)
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [confirmClear, setConfirmClear] = useState(false)
  const [loading, setLoading] = useState(true)

  // Check if already verified this session
  useEffect(() => {
    const saved = getVerifiedPhone()
    if (saved) {
      loadBookings(saved)
      setVerifiedPhoneState(saved)
    }
    setLoading(false)
  }, [])

  const loadBookings = (phone) => {
    const all = getBookingsByPhone(phone)
    setBookings(all)
    setFiltered(all)
  }

  const handleVerified = (phone) => {
    setVerifiedPhoneState(phone)
    loadBookings(phone)
  }

  const handleLogout = () => {
    clearVerifiedPhone()
    setVerifiedPhoneState(null)
    setBookings([])
    setFiltered([])
    setSearch('')
    setFilterType('all')
  }

  // Search + filter
  useEffect(() => {
    let result = bookings
    if (filterType !== 'all') result = result.filter(b => b.serviceType === filterType)
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
    loadBookings(verifiedPhone)
  }

  const handleClearAll = () => {
    if (isOwner(verifiedPhone)) {
      clearAllBookings()
    } else {
      // Delete only this user's bookings
      bookings.forEach(b => deleteBooking(b.id))
    }
    loadBookings(verifiedPhone)
    setConfirmClear(false)
  }

  const ownerMode = isOwner(verifiedPhone)

  // Loading state
  if (loading) {
    return (
      <div className="bh-page">
        <div style={{ textAlign: 'center', padding: '120px 20px' }}>
          <div style={{ fontSize: '2rem' }}>⏳</div>
        </div>
      </div>
    )
  }

  // Not verified → show gate
  if (!verifiedPhone) {
    return (
      <div className="bh-page">
        <div className="bh-hero">
          <div className="bh-hero-overlay"></div>
          <div className="container bh-hero-content">
            <div className="bh-hero-badge hindi-text">📋 बुकिंग इतिहास</div>
            <h1 className="hindi-text">अपनी बुकिंग देखें</h1>
            <p className="hindi-text bh-hero-sub">अपने मोबाइल नंबर से login करें</p>
          </div>
        </div>
        <div className="container">
          <PhoneGate onVerified={handleVerified} />
        </div>
      </div>
    )
  }

  // Verified → show bookings
  return (
    <div className="bh-page">
      {selectedReceipt && <ReceiptModal booking={selectedReceipt} onClose={() => setSelectedReceipt(null)} />}

      {/* Hero */}
      <div className="bh-hero">
        <div className="bh-hero-overlay"></div>
        <div className="container bh-hero-content">
          <div className="bh-hero-badge hindi-text">
            {ownerMode ? <><FiShield style={{display:'inline',marginRight:6}}/>Owner View — सभी बुकिंग</> : '📋 मेरी बुकिंग'}
          </div>
          <h1 className="hindi-text">
            {ownerMode ? 'सभी बुकिंग रिकॉर्ड' : 'आपकी बुकिंग'}
          </h1>
          <p className="hindi-text bh-hero-sub">
            {ownerMode
              ? `कुल ${bookings.length} बुकिंग मिलीं`
              : `📞 ${verifiedPhone} — ${bookings.length} बुकिंग मिलीं`}
          </p>
        </div>
      </div>

      <div className="container bh-container">

        {/* User bar */}
        <div className="bh-user-bar">
          <div className="bh-user-info">
            {ownerMode
              ? <><FiShield className="bh-owner-icon" /><span className="hindi-text">Owner Mode — <strong>9929975116</strong></span></>
              : <><FiPhone className="bh-user-icon" /><span className="hindi-text">📞 <strong>{verifiedPhone}</strong> की बुकिंग</span></>
            }
          </div>
          <button className="bh-logout-btn hindi-text" onClick={handleLogout}>
            <FiLogOut /> बाहर निकलें
          </button>
        </div>

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
              placeholder="नाम, Booking ID से खोजें..."
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
              <FiTrash2 /> {ownerMode ? 'सभी हटाएं' : 'मेरी बुकिंग हटाएं'}
            </button>
          )}
        </div>

        {/* Confirm Clear */}
        {confirmClear && (
          <div className="bh-confirm-box">
            <p className="hindi-text">⚠️ क्या आप {ownerMode ? 'सभी' : 'अपनी सभी'} बुकिंग हटाना चाहते हैं?</p>
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
                <div className="bh-item-left">
                  <div className="bh-item-icon">{booking.icon || '🙏'}</div>
                  <div className="bh-item-info">
                    <div className="bh-item-type hindi-text">
                      {serviceTypeLabel[booking.serviceType] || '🙏 बुकिंग'}
                    </div>
                    <h3 className="hindi-text bh-item-name">{booking.serviceName}</h3>
                    <div className="bh-item-meta">
                      <span className="hindi-text">👤 {booking.name}</span>
                      {ownerMode && <span>📞 {booking.phone}</span>}
                      {booking.date && <span className="hindi-text">📅 {booking.date}</span>}
                    </div>
                    <div className="bh-item-time hindi-text">
                      <FiClock /> {formatDate(booking.createdAt)}
                    </div>
                  </div>
                </div>
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
