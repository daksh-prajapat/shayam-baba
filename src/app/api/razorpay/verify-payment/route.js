import crypto from 'crypto'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    // ── 1. Parse body ──
    const body = await request.json()
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      // Booking metadata (to echo back after verification)
      bookingMeta,
    } = body

    // ── 2. Validate all three Razorpay fields are present ──
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, error: 'Missing Razorpay payment fields' },
        { status: 400 }
      )
    }

    // ── 3. Validate secret is available ──
    const keySecret = process.env.RAZORPAY_KEY_SECRET
    if (!keySecret || keySecret.includes('REPLACE')) {
      return NextResponse.json(
        { success: false, error: 'Payment gateway not configured' },
        { status: 503 }
      )
    }

    // ── 4. Verify signature ──
    // Razorpay signature = HMAC-SHA256(order_id + "|" + payment_id, key_secret)
    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex')

    const isValid = expectedSignature === razorpay_signature

    if (!isValid) {
      console.error('[verify-payment] Signature mismatch!', {
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
      })
      return NextResponse.json(
        { success: false, error: 'Payment verification failed. Invalid signature.' },
        { status: 400 }
      )
    }

    // ── 5. Signature valid — return confirmation ──
    return NextResponse.json({
      success: true,
      paymentId:   razorpay_payment_id,
      orderId:     razorpay_order_id,
      bookingMeta: bookingMeta || null,
    })

  } catch (err) {
    console.error('[verify-payment] Error:', err)
    return NextResponse.json(
      { success: false, error: 'Payment verification error. Please contact support.' },
      { status: 500 }
    )
  }
}
