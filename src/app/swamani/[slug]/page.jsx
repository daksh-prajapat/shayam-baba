import { swamaniList, getSwamaniBySlug } from '@/lib/swamaniData'
import SwamaniDetailClient from '@/components/swamani/SwamaniDetailClient'
import JsonLd from '@/components/JsonLd'
import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/seo'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return swamaniList.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const item = getSwamaniBySlug(slug)
  if (!item) return { title: 'पेज नहीं मिला', robots: { index: false, follow: false } }
  return pageMeta({
    title: `${item.name} स्वामणी | ₹${item.price.toLocaleString('en-IN')} — खाटू श्याम जी`,
    description: `${item.nameEn} swamani bhog ₹${item.price.toLocaleString('en-IN')}. ${item.desc} Online booking at Khatu Shyam Ji.`,
    path: `/swamani/${item.slug}`,
    keywords: [item.name, item.nameEn, 'स्वामणी भोग', 'swamani bhog booking', 'swamani bhog price', 'खाटू श्याम जी', 'Khatu Shyam Ji'],
  })
}

export default async function SwamaniDetailPage({ params }) {
  const { slug } = await params
  const item = getSwamaniBySlug(slug)
  if (!item) notFound()
  const path = `/swamani/${item.slug}`
  return (
    <>
      <JsonLd data={serviceJsonLd({ name: item.name, description: item.fullDesc, path, price: item.price })} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'होम', path: '/' },
        { name: 'स्वामणी भोग', path: '/swamani' },
        { name: item.name, path },
      ])} />
      <SwamaniDetailClient item={item} />
    </>
  )
}
