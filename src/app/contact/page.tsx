import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Breteuil Déménagement pour toute question ou demande de devis. Réponse rapide.',
  alternates: { canonical: 'https://breteuil-demenagement.fr/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section style={{
        position: 'relative', minHeight: '40vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', background: 'var(--color-charcoal)'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(170deg, rgba(28,28,30,0.9) 0%, rgba(196,119,91,0.1) 100%)'
        }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '6rem 1.5rem 3rem' }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600,
            letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)',
            display: 'block', marginBottom: '1rem'
          }}>Contact</span>
          <h1 style={{ color: 'var(--color-cream)', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Parlons de votre <em style={{ fontStyle: 'italic', color: 'var(--color-terracotta-light)' }}>projet</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>📞</span>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Téléphone</h3>
              <a href="tel:+33100000000" style={{ color: 'var(--color-primary)', fontWeight: 500, fontSize: '0.9rem' }}>01 XX XX XX XX</a>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>✉️</span>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Email</h3>
              <a href="mailto:contact@breteuil-demenagement.fr" style={{ color: 'var(--color-primary)', fontWeight: 500, fontSize: '0.9rem' }}>contact@breteuil-demenagement.fr</a>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>📍</span>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Adresse</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Immeuble Atria, 8 Esplanade Compans Caffarelli, 31000 Toulouse</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Pour une estimation précise, nous vous recommandons de remplir
              notre formulaire de devis. Un conseiller vous rappellera dans les plus brefs délais.
            </p>
            <Link href="/devis" className="btn btn--primary btn--large">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
