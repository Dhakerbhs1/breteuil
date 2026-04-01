'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './Home.module.css'

/* ═══════════════════════════════════════════════════════
   DESIGN PHILOSOPHY — BOLD GEOMETRIC
   
   vs Briand (editorial serif splitscreen):
   - NO splitscreen hero → full-width centered gradient hero
   - NO serif fonts → geometric sans-serif (Space Grotesk)
   - NO timeline layout → icon grid cards
   - NO tab formulas → horizontal scroll 3 cards
   - NO editorial badges → pill tags
   - NO cream/beige backgrounds → clean white/gray
   ═══════════════════════════════════════════════════════ */

/* ── Arrow icon ── */
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

/* ═══════════════════════════════════════════════════════
   SECTION 1 — HERO (full-width centered, NOT splitscreen)
   Gradient background, large centered text + 2 CTAs
   Completely different from Briand's left/right split
   ═══════════════════════════════════════════════════════ */
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGradient} />
      <div className={styles.heroContent}>
        <div className={styles.heroPill}>
          <span className={styles.heroPillDot} />
          Devis gratuit · Réponse rapide
        </div>
        <h1 className={styles.heroTitle}>
          Déménagez<br />
          en toute simplicité<span className={styles.heroDot}>.</span>
        </h1>
        <p className={styles.heroSub}>
          Breteuil Déménagement prend en charge votre projet de A&nbsp;à&nbsp;Z.
          Particuliers et professionnels, partout en France.
        </p>
        <div className={styles.heroCtas}>
          <Link href="/devis" className={styles.heroCtaPrimary} id="hero-cta">
            Obtenir mon devis gratuit
            <Arrow />
          </Link>
          <a href="tel:+33100000000" className={styles.heroCtaSecondary}>
            Nous appeler
          </a>
        </div>
      </div>
      {/* Floating stats bar */}
      <div className={styles.heroStats}>
        <div className={styles.heroStat}>
          <strong>France entière</strong>
          <span>Zone d&apos;intervention</span>
        </div>
        <div className={styles.heroStatDivider} />
        <div className={styles.heroStat}>
          <strong>3 formules</strong>
          <span>Éco · Confort · Luxe</span>
        </div>
        <div className={styles.heroStatDivider} />
        <div className={styles.heroStat}>
          <strong>Sans engagement</strong>
          <span>Devis personnalisé</span>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   SECTION 2 — SERVICES (icon grid 3x2, NOT timeline)
   Simple card grid with icons, not numbered list
   ═══════════════════════════════════════════════════════ */
const services = [
  { icon: '🏠', title: 'Résidentiel', desc: 'Maison, appartement, studio — du chargement à l\'installation dans votre nouveau logement.', href: '/services/demenagement-residentiel' },
  { icon: '🏢', title: 'Professionnel', desc: 'Bureau, commerce, entrepôt. Organisation logistique adaptée pour minimiser l\'impact sur votre activité.', href: '/services/demenagement-professionnel' },
  { icon: '✈️', title: 'International', desc: 'Europe et au-delà. Logistique complète et accompagnement personnalisé de porte à porte.', href: '/services/demenagement-international' },
  { icon: '📦', title: 'Emballage', desc: 'Emballage professionnel disponible selon la formule choisie. Protection adaptée à chaque bien.', href: '/services/emballage' },
  { icon: '🏗️', title: 'Monte-meuble', desc: 'Accès difficile ? Montée ou descente par la façade en toute sécurité.', href: '/services/monte-meuble' },
  { icon: '🔐', title: 'Garde-meuble', desc: 'Stockage sécurisé, location flexible à la semaine ou au mois, prise en charge complète.', href: '/services/garde-meuble' },
]

export function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.servicesInner}>
        <div className={styles.servicesHeader}>
          <span className="section-label">Nos services</span>
          <h2>Tout ce qu&apos;il faut pour<br />votre déménagement<span className={styles.dot}>.</span></h2>
          <p className={styles.servicesSubtext}>Chaque prestation est adaptée à votre situation. Départ, arrivée, volume, accès — on s&apos;adapte.</p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((svc) => (
            <Link key={svc.href} href={svc.href} className={styles.serviceCard}>
              <span className={styles.serviceIcon}>{svc.icon}</span>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <span className={styles.serviceLink}>En savoir plus <Arrow /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   SECTION 3 — COMMENT ÇA MARCHE (horizontal 3 steps, NOT timeline)
   3 numbered cards side by side, not vertical timeline
   ═══════════════════════════════════════════════════════ */
export function HowItWorks() {
  return (
    <section className={styles.how}>
      <div className={styles.howInner}>
        <div className={styles.howHeader}>
          <span className="section-label">Comment ça marche</span>
          <h2>Simple, rapide, efficace<span className={styles.dot}>.</span></h2>
        </div>
        <div className={styles.howCards}>
          {[
            { num: '1', title: 'Décrivez votre projet', text: 'Remplissez le formulaire en ligne ou appelez-nous. Indiquez vos villes de départ et d\'arrivée, votre volume et vos besoins spécifiques.' },
            { num: '2', title: 'Recevez votre devis', text: 'Un conseiller dédié étudie votre demande et vous propose un devis détaillé, clair et personnalisé. Sans engagement.' },
            { num: '3', title: 'On s\'occupe du reste', text: 'Jour J : notre équipe arrive, protège, charge, transporte et installe vos biens dans votre nouveau chez-vous.' },
          ].map((step) => (
            <HowCard key={step.num} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HowCard({ step }: { step: { num: string; title: string; text: string } }) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.unobserve(el) } }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`${styles.howCard} ${vis ? styles.howCardVis : ''}`}>
      <div className={styles.howNum}>{step.num}</div>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   SECTION 4 — FORMULES (3 cards côte à côte, NOT tabs)
   Cards with different background shading, not tab switching
   ═══════════════════════════════════════════════════════ */
const formulas = [
  {
    name: 'Économique', tagline: 'L\'essentiel, maîtrisé.',
    items: ['Housse de protection matelas', 'Protection mobilier (housses & couvertures)', 'Chargement & transport camion', 'Remise en place dans chaque pièce'],
    featured: false,
  },
  {
    name: 'Confort', tagline: 'Le plus demandé.',
    items: ['Tout Économique inclus', 'Livraison cartons & adhésifs', 'Emballage & déballage fragiles', 'Démontage & remontage mobilier', 'Mise en penderie vêtements'],
    featured: true,
  },
  {
    name: 'Luxe', tagline: 'Vous ne touchez à rien.',
    items: ['Tout Confort inclus', 'Emballage intégral de tous les biens', 'Prise en charge totale du processus', 'Interlocuteur dédié de bout en bout'],
    featured: false,
  },
]

export function Formulas() {
  return (
    <section className={styles.formulas} id="formules">
      <div className={styles.formulasInner}>
        <div className={styles.formulasHeader}>
          <span className="section-label">Formules</span>
          <h2>Choisissez votre niveau<br />de prise en charge<span className={styles.dot}>.</span></h2>
          <p>Tarif toujours sur devis gratuit et personnalisé.</p>
        </div>
        <div className={styles.formulasCards}>
          {formulas.map((f) => (
            <div key={f.name} className={`${styles.formulaCard} ${f.featured ? styles.formulaCardFeatured : ''}`}>
              {f.featured && <span className={styles.formulaBadge}>Populaire</span>}
              <h3>{f.name}</h3>
              <p className={styles.formulaTagline}>{f.tagline}</p>
              <ul className={styles.formulaList}>
                {f.items.map((item, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/devis" className={`${styles.formulaCta} ${f.featured ? styles.formulaCtaFeatured : ''}`}>
                Demander un devis
                <Arrow />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   SECTION 5 — BANDEAU CONFIANCE (horizontal, compact)
   Instead of Briand's "philosophie" editorial long-text section
   ═══════════════════════════════════════════════════════ */
export function TrustBand() {
  return (
    <section className={styles.trust}>
      <div className={styles.trustInner}>
        {[
          { icon: '📋', label: 'Devis détaillé', sub: 'Gratuit et sans engagement' },
          { icon: '👷', label: 'Équipe formée', sub: 'Déménageurs déclarés' },
          { icon: '🛡️', label: 'Biens protégés', sub: 'Emballage professionnel' },
          { icon: '🇫🇷', label: 'Toute la France', sub: 'Et à l\'international' },
        ].map((item, i) => (
          <div key={i} className={styles.trustItem}>
            <span className={styles.trustIcon}>{item.icon}</span>
            <div>
              <strong>{item.label}</strong>
              <span>{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   SECTION 6 — FAQ (accordéon simple, pas grid)
   ═══════════════════════════════════════════════════════ */
const faqData = [
  { q: 'Le devis est-il gratuit ?', a: 'Oui. Le devis est entièrement gratuit et sans engagement. Un conseiller vous rappelle pour l\'établir.' },
  { q: 'Quelles sont vos zones d\'intervention ?', a: 'Nous intervenons sur toute la France métropolitaine et à l\'international.' },
  { q: 'Proposez-vous l\'emballage ?', a: 'Oui, selon la formule choisie (Confort ou Luxe). L\'emballage des objets fragiles ou l\'emballage intégral.' },
  { q: 'Comment sont protégés mes biens ?', a: 'Housses, couvertures et calage professionnel sont utilisés pour protéger votre mobilier pendant le transport.' },
  { q: 'Sous quel délai recevrai-je mon devis ?', a: 'Un conseiller vous rappelle rapidement après la réception de votre demande pour établir votre devis.' },
  { q: 'Puis-je stocker mes affaires ?', a: 'Oui, nous proposons un service de garde-meuble flexible (à la semaine ou au mois).' },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.faqInner}>
        <div className={styles.faqHeader}>
          <span className="section-label">FAQ</span>
          <h2>Questions fréquentes<span className={styles.dot}>.</span></h2>
        </div>
        <div className={styles.faqList}>
          {faqData.map((item, i) => (
            <div key={i} className={`${styles.faqItem} ${openIndex === i ? styles.faqItemOpen : ''}`}>
              <button className={styles.faqQuestion} onClick={() => setOpenIndex(openIndex === i ? null : i)} id={`faq-${i}`}>
                <span>{item.q}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.faqChevron}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {openIndex === i && (
                <div className={styles.faqAnswer}>
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   SECTION 7 — NOTRE HISTOIRE (La petite histoire)
   ═══════════════════════════════════════════════════════ */
export function OurStory() {
  return (
    <section className={styles.story} id="notre-histoire">
      <div className={styles.storyInner}>
        <div className={styles.storyLeft}>
          <span className="section-label">Notre histoire</span>
          <h2>La petite histoire<span className={styles.dot}>.</span></h2>
          <p className={styles.storyLead}>
            Breteuil Déménagement est née d&apos;une conviction simple : 
            déménager ne devrait jamais être une source de stress.
          </p>
          <p>
            Fondée par des professionnels du transport et de la logistique, 
            notre entreprise s&apos;est construite autour d&apos;un engagement 
            fort — offrir un accompagnement humain et rigoureux à chaque 
            étape de votre transition.
          </p>
          <p>
            Au fil des années, nous avons développé un savoir-faire reconnu 
            dans le déménagement résidentiel, professionnel et international. 
            Chaque projet est unique. C&apos;est pourquoi nous prenons le temps 
            d&apos;écouter, d&apos;organiser et de livrer un service à la hauteur 
            de vos attentes.
          </p>
          <p>
            Aujourd&apos;hui, Breteuil Déménagement intervient partout en France 
            avec une équipe formée, un parc de véhicules adapté et trois 
            formules pensées pour répondre à tous les besoins.
          </p>
        </div>
        <div className={styles.storyRight}>
          <div className={styles.storyVisual}>
            <div className={styles.storyBlock1}>
              <span>🚛</span>
              <strong>Partout en France</strong>
              <p>Interventions locales, régionales et nationales</p>
            </div>
            <div className={styles.storyBlock2}>
              <span>🤝</span>
              <strong>Engagement humain</strong>
              <p>Un interlocuteur dédié du premier appel à la livraison</p>
            </div>
            <div className={styles.storyBlock3}>
              <span>📦</span>
              <strong>Savoir-faire</strong>
              <p>Techniques d&apos;emballage et de manutention professionnelles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   SECTION 8 — CTA FINAL (gradient band, centered)
   ═══════════════════════════════════════════════════════ */
export function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.finalCtaInner}>
        <h2>Prêt à déménager<span className={styles.dotWhite}>?</span></h2>
        <p>Demandez votre devis gratuit. Un conseiller vous rappelle rapidement.</p>
        <div className={styles.finalCtaBtns}>
          <Link href="/devis" className={styles.finalCtaPrimary} id="final-cta">
            Demander un devis gratuit
            <Arrow />
          </Link>
          <a href="tel:+33100000000" className={styles.finalCtaGhost}>
            Nous appeler
          </a>
        </div>
      </div>
    </section>
  )
}

