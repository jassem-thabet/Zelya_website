import type { Metadata } from 'next';
import { LegalPage } from '@/components/layout/legal-page';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Zelya.',
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage eyebrow="Légal" title="Mentions légales" updatedAt="19 octobre 2026">
      <div>
        <h2>Éditeur du site</h2>
        <p>
          Le site zelya.com est édité par Zelya. Les informations d’immatriculation
          (raison sociale, SIREN, adresse du siège, capital social, directeur de publication)
          doivent être complétées ici avant publication.
        </p>
      </div>

      <div>
        <h2>Hébergement</h2>
        <p>
          Les coordonnées de l’hébergeur (nom, adresse, téléphone) doivent être renseignées avant
          la mise en production du site.
        </p>
      </div>

      <div>
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus présents sur ce site (textes, visuels, logo, interface) est la
          propriété exclusive de Zelya, sauf mention contraire. Toute reproduction sans
          autorisation écrite est interdite.
        </p>
      </div>

      <div>
        <h2>Responsabilité</h2>
        <p>
          Zelya s’efforce de fournir des informations exactes et à jour. Toutefois, les
          informations présentées sur ce site sont fournies à titre indicatif et peuvent évoluer
          sans préavis.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Pour toute question relative au site :{' '}
          <a className="text-zelya hover:text-zelya-soft" href="mailto:contact@zelya.com">
            contact@zelya.com
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
