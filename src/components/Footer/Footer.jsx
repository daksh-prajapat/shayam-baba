import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa'
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
                <p>Khatu Shyam Ji</p>
              </div>
            </div>
            <p className="footer-desc hindi-text">
              हारे का सहारा बाबा श्याम हमारा। खाटू धाम के बारे में सम्पूर्ण जानकारी, 
              लाइव दर्शन, भजन, आरती और प्रसाद बुकिंग।
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link"><FaFacebook /></a>
              <a href="#" aria-label="YouTube" className="social-link youtube"><FaYoutube /></a>
              <a href="#" aria-label="Instagram" className="social-link insta"><FaInstagram /></a>
              <a href="https://wa.me/919929975116" aria-label="WhatsApp" className="social-link whatsapp"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading hindi-text">त्वरित लिंक</h4>
            <ul className="footer-links">
              {[
                ['/', 'होम'],
                ['/swamani', '👑 स्वामणी भोग'],
                ['/darshan-timings', 'दर्शन समय'],
                ['/katha-parichay', 'कथा परिचय'],
                ['/prasad-puja', 'प्रसाद बुकिंग'],
                ['/bhajan-aarti', 'भजन आरती'],
              ].map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className="footer-link hindi-text">✦ {label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading hindi-text">और जानकारी</h4>
            <ul className="footer-links">
              {[
                ['/travel-guide', 'यात्रा गाइड'],
                ['/festivals', 'त्यौहार'],
                ['/nishan-mannat', 'निशान मन्नत'],
                ['/gallery', 'गैलरी'],
                ['/blog', 'ब्लॉग'],
                ['/contact', 'सम्पर्क'],
              ].map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className="footer-link hindi-text">✦ {label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-heading hindi-text">सम्पर्क</h4>
            <div className="contact-items">
              <a href="tel:9929975116" className="contact-item">
                <FiPhone className="contact-icon" />
                <span>9929975116</span>
              </a>
              <a href="https://wa.me/919929975116" className="contact-item">
                <FaWhatsapp className="contact-icon" />
                <span>WhatsApp करें</span>
              </a>
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <span className="hindi-text">खाटू श्याम जी, सीकर, राजस्थान</span>
              </div>
            </div>
            <div className="footer-timing">
              <h5 className="hindi-text">मंदिर समय</h5>
              <p className="hindi-text">प्रातः 5:30 – रात्रि 9:00</p>
              <p className="hindi-text">गर्मी: प्रातः 5:00 – रात्रि 9:30</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="hindi-text footer-mantra">
            🙏 जय श्री श्याम — हारे का सहारा बाबा श्याम हमारा 🙏
          </p>
          <p className="footer-copy">
            © 2025 खाटू श्याम जी | Contact: <a href="tel:9929975116">9929975116</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
