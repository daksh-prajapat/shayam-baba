export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.khatushyamswamani.com'
export const SITE_NAME = 'खाटू श्याम जी'
export const PHONE_E164 = '+919051858687'
export const PHONE_DISPLAY = '9051858687'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function hours(opens, closes, validFrom, validThrough) {
  return {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: DAYS,
    opens,
    closes,
    validFrom,
    validThrough,
  }
}

export const homeFaqs = [
  {
    q: 'खाटू श्याम जी मंदिर कहाँ स्थित है?',
    a: 'खाटू श्याम जी मंदिर राजस्थान के सीकर जिले के खाटू गाँव में स्थित है। यह जयपुर से लगभग 80–89 किलोमीटर और दिल्ली से करीब 310 किलोमीटर की दूरी पर है।',
  },
  {
    q: 'स्वामणी भोग की ऑनलाइन बुकिंग कैसे करें?',
    a: 'आप हमारी वेबसाइट, WhatsApp (9051858687) या Phone Call के माध्यम से बुकिंग कर सकते हैं। अपना नाम, गोत्र और मनचाही तिथि शेयर करें — हमारी टीम बाकी सब संभाल लेगी।',
  },
  {
    q: 'स्वामणी भोग में क्या-क्या होता है और कीमत क्या है?',
    a: 'स्वामणी भोग में चूरमा, लड्डू, पूड़ी, सब्जी आदि शामिल होते हैं। पैकेज ₹8,100 से शुरू होकर छप्पन भोग ₹31,000 तक उपलब्ध हैं। सभी भोग शुद्ध देसी घी से बनाए जाते हैं।',
  },
  {
    q: 'क्या भोग चढ़ाने के बाद फोटो या वीडियो मिलेगा?',
    a: 'हाँ! स्वामणी या प्रसाद बुकिंग के बाद पूरी पूजा के फोटो और वीडियो आपको WhatsApp पर भेजे जाते हैं — ताकि आप घर बैठे बाबा के दर्शन का आनंद ले सकें।',
  },
  {
    q: 'मंदिर दर्शन का समय क्या है?',
    a: 'ग्रीष्म काल (अप्रैल–सितंबर): 4:30 AM – 10:00 PM। शीत काल (अक्टूबर–मार्च): 5:30 AM – 9:00 PM। एकादशी के दिन 24 घंटे दर्शन उपलब्ध रहता है।',
  },
  {
    q: 'फाल्गुन मेला 2027 कब है?',
    a: 'फाल्गुन मेला 2027 — 9 March 2027 (फाल्गुन शुक्ल षष्ठी) से शुरू होकर पूर्णिमा 21 March 2027 तक चलेगा। यह एशिया का सबसे बड़ा धार्मिक मेला माना जाता है जिसमें करोड़ों भक्त भाग लेते हैं। मेले के दौरान बुकिंग पहले से करें।',
  },
  {
    q: 'खाटू श्याम जी तक कैसे पहुंचें?',
    a: 'जयपुर से सड़क मार्ग से 80–89 km (1.5–2 घंटे)। निकटतम रेलवे स्टेशन रींगस जंक्शन (17 km) है जहाँ से Auto ₹150–200 में पहुंच सकते हैं। RSRTC की बस सेवा भी उपलब्ध है।',
  },
  {
    q: 'क्या प्रसाद घर पर डिलीवरी होती है?',
    a: 'हाँ! भोग चढ़ाने के बाद बाबा का प्रसाद आपके घर तक पहुंचाया जा सकता है। इसके लिए बुकिंग के समय अपना पता और संपर्क विवरण साझा करें।',
  },
]

export const darshanFaqs = [
  { q: 'Khatu Shyam Ji darshan timing क्या है?', a: 'मंदिर सामान्य दिनों में 4:30 AM – 10:00 PM खुला रहता है। एकादशी के दिन मंदिर 24 घंटे खुला रहता है।' },
  { q: 'मंदिर दोपहर में कब बंद रहता है?', a: 'ग्रीष्मकाल में 12:30 PM – 4:00 PM और शीतकाल में 1:00 PM – 5:00 PM मंदिर बंद रहता है।' },
  { q: 'आरती कितने बजे होती है?', a: 'मंगला 4:30 AM, श्रृंगार 7:30 AM, राजभोग 12:00 PM, संध्या 7:30 PM, शयन 9:30 PM।' },
  { q: 'Falgun Mela 2027 कब है?', a: 'Falgun Mela 2027 के मुख्य दिन: 18–20 March 2027। पूरा उत्सव 15–21 March 2027 तक चलेगा।' },
]

export const bhandaraFaqs = [
  { q: 'भंडारे की बुकिंग कैसे करें?', a: 'Call या WhatsApp पर संपर्क करें: 9051858687। हम आपको पूरी जानकारी और Quotation देंगे।' },
  { q: 'भंडारा कहाँ होता है?', a: 'खाटू श्याम जी मंदिर परिसर में या आपके निर्धारित स्थान पर — हम दोनों जगह व्यवस्था करते हैं।' },
  { q: 'Advance कितना देना होता है?', a: 'बुकिंग confirm करने के लिए कुछ Advance आवश्यक है। पूरी राशि कार्यक्रम से पहले।' },
  { q: 'Menu में बदलाव हो सकता है?', a: 'हाँ, आपकी इच्छानुसार Menu customize किया जा सकता है। अधिक जानकारी के लिए संपर्क करें।' },
  { q: 'क्या टेंट की व्यवस्था भी होती है?', a: 'हाँ, टेंट/शामियाना, बर्तन, सफाई — सभी की व्यवस्था हम करते हैं।' },
]

export const publicRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/swamani', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/prasad-puja', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/bhandara', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/darshan-timings', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/booking', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/travel-guide', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hotels', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/dharamshala', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/restaurants', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/festivals', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/ekadashi', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/katha-parichay', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/nishan-mannat', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/gallery', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
]

export function pageMeta({ title, description, path, keywords = [], index = true }) {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'hi_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export function faqJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function serviceJsonLd({ name, description, path, price }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      '@type': 'HinduTemple',
      name: 'खाटू श्याम जी मंदिर',
      telephone: PHONE_E164,
      url: SITE_URL,
    },
    areaServed: { '@type': 'Country', name: 'India' },
  }

  if (typeof price === 'number') {
    data.offers = {
      '@type': 'Offer',
      price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}${path}`,
    }
  }

  return data
}

export const siteGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: ['Khatu Shyam Ji', 'Khatu Dham'],
      inLanguage: 'hi-IN',
      publisher: { '@id': `${SITE_URL}/#temple` },
    },
    {
      '@type': 'HinduTemple',
      '@id': `${SITE_URL}/#temple`,
      name: 'खाटू श्याम जी मंदिर',
      alternateName: ['Khatu Shyam Ji Temple', 'Khatu Dham', 'Khatu Shyam Mandir'],
      url: SITE_URL,
      telephone: PHONE_E164,
      image: `${SITE_URL}/opengraph-image`,
      description: 'खाटू श्याम जी दर्शन, स्वामणी भोग, प्रसाद बुकिंग और भंडारा। Khatu, Sikar, Rajasthan.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Khatu',
        addressLocality: 'Khatu',
        addressRegion: 'Rajasthan',
        postalCode: '332602',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 27.3642,
        longitude: 75.4031,
      },
      hasMap: 'https://www.google.com/maps/search/?api=1&query=Khatu+Shyam+Ji+Temple',
      sameAs: [
        'https://www.facebook.com/khatuwalebabain',
        'https://www.youtube.com/@khatuwalebabain',
        'https://www.instagram.com/khatuwalebabain',
      ],
      openingHoursSpecification: [
        hours('04:30', '12:30', '2026-04-01', '2026-09-30'),
        hours('16:00', '22:00', '2026-04-01', '2026-09-30'),
        hours('05:30', '13:00', '2026-10-01', '2027-03-31'),
        hours('17:00', '21:00', '2026-10-01', '2027-03-31'),
        hours('04:30', '12:30', '2027-04-01', '2027-09-30'),
        hours('16:00', '22:00', '2027-04-01', '2027-09-30'),
      ],
    },
  ],
}
