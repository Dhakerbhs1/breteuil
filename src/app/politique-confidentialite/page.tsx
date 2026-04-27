import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité de Breteuil Déménagement – Protection des données personnelles.',
  alternates: { canonical: 'https://breteuil-demenagement.fr/politique-confidentialite' },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="section" style={{ paddingTop: 'clamp(6rem, 8vw, 8rem)' }}>
      <div className="container container--narrow">
        <h1 style={{ marginBottom: '2rem' }}>Politique de Confidentialité</h1>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données personnelles est :<br /><br />
          <strong>DIDAY SAS</strong><br />
          Siège social : 20 Quai Duguay Trouin 35000 Rennes, France<br />
          SIRET : 851 885 178 00067<br />
          Email : contact@breteuil-demenagement.fr<br />
          Téléphone : -
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Données collectées</h2>
        <p>
          Dans le cadre de l&apos;utilisation du site breteuil-demenagement.fr, nous sommes susceptibles de
          collecter les données personnelles suivantes :
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Adresse postale (adresses de départ et d&apos;arrivée pour les demandes de devis)</li>
          <li>Informations relatives à votre déménagement (volume, date souhaitée, etc.)</li>
        </ul>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Finalité du traitement</h2>
        <p>Les données collectées via les formulaires du site sont utilisées exclusivement pour :</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Traiter vos demandes de devis</li>
          <li>Gérer vos commandes de services de déménagement</li>
          <li>Vous contacter concernant nos prestations</li>
          <li>Améliorer la qualité de nos services</li>
        </ul>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>4. Destinataires des données</h2>
        <p>
          Vos données personnelles sont destinées aux services internes de Breteuil Déménagement.
          Elles ne sont jamais vendues ou louées à des tiers.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>5. Durée de conservation</h2>
        <p>
          Vos données sont conservées pendant la durée nécessaire à l&apos;accomplissement des finalités
          mentionnées ci-dessus, conformément aux obligations légales en vigueur.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>6. Vos droits</h2>
        <p>
          Conformément à la loi n°78-17 du 6 janvier 1978 modifiée et au Règlement (UE) 2016/679 (RGPD),
          vous disposez des droits suivants :
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li><strong>Droit d&apos;accès</strong> : obtenir la confirmation que des données vous concernant sont traitées</li>
          <li><strong>Droit de rectification</strong> : demander la correction de données inexactes</li>
          <li><strong>Droit d&apos;effacement</strong> : demander la suppression de vos données</li>
          <li><strong>Droit de limitation</strong> : demander la limitation du traitement</li>
          <li><strong>Droit de portabilité</strong> : récupérer vos données dans un format structuré</li>
          <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
        </ul>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>7. Exercice de vos droits</h2>
        <p>Pour exercer vos droits, vous pouvez nous contacter :</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Par email : contact@breteuil-demenagement.fr</li>
          <li>Par courrier : DIDAY SAS – 20 Quai Duguay Trouin 35000 Rennes, France</li>
        </ul>


        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>8. Cookies</h2>
        <p>
          Ce site utilise des cookies techniques nécessaires à son bon fonctionnement.
          Ces cookies ne collectent aucune donnée personnelle et ne peuvent pas être désactivés.
          Aucun cookie publicitaire ou de tracking n&apos;est utilisé.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>9. Hébergeur</h2>
        <p>
          OVHcloud, 2 rue Kellermann, 59100 Roubaix, France.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>10. Modifications</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
          Les modifications entreront en vigueur dès leur publication sur le site.
        </p>
      </div>
    </div>
  )
}
