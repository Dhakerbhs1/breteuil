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

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Éditeur du site</h2>
        <p>
          <strong>Breteuil Déménagement</strong><br />
          Raison sociale : DIDAY SAS<br />
          Siège social : 20 Quai Duguay Trouin 35000 Rennes, France<br />
          SIRET : 851 885 178 00067<br />
          Capital social : 1 752 601,00 €<br />
          Numéro TVA intracommunautaire : FR 38851885178<br />
          Téléphone : -<br />
          Email : contact@breteuil-demenagement.fr
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Hébergeur du site</h2>
        <p>
          Nom : OVHcloud<br />
          Adresse : 2 rue Kellermann, 59100 Roubaix, France<br />
          Site web : <a href="https://www.ovhcloud.com" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>ovhcloud.com</a>
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) est protégé
          par le droit d&apos;auteur et le droit de la propriété intellectuelle. Toute reproduction, représentation,
          modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen
          ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Breteuil Déménagement.
        </p>
        <p>
          Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera
          considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des
          articles L.335-2 et suivants du Code de Propriété Intellectuelle.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>4. Protection des données personnelles</h2>
        <p>
          Conformément à la loi n°78-17 du 6 janvier 1978 modifiée relative à l&apos;informatique, aux fichiers
          et aux libertés, et au Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016
          (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, de
          portabilité et d&apos;opposition aux données personnelles vous concernant.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Responsable du traitement</h3>
        <p>DIDAY SAS, représentée par son gérant.</p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Finalité du traitement</h3>
        <p>Les données collectées via les formulaires du site sont utilisées exclusivement pour :</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Traiter vos demandes de devis</li>
          <li>Gérer vos commandes de services de déménagement</li>
          <li>Vous contacter concernant nos prestations</li>
          <li>Améliorer la qualité de nos services</li>
        </ul>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Destinataires des données</h3>
        <p>
          Vos données personnelles sont destinées aux services internes de Breteuil Déménagement.
          Elles ne sont jamais vendues ou louées à des tiers.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Durée de conservation</h3>
        <p>
          Vos données sont conservées pendant la durée nécessaire à l&apos;accomplissement des finalités
          mentionnées ci-dessus, conformément aux obligations légales en vigueur.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Exercice de vos droits</h3>
        <p>Pour exercer vos droits, vous pouvez nous contacter :</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Par email : contact@breteuil-demenagement.fr</li>
          <li>Par courrier : 20 Quai Duguay Trouin 35000 Rennes, France</li>
        </ul>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>5. Cookies</h2>
        <p>
          Ce site utilise des cookies techniques nécessaires à son bon fonctionnement.
          Ces cookies ne collectent aucune donnée personnelle et ne peuvent pas être désactivés.
          Aucun cookie publicitaire ou de tracking n&apos;est utilisé.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>6. Responsabilité</h2>
        <p>
          Breteuil Déménagement s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
          informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et
          sans préavis, le contenu.
        </p>
        <p>
          Toutefois, Breteuil Déménagement ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité
          des informations mises à disposition sur ce site. En conséquence, elle décline toute responsabilité
          pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>7. Liens hypertextes</h2>
        <p>
          Le site peut contenir des liens hypertextes vers d&apos;autres sites. Breteuil Déménagement ne contrôle
          pas ces sites et décline toute responsabilité quant à leur contenu.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>8. Droit applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l&apos;utilisation
          de ce site sera soumis à la compétence exclusive des tribunaux français.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>9. Contact</h2>
        <p>
          Pour toute question concernant ces mentions légales, vous pouvez nous contacter :<br /><br />
          <strong>Breteuil Déménagement</strong><br />
          20 Quai Duguay Trouin 35000 Rennes, France<br />
          Tél : -<br />
          Email : contact@breteuil-demenagement.fr<br />
          Du lundi au vendredi : 8h - 19h
        </p>
      </div>
    </div>
  )
}
