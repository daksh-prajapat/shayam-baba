import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Booking from '@/models/Booking'
import { verifySessionToken } from '@/lib/authUtils'

export async function GET(request) {
  try {
    // ── Auth: verify JWT token from Authorization header ──
    const authHeader = request.headers.get('authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const token = authHeader.slice(7)
    const payload = verifySessionToken(token)
    if (!payload) {
      return NextResponse.json({ error: 'Invalid or expired session. Please login again.' }, { status: 401 })
    }

    await connectDB()

    const phone = payload.phone.replace(/\D/g, '').slice(-10)
    const OWNER_PHONE = (process.env.OWNER_PHONE || '8302019637').replace(/\D/g, '')

    let bookings
    if (phone === OWNER_PHONE) {
      // Owner sees ALL bookings
      bookings = await Booking.find({})
        .sort({ createdAt: -1 })
        .limit(500)
        .lean()
    } else {
      // Regular user sees only their own
      bookings = await Booking.find({ phone })
        .sort({ createdAt: -1 })
        .lean()
    }

    return NextResponse.json({ success: true, bookings, isOwner: phone === OWNER_PHONE })

  } catch (err) {
    console.error('[bookings/my] Error:', err)
    return NextResponse.json({ error: 'Failed to fetch bookings.' }, { status: 500 })
  }
}
