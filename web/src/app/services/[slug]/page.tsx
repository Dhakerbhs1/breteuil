import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
  /* 2 content blocks for image+text */
  contentBlock1: { title: string; text: string; imgAlt: string; img: string }
  contentBlock2: { title: string; text: string; imgAlt: string; img: string }
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
    contentBlock1: {
      title: 'Une protection adaptée à chaque objet',
      text: 'Chaque meuble, chaque carton bénéficie d\'une attention particulière. Nos équipes utilisent des housses, couvertures matelassées et calages adaptés pour garantir la sécurité de vos biens pendant le transport. Les objets fragiles sont emballés individuellement selon des techniques professionnelles éprouvées.',
      imgAlt: 'Déménageurs protégeant du mobilier avec des couvertures professionnelles',
      img: '/img-residentiel-1.png',
    },
    contentBlock2: {
      title: 'Un transport organisé et ponctuel',
      text: 'Notre parc de véhicules est dimensionné pour s\'adapter à chaque volume. Du studio au pavillon, le camion est sélectionné selon votre inventaire pour optimiser le chargement et réduire les trajets. Le jour J, notre équipe arrive à l\'heure convenue et prend en charge l\'intégralité du processus.',
      imgAlt: 'Camion de déménagement devant un immeuble parisien',
      img: '/img-residentiel-2.png',
    },
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
    contentBlock1: {
      title: 'Limiter l\'impact sur votre activité',
      text: 'Un déménagement professionnel réussi, c\'est un déménagement qui ne perturbe pas votre production. Nous travaillons en amont avec vos équipes pour établir un planning précis, identifier les contraintes horaires et organiser le transfert par étapes si nécessaire. L\'objectif : une reprise d\'activité dans les meilleurs délais.',
      imgAlt: 'Déménageurs emballant du matériel de bureau',
      img: '/img-professionnel-1.png',
    },
    contentBlock2: {
      title: 'Matériel et mobilier : une prise en charge adaptée',
      text: 'Postes informatiques, archives, mobilier de bureau — chaque élément est manipulé avec le soin adapté. Nos équipes sont formées au démontage et au remontage du mobilier professionnel standard. Le matériel sensible bénéficie d\'un emballage renforcé pour un transport en toute sécurité.',
      imgAlt: 'Camion de déménagement professionnel en chargement',
      img: '/img-professionnel-2.png',
    },
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
      { title: 'Accompagnement douanier', desc: 'Accompagnement dans les démarches douanières. Certaines formalités restent à votre charge.' },
      { title: 'Emballage adapté', desc: 'Emballage professionnel renforcé pour les longs trajets et le transport maritime.' },
      { title: 'Devis sur mesure', desc: 'Chaque projet international est unique. Le devis est toujours personnalisé.' },
    ],
    callout: 'Contactez-nous pour un devis sur mesure pour votre déménagement international.',
    contentBlock1: {
      title: 'Un emballage renforcé pour les longs trajets',
      text: 'Les déménagements internationaux exigent une préparation minutieuse. Vos biens sont emballés avec des matériaux renforcés adaptés aux longs trajets — routiers, maritimes ou aériens. Chaque carton est inventorié et chaque meuble protégé individuellement pour garantir son intégrité à destination.',
      imgAlt: 'Emballage professionnel renforcé pour déménagement international',
      img: '/img-international-1.png',
    },
    contentBlock2: {
      title: 'De porte à porte, partout dans le monde',
      text: 'Nous coordonnons l\'ensemble du processus : enlèvement à domicile, formalités de transport, livraison à destination. Notre réseau de partenaires logistiques nous permet d\'intervenir en Europe, en Amérique, en Afrique et en Asie. Vous bénéficiez d\'un interlocuteur unique tout au long du processus.',
      imgAlt: 'Camion de déménagement pour transport international',
      img: '/img-international-2.png',
    },
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
    contentBlock1: {
      title: 'Des techniques éprouvées pour chaque type d\'objet',
      text: 'Vaisselle, verrerie, luminaires, tableaux — chaque catégorie d\'objet bénéficie d\'une technique d\'emballage spécifique. Nos équipes utilisent du papier bulle, du papier de soie, des cartons renforcés et des calages sur mesure. L\'objectif : que chaque objet arrive à destination dans l\'état exact de son départ.',
      imgAlt: 'Déménageur emballant des objets fragiles avec soin',
      img: '/img-emballage-1.png',
    },
    contentBlock2: {
      title: 'C\'est nous qui fournissons le matériel',
      text: 'Selon la formule choisie, nous livrons directement chez vous les cartons, le papier d\'emballage et les adhésifs nécessaires. Vous n\'avez rien à acheter. Le jour du déménagement, notre équipe procède à l\'emballage méthodique pièce par pièce, et au déballage à l\'arrivée si votre formule le prévoit.',
      imgAlt: 'Fournitures d\'emballage professionnelles',
      img: '/img-emballage-2.png',
    },
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
    contentBlock1: {
      title: 'Quand les escaliers ne suffisent pas',
      text: 'Canapé d\'angle, armoire, piano — certains meubles ne passent tout simplement pas par la cage d\'escalier ou l\'ascenseur. Le monte-meuble permet une montée ou descente par la façade, de manière sécurisée et sans endommager le mobilier ni l\'immeuble. C\'est souvent la seule solution pour les étages élevés.',
      imgAlt: 'Monte-meuble sur la façade d\'un immeuble parisien',
      img: '/img-monte-meuble-1.png',
    },
    contentBlock2: {
      title: 'Un service intégré ou ponctuel',
      text: 'Vous pouvez faire appel à notre monte-meuble dans le cadre d\'un déménagement complet ou pour une intervention ponctuelle — livraison d\'un meuble neuf, descente d\'un objet encombrant, etc. Nous nous déplaçons pour évaluer la faisabilité et vous proposons un devis adapté.',
      imgAlt: 'Déménageurs manipulant un meuble volumineux dans un couloir',
      img: '/img-monte-meuble-2.png',
    },
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
    contentBlock1: {
      title: 'Un stockage pensé pour vos biens',
      text: 'Nos espaces de stockage sont adaptés à la conservation de mobilier et d\'effets personnels. Chaque client dispose d\'un espace dédié, accessible sur demande. Les conditions de stockage (température, humidité) sont surveillées pour préserver l\'intégrité de vos biens, quelle que soit la durée.',
      imgAlt: 'Espace de stockage sécurisé avec portes oranges',
      img: '/img-garde-meuble-1.png',
    },
    contentBlock2: {
      title: 'On vient chercher, on stocke, on livre',
      text: 'Pas besoin de vous déplacer. Nous venons chez vous pour enlever les biens à stocker, nous les transportons vers notre espace de stockage et nous les livrons à l\'adresse de votre choix quand vous êtes prêt. C\'est un service de bout en bout, sans contrainte pour vous.',
      imgAlt: 'Chargement de meubles emballés dans un entrepôt',
      img: '/img-garde-meuble-2.png',
    },
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
        </div>
      </section>

      {/* Content Block 1 — Image LEFT, Text RIGHT */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.contentImg}>
            <Image
              src={data.contentBlock1.img}
              alt={data.contentBlock1.imgAlt}
              width={560}
              height={400}
              className={styles.contentImage}
            />
          </div>
          <div className={styles.contentText}>
            <h2>{data.contentBlock1.title}<span className={styles.dot}>.</span></h2>
            <p>{data.contentBlock1.text}</p>
            <Link href="/devis" className={styles.contentCta}>
              Demander un devis gratuit →
            </Link>
          </div>
        </div>
      </section>

      {/* Content Block 2 — Text LEFT, Image RIGHT */}
      <section className={`${styles.contentSection} ${styles.contentSectionAlt}`}>
        <div className={`${styles.contentInner} ${styles.contentInnerReversed}`}>
          <div className={styles.contentImg}>
            <Image
              src={data.contentBlock2.img}
              alt={data.contentBlock2.imgAlt}
              width={560}
              height={400}
              className={styles.contentImage}
            />
          </div>
          <div className={styles.contentText}>
            <h2>{data.contentBlock2.title}<span className={styles.dot}>.</span></h2>
            <p>{data.contentBlock2.text}</p>
          </div>
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
      <section className={styles.ctaSection}>
        <div className="container container--narrow text-center">
          <h2>Prêt à <em>commencer</em> ?</h2>
          <p style={{ margin: '1rem auto 2rem', maxWidth: '480px' }}>{data.callout}</p>
          <div className={styles.ctaBtns}>
            <Link href="/devis" className={styles.ctaPrimary} id={`service-${slug}-cta`}>
              Demander un devis gratuit →
            </Link>
            <a href="tel:+33100000000" className={styles.ctaGhost}>
              Nous appeler
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
