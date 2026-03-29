'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/experience';
import { ExperienceCard } from './ExperienceCard';
import { Section } from '@/components/ui';

export function ExperienceTimeline() {
  return (
    <Section id="experience" title="Work Experience" subtitle="My professional journey">
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line with glow */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative md:pl-16"
            >
              {/* Glass Timeline Node */}
              <div className="absolute left-3 top-6 w-7 h-7 hidden md:block">
                <div className="absolute inset-0 glass rounded-full" />
                <div className="absolute inset-2 bg-amber-500 rounded-full" />
                {exp.current && (
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-amber-500 rounded-full opacity-50"
                  />
                )}
              </div>

              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
