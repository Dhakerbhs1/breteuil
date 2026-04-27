import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileStickyBar from '@/components/MobileStickyBar'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Breteuil Déménagement | Déménageur professionnel partout en France',
    template: '%s | Breteuil Déménagement',
  },
  description:
    'Breteuil Déménagement : déménageur professionnel à Toulouse et partout en France. Déménagement résidentiel, professionnel, international, monte-meuble, garde-meuble. Devis gratuit.',
  metadataBase: new URL('https://breteuil-demenagement.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Breteuil Déménagement',
    description: 'Déménageur professionnel à Toulouse. Résidentiel, entreprise, international. Devis gratuit et sans engagement.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://breteuil-demenagement.fr',
  },
  keywords: ['déménagement', 'déménageur', 'Toulouse', 'France', 'devis gratuit', 'déménagement professionnel', 'déménagement international', 'monte-meuble', 'garde-meuble', 'emballage', 'Breteuil Déménagement'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Breteuil Déménagement',
    description:
      'Déménageur professionnel à Toulouse intervenant partout en France. Déménagement résidentiel, professionnel, international, monte-meuble, garde-meuble et emballage.',
    url: 'https://breteuil-demenagement.fr',
    telephone: '-',
    image: 'https://breteuil-demenagement.fr/logo.png',
    logo: 'https://breteuil-demenagement.fr/logo.png',
    priceRange: 'Sur devis',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Immeuble Atria, 8 Esplanade Compans Caffarelli',
      addressLocality: 'Toulouse',
      postalCode: '31000',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6112,
      longitude: 1.4340,
    },
    areaServed: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'City', name: 'Toulouse' },
    ],
    serviceType: [
      'Déménagement résidentiel',
      'Déménagement professionnel',
      'Déménagement international',
      'Monte-meuble',
      'Garde-meuble',
      'Emballage professionnel',
    ],
    sameAs: [],
  }

  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  )
}
