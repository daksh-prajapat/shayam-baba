import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { MdLiveTv } from 'react-icons/md'
import { GiTempleGate } from 'react-icons/gi'
import { IoMusicalNotes } from 'react-icons/io5'
import { HiDotsHorizontal } from 'react-icons/hi'
import './MobileNav.css'

export default function MobileNav() {
  const location = useLocation()

  const tabs = [
    { path: '/', icon: <AiFillHome />, label: 'होम' },
    { path: '/live-darshan', icon: <MdLiveTv />, label: 'Live' },
    { path: '/darshan-timings', icon: <GiTempleGate />, label: 'दर्शन' },
    { path: '/bhajan-aarti', icon: <IoMusicalNotes />, label: 'भजन' },
    { path: '/prasad-puja', icon: <HiDotsHorizontal />, label: 'More' },
  ]

  return (
    <nav className="mobile-bottom-nav">
      {tabs.map(tab => (
        <Link
          key={tab.path}
          to={tab.path}
          className={`mobile-tab ${location.pathname === tab.path ? 'active' : ''}`}
        >
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-label">{tab.label}</span>
          {tab.path === '/live-darshan' && (
            <span className="live-dot"></span>
          )}
        </Link>
      ))}
    </nav>
  )
}
