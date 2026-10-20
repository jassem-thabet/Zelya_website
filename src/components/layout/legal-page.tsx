import { Eyebrow } from '@/components/ui/section-heading';

export function LegalPage({
  eyebrow,
  title,
  updatedAt,
  children,
}: {
  eyebrow: string;
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative pt-32 pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-60" aria-hidden />
      <div className="container-page relative max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 font-mono text-xs text-muted">Dernière mise à jour : {updatedAt}</p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-muted [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-foreground [&_li]:mt-1.5 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
          <div className="rounded-xl border border-amber/25 bg-amber/8 p-4 text-xs text-amber">
            Document de démonstration (copie 0). Le contenu juridique doit être validé et complété
            avant toute mise en production.
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
