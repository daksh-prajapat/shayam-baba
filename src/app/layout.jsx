import './globals.css'
import ClientLayout from '@/components/ClientLayout'

export const metadata = {
  title: 'खाटू श्याम जी | Khatu Shyam Ji - Prasad Booking, Darshan, Bhajan',
  description: 'खाटू श्याम जी — प्रसाद बुकिंग, स्वामणी भोग, दर्शन समय, भजन आरती। Khatu Shyam Ji Online Prasad Booking. Call: 9929975116',
  keywords: 'Khatu Shyam Ji, खाटू श्याम, prasad booking, swamani bhog, darshan timings, bhajan aarti',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi:ital@0;1&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* suppressHydrationWarning fixes browser-extension-injected attributes like cz-shortcut-listen */}
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
