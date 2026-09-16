import jwt from 'jsonwebtoken'

const SESSION_SECRET = process.env.JWT_SESSION_SECRET || 'khatu-shyam-session-fallback-key-change-this'
const ADMIN_SECRET   = process.env.JWT_ADMIN_SECRET   || 'khatu-shyam-admin-fallback-key-change-this'

// ── User / Customer session token (after OTP verify) ──
export function signSessionToken(phone) {
  return jwt.sign(
    { phone, type: 'session' },
    SESSION_SECRET,
    { expiresIn: '30d' }
  )
}

export function verifySessionToken(token) {
  try {
    const payload = jwt.verify(token, SESSION_SECRET)
    if (payload.type !== 'session') return null
    return payload
  } catch {
    return null
  }
}

// ── Admin token ──
export function signAdminToken(phone) {
  return jwt.sign(
    { phone, type: 'admin', role: 'owner' },
    ADMIN_SECRET,
    { expiresIn: '7d' }
  )
}

export function verifyAdminToken(token) {
  try {
    const payload = jwt.verify(token, ADMIN_SECRET)
    if (payload.type !== 'admin') return null
    return payload
  } catch {
    return null
  }
}
