import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from '@/components/brand/logo';

const columns = [
  {
    title: 'Produit',
    links: [
      { href: '/#fonctionnalites', label: 'Fonctionnalités' },
      { href: '/#plateforme', label: 'Plateforme' },
      // Lien Tarifs désactivé pour le moment
      // { href: '/#tarifs', label: 'Tarifs' },
      { href: '/#faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { href: '/contact', label: 'Contact' },
      { href: '/contact', label: 'Demander une démo' },
      { href: '/#acces', label: 'Accès plateforme' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { href: '/mentions-legales', label: 'Mentions légales' },
      { href: '/confidentialite', label: 'Confidentialité' },
      { href: '/conditions', label: 'Conditions d’utilisation' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              La plateforme SaaS qui digitalise la gestion des groupements de taxis : chauffeurs,
              courses, clients et opérations, dans un seul cockpit.
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-muted">
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-zelya" aria-hidden />
                <a className="transition-colors hover:text-foreground" href="mailto:contact@zelya.com">
                  contact@zelya.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-zelya" aria-hidden />
                <a className="transition-colors hover:text-foreground" href="tel:+33100000000">
                  +33 1 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-zelya" aria-hidden />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-3">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-foreground/80">
                  {column.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-zelya"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © 2026 Zelya. Tous droits réservés.
          </p>
          <p className="font-mono text-xs text-muted">
            Conçu pour les groupements de taxis · <span className="text-zelya">v0.1</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
