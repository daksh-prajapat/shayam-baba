'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi'
import { GiLotus } from 'react-icons/gi'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'होम' },
  {
    label: 'दर्शन सेवा',
    dropdown: [
      { path: '/darshan-timings', label: '⏰ दर्शन समय' },
      { path: '/swamani', label: '👑 स्वामणी भोग' },
      { path: '/prasad-puja', label: '🍯 प्रसाद बुकिंग' },
      { path: '/nishan-mannat', label: '🚩 निशान मन्नत' },
      { path: '/bhandara', label: '🍽️ विशाल भंडारा' },
    ]
  },
  { path: '/booking', label: '💳 बुकिंग' },
  { path: '/katha-parichay', label: 'कथा परिचय' },
  { path: '/bhajan-aarti', label: 'भजन आरती' },
  { path: '/festivals', label: 'त्यौहार' },
  {
    label: 'यात्रा',
    dropdown: [
      { path: '/ekadashi', label: '🪔 एकादशी Calendar' },
      { path: '/travel-guide', label: '📍 यात्रा गाइड' },
      { path: '/gallery', label: '📸 गैलरी' },
      { path: '/blog', label: '📰 ब्लॉग' },
    ]
  },
  { path: '/contact', label: 'सम्पर्क' },
]

export default function Navbar({ onContactClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <div className="logo-icon"><GiLotus /></div>
          <div className="logo-text">
            <span className="logo-main">खाटू श्याम जी</span>
            <span className="logo-sub">Khatu Shyam Ji | Khatu Dham</span>
          </div>
        </Link>

        <div className="navbar-links desktop-links">
          {navLinks.map((link, i) => (
            link.dropdown ? (
              <div key={i} className="nav-dropdown-wrap"
                onMouseEnter={() => setOpenDropdown(i)}
                onMouseLeave={() => setOpenDropdown(null)}>
                <button className="nav-link dropdown-trigger">
                  {link.label} <FiChevronDown className={`chevron ${openDropdown === i ? 'open' : ''}`} />
                </button>
                {openDropdown === i && (
                  <div className="dropdown-menu">
                    {link.dropdown.map(d => (
                      <Link key={d.path} href={d.path} className="dropdown-item hindi-text">{d.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.path} href={link.path}
                className={`nav-link ${pathname === link.path ? 'active' : ''}`}>
                {link.label}
              </Link>
            )
          ))}
        </div>

        <div className="navbar-right">
          <a href="tel:9929975116" className="navbar-phone">
            <FiPhone /><span>9929975116</span>
          </a>
          <button className="navbar-book-btn hindi-text" onClick={onContactClick}>बुकिंग करें</button>
        </div>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />

      <div className={`mobile-menu-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <GiLotus className="mobile-logo-icon" />
            <div>
              <span className="hindi-text">खाटू श्याम जी</span>
              <span>Khatu Dham</span>
            </div>
          </div>
          <button className="mobile-close-btn" onClick={() => setIsOpen(false)}><FiX /></button>
        </div>

        <div className="mobile-menu-body">
          {navLinks.map((link, i) => (
            link.dropdown ? (
              <div key={i} className="mobile-dropdown-section">
                <button className="mobile-dropdown-trigger"
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === i ? null : i)}>
                  <span className="hindi-text">{link.label}</span>
                  <FiChevronDown className={`chevron ${openMobileDropdown === i ? 'open' : ''}`} />
                </button>
                {openMobileDropdown === i && (
                  <div className="mobile-dropdown-items">
                    {link.dropdown.map(d => (
                      <Link key={d.path} href={d.path} className="mobile-sub-link hindi-text">{d.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.path} href={link.path}
                className={`mobile-nav-link ${pathname === link.path ? 'active' : ''}`}>
                <span className="hindi-text">{link.label}</span>
              </Link>
            )
          ))}
        </div>

        <div className="mobile-menu-footer">
          <a href="tel:9929975116" className="mobile-call-btn"><FiPhone /> 9929975116</a>
          <button className="mobile-book-btn hindi-text"
            onClick={() => { setIsOpen(false); onContactClick() }}>
            📝 बुकिंग / सम्पर्क करें
          </button>
        </div>
      </div>
    </nav>
  )
}
