import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { GiTempleGate } from 'react-icons/gi'
import { IoMusicalNotes } from 'react-icons/io5'
import { FaConciergeBell } from 'react-icons/fa'
import { MdPhotoLibrary } from 'react-icons/md'
import './MobileNav.css'

export default function MobileNav() {
  const location = useLocation()

  const tabs = [
    { path: '/', icon: <AiFillHome />, label: 'होम' },
    { path: '/swamani', icon: <FaConciergeBell />, label: 'स्वामणी' },
    { path: '/prasad-puja', icon: <GiTempleGate />, label: 'प्रसाद' },
    { path: '/bhajan-aarti', icon: <IoMusicalNotes />, label: 'भजन' },
    { path: '/gallery', icon: <MdPhotoLibrary />, label: 'गैलरी' },
  ]

  return (
    <nav className="mobile-bottom-nav" role="navigation" aria-label="Bottom navigation">
      {tabs.map(tab => (
        <Link
          key={tab.path}
          to={tab.path}
          className={`mobile-tab ${location.pathname === tab.path ? 'active' : ''}`}
          aria-label={tab.label}
        >
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-label hindi-text">{tab.label}</span>
        </Link>
      ))}
    </nav>
  )
}
