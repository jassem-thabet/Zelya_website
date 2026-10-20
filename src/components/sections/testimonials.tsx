import { Quote } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const testimonials = [
  {
    quote:
      'Avant, le tour de rôle se gérait au téléphone. Aujourd’hui tout le monde voit la file en direct et les litiges ont quasiment disparu.',
    name: 'Karim B.',
    role: 'Gérant de groupement',
    initials: 'KB',
  },
  {
    quote:
      'Le backoffice est dense mais très lisible. On retrouve une course, un client ou un chauffeur en quelques secondes.',
    name: 'Léa M.',
    role: 'Responsable d’exploitation',
    initials: 'LM',
  },
  {
    quote:
      'Le fait que chaque groupement ait ses données isolées nous a rassurés. On peut grandir sans mélanger les exploitations.',
    name: 'Samir K.',
    role: 'Administrateur',
    initials: 'SK',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Ils l’utilisent"
          title={
            <>
              Pensé pour celles et ceux qui <span className="text-gradient-zelya">exploitent</span>
            </>
          }
          description="Des retours du terrain, pas des promesses marketing."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col justify-between gap-6 rounded-xl border border-border bg-panel/40 p-6"
            >
              <Quote className="size-6 text-zelya/70" aria-hidden />
              <blockquote className="text-pretty text-sm leading-relaxed text-foreground/90">
                « {testimonial.quote} »
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                <span className="grid size-9 place-items-center rounded-full bg-zelya/12 font-mono text-xs font-semibold text-zelya">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          Témoignages illustratifs — à remplacer par de vrais retours clients.
        </p>
      </div>
    </section>
  );
}
