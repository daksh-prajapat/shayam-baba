import Razorpay from 'razorpay'
import { NextResponse } from 'next/server'

// ── Allowed service types & their valid price ranges (server-side validation) ──
const PRICE_BOUNDS = {
  swamani:  { min: 100,  max: 200000 },
  prasad:   { min: 51,   max: 50000  },
  seva:     { min: 100,  max: 200000 },
  bhog:     { min: 100,  max: 100000 },
  shringar: { min: 100,  max: 200000 },
  nishan:   { min: 100,  max: 200000 },
  donation: { min: 1,    max: 1000000},
}

export async function POST(request) {
  try {
    // ── 1. Parse body ──
    const body = await request.json()
    const { amount, serviceType, serviceName, customerName, phone } = body

    // ── 2. Validate required fields ──
    if (!amount || !serviceType || !serviceName || !customerName || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: amount, serviceType, serviceName, customerName, phone' },
        { status: 400 }
      )
    }

    // ── 3. Validate phone ──
    const cleanPhone = String(phone).replace(/\D/g, '').slice(-10)
    if (cleanPhone.length !== 10) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
    }

    // ── 4. Validate amount (server-side, do not blindly trust frontend) ──
    const numAmount = Number(amount)
    if (!Number.isFinite(numAmount) || numAmount <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
    }

    const bounds = PRICE_BOUNDS[serviceType]
    if (!bounds) {
      return NextResponse.json({ error: `Unknown serviceType: ${serviceType}` }, { status: 400 })
    }
    if (numAmount < bounds.min || numAmount > bounds.max) {
      return NextResponse.json(
        { error: `Amount ₹${numAmount} is outside allowed range for ${serviceType} (₹${bounds.min}–₹${bounds.max})` },
        { status: 400 }
      )
    }

    // ── 5. Check Razorpay credentials ──
    const keyId     = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
    const keySecret = process.env.RAZORPAY_KEY_SECRET
    if (!keyId || !keySecret || keyId.includes('REPLACE') || keySecret.includes('REPLACE')) {
      return NextResponse.json(
        { error: 'Payment gateway not configured. Please contact support.' },
        { status: 503 }
      )
    }

    // ── 6. Create Razorpay instance (server-side only) ──
    const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret })

    // ── 7. Convert ₹ to paise (₹1 = 100 paise) ──
    const amountInPaise = Math.round(numAmount * 100)

    // ── 8. Create order ──
    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: `KS-${Date.now().toString(36).toUpperCase()}`,
      notes: {
        serviceType,
        serviceName: String(serviceName).slice(0, 100),
        customerName: String(customerName).slice(0, 100),
        phone: cleanPhone,
      },
    })

    // ── 9. Return ONLY what the frontend needs (never expose key_secret) ──
    return NextResponse.json({
      orderId:   order.id,
      amount:    order.amount,      // in paise
      currency:  order.currency,
      receipt:   order.receipt,
    })

  } catch (err) {
    console.error('[create-order] Error:', err)
    // Do not expose internal error details to client
    return NextResponse.json(
      { error: 'Failed to create payment order. Please try again.' },
      { status: 500 }
    )
  }
}
