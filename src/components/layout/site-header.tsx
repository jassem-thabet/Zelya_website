'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/brand/logo';
import { cn } from '@/lib/utils';

const navigation = [
  { href: '/#fonctionnalites', label: 'Fonctionnalités' },
  { href: '/#plateforme', label: 'Plateforme' },
  // Lien Tarifs désactivé pour le moment
  // { href: '/#tarifs', label: 'Tarifs' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled ? 'glass border-border/80' : 'border-transparent bg-transparent',
      )}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Logo priority />

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-panel/70 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Demander une démo
          </Link>
          <Link
            href="/#acces"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-zelya px-4 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-zelya-soft"
          >
            Accéder à la plateforme
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-panel/60 text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background/98 backdrop-blur-lg lg:hidden"
      >
        <nav aria-label="Navigation mobile" className="container-page flex flex-col gap-1 py-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-panel hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#acces"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-zelya px-4 text-sm font-semibold text-[#0a0a0a]"
          >
            Accéder à la plateforme
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </nav>
      </div>
    </header>
  );
}
