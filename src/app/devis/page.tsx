import type { Metadata } from 'next'
import DevisForm from './DevisForm'

export const metadata: Metadata = {
  title: 'Devis Déménagement Gratuit',
  description: 'Demandez votre devis déménagement gratuit et sans engagement. Déménagement résidentiel, professionnel, international. Breteuil Déménagement Toulouse.',
  alternates: { canonical: 'https://breteuil-demenagement.fr/devis' },
}

export default function DevisPage() {
  return <DevisForm />
}
