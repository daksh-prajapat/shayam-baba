import DarshanClient from '@/components/pages/DarshanClient'
import JsonLd from '@/components/JsonLd'
import { pageMeta, faqJsonLd, darshanFaqs } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'खाटू श्याम जी दर्शन समय 2026 | Darshan Timing Today',
  description: 'Khatu Shyam darshan timing: summer 4:30 AM–10 PM, winter 5:30 AM–9 PM. आरती समय। एकादशी पर 24 घंटे खुला।',
  path: '/darshan-timings',
  keywords: [
    'खाटू श्याम दर्शन समय',
    'Khatu Shyam darshan timing',
    'Khatu Shyam darshan timing today',
    'मंदिर खुलने का समय',
    'आरती समय',
    'aarti time Khatu Shyam',
    'एकादशी दर्शन',
    'Khatu Shyam temple opening time',
  ],
})

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(darshanFaqs)} />
      <DarshanClient />
    </>
  )
}
