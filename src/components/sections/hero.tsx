import Link from 'next/link';
import { ArrowRight, PlayCircle, ShieldCheck, Users, Radio } from 'lucide-react';
import { Eyebrow } from '@/components/ui/section-heading';
import { PhoneMockup } from '@/components/sections/phone-mockup';

const stats = [
  { value: '100 %', label: 'multi-groupements' },
  { value: '15 min', label: 'de mise en route' },
  { value: 'Temps réel', label: 'géolocalisation' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-18rem] h-[34rem] w-[58rem] -translate-x-1/2 rounded-full bg-zelya/12 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 top-40 h-[24rem] w-[24rem] rounded-full bg-amber/8 blur-[100px]"
        aria-hidden
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="reveal flex flex-col items-start">
          <Eyebrow>
            <span className="size-1.5 rounded-full bg-zelya pulse-dot" aria-hidden />
            Plateforme SaaS pour groupements de taxis
          </Eyebrow>

          <h1 className="mt-6 text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.1rem]">
            Le cockpit qui fait rouler <span className="text-gradient-zelya">votre groupement</span>.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Chauffeurs, courses, clients, tour de rôle, zones et stations : Zelya centralise
            toute l’exploitation de votre groupement dans une interface claire, rapide et
            sécurisée. Chaque groupement garde ses données strictement isolées.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-zelya px-6 text-[0.95rem] font-semibold text-[#0a0a0a] shadow-[0_10px_30px_-12px_rgba(255,193,7,0.65)] transition-colors hover:bg-zelya-soft"
            >
              Demander une démo
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/#plateforme"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-panel/70 px-6 text-[0.95rem] font-semibold text-foreground transition-colors hover:border-zelya/50 hover:bg-panel-soft"
            >
              <PlayCircle className="size-4 text-zelya" aria-hidden />
              Découvrir la plateforme
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-zelya" aria-hidden />
              Données isolées par groupement
            </li>
            <li className="flex items-center gap-2">
              <Users className="size-4 text-zelya" aria-hidden />
              Chauffeurs & admins
            </li>
            <li className="flex items-center gap-2">
              <Radio className="size-4 text-zelya" aria-hidden />
              Suivi temps réel
            </li>
          </ul>

          <dl className="mt-10 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-wide text-muted">{stat.label}</dt>
                <dd className="mt-1 font-mono text-lg font-semibold text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative [animation-delay:120ms]">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
