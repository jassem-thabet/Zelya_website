import {
  Users,
  ClipboardList,
  MapPinned,
  RotateCcw,
  UserRoundSearch,
  ScrollText,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const features = [
  {
    icon: Users,
    title: 'Gestion des chauffeurs',
    description:
      'Invitez vos chauffeurs par email, attribuez un identifiant unique (T1, T2…) et suivez leur statut en un coup d’œil.',
  },
  {
    icon: ClipboardList,
    title: 'Courses centralisées',
    description:
      'Saisie manuelle, suivi et historique complet des courses. Filtrez par période, chauffeur, client ou statut.',
  },
  {
    icon: MapPinned,
    title: 'Zones & stations',
    description:
      'Définissez la zone de service (cercle ou polygone) et gérez vos stations d’attente directement sur la carte.',
  },
  {
    icon: RotateCcw,
    title: 'Tour de rôle',
    description:
      'Une file d’attente transparente : rejoindre, quitter, repositionner et attribuer la prochaine course en un clic.',
  },
  {
    icon: UserRoundSearch,
    title: 'Carnet clients',
    description:
      'Fiches clients, adresses multiples, historique, archivage et liste noire avec motif obligatoire.',
  },
  {
    icon: ScrollText,
    title: 'Journal d’audit',
    description:
      'Chaque action sensible est tracée : qui, quoi, quand et depuis quelle adresse IP. Journal immuable.',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité renforcée',
    description:
      'JWT + refresh tokens, Argon2id, rotation automatique, détection de vol de session et anti-brute-force.',
  },
  {
    icon: Building2,
    title: 'Multi-groupements',
    description:
      'Chaque groupement est un tenant isolé, avec ses propres données protégées au niveau base de données.',
  },
];

export function Features() {
  return (
    <section id="fonctionnalites" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Fonctionnalités"
          title={
            <>
              Tout ce qu’il faut pour <span className="text-gradient-zelya">piloter</span> votre
              groupement
            </>
          }
          description="Des modules pensés avec les exploitants de taxis : simples au quotidien, puissants quand il faut analyser."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group relative flex flex-col gap-4 rounded-xl border border-border bg-panel/40 p-5 transition-colors duration-300 hover:border-zelya/40 hover:bg-panel/70"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-border bg-panel-soft text-zelya transition-colors group-hover:border-zelya/40 group-hover:bg-zelya/10">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
