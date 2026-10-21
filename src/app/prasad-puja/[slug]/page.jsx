import { prasadList, getPrasadBySlug } from '@/lib/prasadData'
import PrasadDetailClient from '@/components/prasad/PrasadDetailClient'
import JsonLd from '@/components/JsonLd'
import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/seo'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return prasadList.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const item = getPrasadBySlug(slug)
  if (!item) return { title: 'पेज नहीं मिला', robots: { index: false, follow: false } }
  return pageMeta({
    title: `${item.name} प्रसाद | ₹${item.price.toLocaleString('en-IN')} — खाटू श्याम जी`,
    description: `${item.nameEn} prasad ₹${item.price.toLocaleString('en-IN')}. ${item.desc} Khatu Shyam prasad booking online.`,
    path: `/prasad-puja/${item.slug}`,
    keywords: [item.name, item.nameEn, 'प्रसाद बुकिंग', 'prasad booking', 'Khatu Shyam prasad', 'खाटू श्याम जी'],
  })
}

export default async function PrasadDetailPage({ params }) {
  const { slug } = await params
  const item = getPrasadBySlug(slug)
  if (!item) notFound()
  const path = `/prasad-puja/${item.slug}`
  return (
    <>
      <JsonLd data={serviceJsonLd({ name: item.name, description: item.fullDesc, path, price: item.price })} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'होम', path: '/' },
        { name: 'प्रसाद बुकिंग', path: '/prasad-puja' },
        { name: item.name, path },
      ])} />
      <PrasadDetailClient item={item} />
    </>
  )
}
