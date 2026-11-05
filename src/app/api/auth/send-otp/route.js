import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/mongodb'
import OtpSession from '@/models/OtpSession'

// ── Rate limiting: max 3 OTPs per phone per 10 minutes ──
const OTP_EXPIRY_MINUTES = 10
const MAX_ATTEMPTS = 3

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000))
}

async function sendSmsOtp(phone, otp) {
  const fast2smsKey = process.env.FAST2SMS_API_KEY
  const msg91Key    = process.env.MSG91_API_KEY
  const msg91Tmpl   = process.env.MSG91_TEMPLATE_ID
  const msg91Sender = process.env.MSG91_SENDER_ID || 'KHATUS'

  // ── Try Fast2SMS first (easier setup, free trial) ──
  if (fast2smsKey && !fast2smsKey.includes('REPLACE')) {
    const res = await fetch('https://www.fast2sms.com/dev/bulkV2', {
      method: 'POST',
      headers: {
        authorization: fast2smsKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        route: 'otp',
        variables_values: otp,
        numbers: phone,
      }),
    })
    const data = await res.json()
    if (data.return === true) {
      return { success: true }
    }
    console.error('[Fast2SMS] Error:', data)
    throw new Error(`Fast2SMS error: ${JSON.stringify(data)}`)
  }

  // ── Try MSG91 ──
  if (msg91Key && !msg91Key.includes('REPLACE')) {
    const url = `https://api.msg91.com/api/v5/otp?template_id=${msg91Tmpl}&mobile=91${phone}&authkey=${msg91Key}&otp=${otp}&sender=${msg91Sender}`
    const res = await fetch(url)
    const data = await res.json()
    if (data.type === 'success') {
      return { success: true }
    }
    throw new Error(`MSG91 error: ${JSON.stringify(data)}`)
  }

  // ── Dev mode — no SMS keys configured ──
  console.log(`\n========================================`)
  console.log(`[OTP - DEV MODE]`)
  console.log(`Phone: ${phone}`)
  console.log(`OTP:   ${otp}`)
  console.log(`========================================\n`)
  return { success: true, devMode: true, otp }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const phone = String(body.phone || '').replace(/\D/g, '').slice(-10)

    if (phone.length !== 10) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
    }

    await connectDB()

    // ── Rate limit: check recent count ──
    const tenMinsAgo = new Date(Date.now() - OTP_EXPIRY_MINUTES * 60 * 1000)
    const recentCount = await OtpSession.countDocuments({
      phone,
      createdAt: { $gte: tenMinsAgo },
    })

    if (recentCount >= MAX_ATTEMPTS) {
      return NextResponse.json(
        { error: `बहुत ज़्यादा OTP request। ${OTP_EXPIRY_MINUTES} मिनट बाद दोबारा कोशिश करें।` },
        { status: 429 }
      )
    }

    // ── Generate + hash OTP ──
    const otp = generateOtp()
    const hashed = await bcrypt.hash(otp, 10)
    const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000)

    // ── Save to DB ──
    await OtpSession.deleteMany({ phone, verified: false })
    await OtpSession.create({ phone, otp: hashed, expiresAt })

    // ── Send SMS ──
    const smsResult = await sendSmsOtp(phone, otp)

    // Dev mode mein OTP response mein bhejo (sirf development)
    const isDev = process.env.NODE_ENV !== 'production' && smsResult.devMode

    return NextResponse.json({
      success: true,
      devMode: isDev,
      // Sirf dev mein OTP response mein aayega, production mein nahi
      ...(isDev && { devOtp: smsResult.otp }),
      message: isDev
        ? `Dev mode: OTP is ${smsResult.otp} (SMS keys not configured in .env.local)`
        : `OTP +91-${phone.slice(0, 5)}XXXXX pe bheja gaya`,
    })

  } catch (err) {
    console.error('[send-otp] Error:', err)
    return NextResponse.json(
      { error: 'OTP भेजने में समस्या हुई। दोबारा कोशिश करें।' },
      { status: 500 }
    )
  }
}
