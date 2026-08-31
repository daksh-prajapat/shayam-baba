import React from 'react'
import { Link } from 'react-router-dom'
import { MdLiveTv } from 'react-icons/md'
import { GiTempleGate, GiLotusFlower } from 'react-icons/gi'
import { IoMusicalNotes } from 'react-icons/io5'
import { FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'
import { BsImages } from 'react-icons/bs'
import './QuickActions.css'

const actions = [
  { icon: <MdLiveTv />, label: 'Live दर्शन', sub: 'अभी देखें', path: '/live-darshan', color: '#cc0000' },
  { icon: <GiTempleGate />, label: 'दर्शन समय', sub: 'खुलने का समय', path: '/darshan-timings', color: '#D4A017' },
  { icon: <GiLotusFlower />, label: 'प्रसाद बुकिंग', sub: 'Online बुक करें', path: '/prasad-puja', color: '#E91E8C' },
  { icon: <IoMusicalNotes />, label: 'भजन आरती', sub: 'सुनें', path: '/bhajan-aarti', color: '#7B2D8B' },
  { icon: <FaMapMarkedAlt />, label: 'यात्रा गाइड', sub: 'कैसे पहुंचें', path: '/travel-guide', color: '#2196F3' },
  { icon: <BsImages />, label: 'गैलरी', sub: 'फोटो देखें', path: '/gallery', color: '#4CAF50' },
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
              <a key={i} href={a.path} className="qa-card">
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
