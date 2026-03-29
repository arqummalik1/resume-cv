import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Section({ children, id, title, subtitle, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 px-6', className)}>
      <div className="max-w-5xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-white/95 mb-3">{title}</h2>
            )}
            {subtitle && (
              <p className="text-lg text-white/40">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
