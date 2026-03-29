'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="group relative liquid-card"
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg) translateY(-2px) scale(1.01)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
      }}
    >
      {/* Dynamic reflection */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none z-30"
        style={{
          background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,${isHovered ? 0.3 : 0.15}) ${30 + mousePos.x * 20}%, rgba(255,255,255,${isHovered ? 0.3 : 0.15}) ${70 + mousePos.x * 20}%, transparent 100%)`,
        }}
      />

      {/* Thumbnail */}
      <div className="relative h-56 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 overflow-hidden">
        {/* Ambient glow */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isHovered 
              ? `radial-gradient(circle at ${50 + mousePos.x * 30}% ${50 + mousePos.y * 30}%, rgba(245,158,11,0.15) 0%, transparent 50%)`
              : 'none',
          }}
        />
        
        {/* Project Initial */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="text-white/10 text-7xl font-bold"
          >
            {project.title.substring(0, 2).toUpperCase()}
          </motion.span>
        </div>
        
        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
        >
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-white/10 border border-white/20 rounded-full text-white hover:bg-amber-500/30 hover:border-amber-500/40 transition-all"
              aria-label="View live site"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
              aria-label="View source code"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold bg-amber-500 text-white rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 relative z-20">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-bold text-xl text-white/90 group-hover:text-amber-500 transition-colors">
            {project.title}
          </h3>
          <span className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 text-white/60 rounded-lg">
            {project.category}
          </span>
        </div>

        <p className="text-white/50 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/8 text-white/50 rounded-lg"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* View Details */}
        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
        >
          View Details
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
