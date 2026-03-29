'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import type { Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const formatDate = (date: string) => {
    return new Date(date + '-01').toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <GlassCard className="p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
        {/* Company Logo */}
        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
          <span className="text-lg font-bold text-amber-500">
            {experience.company.substring(0, 2).toUpperCase()}
          </span>
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-bold text-xl text-white/95">
              {experience.title}
            </h3>
            {experience.current && (
              <span className="px-3 py-1 text-xs font-medium bg-amber-500/10 text-amber-500 rounded-full border border-amber-500/20">
                Current
              </span>
            )}
          </div>
          <p className="text-amber-500 font-medium text-lg">
            {experience.company}
          </p>
          <p className="text-sm text-white/40 mt-1">
            {formatDate(experience.startDate)} –{' '}
            {experience.current ? 'Present' : formatDate(experience.endDate!)}
            {' · '}{experience.location}
            {' · '}<span className="capitalize">{experience.type}</span>
          </p>
        </div>
      </div>

      <p className="text-white/50 mb-5 leading-relaxed">
        {experience.description}
      </p>

      {/* Achievements */}
      <ul className="space-y-2 mb-5">
        {experience.achievements.map((achievement, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex items-start gap-2 text-sm text-white/60"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
            {achievement}
          </motion.li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/8 text-white/60 rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
