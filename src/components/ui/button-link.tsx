import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary:
    'bg-zelya text-[#0a0a0a] hover:bg-zelya-soft shadow-[0_10px_30px_-12px_rgba(255,193,7,0.65)]',
  secondary:
    'border border-border bg-panel/70 text-foreground hover:border-zelya/50 hover:bg-panel-soft',
  ghost: 'text-muted hover:text-foreground hover:bg-panel/60',
};

const sizes: Record<Size, string> = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-[0.95rem]',
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200',
    variants[variant],
    sizes[size],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
