'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiCheck, FiUsers, FiCalendar, FiMapPin, FiEdit3, FiArrowRight } from 'react-icons/fi'
import { bhandaraList } from '@/lib/bhandaraData'
import { saveBooking } from '@/lib/bookingStorage'
import ReceiptModal from '@/components/receipt/ReceiptModal'
import './Bhandara.css'

const faqs = [
  { q: 'भंडारे की बुकिंग कैसे करें?', a: 'Call या WhatsApp पर संपर्क करें: 9929975116। हम आपको पूरी जानकारी और Quotation देंगे।' },
  { q: 'भंडारा कहाँ होता है?', a: 'खाटू श्याम जी मंदिर परिसर में या आपके निर्धारित स्थान पर — हम दोनों जगह व्यवस्था करते हैं।' },
  { q: 'Advance कितना देना होता है?', a: 'बुकिंग confirm करने के लिए कुछ Advance आवश्यक है। पूरी राशि कार्यक्रम से पहले।' },
  { q: 'Menu में बदलाव हो सकता है?', a: 'हाँ, आपकी इच्छानुसार Menu customize किया जा सकता है। अधिक जानकारी के लिए संपर्क करें।' },
  { q: 'क्या टेंट की व्यवस्था भी होती है?', a: 'हाँ, टेंट/शामियाना, बर्तन, सफाई — सभी की व्यवस्था हम करते हैं।' },
]

export default function BhandaraClient() {
  const [openFaq, setOpenFaq] = useState(null)
  const [receipt, setReceipt] = useState(null)
  const [customOpen, setCustomOpen] = useState(false)
  const [customForm, setCustomForm] = useState({ name: '', phone: '', details: '', date: '', occasion: '', address: '' })
  const [customDone, setCustomDone] = useState(false)

  const handleCustomBook = (e) => {
    e.preventDefault()
    const booking = saveBooking({
      serviceName: `कस्टम भंडारा — ${customForm.details.slice(0, 40)}`,
      serviceType: 'bhandara',
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
    setReceipt(booking)
  }

  return (
    <div className="bhandara-page">
      {receipt && <ReceiptModal booking={receipt} onClose={() => setReceipt(null)} />}

      {/* Hero */}
      <div className="bhandara-hero">
        <div className="bhandara-hero-overlay"></div>
        <div className="container bhandara-hero-content">
          <div className="bhandara-hero-badge hindi-text">🍽️ खाटू श्याम जी</div>
          <h1 className="hindi-text">खाटू श्याम विशाल भंडारा</h1>
          <p className="hindi-text bhandara-hero-sub">1000 • 5000 • 10000 व्यक्तियों का भव्य भंडारा आयोजन</p>
          <div className="bhandara-hero-stats">
            <div className="bhandara-stat">
              <span className="bhandara-stat-num">1000+</span>
              <span className="hindi-text bhandara-stat-label">न्यूनतम व्यक्ति</span>
            </div>
            <div className="bhandara-stat-divider"></div>
            <div className="bhandara-stat">
              <span className="bhandara-stat-num">10000+</span>
              <span className="hindi-text bhandara-stat-label">अधिकतम व्यक्ति</span>
            </div>
            <div className="bhandara-stat-divider"></div>
            <div className="bhandara-stat">
              <span className="bhandara-stat-num">24/7</span>
              <span className="hindi-text bhandara-stat-label">सहायता उपलब्ध</span>
            </div>
          </div>
          <div className="bhandara-hero-btns">
            <a href="tel:9929975116" className="bhandara-call-btn"><FiPhone /> 9929975116</a>
            <a href="https://wa.me/919929975116?text=भंडारा बुकिंग करनी है" target="_blank" rel="noopener noreferrer" className="bhandara-wa-btn">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp करें</span>
            </a>
          </div>
        </div>
      </div>

      {/* Info Strip */}
      <div className="bhandara-info-strip">
        <div className="container">
          <p className="hindi-text">🍽️ शुद्ध सात्विक भोजन • अनुभवी रसोइये • सम्पूर्ण व्यवस्था • Call: <a href="tel:9929975116">9929975116</a></p>
        </div>
      </div>

      <div className="container bhandara-container">

        {/* ── Cards Grid — Swamani/Prasad style ── */}
        <h2 className="section-title hindi-text">भंडारा पैकेज</h2>
        <div className="divider"><span>🍽️</span></div>
        <p className="hindi-text bhandara-subtitle">किसी भी भंडारे पर क्लिक करें — पूरी जानकारी देखें और बुकिंग करें</p>

        <div className="bhandara-cards-grid">
          {bhandaraList.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/bhandara/${pkg.slug}`}
              className={`bhandara-link-card ${pkg.special ? 'bhandara-link-special' : ''}`}
            >
              {pkg.special && <div className="bhandara-link-ribbon hindi-text">⭐ {pkg.tag}</div>}

              {/* Image */}
              <div className="bhandara-link-img-box">
                <img src={pkg.img} alt={pkg.name} loading="lazy"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                <div className="bhandara-link-img-fallback" style={{ display: 'none' }}>
                  <span>{pkg.icon}</span>
                </div>
                <div className="bhandara-link-overlay">
                  <span className="hindi-text">विवरण देखें →</span>
                </div>
              </div>

              {/* Body */}
              <div className="bhandara-link-body">
                <div className="bhandara-link-persons" style={{ color: pkg.color, background: `${pkg.color}15`, borderColor: `${pkg.color}44` }}>
                  <FiUsers /> {pkg.persons.toLocaleString('hi-IN')} व्यक्ति
                </div>
                <h3 className="hindi-text bhandara-link-name">{pkg.name}</h3>
                <p className="hindi-text bhandara-link-desc">{pkg.desc}</p>

                {/* Menu preview */}
                <div className="bhandara-link-menu">
                  {pkg.menu.slice(0, 4).map((m, i) => (
                    <span key={i} className="hindi-text bhandara-link-menu-item">{m}</span>
                  ))}
                  {pkg.menu.length > 4 && (
                    <span className="hindi-text bhandara-link-menu-more">+{pkg.menu.length - 4} और...</span>
                  )}
                </div>

                <div className="bhandara-link-footer">
                  <span className="hindi-text bhandara-link-price-note">मूल्य संपर्क पर तय</span>
                  <span className="hindi-text bhandara-link-view">विवरण <FiArrowRight /></span>
                </div>
              </div>

              {/* Book button */}
              <div className="bhandara-link-actions">
                <span className="hindi-text bhandara-link-book-btn">
                  <FaWhatsapp /> अभी बुक करें
                </span>
                <span className="bhandara-link-call-btn"><FiPhone /></span>
              </div>
            </Link>
          ))}
        </div>

        {/* Price / Info Table */}
        <div className="bhandara-table-section">
          <h3 className="hindi-text bhandara-table-title">📋 भंडारा सूची</h3>
          <div className="bhandara-table-box">
            <div className="bhandara-table-header">
              <span className="hindi-text">भंडारा</span>
              <span className="hindi-text">मेनू</span>
              <span className="hindi-text">व्यक्ति</span>
              <span className="hindi-text">बुकिंग</span>
            </div>
            {bhandaraList.map(pkg => (
              <div key={pkg.id} className={`bhandara-table-row ${pkg.special ? 'bhandara-table-special' : ''}`}>
                <Link href={`/bhandara/${pkg.slug}`} className="hindi-text bhandara-table-link">
                  {pkg.icon} {pkg.name}
                </Link>
                <span className="hindi-text bhandara-table-menu">{pkg.menu.slice(0, 3).join(' • ')}{pkg.menu.length > 3 ? '...' : ''}</span>
                <span className="bhandara-table-persons" style={{ color: pkg.color }}>
                  <FiUsers /> {pkg.persons.toLocaleString('hi-IN')}
                </span>
                <button className="bhandara-table-btn" onClick={() =>
                  window.open(`https://wa.me/919929975116?text=${encodeURIComponent(`भंडारा बुकिंग — ${pkg.name}`)}`, '_blank')
                }>
                  <FaWhatsapp />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Custom / Other Booking */}
        <div className="bhandara-custom-section">
          <button className="bhandara-custom-header" onClick={() => setCustomOpen(o => !o)}>
            <span className="bhandara-custom-header-left">
              <FiEdit3 className="bhandara-custom-icon" />
              <span>
                <strong className="hindi-text">कुछ और चाहिए?</strong>
                <small className="hindi-text">ऊपर दिए package के अलावा कोई विशेष आयोजन, custom menu, या अलग व्यवस्था?</small>
              </span>
            </span>
            <span className="bhandara-custom-chevron">{customOpen ? '▲' : '▼'}</span>
          </button>

          {customOpen && (
            <div className="bhandara-custom-body">
              {!customDone ? (
                <form className="bhandara-custom-form" onSubmit={handleCustomBook}>
                  <p className="hindi-text bhandara-custom-hint">
                    1000 से कम या ज़्यादा व्यक्ति, custom menu, विशेष तारीख, या कोई भी अन्य आवश्यकता — नीचे लिखें।
                  </p>
                  <div className="bhandara-custom-field">
                    <label className="hindi-text">क्या चाहिए? (विवरण) *</label>
                    <textarea rows={3} placeholder="जैसे: 500 व्यक्ति भंडारा, custom menu, विशेष मिठाई..."
                      value={customForm.details} onChange={e => setCustomForm(f => ({ ...f, details: e.target.value }))} required />
                  </div>
                  <div className="bhandara-custom-row">
                    <div className="bhandara-custom-field">
                      <label className="hindi-text">आपका नाम *</label>
                      <input type="text" placeholder="पूरा नाम" value={customForm.name}
                        onChange={e => setCustomForm(f => ({ ...f, name: e.target.value }))} required />
                    </div>
                    <div className="bhandara-custom-field">
                      <label className="hindi-text">मोबाइल नंबर *</label>
                      <input type="tel" placeholder="10 अंक" maxLength={10} value={customForm.phone}
                        onChange={e => setCustomForm(f => ({ ...f, phone: e.target.value }))} required />
                    </div>
                  </div>
                  <div className="bhandara-custom-row">
                    <div className="bhandara-custom-field">
                      <label className="hindi-text">पसंदीदा दिनांक</label>
                      <input type="date" value={customForm.date}
                        onChange={e => setCustomForm(f => ({ ...f, date: e.target.value }))} />
                    </div>
                    <div className="bhandara-custom-field">
                      <label className="hindi-text">अवसर / कारण</label>
                      <input type="text" placeholder="मनोकामना, विवाह, जन्मदिन..."
                        value={customForm.occasion} onChange={e => setCustomForm(f => ({ ...f, occasion: e.target.value }))} />
                    </div>
                  </div>
                  <div className="bhandara-custom-field">
                    <label className="hindi-text">स्थान / पता</label>
                    <input type="text" placeholder="भंडारे का स्थान / पता"
                      value={customForm.address} onChange={e => setCustomForm(f => ({ ...f, address: e.target.value }))} />
                  </div>
                  <div className="bhandara-custom-actions">
                    <button type="submit" className="bhandara-custom-wa-btn hindi-text">✅ Submit करें</button>
                    <a href="tel:9929975116" className="bhandara-custom-call-btn"><FiPhone /> Call करें</a>
                  </div>
                </form>
              ) : (
                <div className="bhandara-custom-done">
                  <span>✅</span>
                  <div>
                    <p className="hindi-text">Request भेज दी! हम जल्द Quotation के साथ संपर्क करेंगे।</p>
                    <button className="bhandara-custom-reset hindi-text"
                      onClick={() => { setCustomDone(false); setCustomForm({ name:'', phone:'', details:'', date:'', occasion:'', address:'' }) }}>
                      नई request करें
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* FAQ */}
        <div className="bhandara-faq-section">
          <h2 className="section-title hindi-text">अक्सर पूछे जाने वाले प्रश्न</h2>
          <div className="divider"><span>❓</span></div>
          <div className="bhandara-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`bhandara-faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="bhandara-faq-q hindi-text" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-chevron">{openFaq === i ? '▲' : '▼'}</span>
                </button>
                {openFaq === i && <p className="hindi-text bhandara-faq-a">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bhandara-cta-box">
          <div className="bhandara-cta-text">
            <h3 className="hindi-text">भंडारे के लिए अभी संपर्क करें</h3>
            <p className="hindi-text">हम 24/7 उपलब्ध हैं — Call या WhatsApp पर बात करें</p>
          </div>
          <div className="bhandara-cta-btns">
            <a href="tel:9929975116" className="bhandara-cta-call"><FiPhone /> 9929975116</a>
            <a href="https://wa.me/919929975116?text=भंडारा बुकिंग करनी है" className="bhandara-cta-wa" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
