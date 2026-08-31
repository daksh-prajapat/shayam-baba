import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import './PrasadPuja.css'

const prasadItems = [
  { name: 'चूरमा', price: 501, icon: '🍯', desc: 'बाबा का प्रिय प्रसाद' },
  { name: 'पेड़ा', price: 501, icon: '🍮', desc: 'मीठा दूध पेड़ा' },
  { name: 'लड्डू', price: 501, icon: '🟡', desc: 'बेसन के लड्डू' },
  { name: 'ड्राई फ्रूट', price: 501, icon: '🌰', desc: 'मेवे का प्रसाद' },
]

const swamoniItems = [
  { name: 'लड्डू पूरी सब्जी', price: 8100 },
  { name: 'खीर पूरी सब्जी', price: 8100 },
  { name: 'चूरमा पूरी सब्जी', price: 8100 },
  { name: 'चूरमा', price: 9500 },
  { name: 'चूरमा लड्डू', price: 15100 },
  { name: 'बूंदी ड्राय फ्रूट्स', price: 17000 },
  { name: 'बूंदी', price: 17000 },
  { name: 'गोंद ड्राय फ्रूट लड्डू', price: 20000 },
  { name: 'गोंद पाक स्वामणी', price: 23000 },
  { name: 'दिलखुशार स्वामणी', price: 23000 },
  { name: 'सफेद पेड़ा', price: 23000 },
  { name: 'केसर पिस्ता पेड़ा', price: 25000 },
  { name: '✨ स्पेशल छप्पन भोग', price: 31000, special: true },
]

const pujaTypes = [
  { name: 'विशेष श्रृंगार पूजा', price: '2100+', icon: '🌸', desc: 'बाबा का विशेष श्रृंगार करवाएं' },
  { name: 'मंगला आरती पूजा', price: '1100+', icon: '🌅', desc: 'प्रथम आरती में नाम संकल्प' },
  { name: 'भोग पूजा', price: '1100+', icon: '🍯', desc: 'भोग लगवाएं बाबा को' },
  { name: 'महाभिषेक पूजा', price: '5100+', icon: '🪔', desc: 'पंचामृत अभिषेक' },
  { name: 'संध्या आरती', price: '1100+', icon: '🌇', desc: 'सायं आरती में नाम संकल्प' },
  { name: 'जन्मदिन/विशेष पूजा', price: '3100+', icon: '🎂', desc: 'जन्मदिन पर विशेष पूजा' },
]

export default function PrasadPuja() {
  const [tab, setTab] = useState('prasad')
  const [form, setForm] = useState({ name: '', phone: '', puja: '', date: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `नमस्ते! मुझे बुकिंग करनी है।%0A नाम: ${form.name}%0A फोन: ${form.phone}%0A पूजा/प्रसाद: ${form.puja}%0A दिनांक: ${form.date}`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
  }

  return (
    <div className="prasad-page">
      <div className="page-hero prasad-hero">
        <div className="container">
          <h1 className="hindi-text">प्रसाद, भोग & पूजा बुकिंग</h1>
          <p className="hindi-text">घर बैठे खाटू श्याम जी को प्रसाद चढ़वाएं</p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 20px' }}>
        {/* Info Banner */}
        <div className="info-banner hindi-text">
          📌 अगर आप दूर हैं और मंदिर आकर प्रसाद नहीं चढ़वा सकते, तो आप Online बुकिंग करके प्रसाद चढ़वा सकते हैं।
          आपको पूरी प्रक्रिया <strong>Video Call</strong> के माध्यम से Live दिखाई जाएगी।
        </div>

        {/* Tabs */}
        <div className="puja-tabs">
          {[
            { id: 'prasad', label: '🍯 प्रसाद' },
            { id: 'swamoni', label: '👑 स्वामणी भोग' },
            { id: 'puja', label: '🪔 पूजा सेवा' },
            { id: 'booking', label: '📝 बुकिंग फॉर्म' },
          ].map(t => (
            <button
              key={t.id}
              className={`puja-tab-btn ${tab === t.id ? 'active' : ''} hindi-text`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'prasad' && (
          <div>
            <div className="prasad-cards">
              {prasadItems.map((p, i) => (
                <div key={i} className="prasad-big-card card">
                  <span className="prasad-big-emoji">{p.icon}</span>
                  <h3 className="hindi-text">{p.name}</h3>
                  <p className="hindi-text prasad-card-desc">{p.desc}</p>
                  <div className="price-tag">₹{p.price} <span className="hindi-text per-bhag">प्रति भाग</span></div>
                  <a
                    href={`https://wa.me/919929975116?text=${p.name} प्रसाद बुकिंग करनी है — ₹${p.price}`}
                    className="book-now-btn hindi-text"
                  >
                    <FaWhatsapp /> अभी बुक करें
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'swamoni' && (
          <div className="swamoni-page-table">
            <div className="swamoni-header-row">
              <span className="hindi-text">स्वामणी का नाम</span>
              <span className="hindi-text">मूल्य</span>
            </div>
            {swamoniItems.map((s, i) => (
              <div key={i} className={`swamoni-page-row ${s.special ? 'special-row' : ''}`}>
                <span className="hindi-text sw-name">{s.name}</span>
                <span className="sw-price">₹{s.price.toLocaleString('hi-IN')}</span>
                <a
                  href={`https://wa.me/919929975116?text=${s.name} बुकिंग करनी है — ₹${s.price}`}
                  className="sw-book-btn"
                >
                  <FaWhatsapp />
                </a>
              </div>
            ))}
            <div className="swamoni-note hindi-text">
              * सभी स्वामणी Video Call के माध्यम से Live चढ़ाई जाती है। Contact: 9929975116
            </div>
          </div>
        )}

        {tab === 'puja' && (
          <div className="puja-cards">
            {pujaTypes.map((p, i) => (
              <div key={i} className="puja-service-card card">
                <span className="puja-icon">{p.icon}</span>
                <h3 className="hindi-text">{p.name}</h3>
                <p className="hindi-text puja-desc">{p.desc}</p>
                <div className="puja-price">₹{p.price}</div>
                <a
                  href={`https://wa.me/919929975116?text=${p.name} बुकिंग करनी है`}
                  className="book-now-btn hindi-text"
                >
                  <FaWhatsapp /> बुक करें
                </a>
              </div>
            ))}
          </div>
        )}

        {tab === 'booking' && (
          <div className="booking-section">
            <form className="booking-form card" onSubmit={handleSubmit}>
              <h3 className="hindi-text booking-title">प्रसाद / पूजा बुकिंग फॉर्म</h3>
              <div className="form-group">
                <label className="hindi-text">आपका नाम *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="नाम लिखें"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="hindi-text">मोबाइल नंबर *</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="10 अंकों का नंबर"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  required
                  pattern="[0-9]{10}"
                />
              </div>
              <div className="form-group">
                <label className="hindi-text">पूजा / प्रसाद का प्रकार *</label>
                <select className="form-input" value={form.puja} onChange={e => setForm({ ...form, puja: e.target.value })} required>
                  <option value="">चुनें</option>
                  <option>चूरमा प्रसाद ₹501</option>
                  <option>पेड़ा प्रसाद ₹501</option>
                  <option>लड्डू प्रसाद ₹501</option>
                  <option>लड्डू पूरी सब्जी ₹8100</option>
                  <option>स्पेशल छप्पन भोग ₹31000</option>
                  <option>विशेष श्रृंगार पूजा</option>
                  <option>महाभिषेक पूजा</option>
                </select>
              </div>
              <div className="form-group">
                <label className="hindi-text">दिनांक</label>
                <input
                  type="date"
                  className="form-input"
                  value={form.date}
                  onChange={e => setForm({ ...form, date: e.target.value })}
                />
              </div>
              <button type="submit" className="submit-btn hindi-text">
                <FaWhatsapp /> WhatsApp पर भेजें
              </button>
            </form>

            <div className="contact-box card">
              <h3 className="hindi-text">सीधे सम्पर्क करें</h3>
              <a href="tel:9929975116" className="contact-btn-big">
                <FiPhone /> 9929975116
              </a>
              <a href="https://wa.me/919929975116" className="whatsapp-btn-big" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
