import { prasadList, getPrasadBySlug } from '@/lib/prasadData'
import PrasadDetailClient from '@/components/prasad/PrasadDetailClient'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return prasadList.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const item = getPrasadBySlug(slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.name} | प्रसाद बुकिंग | खाटू श्याम जी`,
    description: `${item.desc} — ₹${item.price}। Online बुकिंग: 9929975116`,
  }
}

export default async function PrasadDetailPage({ params }) {
  const { slug } = await params
  const item = getPrasadBySlug(slug)
  if (!item) notFound()
  return <PrasadDetailClient item={item} />
}
