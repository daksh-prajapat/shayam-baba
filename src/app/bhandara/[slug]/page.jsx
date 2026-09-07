import { bhandaraList, getBhandaraBySlug } from '@/lib/bhandaraData'
import BhandaraDetailClient from '@/components/bhandara/BhandaraDetailClient'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return bhandaraList.map(b => ({ slug: b.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const item = getBhandaraBySlug(slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.name} | खाटू श्याम भंडारा`,
    description: `${item.desc} — Call: 9929975116`,
  }
}

export default async function BhandaraDetailPage({ params }) {
  const { slug } = await params
  const item = getBhandaraBySlug(slug)
  if (!item) notFound()
  return <BhandaraDetailClient item={item} />
}
