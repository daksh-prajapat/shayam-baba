'use client'
import { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import MobileNav from './MobileNav/MobileNav'
import NotificationBanner from './NotificationBanner/NotificationBanner'
import ContactPopup from './ContactPopup/ContactPopup'

const BANNER_H = 42
const NAVBAR_H = 76

export default function ClientLayout({ children }) {
  const [showBanner, setShowBanner] = useState(true)
  const [showPopup, setShowPopup]   = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 3000)
    return () => clearTimeout(t)
  }, [])

  const topPad = (showBanner ? BANNER_H : 0) + NAVBAR_H

  return (
    <div className="app-wrapper">
      {showBanner && (
        <NotificationBanner onClose={() => setShowBanner(false)} />
      )}
      <Navbar onContactClick={() => setShowPopup(true)} bannerVisible={showBanner} />
      <main className="main-content" style={{ paddingTop: topPad }}>
        {children}
      </main>
      <Footer />
      <MobileNav />
      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </div>
  )
}
