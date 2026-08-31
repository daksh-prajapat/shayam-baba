import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiArrowRight } from 'react-icons/fi'
import './SwamaniPreview.css'

const featured = [
  { name: 'लड्डू पूरी सब्जी', price: 8100, icon: '🍛', img: '/images/bhog.jpg' },
  { name: 'चूरमा', price: 9500, icon: '🍯', img: '/images/churma.jpg' },
  { name: 'गोंद ड्राय फ्रूट लड्डू', price: 20000, icon: '🫙', img: '/images/swamani2.jpg' },
  { name: '✨ स्पेशल छप्पन भोग', price: 31000, icon: '👑', img: '/images/prasad-hero.jpg', special: true },
]

export default function SwamaniPreview() {
  return (
    <section className="swamani-preview-section">
      <div className="container">
        <p className="section-label hindi-text">👑 Online बुकिंग</p>
        <h2 className="section-title hindi-text">स्वामणी भोग सेवा</h2>
        <div className="divider"><span>🍯</span></div>

        <div className="sp-info-strip hindi-text">
          📌 घर बैठे बुकिंग करें — <strong>Video Call</strong> पर Live दर्शन करें — प्रसाद घर पहुंचाएं
        </div>

        <div className="sp-grid">
          {featured.map((item, i) => (
            <div key={i} className={`sp-card card ${item.special ? 'sp-special' : ''}`}>
              {item.special && <span className="sp-special-tag hindi-text">⭐ सर्वश्रेष्ठ</span>}
              <div className="sp-img-box">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                />
                <div className="sp-img-fallback" style={{ display: 'none' }}>
                  <span>{item.icon}</span>
                </div>
              </div>
              <div className="sp-card-body">
                <h3 className="hindi-text sp-name">{item.name}</h3>
                <div className="sp-price">₹{item.price.toLocaleString('hi-IN')}</div>
                <a
                  href={`https://wa.me/919929975116?text=स्वामणी बुकिंग — ${item.name} ₹${item.price}`}
                  className="sp-book-btn hindi-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> बुक करें
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="sp-bottom-row">
          <div className="sp-bottom-info">
            <a href="tel:9929975116" className="sp-call-btn">
              <FiPhone /> 9929975116
            </a>
            <a href="https://wa.me/919929975116?text=स्वामणी भोग बुकिंग करनी है" className="sp-wa-btn" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
            </a>
          </div>
          <Link to="/swamani" className="sp-more-btn hindi-text">
            सभी स्वामणी देखें <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
