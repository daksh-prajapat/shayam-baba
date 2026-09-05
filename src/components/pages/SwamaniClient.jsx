'use client'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiArrowRight } from 'react-icons/fi'
import { swamaniList } from '@/lib/swamaniData'
import './Swamani.css'

export default function SwamaniClient() {
  const handleBook = (e, item) => {
    e.preventDefault()
    e.stopPropagation()
    const msg = `🙏 नमस्ते! स्वामणी बुकिंग करनी है।%0A%0A👑 स्वामणी: ${item.name}%0A💰 मूल्य: ₹${item.price.toLocaleString('hi-IN')}%0A%0Aकृपया बुकिंग की जानकारी दें।`
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
