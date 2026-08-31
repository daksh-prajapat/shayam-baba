import React, { useState } from 'react'
import './Gallery.css'

const categories = ['सभी', 'मंदिर', 'दर्शन', 'फाल्गुन मेला', 'आरती', 'निशान यात्रा']

const galleryData = [
  { cat: 'मंदिर', title: 'खाटू श्याम मंदिर', emoji: '🛕', bg: 'linear-gradient(135deg, #7B2D8B, #5a1f66)' },
  { cat: 'दर्शन', title: 'बाबा के दर्शन', emoji: '🙏', bg: 'linear-gradient(135deg, #D4A017, #9a7010)' },
  { cat: 'फाल्गुन मेला', title: 'फाल्गुन मेला 2024', emoji: '🚩', bg: 'linear-gradient(135deg, #E8552D, #a03015)', large: true },
  { cat: 'आरती', title: 'मंगला आरती', emoji: '🌅', bg: 'linear-gradient(135deg, #FF6B35, #c04c20)' },
  { cat: 'निशान यात्रा', title: 'निशान यात्रा', emoji: '🎺', bg: 'linear-gradient(135deg, #4CAF50, #2e7d32)', large: true },
  { cat: 'मंदिर', title: 'मंदिर प्रवेश', emoji: '🚪', bg: 'linear-gradient(135deg, #9C27B0, #6A1B9A)' },
  { cat: 'आरती', title: 'संध्या आरती', emoji: '🌇', bg: 'linear-gradient(135deg, #FF9800, #E65100)' },
  { cat: 'दर्शन', title: 'भक्त दर्शन', emoji: '👥', bg: 'linear-gradient(135deg, #2196F3, #0D47A1)' },
  { cat: 'फाल्गुन मेला', title: 'मेला 2024', emoji: '🎪', bg: 'linear-gradient(135deg, #E91E63, #880E4F)' },
  { cat: 'निशान यात्रा', title: 'निशान', emoji: '🏳️', bg: 'linear-gradient(135deg, #009688, #00695C)' },
  { cat: 'मंदिर', title: 'मंदिर शिखर', emoji: '⛩️', bg: 'linear-gradient(135deg, #795548, #3E2723)' },
  { cat: 'दर्शन', title: 'प्रातः दर्शन', emoji: '🌄', bg: 'linear-gradient(135deg, #FFC107, #FF8F00)' },
]

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('सभी')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCat === 'सभी' ? galleryData : galleryData.filter(g => g.cat === activeCat)

  return (
    <div className="gallery-page">
      <div className="page-hero gallery-hero">
        <div className="container">
          <h1 className="hindi-text">फोटो गैलरी</h1>
          <p className="hindi-text">खाटू श्याम जी की अद्भुत छवियां</p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 20px' }}>
        {/* Filter */}
        <div className="gallery-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`gallery-filter-btn ${activeCat === cat ? 'active' : ''} hindi-text`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-main-grid">
          {filtered.map((item, i) => (
            <div
              key={i}
              className={`gallery-main-item ${item.large ? 'large' : ''}`}
              style={{ background: item.bg }}
              onClick={() => setLightbox(item)}
              role="button"
              tabIndex={0}
              aria-label={item.title}
            >
              <div className="gallery-main-overlay">
                <span className="gallery-main-emoji">{item.emoji}</span>
                <span className="hindi-text gallery-main-title">{item.title}</span>
                <span className="hindi-text gallery-main-cat">{item.cat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-content" style={{ background: lightbox.bg }}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            <span className="lightbox-emoji">{lightbox.emoji}</span>
            <h3 className="hindi-text lightbox-title">{lightbox.title}</h3>
            <p className="hindi-text lightbox-cat">{lightbox.cat}</p>
          </div>
        </div>
      )}
    </div>
  )
}
