import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '@/components/ui/section-heading';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez l’équipe Zelya pour une démo ou une question sur la plateforme de gestion de groupements de taxis.',
};

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@zelya.com',
    href: 'mailto:contact@zelya.com',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+33 1 00 00 00 00',
    href: 'tel:+33100000000',
  },
  { icon: MapPin, label: 'Adresse', value: 'Paris, France' },
  { icon: Clock, label: 'Disponibilité', value: 'Lun – Ven · 9h – 18h' },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-14rem] h-[26rem] w-[44rem] -translate-x-1/2 rounded-full bg-zelya/10 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[20rem] w-[20rem] rounded-full bg-amber/6 blur-[100px]"
        aria-hidden
      />

      <div className="container-page relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Parlons de <span className="text-gradient-zelya">votre groupement</span>
          </h1>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted">
            Une démo, une question sur les fonctionnalités ou un projet de déploiement ? Écrivez-nous
            ou appelez-nous : nous revenons vers vous rapidement.
          </p>

          <a
            href="mailto:contact@zelya.com"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-zelya px-6 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-zelya-soft"
          >
            Écrire à Zelya
            <ArrowUpRight className="size-4" aria-hidden />
          </a>

          <div className="mt-10 rounded-xl border border-border bg-panel/40 p-4 text-sm leading-relaxed text-muted">
            <p className="font-semibold text-foreground">Vous êtes déjà client ?</p>
            <p className="mt-1">
              Utilisez l’adresse fournie lors de la création de votre groupement pour accéder au
              support prioritaire.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-panel/50 p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Coordonnées</h2>
          <p className="mt-1 text-sm text-muted">
            Le meilleur moyen de nous joindre, sans détour.
          </p>

          <ul className="mt-8 flex flex-col divide-y divide-border">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <li key={channel.label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-panel-soft text-zelya">
                    <Icon className="size-4.5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-muted">{channel.label}</p>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="break-words text-sm font-medium transition-colors hover:text-zelya"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{channel.value}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 rounded-lg border border-zelya/20 bg-zelya/6 p-4 text-xs leading-relaxed text-muted">
            Réponse sous 24 h ouvrées. Pour une démo, précisez le nombre de chauffeurs et le nom de
            votre groupement.
          </div>
        </div>
      </div>
    </section>
  );
}
