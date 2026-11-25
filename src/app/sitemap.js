import { SITE_URL, publicRoutes } from '@/lib/seo'
import { swamaniList } from '@/lib/swamaniData'
import { prasadList } from '@/lib/prasadData'
import { bhandaraList } from '@/lib/bhandaraData'

export default function sitemap() {
  const now = new Date()

  const staticEntries = publicRoutes.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const offerings = [
    ...swamaniList.map((item) => ({
      url: `${SITE_URL}/swamani/${item.slug}`,
      priority: 0.8,
    })),
    ...prasadList.map((item) => ({
      url: `${SITE_URL}/prasad-puja/${item.slug}`,
      priority: 0.8,
    })),
    ...bhandaraList.map((item) => ({
      url: `${SITE_URL}/bhandara/${item.slug}`,
      priority: 0.7,
    })),
  ].map((item) => ({
    ...item,
    lastModified: now,
    changeFrequency: 'monthly',
  }))

  return [...staticEntries, ...offerings]
}
