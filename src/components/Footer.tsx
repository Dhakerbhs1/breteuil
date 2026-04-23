import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

const services = [
  { label: 'Déménagement résidentiel', href: '/services/demenagement-residentiel' },
  { label: 'Déménagement professionnel', href: '/services/demenagement-professionnel' },
  { label: 'Déménagement international', href: '/services/demenagement-international' },
  { label: 'Emballage professionnel', href: '/services/emballage' },
  { label: 'Monte-meuble', href: '/services/monte-meuble' },
  { label: 'Garde-meuble', href: '/services/garde-meuble' },
]

const company = [
  { label: 'Nos formules', href: '/formules' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
  { label: 'Devis gratuit', href: '/devis' },
  { label: 'Payer mon déménagement', href: '/payer' },
]

const legal = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
  { label: 'CGV', href: '/cgv' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo.png"
                alt="Breteuil Déménagement"
                width={160}
                height={45}
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.brandDesc}>
              Déménageur professionnel intervenant partout en France.
              Particuliers et entreprises.
            </p>
            <p className={styles.brandDesc} style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
              📍 Immeuble Atria, 8 Esplanade Compans Caffarelli, 31000 Toulouse
            </p>
          </div>

          {/* Links */}
          <div className={styles.linksGrid}>
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Services</h4>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className={styles.link}>
                  {s.label}
                </Link>
              ))}
            </div>
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Entreprise</h4>
              {company.map((c) => (
                <Link key={c.href} href={c.href} className={styles.link}>
                  {c.label}
                </Link>
              ))}
            </div>
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Légal</h4>
              {legal.map((l) => (
                <Link key={l.href} href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Breteuil Déménagement. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
