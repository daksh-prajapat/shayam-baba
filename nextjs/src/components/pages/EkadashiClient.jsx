'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './Ekadashi.css'

const ekadashiList2026 = [
  { name: 'षटतिला एकादशी', date: '25 Jan 2026', tithi: 'माघ कृष्ण', special: false },
  { name: 'जया एकादशी', date: '9 Feb 2026', tithi: 'माघ शुक्ल', special: false },
  { name: 'विजया एकादशी', date: '24 Feb 2026', tithi: 'फाल्गुन कृष्ण', special: false },
  { name: 'आमलकी एकादशी', date: '11 Mar 2026', tithi: 'फाल्गुन शुक्ल', special: false },
  { name: 'पापमोचनी एकादशी', date: '26 Mar 2026', tithi: 'चैत्र कृष्ण', special: false },
  { name: 'कामदा एकादशी', date: '10 Apr 2026', tithi: 'चैत्र शुक्ल', special: false },
  { name: 'वरुथिनी एकादशी', date: '25 Apr 2026', tithi: 'वैशाख कृष्ण', special: false },
  { name: 'मोहिनी एकादशी', date: '9 May 2026', tithi: 'वैशाख शुक्ल', special: false },
  { name: 'अपरा एकादशी', date: '24 May 2026', tithi: 'ज्येष्ठ कृष्ण', special: false },
  { name: 'निर्जला एकादशी', date: '8 Jun 2026', tithi: 'ज्येष्ठ शुक्ल', special: true },
  { name: 'योगिनी एकादशी', date: '22 Jun 2026', tithi: 'आषाढ़ कृष्ण', special: false },
  { name: 'देवशयनी एकादशी', date: '7 Jul 2026', tithi: 'आषाढ़ शुक्ल', special: true },
  { name: 'कामिका एकादशी', date: '21 Jul 2026', tithi: 'श्रावण कृष्ण', special: false },
  { name: 'श्रावण पुत्रदा एकादशी', date: '5 Aug 2026', tithi: 'श्रावण शुक्ल', special: false },
  { name: 'अजा एकादशी', date: '7 Sep 2026', tithi: 'भाद्रपद कृष्ण', special: false },
  { name: 'परिवर्तिनी एकादशी', date: '22 Sep 2026', tithi: 'भाद्रपद शुक्ल', special: false },
  { name: 'इन्दिरा एकादशी', date: '6 Oct 2026', tithi: 'आश्विन कृष्ण', special: false },
  { name: 'पापांकुशा एकादशी', date: '21 Oct 2026', tithi: 'आश्विन शुक्ल', special: false },
  { name: 'रमा एकादशी', date: '5 Nov 2026', tithi: 'कार्तिक कृष्ण', special: false },
  { name: 'देवउठनी एकादशी', date: '20 Nov 2026', tithi: 'कार्तिक शुक्ल', special: true },
  { name: 'उत्पन्ना एकादशी', date: '5 Dec 2026', tithi: 'मार्गशीर्ष कृष्ण', special: false },
  { name: 'मोक्षदा एकादशी', date: '19 Dec 2026', tithi: 'मार्गशीर्ष शुक्ल', special: false },
  { name: 'सफला एकादशी', date: '3 Jan 2027', tithi: 'पौष कृष्ण', special: false },
  { name: 'पुत्रदा एकादशी', date: '18 Jan 2027', tithi: 'पौष शुक्ल', special: false },
]

const vrataSteps = [
  { step: '1', title: 'दशमी (एक दिन पहले)', desc: 'शाम को सात्विक भोजन करें। तामसिक (प्याज, लहसुन, मांस) से परहेज करें। रात को जल्दी सोएं।' },
  { step: '2', title: 'एकादशी — प्रातःकाल', desc: 'ब्रह्म मुहूर्त में उठें। स्नान करें। बाबा श्याम का ध्यान करें। "जय श्री श्याम" का जाप करें।' },
  { step: '3', title: 'पूजा विधि', desc: 'भगवान विष्णु और बाबा श्याम की पूजा करें। धूप-दीप जलाएं। फूल, तुलसी, फल चढ़ाएं। एकादशी व्रत कथा पढ़ें।' },
  { step: '4', title: 'व्रत', desc: 'फलाहार या निर्जला व्रत रखें (अपनी क्षमता अनुसार)। दिन भर बाबा का नाम जपते रहें। श्याम चालीसा पढ़ें।' },
  { step: '5', title: 'संध्याकाल', desc: 'शाम को संध्या आरती करें। भजन-कीर्तन करें। रात को भूमि पर सोएं (सामर्थ्य हो तो)।' },
  { step: '6', title: 'द्वादशी — व्रत तोड़ें', desc: 'अगले दिन (द्वादशी) सूर्योदय के बाद व्रत तोड़ें। पहले तुलसी जल पिएं। फिर सात्विक भोजन ग्रहण करें।' },
]

export default function EkadashiClient() {
  const [activeTab, setActiveTab] = useState('calendar')

  const upcoming = ekadashiList2026.filter(e => {
    const d = new Date(e.date)
    return d >= new Date('2026-09-04')
  }).slice(0, 5)

  return (
    <div className="ekadashi-page">
      {/* Hero */}
      <div className="ek-hero">
        <div className="ek-hero-overlay" />
        <div className="container ek-hero-content">
          <div className="ek-badge hindi-text">🪔 पवित्र तिथि</div>
          <h1 className="hindi-text">एकादशी कैलेंडर 2026</h1>
          <p className="hindi-text">खाटू श्याम जी — एकादशी पर 24 घंटे दर्शन उपलब्ध</p>
          <div className="ek-live-info">
            <span className="hindi-text">📅 अगली एकादशी: <strong>अजा एकादशी — 7 Sep 2026</strong></span>
            <span className="hindi-text">⏰ एकादशी पर: <strong>24 घंटे दर्शन</strong></span>
          </div>
        </div>
      </div>

      <div className="container ek-container">
        {/* Upcoming Box */}
        <div className="ek-upcoming-box">
          <h2 className="hindi-text" style={{ color: 'var(--secondary)', marginBottom: 16 }}>📅 आगामी एकादशी</h2>
          <div className="ek-upcoming-grid">
            {upcoming.map((e, i) => (
              <div key={i} className={`ek-upcoming-card card ${e.special ? 'ek-special' : ''}`}>
                {e.special && <span className="ek-special-badge hindi-text">✨ विशेष</span>}
                <div className="ek-icon">🪔</div>
                <h3 className="hindi-text ek-name">{e.name}</h3>
                <p className="hindi-text ek-tithi">{e.tithi}</p>
                <p className="ek-date">{e.date}</p>
                <div className="ek-darshan hindi-text">24 घंटे दर्शन</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="ek-tabs">
          {[
            { id: 'calendar', label: '📅 Full Calendar' },
            { id: 'vidhi', label: '🙏 व्रत विधि' },
            { id: 'mahatva', label: '✨ महत्व' },
          ].map(t => (
            <button key={t.id} className={`ek-tab ${activeTab === t.id ? 'active' : ''} hindi-text`}
              onClick={() => setActiveTab(t.id)}>{t.label}</button>
          ))}
        </div>

        {/* Calendar Tab */}
        {activeTab === 'calendar' && (
          <div className="ek-calendar-table">
            <div className="ect-header">
              <span className="hindi-text">एकादशी का नाम</span>
              <span className="hindi-text">तिथि</span>
              <span className="hindi-text">दिनांक</span>
              <span className="hindi-text">विशेष</span>
            </div>
            {ekadashiList2026.map((e, i) => (
              <div key={i} className={`ect-row ${e.special ? 'ect-special' : ''}`}>
                <span className="hindi-text ect-name">🪔 {e.name}</span>
                <span className="hindi-text ect-tithi">{e.tithi}</span>
                <span className="ect-date">{e.date}</span>
                <span className={`ect-badge ${e.special ? 'special' : ''} hindi-text`}>
                  {e.special ? '✨ विशेष' : '24 घंटे'}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Vidhi Tab */}
        {activeTab === 'vidhi' && (
          <div className="ek-vidhi-section">
            <div className="card ek-intro-card">
              <h3 className="hindi-text" style={{ color: 'var(--secondary)', marginBottom: 12 }}>एकादशी व्रत — सम्पूर्ण विधि</h3>
              <p className="hindi-text" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                एकादशी व्रत भगवान विष्णु और श्री खाटू श्याम बाबा को अत्यंत प्रिय है। इस दिन व्रत रखने से पापों का नाश होता है
                और मोक्ष की प्राप्ति होती है। खाटू श्याम जी में एकादशी पर मंदिर 24 घंटे खुला रहता है।
              </p>
            </div>
            <div className="ek-steps-grid">
              {vrataSteps.map((s, i) => (
                <div key={i} className="ek-step-card card">
                  <div className="ek-step-num">{s.step}</div>
                  <div>
                    <h4 className="hindi-text ek-step-title">{s.title}</h4>
                    <p className="hindi-text ek-step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="card ek-food-card">
              <h3 className="hindi-text" style={{ color: 'var(--secondary)', marginBottom: 14 }}>🍽️ एकादशी पर क्या खाएं?</h3>
              <div className="ek-food-grid">
                <div className="ek-food-col ek-allowed">
                  <h4 className="hindi-text">✅ खा सकते हैं</h4>
                  {['फल (सभी प्रकार के)', 'दूध, दही, मखाना', 'साबूदाना', 'सिंघाड़े का आटा', 'कुट्टू का आटा', 'आलू, शकरकंद', 'सेंधा नमक', 'घी, मक्खन'].map((f, i) => (
                    <p key={i} className="hindi-text ek-food-item">• {f}</p>
                  ))}
                </div>
                <div className="ek-food-col ek-avoid">
                  <h4 className="hindi-text">❌ नहीं खाएं</h4>
                  {['चावल (सख्त मना)', 'गेहूं/आटा/मैदा', 'दाल/फलियां', 'प्याज, लहसुन', 'मांस, मछली, अंडा', 'सामान्य नमक', 'तेल में तले पदार्थ (जहाँ तक हो)'].map((f, i) => (
                    <p key={i} className="hindi-text ek-food-item">• {f}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mahatva Tab */}
        {activeTab === 'mahatva' && (
          <div className="ek-mahatva-section">
            {[
              { icon: '🙏', title: 'एकादशी का महत्व', text: 'एकादशी तिथि भगवान विष्णु की प्रिय तिथि है। इस दिन व्रत रखने से एक हजार अश्वमेध यज्ञ और सौ राजसूय यज्ञ के समान फल मिलता है। खाटू श्याम जी में एकादशी पर विशेष दर्शन और भजन-कीर्तन होता है।' },
              { icon: '🛕', title: 'खाटू में एकादशी', text: 'खाटू श्याम जी मंदिर में एकादशी के दिन मंदिर 24 घंटे खुला रहता है। इस दिन भक्तों की भीड़ सबसे अधिक होती है। लाखों भक्त एकादशी पर बाबा के दर्शन करने आते हैं। विशेष श्रृंगार और भोग का आयोजन होता है।' },
              { icon: '✨', title: 'निर्जला एकादशी — सर्वश्रेष्ठ', text: 'ज्येष्ठ माह की निर्जला एकादशी सबसे कठिन और सबसे फलदायी व्रत है। इस एकादशी पर बिना जल के व्रत रखने से 24 एकादशी व्रत का फल एक साथ मिलता है। यह व्रत भीष्म एकादशी के नाम से भी जाना जाता है।' },
              { icon: '🌟', title: 'देवउठनी एकादशी', text: 'कार्तिक माह की देवउठनी (प्रबोधिनी) एकादशी पर भगवान विष्णु चार माह की योगनिद्रा से जागते हैं। इस दिन से शुभ कार्य जैसे विवाह, मुंडन आदि शुरू होते हैं। खाटू में इस दिन विशेष उत्सव मनाया जाता है।' },
            ].map((item, i) => (
              <div key={i} className="card ek-mahatva-card">
                <span className="ek-m-icon">{item.icon}</span>
                <div>
                  <h3 className="hindi-text ek-m-title">{item.title}</h3>
                  <p className="hindi-text ek-m-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="ek-cta-box">
          <h3 className="hindi-text">🙏 एकादशी पर खाटू दर्शन के लिए</h3>
          <p className="hindi-text">होटल बुकिंग, यात्रा जानकारी या किसी भी सेवा के लिए सम्पर्क करें</p>
          <div className="ek-cta-btns">
            <a href="tel:9929975116" className="btn-primary"><FiPhone /> 9929975116</a>
            <a href="https://wa.me/919929975116?text=एकादशी पर खाटू दर्शन की जानकारी चाहिए" className="ek-wa-btn" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp करें</span>
            </a>
            <Link href="/booking" className="btn-secondary hindi-text">बुकिंग करें →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
