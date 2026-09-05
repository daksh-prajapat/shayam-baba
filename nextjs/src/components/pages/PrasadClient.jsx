'use client'
import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import './PrasadPuja.css'

const prasadItems = [
  { id: 1, name: 'चूरमा प्रसाद', price: 501, icon: '🍯', image: '/images/prasad1.jpg', desc: 'बाबा का सबसे प्रिय प्रसाद — शुद्ध देशी घी का मीठा चूरमा।', details: 'गेहूं के आटे में देशी घी और गुड़ मिलाकर बनाया जाता है। यह बाबा श्याम को अत्यंत प्रिय है।', heading: 'Khatu Shyam Churma Prasad Online Booking' },
  { id: 2, name: 'पेड़ा प्रसाद', price: 501, icon: '🍮', image: '/images/orange-flowers.jpg', desc: 'मावे का शुद्ध पेड़ा — मीठा और स्वादिष्ट।', details: 'शुद्ध मावे से बना पेड़ा। खाटू श्याम जी के प्रसाद में पेड़ा विशेष महत्व रखता है।', heading: 'Khatu Shyam Peda Prasad Online Booking' },
  { id: 3, name: 'लड्डू प्रसाद', price: 501, icon: '🟡', image: '/images/marigold.jpg', desc: 'बेसन के ताजे लड्डू — सबसे लोकप्रिय प्रसाद।', details: 'देशी घी में बने बेसन के लड्डू।', heading: 'Khatu Shyam Laddu Prasad Online Booking' },
  { id: 4, name: 'ड्राई फ्रूट प्रसाद', price: 501, icon: '🌰', image: '/images/diya.jpg', desc: 'काजू, बादाम, किशमिश — विशेष मेवा प्रसाद।', details: 'उत्तम गुणवत्ता के ड्राई फ्रूट्स का मिश्रण।', heading: 'Khatu Shyam Dry Fruit Prasad Online Booking' },
]

const pujaServices = [
  { icon: '🌅', name: 'मंगला आरती पूजा', price: '1100+', desc: 'प्रातःकाल की प्रथम पूजा में नाम संकल्प' },
  { icon: '🌸', name: 'विशेष श्रृंगार पूजा', price: '2100+', desc: 'बाबा का विशेष श्रृंगार एवं पूजन' },
  { icon: '🍯', name: 'भोग पूजा', price: '1100+', desc: 'दोपहर में भोग लगवाएं बाबा को' },
  { icon: '🪔', name: 'महाभिषेक पूजा', price: '5100+', desc: 'पंचामृत से महाभिषेक' },
  { icon: '🌇', name: 'संध्या आरती पूजा', price: '1100+', desc: 'सायंकाल की विशेष आरती में नाम' },
  { icon: '🎂', name: 'जन्मदिन विशेष पूजा', price: '3100+', desc: 'जन्मदिन पर बाबा का आशीर्वाद' },
]

export default function PrasadClient() {
  const [activeTab, setActiveTab] = useState('prasad')
  const [expandedPrasad, setExpandedPrasad] = useState(1)
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '' })

  const handleBooking = (item) => {
    const msg = `🙏 नमस्ते! प्रसाद बुकिंग करनी है।%0A%0A🍯 प्रसाद: ${item.name}%0A💰 मूल्य: ₹${item.price}`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const msg = `🙏 नमस्ते! बुकिंग करनी है।%0A%0A👤 नाम: ${form.name}%0A📞 फोन: ${form.phone}%0A🛕 सेवा: ${form.service}%0A📅 दिनांक: ${form.date}`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
  }

  return (
    <div className="prasad-page-v2">
      <div className="prasad-hero-v2">
        <div className="prasad-hero-overlay"></div>
        <div className="container prasad-hero-content-v2">
          <div className="prasad-hero-badge hindi-text">🙏 खाटू श्याम जी</div>
          <h1 className="hindi-text prasad-main-h1">प्रसाद & पूजा Online Booking</h1>
          <p className="hindi-text prasad-hero-tagline">Khatu Shyam Ji Prasad, Puja &amp; Bhog Online Booking — घर बैठे बुकिंग करें</p>
          <div className="prasad-hero-chips">
            <span className="hindi-text">🍯 प्रसाद बुकिंग ₹501</span>
            <span className="hindi-text">👑 स्वामणी भोग ₹8100+</span>
            <span className="hindi-text">🏠 प्रसाद घर पहुंचाएं</span>
            <span className="hindi-text">📞 Call पर बुकिंग</span>
          </div>
          <div className="prasad-hero-actions">
            <a href="tel:9929975116" className="prasad-hero-call hindi-text"><FiPhone /> 9929975116 पर Call करें</a>
            <a href="https://wa.me/919929975116?text=प्रसाद बुकिंग करनी है" className="prasad-hero-wa" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp बुकिंग</span>
            </a>
          </div>
        </div>
      </div>

      <div className="prasad-info-banner">
        <div className="container">
          <p className="hindi-text">📌 <strong>अगर आप दूर हैं</strong> और मंदिर आकर प्रसाद नहीं चढ़वा सकते, तो Online बुकिंग करके प्रसाद चढ़वा सकते हैं। सम्पर्क: <a href="tel:9929975116">9929975116</a></p>
        </div>
      </div>

      <div className="container prasad-main-container">
        <div className="prasad-tabs-v2">
          {[{id:'prasad',label:'🍯 प्रसाद',sub:'₹501 प्रति भाग'},{id:'puja',label:'🪔 पूजा सेवा',sub:'विशेष पूजा'},{id:'booking',label:'📝 बुकिंग फॉर्म',sub:'Online बुक करें'}].map(t=>(
            <button key={t.id} className={`prasad-tab-v2 ${activeTab===t.id?'active':''}`} onClick={()=>setActiveTab(t.id)}>
              <span className="hindi-text tab-v2-label">{t.label}</span>
              <span className="hindi-text tab-v2-sub">{t.sub}</span>
            </button>
          ))}
        </div>

        {activeTab === 'prasad' && (
          <div className="prasad-items-section">
            {prasadItems.map((item) => (
              <div key={item.id} className={`prasad-item-row ${expandedPrasad===item.id?'expanded':''}`}>
                <div className="prasad-row-main" onClick={()=>setExpandedPrasad(expandedPrasad===item.id?null:item.id)}>
                  <div className="prasad-row-img">
                    <img src={item.image} alt={item.name} loading="lazy" onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex'}}/>
                    <div className="prasad-img-fallback" style={{display:'none'}}><span className="fallback-emoji">{item.icon}</span></div>
                  </div>
                  <div className="prasad-row-info">
                    <span className="prasad-h1-tag">{item.heading}</span>
                    <h2 className="hindi-text prasad-item-h2">{item.name}</h2>
                    <p className="hindi-text prasad-item-short-desc">{item.desc}</p>
                    <div className="prasad-row-bottom">
                      <span className="prasad-item-price">₹{item.price} <span className="hindi-text per-bhag-tag">प्रति भाग</span></span>
                      <button className="view-more-btn hindi-text" onClick={e=>{e.stopPropagation();setExpandedPrasad(expandedPrasad===item.id?null:item.id)}}>
                        {expandedPrasad===item.id?'कम देखें ▲':'पूरी जानकारी ▼'}
                      </button>
                    </div>
                  </div>
                  <div className="prasad-row-action">
                    <span className="prasad-big-price">₹{item.price}</span>
                    <button className="prasad-wa-btn hindi-text" onClick={e=>{e.stopPropagation();handleBooking(item)}}><FaWhatsapp /> अभी बुक करें</button>
                    <a href="tel:9929975116" className="prasad-call-small" onClick={e=>e.stopPropagation()}><FiPhone /> Call करें</a>
                  </div>
                </div>
                {expandedPrasad===item.id&&(
                  <div className="prasad-expanded-detail">
                    <div className="prasad-detail-grid">
                      <div className="prasad-detail-img">
                        <img src={item.image} alt={item.name}/>
                        <div className="prasad-detail-badge hindi-text">प्रति भाग ₹{item.price}</div>
                      </div>
                      <div className="prasad-detail-content">
                        <h3 className="hindi-text prasad-detail-h3">{item.name}</h3>
                        <div className="prasad-detail-heading-tag">{item.heading}</div>
                        <p className="hindi-text prasad-detail-text">{item.details}</p>
                        <div className="prasad-detail-points">
                          <div className="dp-point hindi-text">✅ Online बुकिंग उपलब्ध</div>
                          <div className="dp-point hindi-text">✅ घर बैठे बुकिंग करें</div>
                          <div className="dp-point hindi-text">✅ प्रसाद घर पहुंचाएं</div>
                          <div className="dp-point hindi-text">✅ Receipt मिलेगा</div>
                        </div>
                        <div className="prasad-detail-actions">
                          <button className="pd-book-btn hindi-text" onClick={()=>handleBooking(item)}><FaWhatsapp /> WhatsApp पर बुक करें</button>
                          <a href="tel:9929975116" className="pd-call-btn"><FiPhone /> 9929975116</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'puja' && (
          <div className="puja-services-section">
            <div className="puja-services-grid">
              {pujaServices.map((p,i)=>(
                <div key={i} className="puja-service-card-v2 card">
                  <div className="puja-svc-icon">{p.icon}</div>
                  <h3 className="hindi-text puja-svc-name">{p.name}</h3>
                  <p className="hindi-text puja-svc-desc">{p.desc}</p>
                  <div className="puja-svc-price">₹{p.price}</div>
                  <button className="puja-svc-book hindi-text" onClick={()=>window.open(`https://wa.me/919929975116?text=पूजा बुकिंग: ${p.name}`,'_blank')}><FaWhatsapp /> बुक करें</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'booking' && (
          <div className="prasad-booking-section">
            <div className="prasad-form-card card">
              <h3 className="hindi-text booking-form-title">📝 प्रसाद / पूजा बुकिंग फॉर्म</h3>
              <p className="hindi-text booking-form-sub">फॉर्म भरें — WhatsApp पर संदेश जाएगा</p>
              <form onSubmit={handleFormSubmit} className="booking-form-v2">
                <div className="booking-row">
                  <div className="booking-field"><label className="hindi-text">आपका नाम *</label><input type="text" placeholder="नाम लिखें" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/></div>
                  <div className="booking-field"><label className="hindi-text">मोबाइल नंबर *</label><input type="tel" placeholder="10 अंकों का नंबर" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required pattern="[0-9]{10}"/></div>
                </div>
                <div className="booking-field">
                  <label className="hindi-text">सेवा का प्रकार *</label>
                  <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})} required>
                    <option value="">सेवा चुनें</option>
                    <option>🍯 चूरमा प्रसाद ₹501</option><option>🍮 पेड़ा प्रसाद ₹501</option><option>🟡 लड्डू प्रसाद ₹501</option><option>🌰 ड्राई फ्रूट ₹501</option><option>👑 लड्डू पूरी सब्जी ₹8100</option><option>✨ छप्पन भोग ₹31000</option><option>🪔 विशेष पूजा</option>
                  </select>
                </div>
                <div className="booking-field"><label className="hindi-text">दिनांक</label><input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></div>
                <button type="submit" className="booking-submit-btn hindi-text"><FaWhatsapp /> WhatsApp पर बुकिंग करें</button>
              </form>
            </div>
            <div className="booking-contact-sidebar">
              <div className="card contact-card-v2"><h4 className="hindi-text">📞 Call करें</h4><a href="tel:9929975116" className="contact-big-call"><FiPhone /> 9929975116</a></div>
              <div className="card contact-card-v2"><h4 className="hindi-text">💬 WhatsApp</h4><a href="https://wa.me/919929975116" className="contact-big-wa" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></div>
              <div className="card contact-card-v2 highlight-contact"><div className="contact-highlight-badge hindi-text">✨ खास सुविधा</div><h4 className="hindi-text">घर बैठे प्रसाद बुकिंग</h4><p className="hindi-text">दूर रहकर भी बाबा को प्रसाद चढ़वाएं।</p></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
