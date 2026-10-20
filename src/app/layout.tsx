import type { Metadata, Viewport } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://zelya.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Zelya — La plateforme des groupements de taxis',
    template: '%s · Zelya',
  },
  description:
    'Zelya digitalise la gestion de votre groupement de taxis : chauffeurs, courses, clients, tour de rôle et géolocalisation temps réel. Une plateforme multi-tenant, sécurisée et pensée pour le terrain.',
  keywords: [
    'taxi',
    'groupement de taxis',
    'logiciel taxi',
    'gestion flotte taxi',
    'backoffice taxi',
    'dispatching taxi',
    'tour de rôle taxi',
    'Zelya',
  ],
  authors: [{ name: 'Zelya' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Zelya',
    title: 'Zelya — La plateforme des groupements de taxis',
    description:
      'Chauffeurs, courses, clients, tour de rôle et géolocalisation temps réel : pilotez votre groupement de taxis depuis un seul cockpit.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zelya — La plateforme des groupements de taxis',
    description:
      'Chauffeurs, courses, clients, tour de rôle et géolocalisation temps réel : pilotez votre groupement de taxis depuis un seul cockpit.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#070604',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-zelya focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0a0a0a]"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
