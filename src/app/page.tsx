import { HeroSection, OpenToWorkSection, Section } from '@/components/ui';
import {
  Summary,
  ExperienceTimeline,
  SkillsSection,
  EducationSection,
  LanguagesSection,
} from '@/components/resume';
import { ContactSection } from '@/components/contact';
import { ProjectGrid } from '@/components/portfolio';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#020617]">
      {/* Hero Section */}
      <HeroSection />

      {/* Summary Section */}
      <Summary />

      {/* Experience Section */}
      <ExperienceTimeline />

      {/* Skills Section */}
      <SkillsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Languages Section */}
      <LanguagesSection />

      {/* Featured Projects */}
      <Section 
        id="portfolio-preview" 
        title="Featured Projects" 
        subtitle="A selection of my recent work"
      >
        <ProjectGrid featuredOnly limit={3} showFilters={false} />
        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Open to Work */}
      <OpenToWorkSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
