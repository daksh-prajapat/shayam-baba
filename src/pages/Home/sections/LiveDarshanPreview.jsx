import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdLiveTv, MdFullscreen } from 'react-icons/md'
import './LiveDarshanPreview.css'

export default function LiveDarshanPreview() {
  const [isLive] = useState(true)

  return (
    <section className="live-preview-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label hindi-text">🔴 अभी देखें</p>
          <h2 className="section-title hindi-text">Live दर्शन</h2>
          <div className="divider"><span>🌸</span></div>
        </div>

        <div className="live-preview-wrapper">
          <div className="live-player-box">
            <div className="live-header">
              <div className="live-indicator">
                <span className="live-dot-anim"></span>
                <span>LIVE</span>
              </div>
              <span className="live-title hindi-text">खाटू श्याम जी — सीधा प्रसारण</span>
              <Link to="/live-darshan" className="fullscreen-btn">
                <MdFullscreen />
              </Link>
            </div>

            {/* YouTube Embed */}
            <div className="iframe-wrapper">
              <iframe
                src="https://www.youtube.com/embed/live_stream?channel=UCpBLnAgJ9nQoJEb4u15xD0g&autoplay=0"
                title="Khatu Shyam Ji Live Darshan"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {!isLive && (
                <div className="offline-overlay">
                  <MdLiveTv className="offline-icon" />
                  <p className="hindi-text">Live दर्शन अभी उपलब्ध नहीं है</p>
                  <p className="hindi-text offline-sub">कृपया थोड़ी देर बाद देखें</p>
                </div>
              )}
            </div>
          </div>

          {/* Side Info */}
          <div className="live-side-info">
            <div className="info-card-live">
              <h3 className="hindi-text">आज की आरती</h3>
              {[
                { time: '05:30', name: 'मंगला आरती', icon: '🌅' },
                { time: '07:30', name: 'श्रृंगार आरती', icon: '🌸' },
                { time: '12:00', name: 'भोग आरती', icon: '🍯' },
                { time: '17:30', name: 'संध्या आरती', icon: '🌇' },
                { time: '21:00', name: 'शयन आरती', icon: '🌙' },
              ].map((item, i) => (
                <div key={i} className="aarti-time-row">
                  <span className="aarti-icon">{item.icon}</span>
                  <div>
                    <span className="hindi-text aarti-name">{item.name}</span>
                    <span className="aarti-time">{item.time} AM/PM</span>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/live-darshan" className="btn-primary full-width-btn hindi-text">
              पूर्ण Live दर्शन देखें →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
