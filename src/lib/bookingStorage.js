// ── Booking Storage Utility ──────────────────────────────
// Saves all bookings to localStorage
// Owner phone: 9929975116 — can see ALL bookings
// Others: sirf apne phone number se apni bookings

const STORAGE_KEY = 'khatu_shyam_bookings'
const SESSION_KEY = 'khatu_shyam_verified_phone'
export const OWNER_PHONE = '9929975116'

// ── ID generator ──
export function generateBookingId() {
  const now = new Date()
  const date = now.toISOString().slice(0, 10).replace(/-/g, '')
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `KS-${date}-${random}`
}

// ── Save booking ──
export function saveBooking(booking) {
  if (typeof window === 'undefined') return null
  try {
    const existing = getAllBookings()
    const newBooking = {
      ...booking,
      id: generateBookingId(),
      createdAt: new Date().toISOString(),
      status: 'Confirmed',
    }
    existing.unshift(newBooking)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
    return newBooking
  } catch (e) {
    console.error('Booking save error:', e)
    return null
  }
}

// ── Get ALL bookings (raw) ──
export function getAllBookings() {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (e) {
    return []
  }
}

// ── Get bookings by phone ──
// Owner gets everything, others get only their own
export function getBookingsByPhone(phone) {
  if (!phone) return []
  const clean = phone.replace(/\D/g, '').slice(-10)
  if (clean === OWNER_PHONE) return getAllBookings()
  return getAllBookings().filter(b => {
    const bp = (b.phone || '').replace(/\D/g, '').slice(-10)
    return bp === clean
  })
}

// ── Check if phone is owner ──
export function isOwner(phone) {
  if (!phone) return false
  return phone.replace(/\D/g, '').slice(-10) === OWNER_PHONE
}

// ── Session: save verified phone (tab session only) ──
export function setVerifiedPhone(phone) {
  if (typeof window === 'undefined') return
  sessionStorage.setItem(SESSION_KEY, phone)
}

export function getVerifiedPhone() {
  if (typeof window === 'undefined') return null
  return sessionStorage.getItem(SESSION_KEY) || null
}

export function clearVerifiedPhone() {
  if (typeof window === 'undefined') return
  sessionStorage.removeItem(SESSION_KEY)
}

// ── Misc ──
export function getBookingById(id) {
  return getAllBookings().find(b => b.id === id) || null
}

export function deleteBooking(id) {
  if (typeof window === 'undefined') return
  const updated = getAllBookings().filter(b => b.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}

export function clearAllBookings() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}

export function formatDate(isoString) {
  const date = new Date(isoString)
  return date.toLocaleDateString('hi-IN', {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  })
}
