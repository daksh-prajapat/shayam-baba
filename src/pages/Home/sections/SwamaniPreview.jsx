import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiArrowRight } from 'react-icons/fi'
import './SwamaniPreview.css'

const featured = [
  {
    name: 'लड्डू पूरी सब्जी',
    price: 8100,
    icon: '🍛',
    img: '/images/orange-flowers.jpg',
    tag: 'सबसे लोकप्रिय'
  },
  {
    name: 'चूरमा',
    price: 9500,
    icon: '🍯',
    img: '/images/marigold.jpg',
    tag: 'बाबा का प्रिय'
  },
  {
    name: 'गोंद लड्डू',
    price: 20000,
    icon: '🫙',
    img: '/images/diya.jpg',
    tag: 'विशेष भोग'
  },
  {
    name: 'छप्पन भोग',
    price: 31000,
    icon: '👑',
    img: '/images/prasad-hero.jpg',
    tag: '⭐ सर्वश्रेष्ठ',
    special: true
  },
]

export default function SwamaniPreview() {
  return (
    <section className="swamani-preview-section">
      <div className="container">
        <p className="section-label hindi-text">👑 बुकिंग सेवा</p>
        <h2 className="section-title hindi-text">स्वामणी भोग सेवा</h2>
        <div className="divider"><span>🍯</span></div>

        <div className="sp-info-strip">
          <span className="hindi-text">📌 घर बैठे Online बुकिंग करें</span>
          <span className="sp-strip-dot">•</span>
          <span className="hindi-text">🏠 प्रसाद घर पहुंचाएं</span>
          <span className="sp-strip-dot">•</span>
          <span className="hindi-text">📞 Call करके बुक करें</span>
        </div>

        <div className="sp-grid">
          {featured.map((item, i) => (
            <div key={i} className={`sp-card ${item.special ? 'sp-special' : ''}`}>
              {/* Tag */}
              <div className="sp-tag hindi-text">{item.tag}</div>

              {/* Image */}
              <div className="sp-img-box">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                    const fb = e.currentTarget.parentNode.querySelector('.sp-img-fallback')
                    if (fb) fb.style.display = 'flex'
                  }}
                />
                <div className="sp-img-fallback">
                  <span className="sp-fallback-icon">{item.icon}</span>
                </div>
                <div className="sp-img-overlay" />
              </div>

              {/* Body */}
              <div className="sp-card-body">
                <h3 className="hindi-text sp-name">{item.name}</h3>
                <div className="sp-price-row">
                  <span className="sp-price">₹{item.price.toLocaleString('hi-IN')}</span>
                  <span className="sp-price-label hindi-text">प्रति भोग</span>
                </div>

                {/* Actions — always in one row */}
                <div className="sp-actions">
                  <a
                    href={`https://wa.me/919929975116?text=${encodeURIComponent(`🙏 नमस्ते! स्वामणी बुकिंग — ${item.name} ₹${item.price}`)}`}
                    className="sp-book-btn hindi-text"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.name} बुक करें`}
                  >
                    <FaWhatsapp />
                    <span>बुक करें</span>
                  </a>
                  <a
                    href="tel:9929975116"
                    className="sp-call-icon"
                    aria-label="Call"
                  >
                    <FiPhone />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="sp-bottom-row">
          <div className="sp-contact-btns">
            <a href="tel:9929975116" className="sp-bottom-call">
              <FiPhone /> <span>9929975116</span>
            </a>
            <a
              href="https://wa.me/919929975116?text=%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%AE%E0%A4%A3%E0%A5%80%20%E0%A4%AD%E0%A5%8B%E0%A4%97%20%E0%A4%AC%E0%A5%81%E0%A4%95%E0%A4%BF%E0%A4%82%E0%A4%97%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A5%80%20%E0%A4%B9%E0%A5%88"
              className="sp-bottom-wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
            </a>
          </div>
          <Link to="/swamani" className="sp-view-all hindi-text">
            सभी स्वामणी देखें <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
