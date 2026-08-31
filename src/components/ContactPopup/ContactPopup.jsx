import React, { useState, useEffect } from 'react'
import { FiX, FiPhone, FiUser, FiMessageSquare } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './ContactPopup.css'

export default function ContactPopup({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `🙏 नमस्ते! बुकिंग/जानकारी चाहिए।%0A%0A👤 नाम: ${form.name}%0A📞 फोन: ${form.phone}%0A🛕 सेवा: ${form.service}%0A💬 संदेश: ${form.message}`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="popup-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="popup-box">
        {/* Header */}
        <div className="popup-header">
          <div className="popup-header-left">
            <span className="popup-icon">🙏</span>
            <div>
              <h2 className="hindi-text">सम्पर्क करें</h2>
              <p className="hindi-text">हम आपकी सेवा में तत्पर हैं</p>
            </div>
          </div>
          <button className="popup-close" onClick={onClose} aria-label="Close">
            <FiX />
          </button>
        </div>

        {!submitted ? (
          <>
            {/* Quick Contact */}
            <div className="popup-quick-contact">
              <a href="tel:9929975116" className="quick-call-btn">
                <FiPhone /> <span>9929975116</span>
              </a>
              <a href="https://wa.me/919929975116" target="_blank" rel="noopener noreferrer" className="quick-wa-btn">
                <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
              </a>
            </div>

            <div className="popup-divider"><span className="hindi-text">या फॉर्म भरें</span></div>

            {/* Form */}
            <form className="popup-form" onSubmit={handleSubmit}>
              <div className="popup-form-row">
                <div className="popup-field">
                  <label className="hindi-text">आपका नाम *</label>
                  <div className="input-wrap">
                    <FiUser className="input-icon" />
                    <input
                      type="text"
                      placeholder="नाम लिखें"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="popup-field">
                  <label className="hindi-text">मोबाइल नंबर *</label>
                  <div className="input-wrap">
                    <FiPhone className="input-icon" />
                    <input
                      type="tel"
                      placeholder="10 अंकों का नंबर"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      required
                      pattern="[0-9]{10}"
                    />
                  </div>
                </div>
              </div>

              <div className="popup-field">
                <label className="hindi-text">सेवा चुनें</label>
                <select
                  className="popup-select"
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">सेवा का प्रकार</option>
                  <option>🍯 प्रसाद बुकिंग (₹501)</option>
                  <option>👑 स्वामणी भोग बुकिंग</option>
                  <option>✨ छप्पन भोग (₹31000)</option>
                  <option>🪔 विशेष पूजा बुकिंग</option>
                  <option>🚩 निशान यात्रा</option>
                  <option>📍 यात्रा जानकारी</option>
                  <option>अन्य जानकारी</option>
                </select>
              </div>

              <div className="popup-field">
                <label className="hindi-text">संदेश</label>
                <div className="input-wrap">
                  <FiMessageSquare className="input-icon" style={{ top: 14 }} />
                  <textarea
                    placeholder="कोई विशेष जानकारी या सन्देश..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>

              <button type="submit" className="popup-submit hindi-text">
                <FaWhatsapp /> WhatsApp पर भेजें
              </button>
            </form>
          </>
        ) : (
          <div className="popup-success">
            <span className="success-icon">✅</span>
            <h3 className="hindi-text">WhatsApp खुल गया!</h3>
            <p className="hindi-text">आपका संदेश तैयार है। भेज दें और हम जल्द जवाब देंगे।</p>
            <button className="popup-submit hindi-text" onClick={onClose} style={{ marginTop: 16 }}>
              ठीक है
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
