import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#6B0000',
          color: '#DAA520',
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        KS
      </div>
    ),
    { ...size }
  )
}
