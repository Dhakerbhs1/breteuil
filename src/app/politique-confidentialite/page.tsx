import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité de Breteuil Déménagement.',
  alternates: { canonical: 'https://breteuil-demenagement.fr/politique-confidentialite' },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="section" style={{ paddingTop: 'clamp(6rem, 8vw, 8rem)' }}>
      <div className="container container--narrow">
        <h1 style={{ marginBottom: '2rem' }}>Politique de confidentialité</h1>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Collecte des données</h2>
        <p>
          Les données personnelles collectées sur ce site (nom, email, téléphone, adresses)
          sont recueillies uniquement dans le cadre d&apos;une demande de devis ou de contact.
          Elles ne sont ni vendues, ni cédées à des tiers.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Utilisation des données</h2>
        <p>
          Vos données sont utilisées pour :<br />
          — Traiter votre demande de devis<br />
          — Vous recontacter dans le cadre de votre projet de déménagement<br />
          — Améliorer notre service
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Cookies</h2>
        <p>
          Ce site n&apos;utilise pas de cookies de tracking ou d&apos;analyse. Seuls les cookies
          strictement nécessaires au fonctionnement du site sont utilisés.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
          de vos données. Pour exercer ces droits, contactez-nous à :
          contact@breteuil-demenagement.fr
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Hébergeur</h2>
        <p>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
        </p>
      </div>
    </div>
  )
}
