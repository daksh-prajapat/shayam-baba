import React from 'react'
import { Link } from 'react-router-dom'
import { GiTempleGate, GiLotusFlower } from 'react-icons/gi'
import { IoMusicalNotes } from 'react-icons/io5'
import { FaMapMarkedAlt, FaPhoneAlt, FaConciergeBell } from 'react-icons/fa'
import { BsImages } from 'react-icons/bs'
import { MdFestival } from 'react-icons/md'
import './QuickActions.css'

const actions = [
  { icon: <FaConciergeBell />, label: 'स्वामणी भोग', sub: 'Online बुकिंग', path: '/swamani', color: '#D4A017' },
  { icon: <GiTempleGate />, label: 'दर्शन समय', sub: 'खुलने का समय', path: '/darshan-timings', color: '#7B2D8B' },
  { icon: <GiLotusFlower />, label: 'प्रसाद बुकिंग', sub: '₹501 से शुरू', path: '/prasad-puja', color: '#E91E8C' },
  { icon: <IoMusicalNotes />, label: 'भजन आरती', sub: 'सुनें', path: '/bhajan-aarti', color: '#9C27B0' },
  { icon: <FaMapMarkedAlt />, label: 'यात्रा गाइड', sub: 'कैसे पहुंचें', path: '/travel-guide', color: '#2196F3' },
  { icon: <BsImages />, label: 'गैलरी', sub: 'फोटो देखें', path: '/gallery', color: '#4CAF50' },
  { icon: <MdFestival />, label: 'त्यौहार', sub: 'पर्व & उत्सव', path: '/festivals', color: '#FF6B35' },
  { icon: <FaPhoneAlt />, label: 'Call करें', sub: '9929975116', path: 'tel:9929975116', color: '#25d366', isExternal: true },
]

export default function QuickActions() {
  return (
    <section className="quick-actions-section">
      <div className="container">
        <h2 className="section-title hindi-text">त्वरित सेवाएं</h2>
        <div className="divider"><span>🌸</span></div>
        <div className="qa-grid">
          {actions.map((a, i) => (
            a.isExternal ? (
              <a key={i} href={a.path} className="qa-card" aria-label={a.label}>
                <div className="qa-icon" style={{ color: a.color, background: `${a.color}20` }}>
                  {a.icon}
                </div>
                <span className="qa-label hindi-text">{a.label}</span>
                <span className="qa-sub">{a.sub}</span>
              </a>
            ) : (
              <Link key={i} to={a.path} className="qa-card">
                <div className="qa-icon" style={{ color: a.color, background: `${a.color}20` }}>
                  {a.icon}
                </div>
                <span className="qa-label hindi-text">{a.label}</span>
                <span className="qa-sub hindi-text">{a.sub}</span>
              </Link>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
