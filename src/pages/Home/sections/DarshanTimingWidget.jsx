import React from 'react'
import { Link } from 'react-router-dom'
import './DarshanTimingWidget.css'

const timings = [
  { season: 'ग्रीष्म काल (गर्मी)', months: 'मार्च – अक्टूबर', open: '04:30', close: '12:30', reopen: '16:00', finalClose: '22:30', icon: '☀️' },
  { season: 'शीत काल (सर्दी)', months: 'नवंबर – फरवरी', open: '05:30', close: '12:30', reopen: '16:30', finalClose: '21:00', icon: '❄️' },
]

const notices = [
  { icon: '📢', text: 'फाल्गुन मेला में विशेष दर्शन व्यवस्था' },
  { icon: '🚩', text: 'एकादशी पर 24 घंटे दर्शन उपलब्ध' },
  { icon: '🙏', text: 'श्याम जन्माष्टमी — विशेष पूजा' },
]

export default function DarshanTimingWidget() {
  return (
    <section className="timing-section">
      <div className="container">
        <p className="section-label hindi-text">⏰ मंदिर समय</p>
        <h2 className="section-title hindi-text">दर्शन व आरती समय</h2>
        <div className="divider"><span>🔔</span></div>

        <div className="timing-grid">
          {timings.map((t, i) => (
            <div key={i} className="timing-card card">
              <div className="timing-card-header">
                <span className="timing-season-icon">{t.icon}</span>
                <div>
                  <h3 className="hindi-text">{t.season}</h3>
                  <p className="timing-months hindi-text">{t.months}</p>
                </div>
              </div>
              <div className="timing-rows">
                <div className="timing-row">
                  <span className="t-label hindi-text">🌅 प्रातः दर्शन</span>
                  <span className="t-time">{t.open} – {t.close}</span>
                </div>
                <div className="timing-row">
                  <span className="t-label hindi-text">🌇 सायं दर्शन</span>
                  <span className="t-time">{t.reopen} – {t.finalClose}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notices */}
        <div className="notices-row">
          {notices.map((n, i) => (
            <div key={i} className="notice-chip">
              <span>{n.icon}</span>
              <span className="hindi-text">{n.text}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/darshan-timings" className="btn-secondary hindi-text">
            पूर्ण समय-सारणी देखें →
          </Link>
        </div>
      </div>
    </section>
  )
}
