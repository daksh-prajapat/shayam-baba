import { ImageResponse } from 'next/og'

export const alt = 'Khatu Shyam Ji — Prasad booking, Swamani bhog, darshan timings'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#6B0000',
          color: '#FFFFFF',
          padding: '72px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#DAA520', letterSpacing: 2 }}>
          KHATU DHAM · SIKAR, RAJASTHAN
        </div>
        <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, marginTop: 18, lineHeight: 1.05 }}>
          Khatu Shyam Ji
        </div>
        <div style={{ display: 'flex', fontSize: 34, marginTop: 28, color: '#F6E7C1' }}>
          Prasad booking · Swamani bhog · Darshan timings
        </div>
        <div style={{ display: 'flex', fontSize: 26, marginTop: 36, color: '#DAA520' }}>
          Call / WhatsApp 9051858687
        </div>
      </div>
    ),
    { ...size }
  )
}
