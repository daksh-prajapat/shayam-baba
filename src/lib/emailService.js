// ── Email Service using Resend ───────────────────────────────────────────────
// Get free API key at https://resend.com (3000 emails/month free)

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM_EMAIL  = process.env.EMAIL_FROM    || 'noreply@khatushyamji.in'
const OWNER_EMAIL = process.env.OWNER_EMAIL   || 'owner@khatushyamji.in'

// ── Helper: format amount ──
const fmt = (n) => `₹${Number(n).toLocaleString('hi-IN')}`

// ── Customer booking confirmation email ──
export async function sendBookingConfirmation(booking) {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.includes('REPLACE')) {
    console.log('[Email] Resend not configured — skipping customer email')
    return
  }

  const subject = `✅ बुकिंग Confirmed — ${booking.bookingId} | खाटू श्याम जी`

  const html = `
<!DOCTYPE html>
<html lang="hi">
<head><meta charset="UTF-8"><style>
  body { font-family: Arial, sans-serif; background: #0d0514; color: #e0d0f0; margin: 0; padding: 0; }
  .wrap { max-width: 600px; margin: 0 auto; background: #1a0a24; border: 1px solid rgba(212,160,23,0.3); border-radius: 12px; overflow: hidden; }
  .header { background: linear-gradient(135deg, #7B2D8B, #D4A017); padding: 28px 32px; text-align: center; }
  .header h1 { color: #fff; margin: 0; font-size: 1.4rem; }
  .header p  { color: rgba(255,255,255,0.85); margin: 6px 0 0; }
  .body { padding: 28px 32px; }
  .bid { background: rgba(212,160,23,0.12); border: 1px solid rgba(212,160,23,0.4); border-radius: 8px; padding: 12px 18px; text-align: center; margin-bottom: 24px; }
  .bid strong { color: #D4A017; font-size: 1.2rem; letter-spacing: 1px; }
  .row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .row:last-child { border-bottom: none; }
  .label { color: #aaa; font-size: 0.88rem; }
  .value { color: #e0d0f0; font-weight: 600; font-size: 0.92rem; }
  .amount { background: rgba(37,211,102,0.1); border: 1px solid rgba(37,211,102,0.3); border-radius: 8px; padding: 14px 18px; text-align: center; margin: 20px 0; }
  .amount .price { color: #25d366; font-size: 1.6rem; font-weight: 700; }
  .cta { text-align: center; margin-top: 24px; }
  .cta a { background: #D4A017; color: #000; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; }
  .footer { background: rgba(0,0,0,0.3); padding: 18px 32px; text-align: center; color: #777; font-size: 0.8rem; }
</style></head>
<body>
<div class="wrap">
  <div class="header">
    <h1>🛕 खाटू श्याम जी</h1>
    <p>आपकी बुकिंग Confirmed हो गई — जय श्री श्याम!</p>
  </div>
  <div class="body">
    <div class="bid">
      <div style="color:#aaa;font-size:0.82rem;margin-bottom:4px">Booking ID</div>
      <strong>${booking.bookingId}</strong>
    </div>
    <div class="row"><span class="label">नाम</span><span class="value">${booking.name}</span></div>
    <div class="row"><span class="label">मोबाइल</span><span class="value">${booking.phone}</span></div>
    <div class="row"><span class="label">सेवा</span><span class="value">${booking.serviceName}</span></div>
    <div class="row"><span class="label">प्रकार</span><span class="value">${booking.serviceType}</span></div>
    ${booking.date ? `<div class="row"><span class="label">तारीख</span><span class="value">${booking.date}</span></div>` : ''}
    ${booking.occasion ? `<div class="row"><span class="label">अवसर</span><span class="value">${booking.occasion}</span></div>` : ''}
    <div class="row"><span class="label">Status</span><span class="value" style="color:#25d366">✅ ${booking.status}</span></div>
    <div class="amount">
      <div style="color:#aaa;font-size:0.82rem;margin-bottom:4px">कुल राशि</div>
      <div class="price">${fmt(booking.amount)}</div>
      <div style="color:#25d366;font-size:0.8rem;margin-top:4px">Payment Verified ✓</div>
    </div>
    <div class="cta">
      <a href="https://wa.me/918302019637?text=Booking ID: ${booking.bookingId}">WhatsApp पर सम्पर्क करें</a>
    </div>
    <p style="color:#aaa;font-size:0.82rem;margin-top:20px;text-align:center">
      किसी भी सवाल के लिए Call करें: <a href="tel:8302019637" style="color:#D4A017">8302019637</a>
    </p>
  </div>
  <div class="footer">
    खाटू श्याम जी — हारे का सहारा, बाबा श्याम हमारा 🙏<br>
    यह एक automated email है।
  </div>
</div>
</body></html>`

  await resend.emails.send({
    from:    FROM_EMAIL,
    to:      booking.email,
    subject,
    html,
  })
}

// ── Owner WhatsApp notification via WhatsApp API / direct link ──
// Yeh ek server-side WhatsApp message bhejta hai owner ko
// (Uses CallMeBot free API — owner ko pehle activate karna hoga)
export async function sendOwnerWhatsApp(booking) {
  const apiKey  = process.env.CALLMEBOT_API_KEY
  const phone   = process.env.OWNER_PHONE || '8302019637'

  if (!apiKey || apiKey.includes('REPLACE')) {
    // Log to console if not configured
    console.log(`[WhatsApp - NOT CONFIGURED] New booking: ${booking.bookingId} | ${booking.name} | ₹${booking.amount}`)
    return
  }

  const msg = encodeURIComponent(
    `🔔 नई बुकिंग!\n` +
    `ID: ${booking.bookingId}\n` +
    `नाम: ${booking.name}\n` +
    `Phone: ${booking.phone}\n` +
    `सेवा: ${booking.serviceName}\n` +
    `राशि: ₹${booking.amount}\n` +
    `Payment: ${booking.paymentVerified ? '✅ PAID' : '⏳ Pending'}`
  )

  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${msg}&apikey=${apiKey}`
  const res = await fetch(url)
  if (!res.ok) {
    console.error('[WhatsApp] CallMeBot error:', await res.text())
  }
}
export async function sendOwnerAlert(booking) {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.includes('REPLACE')) {
    console.log('[Email] Resend not configured — skipping owner alert')
    return
  }

  const subject = `🔔 नई बुकिंग: ${booking.bookingId} — ${booking.serviceName} (${fmt(booking.amount)})`

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  body { font-family: Arial, sans-serif; background: #f5f5f5; }
  .wrap { max-width: 520px; margin: 20px auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.1); }
  .header { background: #7B2D8B; color: #fff; padding: 20px 24px; }
  .header h2 { margin: 0; font-size: 1.1rem; }
  .body { padding: 20px 24px; }
  .row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
  .label { color: #777; font-size: 0.85rem; }
  .value { font-weight: 600; color: #222; font-size: 0.9rem; }
  .paid { color: #25d366; }
  .pending { color: #f57c00; }
</style></head>
<body>
<div class="wrap">
  <div class="header"><h2>🔔 नई बुकिंग आई — ${booking.bookingId}</h2></div>
  <div class="body">
    <div class="row"><span class="label">Customer</span><span class="value">${booking.name}</span></div>
    <div class="row"><span class="label">Phone</span><span class="value">${booking.phone}</span></div>
    <div class="row"><span class="label">सेवा</span><span class="value">${booking.serviceName}</span></div>
    <div class="row"><span class="label">Amount</span><span class="value">${fmt(booking.amount)}</span></div>
    <div class="row"><span class="label">Payment</span><span class="value ${booking.paymentVerified ? 'paid' : 'pending'}">${booking.paymentVerified ? '✅ PAID' : '⏳ PENDING'}</span></div>
    ${booking.date ? `<div class="row"><span class="label">Date</span><span class="value">${booking.date}</span></div>` : ''}
    ${booking.occasion ? `<div class="row"><span class="label">Occasion</span><span class="value">${booking.occasion}</span></div>` : ''}
    ${booking.address ? `<div class="row"><span class="label">Address</span><span class="value">${booking.address}</span></div>` : ''}
    <div style="margin-top:16px;text-align:center">
      <a href="https://wa.me/91${booking.phone}?text=नमस्ते ${booking.name} जी! आपकी बुकिंग ${booking.bookingId} confirm हो गई।"
        style="background:#25d366;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:700">
        WhatsApp Customer
      </a>
    </div>
  </div>
</div>
</body></html>`

  await resend.emails.send({
    from:    FROM_EMAIL,
    to:      OWNER_EMAIL,
    subject,
    html,
  })
}
