import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './NishanMannat.css'

export default function NishanMannat() {
  return (
    <div className="nishan-page">
      <div className="page-hero nishan-hero">
        <div className="container">
          <h1 className="hindi-text">निशान यात्रा & मन्नत</h1>
          <p className="hindi-text">बाबा श्याम के दरबार में निशान चढ़ाने की परंपरा</p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 20px' }}>
        <div className="nishan-grid">
          {/* Nishan Info */}
          <div className="card nishan-info-card">
            <h2 className="hindi-text nishan-section-title">🚩 निशान यात्रा क्या है?</h2>
            <p className="hindi-text nishan-para">
              निशान यात्रा खाटू श्याम जी की एक अद्भुत परंपरा है। जब भक्त की मन्नत पूरी हो जाती है, तो वे बाबा के दरबार में निशान (ध्वजा) चढ़ाते हैं।
            </p>
            <p className="hindi-text nishan-para">
              यह निशान लाल या पीले रंग का होता है जिस पर "जय श्री श्याम" लिखा होता है। भक्त इसे पैदल यात्रा करते हुए मंदिर लेकर आते हैं।
            </p>
            <p className="hindi-text nishan-para">
              फाल्गुन मेले में हजारों भक्त निशान चढ़ाते हैं। यह दृश्य अत्यंत भव्य और भक्तिमय होता है।
            </p>
          </div>

          <div className="card mannat-info-card">
            <h2 className="hindi-text nishan-section-title">🙏 मन्नत कैसे मानें?</h2>
            <div className="mannat-steps">
              {[
                ['1', 'पहले बाबा के सामने बैठकर मन्नत मानें'],
                ['2', 'दिल की गहराई से श्याम बाबा का नाम लें'],
                ['3', 'जो मन में हो वह मांगें — बाबा सुनते हैं'],
                ['4', 'मन्नत पूरी होने पर निशान चढ़ाने का प्रण करें'],
                ['5', 'मन्नत पूरी हो तो खाटू आएं और निशान चढ़ाएं'],
              ].map(([num, step]) => (
                <div key={num} className="mannat-step">
                  <span className="step-num">{num}</span>
                  <span className="hindi-text">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guidelines */}
        <div className="guidelines-section">
          <h2 className="section-title hindi-text">महत्वपूर्ण जानकारी</h2>
          <div className="divider"><span>🚩</span></div>
          <div className="guidelines-grid">
            {[
              { icon: '👗', title: 'वस्त्र', text: 'मंदिर में सात्विक वस्त्र पहनकर जाएं' },
              { icon: '👞', title: 'जूते-चप्पल', text: 'मंदिर परिसर में जूते बाहर उतारें' },
              { icon: '📱', title: 'फोटोग्राफी', text: 'गर्भगृह में फोटो लेना वर्जित है' },
              { icon: '🌸', title: 'फूल', text: 'बाबा को गुलाब और मोगरे के फूल प्रिय हैं' },
              { icon: '🤫', title: 'शांति', text: 'मंदिर में शांति बनाए रखें' },
              { icon: '🚩', title: 'निशान', text: 'निशान चढ़ाने के लिए मंदिर समिति से अनुमति लें' },
            ].map((g, i) => (
              <div key={i} className="guideline-card card">
                <span className="guideline-icon">{g.icon}</span>
                <h3 className="hindi-text">{g.title}</h3>
                <p className="hindi-text">{g.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Nishan */}
        <div className="nishan-contact">
          <h3 className="hindi-text">निशान यात्रा की बुकिंग के लिए</h3>
          <div className="nishan-contact-btns">
            <a href="tel:9929975116" className="btn-primary">📞 9929975116</a>
            <a href="https://wa.me/919929975116?text=निशान यात्रा की जानकारी चाहिए" className="whatsapp-nishan-btn" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> WhatsApp करें
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
