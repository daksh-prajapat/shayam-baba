'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiArrowLeft, FiCheck, FiEdit3 } from 'react-icons/fi'
import { prasadList } from '@/lib/prasadData'
import { saveBooking } from '@/lib/bookingStorage'
import ReceiptModal from '@/components/receipt/ReceiptModal'
import './PrasadDetail.css'

export default function PrasadDetailClient({ item }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', occasion: '', address: '' })
  const [receipt, setReceipt] = useState(null)
  const [customForm, setCustomForm] = useState({ name: '', phone: '', details: '', date: '', occasion: '', address: '' })
  const [customOpen, setCustomOpen] = useState(false)
  const [customDone, setCustomDone] = useState(false)

  const handleCustomBook = () => {
    const booking = saveBooking({
      serviceName: `कस्टम प्रसाद — ${customForm.details.slice(0, 40)}`,
      serviceType: 'prasad',
      amount: 0,
      name: customForm.name,
      phone: customForm.phone,
      date: customForm.date,
      occasion: customForm.occasion,
      address: customForm.address,
      icon: '✏️',
      note: customForm.details,
    })
    setCustomDone(true)
    const msg = `🙏 *जय श्री श्याम*%0A%0A✏️ *कस्टम प्रसाद बुकिंग*%0A%0A🔖 Booking ID: *${booking.id}*%0A📌 विवरण: *${customForm.details}*%0A%0A👤 नाम: *${customForm.name}*%0A📞 फोन: *${customForm.phone}*%0A${customForm.date ? `📅 दिनांक: *${customForm.date}*%0A` : ''}${customForm.occasion ? `🎊 अवसर: *${customForm.occasion}*%0A` : ''}${customForm.address ? `🏠 पता: *${customForm.address}*%0A` : ''}%0Aकृपया confirm करें। 🙏`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
  }

  const handleBook = () => {
    // Save to localStorage
    const booking = saveBooking({
      serviceName: item.name,
      serviceType: 'prasad',
      amount: item.price,
      name: form.name,
      phone: form.phone,
      date: form.date,
      occasion: form.occasion,
      address: form.address,
      icon: item.icon,
    })
    setReceipt(booking)

    // WhatsApp message
    const msg = `🙏 *जय श्री श्याम*%0A%0A🍯 *प्रसाद बुकिंग*%0A%0A🔖 Booking ID: *${booking.id}*%0A📌 प्रसाद: *${item.name}*%0A💰 मूल्य: *₹${item.price}*%0A%0A👤 नाम: *${form.name}*%0A📞 फोन: *${form.phone}*%0A${form.date ? `📅 दिनांक: *${form.date}*%0A` : ''}${form.occasion ? `🎊 अवसर: *${form.occasion}*%0A` : ''}${form.address ? `🏠 पता: *${form.address}*%0A` : ''}%0Aकृपया बुकिंग confirm करें। 🙏`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
  }

  const others = prasadList.filter(p => p.id !== item.id).slice(0, 4)

  return (
    <div className="pd-page">
      {/* Receipt Modal */}
      {receipt && <ReceiptModal booking={receipt} onClose={() => setReceipt(null)} />}
      <div className="pd-topbar">
        <div className="container pd-topbar-inner">
          <Link href="/prasad-puja" className="pd-back">
            <FiArrowLeft /> सभी प्रसाद
          </Link>
          <div className="pd-breadcrumb hindi-text">
            <Link href="/">होम</Link> / <Link href="/prasad-puja">प्रसाद</Link> / <span>{item.name}</span>
          </div>
        </div>
      </div>

      <div className="container pd-container">
        <div className="pd-main-grid">

          {/* Left */}
          <div className="pd-left">
            {/* Image */}
            <div className="pd-img-box">
              {item.special && <span className="pd-special-ribbon hindi-text">⭐ सर्वश्रेष्ठ</span>}
              <img src={item.img} alt={item.name} className="pd-hero-img"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
              <div className="pd-img-fallback" style={{ display: 'none' }}>
                <span className="pd-fallback-icon">{item.icon}</span>
              </div>
              <div className="pd-img-tag hindi-text">{item.tag}</div>
            </div>

            {/* Title */}
            <div className="pd-title-box">
              <h1 className="hindi-text pd-title">{item.name}</h1>
              <p className="pd-name-en">{item.nameEn} — Khatu Shyam Ji Prasad Booking</p>
              <div className="pd-price-row">
                <span className="pd-price">₹{item.price}</span>
                <span className="hindi-text pd-per">प्रति थाली</span>
              </div>
            </div>

            {/* Description */}
            <div className="card pd-desc-card">
              <h2 className="hindi-text pd-section-title">📖 विवरण</h2>
              <p className="hindi-text pd-full-desc">{item.fullDesc}</p>
            </div>

            {/* Includes */}
            <div className="card pd-includes-card">
              <h2 className="hindi-text pd-section-title">🧺 इसमें शामिल है</h2>
              <div className="pd-includes-grid">
                {item.includes.map((inc, i) => (
                  <div key={i} className="pd-include-item">
                    <FiCheck className="pd-check" />
                    <span className="hindi-text">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="card pd-process-card">
              <h2 className="hindi-text pd-section-title">📋 बुकिंग प्रक्रिया</h2>
              <div className="pd-steps">
                {item.process.map((step, i) => (
                  <div key={i} className="pd-step">
                    <span className="pd-step-num">{i + 1}</span>
                    <span className="hindi-text">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Meta */}
            <div className="card pd-meta-card">
              <div className="pd-meta-row">
                <span className="hindi-text pd-meta-label">⏰ अर्पण समय</span>
                <span className="hindi-text pd-meta-val">{item.timing}</span>
              </div>
              <div className="pd-meta-row">
                <span className="hindi-text pd-meta-label">📸 Photo/Video</span>
                <span className="hindi-text pd-meta-val">{item.delivery}</span>
              </div>
              <div className="pd-meta-row">
                <span className="hindi-text pd-meta-label">🧾 Receipt</span>
                <span className="hindi-text pd-meta-val">{item.cert}</span>
              </div>
              <div className="pd-meta-row">
                <span className="hindi-text pd-meta-label">📞 Support</span>
                <a href="tel:9929975116" className="pd-meta-link">9929975116</a>
              </div>
            </div>
          </div>

          {/* Right - Booking */}
          <div className="pd-right">
            <div className="pd-booking-card card">
              <div className="pd-booking-header">
                <span className="pd-booking-icon">{item.icon}</span>
                <div>
                  <h3 className="hindi-text pd-booking-title">बुकिंग करें</h3>
                  <p className="hindi-text pd-booking-price">₹{item.price}</p>
                </div>
              </div>

              {!receipt ? (
                <div className="pd-form">
                  <div className="pd-field">
                    <label className="hindi-text">आपका नाम *</label>
                    <input type="text" placeholder="पूरा नाम" value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="pd-field">
                    <label className="hindi-text">मोबाइल नंबर *</label>
                    <input type="tel" placeholder="10 अंक" value={form.phone} maxLength={10}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  </div>
                  <div className="pd-field">
                    <label className="hindi-text">पसंदीदा दिनांक</label>
                    <input type="date" value={form.date}
                      onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
                  </div>
                  <div className="pd-field">
                    <label className="hindi-text">अवसर (वैकल्पिक)</label>
                    <input type="text" placeholder="जन्मदिन, मनोकामना..." value={form.occasion}
                      onChange={e => setForm(f => ({ ...f, occasion: e.target.value }))} />
                  </div>
                  <div className="pd-field">
                    <label className="hindi-text">पता (प्रसाद delivery के लिए)</label>
                    <textarea rows={2} placeholder="घर का पता..." value={form.address}
                      onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
                  </div>

                  <button className="pd-wa-btn hindi-text" onClick={handleBook}
                    disabled={!form.name || !form.phone}>
                    <FaWhatsapp /> WhatsApp पर बुकिंग करें
                  </button>
                  <a href="tel:9929975116" className="pd-call-btn">
                    <FiPhone /> 9929975116 पर Call करें
                  </a>

                  <div className="pd-guarantees">
                    <div className="pd-g-item"><FiCheck className="pd-g-icon" /><span className="hindi-text">WhatsApp Confirmation</span></div>
                    <div className="pd-g-item"><FiCheck className="pd-g-icon" /><span className="hindi-text">Digital Receipt मिलेगी</span></div>
                    <div className="pd-g-item"><FiCheck className="pd-g-icon" /><span className="hindi-text">Photo/Video भेजी जाएगी</span></div>
                    <div className="pd-g-item"><FiCheck className="pd-g-icon" /><span className="hindi-text">24/7 Support</span></div>
                  </div>
                </div>
              ) : (
                <div className="pd-success">
                  <div className="pd-success-icon">✅</div>
                  <h4 className="hindi-text">बुकिंग हो गई!</h4>
                  <p className="hindi-text">Receipt देखें और WhatsApp पर भेजें।</p>
                  <button className="pd-wa-btn hindi-text" onClick={() => setReceipt(receipt)}>Receipt देखें</button>
                  <button className="pd-call-btn" style={{marginTop:8}} onClick={() => setReceipt(null)}>नई बुकिंग</button>
                </div>
              )}
            </div>

            {/* Quick Contact */}
            <div className="card pd-quick-contact">
              <h4 className="hindi-text">📞 तुरंत सम्पर्क करें</h4>
              <a href="tel:9929975116" className="pd-qc-call"><FiPhone /> 9929975116</a>
              <a href={`https://wa.me/919929975116?text=${encodeURIComponent(`प्रसाद बुकिंग — ${item.name}`)}`}
                className="pd-qc-wa" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> <span className="hindi-text">WhatsApp करें</span>
              </a>
              <p className="hindi-text pd-qc-note">सुबह 6 बजे – रात 10 बजे</p>
            </div>

            {/* Custom / Other Booking */}
            <div className="card pd-custom-card">
              <button className="pd-custom-toggle" onClick={() => setCustomOpen(o => !o)}>
                <span className="pd-custom-toggle-left">
                  <FiEdit3 className="pd-custom-icon" />
                  <span>
                    <strong className="hindi-text">कुछ और चाहिए?</strong>
                    <small className="hindi-text">अपनी मनपसंद चीज़ बुक करें</small>
                  </span>
                </span>
                <span className="pd-custom-chevron">{customOpen ? '▲' : '▼'}</span>
              </button>

              {customOpen && (
                <div className="pd-custom-body">
                  {!customDone ? (
                    <>
                      <p className="hindi-text pd-custom-hint">
                        ऊपर दिए गए प्रसाद के अलावा कुछ और चाहिए? — नीचे लिखें, हम arrange करेंगे।
                      </p>
                      <div className="pd-field">
                        <label className="hindi-text">क्या चाहिए? (विवरण) *</label>
                        <textarea rows={3} placeholder="जैसे: विशेष लड्डू, मोरछड़ी, विशेष पूजा सामग्री..." value={customForm.details}
                          onChange={e => setCustomForm(f => ({ ...f, details: e.target.value }))} />
                      </div>
                      <div className="pd-field">
                        <label className="hindi-text">आपका नाम *</label>
                        <input type="text" placeholder="पूरा नाम" value={customForm.name}
                          onChange={e => setCustomForm(f => ({ ...f, name: e.target.value }))} />
                      </div>
                      <div className="pd-field">
                        <label className="hindi-text">मोबाइल नंबर *</label>
                        <input type="tel" placeholder="10 अंक" maxLength={10} value={customForm.phone}
                          onChange={e => setCustomForm(f => ({ ...f, phone: e.target.value }))} />
                      </div>
                      <div className="pd-field">
                        <label className="hindi-text">पसंदीदा दिनांक</label>
                        <input type="date" value={customForm.date}
                          onChange={e => setCustomForm(f => ({ ...f, date: e.target.value }))} />
                      </div>
                      <div className="pd-field">
                        <label className="hindi-text">अवसर (वैकल्पिक)</label>
                        <input type="text" placeholder="जन्मदिन, मनोकामना..." value={customForm.occasion}
                          onChange={e => setCustomForm(f => ({ ...f, occasion: e.target.value }))} />
                      </div>
                      <div className="pd-field">
                        <label className="hindi-text">पता (delivery के लिए)</label>
                        <textarea rows={2} placeholder="घर का पता..." value={customForm.address}
                          onChange={e => setCustomForm(f => ({ ...f, address: e.target.value }))} />
                      </div>
                      <button className="pd-wa-btn hindi-text" style={{ marginTop: 4 }}
                        onClick={handleCustomBook}
                        disabled={!customForm.name || !customForm.phone || !customForm.details}>
                        <FaWhatsapp /> WhatsApp पर भेजें
                      </button>
                    </>
                  ) : (
                    <div className="pd-custom-done">
                      <span className="pd-custom-done-icon">✅</span>
                      <p className="hindi-text">बुकिंग request भेज दी! हम जल्द संपर्क करेंगे।</p>
                      <button className="pd-call-btn" onClick={() => { setCustomDone(false); setCustomForm({ name:'', phone:'', details:'', date:'', occasion:'', address:'' }) }}>
                        नई request
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Other Prasad */}
        <div className="pd-others-section">
          <h2 className="section-title hindi-text">और प्रसाद देखें</h2>
          <div className="divider"><span>🙏</span></div>
          <div className="pd-others-grid">
            {others.map(other => (
              <Link key={other.id} href={`/prasad-puja/${other.slug}`} className="pd-other-card card">
                <div className="pd-other-img">
                  <img src={other.img} alt={other.name}
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                  <div className="pd-other-fb" style={{ display: 'none' }}><span>{other.icon}</span></div>
                </div>
                <div className="pd-other-info">
                  <h4 className="hindi-text">{other.name}</h4>
                  <span className="pd-other-price">₹{other.price}</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link href="/prasad-puja" className="btn-secondary hindi-text">सभी प्रसाद देखें →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
