import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import './PrasadSection.css'

const prasadList = [
  { name: 'चूरमा', price: '501', icon: '🍯' },
  { name: 'पेड़ा', price: '501', icon: '🍮' },
  { name: 'लड्डू', price: '501', icon: '🟡' },
  { name: 'ड्राई फ्रूट', price: '501', icon: '🌰' },
]

const swamoni = [
  { name: 'लड्डू पूरी सब्जी', price: '8100' },
  { name: 'खीर पूरी सब्जी', price: '8100' },
  { name: 'चूरमा पूरी सब्जी', price: '8100' },
  { name: 'चूरमा', price: '9500' },
  { name: 'चूरमा लड्डू', price: '15100' },
  { name: 'बूंदी ड्राय फ्रूट्स', price: '17000' },
  { name: 'बूंदी', price: '17000' },
  { name: 'गोंद ड्राय फ्रूट लड्डू', price: '20000' },
  { name: 'गोंद पाक स्वामणी', price: '23000' },
  { name: 'दिलखुशार स्वामणी', price: '23000' },
  { name: 'सफेद पेड़ा', price: '23000' },
  { name: 'केसर पिस्ता पेड़ा', price: '25000' },
  { name: '✨ स्पेशल छप्पन भोग', price: '31000' },
]

export default function PrasadSection() {
  const [activeTab, setActiveTab] = useState('prasad')

  return (
    <section className="prasad-section">
      <div className="container">
        <p className="section-label hindi-text">🙏 सेवा</p>
        <h2 className="section-title hindi-text">प्रसाद & भोग बुकिंग</h2>
        <div className="divider"><span>🍯</span></div>

        <div className="prasad-info-box hindi-text">
          📌 अगर आप दूर हैं और मंदिर आकर प्रसाद नहीं चढ़वा सकते, तो आप Online बुकिंग करके प्रसाद चढ़वा सकते हैं। 
          आपको पूरी प्रक्रिया Video Call के माध्यम से Live दिखाई जाएगी।
        </div>

        {/* Tabs */}
        <div className="prasad-tabs">
          <button
            className={`prasad-tab-btn ${activeTab === 'prasad' ? 'active' : ''} hindi-text`}
            onClick={() => setActiveTab('prasad')}
          >
            🍯 प्रसाद लिस्ट
          </button>
          <button
            className={`prasad-tab-btn ${activeTab === 'swamoni' ? 'active' : ''} hindi-text`}
            onClick={() => setActiveTab('swamoni')}
          >
            👑 स्वामणी भोग
          </button>
        </div>

        {activeTab === 'prasad' && (
          <div className="prasad-grid">
            {prasadList.map((p, i) => (
              <div key={i} className="prasad-item card">
                <span className="prasad-emoji">{p.icon}</span>
                <span className="prasad-name hindi-text">{p.name}</span>
                <span className="prasad-price">₹{p.price}</span>
                <span className="prasad-per hindi-text">प्रति भाग</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'swamoni' && (
          <div className="swamoni-table">
            {swamoni.map((s, i) => (
              <div key={i} className={`swamoni-row ${s.name.startsWith('✨') ? 'special' : ''}`}>
                <span className="swamoni-num hindi-text">{i + 1}.</span>
                <span className="swamoni-name hindi-text">{s.name}</span>
                <span className="swamoni-price">₹{parseInt(s.price).toLocaleString('hi-IN')}</span>
              </div>
            ))}
          </div>
        )}

        <div className="prasad-actions">
          <a
            href="https://wa.me/919929975116?text=नमस्ते! मुझे प्रसाद बुकिंग करनी है।"
            className="prasad-whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> <span className="hindi-text">WhatsApp पर बुक करें</span>
          </a>
          <a href="tel:9929975116" className="prasad-call-btn hindi-text">
            📞 9929975116 पर Call करें
          </a>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/prasad-puja" className="btn-secondary hindi-text">
            पूजा व प्रसाद की पूरी जानकारी →
          </Link>
        </div>
      </div>
    </section>
  )
}
