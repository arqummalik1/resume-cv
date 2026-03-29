'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import { education } from '@/data/education';
import { Section } from '@/components/ui';

export function EducationSection() {
  return (
    <Section id="education" title="Education" subtitle="Academic background and qualifications">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white/90">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-amber-500 font-medium">
                    {edu.school}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-white/40 mt-1">
                    <MapPin className="w-4 h-4" />
                    {edu.location} · {edu.startYear} - {edu.endYear}
                  </div>
                  {edu.gpa && (
                    <p className="text-sm text-white/50 mt-2">
                      GPA: {edu.gpa}
                    </p>
                  )}
                  {edu.honors && edu.honors.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.honors.map((honor) => (
                        <span 
                          key={honor} 
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg"
                        >
                          <Award className="w-3 h-3" />
                          {honor}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
