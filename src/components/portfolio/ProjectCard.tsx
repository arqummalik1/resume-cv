'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Layers } from 'lucide-react';
import { Badge } from '@/components/ui';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Glass Card */}
      <div className="glass rounded-3xl overflow-hidden card-hover h-full">
        {/* Thumbnail */}
        <div className="relative h-56 bg-gradient-to-br from-slate-700 via-slate-600 to-stone-700 overflow-hidden">
          {/* Ambient light effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
          
          {/* Project Initial */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className="text-white/20 text-7xl font-bold"
            >
              {project.title.substring(0, 2).toUpperCase()}
            </motion.span>
          </div>
          
          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 glass rounded-full text-white hover:bg-amber-500 hover:text-white transition-all"
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
                className="p-4 glass rounded-full text-white hover:bg-white hover:text-gray-900 transition-all"
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
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {project.title}
            </h3>
            <Badge variant="secondary" size="sm">{project.category}</Badge>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 rounded-lg">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* View Project Link */}
          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
