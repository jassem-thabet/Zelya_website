import { SectionHeading } from '@/components/ui/section-heading';

const steps = [
  {
    step: '01',
    title: 'Créez votre groupement',
    description:
      'Un Super Admin crée le groupement, configure la zone de service, les horaires et le branding. Le premier admin est invité par email.',
  },
  {
    step: '02',
    title: 'Invitez vos chauffeurs',
    description:
      'Chaque chauffeur reçoit une invitation, accepte et se voit attribuer un identifiant unique (T1, T2…). Son compte mobile est actif.',
  },
  {
    step: '03',
    title: 'Exploitez au quotidien',
    description:
      'Courses, tour de rôle, positions GPS et carnet clients : votre équipe pilote l’activité depuis un backoffice unique.',
  },
  {
    step: '04',
    title: 'Suivez et auditez',
    description:
      'Statistiques, historique et journal d’audit immuable vous donnent une vision claire et traçable de chaque action.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Mise en route"
          title={
            <>
              Opérationnel en <span className="text-gradient-zelya">quatre étapes</span>
            </>
          }
          description="Pas d’installation complexe, pas de formation interminable. Votre groupement est en ligne rapidement."
        />

        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.step}
              className="relative flex flex-col gap-4 rounded-xl border border-border bg-panel/40 p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-zelya">{step.step}</span>
                {index < steps.length - 1 ? (
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent lg:block" aria-hidden />
                ) : null}
              </div>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
