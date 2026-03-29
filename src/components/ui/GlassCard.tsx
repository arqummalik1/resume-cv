'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import LiquidGlass to avoid SSR issues
const LiquidGlass = dynamic(() => import('liquid-glass-react'), { ssr: false });

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className = '', hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, y: -4 } : {}}
      whileTap={hoverEffect ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
      className={className}
    >
      <LiquidGlass
        displacementScale={64}
        blurAmount={0.1}
        saturation={130}
        aberrationIntensity={2}
        elasticity={0.35}
        cornerRadius={20}
        padding="24px"
      >
        {children}
      </LiquidGlass>
    </motion.div>
  );
}
