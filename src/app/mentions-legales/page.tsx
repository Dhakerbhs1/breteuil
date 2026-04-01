import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales de Breteuil Déménagement.',
  alternates: { canonical: 'https://breteuil-demenagement.fr/mentions-legales' },
}

export default function MentionsLegalesPage() {
  return (
    <div className="section" style={{ paddingTop: 'clamp(6rem, 8vw, 8rem)' }}>
      <div className="container container--narrow">
        <h1 style={{ marginBottom: '2rem' }}>Mentions légales</h1>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Éditeur du site</h2>
        <p>
          <strong>Breteuil Déménagement</strong><br />
          [Raison sociale] — SIRET : [Numéro SIRET]<br />
          Siège social : [Adresse complète du Kbis]<br />
          Téléphone : 01 XX XX XX XX<br />
          Email : contact@breteuil-demenagement.fr
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Hébergement</h2>
        <p>
          Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, images, logos) sont la propriété de
          Breteuil Déménagement ou de leurs auteurs respectifs. Toute reproduction est interdite
          sans autorisation préalable.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Données personnelles</h2>
        <p>
          Les données collectées via les formulaires de ce site sont utilisées uniquement
          pour traiter votre demande de devis. Pour plus d&apos;informations, consultez notre{' '}
          <a href="/politique-confidentialite" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
            politique de confidentialité
          </a>.
        </p>
      </div>
    </div>
  )
}
