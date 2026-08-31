import React from 'react'
import { Link } from 'react-router-dom'
import './GalleryPreview.css'

const galleryItems = [
  { label: 'मंदिर', emoji: '🛕', bg: 'linear-gradient(135deg, #7B2D8B, #5a1f66)' },
  { label: 'बाबा श्याम', emoji: '👑', bg: 'linear-gradient(135deg, #D4A017, #9a7010)' },
  { label: 'दर्शन', emoji: '🙏', bg: 'linear-gradient(135deg, #E91E8C, #a0135f)' },
  { label: 'फाल्गुन मेला', emoji: '🚩', bg: 'linear-gradient(135deg, #E8552D, #a03015)' },
  { label: 'आरती', emoji: '🪔', bg: 'linear-gradient(135deg, #FF6B35, #c04c20)' },
  { label: 'निशान यात्रा', emoji: '🎺', bg: 'linear-gradient(135deg, #4CAF50, #2e7d32)' },
]

export default function GalleryPreview() {
  return (
    <section className="gallery-preview-section">
      <div className="container">
        <p className="section-label hindi-text">📸 देखें</p>
        <h2 className="section-title hindi-text">फोटो गैलरी</h2>
        <div className="divider"><span>📸</span></div>

        <div className="gallery-masonry">
          {galleryItems.map((item, i) => (
            <Link key={i} to="/gallery" className={`gallery-item gitem-${i}`} style={{ background: item.bg }}>
              <div className="gallery-overlay">
                <span className="gallery-emoji">{item.emoji}</span>
                <span className="hindi-text gallery-label">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/gallery" className="btn-secondary hindi-text">
            पूरी गैलरी देखें →
          </Link>
        </div>
      </div>
    </section>
  )
}
