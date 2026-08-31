import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import './ContactStrip.css'

export default function ContactStrip({ onContactClick }) {
  return (
    <section className="contact-strip">
      <div className="container">
        <div className="strip-inner">
          <div className="strip-text">
            <h3 className="hindi-text">प्रसाद, स्वामणी भोग, पूजा — किसी भी सेवा के लिए सम्पर्क करें</h3>
            <p className="hindi-text">हम 24/7 उपलब्ध हैं — Video Call पर Live दर्शन की सुविधा</p>
          </div>
          <div className="strip-actions">
            <a href="tel:9929975116" className="strip-btn-call">
              <FiPhone /> <span>9929975116</span>
            </a>
            <a
              href="https://wa.me/919929975116?text=नमस्ते! खाटू श्याम जी की सेवा के बारे में जानकारी चाहिए।"
              className="strip-btn-wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
            </a>
            <button className="strip-btn-form hindi-text" onClick={onContactClick}>
              📝 बुकिंग फॉर्म
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
