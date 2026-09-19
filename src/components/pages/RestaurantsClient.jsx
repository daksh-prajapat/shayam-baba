'use client'
import Link from 'next/link'
import { FiPhone, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp, FaLeaf } from 'react-icons/fa'
import './Restaurants.css'

const restaurants = [
  {
    name: 'श्याम भोजनालय',
    nameEn: 'Shyam Bhojanalaay',
    type: 'शुद्ध शाकाहारी',
    specialty: 'राजस्थानी थाली',
    priceRange: '₹80 – ₹200',
    phone: '9414111222',
    address: 'मंदिर मार्ग, खाटू श्याम जी',
    timing: 'सुबह 7 AM – रात 10 PM',
    items: ['राजस्थानी थाली', 'दाल बाटी चूरमा', 'लस्सी', 'चाय', 'पूरी सब्जी'],
    tag: 'सबसे लोकप्रिय',
    highlight: true,
    desc: 'मंदिर के पास का सबसे मशहूर भोजनालय। दाल बाटी चूरमा और राजस्थानी थाली के लिए प्रसिद्ध।',
    veg: true,
  },
  {
    name: 'बाबा की रसोई',
    nameEn: 'Baba Ki Rasoi',
    type: 'शुद्ध शाकाहारी',
    specialty: 'घर जैसा खाना',
    priceRange: '₹60 – ₹150',
    phone: '9782222333',
    address: 'मुख्य बाजार, खाटू',
    timing: 'सुबह 6 AM – रात 9 PM',
    items: ['थाली', 'पूरी-सब्जी', 'खिचड़ी', 'हलवा', 'चाय-नाश्ता'],
    tag: 'सस्ता व अच्छा',
    highlight: false,
    desc: 'घर जैसे स्वाद के लिए मशहूर। सुबह का नाश्ता और थाली दोनों मिलते हैं।',
    veg: true,
  },
  {
    name: 'श्री राम ढाबा',
    nameEn: 'Shri Ram Dhaba',
    type: 'शाकाहारी ढाबा',
    specialty: 'दाल-रोटी-सब्जी',
    priceRange: '₹50 – ₹120',
    phone: '9928333444',
    address: 'जयपुर रोड, खाटू श्याम जी',
    timing: 'सुबह 7 AM – रात 10 PM',
    items: ['दाल-रोटी', 'सब्जी', 'चावल', 'राजमा', 'छोले', 'लस्सी'],
    tag: 'ढाबा स्टाइल',
    highlight: false,
    desc: 'असली ढाबा स्टाइल का खाना। ट्रक ड्राइवरों और तीर्थयात्रियों में बेहद लोकप्रिय।',
    veg: true,
  },
  {
    name: 'खाटू मिष्ठान भंडार',
    nameEn: 'Khatu Mishthan Bhandar',
    type: 'मिठाई व नाश्ता',
    specialty: 'राजस्थानी मिठाइयां',
    priceRange: '₹20 – ₹500 (मिठाई)',
    phone: '9414444555',
    address: 'मंदिर चौक, खाटू',
    timing: 'सुबह 6 AM – रात 9 PM',
    items: ['घेवर', 'पेड़ा', 'लड्डू', 'जलेबी', 'समोसा', 'कचौरी', 'चाय'],
    tag: 'मिठाई विशेष',
    highlight: false,
    desc: 'राजस्थानी मिठाइयों के लिए प्रसिद्ध। बाबा को चढ़ावे के लिए प्रसाद यहाँ से ले सकते हैं।',
    veg: true,
  },
  {
    name: 'अन्नपूर्णा रेस्टोरेंट',
    nameEn: 'Annapurna Restaurant',
    type: 'शुद्ध शाकाहारी',
    specialty: 'पंजाबी व राजस्थानी',
    priceRange: '₹100 – ₹300',
    phone: '9660555666',
    address: 'बस स्टैंड के पास, खाटू',
    timing: 'सुबह 8 AM – रात 10:30 PM',
    items: ['पंजाबी थाली', 'राजस्थानी थाली', 'पनीर', 'नान-रोटी', 'लस्सी', 'आइसक्रीम'],
    tag: 'AC रेस्टोरेंट',
    highlight: false,
    desc: 'साफ-सुथरा AC रेस्टोरेंट। परिवार के साथ बैठकर खाने के लिए उपयुक्त।',
    veg: true,
  },
  {
    name: 'चाय-पानी कॉर्नर',
    nameEn: 'Chai-Pani Corner',
    type: 'स्नैक्स व चाय',
    specialty: 'चाय, कचौरी, समोसा',
    priceRange: '₹10 – ₹60',
    phone: '9829666777',
    address: 'मंदिर गेट के पास',
    timing: 'सुबह 4 AM – रात 11 PM',
    items: ['चाय', 'कचौरी', 'समोसा', 'पकौड़ा', 'ठंडाई', 'लस्सी'],
    tag: 'जल्दी नाश्ता',
    highlight: false,
    desc: 'दर्शन से पहले या बाद में जल्दी नाश्ते के लिए परफेक्ट। सुबह 4 बजे से खुलता है।',
    veg: true,
  },
]

export default function RestaurantsClient() {
  return (
    <div className="restaurants-page">
      {/* Hero */}
      <div className="page-hero restaurants-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="page-hero-label hindi-text">🍽️ भोजन व्यवस्था</p>
          <h1 className="hindi-text">खाटू श्याम जी के पास रेस्टोरेंट</h1>
          <p className="hindi-text page-hero-sub">शुद्ध शाकाहारी भोजन — राजस्थानी थाली से चाय-नाश्ते तक</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 20px' }}>

        {/* Veg Note */}
        <div className="rest-veg-banner">
          <FaLeaf style={{ color: '#25d366' }} />
          <span className="hindi-text">खाटू श्याम धाम में <strong>100% शुद्ध शाकाहारी</strong> भोजन मिलता है — मांस-मदिरा वर्जित है।</span>
        </div>

        {/* Grid */}
        <div className="rest-grid">
          {restaurants.map((r, i) => (
            <div key={i} className={`rest-card card ${r.highlight ? 'rest-highlight' : ''}`}>
              {r.highlight && <div className="rest-ribbon hindi-text">⭐ सबसे लोकप्रिय</div>}

              <div className="rest-top">
                <div className="rest-icon">🍽️</div>
                <div className="rest-title-box">
                  <h3 className="hindi-text rest-name">{r.name}</h3>
                  <p className="rest-name-en">{r.nameEn}</p>
                  <div className="rest-type-badge">
                    <FaLeaf style={{ color: '#25d366', fontSize: '0.7rem' }} />
                    <span className="hindi-text">{r.type}</span>
                  </div>
                </div>
                <span className="rest-tag hindi-text">{r.tag}</span>
              </div>

              <p className="hindi-text rest-desc">{r.desc}</p>

              <div className="rest-meta">
                <div className="rest-meta-row"><span>🍛</span><span className="hindi-text">विशेषता: <strong>{r.specialty}</strong></span></div>
                <div className="rest-meta-row"><span>💰</span><span className="rest-price">{r.priceRange} / व्यक्ति</span></div>
                <div className="rest-meta-row"><FiClock size={13} /><span className="hindi-text">{r.timing}</span></div>
                <div className="rest-meta-row"><FiMapPin size={13} /><span className="hindi-text rest-addr">{r.address}</span></div>
              </div>

              <div className="rest-menu">
                <p className="hindi-text rest-menu-label">मेन्यू में:</p>
                <div className="rest-items">
                  {r.items.map((item, ii) => (
                    <span key={ii} className="rest-item hindi-text">{item}</span>
                  ))}
                </div>
              </div>

              <a href={`tel:${r.phone}`} className="rest-call-btn">
                <FiPhone /> <span className="hindi-text">{r.phone} — Call करें</span>
              </a>
            </div>
          ))}
        </div>

        {/* Food Tips */}
        <div className="card rest-tips">
          <h3 className="hindi-text" style={{ color: 'var(--secondary)', marginBottom: 16 }}>🍽️ जानने योग्य बातें</h3>
          <div className="rest-tips-grid">
            {[
              { icon: '🌿', tip: 'खाटू में सभी रेस्टोरेंट 100% शाकाहारी हैं। प्याज-लहसुन रहित भोजन भी मिलता है।' },
              { icon: '🕐', tip: 'दर्शन के बाद भीड़ होती है — सुबह 7–9 और दोपहर 1–2 बजे peak time।' },
              { icon: '💧', tip: 'पैकेट बंद पानी पिएं। खुले पानी से बचें।' },
              { icon: '🍛', tip: 'दाल बाटी चूरमा यहाँ का सबसे मशहूर व्यंजन है — जरूर try करें।' },
            ].map((t, i) => (
              <div key={i} className="rest-tip-item">
                <span className="rest-tip-icon">{t.icon}</span>
                <span className="hindi-text rest-tip-text">{t.tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card rest-cta">
          <h3 className="hindi-text">📞 भोजन के बारे में जानकारी चाहिए?</h3>
          <p className="hindi-text">हमसे बात करें — हम आपकी यात्रा में मदद करेंगे।</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
            <a href="tel:8302019637" className="btn-primary"><FiPhone /> 8302019637</a>
            <a href="https://wa.me/918302019637?text=खाटू में भोजन की जानकारी चाहिए।"
              target="_blank" rel="noopener noreferrer" className="btn-wa">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20, flexWrap: 'wrap' }}>
          <Link href="/hotels" className="btn-secondary hindi-text">🏨 होटल देखें →</Link>
          <Link href="/dharamshala" className="btn-secondary hindi-text">🛕 धर्मशाला देखें →</Link>
        </div>
      </div>
    </div>
  )
}
