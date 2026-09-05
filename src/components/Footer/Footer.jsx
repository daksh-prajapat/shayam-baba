'use client'
import Link from 'next/link'
import { FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp, FaTwitter, FaPinterest } from 'react-icons/fa'
import { GiLotus } from 'react-icons/gi'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <GiLotus className="footer-logo-icon" />
              <div>
                <h3 className="hindi-text">खाटू श्याम जी</h3>
                <p>Khatu Shyam Ji · Khatu Dham</p>
              </div>
            </div>
            <p className="footer-desc hindi-text">
              हारे का सहारा बाबा श्याम हमारा। दर्शन समय, यात्रा गाइड, होटल, प्रसाद बुकिंग — सब एक जगह।
              हर जानकारी local team verified.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/khatuwalebabain" aria-label="Facebook" className="social-link"><FaFacebook /></a>
              <a href="https://www.youtube.com/@khatuwalebabain" aria-label="YouTube" className="social-link youtube"><FaYoutube /></a>
              <a href="https://www.instagram.com/khatuwalebabain" aria-label="Instagram" className="social-link insta"><FaInstagram /></a>
              <a href="https://wa.me/919929975116" aria-label="WhatsApp" className="social-link whatsapp"><FaWhatsapp /></a>
              <a href="#" aria-label="Twitter" className="social-link"><FaTwitter /></a>
            </div>
            <a href="https://wa.me/919929975116?text=Subscribe - Temple Updates" className="footer-wa-update" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span className="hindi-text">📢 WhatsApp Updates पाएं</span>
            </a>
          </div>

          {/* Temple & Bhakti */}
          <div className="footer-links-col">
            <h4 className="footer-heading hindi-text">🛕 Temple &amp; Bhakti</h4>
            <ul className="footer-links">
              {[
                ['/darshan-timings','Darshan Timings'],
                ['/bhajan-aarti','आरती'],
                ['/bhajan-aarti','चालीसा'],
                ['/katha-parichay','बर्बरीक कथा'],
                ['/nishan-mannat','निशान यात्रा'],
                ['/ekadashi','एकादशी कैलेंडर'],
                ['/festivals','Events & Mela'],
                ['/bhandara','🍽️ विशाल भंडारा'],
              ].map(([path, label]) => (
                <li key={label}><Link href={path} className="footer-link hindi-text">✦ {label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Plan Yatra */}
          <div className="footer-links-col">
            <h4 className="footer-heading hindi-text">🗺️ Plan Your Yatra</h4>
            <ul className="footer-links">
              {[
                ['/travel-guide','How to Reach'],
                ['/travel-guide','Delhi → Khatu'],
                ['/travel-guide','Jaipur → Khatu'],
                ['/travel-guide','Train Schedule'],
                ['/hotels','Hotels'],
                ['/dharamshala','Dharamshalas'],
                ['/restaurants','Restaurants'],
                ['/swamani','Swamani Booking'],
                ['/booking-history','📋 मेरी बुकिंग देखें'],
              ].map(([path, label]) => (
                <li key={label}><Link href={path} className="footer-link hindi-text">✦ {label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-heading hindi-text">सम्पर्क</h4>
            <div className="contact-items">
              <a href="tel:9929975116" className="contact-item"><FiPhone className="contact-icon" /><span>9929975116</span></a>
              <a href="https://wa.me/919929975116" className="contact-item"><FaWhatsapp className="contact-icon" /><span>WhatsApp करें</span></a>
              <div className="contact-item"><FiMapPin className="contact-icon" /><span className="hindi-text">खाटू श्याम जी, सीकर, राजस्थान — 332602</span></div>
            </div>
            <div className="footer-timing">
              <h5 className="hindi-text">मंदिर दर्शन समय</h5>
              <p>4:30 AM – 10:00 PM</p>
              <p className="hindi-text">एकादशी: 24 घंटे खुला</p>
              <p className="hindi-text" style={{ marginTop: 6, color: 'var(--secondary)' }}>🎪 Falgun Mela 2027: 18–20 Mar</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="hindi-text footer-mantra">🙏 हारे का सहारा बाबा श्याम हमारा — जय श्री श्याम 🙏</p>
          <p className="footer-copy">
            © 2026 खाटू श्याम जी | Contact: <a href="tel:9929975116">9929975116</a> | 
            <Link href="/contact"> सम्पर्क</Link> | 
            <Link href="/contact"> Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
