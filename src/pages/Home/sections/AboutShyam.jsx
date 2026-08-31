import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AboutShyam.css'

const stories = [
  {
    icon: '👑',
    title: 'बर्बरीक कौन थे?',
    content: 'बर्बरीक भीम के पुत्र और घटोत्कच के पुत्र थे। वे महाबलशाली योद्धा थे जो तीन बाण धारण करते थे — तीनों लोकों को जीतने में सक्षम।'
  },
  {
    icon: '🏹',
    title: 'शीश दान की कथा',
    content: 'महाभारत युद्ध से पहले श्री कृष्ण ने बर्बरीक से भिक्षा मांगी — उनका शीश। बर्बरीक ने बिना हिचकिचाहट अपना शीश दान कर दिया।'
  },
  {
    icon: '🙏',
    title: 'खाटू धाम का इतिहास',
    content: 'कलियुग के आगमन पर भगवान श्री कृष्ण ने वरदान दिया कि कलियुग में बर्बरीक श्याम नाम से पूजे जाएंगे। खाटू में उनका पवित्र शीश विराजमान है।'
  },
  {
    icon: '✨',
    title: 'बाबा का महत्व',
    content: 'खाटू श्याम जी को "हारे का सहारा" कहते हैं। जो भक्त पूर्ण श्रद्धा से आता है, बाबा उसकी हर मनोकामना पूर्ण करते हैं।'
  },
]

const names = ['श्याम', 'बर्बरीक', 'शीश दानी', 'लखदातार', 'हारे का सहारा', 'कलियुग के भगवान', 'खाटू नरेश', 'मोरविनंदन']

export default function AboutShyam() {
  const [active, setActive] = useState(0)

  return (
    <section className="about-shyam-section">
      <div className="container">
        <p className="section-label hindi-text">🙏 जानिए</p>
        <h2 className="section-title hindi-text">खाटू श्याम जी का परिचय</h2>
        <div className="divider"><span>ॐ</span></div>

        <div className="about-grid">
          {/* Left - Story Tabs */}
          <div className="story-tabs-col">
            {stories.map((s, i) => (
              <button
                key={i}
                className={`story-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="tab-icon-circle">{s.icon}</span>
                <span className="hindi-text tab-title">{s.title}</span>
              </button>
            ))}
          </div>

          {/* Right - Content */}
          <div className="story-content-col">
            <div className="story-content-box card">
              <div className="story-big-icon">{stories[active].icon}</div>
              <h3 className="hindi-text">{stories[active].title}</h3>
              <p className="hindi-text story-text">{stories[active].content}</p>
            </div>

            {/* Names */}
            <div className="names-section">
              <h4 className="hindi-text names-heading">बाबा के नाम</h4>
              <div className="names-grid">
                {names.map((n, i) => (
                  <span key={i} className="name-tag hindi-text">{n}</span>
                ))}
              </div>
            </div>

            <Link to="/katha-parichay" className="btn-secondary hindi-text">
              पूरी कथा पढ़ें →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
