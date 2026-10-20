import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
      <div className="container-page relative flex flex-col items-center text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zelya">Erreur 404</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Cette page a pris un autre chemin
        </h1>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted">
          La page que vous cherchez n’existe pas ou a été déplacée. Revenez à l’accueil pour
          découvrir la plateforme Zelya.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-zelya px-5 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-zelya-soft"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Retour à l’accueil
        </Link>
      </div>
    </section>
  );
}
