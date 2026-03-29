/**
 * =============================================================================
 * PROJECTS DATA - Portfolio Projects
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains portfolio projects displayed in the Portfolio section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example projects with your actual projects
 * 2. Mark your best projects as featured (featured: true)
 * 3. Include project images if available
 * 4. Add live demo and GitHub links where applicable
 *
 * TO ADD A NEW PROJECT:
 * Copy an existing entry and modify all fields. Make sure to:
 * - Use a unique ID (e.g., 'proj-6', 'proj-7')
 * - Create a URL-friendly slug (lowercase, hyphens, no spaces)
 * - Add at least a thumbnail image
 *
 * PROJECT CATEGORIES:
 * Choose from existing categories or add new ones to projectCategories array.
 *
 * IMAGES:
 * - Store images in /public/projects/
 * - Use paths like '/projects/project-name.jpg'
 * - Recommended size: 1200x630 for thumbnails
 * =============================================================================
 */

/**
 * Project entry type definition
 */
export interface Project {
  /** Unique identifier (e.g., 'proj-1', 'proj-2') */
  id: string;

  /**
   * URL-friendly slug for the project page
   * Format: lowercase, hyphens instead of spaces
   * Example: 'my-awesome-project'
   */
  slug: string;

  /** Project title */
  title: string;

  /**
   * Short description (1-2 sentences)
   * Displayed in project cards
   */
  description: string;

  /**
   * Detailed description (optional)
   * Displayed on the project detail page
   */
  longDescription?: string;

  /**
   * Thumbnail image path
   * - Use '/projects/thumb.jpg' for local image
   * - Use full URL for external image
   */
  thumbnail: string;

  /**
   * Additional project images (optional)
   * For project detail page gallery
   */
  images: string[];

  /**
   * Technologies used in the project
   * List frameworks, languages, and tools
   */
  technologies: string[];

  /**
   * Project category
   * Must match one from projectCategories array
   */
  category: string;

  /**
   * Your role in the project
   * Examples: "Lead Developer", "Frontend Developer", "Solo Project"
   */
  role: string;

  /**
   * Project duration
   * Examples: "3 months", "6 weeks", "Ongoing"
   */
  duration: string;

  /**
   * Live project URL (optional)
   * Link to deployed project
   */
  liveUrl?: string;

  /**
   * GitHub repository URL (optional)
   * Link to source code
   */
  githubUrl?: string;

  /**
   * Is this a featured project?
   * Featured projects are highlighted on the homepage
   */
  featured: boolean;

  /**
   * Key highlights/achievements
   * Use metrics when possible (numbers, percentages)
   */
  highlights: string[];
}

/**
 * =============================================================================
 * PROJECT CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Categories for filtering projects.
 * 'All' is required and should always be first.
 */
export const projectCategories: string[] = [
  'All',
  'Mobile App',
  'Web Application',
  'Personal Project',
];

/**
 * =============================================================================
 * YOUR PROJECTS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example projects with your actual projects.
 * Mark your best 3-4 projects as featured.
 */
export const projects: Project[] = [
  // ---------------------------------------------------------------------------
  // FEATURED PROJECT - Hire Tech Talent App
  // ---------------------------------------------------------------------------
  {
    id: 'proj-1',
    slug: 'hire-tech-talent-app',
    title: 'Hire Tech Talent App',
    description:
      'Cross-platform mobile app for tech talent hiring with QR Code Scanner, Firebase push notifications, and real-time features.',
    longDescription: `Designed, developed, and published the Hire Tech Talent app for Android & iOS using React Native. 
    Implemented Redux state management, QR Code Scanner, and Firebase push notifications. Features include Swipe to Check-in, 
    Bookmarking, and Notes. Reduced app crashes by 35% by fixing API-related issues.`,
    thumbnail: '/projects/hire-tech-talent.jpg',
    images: [],
    technologies: ['React Native', 'Redux', 'Firebase', 'QR Code Scanner', 'REST APIs'],
    category: 'Mobile App',
    role: 'Lead Developer',
    duration: '1.5 years',
    liveUrl: 'https://apps.apple.com/in/app/hire-tech-talent/id6450185479',
    featured: true,
    highlights: [
      'Published on Apple App Store',
      'Reduced app crashes by 35%',
      'QR Code Scanner integration',
      'Firebase push notifications',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT - Food Delivery App
  // ---------------------------------------------------------------------------
  {
    id: 'proj-2',
    slug: 'food-delivery-app',
    title: 'Food Delivery App',
    description:
      'Complete UI implementation for a food delivery application with dynamic rendering and local JSON data.',
    longDescription: `Developed complete UI for a food delivery application. Implemented dynamic rendering using local JSON data.
    Features include Welcome Screen, Sign In/Sign Up, Bottom Navigation, and Side Drawer. Built responsive UI components
    optimized for both Android and iOS platforms.`,
    thumbnail: '/projects/food-delivery.jpg',
    images: [],
    technologies: ['React Native', 'JavaScript', 'CSS', 'JSON'],
    category: 'Mobile App',
    role: 'Developer',
    duration: '3 months',
    featured: true,
    highlights: [
      'Complete UI implementation',
      'Welcome Screen with animations',
      'Sign In/Sign Up flow',
      'Bottom navigation and side drawer',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT - Fantasy Match Scheduler
  // ---------------------------------------------------------------------------
  {
    id: 'proj-3',
    slug: 'fantasy-match-scheduler',
    title: 'Fantasy Match Scheduler App',
    description:
      'User-friendly interface for scheduling fantasy matches with date selection, time slot management, and local storage.',
    thumbnail: '/projects/fantasy-scheduler.jpg',
    images: [],
    technologies: ['React Native', 'JavaScript', 'Local Storage'],
    category: 'Mobile App',
    role: 'Developer',
    duration: '2 months',
    githubUrl: 'https://github.com/arqummalik1/Fantasy-Match-Scheduler',
    featured: true,
    highlights: [
      'Date and weekly selection',
      'Time slot management (add/edit/delete)',
      'Local storage for persistent data',
      'GitHub repository available',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT - WP Event Manager App
  // ---------------------------------------------------------------------------
  {
    id: 'proj-4',
    slug: 'wp-event-manager-app',
    title: 'WP Event Manager App',
    description:
      'Enhanced and maintained the WP Event Manager app with Donut Charts for ticket sales insights and secure app-locking system.',
    thumbnail: '/projects/wp-event-manager.jpg',
    images: [],
    technologies: ['React Native', 'Redux', 'Firebase', 'REST APIs'],
    category: 'Mobile App',
    role: 'React Native Developer',
    duration: '1.5 years',
    liveUrl: 'https://apps.apple.com/in/app/wp-event-manager/id1554422731',
    featured: false,
    highlights: [
      'Donut Charts for ticket sales insights',
      'Secure app-locking system for license validation',
      'Continuous improvements and maintenance',
      'Published on Apple App Store',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT - Faveo Helpdesk App
  // ---------------------------------------------------------------------------
  {
    id: 'proj-5',
    slug: 'faveo-helpdesk-app',
    title: 'Faveo Helpdesk App',
    description:
      'Developed and maintained the Faveo Helpdesk app with multi-language support, white-labeling, and improved scalability.',
    thumbnail: '/projects/faveo-helpdesk.jpg',
    images: [],
    technologies: ['React Native', 'REST APIs', 'Multi-language Support'],
    category: 'Mobile App',
    role: 'Associate Software Engineer',
    duration: '1 year',
    liveUrl: 'https://apps.apple.com/in/app/faveo-helpdesk/id1488072909',
    featured: false,
    highlights: [
      'Multi-language support',
      'White-labeling features',
      'Improved scalability',
      'Published on Apple App Store',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT - Faveo Support App
  // ---------------------------------------------------------------------------
  {
    id: 'proj-6',
    slug: 'faveo-support-app',
    title: 'Faveo Support App',
    description:
      'Redesigned the Faveo Support app to improve scalability and boosted app performance by 20%.',
    thumbnail: '/projects/faveo-support.jpg',
    images: [],
    technologies: ['React Native', 'REST APIs'],
    category: 'Mobile App',
    role: 'Associate Software Engineer',
    duration: '1 year',
    liveUrl: 'https://apps.apple.com/in/app/faveo-support/id1490237489',
    featured: false,
    highlights: [
      'App redesign for improved scalability',
      'Boosted performance by 20%',
      'Critical bug fixes',
      'Published on Apple App Store',
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}

/**
 * Get all unique technologies used across projects
 */
export function getAllProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Get project count by category
 */
export function getProjectCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };

  projectCategories.slice(1).forEach((category) => {
    counts[category] = projects.filter((p) => p.category === category).length;
  });

  return counts;
}

/**
 * Search projects by title, description, or technology
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowerQuery)
      )
  );
}

/**
 * Get related projects (same category, excluding current)
 */
export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
