'use client'
import { useState } from 'react'
import Link from 'next/link'
import './BhajanAarti.css'

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

शीश दिया था श्री हरि को।
प्रेम दिया था सब नर को॥

बर्बरीक तू वीर महान।
श्याम भक्तों का तू है जान॥

कलियुग में तू अवतार।
करता है भक्तों का उद्धार॥

तीन बाण की शक्ति तेरी।
सारे जग में महिमा तेरी॥

फाल्गुन मेला भरे जहाँ।
लाखों भक्त आए वहाँ॥

सीकर जिले में धाम तेरा।
खाटू नगरी है घर मेरा॥

मनोकामना पूरी होती।
जो भी मांगे मिलती ज्योती॥

श्रद्धा से जो शीश झुकाए।
बाबा उसके दुख हरजाए॥

दोहा:
जय श्री श्याम बाबा की, जय हो बारम्बार।
हारे का सहारा तू, कर दे बेड़ा पार॥`

const aarti = `ॐ जय श्री श्याम हरे,
बर्बरीक श्याम हरे।
खाटू नगर निवासी,
भक्तन के मन भाए॥

जय जय श्याम बाबा,
जय हो बाबा श्याम।
सब भक्तों की सुनते हो,
पूरी करते काम॥

शीश दिया था भक्ति से,
हरि को अर्पण किया।
कलियुग में श्याम नाम से,
पूजित हुए सदा॥

जय जय श्याम बाबा,
जय हो बाबा श्याम।
हारे का सहारा तू,
तू ही है विश्राम॥`

export default function BhajanClient() {
  const [active, setActive] = useState('chalisa') // chalisa | aarti

  return (
    <div className="bhajan-page">
      <div className="page-hero bhajan-hero">
        <div className="container">
          <p className="section-label hindi-text">🙏 पाठ करें</p>
          <h1 className="hindi-text">भजन, आरती & चालीसा</h1>
          <p className="hindi-text" style={{ color: 'rgba(255,255,255,0.75)', marginTop: 8 }}>
            श्याम चालीसा और आरती का पाठ करें
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 20px', maxWidth: 700 }}>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 28, justifyContent: 'center' }}>
          {[
            { id: 'chalisa', label: '📜 श्याम चालीसा' },
            { id: 'aarti',   label: '🪔 आरती' },
          ].map(t => (
            <button key={t.id} onClick={() => setActive(t.id)}
              className={`cat-btn ${active === t.id ? 'active' : ''} hindi-text`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="chalisa-box card">
          <h2 className="hindi-text chalisa-title">
            {active === 'chalisa' ? '🙏 श्री श्याम चालीसा' : '🪔 श्री श्याम आरती'}
          </h2>
          <div className="chalisa-text hindi-text">
            {(active === 'chalisa' ? chalisa : aarti).split('\n').map((line, i) => (
              <p key={i} className={
                line.startsWith('दोहा') || line.startsWith('चौपाई') || line.startsWith('ॐ')
                  ? 'chalisa-heading'
                  : line.trim() === ''
                  ? 'chalisa-spacer'
                  : 'chalisa-line'
              }>{line || '\u00A0'}</p>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <Link href="/katha-parichay" className="btn-secondary hindi-text">
            📖 बर्बरीक कथा & मंदिर परिचय →
          </Link>
        </div>
      </div>
    </div>
  )
}
