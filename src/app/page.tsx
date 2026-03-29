import { Container, HeroSection, Section, OpenToWorkSection } from '@/components/ui';
import {
  Summary,
  ExperienceTimeline,
  SkillsSection,
  EducationSection,
  CertificationsSection,
  LanguagesSection,
} from '@/components/resume';
import { ContactSection } from '@/components/contact';
import { ProjectGrid } from '@/components/portfolio';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <Container size="lg" className="py-0">
      {/* Hero Section */}
      <HeroSection />

      {/* Summary Section */}
      <section id="about" className="py-16">
        <Summary />
      </section>

      {/* Experience Section */}
      <ExperienceTimeline />

      {/* Skills Section */}
      <SkillsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Languages Section */}
      <LanguagesSection />

      {/* Featured Projects */}
      <Section 
        id="portfolio-preview" 
        title="Featured Projects" 
        subtitle="A selection of my recent work"
      >
        <ProjectGrid featuredOnly limit={3} showFilters={false} />
        <div className="text-center mt-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors"
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
    </Container>
  );
}
