import React from 'react'
import './DarshanTimings.css'

const aartis = [
  { name: 'मंगला आरती', time: '04:30 – 05:30', summer: '04:30', winter: '05:30', icon: '🌅', desc: 'प्रथम दर्शन, बाबा का जागरण' },
  { name: 'श्रृंगार आरती', time: '07:15 – 08:00', summer: '07:00', winter: '07:30', icon: '🌸', desc: 'बाबा का श्रृंगार, वस्त्र धारण' },
  { name: 'भोग आरती', time: '11:45 – 12:30', summer: '11:45', winter: '12:00', icon: '🍯', desc: 'दोपहर का भोग प्रसाद' },
  { name: 'संध्या आरती', time: '17:30 – 18:00', summer: '17:30', winter: '17:00', icon: '🌇', desc: 'सायंकाल की आरती' },
  { name: 'शयन आरती', time: '20:45 – 21:30', summer: '21:00', winter: '20:30', icon: '🌙', desc: 'रात्रि विश्राम आरती' },
]

const specialDays = [
  { day: 'एकादशी', desc: '24 घंटे दर्शन, विशेष पूजा' },
  { day: 'फाल्गुन मेला', desc: 'रात्रि 12 बजे तक दर्शन' },
  { day: 'जन्माष्टमी', desc: 'रात्रि 12 बजे विशेष पूजा' },
  { day: 'श्याम जयंती', desc: 'विशेष श्रृंगार दर्शन' },
]

export default function DarshanTimings() {
  return (
    <div className="timings-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="hindi-text">दर्शन व आरती समय</h1>
          <p className="hindi-text">खाटू श्याम जी मंदिर — समय सारणी</p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 20px' }}>
        {/* Season Timing */}
        <div className="season-grid">
          <div className="card season-card summer">
            <span className="season-icon">☀️</span>
            <h3 className="hindi-text">ग्रीष्म काल</h3>
            <p className="hindi-text season-months">मार्च – अक्टूबर</p>
            <div className="season-times">
              <div><span className="hindi-text">प्रातः दर्शन</span> <strong>04:30 – 12:30</strong></div>
              <div><span className="hindi-text">सायं दर्शन</span> <strong>16:00 – 22:30</strong></div>
            </div>
          </div>
          <div className="card season-card winter">
            <span className="season-icon">❄️</span>
            <h3 className="hindi-text">शीत काल</h3>
            <p className="hindi-text season-months">नवंबर – फरवरी</p>
            <div className="season-times">
              <div><span className="hindi-text">प्रातः दर्शन</span> <strong>05:30 – 12:30</strong></div>
              <div><span className="hindi-text">सायं दर्शन</span> <strong>16:30 – 21:00</strong></div>
            </div>
          </div>
        </div>

        {/* Aarti Timings */}
        <h2 className="section-title hindi-text" style={{ marginTop: 50 }}>आरती समय</h2>
        <div className="divider"><span>🔔</span></div>
        <div className="aarti-grid">
          {aartis.map((a, i) => (
            <div key={i} className="aarti-card card">
              <div className="aarti-card-icon">{a.icon}</div>
              <h3 className="hindi-text">{a.name}</h3>
              <div className="aarti-times">
                <span className="main-time">{a.time}</span>
              </div>
              <p className="hindi-text aarti-desc">{a.desc}</p>
              <div className="season-compare">
                <span>☀️ {a.summer}</span>
                <span>❄️ {a.winter}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Special Days */}
        <h2 className="section-title hindi-text" style={{ marginTop: 50 }}>विशेष अवसर</h2>
        <div className="divider"><span>🚩</span></div>
        <div className="special-grid">
          {specialDays.map((s, i) => (
            <div key={i} className="special-card card">
              <h3 className="hindi-text special-day">{s.day}</h3>
              <p className="hindi-text special-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="notice-box hindi-text">
          ⚠️ नोट: समय मौसम, त्यौहार और विशेष अवसर के अनुसार बदल सकता है।
          सटीक जानकारी के लिए Call करें: <a href="tel:9929975116">9929975116</a>
        </div>
      </div>
    </div>
  )
}
