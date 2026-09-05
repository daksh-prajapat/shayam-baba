'use client'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiCheck, FiDownload, FiClock, FiX, FiArrowLeft, FiMail } from 'react-icons/fi'
import './BookingClient.css'

/* ── Service Data ── */
const services = [
  {
    id: 'swamani',
    icon: '👑',
    title: 'स्वामणी भोग बुकिंग',
    titleEn: 'Swamani Bhog Booking',
    color: '#D4A017',
    desc: 'बाबा श्याम को भोग चढ़ाएं — 12 प्रकार के भोग उपलब्ध',
    options: [
      { name: 'लड्डू पूरी सब्जी', price: 8100 },
      { name: 'खीर पूरी सब्जी', price: 8100 },
      { name: 'चूरमा पूरी सब्जी', price: 8100 },
      { name: 'चूरमा', price: 9500 },
      { name: 'चूरमा लड्डू', price: 15100 },
      { name: 'बूंदी ड्राय फ्रूट्स', price: 17000 },
      { name: 'गोंद ड्राय फ्रूट लड्डू', price: 20000 },
      { name: 'गोंद पाक स्वामणी', price: 23000 },
      { name: 'दिलखुशार स्वामणी', price: 23000 },
      { name: 'सफेद पेड़ा', price: 23000 },
      { name: 'केसर पिस्ता पेड़ा', price: 25000 },
      { name: '✨ स्पेशल छप्पन भोग', price: 31000 },
    ],
    note: 'घर बैठे बुकिंग करें। प्रसाद घर पहुंचाया जाएगा।'
  },
  {
    id: 'seva',
    icon: '🙏',
    title: 'सेवा बुकिंग',
    titleEn: 'Seva Booking',
    color: '#7B2D8B',
    desc: 'बाबा की सेवा में अपना नाम जुड़वाएं',
    options: [
      { name: 'मंगला आरती नाम संकल्प', price: 1100 },
      { name: 'राजभोग आरती नाम संकल्प', price: 1100 },
      { name: 'संध्या आरती नाम संकल्प', price: 1100 },
      { name: 'शयन आरती नाम संकल्प', price: 1100 },
      { name: 'पंचामृत सेवा', price: 2100 },
      { name: 'महाभिषेक सेवा', price: 5100 },
      { name: 'सम्पूर्ण दिन सेवा', price: 11000 },
    ],
    note: 'आपका नाम बाबा की आरती में लिया जाएगा।'
  },
  {
    id: 'bhog',
    icon: '🍛',
    title: 'भोग बुकिंग',
    titleEn: 'Bhog Booking',
    color: '#E91E8C',
    desc: 'बाबा को विशेष भोग लगवाएं',
    options: [
      { name: 'मंगला भोग', price: 1100 },
      { name: 'राजभोग (दोपहर)', price: 2100 },
      { name: 'संध्या भोग', price: 1100 },
      { name: 'विशेष भोग (सभी)', price: 5100 },
      { name: 'बाल भोग', price: 1100 },
      { name: 'फल भोग', price: 551 },
      { name: 'मिष्ठान भोग', price: 1100 },
    ],
    note: 'भोग का समय confirm करने के बाद बुकिंग होगी।'
  },
  {
    id: 'shringar',
    icon: '🌸',
    title: 'श्रृंगार बुकिंग',
    titleEn: 'Shringar Booking',
    color: '#FF6B35',
    desc: 'बाबा का विशेष श्रृंगार करवाएं',
    options: [
      { name: 'सामान्य श्रृंगार', price: 2100 },
      { name: 'विशेष श्रृंगार', price: 5100 },
      { name: 'फूलों का श्रृंगार', price: 3100 },
      { name: 'चांदी वस्त्र श्रृंगार', price: 11000 },
      { name: 'सोने वस्त्र श्रृंगार', price: 21000 },
      { name: 'जन्मदिन विशेष श्रृंगार', price: 7100 },
      { name: 'विवाह वर्षगांठ श्रृंगार', price: 7100 },
    ],
    note: 'श्रृंगार के समय फोटो/video भेजा जाएगा।'
  },
  {
    id: 'nishan',
    icon: '🚩',
    title: 'निशान बुकिंग',
    titleEn: 'Nishan Booking',
    color: '#cc0000',
    desc: 'मन्नत पूरी होने पर निशान चढ़ाएं',
    options: [
      { name: 'छोटा निशान (3 फीट)', price: 1100 },
      { name: 'मध्यम निशान (5 फीट)', price: 2100 },
      { name: 'बड़ा निशान (7 फीट)', price: 3100 },
      { name: 'विशाल निशान (11 फीट)', price: 5100 },
      { name: 'सोने का निशान', price: 11000 },
      { name: 'चांदी का निशान', price: 7100 },
    ],
    note: 'निशान चढ़ाने का Certificate मिलेगा।'
  },
  {
    id: 'prasad',
    icon: '🍯',
    title: 'प्रसाद बुकिंग',
    titleEn: 'Prasad Booking',
    color: '#25d366',
    desc: 'घर बैठे प्रसाद चढ़वाएं — घर पहुंचाएं',
    options: [
      { name: 'चूरमा प्रसाद', price: 501 },
      { name: 'पेड़ा प्रसाद', price: 501 },
      { name: 'लड्डू प्रसाद', price: 501 },
      { name: 'ड्राई फ्रूट प्रसाद', price: 501 },
      { name: 'चूरमा + पेड़ा (combo)', price: 901 },
      { name: 'सभी 4 प्रसाद (combo)', price: 1501 },
    ],
    note: 'प्रसाद घर पर Courier/Delivery उपलब्ध।'
  },
  {
    id: 'donation',
    icon: '💛',
    title: 'Online दान',
    titleEn: 'Online Donation',
    color: '#D4A017',
    desc: 'बाबा के दरबार में दान करें — पुण्य कमाएं',
    options: [
      { name: 'मंदिर सेवा दान', price: 101 },
      { name: 'गौशाला दान', price: 251 },
      { name: 'भंडारा दान', price: 501 },
      { name: 'जीर्णोद्धार दान', price: 1001 },
      { name: 'विशेष दान', price: 2101 },
      { name: 'महादान', price: 5100 },
      { name: 'Custom राशि (मनचाहा दान)', price: 0 },
    ],
    note: '80G Tax exemption certificate मिलेगा।'
  },
]

/* ── Booking Form Component ── */
function BookingForm({ service, onBack, onSuccess }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', city: '',
    option: service.options[0]?.name || '',
    price: service.options[0]?.price || 0,
    customAmount: '',
    date: '', occasion: '', address: '', notes: ''
  })
  const [step, setStep] = useState(1) // 1=form, 2=confirm

  const selectedOption = service.options.find(o => o.name === form.option)
  const finalPrice = form.option === 'Custom राशि (मनचाहा दान)' ? parseInt(form.customAmount || 0) : (selectedOption?.price || 0)

  const handleOptionChange = (opt) => {
    setForm(f => ({ ...f, option: opt.name, price: opt.price }))
  }

  const generateBookingId = () => 'KSJ-' + Date.now().toString(36).toUpperCase()

  const handleWhatsApp = () => {
    const bid = generateBookingId()
    const msg = `🙏 *जय श्री श्याम — खाटू श्याम जी*%0A%0A` +
      `📋 *बुकिंग विवरण*%0A` +
      `━━━━━━━━━━━━━━━━━━━━%0A` +
      `🆔 Booking ID: *${bid}*%0A` +
      `🛕 सेवा: *${service.title}*%0A` +
      `📌 प्रकार: *${form.option}*%0A` +
      `💰 राशि: *₹${finalPrice.toLocaleString('hi-IN')}*%0A` +
      `━━━━━━━━━━━━━━━━━━━━%0A` +
      `👤 नाम: *${form.name}*%0A` +
      `📞 फोन: *${form.phone}*%0A` +
      `🏙️ शहर: *${form.city}*%0A` +
      (form.date ? `📅 दिनांक: *${form.date}*%0A` : '') +
      (form.occasion ? `🎊 अवसर: *${form.occasion}*%0A` : '') +
      (form.notes ? `💬 नोट: *${form.notes}*%0A` : '') +
      `━━━━━━━━━━━━━━━━━━━━%0A` +
      `कृपया बुकिंग confirm करें।`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
    onSuccess({ bid, form, service, price: finalPrice })
  }

  return (
    <div className="booking-form-wrap">
      <div className="bf-header">
        <button className="bf-back" onClick={onBack}><FiArrowLeft /> वापस</button>
        <div className="bf-service-info">
          <span className="bf-svc-icon">{service.icon}</span>
          <div>
            <h2 className="hindi-text bf-svc-title">{service.title}</h2>
            <p className="hindi-text bf-svc-desc">{service.desc}</p>
          </div>
        </div>
      </div>

      <div className="bf-body">
        {/* Step 1 — Select Option */}
        <div className="bf-section">
          <h3 className="hindi-text bf-section-title">1. सेवा का प्रकार चुनें</h3>
          <div className="bf-options-grid">
            {service.options.map((opt, i) => (
              <button
                key={i}
                className={`bf-option ${form.option === opt.name ? 'selected' : ''}`}
                onClick={() => handleOptionChange(opt)}
              >
                <span className="hindi-text bf-opt-name">{opt.name}</span>
                <span className="bf-opt-price">
                  {opt.price === 0 ? 'Custom' : `₹${opt.price.toLocaleString('hi-IN')}`}
                </span>
              </button>
            ))}
          </div>
          {form.option === 'Custom राशि (मनचाहा दान)' && (
            <div className="bf-field" style={{ marginTop: 12 }}>
              <label className="hindi-text">दान राशि (₹) *</label>
              <input type="number" placeholder="राशि लिखें" min="1"
                value={form.customAmount}
                onChange={e => setForm(f => ({ ...f, customAmount: e.target.value }))} />
            </div>
          )}
        </div>

        {/* Step 2 — Personal Details */}
        <div className="bf-section">
          <h3 className="hindi-text bf-section-title">2. व्यक्तिगत जानकारी</h3>
          <div className="bf-row">
            <div className="bf-field">
              <label className="hindi-text">आपका नाम *</label>
              <input type="text" placeholder="पूरा नाम" value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </div>
            <div className="bf-field">
              <label className="hindi-text">मोबाइल नंबर *</label>
              <input type="tel" placeholder="10 अंक" value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} maxLength={10} />
            </div>
          </div>
          <div className="bf-row">
            <div className="bf-field">
              <label className="hindi-text">Email (Receipt के लिए)</label>
              <input type="email" placeholder="your@email.com" value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            </div>
            <div className="bf-field">
              <label className="hindi-text">शहर</label>
              <input type="text" placeholder="आपका शहर" value={form.city}
                onChange={e => setForm(f => ({ ...f, city: e.target.value }))} />
            </div>
          </div>
        </div>

        {/* Step 3 — Optional Details */}
        <div className="bf-section">
          <h3 className="hindi-text bf-section-title">3. अतिरिक्त जानकारी</h3>
          <div className="bf-row">
            <div className="bf-field">
              <label className="hindi-text">पसंदीदा दिनांक</label>
              <input type="date" value={form.date}
                onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
            </div>
            <div className="bf-field">
              <label className="hindi-text">अवसर (जन्मदिन / विवाह आदि)</label>
              <input type="text" placeholder="जैसे: जन्मदिन, शादी की सालगिरह" value={form.occasion}
                onChange={e => setForm(f => ({ ...f, occasion: e.target.value }))} />
            </div>
          </div>
          {(service.id === 'prasad' || service.id === 'swamani') && (
            <div className="bf-field">
              <label className="hindi-text">घर का पता (प्रसाद delivery के लिए)</label>
              <textarea placeholder="पूरा पता लिखें" rows={2} value={form.address}
                onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
            </div>
          )}
          <div className="bf-field">
            <label className="hindi-text">विशेष निर्देश / संदेश</label>
            <textarea placeholder="कोई विशेष बात..." rows={2} value={form.notes}
              onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} />
          </div>
        </div>

        {/* Price Summary */}
        <div className="bf-summary">
          <div className="bf-summary-row"><span className="hindi-text">सेवा:</span><span className="hindi-text">{service.title}</span></div>
          <div className="bf-summary-row"><span className="hindi-text">प्रकार:</span><span className="hindi-text">{form.option}</span></div>
          <div className="bf-summary-row bf-total"><span className="hindi-text">कुल राशि:</span><span className="bf-total-price">₹{finalPrice.toLocaleString('hi-IN')}</span></div>
        </div>

        {/* Submit Buttons */}
        <div className="bf-submit-area">
          <p className="hindi-text bf-submit-note">बुकिंग WhatsApp के माध्यम से confirm होगी।</p>
          <div className="bf-submit-btns">
            <button className="bf-wa-btn hindi-text"
              onClick={handleWhatsApp}
              disabled={!form.name || !form.phone}>
              <FaWhatsapp /> WhatsApp पर बुकिंग करें
            </button>
            <a href="tel:9929975116" className="bf-call-btn">
              <FiPhone /> 9929975116
            </a>
          </div>
          <div className="bf-confirm-info">
            <div className="bci-item"><FiCheck className="bci-icon green" /><span className="hindi-text">WhatsApp Confirmation मिलेगा</span></div>
            <div className="bci-item"><FiCheck className="bci-icon green" /><span className="hindi-text">Digital Receipt WhatsApp पर</span></div>
            <div className="bci-item"><FiCheck className="bci-icon green" /><span className="hindi-text">Email Confirmation (email दिया हो तो)</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Receipt Component ── */
function DigitalReceipt({ booking, onNew }) {
  const { bid, form, service, price } = booking
  const now = new Date()
  const dateStr = now.toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' })
  const timeStr = now.toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' })

  const shareWhatsApp = () => {
    const msg = `🙏 *खाटू श्याम जी — बुकिंग Receipt*%0A%0A` +
      `━━━━━━━━━━━━━━━━━━━━%0A` +
      `🆔 Booking ID: *${bid}*%0A` +
      `📅 दिनांक: *${dateStr}*%0A` +
      `⏰ समय: *${timeStr}*%0A` +
      `━━━━━━━━━━━━━━━━━━━━%0A` +
      `🛕 सेवा: *${service.title}*%0A` +
      `📌 प्रकार: *${form.option}*%0A` +
      `💰 राशि: *₹${price.toLocaleString('hi-IN')}*%0A` +
      `━━━━━━━━━━━━━━━━━━━━%0A` +
      `👤 नाम: *${form.name}*%0A` +
      `📞 फोन: *${form.phone}*%0A` +
      `━━━━━━━━━━━━━━━━━━━━%0A` +
      `✅ Status: *Pending Confirmation*%0A` +
      `🙏 जय श्री श्याम`
    window.open(`https://wa.me/?text=${msg}`, '_blank')
  }

  return (
    <div className="receipt-wrap">
      <div className="receipt-success-banner">
        <div className="rsb-icon">✅</div>
        <h2 className="hindi-text">बुकिंग Request भेजी गई!</h2>
        <p className="hindi-text">WhatsApp खुल गया — संदेश भेज दें। हम जल्द confirm करेंगे।</p>
      </div>

      <div className="receipt-card">
        <div className="receipt-header">
          <div className="rh-logo">🛕</div>
          <div>
            <h3 className="hindi-text receipt-title">खाटू श्याम जी</h3>
            <p className="receipt-sub">Digital Booking Receipt</p>
          </div>
          <div className="rh-status">Pending</div>
        </div>

        <div className="receipt-id-bar">
          <span className="hindi-text">Booking ID:</span>
          <strong className="receipt-bid">{bid}</strong>
        </div>

        <div className="receipt-details">
          <div className="rd-row"><span className="hindi-text rd-label">सेवा</span><span className="hindi-text rd-value">{service.title}</span></div>
          <div className="rd-row"><span className="hindi-text rd-label">प्रकार</span><span className="hindi-text rd-value">{form.option}</span></div>
          <div className="rd-row"><span className="hindi-text rd-label">नाम</span><span className="hindi-text rd-value">{form.name}</span></div>
          <div className="rd-row"><span className="hindi-text rd-label">फोन</span><span className="rd-value">{form.phone}</span></div>
          {form.city && <div className="rd-row"><span className="hindi-text rd-label">शहर</span><span className="hindi-text rd-value">{form.city}</span></div>}
          {form.date && <div className="rd-row"><span className="hindi-text rd-label">दिनांक</span><span className="rd-value">{form.date}</span></div>}
          {form.occasion && <div className="rd-row"><span className="hindi-text rd-label">अवसर</span><span className="hindi-text rd-value">{form.occasion}</span></div>}
          <div className="rd-row"><span className="hindi-text rd-label">बुकिंग समय</span><span className="rd-value">{dateStr}, {timeStr}</span></div>
        </div>

        <div className="receipt-amount">
          <span className="hindi-text">कुल राशि</span>
          <span className="ra-price">₹{price.toLocaleString('hi-IN')}</span>
        </div>

        <div className="receipt-note hindi-text">
          ⚠️ यह एक provisional receipt है। Payment और confirmation के लिए WhatsApp पर सम्पर्क करें।
        </div>

        <div className="receipt-actions">
          <button className="receipt-wa-btn hindi-text" onClick={shareWhatsApp}>
            <FaWhatsapp /> Receipt WhatsApp पर भेजें
          </button>
          <a href="tel:9929975116" className="receipt-call-btn">
            <FiPhone /> 9929975116
          </a>
        </div>

        <div className="receipt-confirm-note hindi-text">
          <FiCheck style={{ color: '#25d366' }} /> WhatsApp पर confirmation आने का इंतजार करें
        </div>
      </div>

      <div className="receipt-next-btns">
        <button className="btn-primary hindi-text" onClick={onNew}>
          नई बुकिंग करें →
        </button>
        <a href="tel:9929975116" className="btn-secondary">
          <FiPhone /> Support: 9929975116
        </a>
      </div>
    </div>
  )
}

/* ── Booking History ── */
function BookingHistory({ onBack }) {
  const [phone, setPhone] = useState('')
  const [searched, setSearched] = useState(false)

  return (
    <div className="bh-wrap">
      <div className="bf-header">
        <button className="bf-back" onClick={onBack}><FiArrowLeft /> वापस</button>
        <h2 className="hindi-text">📋 Booking History</h2>
      </div>
      <div className="bh-search-box card">
        <p className="hindi-text bh-info">अपनी बुकिंग देखने के लिए मोबाइल नंबर डालें।</p>
        <div className="bh-search-row">
          <input type="tel" placeholder="मोबाइल नंबर" maxLength={10} value={phone}
            onChange={e => setPhone(e.target.value)} className="bh-input" />
          <button className="bh-search-btn hindi-text" onClick={() => setSearched(true)}>
            खोजें
          </button>
        </div>
        {searched && (
          <div className="bh-no-result">
            <p className="hindi-text">इस नंबर पर कोई बुकिंग नहीं मिली।</p>
            <p className="hindi-text bh-contact-note">
              बुकिंग की जानकारी के लिए WhatsApp करें:
            </p>
            <a href={`https://wa.me/919929975116?text=मेरी Booking History देखनी है। Phone: ${phone}`}
              className="receipt-wa-btn hindi-text" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> WhatsApp पर पूछें
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Cancellation / Reschedule ── */
function CancelReschedule({ onBack }) {
  const [form, setForm] = useState({ bid: '', phone: '', type: 'cancel', reason: '' })
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    const msg = `🙏 खाटू श्याम जी — Booking ${form.type === 'cancel' ? 'Cancellation' : 'Reschedule'} Request%0A%0A` +
      `🆔 Booking ID: ${form.bid}%0A📞 Phone: ${form.phone}%0A` +
      `📋 Type: ${form.type === 'cancel' ? 'Cancellation' : 'Reschedule'}%0A` +
      `💬 Reason: ${form.reason}`
    window.open(`https://wa.me/919929975116?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <div className="cancel-wrap">
      <div className="bf-header">
        <button className="bf-back" onClick={onBack}><FiArrowLeft /> वापस</button>
        <h2 className="hindi-text">❌ Cancellation / Reschedule</h2>
      </div>
      {!sent ? (
        <div className="card cancel-box">
          <div className="bf-section" style={{ border: 'none', padding: 0 }}>
            <div className="bf-row">
              <div className="bf-field">
                <label className="hindi-text">Booking ID *</label>
                <input placeholder="जैसे: KSJ-ABC123" value={form.bid}
                  onChange={e => setForm(f => ({ ...f, bid: e.target.value }))} />
              </div>
              <div className="bf-field">
                <label className="hindi-text">मोबाइल नंबर *</label>
                <input type="tel" placeholder="10 अंक" value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
              </div>
            </div>
            <div className="bf-field">
              <label className="hindi-text">Request का प्रकार *</label>
              <div className="cancel-type-btns">
                <button className={`ct-btn ${form.type === 'cancel' ? 'active' : ''} hindi-text`}
                  onClick={() => setForm(f => ({ ...f, type: 'cancel' }))}>
                  ❌ Cancellation
                </button>
                <button className={`ct-btn ${form.type === 'reschedule' ? 'active' : ''} hindi-text`}
                  onClick={() => setForm(f => ({ ...f, type: 'reschedule' }))}>
                  📅 Reschedule
                </button>
              </div>
            </div>
            <div className="bf-field">
              <label className="hindi-text">कारण</label>
              <textarea placeholder="रद्द / बदलाव का कारण लिखें" rows={3} value={form.reason}
                onChange={e => setForm(f => ({ ...f, reason: e.target.value }))} />
            </div>
            <div className="cancel-policy card" style={{ marginTop: 16, background: 'rgba(255,100,100,0.06)', borderColor: 'rgba(255,100,100,0.2)' }}>
              <h4 className="hindi-text" style={{ color: '#ff8888', marginBottom: 8 }}>⚠️ Cancellation Policy</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {['बुकिंग से 48 घंटे पहले — 100% Refund', 'बुकिंग से 24 घंटे पहले — 50% Refund', 'बुकिंग के दिन — No Refund', 'Reschedule 24 घंटे पहले free है'].map((p, i) => (
                  <li key={i} className="hindi-text" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>• {p}</li>
                ))}
              </ul>
            </div>
            <button className="bf-wa-btn hindi-text" style={{ marginTop: 16 }}
              onClick={handleSend}
              disabled={!form.bid || !form.phone}>
              <FaWhatsapp /> Request WhatsApp पर भेजें
            </button>
          </div>
        </div>
      ) : (
        <div className="card" style={{ textAlign: 'center', padding: 40 }}>
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>✅</div>
          <h3 className="hindi-text" style={{ color: 'var(--secondary)' }}>Request भेजी गई</h3>
          <p className="hindi-text" style={{ color: 'var(--text-muted)', marginTop: 8 }}>WhatsApp खुल गया — संदेश भेज दें। हम 2 घंटे में जवाब देंगे।</p>
          <button className="btn-primary hindi-text" style={{ marginTop: 20 }} onClick={onBack}>वापस जाएं</button>
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════
   MAIN BOOKING PAGE
═══════════════════════════════════ */
export default function BookingClient() {
  const [view, setView] = useState('home') // home | form | receipt | history | cancel
  const [selectedService, setSelectedService] = useState(null)
  const [completedBooking, setCompletedBooking] = useState(null)

  const handleServiceSelect = (svc) => {
    setSelectedService(svc)
    setView('form')
  }

  const handleSuccess = (booking) => {
    setCompletedBooking(booking)
    setView('receipt')
  }

  const handleNewBooking = () => {
    setSelectedService(null)
    setCompletedBooking(null)
    setView('home')
  }

  return (
    <div className="booking-page">
      {/* Page Hero */}
      <div className="booking-hero">
        <div className="container booking-hero-content">
          <div className="bh-badge hindi-text">💳 Online Booking</div>
          <h1 className="hindi-text">बुकिंग & सेवा प्रबंधन</h1>
          <p className="hindi-text">स्वामणी, प्रसाद, भोग, श्रृंगार, निशान — सभी सेवाएं एक जगह</p>
          <div className="bh-contact-row">
            <a href="tel:9929975116" className="bh-call"><FiPhone /> 9929975116</a>
            <a href="https://wa.me/919929975116?text=बुकिंग करनी है" className="bh-wa" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span className="hindi-text">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container booking-container">

        {/* HOME — Service Selection */}
        {view === 'home' && (
          <>
            {/* Quick Nav */}
            <div className="booking-quick-nav">
              <button className="bqn-btn hindi-text" onClick={() => setView('history')}><FiClock /> बुकिंग History</button>
              <button className="bqn-btn hindi-text" onClick={() => setView('cancel')}><FiX /> Cancel / Reschedule</button>
              <a href="tel:9929975116" className="bqn-btn hindi-text"><FiPhone /> Call करें</a>
              <a href="https://wa.me/919929975116" className="bqn-btn bqn-wa hindi-text" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a>
            </div>

            {/* Services Grid */}
            <div className="booking-services-grid">
              {services.map(svc => (
                <button key={svc.id} className="bsvc-card card" onClick={() => handleServiceSelect(svc)}>
                  <div className="bsvc-icon" style={{ background: `${svc.color}18`, color: svc.color }}>
                    {svc.icon}
                  </div>
                  <div className="bsvc-info">
                    <h3 className="hindi-text bsvc-title">{svc.title}</h3>
                    <p className="hindi-text bsvc-desc">{svc.desc}</p>
                    <div className="bsvc-prices">
                      <span className="hindi-text bsvc-from">₹{Math.min(...svc.options.filter(o => o.price > 0).map(o => o.price)).toLocaleString('hi-IN')} से शुरू</span>
                    </div>
                    <p className="hindi-text bsvc-note">{svc.note}</p>
                  </div>
                  <span className="bsvc-arrow" style={{ color: svc.color }}>→</span>
                </button>
              ))}
            </div>

            {/* Info Box */}
            <div className="booking-info-box">
              <div className="bib-item"><FiCheck className="bib-icon" /><span className="hindi-text">WhatsApp Confirmation — बुकिंग के तुरंत बाद</span></div>
              <div className="bib-item"><FiCheck className="bib-icon" /><span className="hindi-text">Digital Receipt — WhatsApp पर भेजी जाएगी</span></div>
              <div className="bib-item"><FiCheck className="bib-icon" /><span className="hindi-text">Email Confirmation — Email देने पर</span></div>
              <div className="bib-item"><FiCheck className="bib-icon" /><span className="hindi-text">24/7 Support — Call या WhatsApp</span></div>
            </div>
          </>
        )}

        {/* FORM VIEW */}
        {view === 'form' && selectedService && (
          <BookingForm
            service={selectedService}
            onBack={() => setView('home')}
            onSuccess={handleSuccess}
          />
        )}

        {/* RECEIPT VIEW */}
        {view === 'receipt' && completedBooking && (
          <DigitalReceipt
            booking={completedBooking}
            onNew={handleNewBooking}
          />
        )}

        {/* HISTORY VIEW */}
        {view === 'history' && (
          <BookingHistory onBack={() => setView('home')} />
        )}

        {/* CANCEL VIEW */}
        {view === 'cancel' && (
          <CancelReschedule onBack={() => setView('home')} />
        )}
      </div>
    </div>
  )
}
