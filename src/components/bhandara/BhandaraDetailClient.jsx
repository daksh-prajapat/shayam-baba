'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiArrowLeft, FiCheck, FiUsers, FiCalendar, FiMapPin } from 'react-icons/fi'
import { bhandaraList } from '@/lib/bhandaraData'
import { saveBooking } from '@/lib/bookingStorage'
import ReceiptModal from '@/components/receipt/ReceiptModal'
import './BhandaraDetail.css'

export default function BhandaraDetailClient({ item }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', place: '', persons: '', occasion: '' })
  const [receipt, setReceipt] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleBook = (e) => {
    e.preventDefault()
    const booking = saveBooking({
      serviceName: item.name,
      serviceType: 'bhandara',
      amount: 0,
      name: form.name,
      phone: form.phone,
      date: form.date,
      occasion: form.occasion,
      address: form.place,
      persons: `${item.persons} व्यक्ति`,
      icon: item.icon,
      note: form.persons ? `व्यक्ति: ${form.persons}, स्थान: ${form.place}` : '',
    })
    setSubmitted(true)
    setReceipt(booking)
  }

  const others = bhandaraList.filter(b => b.id !== item.id)

  return (
    <div className="bdd-page">
      {receipt && <ReceiptModal booking={receipt} onClose={() => setReceipt(null)} />}

      {/* Topbar */}
      <div className="bdd-topbar">
        <div className="container bdd-topbar-inner">
          <Link href="/bhandara" className="bdd-back">
            <FiArrowLeft /> सभी भंडारे
          </Link>
          <div className="bdd-breadcrumb hindi-text">
            <Link href="/">होम</Link> / <Link href="/bhandara">भंडारा</Link> / <span>{item.name}</span>
          </div>
        </div>
      </div>

      <div className="container bdd-container">
        <div className="bdd-main-grid">

          {/* ── Left ── */}
          <div className="bdd-left">

            {/* Image */}
            <div className="bdd-img-box">
              {item.special && <span className="bdd-special-ribbon hindi-text">⭐ {item.tag}</span>}
              <img src={item.img} alt={item.name} className="bdd-hero-img"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
              <div className="bdd-img-fallback" style={{ display: 'none' }}>
                <span className="bdd-fallback-icon">{item.icon}</span>
              </div>
              <div className="bdd-img-tag hindi-text">{item.tag}</div>
            </div>

            {/* Title */}
            <div className="bdd-title-box">
              <h1 className="hindi-text bdd-title">{item.name}</h1>
              <p className="bdd-name-en">{item.nameEn} — Khatu Shyam Ji Bhandara Booking</p>
              <div className="bdd-persons-row">
                <span className="bdd-persons-badge" style={{ color: item.color, borderColor: `${item.color}44`, background: `${item.color}15` }}>
                  <FiUsers /> {item.persons.toLocaleString('hi-IN')} व्यक्ति
                </span>
                <span className="hindi-text bdd-price-note">{item.priceNote}</span>
              </div>
            </div>

            {/* Description */}
            <div className="card bdd-desc-card">
              <h2 className="hindi-text bdd-section-title">📖 विवरण</h2>
              <p className="hindi-text bdd-full-desc">{item.fullDesc}</p>
            </div>

            {/* Menu */}
            <div className="card bdd-menu-card">
              <h2 className="hindi-text bdd-section-title">🍛 भोजन मेनू</h2>
              <div className="bdd-menu-items">
                {item.menu.map((m, i) => (
                  <span key={i} className="hindi-text bdd-menu-item">{m}</span>
                ))}
              </div>
            </div>

            {/* Includes */}
            <div className="card bdd-includes-card">
              <h2 className="hindi-text bdd-section-title">✅ इसमें शामिल है</h2>
              <div className="bdd-includes-grid">
                {item.includes.map((inc, i) => (
                  <div key={i} className="bdd-include-item">
                    <FiCheck className="bdd-check" />
                    <span className="hindi-text">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="card bdd-process-card">
              <h2 className="hindi-text bdd-section-title">📋 बुकिंग प्रक्रिया</h2>
              <div className="bdd-steps">
                {item.process.map((step, i) => (
                  <div key={i} className="bdd-step">
                    <span className="bdd-step-num">{i + 1}</span>
                    <span className="hindi-text">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Meta */}
            <div className="card bdd-meta-card">
              <div className="bdd-meta-row">
                <span className="hindi-text bdd-meta-label">⏰ समय</span>
                <span className="hindi-text bdd-meta-val">{item.timing}</span>
              </div>
              <div className="bdd-meta-row">
                <span className="hindi-text bdd-meta-label">📍 स्थान</span>
                <span className="hindi-text bdd-meta-val">{item.delivery}</span>
              </div>
              <div className="bdd-meta-row">
                <span className="hindi-text bdd-meta-label">🧾 Receipt</span>
                <span className="hindi-text bdd-meta-val">{item.cert}</span>
              </div>
              <div className="bdd-meta-row">
                <span className="hindi-text bdd-meta-label">📞 Support</span>
                <a href="tel:9929975116" className="bdd-meta-link">9929975116</a>
              </div>
            </div>
          </div>

          {/* ── Right — Booking Form ── */}
          <div className="bdd-right">
            <div className="bdd-booking-card card">
              <div className="bdd-booking-header">
                <span className="bdd-booking-icon">{item.icon}</span>
                <div>
                  <h3 className="hindi-text bdd-booking-title">बुकिंग करें</h3>
                  <p className="hindi-text bdd-booking-sub">मूल्य संपर्क पर तय होगा</p>
                </div>
              </div>

              {!submitted ? (
                <form className="bdd-form" onSubmit={handleBook}>
                  <div className="bdd-field">
                    <label className="hindi-text"><FiUsers /> आपका नाम *</label>
                    <input type="text" placeholder="पूरा नाम" value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                  </div>
                  <div className="bdd-field">
                    <label className="hindi-text"><FiPhone /> मोबाइल नंबर *</label>
                    <input type="tel" placeholder="10 अंक" value={form.phone} maxLength={10}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value.replace(/\D/g, '') }))} required />
                  </div>
                  <div className="bdd-field">
                    <label className="hindi-text"><FiCalendar /> पसंदीदा दिनांक *</label>
                    <input type="date" value={form.date}
                      onChange={e => setForm(f => ({ ...f, date: e.target.value }))} required />
                  </div>
                  <div className="bdd-field">
                    <label className="hindi-text"><FiMapPin /> स्थान / पता</label>
                    <input type="text" placeholder="भंडारे का स्थान / पता"
                      value={form.place}
                      onChange={e => setForm(f => ({ ...f, place: e.target.value }))} />
                  </div>
                  <div className="bdd-field">
                    <label className="hindi-text">🎊 अवसर / कारण</label>
                    <input type="text" placeholder="मनोकामना पूर्ति, जन्मदिन, विवाह..."
                      value={form.occasion}
                      onChange={e => setForm(f => ({ ...f, occasion: e.target.value }))} />
                  </div>

                  <button type="submit" className="bdd-submit-btn hindi-text">
                    ✅ बुकिंग Submit करें
                  </button>
                  <a href="tel:9929975116" className="bdd-call-btn">
                    <FiPhone /> 9929975116 पर Call करें
                  </a>

                  <div className="bdd-guarantees">
                    <div className="bdd-g-item"><FiCheck className="bdd-g-icon" /><span className="hindi-text">शुद्ध सात्विक भोजन</span></div>
                    <div className="bdd-g-item"><FiCheck className="bdd-g-icon" /><span className="hindi-text">अनुभवी रसोइये</span></div>
                    <div className="bdd-g-item"><FiCheck className="bdd-g-icon" /><span className="hindi-text">Digital Receipt मिलेगी</span></div>
                    <div className="bdd-g-item"><FiCheck className="bdd-g-icon" /><span className="hindi-text">24/7 Support</span></div>
                  </div>
                </form>
              ) : (
                <div className="bdd-success">
                  <div className="bdd-success-icon">✅</div>
                  <h4 className="hindi-text">बुकिंग Request हो गई!</h4>
                  <p className="hindi-text">हम जल्द ही Quotation के साथ संपर्क करेंगे।</p>
                  <button className="bdd-submit-btn hindi-text" onClick={() => setReceipt(receipt)}>Receipt देखें</button>
                  <button className="bdd-call-btn" style={{ marginTop: 8 }}
                    onClick={() => { setSubmitted(false); setForm({ name:'', phone:'', date:'', place:'', persons:'', occasion:'' }) }}>
                    नई बुकिंग
                  </button>
                </div>
              )}
            </div>

            {/* Quick Contact */}
            <div className="card bdd-quick-contact">
              <h4 className="hindi-text">📞 तुरंत सम्पर्क करें</h4>
              <a href="tel:9929975116" className="bdd-qc-call"><FiPhone /> 9929975116</a>
              <a href={`https://wa.me/919929975116?text=${encodeURIComponent(`भंडारा बुकिंग — ${item.name}`)}`}
                className="bdd-qc-wa" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> <span className="hindi-text">WhatsApp करें</span>
              </a>
              <p className="hindi-text bdd-qc-note">सुबह 6 बजे – रात 10 बजे</p>
            </div>
          </div>
        </div>

        {/* Other Bhandara */}
        <div className="bdd-others-section">
          <h2 className="section-title hindi-text">और भंडारे देखें</h2>
          <div className="divider"><span>🍽️</span></div>
          <div className="bdd-others-grid">
            {others.map(other => (
              <Link key={other.id} href={`/bhandara/${other.slug}`} className="bdd-other-card card">
                <div className="bdd-other-img">
                  <img src={other.img} alt={other.name}
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                  <div className="bdd-other-fb" style={{ display: 'none' }}><span>{other.icon}</span></div>
                </div>
                <div className="bdd-other-info">
                  <h4 className="hindi-text">{other.name}</h4>
                  <span className="bdd-other-persons" style={{ color: other.color }}>
                    <FiUsers /> {other.persons.toLocaleString('hi-IN')} व्यक्ति
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link href="/bhandara" className="btn-secondary hindi-text">सभी भंडारे देखें →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
