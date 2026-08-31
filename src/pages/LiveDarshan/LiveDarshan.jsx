import React, { useState } from 'react'
import { MdLiveTv, MdFullscreen } from 'react-icons/md'
import { FaYoutube } from 'react-icons/fa'
import './LiveDarshan.css'

const recentVideos = [
  { title: 'खाटू श्याम जी मंगला आरती', id: 'dQw4w9WgXcQ', date: 'आज' },
  { title: 'सुबह का श्रृंगार दर्शन', id: 'dQw4w9WgXcQ', date: 'कल' },
  { title: 'विशेष भोग आरती', id: 'dQw4w9WgXcQ', date: '2 दिन पहले' },
  { title: 'संध्या आरती Live', id: 'dQw4w9WgXcQ', date: '3 दिन पहले' },
]

export default function LiveDarshan() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <div className="live-page">
      {/* Hero */}
      <div className="live-hero">
        <div className="container">
          <div className="live-badge-big">
            <span className="live-dot-big"></span>
            <span>LIVE</span>
          </div>
          <h1 className="hindi-text">खाटू श्याम जी — Live दर्शन</h1>
          <p className="hindi-text">सीधे मंदिर से Live प्रसारण देखें</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 20px' }}>
        {/* Main Player */}
        <div className="main-player-section">
          <div className="main-player-box">
            <div className="player-header">
              <div className="live-indicator">
                <span className="live-dot-anim"></span>
                <span>LIVE</span>
              </div>
              <span className="hindi-text">खाटू श्याम जी — सीधा प्रसारण</span>
            </div>
            <div className="iframe-16-9">
              <iframe
                src={activeVideo
                  ? `https://www.youtube.com/embed/${activeVideo}?autoplay=1`
                  : `https://www.youtube.com/embed/live_stream?channel=UCpBLnAgJ9nQoJEb4u15xD0g&autoplay=0`}
                title="Live Darshan"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Info */}
          <div className="live-info-col">
            <div className="card live-info-card">
              <h3 className="hindi-text">🔔 Live दर्शन जानकारी</h3>
              <ul className="live-info-list">
                <li className="hindi-text">• Mandir Shri Khatu Shyam Ji का Official YouTube Channel</li>
                <li className="hindi-text">• हर दिन प्रातः 4:30 बजे से Live शुरू होता है</li>
                <li className="hindi-text">• आरती के समय विशेष Live प्रसारण</li>
                <li className="hindi-text">• Network issue होने पर Recorded Darshan उपलब्ध</li>
              </ul>
            </div>

            <div className="card aarti-timing-card">
              <h3 className="hindi-text">⏰ आरती समय</h3>
              {[
                ['🌅', 'मंगला आरती', '04:30 – 05:30'],
                ['🌸', 'श्रृंगार आरती', '07:15 – 08:00'],
                ['🍯', 'भोग आरती', '12:00 – 12:30'],
                ['🌇', 'संध्या आरती', '17:30 – 18:00'],
                ['🌙', 'शयन आरती', '21:00 – 21:30'],
              ].map(([icon, name, time], i) => (
                <div key={i} className="aarti-row">
                  <span>{icon}</span>
                  <span className="hindi-text">{name}</span>
                  <span className="aarti-t">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Videos */}
        <div className="recent-section">
          <h2 className="hindi-text section-title">📺 हाल के दर्शन</h2>
          <div className="divider"><span>🙏</span></div>
          <div className="recent-grid">
            {recentVideos.map((v, i) => (
              <button key={i} className="recent-card card" onClick={() => setActiveVideo(v.id)}>
                <div className="recent-thumb">
                  <FaYoutube className="yt-icon" />
                </div>
                <div className="recent-info">
                  <p className="hindi-text recent-title">{v.title}</p>
                  <span className="hindi-text recent-date">{v.date}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
