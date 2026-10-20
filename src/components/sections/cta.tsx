import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function Cta() {
  return (
    <section id="acces" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[28rem] bg-gradient-to-t from-zelya/8 to-transparent"
        aria-hidden
      />
      <div className="container-page relative">
        <div className="panel-sheen relative overflow-hidden rounded-3xl border border-zelya/25 px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-40 w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zelya/20 blur-[80px]"
            aria-hidden
          />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-zelya/25 bg-zelya/8 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-zelya">
              <span className="size-1.5 rounded-full bg-zelya pulse-dot" aria-hidden />
              Prêt à démarrer
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.8rem] md:leading-[1.1]">
              Faites passer votre groupement <span className="text-gradient-zelya">à la vitesse supérieure</span>
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-muted">
              Réservez une démo de 30 minutes. Nous vous montrons la plateforme avec un cas concret
              de groupement et répondons à toutes vos questions.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-zelya px-6 text-[0.95rem] font-semibold text-[#0a0a0a] transition-colors hover:bg-zelya-soft"
              >
                Demander une démo
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a
                href="mailto:contact@zelya.com"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-6 text-[0.95rem] font-semibold text-foreground transition-colors hover:border-zelya/50 hover:bg-panel-soft"
              >
                Nous écrire
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
