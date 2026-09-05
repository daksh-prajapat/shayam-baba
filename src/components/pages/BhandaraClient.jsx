'use client'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiCheck, FiUsers, FiCalendar, FiMapPin } from 'react-icons/fi'
import { saveBooking } from '@/lib/bookingStorage'
import ReceiptModal from '@/components/receipt/ReceiptModal'
import './Bhandara.css'

const bhandaraPackages = [
  {
    id: 1,
    persons: 1000,
    title: '1000 व्यक्ति भंडारा',
    titleEn: '1000 Person Bhandara',
    icon: '🍽️',
    tag: 'छोटा भंडारा',
    color: '#e67e22',
    menu: ['दाल', 'चावल', 'रोटी', 'सब्जी', 'खीर', 'अचार', 'पापड़', 'चटनी'],
    includes: [
      '1000 व्यक्तियों का भोजन',
      'शुद्ध देशी घी में बनी रोटी',
      'मौसमी सब्जी',
      'दाल, चावल, खीर',
      'अचार, पापड़, चटनी',
      'पानी की व्यवस्था',
      'बर्तन एवं सफाई',
      'अनुभवी रसोइये',
    ],
    process: [
      'Call/WhatsApp पर संपर्क करें',
      'दिनांक और स्थान confirm करें',
      'Advance booking करें',
      'भंडारे का आयोजन होगा',
      'जय श्री श्याम 🙏',
    ],
    desc: 'छोटे पारिवारिक या सामाजिक आयोजन के लिए — 1000 भक्तों को प्रसाद भोजन कराएं।',
    note: 'मूल्य स्थान, सामग्री और दूरी के अनुसार तय होगा।',
  },
  {
    id: 2,
    persons: 5000,
    title: '5000 व्यक्ति भंडारा',
    titleEn: '5000 Person Bhandara',
    icon: '🏕️',
    tag: 'मध्यम भंडारा',
    color: '#8e44ad',
    special: true,
    menu: ['दाल', 'चावल', 'रोटी', 'सब्जी', 'खीर', 'हलवा', 'अचार', 'पापड़', 'चटनी', 'शरबत'],
    includes: [
      '5000 व्यक्तियों का भोजन',
      'शुद्ध देशी घी में बनी रोटी',
      'दो प्रकार की सब्जी',
      'दाल, चावल, खीर, हलवा',
      'अचार, पापड़, चटनी',
      'शरबत / ठंडा पानी',
      'बड़े बर्तन एवं सफाई टीम',
      'अनुभवी रसोइये एवं सहयोगी',
      'टेंट / शामियाना व्यवस्था (वैकल्पिक)',
    ],
    process: [
      'Call/WhatsApp पर संपर्क करें',
      'स्थान और दिनांक confirm करें',
      'Menu अनुसार Quotation लें',
      'Advance payment करें',
      'भंडारे का भव्य आयोजन',
    ],
    desc: 'बड़े धार्मिक या सामाजिक आयोजन के लिए — 5000 भक्तों को भव्य प्रसाद भोजन।',
    note: 'मूल्य स्थान, सामग्री और दूरी के अनुसार तय होगा।',
  },
  {
    id: 3,
    persons: 10000,
    title: '10000 व्यक्ति भंडारा',
    titleEn: '10000 Person Bhandara',
    icon: '👑',
    tag: 'महा भंडारा',
    color: '#D4A017',
    special: true,
    menu: ['दाल', 'चावल', 'रोटी', 'दो सब्जी', 'खीर', 'हलवा', 'पूरी', 'चटनी', 'अचार', 'पापड़', 'शरबत', 'मिठाई'],
    includes: [
      '10000 व्यक्तियों का भोजन',
      'शुद्ध देशी घी में बनी पूरी/रोटी',
      'दो प्रकार की सब्जी',
      'दाल, चावल, खीर, हलवा',
      'मिठाई (लड्डू / हलवा)',
      'अचार, पापड़, चटनी',
      'शरबत / ठंडा पानी',
      'विशाल रसोई टीम',
      'टेंट / शामियाना व्यवस्था',
      'बर्तन, सफाई एवं सेवा टीम',
      'Sound System (वैकल्पिक)',
    ],
    process: [
      'Call/WhatsApp पर संपर्क करें',
      'स्थान और दिनांक confirm करें',
      'विस्तृत Quotation प्राप्त करें',
      'Advance booking करें',
      'भव्य महा भंडारे का आयोजन',
    ],
    desc: 'विशाल धार्मिक मेले या आयोजन के लिए — 10000 भक्तों को महा प्रसाद भोजन।',
    note: 'मूल्य स्थान, सामग्री और दूरी के अनुसार तय होगा।',
  },
]

const faqs = [
  { q: 'भंडारे की बुकिंग कैसे करें?', a: 'Call या WhatsApp पर संपर्क करें: 9929975116। हम आपको पूरी जानकारी और Quotation देंगे।' },
  { q: 'भंडारा कहाँ होता है?', a: 'खाटू श्याम जी मंदिर परिसर में या आपके निर्धारित स्थान पर — हम दोनों जगह व्यवस्था करते हैं।' },
  { q: 'Advance कितना देना होता है?', a: 'बुकिंग confirm करने के लिए कुछ Advance आवश्यक है। पूरी राशि कार्यक्रम से पहले।' },
  { q: 'Menu में बदलाव हो सकता है?', a: 'हाँ, आपकी इच्छानुसार Menu customize किया जा सकता है। अधिक जानकारी के लिए संपर्क करें।' },
  { q: 'क्या टेंट की व्यवस्था भी होती है?', a: 'हाँ, टेंट/शामियाना, बर्तन, सफाई — सभी की व्यवस्था हम करते हैं।' },
]

export default function BhandaraClient() {
  const [selectedPkg, setSelectedPkg] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', date: '', place: '', persons: '', occasion: '' })
  const [openFaq, setOpenFaq] = useState(null)
  const [receipt, setReceipt] = useState(null)

  const handleBook = (pkg) => {
    const booking = saveBooking({
      serviceName: pkg.title,
      serviceType: 'bhandara',
      amount: 0,
      name: '—',
      phone: '—',
      icon: pkg.icon,
      persons: pkg.persons + ' व्यक्ति',
      note: 'मूल्य संपर्क पर तय होगा',
    })
    const msg = `🙏 *जय श्री श्याम*%0A%0A🍽️ *खाटू श्याम विशाल भंडारा बुकिंग*%0A%0A🔖 Booking ID: *${booking.id}*%0A📌 भंडारा: *${pkg.title}*%0A👥 व्यक्ति: *${pkg.persons.toLocaleString('hi-IN')}*%0A%0Aकृपया Quotation और जानकारी दें। 🙏`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const booking = saveBooking({
      serviceName: `भंडारा — ${form.persons}`,
      serviceType: 'bhandara',
      amount: 0,
      name: form.name,
      phone: form.phone,
      date: form.date,
      occasion: form.occasion,
      address: form.place,
      persons: form.persons,
      icon: '🍽️',
      note: 'मूल्य संपर्क पर तय होगा',
    })
    setReceipt(booking)
    const msg = `🙏 *जय श्री श्याम*%0A%0A🍽️ *भंडारा बुकिंग फॉर्म*%0A%0A🔖 Booking ID: *${booking.id}*%0A👤 नाम: *${form.name}*%0A📞 फोन: *${form.phone}*%0A👥 व्यक्ति संख्या: *${form.persons}*%0A📅 दिनांक: *${form.date}*%0A📍 स्थान: *${form.place}*%0A🎊 अवसर: *${form.occasion}*%0A%0Aकृपया संपर्क करें। 🙏`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
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

        {/* Packages */}
        <h2 className="section-title hindi-text">भंडारा पैकेज</h2>
        <div className="divider"><span>🍽️</span></div>

        <div className="bhandara-pkg-grid">
          {bhandaraPackages.map(pkg => (
            <div key={pkg.id} className={`bhandara-pkg-card ${pkg.special ? 'bhandara-pkg-special' : ''} ${selectedPkg === pkg.id ? 'bhandara-pkg-selected' : ''}`}
              onClick={() => setSelectedPkg(selectedPkg === pkg.id ? null : pkg.id)}>

              {pkg.special && <div className="bhandara-ribbon hindi-text">⭐ {pkg.tag}</div>}

              {/* Card Top */}
              <div className="bhandara-card-top">
                <div className="bhandara-card-icon">{pkg.icon}</div>
                <div className="bhandara-persons-badge" style={{ color: pkg.color, borderColor: `${pkg.color}44`, background: `${pkg.color}15` }}>
                  <FiUsers /> {pkg.persons.toLocaleString('hi-IN')} व्यक्ति
                </div>
              </div>

              <h3 className="hindi-text bhandara-pkg-title">{pkg.title}</h3>
              <p className="hindi-text bhandara-pkg-desc">{pkg.desc}</p>

              {/* Menu */}
              <div className="bhandara-menu-section">
                <h4 className="hindi-text bhandara-menu-title">🍛 भोजन मेनू</h4>
                <div className="bhandara-menu-items">
                  {pkg.menu.map((item, i) => (
                    <span key={i} className="hindi-text bhandara-menu-item">{item}</span>
                  ))}
                </div>
              </div>

              {/* Includes - shown on expand */}
              {selectedPkg === pkg.id && (
                <div className="bhandara-includes">
                  <h4 className="hindi-text bhandara-inc-title">✅ इसमें शामिल है</h4>
                  {pkg.includes.map((inc, i) => (
                    <div key={i} className="bhandara-inc-item">
                      <FiCheck className="bhandara-check" />
                      <span className="hindi-text">{inc}</span>
                    </div>
                  ))}
                  <h4 className="hindi-text bhandara-inc-title" style={{ marginTop: 16 }}>📋 बुकिंग प्रक्रिया</h4>
                  {pkg.process.map((step, i) => (
                    <div key={i} className="bhandara-step">
                      <span className="bhandara-step-num">{i + 1}</span>
                      <span className="hindi-text">{step}</span>
                    </div>
                  ))}
                </div>
              )}

              <p className="hindi-text bhandara-note">📌 {pkg.note}</p>

              <div className="bhandara-card-actions">
                <button className="bhandara-wa-book hindi-text" onClick={(e) => { e.stopPropagation(); handleBook(pkg) }}>
                  <FaWhatsapp /> अभी बुक करें
                </button>
                <a href="tel:9929975116" className="bhandara-call-small" onClick={e => e.stopPropagation()}>
                  <FiPhone />
                </a>
              </div>

              <div className="bhandara-expand-hint hindi-text">
                {selectedPkg === pkg.id ? '▲ कम देखें' : '▼ पूरी जानकारी देखें'}
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="bhandara-form-section">
          <h2 className="section-title hindi-text">भंडारा बुकिंग फॉर्म</h2>
          <div className="divider"><span>📝</span></div>

          <div className="bhandara-form-layout">
            <div className="bhandara-form-card card">
              <h3 className="hindi-text bhandara-form-title">📝 विवरण भरें — हम संपर्क करेंगे</h3>
              <form onSubmit={handleFormSubmit} className="bhandara-form">
                <div className="bhandara-form-row">
                  <div className="bhandara-field">
                    <label className="hindi-text"><FiUsers /> आपका नाम *</label>
                    <input type="text" placeholder="पूरा नाम" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div className="bhandara-field">
                    <label className="hindi-text"><FiPhone /> मोबाइल नंबर *</label>
                    <input type="tel" placeholder="10 अंक" value={form.phone} maxLength={10} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                  </div>
                </div>
                <div className="bhandara-form-row">
                  <div className="bhandara-field">
                    <label className="hindi-text"><FiUsers /> व्यक्ति संख्या *</label>
                    <select value={form.persons} onChange={e => setForm({ ...form, persons: e.target.value })} required>
                      <option value="">संख्या चुनें</option>
                      <option value="1000 व्यक्ति">1000 व्यक्ति</option>
                      <option value="5000 व्यक्ति">5000 व्यक्ति</option>
                      <option value="10000 व्यक्ति">10000 व्यक्ति</option>
                      <option value="अन्य (बताएं)">अन्य (बताएं)</option>
                    </select>
                  </div>
                  <div className="bhandara-field">
                    <label className="hindi-text"><FiCalendar /> दिनांक *</label>
                    <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
                  </div>
                </div>
                <div className="bhandara-field">
                  <label className="hindi-text"><FiMapPin /> स्थान (पता)</label>
                  <input type="text" placeholder="भंडारे का स्थान / पता" value={form.place} onChange={e => setForm({ ...form, place: e.target.value })} />
                </div>
                <div className="bhandara-field">
                  <label className="hindi-text">🎊 अवसर / कारण</label>
                  <input type="text" placeholder="जैसे: मनोकामना पूर्ति, जन्मदिन, विवाह..." value={form.occasion} onChange={e => setForm({ ...form, occasion: e.target.value })} />
                </div>
                <button type="submit" className="bhandara-submit-btn hindi-text">
                  <FaWhatsapp /> WhatsApp पर बुकिंग करें
                </button>
                <a href="tel:9929975116" className="bhandara-form-call">
                  <FiPhone /> 9929975116 पर Call करें
                </a>
              </form>
            </div>

            {/* Sidebar */}
            <div className="bhandara-form-sidebar">
              <div className="card bhandara-sidebar-card">
                <h4 className="hindi-text">🍽️ हम क्या देते हैं?</h4>
                {['शुद्ध सात्विक भोजन', 'अनुभवी रसोइये', 'सम्पूर्ण बर्तन व्यवस्था', 'सफाई एवं सेवा टीम', 'टेंट/शामियाना (वैकल्पिक)', 'समय पर सेवा', '24/7 Support'].map((item, i) => (
                  <div key={i} className="bhandara-sidebar-item">
                    <FiCheck className="bhandara-check" />
                    <span className="hindi-text">{item}</span>
                  </div>
                ))}
              </div>
              <div className="card bhandara-contact-card">
                <h4 className="hindi-text">📞 तुरंत सम्पर्क</h4>
                <a href="tel:9929975116" className="bhandara-big-call"><FiPhone /> 9929975116</a>
                <a href="https://wa.me/919929975116?text=भंडारा बुकिंग करनी है" className="bhandara-big-wa" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
                </a>
                <p className="hindi-text bhandara-timing-note">सुबह 6 बजे – रात 10 बजे</p>
              </div>
            </div>
          </div>
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
