import { swamaniList, getSwamaniBySlug } from '@/lib/swamaniData'
import SwamaniDetailClient from '@/components/swamani/SwamaniDetailClient'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return swamaniList.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const item = getSwamaniBySlug(slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.name} | स्वामणी भोग | खाटू श्याम जी`,
    description: `${item.desc} — ₹${item.price.toLocaleString()}। Online बुकिंग: 9929975116`,
  }
}

export default async function SwamaniDetailPage({ params }) {
  const { slug } = await params
  const item = getSwamaniBySlug(slug)
  if (!item) notFound()
  return <SwamaniDetailClient item={item} />
}
