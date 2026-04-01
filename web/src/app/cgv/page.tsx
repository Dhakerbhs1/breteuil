import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CGV – Conditions Générales de Vente',
  description: 'Conditions générales de vente de Breteuil Déménagement.',
  alternates: { canonical: 'https://breteuil-demenagement.fr/cgv' },
}

export default function CGVPage() {
  return (
    <div className="section" style={{ paddingTop: 'clamp(6rem, 8vw, 8rem)' }}>
      <div className="container container--narrow">
        <h1 style={{ marginBottom: '2rem' }}>Conditions Générales de Vente</h1>
        <p style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
          Dernière mise à jour : Janvier 2024
        </p>

        {/* CHAPITRE 1 */}
        <h2 style={{ fontSize: '1.25rem', marginTop: '2.5rem', marginBottom: '0.75rem', color: 'var(--color-accent)' }}>
          CHAPITRE 1 : Dispositions générales
        </h2>
        <p>
          Les présentes conditions générales de vente et les conditions particulières négociées entre
          l&apos;entreprise et le client déterminent les droits et obligations de chacun d&apos;eux. Elles
          s&apos;appliquent de plein droit aux opérations de déménagement objet du présent contrat.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 1 – INFORMATION SUR LES CONDITIONS DE RÉALISATION DU DÉMÉNAGEMENT</h3>
        <p>
          A la demande de l&apos;entreprise, le client doit fournir toutes informations dont il a connaissance
          permettant la réalisation matérielle du déménagement, tant au lieu de chargement que de livraison
          (conditions d&apos;accès pour le personnel et le véhicule, possibilité de stationnement, travaux en
          cours et toutes autres particularités). Le client est préalablement informé des suppléments chiffrés
          qu&apos;il serait éventuellement amené à supporter en cas d&apos;absence d&apos;informations ou
          d&apos;inexactitude de celles-ci.
        </p>
        <p>
          Le client doit également signaler les objets dont le transport est assujetti à une réglementation
          spéciale (vins, alcools, armes, etc.), les formalités administratives éventuelles étant à sa charge.
          Un devis gratuit décrivant les caractéristiques de l&apos;opération projetée est fourni par
          l&apos;entreprise au client.
        </p>
        <p>
          <strong>Courtoisie, respect et salubrité :</strong> Pour que votre déménagement se déroule dans les
          meilleures conditions, tous vos effets personnels doivent être propres, organisés et regroupés dans
          des contenants dédiés au déménagement. Les déchets doivent être collectés, les lieux et mobiliers
          doivent être salubres. Les effets personnels doivent être propres et la vaisselle lavée et organisée.
          Le réfrigérateur et le congélateur doivent être vides. Le non-respect peut entraîner des frais
          supplémentaires, un report de date voire l&apos;annulation.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 2 – RÉSILIATION DU CONTRAT</h3>
        <p>
          Sauf stipulation contraire des conditions particulières, toute somme versée d&apos;avance est qualifiée
          d&apos;arrhes. Sauf cas de force majeure :
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>en cas de résiliation par le client, les arrhes ne sont pas remboursées,</li>
          <li>en cas de résiliation par l&apos;entreprise ou défaillance de celle-ci, le professionnel les restitue.</li>
        </ul>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 3 – VENTE À DISTANCE</h3>
        <p>
          En cas d&apos;un contrat conclu à distance et hors établissement, le client, en application de l&apos;article
          L 221-28 12° du code de la consommation, ne bénéficie pas d&apos;un droit de rétractation. Le consommateur
          a le droit de s&apos;inscrire sur la liste d&apos;opposition au démarchage téléphonique. Appel non surtaxé |
          Opposition au démarchage : <a href="https://www.bloctel.gouv.fr" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>www.bloctel.gouv.fr</a>
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 4 – GARANTIE DOMMAGE</h3>
        <p>
          L&apos;entreprise a la faculté de proposer au client de souscrire une garantie dommage destinée à
          garantir le mobilier contre certains risques pour lesquels elle n&apos;assume légalement aucune
          responsabilité. Son coût est porté à la connaissance du client, qui a la possibilité d&apos;y
          souscrire ou non.
        </p>

        {/* CHAPITRE 2 */}
        <h2 style={{ fontSize: '1.25rem', marginTop: '2.5rem', marginBottom: '0.75rem', color: 'var(--color-accent)' }}>
          CHAPITRE 2 : Prix et modalités de règlement
        </h2>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 5 – DÉLAIS D&apos;EXÉCUTION INDÉTERMINÉS</h3>
        <p>
          Si, à la demande du client, il n&apos;est pas fixé de date ou de période formelle d&apos;exécution,
          le client peut adresser une mise en demeure par lettre recommandée à l&apos;entreprise, au cas où
          celle-ci n&apos;a pas entrepris le transport dans un délai normalement prévisible. A compter de cette
          mise en demeure, l&apos;entreprise dispose d&apos;un délai de dix jours pour exécuter l&apos;opération
          convenue. A défaut d&apos;exécution, dans le délai de dix jours, sauf cas de force majeure, le contrat
          est considéré comme résilié par l&apos;entreprise et les sommes versées sont restituées.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 6 – PRIX ET MODALITÉS DE RÈGLEMENT</h3>
        <p>
          Les prix fixés au contrat ne peuvent être modifiés que si des charges imprévisibles et indépendantes
          de la volonté de l&apos;entreprise, liées aux modalités de réalisation, surviennent avant le début de
          l&apos;opération. Le client et l&apos;entreprise peuvent toutefois décider d&apos;un commun accord de
          modifier les dispositions prévues au contrat sous réserve de convenir de nouvelles modalités et des
          conséquences pouvant en résulter sur le prix fixé, notamment pour toutes prestations supplémentaires
          non prévues au contrat initial.
        </p>
        <p>
          Si, à la demande du client, la date du déménagement prévu sur le contrat doit être modifiée, les
          pénalités de changement seront :
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>plus de 14 jours avant la date prévue sur le contrat : 360 Euros TTC</li>
          <li>entre 14 jours et 48H de la date du contrat : 25 % de la somme totale TTC</li>
          <li>moins de 48H avant la date prévue sur le contrat : 50% de la somme totale TTC</li>
        </ul>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 7 – VALIDITÉ DES PRIX</h3>
        <p>
          Si la date de réalisation n&apos;a pas été fixée, l&apos;entreprise et le client déterminent la durée
          de validité des prix à compter de la date d&apos;établissement du devis.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 8 – MODALITÉS DE RÈGLEMENT</h3>
        <p>Les conditions de règlements sont les suivantes :</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>le montant des arrhes est versé à la commande</li>
          <li>le solde sera demandé avant le déchargement des biens.</li>
        </ul>

        {/* CHAPITRE 3 */}
        <h2 style={{ fontSize: '1.25rem', marginTop: '2.5rem', marginBottom: '0.75rem', color: 'var(--color-accent)' }}>
          CHAPITRE 3 : Réalisation des prestations
        </h2>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 9 – PRESTATIONS EFFECTUÉES PAR L&apos;ENTREPRISE</h3>
        <p>
          Les prestations sont convenues avec le client préalablement à chaque opération et précisément définies
          dans le devis. L&apos;entreprise n&apos;assume pas la prise en charge des personnes, des animaux, des
          végétaux, des matières dangereuses, infectes, explosives ou inflammables, des bijoux, monnaies, métaux
          précieux ou valeurs. Toute exception à cette règle doit être l&apos;objet d&apos;un accord écrit entre
          l&apos;entreprise et le client avant le début de la réalisation.
        </p>
        <p>
          Pour les contrats signés en groupage, le délai de livraison est de 1 à 10 jours selon nos plannings.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 10 – RÉALISATION PAR UNE TIERCE ENTREPRISE</h3>
        <p>
          L&apos;entreprise conserve la faculté de confier, sous son entière responsabilité, la réalisation
          totale ou partielle du déménagement à une tierce entreprise dénommée « entreprise exécutante ». Dans
          le cas où l&apos;entreprise contractante utilise cette faculté, l&apos;information du client sur
          l&apos;identité de l&apos;entreprise exécutante doit être réalisée dans un délai minimum de 48 heures
          avant la date de réalisation ; le client est en droit de refuser et les sommes lui sont alors restituées.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 11 – PRÉSENCE OBLIGATOIRE DU CLIENT</h3>
        <p>
          Le client ou son mandataire doit être présent tant au chargement qu&apos;à la livraison ; il doit
          vérifier, avant le départ du véhicule, qu&apos;aucun objet n&apos;a été oublié dans les locaux et
          dépendances où se trouvait le mobilier. Le représentant de l&apos;entreprise est en droit d&apos;exiger
          du client la constatation par écrit de toute détérioration antérieure au déménagement.
        </p>

        {/* CHAPITRE 4 */}
        <h2 style={{ fontSize: '1.25rem', marginTop: '2.5rem', marginBottom: '0.75rem', color: 'var(--color-accent)' }}>
          CHAPITRE 4 : Responsabilité de l&apos;entreprise
        </h2>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 12 – RESPONSABILITÉ POUR RETARD</h3>
        <p>
          L&apos;entreprise est tenue de réaliser le déménagement suivant la date de chargement et de livraison,
          ou en cas de groupage suivant la période indiquée sur la lettre de voiture. Sauf cas de force majeure,
          l&apos;indemnité due en cas de retard est calculée suivant le préjudice démontré et supporté par le client.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 13 – RESPONSABILITÉ POUR PERTE OU AVARIES</h3>
        <p>
          L&apos;entreprise est responsable des meubles et objets qui lui ont été confiés, sauf cas de force
          majeure, vice propre de la chose ou faute du client. Elle décline toute responsabilité en ce qui
          concerne les opérations qui ne seraient pas exécutées par ses préposés ou ses intermédiaires substitués.
        </p>
        <p>
          Pour les catégories ECONOMIQUE uniquement : Tous les meubles de plus de 1 mètre de hauteur ou de
          largeur doivent impérativement être démontés par le client. Notre garantie ne s&apos;applique pas aux
          mobiliers en catégorie ECONOMIQUE.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 14 – INDEMNISATION POUR PERTES ET AVARIES</h3>
        <p>
          Suivant la nature des dommages, les pertes et avaries donnent lieu à réparation, remplacement ou
          indemnité compensatrice. L&apos;indemnisation intervient dans la limite du préjudice matériel prouvé et
          des conditions particulières négociées entre l&apos;entreprise et le client. Ces conditions particulières
          fixent – sous peine de nullité de plein droit du contrat – le montant de l&apos;indemnisation maximum
          pour la totalité du mobilier et pour chaque objet ou élément de mobilier. Elles peuvent également
          fixer l&apos;indemnisation maximum des objets figurant sur une liste valorisée. Le client est informé
          des coûts en résultant.
        </p>
        <p>En cas de sinistre une franchise de 280 € est applicable.</p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 15 – PRESCRIPTION</h3>
        <p>
          Les actions en justice pour avarie, perte ou retard auxquelles peut donner lieu le contrat de
          déménagement doivent être intentées jusqu&apos;à 1 an qui suit la livraison du mobilier.
        </p>

        {/* CHAPITRE 5 */}
        <h2 style={{ fontSize: '1.25rem', marginTop: '2.5rem', marginBottom: '0.75rem', color: 'var(--color-accent)' }}>
          CHAPITRE 5 : Livraison du mobilier et formalités en cas de dommage
        </h2>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 16 – LIVRAISON DU MOBILIER À DOMICILE</h3>
        <p>
          A la réception, le client doit vérifier l&apos;état de son mobilier et en donner décharge dès la
          livraison terminée à l&apos;aide de la déclaration de fin de travail. En cas de perte ou d&apos;avarie
          et pour sauvegarder ses droits et moyens de preuve, le client a intérêt à émettre dès la livraison et
          la mise en place, en présence des représentants de l&apos;entreprise, des réserves écrites, précises et
          détaillées.
        </p>
        <p>
          En cas d&apos;absence de réserves à la livraison ou en cas de réserves contestées par les représentants
          de l&apos;entreprise sur la lettre de voiture, le client doit, en cas de perte ou d&apos;avarie, adresser
          sa protestation motivée à l&apos;entreprise.
        </p>
        <p>
          Ces formalités doivent être accomplies dans les 15 jours calendaires révolus à compter de la réception
          des objets transportés tel que prévu par l&apos;article L 224-63 du code de la consommation. A défaut,
          le client est privé du droit d&apos;agir contre l&apos;entreprise.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 17 – LIVRAISON DU MOBILIER AU GARDE-MEUBLES À LA DEMANDE DU CLIENT</h3>
        <p>
          La livraison en garde-meubles est assimilée à une livraison à domicile et met fin au contrat de
          déménagement. Les frais d&apos;entrée en garde-meubles sont distincts et facturés au client par le
          garde-meubles qui assume la garde du mobilier.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 18 – DÉPÔT NÉCESSAIRE PAR SUITE D&apos;EMPÊCHEMENT À LA LIVRAISON</h3>
        <p>
          En cas d&apos;absence du client aux adresses de livraison par lui indiquées, ou d&apos;impossibilité
          matérielle n&apos;étant pas le fait de l&apos;entreprise, le mobilier est placé d&apos;office dans un
          garde-meubles, à la diligence de l&apos;entreprise et aux frais du client. Par tous moyens appropriés,
          l&apos;entreprise rend compte au client de cette opération de dépôt, qui met fin au contrat de
          déménagement.
        </p>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 19 – RÈGLEMENT AMIABLE DES DIFFÉRENDS – MÉDIATION DES LITIGES DE LA CONSOMMATION</h3>
        <p>
          Conformément aux dispositions du code de la consommation relatives au « processus de médiation des
          litiges de la consommation », le client a le droit, en vue de la résolution amiable d&apos;un litige né
          du contrat et l&apos;opposant à l&apos;entreprise, de recourir gratuitement et aux conditions fixées par
          ledit code, à un médiateur de la consommation.
        </p>
        <p>
          Le médiateur référent de l&apos;entreprise est le Centre de médiation et de règlement amiable des
          huissiers de justice Sas Médiation Solution, qui peut être joint :
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>par téléphone : 04 82 53 93 06</li>
          <li>par voie postale : Sas Médiation Solution, Anne VANZETTO et Candice OLIVIER, 222 chemin de la bergerie, 01800 Saint Jean de Niost.</li>
        </ul>

        <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>ARTICLE 20 – PROTECTION DES DONNÉES PERSONNELLES</h3>
        <p>
          Les données personnelles du client sont traitées conformément au Règlement Général sur la Protection
          des Données (RGPD).
        </p>

        <p style={{ marginTop: '3rem', fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
          Pour toute question relative à nos CGV, contactez-nous à contact@breteuil-demenagement.fr.
        </p>
      </div>
    </div>
  )
}
