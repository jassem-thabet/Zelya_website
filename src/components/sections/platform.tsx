import { Check, LayoutDashboard, Radar, ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '@/components/ui/section-heading';

const highlights = [
  'Un tableau de bord dense, lisible et pensé pour le terrain.',
  'Le Super Admin supervise tous les groupements, l’Admin gère le sien.',
  'Les chauffeurs se connectent avec leur code groupement et identifiant.',
  'Chaque donnée est cloisonnée : un groupement ne voit jamais l’autre.',
];

const roles = [
  {
    role: 'Super Admin',
    scope: 'Plateforme',
    detail: 'Groupements, audit, paramètres et supervision globale.',
    tone: 'text-cyan',
  },
  {
    role: 'Admin groupement',
    scope: 'Son groupement',
    detail: 'Chauffeurs, courses, clients, zones, stations et réglages.',
    tone: 'text-zelya',
  },
  {
    role: 'Chauffeur',
    scope: 'Application mobile',
    detail: 'Position GPS, disponibilité et tour de rôle en temps réel.',
    tone: 'text-amber',
  },
];

export function Platform() {
  return (
    <section id="plateforme" className="relative border-y border-border bg-surface/50 py-24 md:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>La plateforme</Eyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
            Un cockpit. <span className="text-gradient-zelya">Trois rôles.</span> Zéro friction.
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted">
            Le backoffice Zelya est une application opérationnelle, pas une simple vitrine.
            Chaque écran traduit un flux métier réel : inviter un chauffeur, saisir une course,
            suivre la file d’attente ou auditer une action sensible.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-zelya/12 text-zelya">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-zelya transition-colors hover:text-zelya-soft"
          >
            Voir la plateforme en action
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-6 rounded-3xl bg-zelya/6 blur-3xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-2xl border border-border panel-sheen">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <LayoutDashboard className="size-4 text-zelya" aria-hidden />
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                  Dashboard · Groupement
                </span>
              </div>
              <span className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[0.6rem] text-muted">
                ZELYA
              </span>
            </div>

            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {[
                { label: 'Chauffeurs actifs', value: '24', delta: '+3' },
                { label: 'Courses du jour', value: '148', delta: '+12 %' },
                { label: 'En attente', value: '6', delta: 'file' },
              ].map((metric) => (
                <div key={metric.label} className="rounded-lg border border-border bg-background/50 p-3">
                  <p className="text-[0.65rem] uppercase tracking-wide text-muted">{metric.label}</p>
                  <div className="mt-1 flex items-end justify-between">
                    <p className="font-mono text-xl font-semibold">{metric.value}</p>
                    <span className="font-mono text-[0.6rem] text-zelya">{metric.delta}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-3 px-4 pb-4 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-lg border border-border bg-background/50 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold">Dernières courses</p>
                  <span className="font-mono text-[0.58rem] text-muted">Aujourd’hui</span>
                </div>
                <ul className="mt-3 flex flex-col gap-2">
                  {[
                    ['T4', 'Gare → Aéroport', 'Terminée', 'text-zelya'],
                    ['T9', 'Centre → Station 2', 'En cours', 'text-cyan'],
                    ['T1', 'Rue A → Rue B', 'En cours', 'text-cyan'],
                    ['T12', 'Hôtel → Gare', 'Annulée', 'text-danger'],
                  ].map(([id, route, status, tone]) => (
                    <li key={id} className="flex items-center justify-between gap-2 text-[0.7rem]">
                      <span className="flex min-w-0 items-center gap-2">
                        <span className="grid size-6 shrink-0 place-items-center rounded bg-panel-soft font-mono text-[0.58rem] text-zelya">
                          {id}
                        </span>
                        <span className="truncate text-muted">{route}</span>
                      </span>
                      <span className={`shrink-0 ${tone}`}>{status}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <div className="rounded-lg border border-border bg-background/50 p-3">
                  <div className="flex items-center gap-2">
                    <Radar className="size-3.5 text-zelya" aria-hidden />
                    <p className="text-xs font-semibold">Positions live</p>
                  </div>
                  <div className="relative mt-2 h-24 overflow-hidden rounded-md border border-border/70 bg-grid">
                    <span className="absolute left-[28%] top-[34%] size-1.5 rounded-full bg-zelya pulse-dot" />
                    <span className="absolute left-[58%] top-[52%] size-1.5 rounded-full bg-cyan" />
                    <span className="absolute left-[44%] top-[72%] size-1.5 rounded-full bg-amber" />
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-background/50 p-3">
                  <p className="font-mono text-[0.58rem] uppercase tracking-wide text-muted">
                    Audit récent
                  </p>
                  <ul className="mt-2 flex flex-col gap-1.5 font-mono text-[0.6rem] text-muted">
                    <li className="flex justify-between gap-2">
                      <span className="text-zelya">AUTH_LOGIN</span>
                      <span>T1 · 08:42</span>
                    </li>
                    <li className="flex justify-between gap-2">
                      <span className="text-zelya">DRIVER_INVITED</span>
                      <span>admin · 08:31</span>
                    </li>
                    <li className="flex justify-between gap-2">
                      <span className="text-zelya">COURSE_CREATED</span>
                      <span>T4 · 08:18</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page mt-16">
        <div className="grid gap-4 md:grid-cols-3">
          {roles.map((item) => (
            <div
              key={item.role}
              className="flex flex-col gap-3 rounded-xl border border-border bg-panel/40 p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{item.role}</h3>
                <span className={`font-mono text-[0.62rem] uppercase tracking-wide ${item.tone}`}>
                  {item.scope}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
