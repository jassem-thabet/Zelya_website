import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({
  className,
  href = '/',
  priority = false,
}: {
  className?: string;
  href?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label="Zelya — Accueil"
      className={cn('inline-flex shrink-0 items-center gap-2.5', className)}
    >
      <Image
        src="/brand/zelya-z.png"
        alt=""
        width={600}
        height={520}
        priority={priority}
        className="size-10 rounded-lg object-cover"
      />
      <span className="text-xl font-semibold tracking-tight text-white">
        Zel<span className="text-zelya">ya</span>
      </span>
    </Link>
  );
}
