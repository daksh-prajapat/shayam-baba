// ── Temple Schedule Utility ─────────────────────────────────────────────────
// Pure JS — no backend needed. All calculations based on current date/time.

// ── Aarti timings (fixed daily) ──
export const AARTI_SCHEDULE = [
  { name: 'मंगला आरती',    nameEn: 'Mangala Aarti',    hour: 4,  min: 30, period: 'morning'  },
  { name: 'श्रृंगार आरती', nameEn: 'Shringar Aarti',   hour: 7,  min: 0,  period: 'morning'  },
  { name: 'राजभोग आरती',  nameEn: 'Rajbhog Aarti',    hour: 10, min: 0,  period: 'morning'  },
  { name: 'ग्वाल आरती',   nameEn: 'Gwal Aarti',       hour: 11, min: 30, period: 'midday'   },
  { name: 'संध्या आरती',  nameEn: 'Sandhya Aarti',    hour: 19, min: 30, period: 'evening'  },
  { name: 'शयन आरती',     nameEn: 'Shayan Aarti',     hour: 21, min: 30, period: 'night'    },
]

// ── Darshan timing by season ──
export function getDarshanTiming(date = new Date()) {
  const month = date.getMonth() + 1 // 1–12
  // Summer: April (4) – September (9)
  const isSummer = month >= 4 && month <= 9
  return isSummer
    ? { season: 'ग्रीष्म काल', openHour: 4, openMin: 30, closeHour: 12, closeMin: 30, reopenHour: 16, reopenMin: 0, finalCloseHour: 22, finalCloseMin: 0 }
    : { season: 'शीत काल',    openHour: 5, openMin: 30, closeHour: 13, closeMin: 0,  reopenHour: 17, reopenMin: 0, finalCloseHour: 21, finalCloseMin: 0 }
}

// ── Is temple open right now? ──
export function getTempleStatus(date = new Date()) {
  const t = getDarshanTiming(date)
  const h = date.getHours(), m = date.getMinutes()
  const totalMins = h * 60 + m
  const open1  = t.openHour        * 60 + t.openMin
  const close1 = t.closeHour       * 60 + t.closeMin
  const open2  = t.reopenHour      * 60 + t.reopenMin
  const close2 = t.finalCloseHour  * 60 + t.finalCloseMin

  if (totalMins >= open1 && totalMins < close1) return { open: true,  label: 'अभी खुला',  color: '#25d366', session: 'morning' }
  if (totalMins >= close1 && totalMins < open2) return { open: false, label: 'मध्यान्ह विश्राम', color: '#f57c00', session: 'rest' }
  if (totalMins >= open2 && totalMins < close2) return { open: true,  label: 'अभी खुला',  color: '#25d366', session: 'evening' }
  return { open: false, label: 'अभी बंद', color: '#e53935', session: 'closed' }
}

// ── Next aarti from now ──
export function getNextAarti(date = new Date()) {
  const h = date.getHours(), m = date.getMinutes()
  const totalMins = h * 60 + m

  // Find next aarti today
  for (const a of AARTI_SCHEDULE) {
    const aMin = a.hour * 60 + a.min
    if (aMin > totalMins) {
      const diffMins = aMin - totalMins
      return {
        ...a,
        timeStr: `${String(a.hour).padStart(2,'0')}:${String(a.min).padStart(2,'0')}`,
        isToday: true,
        minutesAway: diffMins,
        displayTime: diffMins < 60
          ? `${diffMins} मिनट में`
          : `${Math.floor(diffMins/60)} घंटे ${diffMins%60} मिनट में`,
      }
    }
  }
  // All done today — return first aarti of tomorrow
  const first = AARTI_SCHEDULE[0]
  return {
    ...first,
    timeStr: `${String(first.hour).padStart(2,'0')}:${String(first.min).padStart(2,'0')}`,
    isToday: false,
    minutesAway: null,
    displayTime: 'कल सुबह',
  }
}

// ── Current aarti (ongoing right now) ──
export function getCurrentAarti(date = new Date()) {
  const h = date.getHours(), m = date.getMinutes()
  const totalMins = h * 60 + m
  for (const a of AARTI_SCHEDULE) {
    const start = a.hour * 60 + a.min
    const end = start + 45 // aarti lasts ~45 min
    if (totalMins >= start && totalMins < end) return a
  }
  return null
}

// ── Ekadashi dates for 2025-2027 ──
// Format: [year, month(1-12), day]
const EKADASHI_DATES = [
  // 2026
  [2026, 1,  11], [2026, 1,  26],
  [2026, 2,  10], [2026, 2,  25],
  [2026, 3,  11], [2026, 3,  26],
  [2026, 4,   9], [2026, 4,  25],
  [2026, 5,   9], [2026, 5,  24],
  [2026, 6,   7], [2026, 6,  23],
  [2026, 7,   7], [2026, 7,  22],
  [2026, 8,   5], [2026, 8,  21],
  [2026, 9,   4], [2026, 9,  19],
  [2026, 10,  3], [2026, 10, 19],
  [2026, 11,  2], [2026, 11, 17],
  [2026, 12,  1], [2026, 12, 17], [2026, 12, 31],
  // 2027
  [2027, 1,  15], [2027, 1,  30],
  [2027, 2,  14], [2027, 2,  28],
  [2027, 3,  16], [2027, 3,  30],
]

const EKADASHI_NAMES = [
  'पुत्रदा एकादशी', 'षटतिला एकादशी', 'जया एकादशी', 'विजया एकादशी',
  'आमलकी एकादशी', 'पापमोचिनी एकादशी', 'कामदा एकादशी', 'वरूथिनी एकादशी',
  'मोहिनी एकादशी', 'अपरा एकादशी', 'निर्जला एकादशी', 'योगिनी एकादशी',
  'देवशयनी एकादशी', 'कामिका एकादशी', 'श्रावण पुत्रदा', 'अजा एकादशी',
  'परिवर्तिनी एकादशी', 'इन्दिरा एकादशी', 'पापांकुशा एकादशी', 'रमा एकादशी',
  'देवउठनी एकादशी', 'उत्पन्ना एकादशी', 'मोक्षदा एकादशी', 'सफला एकादशी',
  'पुत्रदा एकादशी',
]

export function getNextEkadashi(date = new Date()) {
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  for (let i = 0; i < EKADASHI_DATES.length; i++) {
    const [y, mo, d] = EKADASHI_DATES[i]
    const ek = new Date(y, mo - 1, d)
    if (ek >= today) {
      const diffMs   = ek - today
      const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
      return {
        date: ek,
        day: d,
        month: mo,
        year: y,
        name: EKADASHI_NAMES[i % EKADASHI_NAMES.length],
        diffDays,
        dateStr: ek.toLocaleDateString('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
        isToday: diffDays === 0,
        isTomorrow: diffDays === 1,
        countdownLabel: diffDays === 0 ? '🎉 आज एकादशी है!' : diffDays === 1 ? '⏳ कल एकादशी है!' : `${diffDays} दिन बाद`,
      }
    }
  }
  return null
}

// ── Upcoming festivals ──
const FESTIVALS = [
  { name: 'फाल्गुन मेला 2027', date: new Date(2027, 2, 18), endDate: new Date(2027, 2, 20), icon: '🚩', desc: 'एशिया का सबसे बड़ा मेला', highlight: true },
  { name: 'दीपावली',           date: new Date(2026, 9, 20), icon: '🪔', desc: 'दीपों का उत्सव' },
  { name: 'श्याम जयंती',      date: new Date(2026, 8, 15), icon: '👑', desc: 'विशेष दर्शन व श्रृंगार' },
  { name: 'जन्माष्टमी',       date: new Date(2026, 7, 23), icon: '🪈', desc: 'रात्रि 12 बजे विशेष पूजा' },
  { name: 'होली',              date: new Date(2027, 2, 3),  icon: '🌈', desc: 'फूलों की होली' },
]

export function getUpcomingFestivals(date = new Date(), count = 3) {
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  return FESTIVALS
    .filter(f => f.date >= today)
    .sort((a, b) => a.date - b.date)
    .slice(0, count)
    .map(f => {
      const diffMs   = f.date - today
      const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
      return {
        ...f,
        diffDays,
        dateStr: f.date.toLocaleDateString('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
        countdownLabel: diffDays === 0 ? '🎉 आज!' : diffDays === 1 ? '⏳ कल!' : `${diffDays} दिन बाद`,
        isToday: diffDays === 0,
      }
    })
}

// ── Format time helper ──
export function fmt12(hour, min) {
  const suffix = hour < 12 ? 'AM' : 'PM'
  const h = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
  return `${h}:${String(min).padStart(2,'0')} ${suffix}`
}
