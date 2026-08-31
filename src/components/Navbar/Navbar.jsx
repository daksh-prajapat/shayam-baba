import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { GiLotus, GiTempleGate } from 'react-icons/gi'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'होम' },
  { path: '/live-darshan', label: '🔴 Live' },
  { path: '/darshan-timings', label: 'दर्शन समय' },
  { path: '/katha-parichay', label: 'कथा परिचय' },
  { path: '/prasad-puja', label: 'प्रसाद & पूजा' },
  { path: '/nishan-mannat', label: 'निशान मन्नत' },
  { path: '/bhajan-aarti', label: 'भजन आरती' },
  { path: '/travel-guide', label: 'यात्रा गाइड' },
  { path: '/festivals', label: 'त्यौहार' },
  { path: '/gallery', label: 'गैलरी' },
  { path: '/blog', label: 'ब्लॉग' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <GiLotus />
          </div>
          <div className="logo-text">
            <span className="logo-main">खाटू श्याम जी</span>
            <span className="logo-sub">Khatu Shyam Ji</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="navbar-links desktop-links">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Phone */}
        <a href="tel:9929975116" className="navbar-phone">
          <FiPhone />
          <span>9929975116</span>
        </a>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:9929975116" className="mobile-phone-link">
            <FiPhone /> 9929975116
          </a>
        </div>
      </div>
    </nav>
  )
}
