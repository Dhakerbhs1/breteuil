import type { Metadata } from 'next'
import DevisForm from './DevisForm'

export const metadata: Metadata = {
  title: 'Devis Gratuit',
  description: 'Demandez un devis gratuit et sans engagement pour votre déménagement. Réponse rapide. Breteuil Déménagement.',
  alternates: { canonical: 'https://breteuil-demenagement.fr/devis' },
}

export default function DevisPage() {
  return <DevisForm />
}
