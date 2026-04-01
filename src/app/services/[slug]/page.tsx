import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './ServicePage.module.css'

/* ── Service data ── */
interface ServiceData {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  headline: string
  headlineSub: string
  intro: string
  features: { title: string; desc: string }[]
  callout: string
}

const servicesData: Record<string, ServiceData> = {
  'demenagement-residentiel': {
    slug: 'demenagement-residentiel',
    title: 'Déménagement Résidentiel',
    metaTitle: 'Déménagement Résidentiel | Breteuil Déménagement',
    metaDescription: 'Déménagement résidentiel partout en France. Maison, appartement, studio. Devis gratuit et personnalisé. Breteuil Déménagement.',
    headline: 'Votre déménagement résidentiel',
    headlineSub: 'en toute confiance',
    intro: 'Maison, appartement, studio — nous prenons en charge votre déménagement résidentiel avec soin et professionnalisme. Un interlocuteur dédié vous accompagne de bout en bout.',
    features: [
      { title: 'Prise en charge complète', desc: 'De l\'emballage au déchargement, nous nous occupons de tout selon la formule choisie.' },
      { title: 'Protection de vos biens', desc: 'Housses, couvertures et calage professionnel pour protéger vos biens pendant le transport.' },
      { title: 'Interlocuteur dédié', desc: 'Un seul contact qui vous accompagne pendant toute la durée de votre déménagement.' },
      { title: 'Partout en France', desc: 'Interventions locales, régionales et nationales selon vos besoins.' },
    ],
    callout: 'Obtenez un devis gratuit et sans engagement pour votre déménagement résidentiel.',
  },
  'demenagement-professionnel': {
    slug: 'demenagement-professionnel',
    title: 'Déménagement Professionnel',
    metaTitle: 'Déménagement d\'Entreprise | Breteuil Déménagement',
    metaDescription: 'Déménagement professionnel : bureau, commerce, entrepôt. Intervention rapide et organisée. Devis gratuit. Breteuil Déménagement.',
    headline: 'Votre déménagement professionnel',
    headlineSub: 'sans interruption',
    intro: 'Bureau, commerce ou entrepôt — nous organisons votre déménagement professionnel pour limiter au maximum l\'impact sur votre activité.',
    features: [
      { title: 'Intervention adaptée', desc: 'Planning organisé pour minimiser l\'impact sur votre activité professionnelle.' },
      { title: 'Protection du matériel', desc: 'Emballage professionnel adapté pour le matériel informatique et le mobilier de bureau.' },
      { title: 'Équipe formée', desc: 'Déménageurs expérimentés dans la manipulation de mobilier et matériel professionnel.' },
      { title: 'Devis clair', desc: 'Proposition détaillée et adaptée à la taille de votre entreprise.' },
    ],
    callout: 'Obtenez un devis gratuit pour le déménagement de votre entreprise.',
  },
  'demenagement-international': {
    slug: 'demenagement-international',
    title: 'Déménagement International',
    metaTitle: 'Déménagement International | Breteuil Déménagement',
    metaDescription: 'Déménagement international : Europe et monde entier. Accompagnement dans les démarches, logistique complète. Devis sur mesure. Breteuil Déménagement.',
    headline: 'Votre déménagement international',
    headlineSub: 'en toute sérénité',
    intro: 'Europe et monde entier — un accompagnement personnalisé pour votre projet de déménagement international. Chaque devis est établi sur mesure.',
    features: [
      { title: 'Logistique complète', desc: 'Organisation du transport par route, mer ou air selon la destination et vos besoins.' },
      { title: 'Accompagnement douanier', desc: 'Accompagnement dans les démarches douanières. Certaines formalités (visa, certificat de résidence) restent à votre charge.' },
      { title: 'Emballage adapté', desc: 'Emballage professionnel renforcé pour les longs trajets et le transport maritime.' },
      { title: 'Devis sur mesure', desc: 'Chaque projet international est unique. Le devis est toujours personnalisé.' },
    ],
    callout: 'Contactez-nous pour un devis sur mesure pour votre déménagement international.',
  },
  'emballage': {
    slug: 'emballage',
    title: 'Emballage Professionnel',
    metaTitle: 'Emballage Professionnel | Breteuil Déménagement',
    metaDescription: 'Service d\'emballage professionnel pour votre déménagement. Calage adapté et protection de vos biens. Breteuil Déménagement.',
    headline: 'Un emballage professionnel',
    headlineSub: 'pour protéger vos biens',
    intro: 'Notre service d\'emballage professionnel est disponible selon la formule choisie. Des techniques adaptées pour protéger chaque bien pendant le transport.',
    features: [
      { title: 'Calage adapté', desc: 'Protection adaptée à chaque type d\'objet pour un transport en toute sécurité.' },
      { title: 'Déballage inclus', desc: 'Selon la formule choisie, nous nous occupons aussi du déballage à destination.' },
      { title: 'Objets fragiles', desc: 'Attention particulière aux objets fragiles avec des techniques d\'emballage dédiées.' },
      { title: 'Fournitures', desc: 'Cartons et adhésifs livrés à l\'avance selon la formule.' },
    ],
    callout: 'Obtenez un devis gratuit incluant le service d\'emballage.',
  },
  'monte-meuble': {
    slug: 'monte-meuble',
    title: 'Monte-Meuble',
    metaTitle: 'Monte-Meuble | Breteuil Déménagement',
    metaDescription: 'Service de monte-meuble pour les accès difficiles. Montée ou descente par la façade. Devis gratuit. Breteuil Déménagement.',
    headline: 'Monte-meuble professionnel',
    headlineSub: 'pour les accès difficiles',
    intro: 'Accès difficile, escalier étroit, meuble encombrant ? Notre service de monte-meuble permet la montée ou descente par la façade en toute sécurité.',
    features: [
      { title: 'Accès par façade', desc: 'Solution pour les logements avec des accès difficiles ou des escaliers étroits.' },
      { title: 'Meubles encombrants', desc: 'Manipulation d\'objets volumineux qui ne passent pas par les voies classiques.' },
      { title: 'Sécurité', desc: 'Intervention réalisée par une équipe formée avec du matériel professionnel.' },
      { title: 'Ponctuel ou complet', desc: 'Service disponible seul ou intégré dans un déménagement complet.' },
    ],
    callout: 'Contactez-nous pour évaluer votre besoin en monte-meuble.',
  },
  'garde-meuble': {
    slug: 'garde-meuble',
    title: 'Garde-Meuble',
    metaTitle: 'Garde-Meuble | Breteuil Déménagement',
    metaDescription: 'Garde-meuble avec prise en charge complète. Enlèvement, stockage sécurisé et livraison. Location flexible. Breteuil Déménagement.',
    headline: 'Un garde-meuble',
    headlineSub: 'flexible et sécurisé',
    intro: 'Stockage sécurisé avec prise en charge complète : enlèvement, stockage et livraison sur demande. Location à la semaine ou au mois selon vos besoins.',
    features: [
      { title: 'Prise en charge complète', desc: 'Enlèvement à domicile, stockage et livraison sur demande.' },
      { title: 'Location flexible', desc: 'À la semaine ou au mois, selon la durée qui vous convient.' },
      { title: 'Stockage sécurisé', desc: 'Vos biens sont conservés dans des conditions adaptées.' },
      { title: 'Service combiné', desc: 'Combinez garde-meuble et déménagement pour une solution complète.' },
    ],
    callout: 'Demandez un devis gratuit incluant le garde-meuble.',
  },
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export async function generateMetadata(props: PageProps<'/services/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params
  const data = servicesData[slug]
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `https://breteuil-demenagement.fr/services/${slug}` },
  }
}

export default async function ServicePage(props: PageProps<'/services/[slug]'>) {
  const { slug } = await props.params
  const data = servicesData[slug]

  if (!data) {
    return <div className="container section text-center"><h1>Service non trouvé</h1></div>
  }

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>{data.title}</span>
          <h1>
            {data.headline}<br />
            <em>{data.headlineSub}</em>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className={`section ${styles.intro}`}>
        <div className="container container--narrow">
          <p className={styles.introText}>{data.intro}</p>
          <hr className="divider divider--center" />
        </div>
      </section>

      {/* Features */}
      <section className={`section section--alt ${styles.features}`}>
        <div className="container">
          <div className={styles.featuresGrid}>
            {data.features.map((f, i) => (
              <div key={i} className={styles.featureCard}>
                <span className={styles.featureNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section section--dark ${styles.cta}`}>
        <div className="container container--narrow text-center">
          <h2>Prêt à <em>commencer</em> ?</h2>
          <p style={{ margin: '1rem auto 2rem', maxWidth: '480px' }}>{data.callout}</p>
          <Link href="/devis" className="btn btn--primary btn--large" id={`service-${slug}-cta`}>
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  )
}
