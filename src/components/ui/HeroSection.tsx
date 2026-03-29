'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Sparkles, MapPin, Code2, Smartphone } from 'lucide-react';
import dynamic from 'next/dynamic';
import { profile } from '@/data/profile';

// Dynamically import LiquidGlass to avoid SSR issues
const LiquidGlass = dynamic(() => import('liquid-glass-react'), { ssr: false });

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('portfolio-preview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Deep background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]" />
      
      {/* Ambient glow - subtle */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
          transform: `translate(calc(-50% + ${mousePos.x * 20}px), calc(-50% + ${mousePos.y * 20}px))`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Floating elements - minimal */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[15%] hidden lg:block"
      >
        <Smartphone className="w-16 h-16 text-amber-500/20" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[20%] hidden lg:block"
      >
        <Code2 className="w-12 h-12 text-amber-500/20" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          {/* Availability badge - Glass style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <LiquidGlass
              displacementScale={30}
              blurAmount={0.2}
              saturation={130}
              aberrationIntensity={1}
              elasticity={0.25}
              cornerRadius={999}
              padding="10px 20px"
            >
              <div className="inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-white/80">
                  Available for Projects
                </span>
              </div>
            </LiquidGlass>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white/95 mb-6 tracking-tight"
          >
            Arqum{' '}
            <span className="gradient-amber">
              Malik
            </span>
          </motion.h1>

          {/* Title & Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-5"
          >
            <span className="text-xl md:text-2xl font-medium text-white/60">
              {profile.title}
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5 text-white/40">
              <MapPin className="w-4 h-4" />
              {profile.location}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            I Build Scalable Digital Products That{' '}
            <span className="text-amber-500 font-medium">Solve Real Problems</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base text-white/30 max-w-xl mx-auto mb-12"
          >
            4+ years experience building high-performance mobile apps used by thousands on App Store and Play Store.
          </motion.p>

          {/* Stats - Glass cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto mb-14"
          >
            {[
              { value: '4+', label: 'Years Experience' },
              { value: '6+', label: 'Apps Published' },
              { value: '35%', label: 'Crash Reduction' },
              { value: '20%', label: 'Performance Boost' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <LiquidGlass
                  displacementScale={40}
                  blurAmount={0.15}
                  saturation={140}
                  aberrationIntensity={1.5}
                  elasticity={0.2}
                  cornerRadius={16}
                  padding="16px"
                >
                  <div className="text-center cursor-default">
                    <div className="text-3xl font-bold gradient-amber mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/40 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </LiquidGlass>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button onClick={scrollToContact} className="liquid-btn liquid-btn-primary">
              Hire Me
              <ArrowRight className="w-5 h-5 ml-2 inline-block" />
            </button>
            <button onClick={scrollToProjects} className="liquid-btn liquid-btn-secondary">
              View Projects
            </button>
            <Link
              href="/api/pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-white/60 hover:text-white/90 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span className="font-medium">Resume</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-white/30"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
