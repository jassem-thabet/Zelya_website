import { SectionHeading } from '@/components/ui/section-heading';

const faqs = [
  {
    question: 'Zelya remplace-t-il notre standard téléphonique ?',
    answer:
      'Non. Zelya centralise la gestion opérationnelle du groupement : chauffeurs, courses, clients, tour de rôle et suivi. Il complète vos outils existants sans imposer une refonte de votre organisation.',
  },
  {
    question: 'Comment les chauffeurs se connectent-ils ?',
    answer:
      'Chaque chauffeur reçoit une invitation par email. Il crée son mot de passe puis se connecte avec le code de son groupement et son identifiant unique (T1, T2…). Aucune inscription libre n’est possible.',
  },
  {
    question: 'Les données de notre groupement sont-elles isolées ?',
    answer:
      'Oui. Zelya est une plateforme multi-tenant : chaque groupement dispose de ses propres données, protégées au niveau applicatif et base de données. Un groupement ne peut jamais accéder aux données d’un autre.',
  },
  {
    question: 'Faut-il installer un logiciel ?',
    answer:
      'Non. Le backoffice est une application web accessible depuis un navigateur. L’application mobile chauffeur est prévue pour suivre les positions et le tour de rôle.',
  },
  {
    question: 'Pouvons-nous garder notre organisation actuelle ?',
    answer:
      'La plateforme s’adapte à vos paramètres métier : politique de dispatch, horaires de service, délai de sonnerie, zones et stations. Vous gardez la main sur votre fonctionnement.',
  },
  {
    question: 'Comment démarrer ?',
    answer:
      'Demandez une démo. Nous créons votre groupement, invitons votre premier administrateur et vous accompagnons pour la mise en route.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title={
            <>
              Les questions <span className="text-gradient-zelya">fréquentes</span>
            </>
          }
          description="Une autre question ? Écrivez-nous, nous répondons rapidement."
        />

        <div className="flex flex-col divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  className="grid size-6 shrink-0 place-items-center rounded-full border border-border text-muted transition-transform duration-200 group-open:rotate-45 group-open:border-zelya/40 group-open:text-zelya"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
