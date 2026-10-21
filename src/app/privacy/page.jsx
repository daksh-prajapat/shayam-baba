import { pageMeta, PHONE_DISPLAY } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Privacy Policy | खाटू श्याम जी',
  description: 'खाटू श्याम जी बुकिंग में नाम, फोन और पता कैसे इस्तेमाल होता है। हम बुकिंग डेटा नहीं बेचते।',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <article className="container" style={{ paddingTop: 32, paddingBottom: 64, maxWidth: 760 }}>
      <h1 className="hindi-text" style={{ color: 'var(--secondary)', fontSize: '2rem', marginBottom: 12 }}>
        Privacy Policy
      </h1>
      <p className="hindi-text" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
        यह पेज बताता है कि khatushyamswamani.com पर बुकिंग के समय दी गई जानकारी का उपयोग कैसे होता है।
      </p>
      <h2 className="hindi-text" style={{ fontSize: '1.25rem', margin: '24px 0 8px' }}>कौन सी जानकारी</h2>
      <p className="hindi-text" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        बुकिंग फॉर्म पर नाम, मोबाइल नंबर, ईमेल, शहर, पता, सेवा और तिथि ली जाती है। भुगतान Razorpay के माध्यम से होता है। कार्ड की पूरी जानकारी इस वेबसाइट पर सेव नहीं होती।
      </p>
      <h2 className="hindi-text" style={{ fontSize: '1.25rem', margin: '24px 0 8px' }}>किस काम के लिए</h2>
      <p className="hindi-text" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        यह जानकारी बुकिंग कन्फर्म करने, रसीद भेजने और प्रसाद या भोग की व्यवस्था के लिए इस्तेमाल होती है। हम यह डेटा बेचते नहीं हैं।
      </p>
      <h2 className="hindi-text" style={{ fontSize: '1.25rem', margin: '24px 0 8px' }}>सम्पर्क</h2>
      <p className="hindi-text" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        अपनी जानकारी हटवाने या सुधारने के लिए कॉल या WhatsApp करें: {PHONE_DISPLAY}।
      </p>
    </article>
  )
}
