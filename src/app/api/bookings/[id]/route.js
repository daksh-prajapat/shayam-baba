import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Booking from '@/models/Booking'
import { verifyAdminToken } from '@/lib/authUtils'

const ALLOWED_STATUSES = ['Pending Payment', 'Confirmed', 'Processing', 'Completed', 'Cancelled']

// ── PATCH /api/bookings/[id] — Update booking status + adminNote ──
export async function PATCH(request, { params }) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const token = authHeader.slice(7)
    const payload = verifyAdminToken(token)
    if (!payload) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }

    await connectDB()

    const { id } = await params
    const body   = await request.json()
    const { status, adminNote } = body

    if (status && !ALLOWED_STATUSES.includes(status)) {
      return NextResponse.json({ error: `Invalid status. Allowed: ${ALLOWED_STATUSES.join(', ')}` }, { status: 400 })
    }

    const updateFields = {}
    if (status)    updateFields.status    = status
    if (adminNote !== undefined) updateFields.adminNote = String(adminNote).slice(0, 500)

    const booking = await Booking.findOneAndUpdate(
      { bookingId: id },
      { $set: updateFields },
      { new: true }
    )

    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, booking })

  } catch (err) {
    console.error('[bookings/[id]] PATCH Error:', err)
    return NextResponse.json({ error: 'Update failed. Please try again.' }, { status: 500 })
  }
}

// ── GET /api/bookings/[id] — Get single booking (admin) ──
export async function GET(request, { params }) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const token = authHeader.slice(7)
    if (!verifyAdminToken(token)) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }

    await connectDB()
    const { id } = await params
    const booking = await Booking.findOne({ bookingId: id }).lean()

    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, booking })

  } catch (err) {
    console.error('[bookings/[id]] GET Error:', err)
    return NextResponse.json({ error: 'Failed to fetch booking.' }, { status: 500 })
  }
}
