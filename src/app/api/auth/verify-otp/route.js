import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/mongodb'
import OtpSession from '@/models/OtpSession'
import { signSessionToken } from '@/lib/authUtils'

const MAX_VERIFY_ATTEMPTS = 5

export async function POST(request) {
  try {
    const body  = await request.json()
    const phone = String(body.phone || '').replace(/\D/g, '').slice(-10)
    const otp   = String(body.otp || '').trim()

    if (phone.length !== 10) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
    }
    if (!otp || otp.length !== 6) {
      return NextResponse.json({ error: 'Invalid OTP format' }, { status: 400 })
    }

    await connectDB()

    // ── Find the latest unverified OTP for this phone ──
    const session = await OtpSession.findOne({
      phone,
      verified: false,
      expiresAt: { $gt: new Date() },
    }).sort({ createdAt: -1 })

    if (!session) {
      return NextResponse.json(
        { error: 'OTP expired या नहीं मिला। नया OTP मंगाएं।' },
        { status: 400 }
      )
    }

    // ── Brute-force guard ──
    if (session.attempts >= MAX_VERIFY_ATTEMPTS) {
      await session.deleteOne()
      return NextResponse.json(
        { error: 'बहुत ज़्यादा गलत attempts। नया OTP मंगाएं।' },
        { status: 429 }
      )
    }

    // ── Verify OTP ──
    const isMatch = await bcrypt.compare(otp, session.otp)

    if (!isMatch) {
      session.attempts += 1
      await session.save()
      const remaining = MAX_VERIFY_ATTEMPTS - session.attempts
      return NextResponse.json(
        { error: `गलत OTP। ${remaining} कोशिश बची हैं।` },
        { status: 400 }
      )
    }

    // ── OTP correct — mark verified, issue JWT ──
    session.verified = true
    await session.save()

    const token = signSessionToken(phone)

    return NextResponse.json({
      success: true,
      token,
      phone,
      expiresIn: '30d',
    })

  } catch (err) {
    console.error('[verify-otp] Error:', err)
    return NextResponse.json(
      { error: 'Verification failed. दोबारा कोशिश करें।' },
      { status: 500 }
    )
  }
}
