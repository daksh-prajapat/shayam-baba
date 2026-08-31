import React, { useState } from 'react'
import './Blog.css'

const categories = ['सभी', 'यात्रा गाइड', 'कथा', 'मेला', 'पूजा विधि', 'दर्शन']

const posts = [
  { title: 'खाटू श्याम जी फाल्गुन मेला 2025 — पूरी जानकारी', cat: 'मेला', date: '15 जनवरी 2025', icon: '🚩', excerpt: 'फाल्गुन मेला 2025 में कब है, कैसे जाएं, कहां रुकें — सम्पूर्ण गाइड। लाखों भक्तों के साथ फाल्गुन मेले का आनंद लें।', readTime: '5 मिनट' },
  { title: 'खाटू धाम यात्रा गाइड — पहली बार जाने वालों के लिए', cat: 'यात्रा गाइड', date: '10 जनवरी 2025', icon: '📍', excerpt: 'पहली बार खाटू श्याम जी के दर्शन करने जा रहे हैं? यह गाइड आपके लिए है। कैसे जाएं, क्या लेकर जाएं, कब जाएं।', readTime: '8 मिनट' },
  { title: 'बर्बरीक शीश दान की संपूर्ण कथा', cat: 'कथा', date: '5 जनवरी 2025', icon: '📖', excerpt: 'जानें कैसे बर्बरीक ने महाभारत युद्ध से पहले श्री कृष्ण को अपना शीश दान किया और बन गए खाटू श्याम।', readTime: '10 मिनट' },
  { title: 'एकादशी पर खाटू श्याम दर्शन — विशेष महत्व', cat: 'दर्शन', date: '1 जनवरी 2025', icon: '🙏', excerpt: 'एकादशी के दिन खाटू श्याम दर्शन का विशेष फल। जानें क्यों एकादशी पर लाखों भक्त आते हैं।', readTime: '4 मिनट' },
  { title: 'घर पर खाटू श्याम पूजा विधि', cat: 'पूजा विधि', date: '28 दिसंबर 2024', icon: '🪔', excerpt: 'घर पर खाटू श्याम जी की पूजा कैसे करें। पूजा सामग्री, मंत्र, आरती — सब कुछ यहां।', readTime: '6 मिनट' },
  { title: 'खाटू श्याम के 108 नाम और महत्व', cat: 'कथा', date: '20 दिसंबर 2024', icon: '✨', excerpt: 'श्री श्याम के 108 पवित्र नामों का पाठ करने से सभी मनोकामनाएं पूर्ण होती हैं।', readTime: '7 मिनट' },
]

export default function Blog() {
  const [activeCat, setActiveCat] = useState('सभी')
  const [selectedPost, setSelectedPost] = useState(null)

  const filtered = activeCat === 'सभी' ? posts : posts.filter(p => p.cat === activeCat)

  if (selectedPost) {
    return (
      <div className="blog-page">
        <div className="blog-post-page">
          <div className="container" style={{ padding: '50px 20px', maxWidth: 800 }}>
            <button className="back-btn hindi-text" onClick={() => setSelectedPost(null)}>
              ← वापस जाएं
            </button>
            <div className="post-full-card card">
              <div className="post-full-header">
                <span className="post-big-icon">{selectedPost.icon}</span>
                <div className="post-cat-date">
                  <span className="hindi-text post-cat-tag">{selectedPost.cat}</span>
                  <span className="hindi-text post-date">{selectedPost.date}</span>
                </div>
              </div>
              <h1 className="hindi-text post-full-title">{selectedPost.title}</h1>
              <p className="hindi-text post-full-content">
                {selectedPost.excerpt}<br /><br />
                यह लेख जल्द ही अपडेट किया जाएगा। अधिक जानकारी के लिए Call करें: <a href="tel:9929975116">9929975116</a><br /><br />
                🙏 जय श्री श्याम — हारे का सहारा बाबा श्याम हमारा
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-page">
      <div className="page-hero blog-hero">
        <div className="container">
          <h1 className="hindi-text">ब्लॉग & जानकारी</h1>
          <p className="hindi-text">खाटू श्याम जी से जुड़ी ताज़ा जानकारी और लेख</p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 20px' }}>
        <div className="blog-filter">
          {categories.map(cat => (
            <button key={cat} className={`blog-filter-btn ${activeCat === cat ? 'active' : ''} hindi-text`} onClick={() => setActiveCat(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-posts-grid">
          {filtered.map((post, i) => (
            <article key={i} className="blog-post-card-full card" onClick={() => setSelectedPost(post)} role="button" tabIndex={0}>
              <div className="blog-post-icon-box">{post.icon}</div>
              <div className="blog-post-body">
                <div className="blog-post-meta">
                  <span className="hindi-text blog-cat-pill">{post.cat}</span>
                  <span className="hindi-text blog-date-text">{post.date}</span>
                  <span className="hindi-text blog-read-time">⏱ {post.readTime}</span>
                </div>
                <h3 className="hindi-text blog-post-h3">{post.title}</h3>
                <p className="hindi-text blog-post-ex">{post.excerpt}</p>
                <span className="hindi-text read-more-link">पूरा पढ़ें →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
