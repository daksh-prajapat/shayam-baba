'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillHome } from 'react-icons/ai'
import { GiTempleGate } from 'react-icons/gi'
import { IoMusicalNotes } from 'react-icons/io5'
import { FaConciergeBell, FaCalendarAlt } from 'react-icons/fa'
import { MdBookOnline } from 'react-icons/md'
import './MobileNav.css'

export default function MobileNav() {
  const pathname = usePathname()
  const tabs = [
    { path: '/', icon: <AiFillHome />, label: 'होम' },
    { path: '/swamani', icon: <FaConciergeBell />, label: 'स्वामणी' },
    { path: '/darshan-timings', icon: <GiTempleGate />, label: 'दर्शन' },
    { path: '/booking', icon: <MdBookOnline />, label: 'बुकिंग' },
    { path: '/bhajan-aarti', icon: <IoMusicalNotes />, label: 'भजन' },
  ]
  return (
    <nav className="mobile-bottom-nav" role="navigation" aria-label="Bottom navigation">
      {tabs.map(tab => (
        <Link key={tab.path} href={tab.path}
          className={`mobile-tab ${pathname === tab.path ? 'active' : ''}`}
          aria-label={tab.label}>
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-label hindi-text">{tab.label}</span>
        </Link>
      ))}
    </nav>
  )
}
