import { cn } from '@/lib/utils';

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-zelya/25 bg-zelya/8 px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-zelya',
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-2xl items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
