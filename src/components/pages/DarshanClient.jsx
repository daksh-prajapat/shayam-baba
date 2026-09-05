'use client'
import Link from 'next/link'
import './DarshanTimings.css'

const aartis = [
  { name: 'मंगला आरती', time: '4:30 AM', icon: '🌅', desc: 'सूर्योदय से पहले — पहली आरती' },
  { name: 'श्रृंगार आरती', time: '7:30 AM', icon: '🌸', desc: 'विशेष श्रृंगार दर्शन' },
  { name: 'राजभोग आरती', time: '12:00 PM', icon: '🍯', desc: 'दोपहर भोग आरती' },
  { name: 'संध्या आरती', time: '7:30 PM', icon: '🌇', desc: 'सायंकाल दर्शन (फाल्गुन मेला: 7:00 PM)' },
  { name: 'शयन आरती', time: '9:30 PM', icon: '🌙', desc: 'अंतिम आरती — मंदिर बंद से पूर्व' },
]

const tips = [
  'मंगला आरती के लिए एक रात पहले ही खाटू पहुँचें',
  'जूते-चप्पल — मंदिर प्रवेश से पहले निःशुल्क क्लॉकरूम में जमा करें',
  'शालीन और पारम्परिक पोशाक पहनें — शॉर्ट्स वर्जित हैं',
  'पानी की बोतल साथ रखें — विशेषकर गर्मियों में',
  'मंदिर के अंदर मोबाइल साइलेंट मोड में रखें',
  'दोपहर 12:30–4:00 PM मंदिर बंद रहता है — इस समय श्याम कुंड दर्शन करें',
]

export default function DarshanClient() {
  return (
    <div className="timings-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <h1 className="hindi-text">Darshan Timings 2026 — खाटू श्याम जी</h1>
          <p className="hindi-text">📍 Shri Khatu Shyam Ji Temple, Sikar, Rajasthan</p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 20px' }}>

        {/* Live Status */}
        <div className="darshan-live-box">
          <div className="dlb-row"><span className="dlb-dot"></span><span className="hindi-text dlb-status">अभी खुला है</span></div>
          <div className="dlb-meta">
            <span className="hindi-text">🪔 अगली आरती: <strong>Sandhya Aarti — 7:30 PM</strong></span>
            <span className="hindi-text">⏰ Darshan Timing: <strong>4:30 AM – 10:00 PM</strong></span>
          </div>
          <p className="dlb-note hindi-text">अंतिम सत्यापन: Sep 2026 · विशेष तिथि पर समय बदल सकता है · मंदिर हेल्पलाइन: <a href="tel:+911576231482">+91-1576-231482</a></p>
        </div>

        {/* Season Timing */}
        <div className="season-grid" style={{ marginTop: 36 }}>
          <div className="card season-card summer">
            <span className="season-icon">☀️</span>
            <h3 className="hindi-text">ग्रीष्मकालीन दर्शन समय</h3>
            <p className="hindi-text season-months">अप्रैल – सितम्बर</p>
            <div className="season-times">
              <div><span className="hindi-text">🌅 प्रातःकालीन दर्शन</span> <strong>4:30 AM – 12:30 PM</strong></div>
              <div><span className="hindi-text">🔴 मध्यान्ह विश्राम (बंद)</span> <strong>12:30 PM – 4:00 PM</strong></div>
              <div><span className="hindi-text">🌇 सायंकालीन दर्शन</span> <strong>4:00 PM – 10:00 PM</strong></div>
            </div>
          </div>
          <div className="card season-card winter">
            <span className="season-icon">❄️</span>
            <h3 className="hindi-text">शीतकालीन दर्शन समय</h3>
            <p className="hindi-text season-months">अक्टूबर – मार्च</p>
            <div className="season-times">
              <div><span className="hindi-text">🌅 प्रातःकालीन दर्शन</span> <strong>5:30 AM – 1:00 PM</strong></div>
              <div><span className="hindi-text">🔴 मध्यान्ह विश्राम (बंद)</span> <strong>1:00 PM – 5:00 PM</strong></div>
              <div><span className="hindi-text">🌇 सायंकालीन दर्शन</span> <strong>5:00 PM – 9:00 PM</strong></div>
            </div>
          </div>
        </div>

        {/* Special Days */}
        <div className="card season-card" style={{ marginTop: 20, borderColor: 'rgba(212,160,23,0.5)' }}>
          <h3 className="hindi-text">📅 एकादशी और विशेष अवसरों पर दर्शन</h3>
          <div className="season-times" style={{ marginTop: 12 }}>
            <div><span className="hindi-text">📅 एकादशी (सभी 24)</span> <strong>24 घंटे — निरंतर दर्शन</strong></div>
            <div><span className="hindi-text">🎪 Falgun Mela 2027 (18–20 Mar)</span> <strong>24 घंटे — तीनों दिन</strong></div>
            <div><span className="hindi-text">🎊 जन्माष्टमी</span> <strong>विस्तारित — 24 घंटे</strong></div>
          </div>
        </div>

        {/* Aarti Timings */}
        <h2 className="section-title hindi-text" style={{ marginTop: 50 }}>🪔 आरती समय</h2>
        <div className="divider"><span>🔔</span></div>
        <p className="hindi-text" style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: 24 }}>
          सामान्य दिन — फाल्गुन मेला पर Sandhya Aarti 7:00 PM
        </p>
        <div className="aarti-grid">
          {aartis.map((a, i) => (
            <div key={i} className="aarti-card card">
              <div className="aarti-card-icon">{a.icon}</div>
              <h3 className="hindi-text">{a.name}</h3>
              <span className="main-time">{a.time}</span>
              <p className="hindi-text aarti-desc">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Darshan Types */}
        <h2 className="section-title hindi-text" style={{ marginTop: 50 }}>🙏 दर्शन के प्रकार</h2>
        <div className="divider"><span>🛕</span></div>
        <div className="special-grid">
          {[
            { day: 'सामान्य दर्शन', desc: 'मंदिर खुले समय — निःशुल्क' },
            { day: 'VIP दर्शन पास', desc: 'सीमित slots — शुल्क अलग' },
            { day: 'पुजारी दर्शन', desc: 'कार्यक्रम के अनुसार — मंदिर से सम्पर्क करें' },
            { day: 'एकादशी दर्शन', desc: '24 घंटे — निरंतर दर्शन — निःशुल्क' },
          ].map((s, i) => (
            <div key={i} className="special-card card">
              <h3 className="hindi-text special-day">{s.day}</h3>
              <p className="hindi-text special-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Upcoming Ekadashi */}
        <div className="card" style={{ marginTop: 40, background: 'rgba(123,45,139,0.1)', borderColor: 'rgba(123,45,139,0.4)' }}>
          <h3 className="hindi-text" style={{ color: 'var(--secondary)', marginBottom: 16 }}>📅 आगामी एकादशी 2026</h3>
          <div className="season-times">
            {[
              { name: 'अजा एकादशी', date: 'सितम्बर 7, 2026' },
              { name: 'परिवर्तिनी एकादशी', date: 'सितम्बर 22, 2026' },
              { name: 'इन्दिरा एकादशी', date: 'अक्टूबर 6, 2026' },
            ].map((e, i) => (
              <div key={i}><span className="hindi-text">🪔 {e.name}</span><strong className="hindi-text">{e.date}</strong></div>
            ))}
          </div>
        </div>

        {/* Best Time */}
        <h2 className="section-title hindi-text" style={{ marginTop: 50 }}>दर्शन के लिए सबसे अच्छा समय</h2>
        <div className="divider"><span>✨</span></div>
        <div className="special-grid">
          <div className="special-card card">
            <h3 className="hindi-text special-day">🌅 मंगला आरती</h3>
            <p className="hindi-text special-desc">प्रातः 4:30 बजे — सबसे पवित्र और शांत समय। भीड़ सबसे कम। एक रात पहले ही खाटू पहुँचें।</p>
          </div>
          <div className="special-card card">
            <h3 className="hindi-text special-day">📅 सप्ताह के दिन</h3>
            <p className="hindi-text special-desc">सोमवार–शुक्रवार भीड़ सबसे कम। शनिवार–रविवार तीन गुना भीड़।</p>
          </div>
          <div className="special-card card">
            <h3 className="hindi-text special-day">🌤️ मौसम</h3>
            <p className="hindi-text special-desc">अक्टूबर–फरवरी सर्वोत्तम। मार्च–जून गर्मी अधिक — पानी साथ रखें।</p>
          </div>
          <div className="special-card card">
            <h3 className="hindi-text special-day">🎪 Falgun Mela 2027</h3>
            <p className="hindi-text special-desc">18–20 March 2027 — Hotels 2–3 महीने पहले book करें।</p>
          </div>
        </div>

        {/* Tips */}
        <div className="travel-tips" style={{ marginTop: 40 }}>
          <h2 className="hindi-text tips-title">💡 भक्तों के लिए महत्वपूर्ण सुझाव</h2>
          {tips.map((tip, i) => (
            <div key={i} className="tip-row">
              <span className="tip-num">{i + 1}</span>
              <span className="hindi-text">{tip}</span>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="section-title hindi-text" style={{ marginTop: 50 }}>❓ अक्सर पूछे जाने वाले प्रश्न</h2>
        <div className="divider"><span>🙏</span></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { q: 'Khatu Shyam Ji darshan timing क्या है?', a: 'मंदिर सामान्य दिनों में 4:30 AM – 10:00 PM खुला रहता है। एकादशी के दिन मंदिर 24 घंटे खुला रहता है।' },
            { q: 'मंदिर दोपहर में कब बंद रहता है?', a: 'ग्रीष्मकाल में 12:30 PM – 4:00 PM और शीतकाल में 1:00 PM – 5:00 PM मंदिर बंद रहता है।' },
            { q: 'आरती कितने बजे होती है?', a: 'मंगला 4:30 AM, श्रृंगार 7:30 AM, राजभोग 12:00 PM, संध्या 7:30 PM, शयन 9:30 PM।' },
            { q: 'Falgun Mela 2027 कब है?', a: 'Falgun Mela 2027 के मुख्य दिन: 18–20 March 2027। पूरा उत्सव 15–21 March 2027 तक चलेगा।' },
          ].map((faq, i) => (
            <div key={i} className="card" style={{ padding: '18px 22px' }}>
              <h4 className="hindi-text" style={{ color: 'var(--secondary)', marginBottom: 8 }}>Q: {faq.q}</h4>
              <p className="hindi-text" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="notice-box hindi-text" style={{ marginTop: 40 }}>
          ⚠️ महत्वपूर्ण: त्योहारों पर दर्शन समय बदल सकता है। यात्रा से पूर्व मंदिर हेल्पलाइन <a href="tel:+911576231482">+91-1576-231482</a> पर अवश्य पुष्टि करें।
          बुकिंग के लिए Call करें: <a href="tel:9929975116">9929975116</a>
        </div>
      </div>
    </div>
  )
}
