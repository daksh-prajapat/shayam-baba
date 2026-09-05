'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiCheck, FiArrowRight } from 'react-icons/fi'
import { prasadList } from '@/lib/prasadData'
import './PrasadPuja.css'

const pujaServices = [
  { icon: '🌅', name: 'मंगला आरती पूजा', price: '1100+', desc: 'प्रातःकाल की प्रथम पूजा में नाम संकल्प' },
  { icon: '🌸', name: 'विशेष श्रृंगार पूजा', price: '2100+', desc: 'बाबा का विशेष श्रृंगार एवं पूजन' },
  { icon: '🍯', name: 'भोग पूजा', price: '1100+', desc: 'दोपहर में भोग लगवाएं बाबा को' },
  { icon: '🪔', name: 'महाभिषेक पूजा', price: '5100+', desc: 'पंचामृत से महाभिषेक' },
  { icon: '🌇', name: 'संध्या आरती पूजा', price: '1100+', desc: 'सायंकाल की विशेष आरती में नाम' },
  { icon: '🎂', name: 'जन्मदिन विशेष पूजा', price: '3100+', desc: 'जन्मदिन पर बाबा का आशीर्वाद' },
]

export default function PrasadClient() {
  const [activeTab, setActiveTab] = useState('prasad')
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '' })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const msg = `🙏 नमस्ते! बुकिंग करनी है।%0A%0A👤 नाम: ${form.name}%0A📞 फोन: ${form.phone}%0A🛕 सेवा: ${form.service}%0A📅 दिनांक: ${form.date}`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
  }

  return (
    <div className="prasad-page-v2">
      {/* Hero */}
      <div className="prasad-hero-v2">
        <div className="prasad-hero-overlay"></div>
        <div className="container prasad-hero-content-v2">
          <div className="prasad-hero-badge hindi-text">🙏 खाटू श्याम जी</div>
          <h1 className="hindi-text prasad-main-h1">प्रसाद & पूजा Online Booking</h1>
          <p className="hindi-text prasad-hero-tagline">Khatu Shyam Ji Prasad, Puja &amp; Bhog Online Booking — घर बैठे बुकिंग करें</p>
          <div className="prasad-hero-chips">
            <span className="hindi-text">🥥 अर्जी + नारियल ₹101</span>
            <span className="hindi-text">🌸 पंचमेवा थाली ₹501</span>
            <span className="hindi-text">🍯 पूर्ण थाली ₹1100</span>
            <span className="hindi-text">👑 विशेष थाली ₹2100</span>
          </div>
          <div className="prasad-hero-actions">
            <a href="tel:9929975116" className="prasad-hero-call hindi-text"><FiPhone /> 9929975116 पर Call करें</a>
            <a href="https://wa.me/919929975116?text=प्रसाद बुकिंग करनी है" className="prasad-hero-wa" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp बुकिंग</span>
            </a>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="prasad-info-banner">
        <div className="container">
          <p className="hindi-text">📌 <strong>घर बैठे</strong> प्रसाद चढ़वाएं — किसी भी प्रसाद पर क्लिक करें और बुकिंग करें: <a href="tel:9929975116">9929975116</a></p>
        </div>
      </div>

      <div className="container prasad-main-container">
        {/* Tabs */}
        <div className="prasad-tabs-v2">
          {[
            { id: 'prasad', label: '🍯 प्रसाद थाली', sub: '₹101 से शुरू' },
            { id: 'puja', label: '🪔 पूजा सेवा', sub: 'विशेष पूजा' },
            { id: 'booking', label: '📝 बुकिंग फॉर्म', sub: 'Online बुक करें' }
          ].map(t => (
            <button key={t.id} className={`prasad-tab-v2 ${activeTab === t.id ? 'active' : ''}`} onClick={() => setActiveTab(t.id)}>
              <span className="hindi-text tab-v2-label">{t.label}</span>
              <span className="hindi-text tab-v2-sub">{t.sub}</span>
            </button>
          ))}
        </div>

        {/* ── PRASAD TAB ── */}
        {activeTab === 'prasad' && (
          <div className="prasad-packages-section">
            <h2 className="section-title hindi-text">प्रसाद थाली सूची</h2>
            <div className="divider"><span>🙏</span></div>
            <p className="hindi-text prasad-pkg-subtitle">किसी भी प्रसाद पर क्लिक करें — पूरी जानकारी देखें और बुकिंग करें</p>

            {/* Cards Grid */}
            <div className="prasad-pkg-grid">
              {prasadList.map(pkg => (
                <Link
                  key={pkg.id}
                  href={`/prasad-puja/${pkg.slug}`}
                  className={`prasad-pkg-card ${pkg.special ? 'prasad-pkg-special' : ''}`}
                >
                  {pkg.special && <div className="prasad-pkg-ribbon hindi-text">⭐ {pkg.tag}</div>}

                  {/* Image */}
                  <div className="prasad-card-img-box">
                    <img src={pkg.img} alt={pkg.name} loading="lazy"
                      onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                    <div className="prasad-card-img-fallback" style={{ display: 'none' }}>
                      <span>{pkg.icon}</span>
                    </div>
                    {/* Hover overlay */}
                    <div className="prasad-card-overlay">
                      <span className="hindi-text">विवरण देखें →</span>
                    </div>
                  </div>

                  <div className="prasad-pkg-body">
                    <div className="prasad-pkg-top">
                      <div className="prasad-pkg-tag hindi-text" style={{ background: `${pkg.color}22`, color: pkg.color, border: `1px solid ${pkg.color}44` }}>
                        {pkg.tag}
                      </div>
                    </div>
                    <h3 className="hindi-text prasad-pkg-name">{pkg.name}</h3>
                    <p className="hindi-text prasad-pkg-desc">{pkg.desc}</p>

                    <div className="prasad-pkg-items-preview">
                      {pkg.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="prasad-pkg-item-prev">
                          <FiCheck className="pkg-check" />
                          <span className="hindi-text">{item}</span>
                        </div>
                      ))}
                      {pkg.includes.length > 3 && (
                        <span className="hindi-text prasad-more-items">+{pkg.includes.length - 3} और...</span>
                      )}
                    </div>

                    <div className="prasad-pkg-footer">
                      <span className="prasad-pkg-price">₹{pkg.price}</span>
                      <span className="prasad-view-detail hindi-text">विवरण <FiArrowRight /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Price Table */}
            <div className="prasad-summary-table">
              <h3 className="hindi-text prasad-table-title">📋 मूल्य सूची</h3>
              <div className="prasad-table-box">
                <div className="prasad-table-header">
                  <span className="hindi-text">प्रसाद</span>
                  <span className="hindi-text">सामग्री</span>
                  <span className="hindi-text">मूल्य</span>
                  <span className="hindi-text">बुकिंग</span>
                </div>
                {prasadList.map(pkg => (
                  <div key={pkg.id} className={`prasad-table-row ${pkg.special ? 'prasad-table-special' : ''}`}>
                    <Link href={`/prasad-puja/${pkg.slug}`} className="hindi-text prasad-table-link">
                      {pkg.icon} {pkg.name}
                    </Link>
                    <span className="hindi-text prasad-table-items">{pkg.includes.slice(0,3).join(' • ')}{pkg.includes.length > 3 ? '...' : ''}</span>
                    <span className="prasad-table-price">₹{pkg.price}</span>
                    <button className="prasad-table-btn" onClick={() => window.open(`https://wa.me/919929975116?text=प्रसाद बुकिंग — ${pkg.name} ₹${pkg.price}`, '_blank')}>
                      <FaWhatsapp />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── PUJA TAB ── */}
        {activeTab === 'puja' && (
          <div className="puja-services-section">
            <div className="puja-services-grid">
              {pujaServices.map((p, i) => (
                <div key={i} className="puja-service-card-v2 card">
                  <div className="puja-svc-icon">{p.icon}</div>
                  <h3 className="hindi-text puja-svc-name">{p.name}</h3>
                  <p className="hindi-text puja-svc-desc">{p.desc}</p>
                  <div className="puja-svc-price">₹{p.price}</div>
                  <button className="puja-svc-book hindi-text" onClick={() => window.open(`https://wa.me/919929975116?text=पूजा बुकिंग: ${p.name}`, '_blank')}>
                    <FaWhatsapp /> बुक करें
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── BOOKING TAB ── */}
        {activeTab === 'booking' && (
          <div className="prasad-booking-section">
            <div className="prasad-form-card card">
              <h3 className="hindi-text booking-form-title">📝 प्रसाद / पूजा बुकिंग फॉर्म</h3>
              <p className="hindi-text booking-form-sub">फॉर्म भरें — WhatsApp पर संदेश जाएगा</p>
              <form onSubmit={handleFormSubmit} className="booking-form-v2">
                <div className="booking-row">
                  <div className="booking-field">
                    <label className="hindi-text">आपका नाम *</label>
                    <input type="text" placeholder="नाम लिखें" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div className="booking-field">
                    <label className="hindi-text">मोबाइल नंबर *</label>
                    <input type="tel" placeholder="10 अंकों का नंबर" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required pattern="[0-9]{10}" />
                  </div>
                </div>
                <div className="booking-field">
                  <label className="hindi-text">सेवा का प्रकार *</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} required>
                    <option value="">सेवा चुनें</option>
                    <option>🥥 अर्जी + नारियल ₹101</option>
                    <option>🌸 पंचमेवा, मोरछड़ी & इत्र ₹501</option>
                    <option>🍯 चूरमा प्रसाद ₹501</option>
                    <option>🍮 पेड़ा प्रसाद ₹501</option>
                    <option>🟡 लड्डू प्रसाद ₹501</option>
                    <option>🍯 पूर्ण प्रसाद थाली ₹1100</option>
                    <option>👑 विशेष पूर्ण थाली ₹2100</option>
                    <option>👑 लड्डू पूरी सब्जी स्वामणी ₹11000</option>
                    <option>✨ छप्पन भोग ₹31000</option>
                    <option>🪔 विशेष पूजा</option>
                  </select>
                </div>
                <div className="booking-field">
                  <label className="hindi-text">दिनांक</label>
                  <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                </div>
                <button type="submit" className="booking-submit-btn hindi-text">
                  <FaWhatsapp /> WhatsApp पर बुकिंग करें
                </button>
              </form>
            </div>
            <div className="booking-contact-sidebar">
              <div className="card contact-card-v2"><h4 className="hindi-text">📞 Call करें</h4><a href="tel:9929975116" className="contact-big-call"><FiPhone /> 9929975116</a></div>
              <div className="card contact-card-v2"><h4 className="hindi-text">💬 WhatsApp</h4><a href="https://wa.me/919929975116" className="contact-big-wa" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></div>
              <div className="card contact-card-v2 highlight-contact">
                <div className="contact-highlight-badge hindi-text">✨ खास सुविधा</div>
                <h4 className="hindi-text">घर बैठे प्रसाद बुकिंग</h4>
                <p className="hindi-text">दूर रहकर भी बाबा को प्रसाद चढ़वाएं।</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
