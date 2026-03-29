'use client';

import { motion } from 'framer-motion';
import { skillCategories, getSkillsByCategory } from '@/data/skills';
import { Section } from '@/components/ui';
import type { Skill } from '@/data/skills';

function getSkillColors(level: number): { dot: string; bg: string; border: string } {
  if (level >= 90) return { 
    dot: 'bg-emerald-500', 
    bg: 'bg-emerald-50 dark:bg-emerald-950/30', 
    border: 'border-emerald-200 dark:border-emerald-800/50' 
  };
  if (level >= 75) return { 
    dot: 'bg-blue-500', 
    bg: 'bg-blue-50 dark:bg-blue-950/30', 
    border: 'border-blue-200 dark:border-blue-800/50' 
  };
  if (level >= 60) return { 
    dot: 'bg-amber-500', 
    bg: 'bg-amber-50 dark:bg-amber-950/30', 
    border: 'border-amber-200 dark:border-amber-800/50' 
  };
  return { 
    dot: 'bg-gray-400', 
    bg: 'bg-gray-50 dark:bg-gray-800/30', 
    border: 'border-gray-200 dark:border-gray-700/50' 
  };
}

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Frontend: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Backend: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
    </svg>
  ),
  Databases: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  Cloud: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  DevOps: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

function SkillChip({ skill }: { skill: Skill }) {
  const colors = getSkillColors(skill.level);
  
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${colors.bg} ${colors.border} transition-all cursor-default`}
    >
      <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
        {skill.name}
      </span>
      {skill.yearsOfExperience && (
        <span className="text-xs text-gray-500 dark:text-gray-400 tabular-nums">
          {skill.yearsOfExperience}y
        </span>
      )}
    </motion.div>
  );
}

function SkillCategory({ category, index }: { category: string; index: number }) {
  const categorySkills = getSkillsByCategory(category);
  if (categorySkills.length === 0) return null;

  const sortedSkills = [...categorySkills].sort((a, b) => b.level - a.level);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-amber-500">
          {categoryIcons[category]}
        </span>
        <h3 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider">
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {sortedSkills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Expertise" subtitle="Technologies and tools I work with">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category} category={category} index={index} />
        ))}
      </div>
    </Section>
  );
}
