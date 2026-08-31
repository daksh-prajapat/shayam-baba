import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'
import { MdLiveTv } from 'react-icons/md'
import './HeroSection.css'

export default function HeroSection() {
  const particlesRef = useRef(null)

  useEffect(() => {
    // Generate floating particles
    const container = particlesRef.current
    if (!container) return
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 6}s;
        animation-duration: ${4 + Math.random() * 6}s;
        width: ${2 + Math.random() * 4}px;
        height: ${2 + Math.random() * 4}px;
        opacity: ${0.3 + Math.random() * 0.5};
      `
      container.appendChild(p)
    }
    return () => { if (container) container.innerHTML = '' }
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-particles" ref={particlesRef}></div>
      
      {/* Mandala Background */}
      <div className="hero-mandala"></div>
      <div className="hero-glow top-glow"></div>
      <div className="hero-glow bottom-glow"></div>

      <div className="hero-content">
        {/* Decorative top */}
        <div className="hero-deco">
          <span>🌸</span>
          <span className="deco-line"></span>
          <span className="hindi-text">श्री श्याम बाबा की जय</span>
          <span className="deco-line"></span>
          <span>🌸</span>
        </div>

        {/* Main Title */}
        <h1 className="hero-title hindi-text">
          <span className="title-om">ॐ</span>
          <br />
          खाटू श्याम जी
        </h1>
        
        <h2 className="hero-subtitle hindi-text">
          हारे का सहारा, बाबा श्याम हमारा
        </h2>

        <p className="hero-desc hindi-text">
          बर्बरीक से खाटू श्याम — शीश दानी, कलियुग के भगवान।<br />
          Live दर्शन, भजन, प्रसाद बुकिंग — सब कुछ एक जगह।
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <Link to="/live-darshan" className="hero-btn-live">
            <MdLiveTv className="btn-icon" />
            <span className="hindi-text">Live दर्शन करें</span>
            <span className="live-badge">LIVE</span>
          </Link>
          <Link to="/prasad-puja" className="btn-secondary">
            <span className="hindi-text">प्रसाद बुकिंग</span>
          </Link>
          <a href="tel:9929975116" className="hero-btn-call">
            <FiPhone />
            <span>9929975116</span>
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num hindi-text">१५ लाख+</span>
            <span className="stat-label hindi-text">भक्त प्रतिवर्ष</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num hindi-text">१०००+ साल</span>
            <span className="stat-label hindi-text">प्राचीन मंदिर</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">24/7</span>
            <span className="stat-label hindi-text">सेवा उपलब्ध</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
        <span className="hindi-text">नीचे देखें</span>
      </div>
    </section>
  )
}
