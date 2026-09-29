'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FiPhone, FiArrowRight, FiMapPin, FiCheckCircle, FiStar } from 'react-icons/fi'
import { FaWhatsapp, FaConciergeBell, FaMapMarkedAlt, FaPhoneAlt, FaTrain, FaBus, FaCar, FaHandsHelping, FaLeaf, FaMobileAlt, FaHistory, FaQuoteLeft } from 'react-icons/fa'
import { GiTempleGate, GiLotusFlower } from 'react-icons/gi'
import { IoBookOutline, IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'
import { BsImages, BsShieldCheck } from 'react-icons/bs'
import { MdFestival, MdVerified, MdDeliveryDining } from 'react-icons/md'
import LiveTempleStatus from '@/components/LiveTempleStatus'

import './home-sections/HeroSection.css'
import './home-sections/SwamaniPreview.css'
import './home-sections/DarshanTimingWidget.css'
import './home-sections/QuickActions.css'
import './home-sections/AboutShyam.css'
import './home-sections/PrasadSection.css'
import './home-sections/FestivalSection.css'
import './home-sections/GalleryPreview.css'
import './home-sections/TravelPreview.css'
import './home-sections/BlogPreview.css'
import './home-sections/ContactStrip.css'
import './home-sections/HowItWorks.css'
import './home-sections/WhyChooseUs.css'
import './home-sections/Testimonials.css'
import './home-sections/FAQ.css'
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
          <span className="hindi-text">🙏 बाबा को भोग/प्रसाद चढ़ाएं</span>
          <span className="hlb-sep">•</span>
          <span className="hindi-text">⏰ 4:30 AM – 10:00 PM</span>
        </div>
        <div className="hero-buttons">
          <Link href="/swamani" className="hero-btn-live"><FaConciergeBell className="btn-icon" /><span className="hindi-text">स्वामणी भोग बुकिंग</span></Link>
          <Link href="/prasad-puja" className="btn-secondary"><span className="hindi-text">प्रसाद बुकिंग</span></Link>
          <a href="tel:9051858687" className="hero-btn-call"><FiPhone /><span>9051858687</span></a>
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
  { icon: <IoBookOutline />, label: 'कथा परिचय', sub: 'बर्बरीक कथा', path: '/katha-parichay', color: '#9C27B0' },
  { icon: <FaMapMarkedAlt />, label: 'यात्रा गाइड', sub: '714+ Routes', path: '/travel-guide', color: '#2196F3' },
  { icon: <BsImages />, label: 'गैलरी', sub: 'फोटो देखें', path: '/gallery', color: '#4CAF50' },
  { icon: <MdFestival />, label: 'फाल्गुन मेला', sub: '9 Mar 2027', path: '/festivals', color: '#FF6B35' },
  { icon: <FaPhoneAlt />, label: 'Call करें', sub: '9051858687', path: 'tel:9051858687', color: '#25d366', isExternal: true },
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
              <span className="ts-chip">🎪 Falgun Mela 2027: 9 March 2027</span>
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
              <div className="ts-row"><span className="hindi-text">⏰ Darshan</span><strong>4:30 AM – 10:00 PM</strong></div>
              <div className="ts-row"><span className="hindi-text">👥 भीड़</span><strong className="hindi-text">सामान्य</strong></div>
              <a href="https://www.youtube.com/@khatuwalebabain" target="_blank" rel="noopener noreferrer" className="ts-live-btn">🔴 <span className="hindi-text">Live Darshan देखें</span></a>
            </div>
            <div className="card ts-ek-card">
              <h3 className="hindi-text" style={{ color: 'var(--secondary)', marginBottom: 10 }}>📅 अगली एकादशी</h3>
              <p className="hindi-text ts-ek-name">🪔 इन्दिरा एकादशी</p>
              <p className="hindi-text ts-ek-date">अक्टूबर 6, 2026</p>
              <Link href="/darshan-timings" className="ts-ek-link hindi-text">एकादशी पर 24 घंटे दर्शन →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── SWAMANI + PRASAD + BHANDARA (Main Feature) ─── */
const swamaniItems = [
  { name: 'लड्डू पूरी सब्जी', price: 11000, icon: '🍛', img: '/images/orange-flowers.jpg', tag: 'सबसे लोकप्रिय', slug: 'laddu-puri-sabji' },
  { name: 'चूरमा', price: 9500, icon: '🍯', img: '/images/marigold-offerings.jpg', tag: 'बाबा का प्रिय', slug: 'churma' },
  { name: 'गोंद ड्राय फ्रूट लड्डू', price: 20000, icon: '🫙', img: '/images/dryfruit.jpg', tag: 'विशेष भोग', slug: 'gond-dry-fruit-laddu' },
  { name: 'स्पेशल छप्पन भोग', price: 31000, icon: '👑', img: '/images/prasad-hero.jpg', tag: '⭐ सर्वश्रेष्ठ', special: true, slug: 'special-chhappan-bhog' },
]
const prasadItems2 = [
  { name: 'अर्जी + नारियल', price: 101, icon: '🥥', img: '/images/prasad1.jpg', tag: 'सबसे सरल', slug: 'arji-nariyal' },
  { name: 'पंचमेवा, मोरछड़ी & इत्र', price: 501, icon: '🌸', img: '/images/marigold-offerings.jpg', tag: 'लोकप्रिय', slug: 'panchmewa-morchadi-itra' },
  { name: 'पूर्ण प्रसाद थाली', price: 1100, icon: '🍯', img: '/images/prasad-hero.jpg', tag: '⭐ सर्वश्रेष्ठ', special: true, slug: 'poorn-prasad-thali' },
  { name: 'विशेष पूर्ण थाली', price: 2100, icon: '👑', img: '/images/temple-hero2.jpg', tag: 'महा विशेष', special: true, slug: 'vishal-poorn-thali' },
]
const bhandaraItems = [
  { name: '1000 व्यक्ति भंडारा', persons: 1000, icon: '🍽️', img: '/images/bhog.jpg', tag: 'छोटा भंडारा', color: '#e67e22', slug: 'chhota-bhandara-1000' },
  { name: '5000 व्यक्ति भंडारा', persons: 5000, icon: '🏕️', img: '/images/festival.jpg', tag: 'मध्यम भंडारा', color: '#8e44ad', special: true, slug: 'madhyam-bhandara-5000' },
  { name: '10000 व्यक्ति भंडारा', persons: 10000, icon: '👑', img: '/images/festival-lights.jpg', tag: 'महा भंडारा', color: '#D4A017', special: true, slug: 'maha-bhandara-10000' },
]
function SwamaniPrasadSection() {
  const [tab, setTab] = useState('swamani')
  return (
    <section className="sp-main-section">
      <div className="container">
        <p className="section-label hindi-text">🙏 Online बुकिंग सेवा</p>
        <h2 className="section-title hindi-text">स्वामणी भोग, प्रसाद & भंडारा</h2>
        <div className="divider"><span>🍯</span></div>
        <div className="sp-info-banner hindi-text">
          📌 घर बैठे बुकिंग करें — बाबा को भोग/प्रसाद चढ़ाएं — 🏠 प्रसाद घर पहुंचाएं
        </div>

        {/* Tabs — 3 tabs */}
        <div className="spm-tabs">
          <button className={`spm-tab ${tab === 'swamani' ? 'active' : ''} hindi-text`} onClick={() => setTab('swamani')}>👑 स्वामणी भोग</button>
          <button className={`spm-tab ${tab === 'prasad' ? 'active' : ''} hindi-text`} onClick={() => setTab('prasad')}>🍯 प्रसाद बुकिंग</button>
          <button className={`spm-tab ${tab === 'bhandara' ? 'active' : ''} hindi-text`} onClick={() => setTab('bhandara')}>🍽️ विशाल भंडारा</button>
        </div>

        {/* Swamani Grid */}
        {tab === 'swamani' && (
          <div className="spm-grid">
            {swamaniItems.map((item, i) => (
              <Link key={i} href={`/swamani/${item.slug}`} className={`spm-card card ${item.special ? 'spm-special' : ''}`}>
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
              <Link key={i} href={`/prasad-puja/${item.slug}`} className={`spm-card card ${item.special ? 'spm-special' : ''}`}>
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

        {/* Bhandara Grid */}
        {tab === 'bhandara' && (
          <div className="spm-grid spm-grid-3">
            {bhandaraItems.map((item, i) => (
              <Link key={i} href={`/bhandara/${item.slug}`} className={`spm-card card ${item.special ? 'spm-special' : ''}`}>
                {item.special && <span className="spm-ribbon hindi-text">⭐ {item.tag}</span>}
                <div className="spm-img">
                  <img src={item.img} alt={item.name} loading="lazy"
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                  <div className="spm-fb"><span>{item.icon}</span></div>
                  <div className="spm-tag hindi-text" style={{ color: item.color }}>{item.tag}</div>
                </div>
                <div className="spm-body">
                  <h3 className="hindi-text spm-name">{item.name}</h3>
                  <div className="spm-price-row">
                    <span className="spm-price hindi-text" style={{ fontSize: '0.95rem' }}>
                      {item.persons.toLocaleString('hi-IN')} व्यक्ति
                    </span>
                  </div>
                  <span className="spm-click hindi-text">पूरी जानकारी →</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="spm-actions">
          <Link href={tab === 'swamani' ? '/swamani' : tab === 'prasad' ? '/prasad-puja' : '/bhandara'} className="btn-primary hindi-text">
            {tab === 'swamani' ? 'सभी स्वामणी देखें →' : tab === 'prasad' ? 'सभी प्रसाद देखें →' : 'सभी भंडारे देखें →'}
          </Link>
          <a href="https://wa.me/919051858687?text=बुकिंग करनी है" className="spm-wa-btn" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> <span className="hindi-text">WhatsApp बुकिंग</span>
          </a>
          <a href="tel:9051858687" className="spm-call-btn"><FiPhone /> 9051858687</a>
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
          <span className="hindi-text" style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>🎪 Falgun Mela 2027: 9 March 2027</span>
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

/* ─── FESTIVALS ─── */
const festivalItems = [
  { name: 'फाल्गुन मेला 2027', date: '9 March 2027', desc: 'करोड़ों भक्त — एशिया का सबसे बड़ा मेला', icon: '🚩', highlight: true },
  { name: 'दीपावली', date: '8 November 2026', desc: 'हजारों दीपों से जगमगाता मंदिर', icon: '🪔' },
  { name: 'श्याम जयंती / देवउठनी एकादशी', date: '20 November 2026', desc: 'कार्तिक शुक्ल एकादशी — विशेष दर्शन व श्रृंगार', icon: '👑' },
  { name: 'इन्दिरा एकादशी', date: '6 October 2026', desc: '24 घंटे दर्शन — अगली एकादशी', icon: '🙏' },
  { name: 'जन्माष्टमी 2027', date: '25 August 2027', desc: 'रात्रि 12 बजे विशेष पूजा', icon: '🪈' },
  { name: 'निर्जला एकादशी 2027', date: '14 June 2027', desc: 'सबसे फलदायी व्रत — विशेष भंडारा', icon: '✨' },
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
                अधिक जानकारी के लिए सम्पर्क करें: <a href="tel:9051858687" style={{ color: 'var(--secondary)', textDecoration: 'none' }}>9051858687</a>
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
            <a href="tel:9051858687" className="strip-btn-call"><FiPhone /><span>9051858687</span></a>
            <a href="https://wa.me/919051858687?text=नमस्ते! जानकारी चाहिए।" className="strip-btn-wa" target="_blank" rel="noopener noreferrer"><FaWhatsapp /><span className="hindi-text">WhatsApp</span></a>
            <button className="strip-btn-form hindi-text" onClick={onContactClick}>📝 बुकिंग फॉर्म</button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── HOW IT WORKS ─── */
const steps = [
  {
    num: '01',
    icon: '🛕',
    title: 'सेवा चुनें',
    desc: 'स्वामणी भोग, प्रसाद, निशान यात्रा या भंडारा — अपनी श्रद्धा व बजट के अनुसार सेवा चुनें।',
    color: '#922B21',
  },
  {
    num: '02',
    icon: '📱',
    title: 'Call या WhatsApp करें',
    desc: 'हमारी टीम से कॉल पर बात करें या अपना नाम, गोत्र और तिथि WhatsApp पर भेजें।',
    color: '#CA8A04',
  },
  {
    num: '03',
    icon: '📅',
    title: 'तिथि निर्धारित करें',
    desc: 'अपनी सुविधा अनुसार भोग या प्रसाद अर्पण की शुभ तिथि तय करें।',
    color: '#D97706',
  },
  {
    num: '04',
    icon: '🙏',
    title: 'बाबा को भोग अर्पित',
    desc: 'पूर्ण विधि-विधान से भोग चढ़ाया जाता है। फोटो व वीडियो प्रमाण आपको भेजे जाते हैं।',
    color: '#16a34a',
  },
]

function HowItWorksSection() {
  return (
    <section className="hiw-section">
      <div className="container">
        <p className="section-label hindi-text">🔔 बुकिंग प्रक्रिया</p>
        <h2 className="section-title hindi-text">ऑनलाइन बुकिंग कैसे करें?</h2>
        <div className="divider"><span>🙏</span></div>
        <div className="hiw-grid">
          {steps.map((s, i) => (
            <div key={i} className="hiw-card card">
              <div className="hiw-num" style={{ background: `${s.color}18`, color: s.color }}>{s.num}</div>
              <div className="hiw-icon-wrap" style={{ background: `${s.color}14` }}>
                <span className="hiw-icon">{s.icon}</span>
              </div>
              <h3 className="hindi-text hiw-title">{s.title}</h3>
              <p className="hindi-text hiw-desc">{s.desc}</p>
              {i < steps.length - 1 && <div className="hiw-arrow">→</div>}
            </div>
          ))}
        </div>
        <div className="hiw-bottom">
          <a href="https://wa.me/919051858687?text=स्वामणी बुकिंग करनी है" className="btn-primary hindi-text" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> अभी WhatsApp पर बुकिंग करें
          </a>
          <a href="tel:9051858687" className="btn-secondary hindi-text">
            <FiPhone /> 9051858687 पर Call करें
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── WHY CHOOSE US ─── */
const features = [
  {
    icon: <MdVerified size={28} />,
    title: 'पूर्ण विधि-विधान',
    desc: 'स्वामणी भोग, प्रसाद व निशान यात्रा सभी सेवाएं पूर्ण धार्मिक रीति-रिवाजों के साथ संपन्न होती हैं।',
    color: '#922B21',
    bg: 'rgba(146,43,33,0.08)',
  },
  {
    icon: <FaLeaf size={26} />,
    title: 'शुद्ध सामग्री',
    desc: 'सभी भोग प्रसाद शुद्ध देसी घी, बेसन व उच्च गुणवत्ता की सामग्री से तैयार किए जाते हैं।',
    color: '#16a34a',
    bg: 'rgba(22,163,74,0.08)',
  },
  {
    icon: <FaMobileAlt size={26} />,
    title: 'घर बैठे ऑनलाइन बुकिंग',
    desc: 'Phone, WhatsApp या Website के माध्यम से कहीं से भी बुकिंग करें। मंदिर आने की जरूरत नहीं।',
    color: '#CA8A04',
    bg: 'rgba(202,138,4,0.08)',
  },
  {
    icon: <BsShieldCheck size={26} />,
    title: 'फोटो & वीडियो प्रमाण',
    desc: 'भोग अर्पण के बाद पूरी पूजा के फोटो और वीडियो WhatsApp पर भेजे जाते हैं — पूर्ण विश्वास।',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
  },
  {
    icon: <MdDeliveryDining size={28} />,
    title: 'प्रसाद घर तक डिलीवरी',
    desc: 'चाहें तो बाबा का प्रसाद आपके घर तक पहुंचाया जाएगा — पवित्र व पैक करके।',
    color: '#0284C7',
    bg: 'rgba(2,132,199,0.08)',
  },
  {
    icon: <FaHandsHelping size={26} />,
    title: 'स्थानीय अनुभवी टीम',
    desc: 'खाटू श्याम जी में स्थानीय अनुभवी सेवादारों की टीम — हर त्यौहार और एकादशी पर सेवा।',
    color: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
  },
]

function WhyChooseUsSection() {
  return (
    <section className="wcu-section">
      <div className="container">
        <p className="section-label hindi-text">✨ हमारी विशेषता</p>
        <h2 className="section-title hindi-text">हमें क्यों चुनें?</h2>
        <div className="divider"><span>🌸</span></div>
        <div className="wcu-grid">
          {features.map((f, i) => (
            <div key={i} className="wcu-card card">
              <div className="wcu-icon-wrap" style={{ background: f.bg, color: f.color }}>
                {f.icon}
              </div>
              <h3 className="hindi-text wcu-title">{f.title}</h3>
              <p className="hindi-text wcu-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── TESTIMONIALS ─── */
const testimonials = [
  {
    name: 'राजेश कुमार शर्मा',
    city: 'दिल्ली',
    rating: 5,
    text: 'घर बैठे स्वामणी बुकिंग की। पूरी पूजा के फोटो और वीडियो मिले। बाबा श्याम की कृपा से मनोकामना पूरी हुई। बहुत विश्वसनीय सेवा है।',
    initials: 'र.श.',
    color: '#922B21',
  },
  {
    name: 'प्रिया वर्मा',
    city: 'मुंबई',
    rating: 5,
    text: 'बाबा के दर्शन नहीं कर सकती थी तो ऑनलाइन प्रसाद बुकिंग की। पूरी विधि-विधान से भोग चढ़ा। प्रसाद घर तक मिला। जय श्री श्याम!',
    initials: 'प्र.',
    color: '#CA8A04',
  },
  {
    name: 'सुनील सिंह राठौड़',
    city: 'जयपुर',
    rating: 5,
    text: 'निशान यात्रा की व्यवस्था बहुत अच्छी रही। टीम बेहद विनम्र और अनुभवी है। फाल्गुन मेले में भी बुकिंग करेंगे।',
    initials: 'सु.सि.',
    color: '#D97706',
  },
  {
    name: 'अंजली गुप्ता',
    city: 'पुणे',
    rating: 5,
    text: 'एकादशी पर 24 घंटे दर्शन की जानकारी यहाँ से मिली। यात्रा गाइड बहुत काम आई। बाबा श्याम की जय!',
    initials: 'अं.गु.',
    color: '#7C3AED',
  },
  {
    name: 'विकास पाठक',
    city: 'लखनऊ',
    rating: 5,
    text: 'छप्पन भोग स्वामणी बुकिंग की थी। बाबा को भोग लगा, वीडियो देख मन भर आया। बहुत शुद्ध और पवित्र सेवा।',
    initials: 'वि.पा.',
    color: '#0284C7',
  },
  {
    name: 'मीनाक्षी देवी',
    city: 'कोलकाता',
    rating: 5,
    text: 'खाटू बहुत दूर है हमारे लिए। इस सेवा से बाबा तक पहुंचना संभव हुआ। प्रसाद की गुणवत्ता उत्कृष्ट थी।',
    initials: 'मी.दे.',
    color: '#BE185D',
  },
]

function TestimonialsSection() {
  return (
    <section className="testi-section">
      <div className="container">
        <p className="section-label hindi-text">💬 भक्तों के अनुभव</p>
        <h2 className="section-title hindi-text">श्रद्धालु क्या कहते हैं?</h2>
        <div className="divider"><span>⭐</span></div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card card">
              <FaQuoteLeft className="testi-quote-icon" style={{ color: t.color }} />
              <div className="testi-stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FiStar key={j} className="testi-star filled" />
                ))}
              </div>
              <p className="hindi-text testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: `${t.color}18`, color: t.color }}>
                  <span className="hindi-text">{t.initials}</span>
                </div>
                <div>
                  <p className="hindi-text testi-name">{t.name}</p>
                  <p className="hindi-text testi-city">📍 {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testi-summary">
          <div className="testi-stat"><span className="testi-big-num">५ ⭐</span><span className="hindi-text">औसत रेटिंग</span></div>
          <div className="testi-stat-div"></div>
          <div className="testi-stat"><span className="testi-big-num">५०,०००+</span><span className="hindi-text">संतुष्ट भक्त</span></div>
          <div className="testi-stat-div"></div>
          <div className="testi-stat"><span className="testi-big-num">१०+</span><span className="hindi-text">वर्षों की सेवा</span></div>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─── */
const faqs = [
  {
    q: 'खाटू श्याम जी मंदिर कहाँ स्थित है?',
    a: 'खाटू श्याम जी मंदिर राजस्थान के सीकर जिले के खाटू गाँव में स्थित है। यह जयपुर से लगभग 80–89 किलोमीटर और दिल्ली से करीब 310 किलोमीटर की दूरी पर है।',
  },
  {
    q: 'स्वामणी भोग की ऑनलाइन बुकिंग कैसे करें?',
    a: 'आप हमारी वेबसाइट, WhatsApp (9051858687) या Phone Call के माध्यम से बुकिंग कर सकते हैं। अपना नाम, गोत्र और मनचाही तिथि शेयर करें — हमारी टीम बाकी सब संभाल लेगी।',
  },
  {
    q: 'स्वामणी भोग में क्या-क्या होता है और कीमत क्या है?',
    a: 'स्वामणी भोग में चूरमा, लड्डू, पूड़ी, सब्जी आदि शामिल होते हैं। पैकेज ₹9,500 से शुरू होकर छप्पन भोग ₹31,000 तक उपलब्ध हैं। सभी भोग शुद्ध देसी घी से बनाए जाते हैं।',
  },
  {
    q: 'क्या भोग चढ़ाने के बाद फोटो या वीडियो मिलेगा?',
    a: 'हाँ! स्वामणी या प्रसाद बुकिंग के बाद पूरी पूजा के फोटो और वीडियो आपको WhatsApp पर भेजे जाते हैं — ताकि आप घर बैठे बाबा के दर्शन का आनंद ले सकें।',
  },
  {
    q: 'मंदिर दर्शन का समय क्या है?',
    a: 'ग्रीष्म काल (अप्रैल–सितंबर): 4:30 AM – 10:00 PM। शीत काल (अक्टूबर–मार्च): 5:30 AM – 9:00 PM। एकादशी के दिन 24 घंटे दर्शन उपलब्ध रहता है।',
  },
  {
    q: 'फाल्गुन मेला 2027 कब है?',
    a: 'फाल्गुन मेला 2027 — 9 March 2027 (फाल्गुन शुक्ल षष्ठी) से शुरू होकर पूर्णिमा 21 March 2027 तक चलेगा। यह एशिया का सबसे बड़ा धार्मिक मेला माना जाता है जिसमें करोड़ों भक्त भाग लेते हैं। मेले के दौरान बुकिंग पहले से करें।',
  },
  {
    q: 'खाटू श्याम जी तक कैसे पहुंचें?',
    a: 'जयपुर से सड़क मार्ग से 80–89 km (1.5–2 घंटे)। निकटतम रेलवे स्टेशन रींगस जंक्शन (17 km) है जहाँ से Auto ₹150–200 में पहुंच सकते हैं। RSRTC की बस सेवा भी उपलब्ध है।',
  },
  {
    q: 'क्या प्रसाद घर पर डिलीवरी होती है?',
    a: 'हाँ! भोग चढ़ाने के बाद बाबा का प्रसाद आपके घर तक पहुंचाया जा सकता है। इसके लिए बुकिंग के समय अपना पता और संपर्क विवरण साझा करें।',
  },
]

function FAQSection() {
  const [open, setOpen] = useState(null)
  return (
    <section className="faq-section">
      <div className="container">
        <p className="section-label hindi-text">❓ सामान्य प्रश्न</p>
        <h2 className="section-title hindi-text">अक्सर पूछे जाने वाले प्रश्न</h2>
        <div className="divider"><span>🙏</span></div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="hindi-text faq-q-text">{f.q}</span>
                <span className="faq-chevron">
                  {open === i ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
                </span>
              </button>
              {open === i && (
                <div className="faq-answer">
                  <p className="hindi-text">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="faq-cta">
          <p className="hindi-text faq-cta-text">और कोई सवाल है? हमसे सीधे बात करें —</p>
          <div className="faq-cta-btns">
            <a href="tel:9051858687" className="btn-primary hindi-text"><FiPhone /> Call करें</a>
            <a href="https://wa.me/919051858687?text=मुझे जानकारी चाहिए" className="btn-secondary hindi-text" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a>
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
      <SwamaniPrasadSection />
      <HowItWorksSection />
      <LiveTempleStatus />
      <QuickActionsSection />
      <WhyChooseUsSection />
      <DarshanTimingSection />
      <AboutShyamSection />
      <TestimonialsSection />
      <FestivalSection />
      <GalleryPreviewSection />
      <FAQSection />
      <TravelPreviewSection />
      <BlogSection />
      <ContactStripSection onContactClick={onContactClick} />
    </div>
  )
}
