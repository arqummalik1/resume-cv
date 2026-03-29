'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { profile } from '@/data/profile';
import { Rocket, TrendingUp, Award, Star } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'Reduced app crashes by 35%': Rocket,
  'Boosted app performance by 20%': TrendingUp,
  'Published 4 apps on Apple App Store': Award,
  '2.5+ Years of React Native Experience': Star,
};

export function Summary() {
  return (
    <section className="py-20 relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white/95 mb-3">
            Professional Summary
          </h2>
          <p className="text-white/40 text-lg">
            What I bring to the table
          </p>
        </motion.div>

        {/* Main summary card - Glass */}
        <GlassCard className="p-8 md:p-10 mb-8">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            {profile.summary}
          </p>
        </GlassCard>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.highlights.map((highlight, index) => {
            const Icon = iconMap[highlight] || Star;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-5 flex items-start gap-4">
                  {/* Icon container */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-white/90 text-lg">
                      {highlight}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
