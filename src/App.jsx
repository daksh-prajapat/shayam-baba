import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import MobileNav from './components/MobileNav/MobileNav'
import NotificationBanner from './components/NotificationBanner/NotificationBanner'
import ContactPopup from './components/ContactPopup/ContactPopup'
import Home from './pages/Home/Home'
import Swamani from './pages/Swamani/Swamani'
import DarshanTimings from './pages/DarshanTimings/DarshanTimings'
import KathaParichay from './pages/KathaParichay/KathaParichay'
import PrasadPuja from './pages/PrasadPuja/PrasadPuja'
import NishanMannat from './pages/NishanMannat/NishanMannat'
import BhajanAarti from './pages/BhajanAarti/BhajanAarti'
import TravelGuide from './pages/TravelGuide/TravelGuide'
import Festivals from './pages/Festivals/Festivals'
import Gallery from './pages/Gallery/Gallery'
import Blog from './pages/Blog/Blog'
import ContactPage from './pages/Contact/ContactPage'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './App.css'

function App() {
  const [showNotification, setShowNotification] = useState(true)
  const [showContactPopup, setShowContactPopup] = useState(false)

  // Show contact popup 3 seconds after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContactPopup(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        {showNotification && (
          <NotificationBanner onClose={() => setShowNotification(false)} />
        )}
        <Navbar onContactClick={() => setShowContactPopup(true)} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home onContactClick={() => setShowContactPopup(true)} />} />
            <Route path="/swamani" element={<Swamani />} />
            <Route path="/darshan-timings" element={<DarshanTimings />} />
            <Route path="/katha-parichay" element={<KathaParichay />} />
            <Route path="/prasad-puja" element={<PrasadPuja />} />
            <Route path="/nishan-mannat" element={<NishanMannat />} />
            <Route path="/bhajan-aarti" element={<BhajanAarti />} />
            <Route path="/travel-guide" element={<TravelGuide />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileNav />
        {showContactPopup && (
          <ContactPopup onClose={() => setShowContactPopup(false)} />
        )}
      </div>
    </Router>
  )
}

export default App
