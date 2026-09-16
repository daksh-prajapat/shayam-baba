'use client'
import { useState, useEffect, useCallback } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiLogOut, FiRefreshCw, FiSearch, FiEdit2, FiCheck, FiX, FiTrendingUp, FiUsers, FiDollarSign, FiClock } from 'react-icons/fi'
import { fetchAllBookings, updateBookingStatus } from '@/lib/bookingApi'
import './AdminDashboard.css'

const ADMIN_TOKEN_KEY = 'ks_admin_token'
const STATUSES = ['Pending Payment', 'Confirmed', 'Processing', 'Completed', 'Cancelled']

const statusColor = {
  'Pending Payment': '#f57c00',
  'Confirmed':       '#2196F3',
  'Processing':      '#9C27B0',
  'Completed':       '#25d366',
  'Cancelled':       '#e53935',
}

const serviceEmoji = {
  swamani:  '👑', prasad: '🍯', bhandara: '🍽️',
  seva:     '🙏', bhog:  '🍛', shringar: '🌸',
  nishan:   '🚩', donation: '💛',
}

/* ─── Login Form ─── */
function AdminLogin({ onLogin }) {
  const [phone, setPhone]     = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      const res  = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, password }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Login failed'); return }
      sessionStorage.setItem(ADMIN_TOKEN_KEY, data.token)
      onLogin(data.token)
    } catch {
      setError('Network error. दोबारा कोशिश करें।')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0d0514', padding: 20 }}>
      <div style={{ background: '#1a0a24', border: '1px solid rgba(212,160,23,0.3)', borderRadius: 16, padding: '40px 36px', width: '100%', maxWidth: 400 }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: '3rem' }}>🛕</div>
          <h1 style={{ color: '#D4A017', margin: '8px 0 4px', fontSize: '1.4rem' }}>Admin Dashboard</h1>
          <p style={{ color: '#888', fontSize: '0.85rem' }}>खाटू श्याम जी — Owner Access</p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ color: '#aaa', fontSize: '0.82rem', display: 'block', marginBottom: 6 }}>Owner Phone</label>
            <input type="tel" placeholder="9929975116" value={phone} maxLength={10}
              onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
              style={{ width: '100%', background: '#2a1040', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '10px 14px', color: '#fff', fontSize: '0.95rem', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ color: '#aaa', fontSize: '0.82rem', display: 'block', marginBottom: 6 }}>Password</label>
            <input type="password" placeholder="Admin password" value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', background: '#2a1040', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '10px 14px', color: '#fff', fontSize: '0.95rem', boxSizing: 'border-box' }} />
          </div>
          {error && <p style={{ color: '#ff8888', fontSize: '0.85rem', margin: 0 }}>⚠️ {error}</p>}
          <button type="submit" disabled={loading}
            style={{ background: 'linear-gradient(135deg, #7B2D8B, #D4A017)', color: '#fff', border: 'none', borderRadius: 8, padding: '12px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', marginTop: 4 }}>
            {loading ? '⏳ Logging in...' : '🔐 Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

/* ─── Status Badge ─── */
function StatusBadge({ status }) {
  return (
    <span style={{
      fontSize: '0.72rem', padding: '3px 10px', borderRadius: 20, fontWeight: 700,
      background: `${statusColor[status] || '#888'}22`,
      color: statusColor[status] || '#888',
      border: `1px solid ${statusColor[status] || '#888'}44`,
    }}>
      {status}
    </span>
  )
}

/* ─── Edit Status Inline ─── */
function StatusEditor({ bookingId, current, token, onUpdated }) {
  const [status, setStatus]     = useState(current)
  const [note, setNote]         = useState('')
  const [saving, setSaving]     = useState(false)
  const [error, setError]       = useState('')

  const handleSave = async () => {
    setSaving(true); setError('')
    try {
      const data = await updateBookingStatus(token, bookingId, { status, adminNote: note })
      onUpdated(data.booking)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 200 }}>
      <select value={status} onChange={e => setStatus(e.target.value)}
        style={{ background: '#2a1040', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6, padding: '6px 10px', color: '#fff', fontSize: '0.85rem' }}>
        {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
      <input placeholder="Admin note (optional)" value={note} onChange={e => setNote(e.target.value)}
        style={{ background: '#2a1040', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: '6px 10px', color: '#fff', fontSize: '0.82rem' }} />
      {error && <p style={{ color: '#ff8888', fontSize: '0.8rem', margin: 0 }}>⚠️ {error}</p>}
      <button onClick={handleSave} disabled={saving}
        style={{ background: '#25d366', color: '#000', border: 'none', borderRadius: 6, padding: '7px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>
        {saving ? '⏳ Saving...' : '✅ Save'}
      </button>
    </div>
  )
}

/* ─── Main Dashboard ─── */
export default function AdminDashboard() {
  const [token, setToken]           = useState(null)
  const [bookings, setBookings]     = useState([])
  const [stats, setStats]           = useState(null)
  const [pagination, setPagination] = useState(null)
  const [loading, setLoading]       = useState(false)
  const [search, setSearch]         = useState('')
  const [filterStatus, setFilterStatus]   = useState('')
  const [filterType, setFilterType]       = useState('')
  const [page, setPage]                   = useState(1)
  const [editingId, setEditingId]         = useState(null)

  useEffect(() => {
    const saved = sessionStorage.getItem(ADMIN_TOKEN_KEY)
    if (saved) setToken(saved)
  }, [])

  const loadBookings = useCallback(async (tkn, params = {}) => {
    setLoading(true)
    try {
      const data = await fetchAllBookings(tkn, { page, limit: 30, search, status: filterStatus, serviceType: filterType, ...params })
      setBookings(data.bookings || [])
      setStats(data.stats)
      setPagination(data.pagination)
    } catch (err) {
      if (err.message?.includes('403') || err.message?.includes('401')) {
        sessionStorage.removeItem(ADMIN_TOKEN_KEY)
        setToken(null)
      }
    } finally {
      setLoading(false)
    }
  }, [page, search, filterStatus, filterType])

  useEffect(() => {
    if (token) loadBookings(token)
  }, [token, page, filterStatus, filterType])

  const handleSearch = (e) => {
    e.preventDefault()
    loadBookings(token)
  }

  const handleBookingUpdated = (updated) => {
    setBookings(prev => prev.map(b => (b.bookingId === updated.bookingId ? updated : b)))
    setEditingId(null)
  }

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_TOKEN_KEY)
    setToken(null)
  }

  if (!token) return <AdminLogin onLogin={setToken} />

  const totalRevenue = stats?.totalRevenue || 0
  const paidCount    = stats?.paidBookings  || 0
  const totalCount   = stats?.totalBookings || 0
  const todayCount   = stats?.todayBookings || 0

  return (
    <div className="admin-wrap">
      {/* Header */}
      <div className="admin-header">
        <div className="admin-logo">🛕 <span>Admin Dashboard</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: '#aaa', fontSize: '0.82rem' }}>खाटू श्याम जी</span>
          <button className="admin-logout-btn" onClick={handleLogout}><FiLogOut /> Logout</button>
        </div>
      </div>

      <div className="admin-body">

        {/* Stats Row */}
        <div className="admin-stats-row">
          {[
            { icon: <FiTrendingUp />, label: 'Total Revenue', value: `₹${totalRevenue.toLocaleString('hi-IN')}`, color: '#25d366' },
            { icon: <FiUsers />,     label: 'Total Bookings', value: totalCount,   color: '#2196F3' },
            { icon: <FiCheck />,     label: 'Paid Bookings',  value: paidCount,    color: '#D4A017' },
            { icon: <FiClock />,     label: 'Today',          value: todayCount,   color: '#E91E8C' },
          ].map((s, i) => (
            <div key={i} className="admin-stat-card">
              <div className="admin-stat-icon" style={{ color: s.color }}>{s.icon}</div>
              <div className="admin-stat-value" style={{ color: s.color }}>{s.value}</div>
              <div className="admin-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="admin-toolbar">
          <form onSubmit={handleSearch} className="admin-search-form">
            <FiSearch />
            <input type="text" placeholder="नाम, Phone, Booking ID..." value={search}
              onChange={e => setSearch(e.target.value)} />
            <button type="submit">खोजें</button>
          </form>
          <select value={filterStatus} onChange={e => { setFilterStatus(e.target.value); setPage(1) }}
            className="admin-select">
            <option value="">All Status</option>
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={filterType} onChange={e => { setFilterType(e.target.value); setPage(1) }}
            className="admin-select">
            <option value="">All Types</option>
            {Object.keys(serviceEmoji).map(t => <option key={t} value={t}>{serviceEmoji[t]} {t}</option>)}
          </select>
          <button className="admin-refresh-btn" onClick={() => loadBookings(token)} disabled={loading}>
            <FiRefreshCw style={{ animation: loading ? 'spin 1s linear infinite' : 'none' }} /> Refresh
          </button>
        </div>

        {/* Table */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#888' }}>⏳ Loading bookings...</div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Amount</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0 ? (
                  <tr><td colSpan={8} style={{ textAlign: 'center', color: '#888', padding: '40px' }}>No bookings found</td></tr>
                ) : bookings.map(b => (
                  <tr key={b.bookingId}>
                    <td>
                      <div style={{ fontFamily: 'monospace', fontSize: '0.82rem', color: '#D4A017' }}>{b.bookingId}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{b.name}</div>
                      <a href={`tel:${b.phone}`} style={{ color: '#888', fontSize: '0.8rem', textDecoration: 'none' }}>{b.phone}</a>
                      {b.email && <div style={{ color: '#666', fontSize: '0.75rem' }}>{b.email}</div>}
                    </td>
                    <td>
                      <div>{serviceEmoji[b.serviceType] || '🙏'} <span style={{ fontSize: '0.82rem' }}>{b.serviceName}</span></div>
                      {b.date && <div style={{ color: '#888', fontSize: '0.75rem' }}>📅 {b.date}</div>}
                      {b.occasion && <div style={{ color: '#888', fontSize: '0.75rem' }}>🎉 {b.occasion}</div>}
                      {b.address && <div style={{ color: '#888', fontSize: '0.72rem', maxWidth: 180, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>📍 {b.address}</div>}
                    </td>
                    <td>
                      <div style={{ fontWeight: 700, color: '#D4A017' }}>₹{b.amount?.toLocaleString('hi-IN')}</div>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.8rem', color: b.paymentVerified ? '#25d366' : '#f57c00', fontWeight: 700 }}>
                        {b.paymentVerified ? '✅ Paid' : '⏳ Pending'}
                      </div>
                      {b.razorpayPaymentId && (
                        <div style={{ color: '#666', fontSize: '0.7rem', fontFamily: 'monospace' }} title={b.razorpayPaymentId}>
                          {b.razorpayPaymentId.slice(0, 16)}…
                        </div>
                      )}
                    </td>
                    <td>
                      {editingId === b.bookingId ? (
                        <StatusEditor
                          bookingId={b.bookingId}
                          current={b.status}
                          token={token}
                          onUpdated={handleBookingUpdated}
                        />
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
                          <StatusBadge status={b.status} />
                          {b.adminNote && (
                            <div style={{ color: '#aaa', fontSize: '0.72rem', maxWidth: 140, wordBreak: 'break-word' }}>
                              📝 {b.adminNote}
                            </div>
                          )}
                          <button onClick={() => setEditingId(b.bookingId)}
                            style={{ background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.3)', borderRadius: 6, padding: '4px 10px', color: '#D4A017', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                            <FiEdit2 size={11} /> Edit
                          </button>
                        </div>
                      )}
                    </td>
                    <td style={{ color: '#888', fontSize: '0.78rem', whiteSpace: 'nowrap' }}>
                      {new Date(b.createdAt).toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      <br />
                      {new Date(b.createdAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <a href={`https://wa.me/91${b.phone}?text=नमस्ते ${b.name} जी! बुकिंग ${b.bookingId} के बारे में बात करनी है।`}
                          target="_blank" rel="noopener noreferrer"
                          style={{ background: '#25d366', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', fontSize: '0.8rem' }}>
                          <FaWhatsapp />
                        </a>
                        <a href={`tel:${b.phone}`}
                          style={{ background: 'rgba(33,150,243,0.15)', color: '#2196F3', border: '1px solid rgba(33,150,243,0.3)', borderRadius: 6, padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', fontSize: '0.8rem' }}>
                          <FiPhone />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {pagination && pagination.pages > 1 && (
          <div className="admin-pagination">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>← Prev</button>
            <span>Page {page} of {pagination.pages} ({pagination.total} total)</span>
            <button onClick={() => setPage(p => Math.min(pagination.pages, p + 1))} disabled={page === pagination.pages}>Next →</button>
          </div>
        )}

      </div>
    </div>
  )
}
