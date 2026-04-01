import type { Metadata } from 'next'
import {
  Hero,
  Services,
  HowItWorks,
  Formulas,
  TrustBand,
  OurStory,
  FinalCta,
} from '@/components/HomeSections'

export const metadata: Metadata = {
  title: 'Breteuil Déménagement | Déménageur professionnel en France',
  description:
    'Breteuil Déménagement, votre déménageur professionnel. Résidentiel, entreprise, international. Devis gratuit et personnalisé. Intervention partout en France.',
  alternates: { canonical: 'https://breteuil-demenagement.fr' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <Services />
      <HowItWorks />
      <Formulas />
      <OurStory />
      <FinalCta />
    </>
  )
}
