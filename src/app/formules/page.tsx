import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './Formules.module.css'

export const metadata: Metadata = {
  title: 'Formules Déménagement Économique, Confort, Luxe',
  description: '3 formules de déménagement adaptées à vos besoins : Économique, Confort et Luxe. Devis gratuit et sans engagement. Breteuil Déménagement Toulouse.',
  alternates: { canonical: 'https://breteuil-demenagement.fr/formules' },
}

const formules = [
  {
    name: 'Économique',
    tag: 'Essentiel',
    items: [
      'Housse de protection pour matelas',
      'Protection du mobilier sous housses et couvertures adaptées',
      'Chargement et transport en camion',
      'Remise en place du mobilier dans chaque pièce sans remontage',
    ],
  },
  {
    name: 'Confort',
    tag: 'Populaire',
    featured: true,
    items: [
      'Livraison de cartons et adhésifs',
      'Emballage et déballage des objets fragiles',
      'Démontage et remontage du mobilier',
      'Mise en penderie des vêtements sur cintres',
      'Housse de protection pour matelas',
      'Protection du mobilier sous housses et couvertures adaptées',
      'Chargement et transport en camion',
      'Remise en place du mobilier dans chaque pièce',
    ],
  },
  {
    name: 'Luxe',
    tag: 'Tout inclus',
    items: [
      'Livraison de cartons et adhésifs',
      'Emballage et déballage des objets fragiles',
      'Emballage intégral des objets non fragiles',
      'Démontage et remontage du mobilier',
      'Mise en penderie des vêtements sur cintres',
      'Housse de protection pour matelas',
      'Protection du mobilier sous housses et couvertures adaptées',
      'Chargement et transport en camion',
      'Remise en place du mobilier dans chaque pièce',
    ],
  },
]

export default function FormulesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.label}>Nos formules</span>
          <h1>Choisissez la formule<br /><em>qui vous correspond</em></h1>
          <p>Trois niveaux de service pour s&apos;adapter à vos besoins. Tarif toujours sur devis gratuit.</p>
        </div>
      </section>

      <section className={`section ${styles.formules}`}>
        <div className="container">
          <div className={styles.grid}>
            {formules.map((f) => (
              <div key={f.name} className={`${styles.card} ${f.featured ? styles.cardFeatured : ''}`}>
                {f.featured && <span className={styles.badge}>Le plus demandé</span>}
                <div className={styles.cardHeader}>
                  <span className={styles.tag}>{f.tag}</span>
                  <h3>{f.name}</h3>
                  <p className={styles.price}>Sur devis gratuit</p>
                </div>
                <ul className={styles.list}>
                  {f.items.map((item, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/devis" className={`btn ${f.featured ? 'btn--primary' : 'btn--outline'}`} style={{ width: '100%' }}>
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
