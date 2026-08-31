import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkedAlt, FaTrain, FaBus, FaCar } from 'react-icons/fa'
import './TravelPreview.css'

const routes = [
  { from: 'जयपुर', to: 'खाटू', dist: '80 km', time: '2 घंटे', icon: <FaCar /> },
  { from: 'दिल्ली', to: 'खाटू', dist: '260 km', time: '4-5 घंटे', icon: <FaCar /> },
  { from: 'रींगस', to: 'खाटू', dist: '17 km', time: '30 मिनट', icon: <FaBus /> },
]

export default function TravelPreview() {
  return (
    <section className="travel-preview-section">
      <div className="container">
        <p className="section-label hindi-text">📍 यात्रा</p>
        <h2 className="section-title hindi-text">खाटू धाम कैसे पहुंचें?</h2>
        <div className="divider"><span>🗺️</span></div>

        <div className="travel-grid">
          <div className="travel-routes">
            {routes.map((r, i) => (
              <div key={i} className="route-card card">
                <div className="route-icon">{r.icon}</div>
                <div className="route-info">
                  <span className="hindi-text route-from">{r.from}</span>
                  <span className="route-arrow">→</span>
                  <span className="hindi-text route-to">{r.to}</span>
                </div>
                <div className="route-meta">
                  <span className="hindi-text">{r.dist}</span>
                  <span className="route-dot">•</span>
                  <span className="hindi-text">{r.time}</span>
                </div>
              </div>
            ))}

            <div className="transport-options">
              <div className="transport-item">
                <FaTrain className="t-icon" />
                <div>
                  <p className="hindi-text t-title">रेलवे</p>
                  <p className="hindi-text t-sub">रींगस जंक्शन (17km)</p>
                </div>
              </div>
              <div className="transport-item">
                <FaBus className="t-icon" />
                <div>
                  <p className="hindi-text t-title">बस सेवा</p>
                  <p className="hindi-text t-sub">RSRTC बस उपलब्ध</p>
                </div>
              </div>
            </div>

            <Link to="/travel-guide" className="btn-primary hindi-text full-w">
              यात्रा गाइड देखें →
            </Link>
          </div>

          {/* Map Embed */}
          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8!2d75.0!3d27.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d06f41c0e7c09%3A0x6e5a2e6b5f7b7a3a!2sKhatu%20Shyam%20Temple!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Khatu Shyam Temple Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
