import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import './Swamani.css'

const swamaniList = [
  { id: 1, name: 'लड्डू पूरी सब्जी', price: 8100, icon: '🍛', img: '/images/bhog.jpg', desc: 'ताजे लड्डू, पूरी और सब्जी का भोग' },
  { id: 2, name: 'खीर पूरी सब्जी', price: 8100, icon: '🥛', img: '/images/churma.jpg', desc: 'मीठी खीर, पूरी और सब्जी' },
  { id: 3, name: 'चूरमा पूरी सब्जी', price: 8100, icon: '🍯', img: '/images/churma.jpg', desc: 'गेहूं का चूरमा, पूरी और सब्जी' },
  { id: 4, name: 'चूरमा', price: 9500, icon: '🧆', img: '/images/churma.jpg', desc: 'शुद्ध देशी घी का मीठा चूरमा' },
  { id: 5, name: 'चूरमा लड्डू', price: 15100, icon: '🟡', img: '/images/laddu.jpg', desc: 'चूरमे के स्वादिष्ट लड्डू' },
  { id: 6, name: 'बूंदी ड्राय फ्रूट्स', price: 17000, icon: '🌰', img: '/images/dryfruit.jpg', desc: 'बूंदी के साथ ड्राय फ्रूट्स' },
  { id: 7, name: 'बूंदी', price: 17000, icon: '🟤', img: '/images/swamani1.jpg', desc: 'देशी घी की मीठी बूंदी' },
  { id: 8, name: 'गोंद ड्राय फ्रूट लड्डू', price: 20000, icon: '🫙', img: '/images/swamani2.jpg', desc: 'गोंद और मेवे के विशेष लड्डू' },
  { id: 9, name: 'गोंद पाक स्वामणी', price: 23000, icon: '✨', img: '/images/bhog.jpg', desc: 'गोंद पाक का विशेष भोग' },
  { id: 10, name: 'दिलखुशार स्वामणी', price: 23000, icon: '💛', img: '/images/swamani3.jpg', desc: 'मिश्रित मिठाई का भव्य भोग' },
  { id: 11, name: 'सफेद पेड़ा', price: 23000, icon: '🍮', img: '/images/peda.jpg', desc: 'मावे का शुद्ध सफेद पेड़ा' },
  { id: 12, name: 'केसर पिस्ता पेड़ा', price: 25000, icon: '🟨', img: '/images/peda.jpg', desc: 'केसर और पिस्ते वाला विशेष पेड़ा' },
  { id: 13, name: 'स्पेशल छप्पन भोग', price: 31000, icon: '👑', img: '/images/prasad-hero.jpg', desc: '56 प्रकार के पकवानों का महाभोग — सर्वोच्च सेवा', special: true },
]

export default function Swamani() {
  const [selected, setSelected] = useState(null)

  const handleBook = (item) => {
    const msg = `🙏 नमस्ते! मुझे स्वामणी बुकिंग करनी है।%0A%0A👑 स्वामणी: ${item.name}%0A💰 मूल्य: ₹${item.price.toLocaleString('hi-IN')}%0A%0Aकृपया बुकिंग की जानकारी दें।`
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
          <p className="hindi-text swamani-hero-sub">
            बाबा श्याम को भोग चढ़ाएं — Video Call पर देखें
          </p>
          <div className="swamani-hero-info">
            <span className="hindi-text">📌 घर बैठे Online बुकिंग उपलब्ध</span>
            <span className="hindi-text">📹 Video Call पर Live देखें</span>
            <span className="hindi-text">🙏 प्रसाद घर पहुंचाएं</span>
          </div>
          <div className="swamani-hero-btns">
            <a href="tel:9929975116" className="sh-call-btn">
              <FiPhone /> 9929975116
            </a>
            <a href="https://wa.me/919929975116?text=स्वामणी बुकिंग करनी है" target="_blank" rel="noopener noreferrer" className="sh-wa-btn">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp करें</span>
            </a>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="swamani-info-strip">
        <div className="container">
          <p className="hindi-text">
            📌 अगर आप दूर हैं और मंदिर आकर प्रसाद नहीं चढ़वा सकते, तो आप Online बुकिंग करके
            स्वामणी भोग चढ़वा सकते हैं। आपको पूरी प्रक्रिया <strong>Video Call</strong> के माध्यम से Live दिखाई जाएगी।
          </p>
        </div>
      </div>

      {/* Swamani List */}
      <div className="container swamani-container">
        <h2 className="section-title hindi-text">स्वामणी भोग सूची</h2>
        <div className="divider"><span>👑</span></div>

        <div className="swamani-cards-grid">
          {swamaniList.map((item) => (
            <div
              key={item.id}
              className={`swamani-card ${item.special ? 'special-card' : ''} ${selected === item.id ? 'selected' : ''}`}
              onClick={() => setSelected(selected === item.id ? null : item.id)}
            >
              {item.special && <div className="special-ribbon hindi-text">⭐ सर्वश्रेष्ठ</div>}

              <div className="swamani-card-top">
                <div className="swamani-card-img">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
                  />
                  <div className="swamani-img-fallback" style={{ display: 'none' }}>
                    <span>{item.icon}</span>
                  </div>
                </div>
                <div className="swamani-card-num">
                  {String(item.id).padStart(2,'0')}
                </div>
              </div>

              <div className="swamani-card-body">
                <h3 className="hindi-text swamani-item-name">{item.name}</h3>
                <p className="hindi-text swamani-item-desc">{item.desc}</p>
                <div className="swamani-price-row">
                  <span className="swamani-price">₹{item.price.toLocaleString('hi-IN')}</span>
                </div>
              </div>

              <div className="swamani-card-actions">
                <button
                  className="swamani-book-btn hindi-text"
                  onClick={(e) => { e.stopPropagation(); handleBook(item) }}
                >
                  <FaWhatsapp /> अभी बुक करें
                </button>
                <a
                  href={`tel:9929975116`}
                  className="swamani-call-btn"
                  onClick={e => e.stopPropagation()}
                  aria-label="Call"
                >
                  <FiPhone />
                </a>
              </div>
            </div>
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
                <span className="pt-name hindi-text">{item.icon} {item.name}</span>
                <span className="pt-price">₹{item.price.toLocaleString('hi-IN')}</span>
                <button className="pt-book-btn" onClick={() => handleBook(item)} aria-label={`Book ${item.name}`}>
                  <FaWhatsapp />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="swamani-cta-box">
          <div className="swamani-cta-text">
            <h3 className="hindi-text">बुकिंग के लिए सम्पर्क करें</h3>
            <p className="hindi-text">हम 24/7 उपलब्ध हैं। Video Call पर भोग सेवा उपलब्ध।</p>
          </div>
          <div className="swamani-cta-btns">
            <a href="tel:9929975116" className="cta-call">
              <FiPhone /> 9929975116
            </a>
            <a href="https://wa.me/919929975116?text=स्वामणी भोग बुकिंग करनी है" className="cta-wa" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
