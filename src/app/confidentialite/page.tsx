import type { Metadata } from 'next';
import { LegalPage } from '@/components/layout/legal-page';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et de protection des données de Zelya.',
};

export default function ConfidentialitePage() {
  return (
    <LegalPage eyebrow="Légal" title="Politique de confidentialité" updatedAt="19 octobre 2026">
      <div>
        <h2>Données collectées</h2>
        <p>
          Ce site publicitaire ne collecte aucune donnée personnelle. Les informations que vous
          transmettez volontairement par email (nom, coordonnées, nom du groupement, message) sont
          utilisées uniquement pour répondre à votre demande.
        </p>
      </div>

      <div>
        <h2>Finalité du traitement</h2>
        <p>
          Les informations transmises servent uniquement à répondre à votre demande et, le cas
          échéant, à organiser une démonstration de la plateforme.
        </p>
      </div>

      <div>
        <h2>Durée de conservation</h2>
        <p>
          Les demandes de contact sont conservées pour une durée maximale de 24 mois, sauf
          obligation légale contraire.
        </p>
      </div>

      <div>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement,
          de limitation et d’opposition sur vos données. Pour l’exercer, écrivez à{' '}
          <a className="text-zelya hover:text-zelya-soft" href="mailto:contact@zelya.com">
            contact@zelya.com
          </a>
          .
        </p>
      </div>

      <div>
        <h2>Cookies</h2>
        <p>
          Ce site n’utilise pas de cookies publicitaires ou de mesure d’audience dans sa version
          actuelle. Un outil de mesure pourra être ajouté ultérieurement, avec un consentement
          préalable lorsque la réglementation l’exige.
        </p>
      </div>
    </LegalPage>
  );
}
