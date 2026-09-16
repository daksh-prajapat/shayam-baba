import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Booking from '@/models/Booking'
import { sendBookingConfirmation, sendOwnerAlert } from '@/lib/emailService'

// ── ID generator (same format as old localStorage) ──
function generateBookingId() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `KS-${date}-${random}`
}

const ALLOWED_TYPES = ['swamani', 'prasad', 'seva', 'bhog', 'shringar', 'nishan', 'donation', 'bhandara']

export async function POST(request) {
  try {
    await connectDB()

    const body = await request.json()
    const {
      serviceName, serviceType, amount, icon,
      name, phone, email, city, address,
      date, occasion, note,
      paymentStatus, paymentVerified,
      razorpayOrderId, razorpayPaymentId,
      status,
    } = body

    // ── Validate required fields ──
    if (!serviceName || !serviceType || !name || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: serviceName, serviceType, name, phone' },
        { status: 400 }
      )
    }

    if (!ALLOWED_TYPES.includes(serviceType)) {
      return NextResponse.json({ error: 'Invalid serviceType' }, { status: 400 })
    }

    const cleanPhone = String(phone).replace(/\D/g, '').slice(-10)
    if (cleanPhone.length !== 10) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
    }

    // ── Duplicate payment guard ──
    if (razorpayPaymentId) {
      const existing = await Booking.findOne({ razorpayPaymentId })
      if (existing) {
        return NextResponse.json({ success: true, booking: existing, duplicate: true })
      }
    }

    // ── Create booking ──
    const booking = await Booking.create({
      bookingId:          generateBookingId(),
      serviceName:        String(serviceName).trim().slice(0, 200),
      serviceType,
      icon:               icon || '🙏',
      amount:             Number(amount) || 0,
      name:               String(name).trim().slice(0, 100),
      phone:              cleanPhone,
      email:              String(email || '').trim().slice(0, 200),
      city:               String(city || '').trim().slice(0, 100),
      address:            String(address || '').trim().slice(0, 500),
      date:               date || '',
      occasion:           occasion || '',
      note:               note || '',
      paymentStatus:      paymentStatus || 'pending',
      paymentVerified:    paymentVerified ?? false,
      razorpayOrderId:    razorpayOrderId || null,
      razorpayPaymentId:  razorpayPaymentId || null,
      status:             paymentVerified ? 'Confirmed' : (status || 'Pending Payment'),
    })

    // ── Send emails (non-blocking — don't fail booking if email fails) ──
    try {
      if (paymentVerified && email) {
        await sendBookingConfirmation(booking)
      }
      await sendOwnerAlert(booking)
    } catch (emailErr) {
      console.error('[bookings/create] Email error (non-fatal):', emailErr)
    }

    return NextResponse.json({ success: true, booking }, { status: 201 })

  } catch (err) {
    console.error('[bookings/create] Error:', err)
    return NextResponse.json(
      { error: 'Failed to save booking. Please try again.' },
      { status: 500 }
    )
  }
}
