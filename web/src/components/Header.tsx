'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

const navLinks = [
  { label: 'Formules', href: '/formules' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { label: 'Déménagement résidentiel', href: '/services/demenagement-residentiel' },
  { label: 'Déménagement professionnel', href: '/services/demenagement-professionnel' },
  { label: 'Déménagement international', href: '/services/demenagement-international' },
  { label: 'Emballage professionnel', href: '/services/emballage' },
  { label: 'Monte-meuble', href: '/services/monte-meuble' },
  { label: 'Garde-meuble', href: '/services/garde-meuble' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo.png"
            alt="Breteuil Déménagement"
            width={160}
            height={42}
            className={styles.logoImg}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <div
            className={styles.navItem}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={styles.navLink} aria-expanded={servicesOpen} id="services-menu-btn">
              Services
              <svg className={`${styles.chevron} ${servicesOpen ? styles.chevronOpen : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {servicesOpen && (
              <div className={styles.dropdown}>
                {serviceLinks.map((s) => (
                  <Link key={s.href} href={s.href} className={styles.dropdownLink}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/devis" className={`btn btn--accent ${styles.ctaBtn}`}>
          Devis gratuit
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          id="mobile-menu-btn"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Panel */}
      {mobileOpen && (
        <div className={styles.mobilePanel}>
          <nav className={styles.mobileNav}>
            <p className={styles.mobileLabel}>Services</p>
            {serviceLinks.map((s) => (
              <Link key={s.href} href={s.href} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                {s.label}
              </Link>
            ))}
            <div className={styles.mobileDivider} />
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/devis" className="btn btn--accent btn--large" onClick={() => setMobileOpen(false)} style={{ marginTop: '1.5rem', width: '100%' }}>
              Demander un devis gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
