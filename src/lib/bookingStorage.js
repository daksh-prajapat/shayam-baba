// ── Booking Storage Utility ──────────────────────────────
// Saves all bookings to localStorage

const STORAGE_KEY = 'khatu_shyam_bookings'

export function generateBookingId() {
  const now = new Date()
  const date = now.toISOString().slice(0, 10).replace(/-/g, '')
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `KS-${date}-${random}`
}

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
    existing.unshift(newBooking) // latest first
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
    return newBooking
  } catch (e) {
    console.error('Booking save error:', e)
    return null
  }
}

export function getAllBookings() {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (e) {
    return []
  }
}

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
