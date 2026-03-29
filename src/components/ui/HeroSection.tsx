'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Sparkles, MapPin, Code2, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui';
import { profile } from '@/data/profile';

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('portfolio-preview')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-stone-500/5 rounded-full blur-[100px]" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[10%] hidden lg:block opacity-20"
      >
        <Smartphone className="w-16 h-16 text-amber-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-48 right-[15%] hidden lg:block opacity-20"
      >
        <Code2 className="w-12 h-12 text-amber-500" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Available for Projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            {profile.name.split(' ')[0]}{' '}
            <span className="gradient-text-amber">
              {profile.name.split(' ')[1]}
            </span>
          </motion.h1>

          {/* Title & Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-4"
          >
            <span className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
              {profile.title}
            </span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
              <MapPin className="w-4 h-4" />
              {profile.location}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I Build Scalable Digital Products That{' '}
            <span className="font-semibold text-amber-600 dark:text-amber-500">Solve Real Problems</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12"
          >
            {[
              { value: '2.5+', label: 'Years Exp.' },
              { value: '6+', label: 'Apps Published' },
              { value: '35%', label: 'Crashes Reduced' },
              { value: '20%', label: 'Perf. Boost' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass rounded-2xl p-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text-amber">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              onClick={scrollToContact}
              className="px-8 py-4 text-lg font-semibold rounded-2xl press-effect glow-amber"
            >
              Hire Me
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={scrollToProjects}
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-2xl glass-button press-effect"
            >
              View Projects
            </Button>
            <Link
              href="/api/pdf"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors rounded-2xl"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-gray-400"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
