const items = [
  'Gestion des chauffeurs',
  'Tour de rôle',
  'Géolocalisation temps réel',
  'Carnet clients',
  'Saisie des courses',
  'Zones & stations',
  'Journal d’audit',
  'Multi-groupements',
  'Notifications email',
];

export function TrustStrip() {
  return (
    <section aria-label="Modules de la plateforme" className="border-y border-border bg-surface/60">
      <div className="marquee mask-fade-x overflow-hidden py-5">
        <div className="marquee-track flex w-max items-center gap-8">
          {[...items, ...items].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8">
              <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.16em] text-muted">
                {item}
              </span>
              <span className="size-1 rounded-full bg-zelya/60" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
