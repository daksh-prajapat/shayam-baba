import AdminDashboard from '@/components/admin/AdminDashboard'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Admin | खाटू श्याम जी',
  description: 'Owner booking dashboard.',
  path: '/admin',
  index: false,
})

export default function AdminPage() {
  return <AdminDashboard />
}
