'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certifications } from '@/data/education';
import { Section } from '@/components/ui';

export function CertificationsSection() {
  const formatDate = (date: string) => {
    return new Date(date + '-01').toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <Section title="Certifications" subtitle="Professional certifications and credentials">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6 h-full flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white/90 text-sm leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-white/50 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/40 mb-4">
                <Calendar className="w-3.5 h-3.5" />
                <span>Issued {formatDate(cert.date)}</span>
                {cert.expirationDate && (
                  <span>· Expires {formatDate(cert.expirationDate)}</span>
                )}
              </div>

              <div className="mt-auto">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    View Credential
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  cert.credentialId && (
                    <span className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 text-white/60 rounded-lg">
                      ID: {cert.credentialId}
                    </span>
                  )
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
