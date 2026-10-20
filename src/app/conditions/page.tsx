import type { Metadata } from 'next';
import { LegalPage } from '@/components/layout/legal-page';

export const metadata: Metadata = {
  title: 'Conditions d’utilisation',
  description: 'Conditions d’utilisation du site et de la plateforme Zelya.',
};

export default function ConditionsPage() {
  return (
    <LegalPage eyebrow="Légal" title="Conditions d’utilisation" updatedAt="19 octobre 2026">
      <div>
        <h2>Objet</h2>
        <p>
          Les présentes conditions encadrent l’utilisation du site publicitaire Zelya et, plus
          largement, l’accès à la plateforme de gestion de groupements de taxis.
        </p>
      </div>

      <div>
        <h2>Accès à la plateforme</h2>
        <p>
          L’accès à la plateforme est réservé aux groupements disposant d’un compte. Il n’existe
          pas d’inscription libre : la création d’un groupement et l’invitation des utilisateurs
          sont réalisées par Zelya ou par un administrateur habilité.
        </p>
      </div>

      <div>
        <h2>Comptes et sécurité</h2>
        <ul>
          <li>Vous êtes responsable de la confidentialité de vos identifiants.</li>
          <li>Toute activité réalisée depuis votre compte est réputée effectuée par vous.</li>
          <li>Signalez immédiatement toute utilisation non autorisée.</li>
        </ul>
      </div>

      <div>
        <h2>Usage autorisé</h2>
        <p>
          La plateforme doit être utilisée conformément à sa destination et à la réglementation
          applicable, notamment en matière de protection des données personnelles.
        </p>
      </div>

      <div>
        <h2>Évolution des conditions</h2>
        <p>
          Zelya peut faire évoluer les présentes conditions. Les utilisateurs seront informés
          de toute modification substantielle.
        </p>
      </div>
    </LegalPage>
  );
}
