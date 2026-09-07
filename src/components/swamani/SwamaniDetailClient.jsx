'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiArrowLeft, FiCheck } from 'react-icons/fi'
import { swamaniList } from '@/lib/swamaniData'
import { saveBooking } from '@/lib/bookingStorage'
import { useRazorpay } from '@/lib/useRazorpay'
import ReceiptModal from '@/components/receipt/ReceiptModal'
import './SwamaniDetail.css'

export default function SwamaniDetailClient({ item }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', occasion: '', address: '' })
  const [receipt, setReceipt] = useState(null)
  const [payMsg, setPayMsg] = useState('')

  const { initiatePayment, paying } = useRazorpay()

  const handleBook = () => {
    // Validate
    if (!form.name.trim()) { setPayMsg('⚠️ कृपया अपना नाम भरें।'); return }
    const cleanPhone = form.phone.replace(/\D/g, '')
    if (cleanPhone.length !== 10) { setPayMsg('⚠️ कृपया 10 अंकों का मोबाइल नंबर भरें।'); return }
    setPayMsg('⏳ Payment processing...')

    initiatePayment({
      amount:       item.price,
      serviceType:  'swamani',
      serviceName:  item.name,
      customerName: form.name,
      phone:        cleanPhone,

      onSuccess: ({ razorpay_payment_id, razorpay_order_id }) => {
        // Save booking ONLY after server-side verification succeeds
        const booking = saveBooking({
          serviceName:        item.name,
          serviceType:        'swamani',
          amount:             item.price,
          name:               form.name,
          phone:              cleanPhone,
          date:               form.date,
          occasion:           form.occasion,
          address:            form.address,
          icon:               item.icon,
          paymentStatus:      'paid',
          paymentVerified:    true,
          razorpayOrderId:    razorpay_order_id,
          razorpayPaymentId:  razorpay_payment_id,
          status:             'Confirmed',
        })
        setPayMsg('')
        setReceipt(booking)
      },

      onFailure: (msg) => {
        setPayMsg(`❌ Payment failed: ${msg}`)
      },

      onCancel: () => {
        setPayMsg('⚠️ Payment cancelled. आपकी booking अभी confirm नहीं हुई है।')
      },
    })
  }

  const others = swamaniList.filter(s => s.id !== item.id).slice(0, 4)

  return (
    <div className="sd-page">
      {receipt && <ReceiptModal booking={receipt} onClose={() => setReceipt(null)} />}
      {/* Back Nav */}
      <div className="sd-topbar">
        <div className="container sd-topbar-inner">
          <Link href="/swamani" className="sd-back">
            <FiArrowLeft /> सभी स्वामणी
          </Link>
          <div className="sd-breadcrumb hindi-text">
            <Link href="/">होम</Link> / <Link href="/swamani">स्वामणी</Link> / <span>{item.name}</span>
          </div>
        </div>
      </div>

      <div className="container sd-container">
        <div className="sd-main-grid">
          {/* Left — Image + Info */}
          <div className="sd-left">
            <div className="sd-img-box">
              {item.special && <span className="sd-special-ribbon hindi-text">⭐ सर्वश्रेष्ठ</span>}
              <img src={item.img} alt={item.name} className="sd-hero-img"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
              <div className="sd-img-fallback" style={{ display: 'none' }}>
                <span className="sd-fallback-icon">{item.icon}</span>
              </div>
              <div className="sd-img-tag hindi-text">{item.tag}</div>
            </div>

            <div className="sd-title-box">
              <h1 className="hindi-text sd-title">{item.name}</h1>
              <p className="sd-name-en">{item.nameEn} — Khatu Shyam Ji Swamani Bhog</p>
              <div className="sd-price-row">
                <span className="sd-price">₹{item.price.toLocaleString('hi-IN')}</span>
                <span className="hindi-text sd-per">प्रति भोग</span>
              </div>
            </div>

            <div className="card sd-desc-card">
              <h2 className="hindi-text sd-section-title">📖 विवरण</h2>
              <p className="hindi-text sd-full-desc">{item.fullDesc}</p>
            </div>

            <div className="card sd-includes-card">
              <h2 className="hindi-text sd-section-title">🧾 भोग में क्या शामिल है?</h2>
              <div className="sd-includes-grid">
                {item.includes.map((inc, i) => (
                  <div key={i} className="sd-include-item">
                    <FiCheck className="sd-check" />
                    <span className="hindi-text">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card sd-process-card">
              <h2 className="hindi-text sd-section-title">📋 बुकिंग प्रक्रिया</h2>
              <div className="sd-steps">
                {item.process.map((step, i) => (
                  <div key={i} className="sd-step">
                    <span className="sd-step-num">{i + 1}</span>
                    <span className="hindi-text">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card sd-meta-card">
              <div className="sd-meta-row">
                <span className="hindi-text sd-meta-label">⏰ भोग का समय</span>
                <span className="hindi-text sd-meta-val">{item.timing}</span>
              </div>
              <div className="sd-meta-row">
                <span className="hindi-text sd-meta-label">🏠 प्रसाद Delivery</span>
                <span className="hindi-text sd-meta-val">{item.delivery}</span>
              </div>
              <div className="sd-meta-row">
                <span className="hindi-text sd-meta-label">🧾 Receipt/Certificate</span>
                <span className="hindi-text sd-meta-val">{item.cert}</span>
              </div>
              <div className="sd-meta-row">
                <span className="hindi-text sd-meta-label">📞 Support</span>
                <a href="tel:9929975116" className="sd-meta-link">9929975116</a>
              </div>
            </div>
          </div>

          {/* Right — Booking Form */}
          <div className="sd-right">
            <div className="sd-booking-card card">
              <div className="sd-booking-header">
                <span className="sd-booking-icon">{item.icon}</span>
                <div>
                  <h3 className="hindi-text sd-booking-title">बुकिंग करें</h3>
                  <p className="hindi-text sd-booking-price">₹{item.price.toLocaleString('hi-IN')}</p>
                </div>
              </div>

              {!receipt ? (
                <div className="sd-form">
                  <div className="sd-field">
                    <label className="hindi-text">आपका नाम *</label>
                    <input type="text" placeholder="पूरा नाम" value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="sd-field">
                    <label className="hindi-text">मोबाइल नंबर *</label>
                    <input type="tel" placeholder="10 अंक" value={form.phone} maxLength={10}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value.replace(/\D/g, '') }))} />
                  </div>
                  <div className="sd-field">
                    <label className="hindi-text">पसंदीदा दिनांक</label>
                    <input type="date" value={form.date}
                      onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
                  </div>
                  <div className="sd-field">
                    <label className="hindi-text">अवसर (वैकल्पिक)</label>
                    <input type="text" placeholder="जन्मदिन, शादी, मनोकामना..." value={form.occasion}
                      onChange={e => setForm(f => ({ ...f, occasion: e.target.value }))} />
                  </div>
                  <div className="sd-field">
                    <label className="hindi-text">Delivery पता (प्रसाद के लिए)</label>
                    <textarea rows={2} placeholder="पूरा घर का पता..." value={form.address}
                      onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
                  </div>

                  {/* Pay message */}
                  {payMsg && (
                    <div className="sd-pay-msg hindi-text"
                      style={{ color: payMsg.startsWith('❌') ? '#ff8888' : payMsg.startsWith('⏳') ? '#D4A017' : '#ffcc44', fontSize: '0.85rem', margin: '4px 0 8px', lineHeight: 1.5 }}>
                      {payMsg}
                    </div>
                  )}

                  <button
                    className="sd-wa-btn hindi-text"
                    onClick={handleBook}
                    disabled={paying || !form.name || !form.phone}
                    style={{ opacity: paying ? 0.7 : 1 }}
                  >
                    {paying ? '⏳ Processing...' : '💳 Pay & Book करें'}
                  </button>
                  <a href="tel:9929975116" className="sd-call-btn">
                    <FiPhone /> 9929975116 पर Call करें
                  </a>

                  <div className="sd-guarantees">
                    <div className="sd-g-item"><FiCheck className="sd-g-icon" /><span className="hindi-text">Secure Online Payment</span></div>
                    <div className="sd-g-item"><FiCheck className="sd-g-icon" /><span className="hindi-text">UPI / Card / Net Banking</span></div>
                    <div className="sd-g-item"><FiCheck className="sd-g-icon" /><span className="hindi-text">Digital Receipt मिलेगी</span></div>
                    <div className="sd-g-item"><FiCheck className="sd-g-icon" /><span className="hindi-text">24/7 Support</span></div>
                  </div>
                </div>
              ) : (
                <div className="sd-success">
                  <div className="sd-success-icon">✅</div>
                  <h4 className="hindi-text">Payment Successful! बुकिंग हो गई!</h4>
                  <p className="hindi-text">Receipt देखें और WhatsApp पर भेजें।</p>
                  <button className="sd-wa-btn hindi-text" onClick={() => setReceipt(receipt)}>Receipt देखें</button>
                  <button className="sd-wa-btn hindi-text" style={{marginTop:8, background:'rgba(255,255,255,0.1)'}}
                    onClick={() => { setReceipt(null); setForm({ name:'', phone:'', date:'', occasion:'', address:'' }) }}>
                    नई बुकिंग
                  </button>
                </div>
              )}
            </div>

            {/* Quick Contact */}
            <div className="card sd-quick-contact">
              <h4 className="hindi-text">📞 तुरंत सम्पर्क करें</h4>
              <a href="tel:9929975116" className="sd-qc-call"><FiPhone /> 9929975116</a>
              <a href={`https://wa.me/919929975116?text=${encodeURIComponent(`स्वामणी बुकिंग — ${item.name}`)}`}
                className="sd-qc-wa" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> <span className="hindi-text">WhatsApp करें</span>
              </a>
              <p className="hindi-text sd-qc-note">सुबह 6 बजे – रात 10 बजे</p>
            </div>
          </div>
        </div>

        {/* Other Swamani */}
        <div className="sd-others-section">
          <h2 className="section-title hindi-text">और स्वामणी देखें</h2>
          <div className="divider"><span>👑</span></div>
          <div className="sd-others-grid">
            {others.map(other => (
              <Link key={other.id} href={`/swamani/${other.slug}`} className="sd-other-card card">
                <div className="sd-other-img">
                  <img src={other.img} alt={other.name}
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                  <div className="sd-other-fb" style={{ display: 'none' }}><span>{other.icon}</span></div>
                </div>
                <div className="sd-other-info">
                  <h4 className="hindi-text">{other.name}</h4>
                  <span className="sd-other-price">₹{other.price.toLocaleString('hi-IN')}</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link href="/swamani" className="btn-secondary hindi-text">सभी 13 स्वामणी देखें →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
