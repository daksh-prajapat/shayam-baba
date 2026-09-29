'use client'
import { useState } from 'react'
import './Festivals.css'
const festivals=[
  {
    id:'falgun',
    name:'फाल्गुन मेला 2027',
    date:'9 March 2027 (फाल्गुन शुक्ल षष्ठी)',
    month:'मार्च 2027',
    icon:'🚩',
    highlight:true,
    desc:'खाटू श्याम जी का सबसे बड़ा वार्षिक मेला। फाल्गुन शुक्ल षष्ठी से पूर्णिमा तक चलता है। देश-विदेश से करोड़ों भक्त आते हैं। यह एशिया का सबसे बड़ा धार्मिक मेला माना जाता है।',
    activities:['निशान यात्रा','महाभंडारा','भजन-कीर्तन','विशेष दर्शन','सांस्कृतिक कार्यक्रम','छप्पन भोग']
  },
  {
    id:'shyam-jayanti',
    name:'श्याम जयंती (खाटू श्याम जन्मदिन)',
    date:'20 November 2026 (कार्तिक शुक्ल एकादशी)',
    month:'नवंबर 2026',
    icon:'👑',
    highlight:true,
    desc:'बाबा खाटू श्याम जी की जयंती — कार्तिक शुक्ल एकादशी (देवउठनी एकादशी) के दिन मनाई जाती है। इस दिन विशेष श्रृंगार, महाभंडारा और भजन-कीर्तन होते हैं। 24 घंटे दर्शन उपलब्ध।',
    activities:['विशेष श्रृंगार','महाभंडारा','24 घंटे दर्शन','भजन-कीर्तन','नि:शुल्क प्रसाद','निशान चढ़ावा']
  },
  {
    id:'janmashtami',
    name:'जन्माष्टमी 2027',
    date:'25 August 2027 (भाद्रपद कृष्ण अष्टमी)',
    month:'अगस्त 2027',
    icon:'🪈',
    desc:'जन्माष्टमी पर रात 12 बजे भगवान श्री कृष्ण का जन्मोत्सव मनाया जाता है। खाटू में बाबा श्याम (कृष्ण के ही अंश) की विशेष पूजा होती है। मंदिर रातभर खुला रहता है।',
    activities:['रात 12 बजे विशेष पूजा','झांकी','भजन-कीर्तन','प्रसाद वितरण','24 घंटे दर्शन']
  },
  {
    id:'ekadashi',
    name:'एकादशी',
    date:'हर महीने 2 बार (अगली: 6 Oct 2026)',
    month:'प्रत्येक मास',
    icon:'🙏',
    desc:'एकादशी के दिन खाटू श्याम जी मंदिर में 24 घंटे दर्शन की व्यवस्था होती है। इस दिन हजारों भक्त उपवास रखकर बाबा के दर्शन करते हैं। वर्ष 2026 में 24 एकादशी हैं।',
    activities:['24 घंटे दर्शन','विशेष पूजा','उपवास','भजन-कीर्तन','प्रसाद वितरण']
  },
  {
    id:'diwali',
    name:'दीपावली',
    date:'8 November 2026 (कार्तिक अमावस्या)',
    month:'नवंबर 2026',
    icon:'🪔',
    desc:'दीपावली पर खाटू श्याम जी मंदिर हजारों दीपों से जगमगाता है। विशेष श्रृंगार आरती और दीप महोत्सव का आयोजन होता है। पूरे मंदिर परिसर में रोशनी का अद्भुत नजारा देखने को मिलता है।',
    activities:['दीप महोत्सव','विशेष श्रृंगार आरती','भजन-कीर्तन','प्रसाद वितरण','आतिशबाजी']
  },
  {
    id:'holi',
    name:'होली / फाल्गुन मेला 2027',
    date:'21 March 2027 (फाल्गुन पूर्णिमा)',
    month:'मार्च 2027',
    icon:'🌈',
    desc:'फाल्गुन मेले के बाद होली का उत्सव मनाया जाता है। बाबा के साथ रंगोत्सव का अद्भुत आनंद। फूलों की होली, गुलाल और भंडारे का आयोजन।',
    activities:['रंगोत्सव','होली भजन','फूलों की होली','भंडारा','निशान यात्रा']
  },
  {
    id:'nirjala',
    name:'निर्जला एकादशी 2027',
    date:'14 June 2027 (ज्येष्ठ शुक्ल एकादशी)',
    month:'जून 2027',
    icon:'✨',
    desc:'साल की सबसे कठिन और सबसे फलदायी एकादशी। बिना जल के व्रत रखने से 24 एकादशी व्रत का फल एक साथ मिलता है। खाटू में इस दिन विशेष भंडारा और दर्शन का आयोजन।',
    activities:['निर्जला व्रत','विशेष दर्शन','महाभंडारा','भजन-कीर्तन','24 घंटे दर्शन']
  },
]
export default function FestivalsClient(){const[active,setActive]=useState(null);return(<div className="festivals-page"><div className="page-hero festivals-hero"><div className="container"><h1 className="hindi-text">विशेष त्यौहार & उत्सव</h1><p className="hindi-text">खाटू श्याम जी के प्रमुख त्यौहार और उत्सव</p></div></div><div className="container" style={{padding:'50px 20px'}}><div className="festivals-grid">{festivals.map((f)=>(<div key={f.id} className={`festival-detail-card card ${f.highlight?'highlight-card':''}`}>{f.highlight&&<span className="main-festival-tag hindi-text">🔥 मुख्य उत्सव</span>}<div className="fd-header" onClick={()=>setActive(active===f.id?null:f.id)}><span className="fd-icon">{f.icon}</span><div className="fd-title-col"><h2 className="hindi-text fd-name">{f.name}</h2><p className="hindi-text fd-date">{f.date} | {f.month}</p></div><span className="fd-toggle">{active===f.id?'▲':'▼'}</span></div>{active===f.id&&(<div className="fd-content"><p className="hindi-text fd-desc">{f.desc}</p><h4 className="hindi-text fd-activities-title">मुख्य कार्यक्रम:</h4><div className="fd-activities">{f.activities.map((a,j)=>(<span key={j} className="activity-chip hindi-text">✦ {a}</span>))}</div></div>)}</div>))}</div></div></div>)}
