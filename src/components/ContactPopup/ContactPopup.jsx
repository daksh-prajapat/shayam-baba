import React, { useState, useEffect } from 'react'
import { FiX, FiPhone, FiUser, FiMessageSquare } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { GiLotus } from 'react-icons/gi'
import './ContactPopup.css'

export default function ContactPopup({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape key
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `🙏 नमस्ते! बुकिंग/जानकारी चाहिए।%0A%0A👤 नाम: ${form.name}%0A📞 फोन: ${form.phone}%0A🛕 सेवा: ${form.service}%0A💬 संदेश: ${form.message}`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div
      className="popup-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Contact Form"
    >
      <div className="popup-box">
        {/* Decorative top bar */}
        <div className="popup-top-bar" />

        {/* Header */}
        <div className="popup-header">
          <div className="popup-header-left">
            <div className="popup-lotus-wrap">
              <GiLotus className="popup-lotus" />
            </div>
            <div>
              <h2 className="hindi-text">जय श्री श्याम 🙏</h2>
              <p className="hindi-text">प्रसाद, भोग, पूजा — Online बुकिंग करें</p>
            </div>
          </div>
          <button className="popup-close" onClick={onClose} aria-label="बंद करें">
            <FiX />
          </button>
        </div>

        {!submitted ? (
          <div className="popup-body">
            {/* Quick contact buttons */}
            <div className="popup-quick">
              <a href="tel:9929975116" className="pq-call">
                <FiPhone /> <span>9929975116</span>
              </a>
              <a
                href="https://wa.me/919929975116?text=नमस्ते! बुकिंग करनी है।"
                target="_blank"
                rel="noopener noreferrer"
                className="pq-wa"
              >
                <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
              </a>
            </div>

            <div className="popup-or"><span className="hindi-text">— या फॉर्म भरें —</span></div>

            {/* Form */}
            <form className="popup-form" onSubmit={handleSubmit}>
              <div className="pf-row">
                <div className="pf-field">
                  <div className="pf-input-wrap">
                    <FiUser className="pf-icon" />
                    <input
                      type="text"
                      placeholder="आपका नाम *"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="pf-field">
                  <div className="pf-input-wrap">
                    <FiPhone className="pf-icon" />
                    <input
                      type="tel"
                      placeholder="मोबाइल नंबर *"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      required
                      pattern="[0-9]{10}"
                    />
                  </div>
                </div>
              </div>

              <div className="pf-field">
                <select
                  className="pf-select"
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">🛕 सेवा चुनें (वैकल्पिक)</option>
                  <option>🍯 चूरमा प्रसाद ₹501</option>
                  <option>🟡 लड्डू प्रसाद ₹501</option>
                  <option>👑 लड्डू पूरी सब्जी ₹8100</option>
                  <option>✨ छप्पन भोग ₹31000</option>
                  <option>🪔 विशेष पूजा बुकिंग</option>
                  <option>🚩 निशान यात्रा</option>
                  <option>📍 यात्रा जानकारी</option>
                  <option>अन्य जानकारी</option>
                </select>
              </div>

              <div className="pf-field">
                <div className="pf-input-wrap">
                  <FiMessageSquare className="pf-icon pf-icon-top" />
                  <textarea
                    placeholder="संदेश / कोई विशेष जानकारी..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>

              <button type="submit" className="pf-submit hindi-text">
                <FaWhatsapp /> WhatsApp पर भेजें
              </button>
            </form>

            <p className="popup-skip hindi-text" onClick={onClose}>
              अभी नहीं — बाद में करूंगा/करूंगी
            </p>
          </div>
        ) : (
          <div className="popup-success">
            <div className="success-circle">✅</div>
            <h3 className="hindi-text">WhatsApp खुल गया!</h3>
            <p className="hindi-text">संदेश भेज दें। हम जल्द जवाब देंगे।</p>
            <button className="pf-submit hindi-text" onClick={onClose}>
              ठीक है — बंद करें
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
