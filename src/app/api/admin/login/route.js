import { NextResponse } from 'next/server'
import { signAdminToken } from '@/lib/authUtils'

export async function POST(request) {
  try {
    const body = await request.json()
    const { phone, password } = body

    if (!phone || !password) {
      return NextResponse.json({ error: 'Phone and password required' }, { status: 400 })
    }

    const cleanPhone   = String(phone).replace(/\D/g, '').slice(-10)
    const ownerPhone   = (process.env.OWNER_PHONE   || '8302019637').replace(/\D/g, '')
    const adminPass    = process.env.ADMIN_PASSWORD

    if (!adminPass || adminPass.includes('REPLACE')) {
      return NextResponse.json({ error: 'Admin password not configured. Set ADMIN_PASSWORD in .env.local' }, { status: 503 })
    }

    // ── Validate owner phone ──
    if (cleanPhone !== ownerPhone) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // ── Validate password (constant-time comparison) ──
    const crypto = await import('crypto')
    const inputBuf  = Buffer.from(password)
    const adminBuf  = Buffer.from(adminPass)

    // Padding to same length for timing-safe compare
    const maxLen = Math.max(inputBuf.length, adminBuf.length)
    const a = Buffer.alloc(maxLen); inputBuf.copy(a)
    const b = Buffer.alloc(maxLen); adminBuf.copy(b)

    const valid = crypto.timingSafeEqual(a, b)

    if (!valid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const token = signAdminToken(cleanPhone)

    return NextResponse.json({
      success: true,
      token,
      expiresIn: '7d',
    })

  } catch (err) {
    console.error('[admin/login] Error:', err)
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}
