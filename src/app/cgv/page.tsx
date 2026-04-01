import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CGV',
  description: 'Conditions générales de vente de Breteuil Déménagement.',
  alternates: { canonical: 'https://breteuil-demenagement.fr/cgv' },
}

export default function CGVPage() {
  return (
    <div className="section" style={{ paddingTop: 'clamp(6rem, 8vw, 8rem)' }}>
      <div className="container container--narrow">
        <h1 style={{ marginBottom: '2rem' }}>Conditions Générales de Vente</h1>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Article 1 — Objet</h2>
        <p>
          Les présentes conditions générales régissent les prestations de déménagement
          proposées par Breteuil Déménagement.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Article 2 — Devis</h2>
        <p>
          Tout déménagement fait l&apos;objet d&apos;un devis préalable gratuit et sans engagement.
          Le devis détaille les prestations, les conditions et le prix.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Article 3 — Réservation</h2>
        <p>
          La réservation est confirmée après acceptation du devis par le client.
          Nous convenons ensemble du jour d&apos;intervention.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Article 4 — Responsabilité</h2>
        <p>
          Les conditions de responsabilité sont détaillées dans le contrat de déménagement
          signé entre les parties. Pour toute question, contactez-nous.
        </p>

        <p style={{ marginTop: '3rem', fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
          Pour toute question relative à nos CGV, contactez-nous à contact@breteuil-demenagement.fr.
        </p>
      </div>
    </div>
  )
}
