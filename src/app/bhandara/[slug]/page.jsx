import { bhandaraList, getBhandaraBySlug } from '@/lib/bhandaraData'
import BhandaraDetailClient from '@/components/bhandara/BhandaraDetailClient'
import JsonLd from '@/components/JsonLd'
import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/seo'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return bhandaraList.map(b => ({ slug: b.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const item = getBhandaraBySlug(slug)
  if (!item) return { title: 'पेज नहीं मिला', robots: { index: false, follow: false } }
  return pageMeta({
    title: `${item.name} | Khatu Shyam Bhandara`,
    description: `${item.nameEn}. ${item.desc} Bhandara booking: call 9051858687.`,
    path: `/bhandara/${item.slug}`,
    keywords: [item.name, item.nameEn, 'भंडारा बुकिंग', 'bhandara booking', 'Khatu Shyam bhandara', 'खाटू श्याम जी'],
  })
}

export default async function BhandaraDetailPage({ params }) {
  const { slug } = await params
  const item = getBhandaraBySlug(slug)
  if (!item) notFound()
  const path = `/bhandara/${item.slug}`
  return (
    <>
      <JsonLd data={serviceJsonLd({ name: item.name, description: item.fullDesc, path })} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'होम', path: '/' },
        { name: 'विशाल भंडारा', path: '/bhandara' },
        { name: item.name, path },
      ])} />
      <BhandaraDetailClient item={item} />
    </>
  )
}
