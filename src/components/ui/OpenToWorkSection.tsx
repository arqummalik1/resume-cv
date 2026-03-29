'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Smartphone, 
  Globe, 
  LayoutDashboard, 
  Code2, 
  Zap, 
  Package, 
  CheckCircle2,
  ArrowRight,
  Mail,
  Sparkles
} from 'lucide-react';
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

const highlights = [
  {
    icon: Package,
    title: 'End-to-End Product Development',
    description: 'Idea → Design → Development → Deployment',
  },
  {
    icon: CheckCircle2,
    title: 'Clean, Scalable Code',
    description: 'Production-ready & maintainable',
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Fast, efficient applications',
  },
  {
    icon: Code2,
    title: 'Cross-Platform Expertise',
    description: 'iOS, Android, Web',
  },
];

export function OpenToWorkSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="work" className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-amber-500/10 to-stone-600/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-stone-300/20 to-transparent rounded-full blur-3xl" />
      </div>

      <Container size="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Open to Work & Available for Projects
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            I Build Scalable Digital Products That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-stone-700 dark:from-amber-400 dark:to-stone-400">
              Solve Real Problems
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a professional React Native developer with experience building high-performance applications. 
            I&apos;m open to freelance, contract, and full-time opportunities—and I can build complete end-to-end 
            digital solutions from idea to production.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
            Trusted to build real-world apps used by thousands on App Store and Play Store.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-stone-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 group-hover:border-amber-500/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-4 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-xl border border-gray-200/30 dark:border-gray-700/30"
            >
              <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-stone-600 dark:text-stone-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
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
          <Link
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-amber-600 dark:hover:bg-amber-500 transition-all duration-300 hover:scale-105"
          >
            Hire Me
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm text-gray-900 dark:text-white rounded-full font-semibold border border-gray-300 dark:border-gray-700 hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-300"
          >
            Start a Project
          </Link>
          <Link
            href="mailto:hello@developer.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-700 dark:text-gray-300 font-medium hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Let&apos;s Build Something Amazing
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}