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
  title: 'Breteuil Déménagement | Déménageur Toulouse & France entière',
  description:
    'Breteuil Déménagement, déménageur professionnel à Toulouse. Déménagement résidentiel, professionnel, international. Monte-meuble, garde-meuble, emballage. Devis gratuit et sans engagement.',
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
