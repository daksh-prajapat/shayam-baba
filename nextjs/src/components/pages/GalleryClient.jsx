'use client'
import { useState } from 'react'
import './Gallery.css'

const categories = ['सभी', 'मंदिर', 'दर्शन', 'फाल्गुन मेला', 'आरती', 'निशान यात्रा', 'प्रसाद']

const galleryData = [
  // मंदिर — real temple images
  {
    cat: 'मंदिर',
    title: 'खाटू श्याम जी मंदिर — मुख्य मंदिर',
    img: '/images/temple-main.jpg',
    large: true
  },
  {
    cat: 'मंदिर',
    title: 'मंदिर प्रवेश द्वार',
    img: '/images/temple-entrance.jpg'
  },
  {
    cat: 'मंदिर',
    title: 'मंदिर परिसर — राजस्थान',
    img: '/images/temple-rajasthan.jpg'
  },
  {
    cat: 'मंदिर',
    title: 'मंदिर अंदर का दृश्य',
    img: '/images/temple-interior.jpg'
  },
  // दर्शन — devotional / worship images
  {
    cat: 'दर्शन',
    title: 'बाबा श्याम के दर्शन',
    img: '/images/temple-hero2.jpg',
    large: true
  },
  {
    cat: 'दर्शन',
    title: 'भक्त दर्शन — खाटू धाम',
    img: '/images/temple-hero.jpg'
  },
  {
    cat: 'दर्शन',
    title: 'मंदिर दर्शन',
    img: '/images/temple2.jpg'
  },
  // आरती — diya/aarti images
  {
    cat: 'आरती',
    title: 'मंगला आरती — खाटू श्याम जी',
    img: '/images/aarti.jpg',
    large: true
  },
  {
    cat: 'आरती',
    title: 'दीप प्रज्वलन — आरती',
    img: '/images/festival-lights.jpg'
  },
  {
    cat: 'आरती',
    title: 'फूल व दीप — पूजा',
    img: '/images/marigold-offerings.jpg'
  },
  // फाल्गुन मेला
  {
    cat: 'फाल्गुन मेला',
    title: 'फाल्गुन मेला — भव्य आयोजन',
    img: '/images/festival.jpg',
    large: true
  },
  {
    cat: 'फाल्गुन मेला',
    title: 'मेला उत्सव — खाटू',
    img: '/images/contact-hero.jpg'
  },
  // प्रसाद
  {
    cat: 'प्रसाद',
    title: 'प्रसाद सेवा — खाटू श्याम',
    img: '/images/prasad-hero.jpg',
    large: true
  },
  {
    cat: 'प्रसाद',
    title: 'भोग प्रसाद — बाबा श्याम',
    img: '/images/prasad1.jpg'
  },
  // निशान यात्रा
  {
    cat: 'निशान यात्रा',
    title: 'निशान यात्रा — भक्तों का जुलूस',
    img: '/images/orange-flowers.jpg'
  },
  {
    cat: 'निशान यात्रा',
    title: 'निशान चढ़ाना — मन्नत पूरी',
    img: '/images/mountain.jpg'
  },
]

export default function GalleryClient() {
  const [activeCat, setActiveCat] = useState('सभी')
  const [lightbox, setLightbox] = useState(null)
  const filtered = activeCat === 'सभी' ? galleryData : galleryData.filter(g => g.cat === activeCat)

  return (
    <div className="gallery-page">
      {/* Hero */}
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

        {/* Count */}
        <p className="hindi-text" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 20 }}>
          {filtered.length} फोटो
        </p>

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
                  const fb = e.target.nextSibling
                  if (fb) fb.style.display = 'flex'
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

        <div className="gallery-note hindi-text">
          🙏 जय श्री श्याम — खाटू धाम की पवित्र छवियां · हारे का सहारा बाबा श्याम हमारा
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
            <button
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >✕</button>
            <img
              src={lightbox.img}
              alt={lightbox.title}
              className="lightbox-img"
            />
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
