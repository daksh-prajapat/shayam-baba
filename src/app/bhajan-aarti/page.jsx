import Link from 'next/link'

export const metadata = { title: 'भजन आरती | खाटू श्याम जी' }

export default function Page() {
  return (
    <div style={{ padding: '120px 20px', textAlign: 'center', minHeight: '60vh' }}>
      <div style={{ fontSize: '3rem', marginBottom: 16 }}>🙏</div>
      <h1 style={{ fontFamily: 'var(--font-hindi)', color: 'var(--secondary)', fontSize: '1.8rem', marginBottom: 12 }}>
        भजन, आरती & चालीसा
      </h1>
      <p style={{ fontFamily: 'var(--font-hindi)', color: 'var(--text-muted)', marginBottom: 24, fontSize: '1rem' }}>
        श्याम चालीसा और बाबा की कथा पढ़ें
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/katha-parichay" style={{ background: 'var(--secondary)', color: '#000', padding: '12px 24px', borderRadius: 10, fontFamily: 'var(--font-hindi)', fontWeight: 700, textDecoration: 'none' }}>
          📖 श्याम चालीसा & कथा पढ़ें
        </Link>
        <Link href="/" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 24px', borderRadius: 10, fontFamily: 'var(--font-hindi)', textDecoration: 'none' }}>
          ← होम पर जाएं
        </Link>
      </div>
    </div>
  )
}
