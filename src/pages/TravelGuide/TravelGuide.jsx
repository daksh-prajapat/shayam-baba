import React from 'react'
import { FaTrain, FaBus, FaCar, FaPlane, FaParking } from 'react-icons/fa'
import './TravelGuide.css'

const routes = [
  { from: 'जयपुर', dist: '80 km', time: '2 घंटे', bus: 'RSRTC बस', train: 'रींगस होकर' },
  { from: 'दिल्ली', dist: '260 km', time: '4-5 घंटे', bus: 'NH-48', train: 'रींगस जंक्शन' },
  { from: 'अजमेर', dist: '140 km', time: '3 घंटे', bus: 'RSRTC', train: 'रींगस होकर' },
  { from: 'सीकर', dist: '45 km', time: '1 घंटा', bus: 'लोकल बस', train: 'सीकर जंक्शन' },
  { from: 'रींगस', dist: '17 km', time: '30 मिनट', bus: 'टेम्पो', train: 'रींगस → खाटू' },
  { from: 'अलवर', dist: '180 km', time: '3.5 घंटे', bus: 'RSRTC', train: 'रींगस होकर' },
]

export default function TravelGuide() {
  return (
    <div className="travel-page">
      <div className="page-hero travel-hero">
        <div className="container">
          <h1 className="hindi-text">खाटू धाम — यात्रा गाइड</h1>
          <p className="hindi-text">खाटू श्याम जी मंदिर कैसे पहुंचें — सम्पूर्ण गाइड</p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 20px' }}>
        {/* Map */}
        <div className="map-section">
          <h2 className="section-title hindi-text">📍 मंदिर की Location</h2>
          <div className="divider"><span>🗺️</span></div>
          <div className="travel-map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14239.8!2d75.07!3d27.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c9e7d9c3f8d95%3A0x6e9c9c9c9c9c9c9c!2sKhatu%20Shyam%20Temple!5e0!3m2!1shi!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: 16 }}
              allowFullScreen
              loading="lazy"
              title="Khatu Shyam Temple Map"
            ></iframe>
          </div>
        </div>

        {/* Routes Table */}
        <h2 className="section-title hindi-text" style={{ marginTop: 50 }}>विभिन्न शहरों से दूरी</h2>
        <div className="divider"><span>📍</span></div>
        <div className="routes-table">
          <div className="routes-header">
            <span className="hindi-text">शहर से</span>
            <span className="hindi-text">दूरी</span>
            <span className="hindi-text">समय</span>
            <span className="hindi-text">बस</span>
            <span className="hindi-text">ट्रेन</span>
          </div>
          {routes.map((r, i) => (
            <div key={i} className="route-row">
              <span className="hindi-text route-city">{r.from}</span>
              <span className="route-val">{r.dist}</span>
              <span className="hindi-text route-val">{r.time}</span>
              <span className="hindi-text route-val small">{r.bus}</span>
              <span className="hindi-text route-val small">{r.train}</span>
            </div>
          ))}
        </div>

        {/* Transport Modes */}
        <h2 className="section-title hindi-text" style={{ marginTop: 50 }}>परिवहन के साधन</h2>
        <div className="divider"><span>🚗</span></div>
        <div className="transport-grid">
          {[
            { icon: <FaTrain />, title: 'ट्रेन से', points: ['नजदीकी स्टेशन: रींगस जंक्शन', 'रींगस से खाटू 17 km', 'जयपुर, दिल्ली से ट्रेन उपलब्ध', 'रींगस से टेम्पो/बस मिलती है'] },
            { icon: <FaBus />, title: 'बस से', points: ['RSRTC की बस जयपुर, सीकर से', 'प्राइवेट बस भी उपलब्ध', 'जयपुर सिंधी कैंप से बस', 'हर 1-2 घंटे में बस मिलती है'] },
            { icon: <FaCar />, title: 'कार/टैक्सी से', points: ['NH-58 से आएं', 'जयपुर-सीकर हाइवे', 'ऑनलाइन Cab बुक कर सकते हैं', 'पार्किंग की सुविधा उपलब्ध'] },
            { icon: <FaParking />, title: 'पार्किंग', points: ['मंदिर के पास पार्किंग', 'Two-Wheeler पार्किंग', 'Car पार्किंग', 'Bus पार्किंग की व्यवस्था'] },
          ].map((t, i) => (
            <div key={i} className="transport-card card">
              <div className="tc-icon">{t.icon}</div>
              <h3 className="hindi-text">{t.title}</h3>
              <ul className="tc-points">
                {t.points.map((p, j) => (
                  <li key={j} className="hindi-text">• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="travel-tips">
          <h2 className="hindi-text tips-title">💡 यात्रा के लिए सुझाव</h2>
          {[
            'फाल्गुन मेले में बहुत भीड़ होती है — पहले से होटल बुक करें',
            'पानी की बोतल और खाना साथ रखें लंबी यात्रा के लिए',
            'मंदिर में लाइन लग सकती है, धैर्य रखें',
            'सुबह जल्दी आएं — कम भीड़ और अच्छे दर्शन',
            'बुजुर्ग और दिव्यांग के लिए विशेष व्यवस्था उपलब्ध है',
            'किसी भी परेशानी में Call करें: 9929975116',
          ].map((tip, i) => (
            <div key={i} className="tip-row">
              <span className="tip-num">{i + 1}</span>
              <span className="hindi-text">{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
