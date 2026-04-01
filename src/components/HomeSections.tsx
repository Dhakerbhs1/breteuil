'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useReveal } from '@/lib/hooks'
import styles from './HomePage.module.css'

/* ═══════════════════════════ HERO ═══════════════════════════ */
export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <p className={styles.heroLabel}>Breteuil Déménagement</p>
        <h1 className={styles.heroTitle}>
          L&apos;art de déménager<br />
          <em>en toute sérénité</em>
        </h1>
        <p className={styles.heroSubtitle}>
          Votre déménagement mérite une attention particulière.<br className="hide-mobile" />
          Devis gratuit · Partout en France
        </p>
        <div className={styles.heroCtas}>
          <Link href="/devis" className="btn btn--primary btn--large" id="hero-cta">
            Demander un devis
            <ArrowRight />
          </Link>
          <Link href="/#services" className="btn btn--ghost btn--large" id="hero-services">
            Découvrir nos services
          </Link>
        </div>
      </div>
      <div className={styles.heroScroll}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}

/* ═══════════════════════════ STATEMENT ═══════════════════════ */
export function Statement() {
  const { ref, visible } = useReveal()
  return (
    <section className={`section ${styles.statement}`}>
      <div className="container container--narrow" ref={ref}>
        <blockquote className={`${styles.quote} ${visible ? styles.quoteVisible : ''}`}>
          <span className={styles.quoteMark}>&ldquo;</span>
          Chaque déménagement est un nouveau chapitre.
          Notre rôle est de vous permettre de le commencer
          <em> l&apos;esprit léger.</em>
        </blockquote>
      </div>
    </section>
  )
}

/* ═══════════════════════════ SERVICES ════════════════════════ */
const services = [
  {
    title: 'Résidentiel',
    desc: 'Maison, appartement, studio — une prise en charge complète avec soin.',
    href: '/services/demenagement-residentiel',
    icon: '🏠',
  },
  {
    title: 'Professionnel',
    desc: 'Bureau, commerce ou entrepôt. Intervention adaptée pour limiter les interruptions.',
    href: '/services/demenagement-professionnel',
    icon: '🏢',
  },
  {
    title: 'International',
    desc: 'Europe et monde entier. Logistique complète et accompagnement personnalisé.',
    href: '/services/demenagement-international',
    icon: '✈️',
  },
  {
    title: 'Emballage',
    desc: 'Service d&apos;emballage professionnel, disponible selon la formule choisie.',
    href: '/services/emballage',
    icon: '📦',
  },
  {
    title: 'Monte-meuble',
    desc: 'Accès difficile ? Montée ou descente par la façade en toute sécurité.',
    href: '/services/monte-meuble',
    icon: '🏗️',
  },
  {
    title: 'Garde-meuble',
    desc: 'Stockage sécurisé avec prise en charge complète. Location flexible.',
    href: '/services/garde-meuble',
    icon: '🔐',
  },
]

export function Services() {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        <div className={styles.servicesHeader}>
          <span className="section-label">Nos services</span>
          <h2>Une prestation<br /><em>pour chaque besoin</em></h2>
        </div>
        <div className={styles.servicesScroll}>
          {services.map((svc, i) => (
            <ServiceCard key={svc.href} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, visible } = useReveal(0.1)
  return (
    <div
      ref={ref}
      className={`${styles.serviceCard} ${visible ? styles.serviceCardVisible : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <span className={styles.serviceIcon}>{service.icon}</span>
      <h3 className={styles.serviceTitle}>{service.title}</h3>
      <p className={styles.serviceDesc} dangerouslySetInnerHTML={{ __html: service.desc }} />
      <Link href={service.href} className={styles.serviceLink}>
        En savoir plus <ArrowRight size={14} />
      </Link>
    </div>
  )
}

/* ═══════════════════════════ TRUST ═══════════════════════════ */
const trustPoints = [
  { title: 'Devis détaillé', desc: 'Proposition claire et sans engagement, adaptée à votre situation.', icon: '◎' },
  { title: 'Équipe professionnelle', desc: 'Déménageurs déclarés et formés, un interlocuteur dédié.', icon: '◉' },
  { title: 'Protection de vos biens', desc: 'Vos biens sont protégés avec soin pendant toute la prestation.', icon: '◈' },
  { title: 'Partout en France', desc: 'Interventions locales, nationales et internationales.', icon: '◇' },
]

export function Trust() {
  const { ref, visible } = useReveal()
  return (
    <section className={`section section--dark ${styles.trust}`}>
      <div className="container" ref={ref}>
        <div className={`${styles.trustGrid} ${visible ? styles.trustGridVisible : ''}`}>
          <div className={styles.trustText}>
            <span className="section-label">Nos engagements</span>
            <h2>Votre déménagement est<br /><em>entre de bonnes mains</em></h2>
            <p className={styles.trustDesc}>
              Breteuil Déménagement accompagne particuliers et entreprises
              dans chaque étape de leur projet. Un interlocuteur unique,
              une équipe formée, un devis clair.
            </p>
            <Link href="/a-propos" className="btn btn--ghost" style={{ marginTop: '1.5rem' }}>
              En savoir plus sur nous
            </Link>
          </div>
          <div className={styles.trustCards}>
            {trustPoints.map((tp, i) => (
              <div key={i} className={styles.trustCard} style={{ transitionDelay: `${i * 0.1 + 0.2}s` }}>
                <span className={styles.trustIcon}>{tp.icon}</span>
                <div>
                  <h4 className={styles.trustTitle}>{tp.title}</h4>
                  <p className={styles.trustCardDesc}>{tp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ PROCESS ═════════════════════════ */
const steps = [
  {
    num: '01',
    title: 'Remplissez le formulaire',
    desc: 'Indiquez vos villes de départ et d\'arrivée, votre numéro de téléphone. Votre demande est transmise immédiatement.',
  },
  {
    num: '02',
    title: 'Recevez votre devis',
    desc: 'Un conseiller vous rappelle rapidement. Il évalue votre volume, vos accès et construit votre devis sur mesure.',
  },
  {
    num: '03',
    title: 'Confirmez votre réservation',
    desc: 'Offre claire et détaillée. Validez votre déménagement et nous finalisons ensemble les derniers détails.',
  },
]

export function Process() {
  const { ref, visible } = useReveal()
  return (
    <section className={`section section--alt ${styles.process}`} id="processus">
      <div className="container container--narrow" ref={ref}>
        <div className="text-center" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Comment ça marche</span>
          <h2>Votre déménagement<br />en <em>3 étapes simples</em></h2>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {steps.map((step, i) => (
            <div
              key={i}
              className={`${styles.step} ${visible ? styles.stepVisible : ''}`}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className={styles.stepDot}>
                <span className={styles.stepNum}>{step.num}</span>
              </div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <Link href="/devis" className="btn btn--primary btn--large" id="process-cta">
            Commencer ma demande <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ ZONES ═══════════════════════════ */
const zones = [
  'Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Toulouse', 'Nantes',
  'Montpellier', 'Strasbourg', 'Lille', 'Nice', 'Rennes', 'Grenoble',
  'Rouen', 'Toulon', 'Saint-Étienne', 'Dijon', 'Angers', 'Nîmes',
  'Metz', 'et toute la France',
]

export function Zones() {
  const { ref, visible } = useReveal()
  return (
    <section className={`section ${styles.zones}`}>
      <div className="container" ref={ref}>
        <div className={`${styles.zonesGrid} ${visible ? styles.zonesGridVisible : ''}`}>
          <div>
            <span className="section-label">Zones d&apos;intervention</span>
            <h2>Nous intervenons<br /><em>partout en France</em></h2>
            <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              Nous réalisons des déménagements dans toute la France métropolitaine
              et à l&apos;international. Paris, Bordeaux, Lyon, Marseille — et partout entre les deux.
            </p>
            <Link href="/devis" className="btn btn--primary" id="zones-cta">
              Obtenir mon devis <ArrowRight />
            </Link>
          </div>
          <div className={styles.zonesTags}>
            {zones.map((z) => (
              <span key={z} className={styles.zoneTag}>{z}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ FAQ ══════════════════════════════ */
const faqs = [
  {
    q: 'Comment se déroule un déménagement avec Breteuil ?',
    a: 'Vous remplissez notre formulaire en ligne, un conseiller vous rappelle rapidement pour évaluer votre volume et vos besoins, puis vous recevez un devis détaillé. Après validation, nous organisons le jour J.',
  },
  {
    q: 'Quelles sont vos zones d\'intervention ?',
    a: 'Nous intervenons dans toute la France métropolitaine pour les déménagements résidentiels et professionnels, ainsi qu\'à l\'international avec un accompagnement personnalisé.',
  },
  {
    q: 'Proposez-vous un service d\'emballage ?',
    a: 'Oui, nous proposons un service d\'emballage professionnel selon la formule choisie (Confort ou Luxe). Contactez-nous pour connaître le détail de chaque formule.',
  },
  {
    q: 'Le devis est-il gratuit et sans engagement ?',
    a: 'Oui, le devis est entièrement gratuit et sans engagement. N\'hésitez pas à nous contacter pour toute demande.',
  },
  {
    q: 'Comment sont protégés mes biens pendant le transport ?',
    a: 'Vos biens sont protégés avec soin grâce à des housses, couvertures adaptées et un calage professionnel. Le niveau de protection dépend de la formule choisie.',
  },
]

export function FAQ() {
  return (
    <section className={`section section--alt ${styles.faq}`} id="faq">
      <div className="container container--narrow">
        <div className="text-center" style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <span className="section-label">Questions fréquentes</span>
          <h2>Tout ce qu&apos;il faut savoir</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const { ref, visible } = useReveal(0.1)

  return (
    <div ref={ref} className={`${styles.faqItem} ${visible ? styles.faqItemVisible : ''} ${open ? styles.faqItemOpen : ''}`}>
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <svg className={styles.faqChevron} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={styles.faqAnswer}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

/* ═══════════════════════════ CTA FINAL ═══════════════════════ */
export function CtaFinal() {
  const { ref, visible } = useReveal()
  return (
    <section className={`section section--dark ${styles.ctaFinal}`}>
      <div className="container container--narrow text-center" ref={ref}>
        <div className={`${styles.ctaContent} ${visible ? styles.ctaContentVisible : ''}`}>
          <span className="section-label">Prêt à déménager ?</span>
          <h2>Commencez votre<br /><em>nouveau chapitre</em></h2>
          <p style={{ maxWidth: '480px', margin: '1rem auto 2rem' }}>
            Remplissez notre formulaire en quelques secondes et recevez un devis gratuit
            adapté à votre situation.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/devis" className="btn btn--primary btn--large" id="final-cta">
              Demander un devis gratuit <ArrowRight />
            </Link>
            <a href="tel:+33100000000" className="btn btn--ghost btn--large">
              Nous appeler
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════ UTILITY ICONS ═══════════════════════ */
function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg className="arrow-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
