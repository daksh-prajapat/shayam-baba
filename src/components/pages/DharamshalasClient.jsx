'use client'
import Link from 'next/link'
import { FiPhone, FiMapPin, FiUsers, FiCheck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './Dharamshalas.css'

const dharamshalas = [
  {
    name: 'श्री खाटू श्याम जी धर्मशाला (मंदिर ट्रस्ट)',
    nameEn: 'Shri Khatu Shyam Ji Dharamshala (Temple Trust)',
    type: 'Trust',
    capacity: '500+ भक्त',
    price: 'निःशुल्क / ₹50–200 (Donation)',
    phone: '01574-284029',
    address: 'मंदिर परिसर के पास, खाटू श्याम जी, सीकर',
    facilities: ['बड़े हॉल', 'शौचालय', 'स्नानघर', 'पीने का पानी', 'Parking', 'पूजा हॉल'],
    tag: 'मंदिर ट्रस्ट',
    highlight: true,
    desc: 'मंदिर ट्रस्ट द्वारा संचालित। भक्तों को मुफ्त या न्यूनतम दान में ठहरने की व्यवस्था। Falgun Mela में विशेष व्यवस्था।',
    timing: '24 घंटे',
  },
  {
    name: 'मारवाड़ धर्मशाला',
    nameEn: 'Marwad Dharamshala',
    type: 'Community',
    capacity: '200 भक्त',
    price: '₹100 – ₹300 / रात',
    phone: '9414123456',
    address: 'मुख्य बाजार के पास, खाटू श्याम जी',
    facilities: ['कमरे', 'शौचालय', 'स्नानघर', 'पीने का पानी', 'किचन'],
    tag: 'सस्ती दरें',
    highlight: false,
    desc: 'मारवाड़ समुदाय द्वारा संचालित। साफ-सुथरे कमरे और किफायती दरें।',
    timing: '24 घंटे',
  },
  {
    name: 'राजस्थान धर्मशाला',
    nameEn: 'Rajasthan Dharamshala',
    type: 'Community',
    capacity: '300 भक्त',
    price: '₹50 – ₹200 / रात',
    phone: '9782456789',
    address: 'रींगस रोड, खाटू श्याम जी, सीकर',
    facilities: ['डॉर्मेटरी', 'Family Room', 'शौचालय', 'स्नानघर', 'Parking'],
    tag: 'बड़ी क्षमता',
    highlight: false,
    desc: 'बड़े परिवारों और ग्रुप के लिए आदर्श। Dormitory और Family Room दोनों उपलब्ध।',
    timing: '24 घंटे',
  },
  {
    name: 'अग्रवाल धर्मशाला',
    nameEn: 'Agarwal Dharamshala',
    type: 'Community',
    capacity: '150 भक्त',
    price: '₹100 – ₹250 / रात',
    phone: '9829234567',
    address: 'जयपुर रोड, खाटू श्याम जी',
    facilities: ['AC Room', 'Non-AC Room', 'किचन', 'शौचालय', 'Hall'],
    tag: 'AC उपलब्ध',
    highlight: false,
    desc: 'अग्रवाल समाज द्वारा संचालित। AC और Non-AC दोनों कमरे। सामूहिक रसोई सुविधा।',
    timing: '24 घंटे',
  },
  {
    name: 'श्याम सेवा धर्मशाला',
    nameEn: 'Shyam Seva Dharamshala',
    type: 'Trust',
    capacity: '100 भक्त',
    price: 'निःशुल्क (Donation आधारित)',
    phone: '9660345678',
    address: 'मंदिर रोड, खाटू',
    facilities: ['कमरे', 'शौचालय', 'पानी', 'बैठक', 'Free Prasad'],
    tag: 'फ्री प्रसाद',
    highlight: false,
    desc: 'Trust द्वारा संचालित। निःशुल्क ठहरने की व्यवस्था। दिन में 2 बार निःशुल्क प्रसाद मिलता है।',
    timing: 'सुबह 6 AM – रात 10 PM',
  },
]

export default function DharamshalasClient() {
  return (
    <div className="dharamshala-page">
      {/* Hero */}
      <div className="page-hero dharamshala-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="page-hero-label hindi-text">🛕 धार्मिक आश्रय</p>
          <h1 className="hindi-text">खाटू धाम धर्मशाला</h1>
          <p className="hindi-text page-hero-sub">मंदिर के पास सस्ती और सुरक्षित ठहरने की व्यवस्था — भक्तों के लिए</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 20px' }}>

        {/* Info Banner */}
        <div className="ds-info-banner">
          <div className="dsib-item"><span>🙏</span><span className="hindi-text">भक्तों के लिए विशेष सुविधा</span></div>
          <div className="dsib-item"><span>💰</span><span className="hindi-text">निःशुल्क से ₹300 तक</span></div>
          <div className="dsib-item"><span>🕐</span><span className="hindi-text">24 घंटे उपलब्ध</span></div>
          <div className="dsib-item"><span>📞</span><span className="hindi-text">पहले Call करके बुक करें</span></div>
        </div>

        {/* Cards */}
        <div className="ds-grid">
          {dharamshalas.map((d, i) => (
            <div key={i} className={`ds-card card ${d.highlight ? 'ds-highlight' : ''}`}>
              {d.highlight && <div className="ds-ribbon hindi-text">⭐ मुख्य धर्मशाला</div>}

              <div className="ds-top">
                <div className="ds-icon">🛕</div>
                <div className="ds-title-box">
                  <h3 className="hindi-text ds-name">{d.name}</h3>
                  <p className="ds-name-en">{d.nameEn}</p>
                </div>
                <span className="ds-tag hindi-text">{d.tag}</span>
              </div>

              <p className="hindi-text ds-desc">{d.desc}</p>

              <div className="ds-meta">
                <div className="ds-meta-row"><FiUsers className="ds-mi" /><span className="hindi-text">क्षमता: {d.capacity}</span></div>
                <div className="ds-meta-row"><span>💰</span><span className="hindi-text ds-price">{d.price}</span></div>
                <div className="ds-meta-row"><span>🕐</span><span className="hindi-text">{d.timing}</span></div>
                <div className="ds-meta-row"><FiMapPin className="ds-mi" /><span className="hindi-text ds-addr">{d.address}</span></div>
              </div>

              <div className="ds-facilities">
                {d.facilities.map((f, fi) => (
                  <span key={fi} className="ds-facility hindi-text"><FiCheck size={11} /> {f}</span>
                ))}
              </div>

              <div className="ds-actions">
                <a href={`tel:${d.phone}`} className="ds-call-btn"><FiPhone /> {d.phone}</a>
                <a href={`https://wa.me/91${d.phone.replace(/\D/g, '')}?text=नमस्ते! ${d.name} में ठहरने की व्यवस्था करनी है।`}
                  target="_blank" rel="noopener noreferrer" className="ds-wa-btn">
                  <FaWhatsapp /> <span className="hindi-text">पूछें</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="card ds-note">
          <h3 className="hindi-text" style={{ color: 'var(--secondary)', marginBottom: 12 }}>⚠️ जरूरी जानकारी</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Falgun Mela (मार्च) में 2–3 महीने पहले बुकिंग करें — सभी धर्मशाला भर जाती हैं।',
              'एकादशी पर भी धर्मशाला जल्दी भर जाती है — 1 हफ्ते पहले Call करें।',
              'पहचान पत्र (Aadhar Card) साथ लाएं — Registration के लिए जरूरी है।',
              'मंदिर ट्रस्ट धर्मशाला में Falgun Mela के दौरान Online Booking नहीं होती।',
            ].map((note, i) => (
              <li key={i} className="hindi-text" style={{ color: 'var(--text-muted)', fontSize: '0.87rem', display: 'flex', gap: 8 }}>
                <span style={{ color: 'var(--secondary)', flexShrink: 0 }}>•</span> {note}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="card ds-cta">
          <h3 className="hindi-text">📞 धर्मशाला बुकिंग में मदद चाहिए?</h3>
          <p className="hindi-text">हम आपको सही धर्मशाला में ठहरने में मदद करेंगे।</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
            <a href="tel:9051858687" className="btn-primary"><FiPhone /> 9051858687</a>
            <a href="https://wa.me/919051858687?text=मुझे खाटू श्याम जी के पास धर्मशाला की जानकारी चाहिए।"
              target="_blank" rel="noopener noreferrer" className="btn-wa">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp करें</span>
            </a>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Link href="/hotels" className="btn-secondary hindi-text">🏨 होटल देखें →</Link>
        </div>
      </div>
    </div>
  )
}
