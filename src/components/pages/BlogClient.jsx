'use client'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiArrowLeft } from 'react-icons/fi'
import './Blog.css'

const categories = ['सभी', 'यात्रा गाइड', 'कथा', 'मेला', 'पूजा विधि', 'दर्शन', 'यात्रा']

const posts = [
  {
    title: 'खाटू श्याम जी फाल्गुन मेला 2027 — पूरी जानकारी',
    cat: 'मेला', date: '4 Sep 2026', icon: '🚩', readTime: '5 मिनट',
    content: `फाल्गुन मेला खाटू श्याम जी का सबसे बड़ा वार्षिक उत्सव है। यह मेला हर साल फाल्गुन माह (फरवरी-मार्च) में आयोजित होता है।

🗓️ फाल्गुन मेला 2027 तारीखें:
मुख्य दिन: 18–20 March 2027
पूरा उत्सव: 15–21 March 2027

📌 मेले की खास बातें:
• देश-विदेश से करोड़ों भक्त आते हैं
• निशान यात्रा — हजारों भक्त निशान लेकर पैदल यात्रा करते हैं
• महाभंडारा — लाखों भक्तों को निःशुल्क भोजन
• 24 घंटे दर्शन उपलब्ध
• विशेष भजन-कीर्तन कार्यक्रम

🏨 होटल बुकिंग:
फाल्गुन मेले में होटल 2–3 महीने पहले भर जाते हैं। अभी से बुकिंग करें।

🚗 कैसे पहुंचें:
• जयपुर से खाटू: 80–89 km, ~1.5–2 घंटे
• दिल्ली से खाटू: 310 km, ~5–6 घंटे
• रींगस जंक्शन से: 17 km, ~25 मिनट

⚠️ महत्वपूर्ण: मेले के दौरान भीड़ बहुत अधिक होती है। सुबह जल्दी आएं।`
  },
  {
    title: 'खाटू धाम यात्रा गाइड — पहली बार जाने वाले पढ़ें',
    cat: 'यात्रा गाइड', date: '2 Sep 2026', icon: '📍', readTime: '8 मिनट',
    content: `पहली बार खाटू श्याम जी के दर्शन करने जा रहे हैं? यह गाइड आपके काम आएगी।

🛕 मंदिर का पता:
श्री खाटू श्याम जी मंदिर, खाटू, सीकर जिला, राजस्थान — 332602

⏰ दर्शन समय:
• ग्रीष्मकाल (अप्रैल–सितम्बर): 4:30 AM – 12:30 PM | 4:00 PM – 10:00 PM
• शीतकाल (अक्टूबर–मार्च): 5:30 AM – 1:00 PM | 5:00 PM – 9:00 PM
• एकादशी: 24 घंटे

🚗 कैसे पहुंचें:
• जयपुर से: 80–89 km — RSRTC बस या Cab
• दिल्ली से: 310 km — Train (Ringas Jn) या Car
• Ringas Junction (RGS): 17 km — Auto ₹150–200, Taxi ₹300–500

🎒 क्या लेकर जाएं:
• पहचान पत्र (ID proof)
• पीने का पानी (गर्मियों में जरूरी)
• शालीन कपड़े — शॉर्ट्स वर्जित
• प्रसाद के लिए पैसे

📋 महत्वपूर्ण नियम:
• जूते-चप्पल मंदिर परिसर से बाहर उतारें
• मोबाइल साइलेंट मोड में रखें
• गर्भगृह में फोटो वर्जित
• दोपहर 12:30–4:00 PM मंदिर बंद रहता है`
  },
  {
    title: 'बर्बरीक शीश दान की संपूर्ण कथा — खाटू श्याम का रहस्य',
    cat: 'कथा', date: '1 Sep 2026', icon: '📖', readTime: '10 मिनट',
    content: `बर्बरीक कौन थे?
बर्बरीक भीम के पुत्र घटोत्कच के पुत्र थे। उनकी माँ मोरवी (नाग कन्या) थीं। बर्बरीक ने कठोर तपस्या से भगवान शिव को प्रसन्न किया और तीन दिव्य बाण प्राप्त किए।

🏹 तीन दिव्य बाणों की शक्ति:
• पहला बाण — जिसे नष्ट करना हो उसे चिह्नित करता था
• दूसरा बाण — जिसे बचाना हो उसे चिह्नित करता था
• तीसरा बाण — पहले दो बाणों से चिह्नित सबको नष्ट/बचाता था

बर्बरीक का प्रण था कि वे हमेशा हारे हुए पक्ष की तरफ से लड़ेंगे।

🙏 शीश दान की कथा:
महाभारत युद्ध से पहले श्री कृष्ण ने ब्राह्मण का वेश धारण किया। उन्होंने बर्बरीक से सर्वश्रेष्ठ वस्तु भिक्षा में मांगी। बर्बरीक ने कहा — "मैं अपना शीश दे सकता हूं।"

श्री कृष्ण ने यही मांगा। बर्बरीक ने बिना किसी प्रश्न के तत्काल अपना शीश काट कर भगवान को दे दिया।

✨ कृष्ण जी का वरदान:
इस महान दान से प्रसन्न होकर श्री कृष्ण ने वरदान दिया — "कलियुग में तुम श्याम नाम से पूजे जाओगे। तुम्हारे भक्तों की सभी मनोकामनाएं पूर्ण होंगी।"

इसीलिए बाबा को "शीश के दानी" और "हारे का सहारा" कहते हैं।`
  },
  {
    title: 'एकादशी पर खाटू श्याम दर्शन — विशेष महत्व और समय',
    cat: 'दर्शन', date: '28 Aug 2026', icon: '🙏', readTime: '4 मिनट',
    content: `एकादशी व्रत का विशेष महत्व:
खाटू श्याम जी के दर्शन के लिए एकादशी सबसे शुभ तिथि मानी जाती है। एकादशी पर बाबा का विशेष श्रृंगार होता है और मंदिर 24 घंटे खुला रहता है।

📅 आगामी एकादशी 2026:
• अजा एकादशी — 7 September 2026
• परिवर्तिनी एकादशी — 22 September 2026
• इन्दिरा एकादशी — 6 October 2026
• पापांकुशा एकादशी — 21 October 2026
• रमा एकादशी — 5 November 2026
• देवउठनी एकादशी — 20 November 2026

⏰ एकादशी पर दर्शन समय:
• मंदिर 24 घंटे खुला रहता है
• कोई मध्यान्ह विश्राम नहीं
• विशेष भजन-कीर्तन आयोजन

🙏 एकादशी व्रत विधि:
• दशमी को रात का खाना सात्विक खाएं
• एकादशी को व्रत रखें
• बाबा श्याम का नाम जपें
• द्वादशी को व्रत तोड़ें

⚠️ ध्यान दें: एकादशी पर भीड़ बहुत अधिक होती है। सुबह जल्दी आएं।`
  },
  {
    title: 'घर पर खाटू श्याम जी की पूजा विधि — सम्पूर्ण मार्गदर्शन',
    cat: 'पूजा विधि', date: '25 Aug 2026', icon: '🪔', readTime: '6 मिनट',
    content: `घर पर बाबा श्याम की पूजा कैसे करें:

🌅 पूजा का समय:
• प्रातःकाल — सूर्योदय से पहले सर्वोत्तम
• संध्याकाल — शाम 7:00–8:00 बजे

🛁 पूजा से पहले:
• स्नान करें और साफ कपड़े पहनें
• पूजा स्थान साफ करें
• दीप जलाएं

🙏 पूजा सामग्री:
• बाबा श्याम का चित्र/मूर्ति
• ताजे फूल (गुलाब, मोगरा)
• धूप-दीप
• चूरमा/पेड़ा/लड्डू (प्रसाद)
• जल, रोली, चावल

📿 पूजा विधि:
1. दीप जलाएं और बाबा का ध्यान करें
2. "जय श्री श्याम" का उच्चारण करें
3. फूल अर्पित करें
4. श्याम चालीसा का पाठ करें
5. आरती गाएं
6. प्रसाद चढ़ाएं और वितरित करें

🕉️ मुख्य मंत्र:
"ॐ श्री श्याम देवाय नमः"
"जय श्री श्याम — हारे का सहारा बाबा श्याम हमारा"

📌 नोट: सबसे जरूरी है श्रद्धा और भक्ति। बाबा हर सच्चे भक्त की सुनते हैं।`
  },
  {
    title: 'रींगस से खाटू श्याम — Auto, Jeep, Taxi सम्पूर्ण जानकारी',
    cat: 'यात्रा', date: '22 Aug 2026', icon: '🚗', readTime: '5 मिनट',
    content: `रींगस जंक्शन (RGS) खाटू श्याम जी का सबसे नजदीकी रेलवे स्टेशन है।

📍 दूरी: Ringas → Khatu = 17 km

🚕 रींगस से खाटू कैसे जाएं:

Auto-Rickshaw:
• किराया: ₹150–200 (प्रति व्यक्ति)
• समय: ~25–30 मिनट
• सुबह आसानी से मिलते हैं

Shared Jeep:
• किराया: ₹40–60 (प्रति व्यक्ति)
• समय: ~30–35 मिनट
• भीड़ में ज्यादा प्रतीक्षा करनी पड़ सकती है

Private Taxi:
• किराया: ₹300–500 (पूरी गाड़ी)
• समय: ~20–25 मिनट
• एकादशी और मेले पर किराया बढ़ सकता है

E-Rickshaw:
• किराया: ₹20–30 (प्रति व्यक्ति)
• कुछ ही चलते हैं — उपलब्धता सीमित

🚆 Ringas तक ट्रेन:
• Delhi → Ringas: ~4–5 घंटे
• Jaipur → Ringas: ~2 घंटे
• Sikar → Ringas: ~30 मिनट

⚠️ मेले और एकादशी पर किराया अधिक हो सकता है। जाने से पहले किराया confirm करें।`
  },
  {
    title: 'खाटू श्याम चालीसा — पाठ की सम्पूर्ण विधि और महत्व',
    cat: 'पूजा विधि', date: '20 Aug 2026', icon: '📿', readTime: '7 मिनट',
    content: `श्री खाटू श्याम चालीसा बाबा की 40 चौपाइयों की स्तुति है जिसका नियमित पाठ करने से मनोकामनाएं पूर्ण होती हैं।

🕐 पाठ का सर्वोत्तम समय:
• प्रातःकाल — सूर्योदय से पहले
• शनिवार — विशेष रूप से शुभ
• एकादशी — सर्वोत्तम

📋 पाठ विधि:
1. स्नान करके साफ कपड़े पहनें
2. बाबा के सामने दीप जलाएं
3. तीन बार "जय श्री श्याम" बोलें
4. श्रद्धा से चालीसा का पाठ करें
5. अंत में आरती करें

दोहा:
जय श्री श्याम करपाल हैं, जय खाटू के राय।
बर्बरीक अवतार हैं, जय श्याम सहाय॥

चौपाई (प्रथम):
जय जय श्याम सुंदर राजा।
सब भक्तों में तू सरताजा॥
खाटू नगर में वास तुम्हारा।
दर्शन देकर भव हरो हमारा॥

✨ 40-दिन का संकल्प:
लगातार 40 दिन प्रतिदिन एक बार चालीसा का पाठ करें। मनोकामना पूर्ण होने पर खाटू जाकर निशान चढ़ाएं।

📌 महत्वपूर्ण: महिलाएं पीरियड्स के दौरान भी चालीसा पढ़ सकती हैं — बाबा सभी भक्तों के हैं।`
  },
  {
    title: 'Delhi से खाटू श्याम जी — ट्रेन, बस, कार पूरी जानकारी 2026',
    cat: 'यात्रा गाइड', date: '15 Aug 2026', icon: '🚆', readTime: '8 मिनट',
    content: `Delhi से खाटू श्याम जी की दूरी: 310 km

🚆 ट्रेन से (सबसे सस्ता):
• Delhi → Ringas Junction (RGS)
• समय: ~4–5 घंटे
• प्रमुख ट्रेनें: Shatabdi, Intercity
• Ringas से खाटू: Auto/Taxi (17 km, ~25 मिनट)
• किराया: ₹200–800 (class के अनुसार)

🚌 बस से:
• Delhi ISBT → Sikar/Reengus (RSRTC / Private)
• समय: ~6–7 घंटे
• किराया: ₹300–600

🚗 कार/Taxi से:
• Route: Delhi → NH-48 → Gurugram → Alwar → Ringas → Khatu
• समय: ~5–6 घंटे
• टोल शुल्क: ~₹300–400 (approx)
• Cab service: Ola, Uber (Jaipur से) या private taxi

✈️ हवाई जहाज से:
• Jaipur Airport → खाटू: ~90 km, ~2 घंटे (Taxi)
• Delhi से Jaipur flight: ~45 मिनट

🏨 Delhi से जाते समय सुझाव:
• फाल्गुन मेले में जाना हो तो 2–3 महीने पहले होटल बुक करें
• रात की ट्रेन से जाएं — सुबह पहुंचें और मंगला आरती लें
• वापसी की बुकिंग भी पहले से करें`
  },
  {
    title: 'जन्माष्टमी 2026 — खाटू श्याम में उत्सव का पूरा कार्यक्रम',
    cat: 'मेला', date: '18 Aug 2026', icon: '🎪', readTime: '5 मिनट',
    content: `जन्माष्टमी पर खाटू श्याम जी:
जन्माष्टमी (भादो कृष्ण अष्टमी) पर खाटू श्याम मंदिर में विशेष उत्सव होता है।

📅 जन्माष्टमी 2026: 16 August 2026

🎊 कार्यक्रम:
सुबह:
• प्रातःकाल विशेष मंगला आरती
• श्रृंगार दर्शन

दिन भर:
• झाँकी सजावट
• भजन-कीर्तन
• भक्तों का आगमन

रात्रि 12 बजे:
• विशेष मध्यरात्रि पूजा — "निशिता पूजा"
• बाबा को 56 भोग लगाया जाता है
• शंखनाद और घंटानाद
• भव्य आरती

⏰ विशेष दर्शन समय:
• मंदिर 24 घंटे खुला रहता है
• भीड़ रात 10 बजे से बढ़ने लगती है

🎁 विशेष प्रसाद:
• पंजीरी प्रसाद
• माखन-मिश्री
• पंचामृत`
  },
]

export default function BlogClient() {
  const [activeCat, setActiveCat] = useState('सभी')
  const [selectedPost, setSelectedPost] = useState(null)
  const filtered = activeCat === 'सभी' ? posts : posts.filter(p => p.cat === activeCat)

  /* ── Full Post View ── */
  if (selectedPost) {
    return (
      <div className="blog-page">
        <div className="container" style={{ padding: '50px 20px', maxWidth: 820 }}>
          <button className="back-btn hindi-text" onClick={() => setSelectedPost(null)}>
            <FiArrowLeft /> वापस जाएं
          </button>

          <div className="post-full-card card">
            <div className="post-full-header">
              <span className="post-big-icon">{selectedPost.icon}</span>
              <div className="post-cat-date">
                <span className="hindi-text post-cat-tag">{selectedPost.cat}</span>
                <span className="hindi-text post-date">{selectedPost.date} · ⏱ {selectedPost.readTime}</span>
              </div>
            </div>

            <h1 className="hindi-text post-full-title">{selectedPost.title}</h1>

            {/* Content */}
            <div className="post-full-body">
              {selectedPost.content.split('\n\n').map((para, i) => {
                const trimmed = para.trim()
                if (!trimmed) return null
                // Heading detection
                if (trimmed.endsWith(':') && !trimmed.includes('\n') && trimmed.length < 60) {
                  return <h3 key={i} className="hindi-text post-section-heading">{trimmed}</h3>
                }
                // Bullet list
                if (trimmed.includes('\n•') || trimmed.startsWith('•')) {
                  return (
                    <ul key={i} className="post-bullet-list">
                      {trimmed.split('\n').filter(l => l.trim()).map((line, j) => (
                        <li key={j} className="hindi-text">{line.replace(/^•\s*/, '')}</li>
                      ))}
                    </ul>
                  )
                }
                // Numbered
                if (/^\d+\./.test(trimmed)) {
                  return (
                    <ol key={i} className="post-numbered-list">
                      {trimmed.split('\n').filter(l => l.trim()).map((line, j) => (
                        <li key={j} className="hindi-text">{line.replace(/^\d+\.\s*/, '')}</li>
                      ))}
                    </ol>
                  )
                }
                return <p key={i} className="hindi-text post-para">{trimmed}</p>
              })}
            </div>

            {/* Contact CTA */}
            <div className="post-contact-cta">
              <p className="hindi-text">🙏 अधिक जानकारी या बुकिंग के लिए सम्पर्क करें:</p>
              <div className="pcc-btns">
                <a href="tel:9929975116" className="pcc-call"><FiPhone /> 9929975116</a>
                <a href="https://wa.me/919929975116?text=नमस्ते! जानकारी चाहिए।" className="pcc-wa" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> <span className="hindi-text">WhatsApp करें</span>
                </a>
              </div>
            </div>
          </div>

          {/* Related */}
          <div style={{ marginTop: 30 }}>
            <h3 className="hindi-text" style={{ color: 'var(--secondary)', marginBottom: 16 }}>और लेख पढ़ें:</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {posts.filter(p => p.title !== selectedPost.title).slice(0, 3).map((p, i) => (
                <button key={i} className="card related-post-btn" onClick={() => { setSelectedPost(p); window.scrollTo(0, 0) }}>
                  <span>{p.icon}</span>
                  <span className="hindi-text">{p.title}</span>
                  <span style={{ color: 'var(--secondary)', marginLeft: 'auto' }}>→</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* ── List View ── */
  return (
    <div className="blog-page">
      <div className="page-hero blog-hero">
        <div className="container">
          <h1 className="hindi-text">ब्लॉग & जानकारी</h1>
          <p className="hindi-text">खाटू श्याम जी से जुड़ी ताज़ा जानकारी और लेख</p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 20px' }}>
        {/* Contact banner */}
        <div className="blog-contact-banner">
          <p className="hindi-text">📞 बुकिंग या किसी भी जानकारी के लिए सीधे सम्पर्क करें</p>
          <div className="bcb-btns">
            <a href="tel:9929975116" className="bcb-call"><FiPhone /> 9929975116</a>
            <a href="https://wa.me/919929975116?text=नमस्ते! जानकारी चाहिए।" className="bcb-wa" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Filter */}
        <div className="blog-filter">
          {categories.map(cat => (
            <button key={cat} className={`blog-filter-btn ${activeCat === cat ? 'active' : ''} hindi-text`} onClick={() => setActiveCat(cat)}>{cat}</button>
          ))}
        </div>

        {/* Posts */}
        <div className="blog-posts-grid">
          {filtered.map((post, i) => (
            <article key={i} className="blog-post-card-full card"
              onClick={() => { setSelectedPost(post); window.scrollTo(0, 0) }}
              role="button" tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelectedPost(post)}>
              <div className="blog-post-icon-box">{post.icon}</div>
              <div className="blog-post-body">
                <div className="blog-post-meta">
                  <span className="hindi-text blog-cat-pill">{post.cat}</span>
                  <span className="hindi-text blog-date-text">{post.date}</span>
                  <span className="hindi-text blog-read-time">⏱ {post.readTime}</span>
                </div>
                <h3 className="hindi-text blog-post-h3">{post.title}</h3>
                {/* First 2 lines of content as excerpt */}
                <p className="hindi-text blog-post-ex">
                  {post.content.split('\n').find(l => l.trim() && !l.trim().endsWith(':')) || ''}
                </p>
                <span className="hindi-text read-more-link">पूरा पढ़ें →</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="blog-bottom-cta">
          <h3 className="hindi-text">🙏 जय श्री श्याम — हारे का सहारा बाबा श्याम हमारा</h3>
          <p className="hindi-text">किसी भी जानकारी, बुकिंग या सेवा के लिए तुरंत सम्पर्क करें</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
            <a href="tel:9929975116" className="bcb-call"><FiPhone /> 9929975116</a>
            <a href="https://wa.me/919929975116?text=नमस्ते! जानकारी चाहिए।" className="bcb-wa" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp करें</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
