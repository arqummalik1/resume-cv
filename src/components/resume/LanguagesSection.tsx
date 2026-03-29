import { Globe } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { languages } from '@/data/skills';

export function LanguagesSection() {
  const levelColors: Record<string, string> = {
    Native: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    Professional: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    Basic: 'bg-white/5 border-white/10 text-white/50',
  };

  return (
    <div className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <GlassCard className="p-6">
          <h3 className="font-semibold text-lg text-white/90 mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-amber-500" />
            Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-xl px-4 py-2"
              >
                <span className="font-medium text-white/90">
                  {lang.name}
                </span>
                <span className={`px-2 py-0.5 text-xs font-medium rounded-lg border ${levelColors[lang.level] || 'bg-white/5 border-white/10 text-white/50'}`}>
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
