import React from 'react'
import { Link } from 'react-router-dom'
import './BlogPreview.css'

const posts = [
  {
    title: 'खाटू श्याम जी फाल्गुन मेला 2025 — पूरी जानकारी',
    excerpt: 'फाल्गुन मेला में लाखों भक्त आते हैं। जानें कब है, कैसे जाएं, कहां रुकें...',
    date: '15 जनवरी 2025',
    cat: 'मेला',
    icon: '🚩'
  },
  {
    title: 'खाटू धाम यात्रा गाइड — पहली बार जाने वाले पढ़ें',
    excerpt: 'पहली बार खाटू जा रहे हैं? यह गाइड आपके काम आएगी...',
    date: '10 जनवरी 2025',
    cat: 'यात्रा गाइड',
    icon: '📍'
  },
  {
    title: 'बर्बरीक शीश दान की कथा — संपूर्ण कहानी',
    excerpt: 'जानें कैसे बर्बरीक ने अपना शीश दान दिया और बने खाटू श्याम...',
    date: '5 जनवरी 2025',
    cat: 'कथा',
    icon: '📖'
  },
]

export default function BlogPreview() {
  return (
    <section className="blog-preview-section">
      <div className="container">
        <p className="section-label hindi-text">📰 पढ़ें</p>
        <h2 className="section-title hindi-text">ताज़ा जानकारी & ब्लॉग</h2>
        <div className="divider"><span>📰</span></div>

        <div className="blog-grid">
          {posts.map((p, i) => (
            <Link key={i} to="/blog" className="blog-post-card card">
              <div className="blog-post-header">
                <span className="blog-cat-badge hindi-text">
                  {p.icon} {p.cat}
                </span>
                <span className="hindi-text blog-date">{p.date}</span>
              </div>
              <h3 className="hindi-text blog-post-title">{p.title}</h3>
              <p className="hindi-text blog-post-excerpt">{p.excerpt}</p>
              <span className="read-more hindi-text">पूरा पढ़ें →</span>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/blog" className="btn-secondary hindi-text">
            सभी लेख देखें →
          </Link>
        </div>
      </div>
    </section>
  )
}
