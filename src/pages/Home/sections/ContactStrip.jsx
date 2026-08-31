import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import './ContactStrip.css'

export default function ContactStrip() {
  return (
    <section className="contact-strip">
      <div className="container">
        <div className="strip-inner">
          <div className="strip-text">
            <h3 className="hindi-text">प्रसाद बुकिंग, पूछताछ या किसी भी सेवा के लिए</h3>
            <p className="hindi-text">हम 24/7 उपलब्ध हैं — Call या WhatsApp करें</p>
          </div>
          <div className="strip-actions">
            <a href="tel:9929975116" className="strip-btn-call">
              <FiPhone /> <span>9929975116</span>
            </a>
            <a
              href="https://wa.me/919929975116?text=नमस्ते! मुझे खाटू श्याम जी के बारे में जानकारी चाहिए।"
              className="strip-btn-wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> <span className="hindi-text">WhatsApp करें</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
