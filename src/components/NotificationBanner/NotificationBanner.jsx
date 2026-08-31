import React, { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import './NotificationBanner.css'

const notifications = [
  '🔴 LIVE DARSHAN उपलब्ध है — अभी देखें',
  '📢 आज मंदिर में विशेष दर्शन — प्रातः 4:30 बजे से',
  '🚩 फाल्गुन मेला 2025 — श्याम बाबा का स्वागत है',
  '🙏 प्रसाद बुकिंग शुरू — Call करें: 9929975116',
]

export default function NotificationBanner({ onClose }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % notifications.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="notification-banner">
      <div className="banner-content">
        <span className="banner-icon">🔔</span>
        <span className="banner-text hindi-text">{notifications[current]}</span>
      </div>
      <button className="banner-close" onClick={onClose} aria-label="Close">
        <FiX />
      </button>
    </div>
  )
}
