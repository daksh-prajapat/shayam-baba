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
  const apiKey     = process.env.MSG91_API_KEY
  const templateId = process.env.MSG91_TEMPLATE_ID
  const senderId   = process.env.MSG91_SENDER_ID || 'KHATUS'

  if (!apiKey || apiKey.includes('REPLACE')) {
    // Dev mode — log OTP to console instead of sending SMS
    console.log(`[OTP - DEV MODE] Phone: ${phone} OTP: ${otp}`)
    return { success: true, devMode: true }
  }

  // MSG91 API call
  const url = `https://api.msg91.com/api/v5/otp?template_id=${templateId}&mobile=91${phone}&authkey=${apiKey}&otp=${otp}&sender=${senderId}`
  const res = await fetch(url)
  const data = await res.json()

  if (data.type !== 'success') {
    throw new Error(`MSG91 error: ${JSON.stringify(data)}`)
  }

  return { success: true }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const phone = String(body.phone || '').replace(/\D/g, '').slice(-10)

    if (phone.length !== 10) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
    }

    await connectDB()

    // ── Rate limit: delete old OTPs, check recent count ──
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
    await OtpSession.deleteMany({ phone, verified: false })   // clean previous unverified
    await OtpSession.create({ phone, otp: hashed, expiresAt })

    // ── Send SMS ──
    const smsResult = await sendSmsOtp(phone, otp)

    return NextResponse.json({
      success: true,
      devMode: smsResult.devMode || false,
      message: smsResult.devMode
        ? `Dev mode: OTP is ${otp} (check server console)`
        : `OTP sent to +91 ${phone.slice(0, 5)}XXXXX`,
    })

  } catch (err) {
    console.error('[send-otp] Error:', err)
    return NextResponse.json(
      { error: 'OTP भेजने में समस्या हुई। दोबारा कोशिश करें।' },
      { status: 500 }
    )
  }
}
