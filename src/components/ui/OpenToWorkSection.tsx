'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Smartphone, Globe, LayoutDashboard, Code2, ArrowRight, Mail, Sparkles } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Container, Section } from '@/components/ui';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'React Native – Android & iOS',
  },
  {
    icon: Globe,
    title: 'Web App Development',
    description: 'React, Next.js, SaaS platforms',
  },
  {
    icon: LayoutDashboard,
    title: 'Website Development',
    description: 'Modern, responsive, high-converting',
  },
  {
    icon: Code2,
    title: 'SaaS Product Development',
    description: 'Full-stack scalable tools & dashboards',
  },
];

export function OpenToWorkSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="work" className="relative overflow-hidden py-24">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-500/5 blur-[120px]" />
      </div>

      <Container size="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/80 mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            Open to Work & Available for Projects
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/95 mb-6">
            I Build Scalable Digital Products That{' '}
            <span className="gradient-amber">Solve Real Problems</span>
          </h2>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a professional React Native developer with experience building high-performance applications. 
            I&apos;m open to freelance, contract, and full-time opportunities—and I can build complete end-to-end 
            digital solutions from idea to production.
          </p>

          <p className="text-sm text-white/30 mt-4">
            Trusted to build real-world apps used by thousands on App Store and Play Store.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="font-semibold text-white/90 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/40">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={scrollToContact} className="liquid-btn liquid-btn-primary">
            Hire Me
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button onClick={scrollToContact} className="liquid-btn liquid-btn-secondary">
            Start a Project
          </button>
          <Link
            href="mailto:arqummalik1@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-white/50 hover:text-white/80 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Let&apos;s Build Something Amazing</span>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
