'use client'
import { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import './NotificationBanner.css'

const notifications = [
  '📢 आज मंदिर में विशेष दर्शन — प्रातः 4:30 बजे से',
  '🚩 फाल्गुन मेला 2027 — 18–20 March 2027 — अभी बुकिंग करें',
  '🙏 प्रसाद बुकिंग उपलब्ध — Call: 9929975116',
  '👑 स्वामणी भोग बुकिंग — ₹8100 से शुरू — WhatsApp करें',
  '📅 अगली एकादशी: अजा एकादशी — 7 September 2026',
]

export default function NotificationBanner({ onClose }) {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % notifications.length), 3500)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="notification-banner">
      <div className="banner-content">
        <span className="banner-icon">🔔</span>
        <span className="banner-text hindi-text">{notifications[current]}</span>
      </div>
      <button className="banner-close" onClick={onClose} aria-label="Close"><FiX /></button>
    </div>
  )
}
