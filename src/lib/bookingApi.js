// ── Booking API client — replaces localStorage saveBooking calls ─────────────
// All components call saveBookingToServer() instead of saveBooking()
// Falls back to localStorage ONLY if API fails (offline resilience)

import { saveBooking as saveToLocal } from '@/lib/bookingStorage'

/**
 * saveBookingToServer(bookingData)
 *
 * POSTs to /api/bookings/create.
 * Returns the saved booking object from the server.
 * Falls back to localStorage on network error.
 */
export async function saveBookingToServer(bookingData) {
  try {
    const res = await fetch('/api/bookings/create', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(bookingData),
    })

    const data = await res.json()

    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Server save failed')
    }

    // Normalize: server returns _id, bookingId — map to same shape as localStorage
    const booking = {
      ...data.booking,
      id:        data.booking.bookingId,      // keep 'id' field for ReceiptModal compatibility
      createdAt: data.booking.createdAt || new Date().toISOString(),
    }

    // Also save to localStorage as cache (so /booking-history works offline)
    saveToLocal({
      ...booking,
      id: booking.bookingId,
    })

    return booking

  } catch (err) {
    console.error('[bookingApi] Server save failed, falling back to localStorage:', err)
    // Fallback: save locally so user isn't stuck
    return saveToLocal(bookingData)
  }
}

/**
 * fetchMyBookings(token)
 *
 * Fetches bookings for the logged-in user using their JWT session token.
 */
export async function fetchMyBookings(token) {
  const res = await fetch('/api/bookings/my', {
    headers: { Authorization: `Bearer ${token}` },
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Failed to fetch bookings')
  return data
}

/**
 * fetchAllBookings(adminToken, params)
 * params: { page, limit, status, serviceType, search, dateFrom, dateTo }
 */
export async function fetchAllBookings(adminToken, params = {}) {
  const qs = new URLSearchParams(
    Object.fromEntries(Object.entries(params).filter(([, v]) => v != null && v !== ''))
  ).toString()

  const res = await fetch(`/api/bookings/all${qs ? `?${qs}` : ''}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Failed to fetch bookings')
  return data
}

/**
 * updateBookingStatus(adminToken, bookingId, { status, adminNote })
 */
export async function updateBookingStatus(adminToken, bookingId, updates) {
  const res = await fetch(`/api/bookings/${bookingId}`, {
    method:  'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${adminToken}`,
    },
    body: JSON.stringify(updates),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Update failed')
  return data
}
