import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'À Propos de Breteuil Déménagement',
  description: 'Découvrez Breteuil Déménagement, société de déménagement professionnelle à Toulouse. Équipe qualifiée, interlocuteur dédié, intervention partout en France et à l\u2019international.',
  alternates: { canonical: 'https://breteuil-demenagement.fr/a-propos' },
}

export default function AProposPage() {
  return (
    <>
      <section style={{
        position: 'relative', minHeight: '45vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', background: 'var(--color-charcoal)', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(170deg, rgba(28,28,30,0.9) 0%, rgba(196,119,91,0.1) 100%)'
        }} />
        <div style={{
          position: 'relative', zIndex: 2, textAlign: 'center',
          padding: '6rem 1.5rem 3rem', maxWidth: '640px'
        }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600,
            letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)',
            display: 'block', marginBottom: '1rem'
          }}>À propos</span>
          <h1 style={{ color: 'var(--color-cream)', fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            Une équipe<br /><em style={{ fontStyle: 'italic', color: 'var(--color-terracotta-light)' }}>à votre service</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'var(--color-text-muted)' }}>
            Breteuil Déménagement est une société de déménagement professionnelle
            intervenant partout en France. Nous accompagnons aussi bien les particuliers
            que les entreprises dans leurs projets de déménagement.
          </p>
          <hr className="divider divider--center" />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Interlocuteur unique', desc: 'Un seul contact vous accompagne de la demande de devis jusqu\'à la fin de votre déménagement.', icon: '◎' },
              { title: 'Équipe professionnelle', desc: 'Professionnels qualifiés et formés, véhicules adaptés, matériel professionnel.', icon: '◉' },
              { title: 'Partout en France', desc: 'Interventions locales, nationales et internationales selon vos besoins.', icon: '◇' },
              { title: 'Devis clair', desc: 'Proposition détaillée et sans engagement, adaptée à votre situation.', icon: '◈' },
            ].map((v, i) => (
              <div key={i} style={{
                padding: '2rem', background: 'var(--color-white)', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)', transition: 'all 0.3s ease'
              }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem' }}>{v.icon}</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-text-muted)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container container--narrow">
          <h2 style={{ color: 'var(--color-cream)' }}>
            Envie d&apos;en savoir plus ?
          </h2>
          <p style={{ margin: '1rem auto 2rem', maxWidth: '420px' }}>
            Contactez-nous pour discuter de votre projet ou demandez directement un devis gratuit.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/devis" className="btn btn--primary btn--large">Demander un devis</Link>
            <Link href="/contact" className="btn btn--ghost btn--large">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  )
}
