import Image from 'next/image';
import { Car } from 'lucide-react';

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      <div
        className="pointer-events-none absolute -inset-10 rounded-full bg-zelya/12 blur-[80px]"
        aria-hidden
      />

      <div
        className="float-slower absolute -left-14 top-24 z-20 hidden rounded-xl border border-border bg-panel/90 p-3 shadow-2xl backdrop-blur md:block"
        aria-hidden
      >
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-zelya/12 text-zelya">
            <Car className="size-4" />
          </span>
          <div>
            <p className="text-xs font-semibold">Application chauffeur</p>
            <p className="font-mono text-[0.65rem] text-muted">iOS & Android</p>
          </div>
        </div>
      </div>

      <div
        className="float-slow absolute -right-12 bottom-24 z-20 hidden rounded-xl border border-border bg-panel/90 p-3 shadow-2xl backdrop-blur md:block"
        aria-hidden
      >
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-zelya pulse-dot" />
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
            Statut
          </p>
        </div>
        <p className="mt-1 text-sm font-semibold">
          <span className="text-zelya">T7</span> · libre
        </p>
      </div>

      <div className="relative rounded-[2.9rem] border border-white/10 bg-[#0b0b0b] p-2.5 shadow-[0_50px_120px_-35px_rgba(0,0,0,0.95)]">
        <div className="pointer-events-none absolute -inset-px rounded-[2.9rem] ring-1 ring-white/5" aria-hidden />
        <div className="relative overflow-hidden rounded-[2.35rem] bg-black">
          <div className="relative aspect-[720/1468]">
            <Image
              src="/app/zelya-mobile.jpeg"
              alt="Application mobile Zelya — écran d’accueil du chauffeur"
              fill
              priority
              sizes="(max-width: 640px) 280px, 320px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
