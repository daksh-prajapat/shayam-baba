import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Booking from '@/models/Booking'
import { verifyAdminToken } from '@/lib/authUtils'

export async function GET(request) {
  try {
    // ── Admin-only route ──
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

    // ── Query params for filtering ──
    const { searchParams } = new URL(request.url)
    const page        = Math.max(1, parseInt(searchParams.get('page')  || '1'))
    const limit       = Math.min(100, parseInt(searchParams.get('limit') || '50'))
    const status      = searchParams.get('status')       // filter by status
    const serviceType = searchParams.get('serviceType')  // filter by type
    const search      = searchParams.get('search')       // search name/phone/id
    const dateFrom    = searchParams.get('dateFrom')
    const dateTo      = searchParams.get('dateTo')

    const query = {}
    if (status)      query.status = status
    if (serviceType) query.serviceType = serviceType
    if (search) {
      query.$or = [
        { name:      { $regex: search, $options: 'i' } },
        { phone:     { $regex: search, $options: 'i' } },
        { bookingId: { $regex: search, $options: 'i' } },
      ]
    }
    if (dateFrom || dateTo) {
      query.createdAt = {}
      if (dateFrom) query.createdAt.$gte = new Date(dateFrom)
      if (dateTo)   query.createdAt.$lte = new Date(dateTo)
    }

    const skip  = (page - 1) * limit
    const total = await Booking.countDocuments(query)
    const bookings = await Booking.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    // ── Stats ──
    const stats = await Booking.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue:   { $sum: { $cond: [{ $eq: ['$paymentVerified', true] }, '$amount', 0] } },
          totalBookings:  { $sum: 1 },
          paidBookings:   { $sum: { $cond: [{ $eq: ['$paymentStatus', 'paid'] }, 1, 0] } },
          todayBookings:  {
            $sum: {
              $cond: [
                {
                  $gte: [
                    '$createdAt',
                    new Date(new Date().setHours(0, 0, 0, 0)),
                  ]
                },
                1,
                0,
              ]
            }
          },
        },
      },
    ])

    return NextResponse.json({
      success: true,
      bookings,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
      stats: stats[0] || { totalRevenue: 0, totalBookings: 0, paidBookings: 0, todayBookings: 0 },
    })

  } catch (err) {
    console.error('[bookings/all] Error:', err)
    if (err.message?.includes('MONGODB_URI not configured')) {
      return NextResponse.json({ error: 'Database not configured. Add MONGODB_URI to .env.local' }, { status: 503 })
    }
    return NextResponse.json({ error: 'Failed to fetch bookings.' }, { status: 500 })
  }
}
