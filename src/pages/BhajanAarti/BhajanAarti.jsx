import React, { useState } from 'react'
import { IoPlayCircle } from 'react-icons/io5'
import { FaYoutube } from 'react-icons/fa'
import './BhajanAarti.css'

const categories = ['सभी', 'भजन', 'आरती', 'चालीसा', 'मंत्र', 'जाप']

const content = [
  { title: 'श्याम तेरी बंसी', cat: 'भजन', singer: 'प्रदीप तिवारी', dur: '5:32', ytId: 'dQw4w9WgXcQ' },
  { title: 'खाटू वाले श्याम', cat: 'भजन', singer: 'सुरेश शर्मा', dur: '4:48', ytId: 'dQw4w9WgXcQ' },
  { title: 'बाबा श्याम की आरती', cat: 'आरती', singer: 'मंदिर', dur: '3:15', ytId: 'dQw4w9WgXcQ' },
  { title: 'श्याम चालीसा', cat: 'चालीसा', singer: 'पंकज शर्मा', dur: '8:20', ytId: 'dQw4w9WgXcQ' },
  { title: 'हारे का सहारा श्याम', cat: 'भजन', singer: 'राम शर्मा', dur: '6:10', ytId: 'dQw4w9WgXcQ' },
  { title: 'ओम नमो श्याम देवाय', cat: 'मंत्र', singer: 'पंडित जी', dur: '7:00', ytId: 'dQw4w9WgXcQ' },
  { title: 'श्याम श्याम जाप', cat: 'जाप', singer: 'मंदिर', dur: '10:00', ytId: 'dQw4w9WgXcQ' },
  { title: 'मेरे बाबा की जय', cat: 'आरती', singer: 'सामूहिक', dur: '4:05', ytId: 'dQw4w9WgXcQ' },
  { title: 'श्याम बाबा की महिमा', cat: 'भजन', singer: 'राहुल पाठक', dur: '5:55', ytId: 'dQw4w9WgXcQ' },
  { title: 'खाटू का दरबार', cat: 'भजन', singer: 'कविता वर्मा', dur: '4:30', ytId: 'dQw4w9WgXcQ' },
  { title: 'बर्बरीक स्तोत्र', cat: 'मंत्र', singer: 'पंडित जी', dur: '6:20', ytId: 'dQw4w9WgXcQ' },
  { title: 'श्याम नाम जाप 108', cat: 'जाप', singer: 'मंदिर', dur: '15:00', ytId: 'dQw4w9WgXcQ' },
]

const chalisa = `दोहा:
जय श्री श्याम करपाल हैं, जय खाटू के राय।
बर्बरीक अवतार हैं, जय श्याम सहाय॥

चौपाई:
जय जय श्याम सुंदर राजा।
सब भक्तों में तू सरताजा॥
खाटू नगर में वास तुम्हारा।
दर्शन देकर मन हमारा॥

हारे का तू है सहारा।
लखदातार नाम तुम्हारा॥
बर्बरीक था नाम पुराना।
श्याम नाम से भव भरमाना॥

शीश दिया था श्री हरि को।
प्रेम दिया था सब नर को॥
वरदान मिला कलियुग में।
पूजे जाओ हर जुग में॥

...श्री श्याम चालीसा की चौपाइयां यहां पढ़ें`

export default function BhajanAarti() {
  const [activeCat, setActiveCat] = useState('सभी')
  const [showChalisa, setShowChalisa] = useState(false)

  const filtered = activeCat === 'सभी' ? content : content.filter(c => c.cat === activeCat)

  return (
    <div className="bhajan-page">
      <div className="page-hero bhajan-hero">
        <div className="container">
          <h1 className="hindi-text">भजन, आरती & चालीसा</h1>
          <p className="hindi-text">खाटू श्याम जी के भजन, आरती, चालीसा और मंत्र</p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 20px' }}>
        {/* Chalisa Button */}
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <button
            className={`btn-primary hindi-text ${showChalisa ? '' : ''}`}
            onClick={() => setShowChalisa(!showChalisa)}
          >
            {showChalisa ? '← वापस जाएं' : '📜 श्याम चालीसा पढ़ें'}
          </button>
        </div>

        {showChalisa ? (
          <div className="chalisa-box card">
            <h2 className="hindi-text chalisa-title">श्री श्याम चालीसा</h2>
            <div className="chalisa-text hindi-text">
              {chalisa.split('\n').map((line, i) => (
                <p key={i} className={line.endsWith(':') ? 'chalisa-heading' : 'chalisa-line'}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Category Filter */}
            <div className="cat-filter">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`cat-btn ${activeCat === cat ? 'active' : ''} hindi-text`}
                  onClick={() => setActiveCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="bhajan-page-grid">
              {filtered.map((b, i) => (
                <a
                  key={i}
                  href={`https://www.youtube.com/watch?v=${b.ytId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bhajan-page-card card"
                >
                  <div className="bp-thumb">
                    <FaYoutube className="bp-yt" />
                    <div className="bp-play"><IoPlayCircle /></div>
                  </div>
                  <div className="bp-info">
                    <h4 className="hindi-text bp-title">{b.title}</h4>
                    <div className="bp-meta">
                      <span className={`bp-cat-badge ${b.cat}`}>{b.cat}</span>
                      <span className="bp-singer hindi-text">{b.singer}</span>
                      <span className="bp-dur">{b.dur}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
