'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { skillCategories, getSkillsByCategory } from '@/data/skills';
import { Section } from '@/components/ui';
import type { Skill } from '@/data/skills';

function getSkillColors(level: number): string {
  if (level >= 90) return 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400';
  if (level >= 75) return 'bg-blue-500/20 border-blue-500/30 text-blue-400';
  if (level >= 60) return 'bg-amber-500/20 border-amber-500/30 text-amber-400';
  return 'bg-white/5 border-white/10 text-white/50';
}

function SkillChip({ skill }: { skill: Skill }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border transition-all cursor-default ${getSkillColors(skill.level)}`}
    >
      <span className="text-sm font-medium">
        {skill.name}
      </span>
      {skill.yearsOfExperience && (
        <span className="text-xs opacity-60">
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
    >
      <GlassCard className="p-6">
        <h3 className="font-semibold text-white/80 text-sm uppercase tracking-wider mb-4">
          {category}
        </h3>
        <div className="flex flex-wrap gap-2">
          {sortedSkills.map((skill) => (
            <SkillChip key={skill.name} skill={skill} />
          ))}
        </div>
      </GlassCard>
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
