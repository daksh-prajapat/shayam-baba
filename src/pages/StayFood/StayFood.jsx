import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import './StayFood.css'

const dharamshalas = [
  { name: 'श्री श्याम धर्मशाला', type: 'धर्मशाला', price: 'निःशुल्क / ₹200', capacity: '500+ कमरे', phone: '9929975116' },
  { name: 'सेवा भवन', type: 'धर्मशाला', price: '₹100-300', capacity: '200 कमरे', phone: '9929975116' },
  { name: 'खाटू रिसोर्ट', type: 'होटल', price: '₹800-2000', capacity: 'AC/Non-AC', phone: '9929975116' },
  { name: 'श्याम निवास', type: 'गेस्ट हाउस', price: '₹400-800', capacity: '50 कमरे', phone: '9929975116' },
]

const restaurants = [
  { name: 'बाबा का भंडारा', type: 'भंडारा', specialty: 'निःशुल्क भोजन', timing: 'प्रतिदिन' },
  { name: 'श्याम भोजनालय', type: 'रेस्टोरेंट', specialty: 'शाकाहारी भोजन', timing: '6 AM - 10 PM' },
  { name: 'राजस्थानी ढाबा', type: 'ढाबा', specialty: 'दाल बाटी चूरमा', timing: '7 AM - 9 PM' },
  { name: 'मिष्ठान भंडार', type: 'मिठाई', specialty: 'मिठाई, नाश्ता', timing: '5 AM - 11 PM' },
]

export default function StayFood() {
  return (
    <div className="stay-page">
      <div className="page-hero stay-hero">
        <div className="container">
          <h1 className="hindi-text">रहने & खाने की व्यवस्था</h1>
          <p className="hindi-text">खाटू धाम में ठहरने और भोजन की सम्पूर्ण जानकारी</p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 20px' }}>
        {/* Stay */}
        <h2 className="section-title hindi-text">🏨 ठहरने की व्यवस्था</h2>
        <div className="divider"><span>🛕</span></div>
        <div className="stay-grid">
          {dharamshalas.map((d, i) => (
            <div key={i} className="stay-card card">
              <div className="stay-type-badge hindi-text">{d.type}</div>
              <h3 className="hindi-text stay-name">{d.name}</h3>
              <div className="stay-details">
                <div><span className="hindi-text">💰 मूल्य:</span> <strong>{d.price}</strong></div>
                <div><span className="hindi-text">🛏 क्षमता:</span> <strong className="hindi-text">{d.capacity}</strong></div>
              </div>
              <a href={`tel:${d.phone}`} className="stay-call-btn">
                <FaPhoneAlt /> {d.phone}
              </a>
            </div>
          ))}
        </div>

        {/* Food */}
        <h2 className="section-title hindi-text" style={{ marginTop: 50 }}>🍛 भोजन की व्यवस्था</h2>
        <div className="divider"><span>🍯</span></div>
        <div className="food-grid">
          {restaurants.map((r, i) => (
            <div key={i} className="food-card card">
              <div className="food-type-badge hindi-text">{r.type}</div>
              <h3 className="hindi-text food-name">{r.name}</h3>
              <p className="hindi-text food-specialty">🍽 {r.specialty}</p>
              <p className="hindi-text food-timing">⏰ {r.timing}</p>
            </div>
          ))}
        </div>

        {/* Bhog Info */}
        <div className="bhog-info-box">
          <h3 className="hindi-text">🙏 भंडारे की व्यवस्था</h3>
          <p className="hindi-text">
            मंदिर परिसर में प्रतिदिन नि:शुल्क भंडारे की व्यवस्था होती है। विशेष अवसरों पर हजारों भक्तों को भोजन कराया जाता है।
            फाल्गुन मेले में लाखों भक्तों के लिए महाभंडारे का आयोजन किया जाता है।
          </p>
        </div>
      </div>
    </div>
  )
}
