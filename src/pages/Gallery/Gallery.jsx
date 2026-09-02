import React, { useState } from 'react'
import './Gallery.css'

const categories = ['सभी', 'मंदिर', 'दर्शन', 'फाल्गुन मेला', 'आरती', 'निशान यात्रा', 'प्रसाद']

// Real Khatu Shyam Ji related devotional images using proper Unsplash spiritual/temple ones
const galleryData = [
  {
    cat: 'मंदिर', title: 'खाटू श्याम जी मंदिर', img: '/images/temple-hero2.jpg', large: true
  },
  {
    cat: 'दर्शन', title: 'बाबा के दर्शन', img: '/images/diya.jpg'
  },
  {
    cat: 'आरती', title: 'मंगला आरती', img: '/images/aarti.jpg'
  },
  {
    cat: 'फाल्गुन मेला', title: 'फाल्गुन मेला — भव्य आयोजन', img: '/images/festival.jpg', large: true
  },
  {
    cat: 'प्रसाद', title: 'प्रसाद सेवा', img: '/images/prasad1.jpg'
  },
  {
    cat: 'निशान यात्रा', title: 'निशान यात्रा', img: '/images/marigold.jpg'
  },
  {
    cat: 'मंदिर', title: 'मंदिर परिसर', img: '/images/temple2.jpg'
  },
  {
    cat: 'आरती', title: 'संध्या आरती', img: '/images/orange-flowers.jpg'
  },
  {
    cat: 'दर्शन', title: 'भक्त दर्शन', img: '/images/contact-hero.jpg'
  },
  {
    cat: 'प्रसाद', title: 'स्वामणी भोग', img: '/images/prasad-hero.jpg', large: true
  },
  {
    cat: 'मंदिर', title: 'मंदिर शिखर', img: '/images/mountain.jpg'
  },
  {
    cat: 'फाल्गुन मेला', title: 'भक्तों का सैलाब', img: '/images/temple-hero.jpg'
  },
]

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('सभी')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCat === 'सभी' ? galleryData : galleryData.filter(g => g.cat === activeCat)

  return (
    <div className="gallery-page">
      <div className="page-hero gallery-hero">
        <div className="gallery-hero-overlay" />
        <div className="container gallery-hero-content">
          <h1 className="hindi-text">फोटो गैलरी</h1>
          <p className="hindi-text">खाटू श्याम जी — मंदिर, दर्शन, मेला व आरती</p>
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

        {/* Masonry Grid */}
        <div className="gallery-main-grid">
          {filtered.map((item, i) => (
            <div
              key={i}
              className={`gallery-main-item ${item.large ? 'large' : ''}`}
              onClick={() => setLightbox(item)}
              role="button"
              tabIndex={0}
              aria-label={item.title}
              onKeyDown={e => e.key === 'Enter' && setLightbox(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="gallery-img"
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="gallery-fallback" style={{ display: 'none' }}>
                <span>🛕</span>
              </div>
              <div className="gallery-main-overlay">
                <span className="hindi-text gallery-main-cat-label">{item.cat}</span>
                <span className="hindi-text gallery-main-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Info note */}
        <div className="gallery-note hindi-text">
          🙏 जय श्री श्याम — खाटू धाम की पवित्र छवियां
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
            <img src={lightbox.img} alt={lightbox.title} className="lightbox-img" />
            <div className="lightbox-info">
              <span className="hindi-text lightbox-cat">{lightbox.cat}</span>
              <h3 className="hindi-text lightbox-title">{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
