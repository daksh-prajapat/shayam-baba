'use client'
// ── LiveTempleStatus ─────────────────────────────────────────────────────────
// Auto-updates every minute. Shows:
//  • Temple open/closed status
//  • Current or next aarti
//  • Next ekadashi with countdown
//  • Upcoming festivals

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  getTempleStatus, getNextAarti, getCurrentAarti,
  getNextEkadashi, getUpcomingFestivals, AARTI_SCHEDULE, fmt12
} from '@/lib/templeSchedule'
import './LiveTempleStatus.css'

export default function LiveTempleStatus() {
  const [now, setNow]             = useState(null)
  const [status, setStatus]       = useState(null)
  const [nextAarti, setNextAarti] = useState(null)
  const [curAarti, setCurAarti]   = useState(null)
  const [ekadashi, setEkadashi]   = useState(null)
  const [festivals, setFestivals] = useState([])

  const refresh = (date) => {
    setNow(date)
    setStatus(getTempleStatus(date))
    setNextAarti(getNextAarti(date))
    setCurAarti(getCurrentAarti(date))
    setEkadashi(getNextEkadashi(date))
    setFestivals(getUpcomingFestivals(date, 3))
  }

  useEffect(() => {
    refresh(new Date())
    const id = setInterval(() => refresh(new Date()), 60000) // every 1 min
    return () => clearInterval(id)
  }, [])

  if (!status || !now) return null // SSR safe

  const timeStr = now.toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' })

  return (
    <section className="lts-section">
      <div className="container">
        <p className="section-label hindi-text">🔴 Live Status</p>
        <h2 className="section-title hindi-text">मंदिर की अभी की स्थिति</h2>
        <div className="divider"><span>🪔</span></div>

        <div className="lts-grid">

          {/* ── Card 1: Temple Status ── */}
          <div className="lts-card lts-main-card card">
            <div className="lts-card-top">
              <span className="lts-dot" style={{ background: status.color }}></span>
              <span className="hindi-text lts-status-label" style={{ color: status.color }}>
                {status.label}
              </span>
              <span className="lts-time hindi-text">{timeStr}</span>
            </div>

            <div className="lts-temple-name hindi-text">🛕 खाटू श्याम जी मंदिर</div>

            {/* Current aarti banner */}
            {curAarti && (
              <div className="lts-cur-aarti hindi-text">
                🪔 अभी चल रही है: <strong>{curAarti.name}</strong>
              </div>
            )}

            {/* Next aarti */}
            {nextAarti && !curAarti && (
              <div className="lts-next-aarti">
                <span className="hindi-text lts-next-label">अगली आरती:</span>
                <span className="hindi-text lts-next-name">{nextAarti.name}</span>
                <span className="lts-next-time">{nextAarti.timeStr}</span>
                {nextAarti.minutesAway && nextAarti.minutesAway <= 120 && (
                  <span className="lts-next-countdown hindi-text">{nextAarti.displayTime}</span>
                )}
              </div>
            )}

            {/* All today's aartis */}
            <div className="lts-aarti-list">
              {AARTI_SCHEDULE.map((a, i) => {
                const isPast = (now.getHours() * 60 + now.getMinutes()) > (a.hour * 60 + a.min + 45)
                const isCurrent = curAarti?.name === a.name
                const isNext = nextAarti?.name === a.name && !curAarti
                return (
                  <div key={i} className={`lts-aarti-row ${isCurrent ? 'current' : ''} ${isNext ? 'upcoming' : ''} ${isPast ? 'past' : ''}`}>
                    <span className="lts-aarti-dot">
                      {isCurrent ? '🔴' : isPast ? '✓' : '🔔'}
                    </span>
                    <span className="hindi-text lts-aarti-name">{a.name}</span>
                    <span className="lts-aarti-time">{fmt12(a.hour, a.min)}</span>
                  </div>
                )
              })}
            </div>

            <Link href="/darshan-timings" className="lts-more-link hindi-text">
              पूर्ण दर्शन समय देखें →
            </Link>
          </div>

          {/* ── Card 2: Next Ekadashi ── */}
          {ekadashi && (
            <div className={`lts-card lts-ek-card card ${ekadashi.isToday ? 'lts-today-glow' : ''}`}>
              <div className="lts-card-icon">🪔</div>
              <div className="lts-ek-badge hindi-text">
                {ekadashi.isToday ? '🎉 आज एकादशी!' : 'अगली एकादशी'}
              </div>
              <h3 className="hindi-text lts-ek-name">{ekadashi.name}</h3>
              <p className="hindi-text lts-ek-date">{ekadashi.dateStr}</p>
              <div className="lts-countdown-pill hindi-text" style={{
                background: ekadashi.isToday ? 'rgba(37,211,102,0.15)' : ekadashi.diffDays <= 7 ? 'rgba(212,160,23,0.15)' : 'rgba(255,255,255,0.06)',
                color: ekadashi.isToday ? '#25d366' : ekadashi.diffDays <= 7 ? '#D4A017' : 'var(--text-secondary)',
                borderColor: ekadashi.isToday ? '#25d366' : ekadashi.diffDays <= 7 ? '#D4A017' : 'rgba(255,255,255,0.12)',
              }}>
                {ekadashi.countdownLabel}
              </div>
              {ekadashi.isToday && (
                <p className="hindi-text lts-ek-special">⭐ आज 24 घंटे दर्शन — मंदिर रात भर खुला</p>
              )}
              <Link href="/ekadashi" className="lts-more-link hindi-text">
                एकादशी कैलेंडर →
              </Link>
            </div>
          )}

          {/* ── Card 3: Upcoming Festivals ── */}
          <div className="lts-card lts-fest-card card">
            <div className="lts-card-icon">🎪</div>
            <h3 className="hindi-text lts-fest-title">आने वाले उत्सव</h3>
            <div className="lts-fest-list">
              {festivals.map((f, i) => (
                <div key={i} className={`lts-fest-item ${f.highlight ? 'lts-fest-highlight' : ''} ${f.isToday ? 'lts-fest-today' : ''}`}>
                  <span className="lts-fest-icon">{f.icon}</span>
                  <div className="lts-fest-info">
                    <span className="hindi-text lts-fest-name">{f.name}</span>
                    <span className="hindi-text lts-fest-date">{f.dateStr}</span>
                    <span className="hindi-text lts-fest-desc">{f.desc}</span>
                  </div>
                  <span className="hindi-text lts-fest-days" style={{
                    color: f.isToday ? '#25d366' : f.diffDays <= 7 ? '#D4A017' : 'var(--text-muted)'
                  }}>
                    {f.countdownLabel}
                  </span>
                </div>
              ))}
            </div>
            <Link href="/festivals" className="lts-more-link hindi-text">
              सभी उत्सव देखें →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
