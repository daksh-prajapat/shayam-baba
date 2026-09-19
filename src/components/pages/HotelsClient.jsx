'use client'
import Link from 'next/link'
import { FiPhone, FiMapPin, FiStar } from 'react-icons/fi'
import { FaWhatsapp, FaParking, FaWifi, FaUtensils } from 'react-icons/fa'
import './Hotels.css'

const hotels = [
  {
    name: 'Hotel Shyam Palace',
    nameHindi: 'होटल श्याम पैलेस',
    stars: 3,
    distance: '200 मीटर',
    priceRange: '₹800 – ₹2,000',
    phone: '9414234567',
    address: 'मंदिर मार्ग, खाटू, सीकर — 332602',
    amenities: ['AC Room', 'WiFi', 'Parking', 'Restaurant', 'Geyser', 'Room Service'],
    tag: 'मंदिर के सबसे पास',
    highlight: true,
    desc: 'मंदिर से सिर्फ 200 मीटर की दूरी पर। साफ-सुथरे कमरे, 24/7 Room Service।',
  },
  {
    name: 'Hotel Khatu Inn',
    nameHindi: 'होटल खाटू इन',
    stars: 3,
    distance: '400 मीटर',
    priceRange: '₹700 – ₹1,800',
    phone: '9782312345',
    address: 'मुख्य बाजार, खाटू श्याम जी, सीकर',
    amenities: ['AC Room', 'Non-AC Room', 'WiFi', 'Parking', 'TV'],
    tag: 'Budget Friendly',
    highlight: false,
    desc: 'बजट यात्रियों के लिए बेहतरीन विकल्प। साफ कमरे और अच्छी सुविधाएं।',
  },
  {
    name: 'Hotel Baba Shyam',
    nameHindi: 'होटल बाबा श्याम',
    stars: 2,
    distance: '300 मीटर',
    priceRange: '₹500 – ₹1,200',
    phone: '9928123456',
    address: 'टेम्पल रोड, खाटू श्याम जी',
    amenities: ['Non-AC Room', 'AC Room', 'Parking', 'Geyser'],
    tag: 'सस्ता व अच्छा',
    highlight: false,
    desc: 'किफायती दरों पर अच्छी सुविधाएं। परिवार के साथ यात्रा के लिए उपयुक्त।',
  },
  {
    name: 'Hotel Shyam Residency',
    nameHindi: 'होटल श्याम रेजीडेंसी',
    stars: 3,
    distance: '600 मीटर',
    priceRange: '₹1,000 – ₹2,500',
    phone: '9414567890',
    address: 'बस स्टैंड रोड, खाटू श्याम जी',
    amenities: ['AC Room', 'WiFi', 'Parking', 'Restaurant', 'Lift', 'Conference Room'],
    tag: 'Premium',
    highlight: false,
    desc: 'आधुनिक सुविधाओं के साथ आरामदायक प्रवास। बस स्टैंड के पास।',
  },
  {
    name: 'Khatu Shyam Guest House',
    nameHindi: 'खाटू श्याम गेस्ट हाउस',
    stars: 2,
    distance: '500 मीटर',
    priceRange: '₹400 – ₹900',
    phone: '9660234567',
    address: 'रींगस रोड, खाटू श्याम जी',
    amenities: ['Non-AC Room', 'Parking', 'Common Kitchen'],
    tag: 'Economy',
    highlight: false,
    desc: 'बेहद किफायती। लंबे प्रवास के लिए उपयुक्त। Common Kitchen उपलब्ध।',
  },
  {
    name: 'Hotel Shri Shyam',
    nameHindi: 'होटल श्री श्याम',
    stars: 3,
    distance: '1 किमी',
    priceRange: '₹900 – ₹2,200',
    phone: '9829345678',
    address: 'सीकर रोड, खाटू श्याम जी',
    amenities: ['AC Room', 'WiFi', 'Parking', 'Restaurant', 'Geyser', 'Laundry'],
    tag: 'Best Rated',
    highlight: false,
    desc: 'खाटू धाम में सबसे अच्छी Rating वाला होटल। सभी आधुनिक सुविधाएं।',
  },
]

const amenityIcon = {
  'WiFi': <FaWifi />,
  'Parking': <FaParking />,
  'Restaurant': <FaUtensils />,
}

export default function HotelsClient() {
  return (
    <div className="hotels-page">
      {/* Hero */}
      <div className="page-hero hotels-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="page-hero-label hindi-text">🏨 ठहरने की व्यवस्था</p>
          <h1 className="hindi-text">खाटू श्याम जी के पास होटल</h1>
          <p className="hindi-text page-hero-sub">मंदिर के नजदीक सभी बजट के होटल — AC, Non-AC, Family Rooms</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 20px' }}>

        {/* Info Banner */}
        <div className="hotels-info-banner">
          <div className="hib-item"><FiMapPin /><span className="hindi-text">मंदिर से 200m–1km की दूरी पर</span></div>
          <div className="hib-item"><span>💰</span><span className="hindi-text">₹400 से शुरू</span></div>
          <div className="hib-item"><FiPhone /><span className="hindi-text">बुकिंग के लिए Call करें</span></div>
        </div>

        {/* Hotels Grid */}
        <div className="hotels-grid">
          {hotels.map((h, i) => (
            <div key={i} className={`hotel-card card ${h.highlight ? 'hotel-highlight' : ''}`}>
              {h.highlight && <div className="hotel-ribbon hindi-text">⭐ सबसे लोकप्रिय</div>}

              <div className="hotel-top">
                <div className="hotel-icon">🏨</div>
                <div className="hotel-title-box">
                  <h3 className="hindi-text hotel-name">{h.nameHindi}</h3>
                  <p className="hotel-name-en">{h.name}</p>
                  <div className="hotel-stars">
                    {Array.from({ length: h.stars }).map((_, si) => (
                      <FiStar key={si} style={{ color: '#D4A017', fill: '#D4A017' }} />
                    ))}
                  </div>
                </div>
                <div className="hotel-tag-badge hindi-text">{h.tag}</div>
              </div>

              <p className="hindi-text hotel-desc">{h.desc}</p>

              <div className="hotel-meta">
                <div className="hotel-meta-item">
                  <FiMapPin className="hm-icon" />
                  <span className="hindi-text">{h.distance} मंदिर से</span>
                </div>
                <div className="hotel-meta-item">
                  <span>💰</span>
                  <span className="hotel-price">{h.priceRange} / रात</span>
                </div>
                <div className="hotel-meta-item">
                  <FiMapPin className="hm-icon" />
                  <span className="hindi-text hotel-address">{h.address}</span>
                </div>
              </div>

              <div className="hotel-amenities">
                {h.amenities.map((a, ai) => (
                  <span key={ai} className="hotel-amenity hindi-text">
                    {amenityIcon[a] || '✓'} {a}
                  </span>
                ))}
              </div>

              <div className="hotel-actions">
                <a href={`tel:${h.phone}`} className="hotel-call-btn">
                  <FiPhone /> {h.phone}
                </a>
                <a
                  href={`https://wa.me/91${h.phone}?text=नमस्ते! ${h.nameHindi} में Room बुक करना है।`}
                  target="_blank" rel="noopener noreferrer"
                  className="hotel-wa-btn"
                >
                  <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="card hotels-tips">
          <h3 className="hindi-text" style={{ color: 'var(--secondary)', marginBottom: 16 }}>💡 बुकिंग टिप्स</h3>
          <div className="tips-grid">
            {[
              { icon: '📅', tip: 'Falgun Mela (मार्च) में 2–3 महीने पहले बुक करें — सब भर जाते हैं।' },
              { icon: '🕐', tip: 'एकादशी पर होटल जल्दी भर जाते हैं — 1 हफ्ते पहले बुक करें।' },
              { icon: '💰', tip: 'Off Season (मई–जुलाई) में सस्ते rates मिलते हैं।' },
              { icon: '📍', tip: 'मंदिर से 300–500m के होटल सबसे सुविधाजनक हैं।' },
            ].map((t, i) => (
              <div key={i} className="tip-item">
                <span className="tip-icon">{t.icon}</span>
                <span className="hindi-text tip-text">{t.tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hotels-cta card">
          <h3 className="hindi-text">🏨 किसी होटल के बारे में जानकारी चाहिए?</h3>
          <p className="hindi-text">हम आपको सही होटल खोजने में मदद करेंगे।</p>
          <div className="hotels-cta-btns">
            <a href="tel:8302019637" className="btn-primary"><FiPhone /> 8302019637</a>
            <a href="https://wa.me/918302019637?text=मुझे खाटू श्याम जी के पास होटल की जानकारी चाहिए।"
              target="_blank" rel="noopener noreferrer" className="btn-wa">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp करें</span>
            </a>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link href="/dharamshala" className="btn-secondary hindi-text">
            🛕 धर्मशाला देखें (और सस्ता विकल्प) →
          </Link>
        </div>
      </div>
    </div>
  )
}
