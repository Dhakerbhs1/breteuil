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
    default: 'Breteuil Déménagement | Déménageur professionnel en France',
    template: '%s | Breteuil Déménagement',
  },
  description:
    'Breteuil Déménagement, votre déménageur professionnel. Résidentiel, entreprise, international. Devis gratuit et personnalisé. Intervention partout en France.',
  metadataBase: new URL('https://breteuil-demenagement.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Breteuil Déménagement',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://breteuil-demenagement.fr',
  },
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
      'Déménageur professionnel intervenant partout en France. Services résidentiels, professionnels et internationaux.',
    url: 'https://breteuil-demenagement.fr',
    telephone: '+33 1 XX XX XX XX',
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    serviceType: [
      'Déménagement résidentiel',
      'Déménagement professionnel',
      'Déménagement international',
      'Monte-meuble',
      'Garde-meuble',
      'Emballage professionnel',
    ],
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
