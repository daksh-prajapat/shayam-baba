'use client'
import Link from 'next/link'
export default function Page() {
  return (<div style={{padding:'120px 20px',textAlign:'center',minHeight:'60vh'}}>
    <h1 style={{fontFamily:'var(--font-hindi)',color:'var(--secondary)',fontSize:'2rem',marginBottom:16}}>जल्द आ रहा है</h1>
    <p style={{fontFamily:'var(--font-hindi)',color:'var(--text-muted)'}}>यह पेज जल्द ही उपलब्ध होगा।</p>
    <Link href='/' style={{marginTop:24,display:'inline-block',color:'var(--secondary)'}}>← होम पर जाएं</Link>
  </div>)
}

