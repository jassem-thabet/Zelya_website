import { Check, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Essentiel',
    price: 'Sur devis',
    tagline: 'Pour un groupement qui se digitalise.',
    features: [
      'Gestion des chauffeurs & invitations',
      'Saisie et suivi des courses',
      'Carnet clients & adresses',
      'Tableau de bord opérationnel',
      'Support par email',
    ],
    highlighted: false,
    cta: 'Nous contacter',
  },
  {
    name: 'Pro',
    price: 'Sur devis',
    tagline: 'Pour une exploitation active au quotidien.',
    features: [
      'Tout Essentiel',
      'Tour de rôle en temps réel',
      'Zones & stations sur carte',
      'Géolocalisation des chauffeurs',
      'Journal d’audit',
      'Support prioritaire',
    ],
    highlighted: true,
    cta: 'Demander une démo',
  },
  {
    name: 'Plateforme',
    price: 'Sur mesure',
    tagline: 'Pour les réseaux de groupements.',
    features: [
      'Tout Pro',
      'Multi-groupements avancé',
      'Supervision plateforme (Super Admin)',
      'Accompagnement au déploiement',
      'Intégrations sur mesure',
      'SLA dédié',
    ],
    highlighted: false,
    cta: 'Parler à l’équipe',
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="border-y border-border bg-surface/50 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Tarifs"
          title={
            <>
              Une offre <span className="text-gradient-zelya">adaptée</span> à votre groupement
            </>
          }
          description="Chaque groupement est différent. Nous construisons une offre claire, sans surprise, selon votre taille et vos besoins."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col gap-6 rounded-2xl border p-6',
                plan.highlighted
                  ? 'border-zelya/45 bg-panel/70 zelya-glow'
                  : 'border-border bg-panel/40',
              )}
            >
              {plan.highlighted ? (
                <span className="absolute -top-3 left-6 rounded-full bg-zelya px-3 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-wide text-[#0a0a0a]">
                  Recommandé
                </span>
              ) : null}

              <div>
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted">{plan.tagline}</p>
                <p className="mt-5 font-mono text-2xl font-semibold">{plan.price}</p>
              </div>

              <ul className="flex flex-1 flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={cn('mt-0.5 size-4 shrink-0', plan.highlighted ? 'text-zelya' : 'text-zelya/70')}
                      aria-hidden
                    />
                    <span className="text-foreground/85">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={cn(
                  'inline-flex h-11 items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors',
                  plan.highlighted
                    ? 'bg-zelya text-[#0a0a0a] hover:bg-zelya-soft'
                    : 'border border-border bg-background/40 text-foreground hover:border-zelya/50 hover:bg-panel-soft',
                )}
              >
                {plan.cta}
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Tarification indicative — à ajuster selon votre modèle commercial.
        </p>
      </div>
    </section>
  );
}
