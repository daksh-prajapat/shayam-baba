import React from 'react'
import { Link } from 'react-router-dom'
import './FestivalSection.css'

const festivals = [
  { name: 'फाल्गुन मेला', date: 'फरवरी-मार्च', desc: 'वर्ष का सबसे बड़ा मेला — लाखों भक्त', icon: '🚩', highlight: true },
  { name: 'श्याम जयंती', date: 'भादो शुक्ल एकादशी', desc: 'बाबा की जयंती — विशेष दर्शन', icon: '👑' },
  { name: 'जन्माष्टमी', date: 'भादो कृष्ण अष्टमी', desc: 'रात्रि 12 बजे विशेष पूजा', icon: '🪈' },
  { name: 'एकादशी', date: 'हर महीने', desc: 'विशेष दर्शन व पूजा', icon: '🙏' },
  { name: 'होली', date: 'फाल्गुन पूर्णिमा', desc: 'बाबा के साथ होली', icon: '🌈' },
  { name: 'दीपावली', date: 'कार्तिक अमावस्या', desc: 'मंदिर दीपों से जगमगाता है', icon: '🪔' },
]

export default function FestivalSection() {
  return (
    <section className="festival-section">
      <div className="container">
        <p className="section-label hindi-text">🌸 पर्व</p>
        <h2 className="section-title hindi-text">विशेष त्यौहार</h2>
        <div className="divider"><span>🚩</span></div>

        <div className="festival-grid">
          {festivals.map((f, i) => (
            <Link key={i} to="/festivals" className={`festival-card card ${f.highlight ? 'highlight' : ''}`}>
              <div className="festival-icon">{f.icon}</div>
              <h3 className="hindi-text festival-name">{f.name}</h3>
              <p className="hindi-text festival-date">{f.date}</p>
              <p className="hindi-text festival-desc">{f.desc}</p>
              {f.highlight && <span className="festival-badge hindi-text">मुख्य उत्सव</span>}
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/festivals" className="btn-secondary hindi-text">
            सभी त्यौहार देखें →
          </Link>
        </div>
      </div>
    </section>
  )
}
