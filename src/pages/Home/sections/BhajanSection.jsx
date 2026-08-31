import React from 'react'
import { Link } from 'react-router-dom'
import { IoMusicalNotes, IoPlayCircle } from 'react-icons/io5'
import './BhajanSection.css'

const bhajans = [
  { title: 'श्याम तेरी बंसी', type: 'भजन', duration: '5:32', views: '2.1M', ytId: 'dQw4w9WgXcQ' },
  { title: 'खाटू वाले श्याम', type: 'भजन', duration: '4:48', views: '1.8M', ytId: 'dQw4w9WgXcQ' },
  { title: 'मेरे बाबा की जय', type: 'आरती', duration: '3:15', views: '3.2M', ytId: 'dQw4w9WgXcQ' },
  { title: 'श्याम चालीसा', type: 'चालीसा', duration: '8:20', views: '5.6M', ytId: 'dQw4w9WgXcQ' },
  { title: 'हारे का सहारा', type: 'भजन', duration: '6:10', views: '1.4M', ytId: 'dQw4w9WgXcQ' },
  { title: 'बाबा श्याम आरती', type: 'आरती', duration: '4:05', views: '4.1M', ytId: 'dQw4w9WgXcQ' },
]

export default function BhajanSection() {
  return (
    <section className="bhajan-section">
      <div className="container">
        <p className="section-label hindi-text">🎵 सुनें</p>
        <h2 className="section-title hindi-text">भजन, आरती & चालीसा</h2>
        <div className="divider"><span>🎵</span></div>

        <div className="bhajan-grid">
          {bhajans.map((b, i) => (
            <a
              key={i}
              href={`https://www.youtube.com/watch?v=${b.ytId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bhajan-card card"
            >
              <div className="bhajan-thumb">
                <div className="bhajan-thumb-bg">
                  <IoMusicalNotes className="bhajan-note-icon" />
                </div>
                <div className="play-overlay">
                  <IoPlayCircle className="play-icon" />
                </div>
                <span className={`bhajan-type-badge ${b.type === 'आरती' ? 'aarti' : b.type === 'चालीसा' ? 'chalisa' : ''}`}>
                  {b.type}
                </span>
              </div>
              <div className="bhajan-info">
                <h4 className="hindi-text bhajan-name">{b.title}</h4>
                <div className="bhajan-meta">
                  <span>⏱ {b.duration}</span>
                  <span>👁 {b.views}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/bhajan-aarti" className="btn-primary hindi-text">
            सभी भजन & आरती देखें →
          </Link>
        </div>
      </div>
    </section>
  )
}
