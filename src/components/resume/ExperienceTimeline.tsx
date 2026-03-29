'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/experience';
import { ExperienceCard } from './ExperienceCard';
import { Section } from '@/components/ui';

export function ExperienceTimeline() {
  return (
    <Section id="experience" title="Work Experience" subtitle="My professional journey">
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-[1px] hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
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
              <div className="absolute left-[18px] top-6 hidden md:block">
                <div className="w-3 h-3 rounded-full bg-white/10 border border-white/20 relative">
                  {exp.current && (
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-amber-500/50"
                    />
                  )}
                </div>
              </div>

              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
