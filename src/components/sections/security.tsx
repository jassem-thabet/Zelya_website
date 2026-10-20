import { Lock, Fingerprint, Database, Server, Bell, Activity } from 'lucide-react';
import { Eyebrow } from '@/components/ui/section-heading';

const points = [
  {
    icon: Fingerprint,
    title: 'Authentification solide',
    description: 'JWT access + refresh HttpOnly, Argon2id et rotation automatique des tokens.',
  },
  {
    icon: Lock,
    title: 'Détection de vol de session',
    description: 'Un token réutilisé invalide toutes les sessions et déclenche un événement d’audit.',
  },
  {
    icon: Database,
    title: 'Isolation des données',
    description: 'Chaque groupement est un tenant cloisonné, protégé jusque dans PostgreSQL.',
  },
  {
    icon: Server,
    title: 'Architecture robuste',
    description: 'NestJS + Fastify, PostgreSQL 16 + PostGIS, Redis et files BullMQ.',
  },
  {
    icon: Bell,
    title: 'Notifications fiables',
    description: 'Emails d’invitation et de réinitialisation traités en asynchrone.',
  },
  {
    icon: Activity,
    title: 'Traçabilité complète',
    description: 'Chaque action sensible est journalisée de manière immuable.',
  },
];

export function Security() {
  return (
    <section className="border-y border-border bg-surface/50 py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Sécurité & fiabilité</Eyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
            Vos données méritent <span className="text-gradient-zelya">mieux</span> qu’un tableur.
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted">
            Zelya est conçu dès le départ comme une plateforme multi-tenant sécurisée. Les
            bonnes pratiques ne sont pas une option ajoutée après coup : elles structurent
            l’architecture.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-panel/40 p-5"
              >
                <span className="grid size-9 place-items-center rounded-lg border border-border bg-panel-soft text-zelya">
                  <Icon className="size-4.5" aria-hidden />
                </span>
                <h3 className="text-sm font-semibold">{point.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
