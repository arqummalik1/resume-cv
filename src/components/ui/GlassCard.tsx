'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className = '', hoverEffect = true }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverEffect || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      className={`liquid-card ${className}`}
      style={{
        transform: hoverEffect && isHovered
          ? `perspective(1000px) rotateY(${mousePosition.x * 3}deg) rotateX(${-mousePosition.y * 3}deg) translateY(-2px) scale(1.01)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
      }}
      transition={{ duration: 0.15 }}
    >
      {/* Layer 3: Dynamic top reflection - follows mouse */}
      {hoverEffect && (
        <div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none z-10"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,${isHovered ? 0.35 : 0.2}) ${30 + mousePosition.x * 20}%, rgba(255,255,255,${isHovered ? 0.35 : 0.2}) ${70 + mousePosition.x * 20}%, transparent 100%)`,
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </motion.div>
  );
}
