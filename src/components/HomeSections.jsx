'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FiPhone, FiArrowRight, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp, FaConciergeBell, FaMapMarkedAlt, FaPhoneAlt, FaTrain, FaBus, FaCar } from 'react-icons/fa'
import { GiTempleGate, GiLotusFlower } from 'react-icons/gi'
import { IoMusicalNotes, IoPlayCircle } from 'react-icons/io5'
import { BsImages } from 'react-icons/bs'
import { MdFestival } from 'react-icons/md'

import './home-sections/HeroSection.css'
import './home-sections/SwamaniPreview.css'
import './home-sections/DarshanTimingWidget.css'
import './home-sections/QuickActions.css'
import './home-sections/AboutShyam.css'
import './home-sections/PrasadSection.css'
import './home-sections/BhajanSection.css'
import './home-sections/FestivalSection.css'
import './home-sections/GalleryPreview.css'
import './home-sections/TravelPreview.css'
import './home-sections/BlogPreview.css'
import './home-sections/ContactStrip.css'
import './home-sections/Home.css'
import './HomeSections.css'

/* ─── HERO ─── */
function HeroSection({ onContactClick }) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div'); p.className = 'particle'
      p.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*6}s;animation-duration:${4+Math.random()*6}s;width:${2+Math.random()*4}px;height:${2+Math.random()*4}px;opacity:${0.3+Math.random()*0.5};`
      c.appendChild(p)
    }
    return () => { if (c) c.innerHTML = '' }
  }, [])
  return (
    <section className="hero-section">
      <div className="hero-particles" ref={ref}></div>
      <div className="hero-mandala"></div>
      <div className="hero-glow top-glow"></div>
      <div className="hero-glow bottom-glow"></div>
      <div className="hero-content">
        <div className="hero-deco"><span>🌸</span><span className="deco-line"></span><span className="hindi-text">श्री श्याम बाबा की जय</span><span className="deco-line"></span><span>🌸</span></div>
        <h1 className="hero-title hindi-text"><span className="title-om">ॐ</span><br />खाटू श्याम जी</h1>
        <h2 className="hero-subtitle hindi-text">हारे का सहारा, बाबा श्याम हमारा</h2>
        <p className="hero-desc hindi-text">बर्बरीक से खाटू श्याम — शीश दानी, कलियुग के भगवान।<br />स्वामणी भोग, प्रसाद बुकिंग, दर्शन — सब कुछ एक जगह।</p>
        <div className="hero-live-bar">
          <span className="hlb-open hindi-text">🟢 अभी खुला</span>
          <span className="hlb-sep">•</span>
          <span className="hindi-text">🪔 Sandhya Aarti: 7:30 PM</span>
          <span className="hlb-sep">•</span>
          <span className="hindi-text">⏰ 4:30 AM – 10:00 PM</span>
        </div>
        <div className="hero-buttons">
          <Link href="/swamani" className="hero-btn-live"><FaConciergeBell className="btn-icon" /><span className="hindi-text">स्वामणी भोग बुकिंग</span></Link>
          <Link href="/prasad-puja" className="btn-secondary"><span className="hindi-text">प्रसाद बुकिंग</span></Link>
          <a href="tel:9929975116" className="hero-btn-call"><FiPhone /><span>9929975116</span></a>
        </div>
        <div className="hero-stats">
          <div className="stat-item"><span className="stat-num">714+</span><span className="stat-label hindi-text">शहर Route Guides</span></div>
          <div className="stat-divider"></div>
          <div className="stat-item"><span className="stat-num hindi-text">५० लाख+</span><span className="stat-label hindi-text">वार्षिक भक्त</span></div>
          <div className="stat-divider"></div>
          <div className="stat-item"><span className="stat-num">24/7</span><span className="stat-label hindi-text">सेवा उपलब्ध</span></div>
        </div>
      </div>
      <div className="scroll-indicator"><div className="scroll-dot"></div><span className="hindi-text">नीचे देखें</span></div>
    </section>
  )
}

/* ─── QUICK ACTIONS ─── */
const qaActions = [
  { icon: <FaConciergeBell />, label: 'स्वामणी भोग', sub: 'Online बुकिंग', path: '/swamani', color: '#D4A017' },
  { icon: <GiTempleGate />, label: 'दर्शन समय', sub: '4:30 AM – 10 PM', path: '/darshan-timings', color: '#7B2D8B' },
  { icon: <GiLotusFlower />, label: 'प्रसाद बुकिंग', sub: '₹501 से शुरू', path: '/prasad-puja', color: '#E91E8C' },
  { icon: <IoMusicalNotes />, label: 'भजन आरती', sub: 'चालीसा · मंत्र', path: '/bhajan-aarti', color: '#9C27B0' },
  { icon: <FaMapMarkedAlt />, label: 'यात्रा गाइड', sub: '714+ Routes', path: '/travel-guide', color: '#2196F3' },
  { icon: <BsImages />, label: 'गैलरी', sub: 'फोटो देखें', path: '/gallery', color: '#4CAF50' },
  { icon: <MdFestival />, label: 'फाल्गुन मेला', sub: '18-20 Mar 2027', path: '/festivals', color: '#FF6B35' },
  { icon: <FaPhoneAlt />, label: 'Call करें', sub: '9929975116', path: 'tel:9929975116', color: '#25d366', isExternal: true },
]
function QuickActionsSection() {
  return (
    <section className="quick-actions-section">
      <div className="container">
        <h2 className="section-title hindi-text">त्वरित सेवाएं</h2>
        <div className="divider"><span>🌸</span></div>
        <div className="qa-grid">
          {qaActions.map((a, i) => (
            a.isExternal
              ? <a key={i} href={a.path} className="qa-card" aria-label={a.label}><div className="qa-icon" style={{ color: a.color, background: `${a.color}20` }}>{a.icon}</div><span className="qa-label hindi-text">{a.label}</span><span className="qa-sub hindi-text">{a.sub}</span></a>
              : <Link key={i} href={a.path} className="qa-card"><div className="qa-icon" style={{ color: a.color, background: `${a.color}20` }}>{a.icon}</div><span className="qa-label hindi-text">{a.label}</span><span className="qa-sub hindi-text">{a.sub}</span></Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── TEMPLE STATUS ─── */
function TempleStatusSection() {
  return (
    <section className="temple-status-section">
      <div className="container">
        <div className="ts-grid">
          <div className="ts-main">
            <p className="section-label hindi-text">🛕 मंदिर परिचय</p>
            <h2 className="section-title hindi-text" style={{ textAlign: 'left' }}>खाटू श्याम जी मंदिर, सीकर</h2>
            <div className="divider" style={{ justifyContent: 'flex-start', margin: '0 0 18px' }}><span>ॐ</span></div>
            <p className="hindi-text ts-desc">
              श्री खाटू श्याम जी मंदिर राजस्थान के सीकर जिले में स्थित है। पौराणिक मान्यता के अनुसार यह मंदिर बर्बरीक जी
              को समर्पित है जिन्हें भगवान श्रीकृष्ण से कलियुग में "श्याम" नाम से पूजे जाने का वरदान प्राप्त हुआ था।
              हर साल लाखों भक्त Khatu Shyam Ji darshan के लिए यहाँ आते हैं।
            </p>
            <div className="ts-chips">
              <span className="ts-chip">📍 Sikar, Rajasthan — 332602</span>
              <span className="ts-chip">📍 Delhi: 310 km · 5–6 hrs</span>
              <span className="ts-chip">📍 Jaipur: 80–89 km · 1.5–2 hrs</span>
              <span className="ts-chip">🚆 Ringas Jn: 17 km nearest railway</span>
              <span className="ts-chip">🎪 Falgun Mela 2027: 18–20 March</span>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
              <Link href="/katha-parichay" className="btn-secondary hindi-text">मंदिर की पूरी जानकारी →</Link>
              <Link href="/travel-guide" className="btn-primary hindi-text">यात्रा गाइड →</Link>
            </div>
          </div>
          <div className="ts-right">
            <div className="card ts-status-card">
              <h3 className="hindi-text" style={{ color: 'var(--secondary)', marginBottom: 14 }}>⏰ आज की स्थिति</h3>
              <div className="ts-row"><span className="hindi-text">🟢 स्थिति</span><strong className="hindi-text" style={{ color: '#25d366' }}>अभी खुला</strong></div>
              <div className="ts-row"><span className="hindi-text">🪔 अगली आरती</span><strong className="hindi-text">Sandhya Aarti 7:30 PM</strong></div>
              <div className="ts-row"><span className="hindi-text">⏰ Darshan</span><strong>4:30 AM – 10:00 PM</strong></div>
              <div className="ts-row"><span className="hindi-text">👥 भीड़</span><strong className="hindi-text">सामान्य</strong></div>
              <a href="https://www.youtube.com/@khatuwalebabain" target="_blank" rel="noopener noreferrer" className="ts-live-btn">🔴 <span className="hindi-text">Live Darshan देखें</span></a>
            </div>
            <div className="card ts-ek-card">
              <h3 className="hindi-text" style={{ color: 'var(--secondary)', marginBottom: 10 }}>📅 अगली एकादशी</h3>
              <p className="hindi-text ts-ek-name">🪔 अजा एकादशी</p>
              <p className="hindi-text ts-ek-date">सितम्बर 7, 2026</p>
              <Link href="/darshan-timings" className="ts-ek-link hindi-text">एकादशी पर 24 घंटे दर्शन →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── SWAMANI + PRASAD (Main Feature) ─── */
const swamaniItems = [
  { name: 'लड्डू पूरी सब्जी', price: 8100, icon: '🍛', img: '/images/orange-flowers.jpg', tag: 'सबसे लोकप्रिय' },
  { name: 'चूरमा', price: 9500, icon: '🍯', img: '/images/marigold.jpg', tag: 'बाबा का प्रिय' },
  { name: 'गोंद ड्राय फ्रूट लड्डू', price: 20000, icon: '🫙', img: '/images/diya.jpg', tag: 'विशेष भोग' },
  { name: 'स्पेशल छप्पन भोग', price: 31000, icon: '👑', img: '/images/prasad-hero.jpg', tag: '⭐ सर्वश्रेष्ठ', special: true },
]
const prasadItems2 = [
  { name: 'अर्जी + नारियल', price: 101, icon: '🥥', img: '/images/prasad1.jpg', tag: 'सबसे सरल' },
  { name: 'पंचमेवा, मोरछड़ी & इत्र', price: 501, icon: '🌸', img: '/images/orange-flowers.jpg', tag: 'लोकप्रिय' },
  { name: 'पूर्ण प्रसाद थाली', price: 1100, icon: '🍯', img: '/images/prasad-hero.jpg', tag: '⭐ सर्वश्रेष्ठ', special: true },
  { name: 'विशेष पूर्ण थाली', price: 2100, icon: '👑', img: '/images/marigold-offerings.jpg', tag: 'महा विशेष', special: true },
]
function SwamaniPrasadSection() {
  const [tab, setTab] = useState('swamani')
  return (
    <section className="sp-main-section">
      <div className="container">
        <p className="section-label hindi-text">🙏 Online बुकिंग सेवा</p>
        <h2 className="section-title hindi-text">स्वामणी भोग & प्रसाद बुकिंग</h2>
        <div className="divider"><span>🍯</span></div>
        <div className="sp-info-banner hindi-text">
          📌 घर बैठे बुकिंग करें — बाबा को भोग/प्रसाद चढ़ाएं — 🏠 प्रसाद घर पहुंचाएं
        </div>

        {/* Tabs */}
        <div className="spm-tabs">
          <button className={`spm-tab ${tab === 'swamani' ? 'active' : ''} hindi-text`} onClick={() => setTab('swamani')}>👑 स्वामणी भोग</button>
          <button className={`spm-tab ${tab === 'prasad' ? 'active' : ''} hindi-text`} onClick={() => setTab('prasad')}>🍯 प्रसाद बुकिंग</button>
        </div>

        {/* Swamani Grid */}
        {tab === 'swamani' && (
          <div className="spm-grid">
            {swamaniItems.map((item, i) => (
              <Link key={i} href="/swamani" className={`spm-card card ${item.special ? 'spm-special' : ''}`}>
                {item.special && <span className="spm-ribbon hindi-text">⭐ सर्वश्रेष्ठ</span>}
                <div className="spm-img">
                  <img src={item.img} alt={item.name} loading="lazy"
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                  <div className="spm-fb"><span>{item.icon}</span></div>
                  <div className="spm-tag hindi-text">{item.tag}</div>
                </div>
                <div className="spm-body">
                  <h3 className="hindi-text spm-name">{item.name}</h3>
                  <div className="spm-price-row">
                    <span className="spm-price">₹{item.price.toLocaleString('hi-IN')}</span>
                    <span className="hindi-text spm-per">प्रति भोग</span>
                  </div>
                  <span className="spm-click hindi-text">बुकिंग के लिए क्लिक करें →</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Prasad Grid */}
        {tab === 'prasad' && (
          <div className="spm-grid">
            {prasadItems2.map((item, i) => (
              <Link key={i} href="/prasad-puja" className={`spm-card card ${item.special ? 'spm-special' : ''}`}>
                {item.special && <span className="spm-ribbon hindi-text">⭐ {item.tag}</span>}
                <div className="spm-img">
                  <img src={item.img} alt={item.name} loading="lazy"
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                  <div className="spm-fb"><span>{item.icon}</span></div>
                  <div className="spm-tag hindi-text">{item.tag}</div>
                </div>
                <div className="spm-body">
                  <h3 className="hindi-text spm-name">{item.name}</h3>
                  <div className="spm-price-row">
                    <span className="spm-price">₹{item.price}</span>
                    <span className="hindi-text spm-per">प्रति थाली</span>
                  </div>
                  <span className="spm-click hindi-text">बुकिंग के लिए क्लिक करें →</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="spm-actions">
          <Link href={tab === 'swamani' ? '/swamani' : '/prasad-puja'} className="btn-primary hindi-text">
            {tab === 'swamani' ? 'सभी स्वामणी देखें →' : 'प्रसाद की पूरी जानकारी →'}
          </Link>
          <a href="https://wa.me/919929975116?text=बुकिंग करनी है" className="spm-wa-btn" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> <span className="hindi-text">WhatsApp बुकिंग</span>
          </a>
          <a href="tel:9929975116" className="spm-call-btn"><FiPhone /> 9929975116</a>
        </div>
      </div>
    </section>
  )
}

/* ─── DARSHAN TIMING ─── */
const timings = [
  { season: 'ग्रीष्म काल', months: 'अप्रैल – सितम्बर', open: '4:30 AM', close: '12:30 PM', reopen: '4:00 PM', finalClose: '10:00 PM', icon: '☀️' },
  { season: 'शीत काल', months: 'अक्टूबर – मार्च', open: '5:30 AM', close: '1:00 PM', reopen: '5:00 PM', finalClose: '9:00 PM', icon: '❄️' },
]
function DarshanTimingSection() {
  return (
    <section className="timing-section">
      <div className="container">
        <p className="section-label hindi-text">⏰ मंदिर समय</p>
        <h2 className="section-title hindi-text">दर्शन व आरती समय 2026</h2>
        <div className="divider"><span>🔔</span></div>
        <div className="timing-grid">
          {timings.map((t, i) => (
            <div key={i} className="timing-card card">
              <div className="timing-card-header"><span className="timing-season-icon">{t.icon}</span><div><h3 className="hindi-text">{t.season}</h3><p className="timing-months hindi-text">{t.months}</p></div></div>
              <div className="timing-rows">
                <div className="timing-row"><span className="t-label hindi-text">🌅 प्रातःकालीन दर्शन</span><span className="t-time">{t.open} – {t.close}</span></div>
                <div className="timing-row"><span className="t-label hindi-text">🔴 मध्यान्ह बंद</span><span className="t-time" style={{ color: '#ff6b6b' }}>{t.close} – {t.reopen}</span></div>
                <div className="timing-row"><span className="t-label hindi-text">🌇 सायंकालीन दर्शन</span><span className="t-time">{t.reopen} – {t.finalClose}</span></div>
              </div>
            </div>
          ))}
        </div>
        <div className="card" style={{ marginTop: 16, padding: '16px 20px', background: 'rgba(212,160,23,0.08)', borderColor: 'rgba(212,160,23,0.4)' }}>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span className="hindi-text" style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>📅 एकादशी: 24 घंटे खुला</span>
            <span className="hindi-text" style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>🎪 Falgun Mela 2027: 24 घंटे — 18–20 Mar</span>
            <span className="hindi-text" style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>🪔 Sandhya Aarti: 7:30 PM</span>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link href="/darshan-timings" className="btn-secondary hindi-text">पूर्ण दर्शन गाइड देखें →</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── ABOUT SHYAM ─── */
const stories = [
  { icon: '👑', title: 'बर्बरीक कौन थे?', content: 'बर्बरीक भीम के पुत्र और घटोत्कच के पुत्र थे। वे महाबलशाली योद्धा थे जो तीन दिव्य बाण धारण करते थे — तीनों लोकों को जीतने में सक्षम।' },
  { icon: '🏹', title: 'शीश दान की कथा', content: 'महाभारत युद्ध से पहले श्री कृष्ण ने बर्बरीक से भिक्षा मांगी — उनका शीश। बर्बरीक ने बिना हिचकिचाहट अपना शीश दान कर दिया।' },
  { icon: '🙏', title: 'खाटू धाम का इतिहास', content: 'कलियुग के आगमन पर भगवान श्री कृष्ण ने वरदान दिया कि कलियुग में बर्बरीक श्याम नाम से पूजे जाएंगे। खाटू में उनका पवित्र शीश विराजमान है।' },
  { icon: '✨', title: 'बाबा का महत्व', content: '"हारे का सहारा" — जो जीवन में थक-हार गया है उनका सहारा बाबा श्याम हैं। यहां जाति, धर्म का कोई भेद नहीं।' },
]
const names = ['श्याम', 'बर्बरीक', 'शीश दानी', 'लखदातार', 'हारे का सहारा', 'कलियुग के भगवान', 'खाटू नरेश', 'मोरविनंदन']
function AboutShyamSection() {
  const [active, setActive] = useState(0)
  return (
    <section className="about-shyam-section">
      <div className="container">
        <p className="section-label hindi-text">🙏 जानिए</p>
        <h2 className="section-title hindi-text">खाटू श्याम जी का परिचय</h2>
        <div className="divider"><span>ॐ</span></div>
        <div className="about-grid">
          <div className="story-tabs-col">
            {stories.map((s, i) => (
              <button key={i} className={`story-tab ${active === i ? 'active' : ''}`} onClick={() => setActive(i)}>
                <span className="tab-icon-circle">{s.icon}</span>
                <span className="hindi-text tab-title">{s.title}</span>
              </button>
            ))}
          </div>
          <div className="story-content-col">
            <div className="story-content-box card">
              <div className="story-big-icon">{stories[active].icon}</div>
              <h3 className="hindi-text">{stories[active].title}</h3>
              <p className="hindi-text story-text">{stories[active].content}</p>
            </div>
            <div className="names-section">
              <h4 className="hindi-text names-heading">बाबा के नाम</h4>
              <div className="names-grid">{names.map((n, i) => <span key={i} className="name-tag hindi-text">{n}</span>)}</div>
            </div>
            <Link href="/katha-parichay" className="btn-secondary hindi-text">पूरी कथा पढ़ें →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── BHAJAN ─── */
const bhajans = [
  { title: 'श्याम तेरी बंसी', type: 'भजन', duration: '5:32', ytId: 'dQw4w9WgXcQ' },
  { title: 'खाटू वाले श्याम', type: 'भजन', duration: '4:48', ytId: 'dQw4w9WgXcQ' },
  { title: 'बाबा श्याम की आरती', type: 'आरती', duration: '3:15', ytId: 'dQw4w9WgXcQ' },
  { title: 'श्याम चालीसा', type: 'चालीसा', duration: '8:20', ytId: 'dQw4w9WgXcQ' },
  { title: 'हारे का सहारा', type: 'भजन', duration: '6:10', ytId: 'dQw4w9WgXcQ' },
  { title: 'शयन आरती', type: 'आरती', duration: '4:05', ytId: 'dQw4w9WgXcQ' },
]
function BhajanSection() {
  return (
    <section className="bhajan-section">
      <div className="container">
        <p className="section-label hindi-text">🎵 सुनें</p>
        <h2 className="section-title hindi-text">भजन, आरती & चालीसा</h2>
        <div className="divider"><span>🎵</span></div>
        <div className="bhajan-grid">
          {bhajans.map((b, i) => (
            <a key={i} href={`https://www.youtube.com/watch?v=${b.ytId}`} target="_blank" rel="noopener noreferrer" className="bhajan-card card">
              <div className="bhajan-thumb"><div className="bhajan-thumb-bg"><IoMusicalNotes className="bhajan-note-icon" /></div><div className="play-overlay"><IoPlayCircle className="play-icon" /></div><span className={`bhajan-type-badge ${b.type === 'आरती' ? 'aarti' : b.type === 'चालीसा' ? 'chalisa' : ''}`}>{b.type}</span></div>
              <div className="bhajan-info"><h4 className="hindi-text bhajan-name">{b.title}</h4><div className="bhajan-meta"><span>⏱ {b.duration}</span></div></div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/bhajan-aarti" className="btn-primary hindi-text">सभी भजन & आरती देखें →</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── FESTIVALS ─── */
const festivalItems = [
  { name: 'फाल्गुन मेला 2027', date: '18–20 March 2027', desc: 'करोड़ों भक्त — एशिया का सबसे बड़ा मेला', icon: '🚩', highlight: true },
  { name: 'श्याम जयंती', date: 'भादो शुक्ल एकादशी', desc: 'विशेष दर्शन व श्रृंगार', icon: '👑' },
  { name: 'जन्माष्टमी', date: 'भादो कृष्ण अष्टमी', desc: 'रात्रि 12 बजे विशेष पूजा', icon: '🪈' },
  { name: 'एकादशी', date: 'हर महीने 2 बार', desc: '24 घंटे दर्शन — निःशुल्क', icon: '🙏' },
  { name: 'होली', date: 'फाल्गुन पूर्णिमा', desc: 'फूलों की होली — भंडारा', icon: '🌈' },
  { name: 'दीपावली', date: 'कार्तिक अमावस्या', desc: 'हजारों दीपों से जगमगाता मंदिर', icon: '🪔' },
]
function FestivalSection() {
  return (
    <section className="festival-section">
      <div className="container">
        <p className="section-label hindi-text">🌸 पर्व</p>
        <h2 className="section-title hindi-text">विशेष त्यौहार & उत्सव</h2>
        <div className="divider"><span>🚩</span></div>
        <div className="festival-grid">
          {festivalItems.map((f, i) => (
            <Link key={i} href="/festivals" className={`festival-card card ${f.highlight ? 'highlight' : ''}`}>
              <div className="festival-icon">{f.icon}</div>
              <h3 className="hindi-text festival-name">{f.name}</h3>
              <p className="hindi-text festival-date">{f.date}</p>
              <p className="hindi-text festival-desc">{f.desc}</p>
              {f.highlight && <span className="festival-badge hindi-text">मुख्य उत्सव</span>}
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/festivals" className="btn-secondary hindi-text">सभी त्यौहार देखें →</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── GALLERY PREVIEW ─── */
const galleryItems = [
  { label: 'मंदिर', emoji: '🛕', bg: 'linear-gradient(135deg,#7B2D8B,#5a1f66)' },
  { label: 'बाबा श्याम', emoji: '👑', bg: 'linear-gradient(135deg,#D4A017,#9a7010)' },
  { label: 'दर्शन', emoji: '🙏', bg: 'linear-gradient(135deg,#E91E8C,#a0135f)' },
  { label: 'फाल्गुन मेला', emoji: '🚩', bg: 'linear-gradient(135deg,#E8552D,#a03015)' },
  { label: 'आरती', emoji: '🪔', bg: 'linear-gradient(135deg,#FF6B35,#c04c20)' },
  { label: 'निशान यात्रा', emoji: '🎺', bg: 'linear-gradient(135deg,#4CAF50,#2e7d32)' },
]
function GalleryPreviewSection() {
  return (
    <section className="gallery-preview-section">
      <div className="container">
        <p className="section-label hindi-text">📸 देखें</p>
        <h2 className="section-title hindi-text">फोटो गैलरी</h2>
        <div className="divider"><span>📸</span></div>
        <div className="gallery-masonry">
          {galleryItems.map((item, i) => (
            <Link key={i} href="/gallery" className={`gallery-item gitem-${i}`} style={{ background: item.bg }}>
              <div className="gallery-overlay"><span className="gallery-emoji">{item.emoji}</span><span className="hindi-text gallery-label">{item.label}</span></div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <Link href="/gallery" className="btn-secondary hindi-text">पूरी गैलरी देखें →</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── TRAVEL PREVIEW ─── */
const travelRoutes = [
  { from: 'जयपुर', to: 'खाटू', dist: '80–89 km', time: '1.5–2 घंटे', icon: <FaCar /> },
  { from: 'दिल्ली', to: 'खाटू', dist: '310 km', time: '5–6 घंटे', icon: <FaCar /> },
  { from: 'रींगस', to: 'खाटू', dist: '17 km', time: '25 मिनट', icon: <FaBus /> },
]
function TravelPreviewSection() {
  return (
    <section className="travel-preview-section">
      <div className="container">
        <p className="section-label hindi-text">📍 यात्रा</p>
        <h2 className="section-title hindi-text">खाटू धाम कैसे पहुंचें?</h2>
        <div className="divider"><span>🗺️</span></div>
        <div className="travel-grid">
          <div className="travel-routes">
            {travelRoutes.map((r, i) => (
              <div key={i} className="route-card card">
                <div className="route-icon">{r.icon}</div>
                <div className="route-info"><span className="hindi-text route-from">{r.from}</span><span className="route-arrow">→</span><span className="hindi-text route-to">{r.to}</span></div>
                <div className="route-meta"><span className="hindi-text">{r.dist}</span><span className="route-dot">•</span><span className="hindi-text">{r.time}</span></div>
              </div>
            ))}
            <div className="transport-options">
              <div className="transport-item"><FaTrain className="t-icon" /><div><p className="hindi-text t-title">रेलवे</p><p className="hindi-text t-sub">रींगस जंक्शन (17km) — Auto ₹150–200</p></div></div>
              <div className="transport-item"><FaBus className="t-icon" /><div><p className="hindi-text t-title">बस सेवा</p><p className="hindi-text t-sub">RSRTC — जयपुर, सीकर से उपलब्ध</p></div></div>
            </div>
            <Link href="/travel-guide" className="btn-primary hindi-text full-w">पूरी यात्रा गाइड देखें →</Link>
          </div>
          <div className="map-box">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8!2d75.0!3d27.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d06f41c0e7c09%3A0x6e5a2e6b5f7b7a3a!2sKhatu%20Shyam%20Temple!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Khatu Shyam Map" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── BLOG (minimal - contact ke liye) ─── */
const blogPosts = [
  { title: 'खाटू श्याम जी फाल्गुन मेला 2027 — पूरी जानकारी', date: '4 Sep 2026', cat: 'मेला', icon: '🚩' },
  { title: 'खाटू धाम यात्रा गाइड — पहली बार जाने वाले पढ़ें', date: '2 Sep 2026', cat: 'यात्रा गाइड', icon: '📍' },
  { title: 'बर्बरीक शीश दान की संपूर्ण कथा', date: '1 Sep 2026', cat: 'कथा', icon: '📖' },
  { title: 'एकादशी पर खाटू श्याम दर्शन — विशेष महत्व', date: '28 Aug 2026', cat: 'दर्शन', icon: '🙏' },
  { title: 'घर पर खाटू श्याम पूजा विधि', date: '25 Aug 2026', cat: 'पूजा विधि', icon: '🪔' },
  { title: 'रींगस से खाटू श्याम कैसे पहुंचें — Auto, Taxi Guide', date: '20 Aug 2026', cat: 'यात्रा', icon: '🚗' },
]
function BlogSection() {
  return (
    <section className="blog-preview-section">
      <div className="container">
        <p className="section-label hindi-text">📰 जानकारी</p>
        <h2 className="section-title hindi-text">ताज़ा लेख & जानकारी</h2>
        <div className="divider"><span>📰</span></div>
        <div className="blog-grid">
          {blogPosts.map((p, i) => (
            <div key={i} className="blog-post-card card">
              <div className="blog-post-header">
                <span className="blog-cat-badge hindi-text">{p.icon} {p.cat}</span>
                <span className="hindi-text blog-date">{p.date}</span>
              </div>
              <h3 className="hindi-text blog-post-title">{p.title}</h3>
              <p className="hindi-text blog-post-excerpt" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                अधिक जानकारी के लिए सम्पर्क करें: <a href="tel:9929975116" style={{ color: 'var(--secondary)', textDecoration: 'none' }}>9929975116</a>
              </p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/blog" className="btn-secondary hindi-text">सभी लेख देखें →</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── CONTACT STRIP ─── */
function ContactStripSection({ onContactClick }) {
  return (
    <section className="contact-strip">
      <div className="container">
        <div className="strip-inner">
          <div className="strip-text">
            <h3 className="hindi-text">प्रसाद, स्वामणी भोग, पूजा — किसी भी सेवा के लिए सम्पर्क करें</h3>
            <p className="hindi-text">हम 24/7 उपलब्ध हैं — Call या WhatsApp पर बुकिंग करें</p>
          </div>
          <div className="strip-actions">
            <a href="tel:9929975116" className="strip-btn-call"><FiPhone /><span>9929975116</span></a>
            <a href="https://wa.me/919929975116?text=नमस्ते! जानकारी चाहिए।" className="strip-btn-wa" target="_blank" rel="noopener noreferrer"><FaWhatsapp /><span className="hindi-text">WhatsApp</span></a>
            <button className="strip-btn-form hindi-text" onClick={onContactClick}>📝 बुकिंग फॉर्म</button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── MAIN EXPORT ─── */
export default function HomeSections({ onContactClick }) {
  return (
    <div className="home-page">
      <HeroSection onContactClick={onContactClick} />
      <QuickActionsSection />
      <TempleStatusSection />
      <SwamaniPrasadSection />
      <DarshanTimingSection />
      <AboutShyamSection />
      <BhajanSection />
      <FestivalSection />
      <GalleryPreviewSection />
      <TravelPreviewSection />
      <BlogSection />
      <ContactStripSection onContactClick={onContactClick} />
    </div>
  )
}
