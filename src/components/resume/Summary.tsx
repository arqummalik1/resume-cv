'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { CheckCircle2, Award, Rocket, TrendingUp } from 'lucide-react';

const iconMap = {
  'Reduced app crashes by 35%': Rocket,
  'Boosted app performance by 20%': TrendingUp,
  'Published 4 apps on Apple App Store': Award,
  '2.5+ Years of React Native Experience': Award,
};

export function Summary() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Main Summary */}
        <div className="glass rounded-3xl p-8 md:p-10 mb-8">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {profile.summary}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.highlights.map((highlight, index) => {
            const Icon = iconMap[highlight as keyof typeof iconMap] || CheckCircle2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-5 flex items-start gap-4 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">
                    {highlight}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
