import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { TrustStrip } from '@/components/sections/trust-strip';
import { Features } from '@/components/sections/features';
import { Platform } from '@/components/sections/platform';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Security } from '@/components/sections/security';
import { Testimonials } from '@/components/sections/testimonials';
// Tarifs désactivés pour le moment
// import { Pricing } from '@/components/sections/pricing';
import { Faq } from '@/components/sections/faq';
import { Cta } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Zelya — La plateforme des groupements de taxis',
  description:
    'Chauffeurs, courses, clients, tour de rôle et géolocalisation temps réel : pilotez votre groupement de taxis depuis un seul cockpit sécurisé et multi-tenant.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Features />
      <Platform />
      <HowItWorks />
      <Security />
      <Testimonials />
      {/* Tarifs désactivés pour le moment */}
      {/* <Pricing /> */}
      <Faq />
      <Cta />
    </>
  );
}
