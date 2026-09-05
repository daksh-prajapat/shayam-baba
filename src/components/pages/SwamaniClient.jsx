'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiArrowRight, FiEdit3, FiCheck } from 'react-icons/fi'
import { swamaniList } from '@/lib/swamaniData'
import { saveBooking } from '@/lib/bookingStorage'
import './Swamani.css'

export default function SwamaniClient() {
  const [customForm, setCustomForm] = useState({ name: '', phone: '', details: '', date: '', occasion: '', address: '' })
  const [customDone, setCustomDone] = useState(false)
  const [customOpen, setCustomOpen] = useState(false)

  const handleBook = (e, item) => {
    e.preventDefault()
    e.stopPropagation()
    const msg = `🙏 नमस्ते! स्वामणी बुकिंग करनी है।%0A%0A👑 स्वामणी: ${item.name}%0A💰 मूल्य: ₹${item.price.toLocaleString('hi-IN')}%0A%0Aकृपया बुकिंग की जानकारी दें।`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
  }

  const handleCustomBook = (e) => {
    e.preventDefault()
    const booking = saveBooking({
      serviceName: `कस्टम स्वामणी — ${customForm.details.slice(0, 40)}`,
      serviceType: 'swamani',
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
    const msg = `🙏 *जय श्री श्याम*%0A%0A✏️ *कस्टम स्वामणी / विशेष बुकिंग*%0A%0A🔖 Booking ID: *${booking.id}*%0A📌 विवरण: *${customForm.details}*%0A%0A👤 नाम: *${customForm.name}*%0A📞 फोन: *${customForm.phone}*%0A${customForm.date ? `📅 दिनांक: *${customForm.date}*%0A` : ''}${customForm.occasion ? `🎊 अवसर: *${customForm.occasion}*%0A` : ''}${customForm.address ? `🏠 पता: *${customForm.address}*%0A` : ''}%0Aकृपया confirm करें। 🙏`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
  }

  return (
    <div className="swamani-page">
      {/* Hero */}
      <div className="swamani-hero">
        <div className="swamani-hero-overlay"></div>
        <div className="container swamani-hero-content">
          <div className="swamani-hero-badge hindi-text">👑 खाटू श्याम जी</div>
          <h1 className="hindi-text">स्वामणी भोग सेवा</h1>
          <p className="hindi-text swamani-hero-sub">बाबा श्याम को भोग चढ़ाएं — घर बैठे Online बुकिंग</p>
          <div className="swamani-hero-info">
            <span className="hindi-text">📌 घर बैठे Online बुकिंग</span>
            <span className="hindi-text">🙏 बाबा को भोग चढ़ाएं</span>
            <span className="hindi-text">🏠 प्रसाद घर पहुंचाएं</span>
          </div>
          <div className="swamani-hero-btns">
            <a href="tel:9929975116" className="sh-call-btn"><FiPhone /> 9929975116</a>
            <a href="https://wa.me/919929975116?text=स्वामणी बुकिंग करनी है" target="_blank" rel="noopener noreferrer" className="sh-wa-btn">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp करें</span>
            </a>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="swamani-info-strip">
        <div className="container">
          <p className="hindi-text">📌 किसी भी स्वामणी पर क्लिक करें — पूरी जानकारी देखें और बुकिंग करें।</p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="container swamani-container">
        <h2 className="section-title hindi-text">स्वामणी भोग सूची</h2>
        <div className="divider"><span>👑</span></div>

        <div className="swamani-cards-grid">
          {swamaniList.map((item) => (
            <Link
              key={item.id}
              href={`/swamani/${item.slug}`}
              className={`swamani-card ${item.special ? 'special-card' : ''}`}
            >
              {item.special && <div className="special-ribbon hindi-text">⭐ सर्वश्रेष्ठ</div>}

              {/* Image */}
              <div className="swamani-card-top">
                <div className="swamani-card-img">
                  <img src={item.img} alt={item.name} loading="lazy"
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                  <div className="swamani-img-fallback" style={{ display: 'none' }}>
                    <span>{item.icon}</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="swamani-card-overlay">
                    <span className="hindi-text">विवरण देखें →</span>
                  </div>
                </div>
                <div className="swamani-card-num">{String(item.id).padStart(2, '0')}</div>
              </div>

              {/* Body */}
              <div className="swamani-card-body">
                <h3 className="hindi-text swamani-item-name">{item.name}</h3>
                <p className="hindi-text swamani-item-desc">{item.desc}</p>
                <div className="swamani-price-row">
                  <span className="swamani-price">₹{item.price.toLocaleString('hi-IN')}</span>
                  <span className="swamani-view-detail hindi-text">विवरण <FiArrowRight /></span>
                </div>
              </div>

              {/* Actions */}
              <div className="swamani-card-actions">
                <button
                  className="swamani-book-btn hindi-text"
                  onClick={(e) => handleBook(e, item)}
                >
                  <FaWhatsapp /> अभी बुक करें
                </button>
                <button
                  className="swamani-call-btn"
                  onClick={e => { e.preventDefault(); e.stopPropagation(); window.location.href = 'tel:9929975116' }}
                  aria-label="Call">
                  <FiPhone />
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Price Table */}
        <div className="swamani-price-table-section">
          <h2 className="section-title hindi-text">मूल्य सूची</h2>
          <div className="divider"><span>💰</span></div>
          <div className="price-table-box">
            <div className="pt-header">
              <span className="hindi-text">क्र.</span>
              <span className="hindi-text">स्वामणी का नाम</span>
              <span className="hindi-text">मूल्य</span>
              <span className="hindi-text">बुकिंग</span>
            </div>
            {swamaniList.map((item) => (
              <div key={item.id} className={`pt-row ${item.special ? 'pt-special' : ''}`}>
                <span className="pt-num hindi-text">{item.id}</span>
                <Link href={`/swamani/${item.slug}`} className="pt-name hindi-text" style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.icon} {item.name}
                </Link>
                <span className="pt-price">₹{item.price.toLocaleString('hi-IN')}</span>
                <button className="pt-book-btn" onClick={() => {
                  const msg = `🙏 स्वामणी बुकिंग — ${item.name} ₹${item.price}`
                  window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
                }}>
                  <FaWhatsapp />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Custom / Other Booking Section */}
        <div className="swamani-custom-section">
          <button className="swamani-custom-header" onClick={() => setCustomOpen(o => !o)}>
            <span className="swamani-custom-header-left">
              <FiEdit3 className="swamani-custom-icon" />
              <span>
                <strong className="hindi-text">कुछ और बुक करें?</strong>
                <small className="hindi-text">ऊपर दी सूची के अलावा कोई विशेष भोग / सेवा चाहिए?</small>
              </span>
            </span>
            <span className="swamani-custom-chevron">{customOpen ? '▲' : '▼'}</span>
          </button>

          {customOpen && (
            <div className="swamani-custom-body">
              {!customDone ? (
                <form className="swamani-custom-form" onSubmit={handleCustomBook}>
                  <p className="hindi-text swamani-custom-hint">
                    कोई भी विशेष भोग, पूजा सामग्री, या अन्य सेवा जो list में नहीं है — नीचे लिखें। हम arrange करेंगे।
                  </p>
                  <div className="swamani-custom-grid">
                    <div className="swamani-custom-field">
                      <label className="hindi-text">क्या चाहिए? (विवरण) *</label>
                      <textarea rows={3}
                        placeholder="जैसे: विशेष छप्पन भोग, अपनी पसंद का मेनू, विशेष तारीख पर पूजा..."
                        value={customForm.details}
                        onChange={e => setCustomForm(f => ({ ...f, details: e.target.value }))}
                        required />
                    </div>
                    <div className="swamani-custom-row">
                      <div className="swamani-custom-field">
                        <label className="hindi-text">आपका नाम *</label>
                        <input type="text" placeholder="पूरा नाम"
                          value={customForm.name}
                          onChange={e => setCustomForm(f => ({ ...f, name: e.target.value }))}
                          required />
                      </div>
                      <div className="swamani-custom-field">
                        <label className="hindi-text">मोबाइल नंबर *</label>
                        <input type="tel" placeholder="10 अंक" maxLength={10}
                          value={customForm.phone}
                          onChange={e => setCustomForm(f => ({ ...f, phone: e.target.value }))}
                          required />
                      </div>
                    </div>
                    <div className="swamani-custom-row">
                      <div className="swamani-custom-field">
                        <label className="hindi-text">पसंदीदा दिनांक</label>
                        <input type="date" value={customForm.date}
                          onChange={e => setCustomForm(f => ({ ...f, date: e.target.value }))} />
                      </div>
                      <div className="swamani-custom-field">
                        <label className="hindi-text">अवसर (वैकल्पिक)</label>
                        <input type="text" placeholder="जन्मदिन, मनोकामना..."
                          value={customForm.occasion}
                          onChange={e => setCustomForm(f => ({ ...f, occasion: e.target.value }))} />
                      </div>
                    </div>
                    <div className="swamani-custom-field">
                      <label className="hindi-text">पता (प्रसाद delivery के लिए)</label>
                      <input type="text" placeholder="घर का पता..."
                        value={customForm.address}
                        onChange={e => setCustomForm(f => ({ ...f, address: e.target.value }))} />
                    </div>
                  </div>
                  <div className="swamani-custom-actions">
                    <button type="submit" className="swamani-custom-wa-btn hindi-text">
                      <FaWhatsapp /> WhatsApp पर भेजें
                    </button>
                    <a href="tel:9929975116" className="swamani-custom-call-btn">
                      <FiPhone /> Call करें
                    </a>
                  </div>
                </form>
              ) : (
                <div className="swamani-custom-done">
                  <span>✅</span>
                  <div>
                    <p className="hindi-text">बुकिंग request भेज दी! हम जल्द संपर्क करेंगे।</p>
                    <button className="swamani-custom-reset hindi-text"
                      onClick={() => { setCustomDone(false); setCustomForm({ name:'', phone:'', details:'', date:'', occasion:'', address:'' }) }}>
                      नई request करें
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="swamani-cta-box">
          <div className="swamani-cta-text">
            <h3 className="hindi-text">बुकिंग के लिए सम्पर्क करें</h3>
            <p className="hindi-text">हम 24/7 उपलब्ध हैं। Call या WhatsApp पर बुकिंग करें।</p>
          </div>
          <div className="swamani-cta-btns">
            <a href="tel:9929975116" className="cta-call"><FiPhone /> 9929975116</a>
            <a href="https://wa.me/919929975116?text=स्वामणी भोग बुकिंग करनी है" className="cta-wa"
              target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
