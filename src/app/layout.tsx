import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header, Footer, SideNav } from '@/components/layout';
import { profile } from '@/data/profile';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${profile.name} - React Native Developer & Full-Stack Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: `Arqum Malik - Professional React Native developer specializing in mobile and web applications. Available for freelance, contract, and full-time opportunities. Based in ${profile.location}.`,
  keywords: [
    'Arqum Malik',
    'React Native developer',
    'mobile app developer',
    'full-stack developer',
    'iOS developer',
    'Android developer',
    'web developer',
    'software engineer',
    'portfolio',
    'hire developer',
    profile.location,
    'freelance developer',
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://arqummalik.in'),
  alternates: {
    canonical: 'https://arqummalik.in',
  },
  openGraph: {
    title: `${profile.name} - React Native Developer`,
    description: `Professional React Native developer available for projects. Specializing in mobile apps, web applications, and SaaS products.`,
    url: 'https://arqummalik.in',
    siteName: `${profile.name} Portfolio`,
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: 'https://arqummalik.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${profile.name} - React Native Developer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} - React Native Developer`,
    description: `Professional React Native developer available for projects. Specializing in mobile apps, web applications, and SaaS products.`,
    images: ['https://arqummalik.in/og-image.jpg'],
    creator: '@arqummalik',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Ug72u5NFy2YosP1Kf3bt8K97bylrksW9d8SIhQOZihs',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://arqummalik.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": profile.name,
              "jobTitle": profile.title,
              "description": profile.summary,
              "url": "https://arqummalik.in",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": profile.location,
              },
              "knowsAbout": [
                "React Native",
                "Mobile Development",
                "Web Development",
                "Full-Stack Development",
                "iOS Development",
                "Android Development",
                "JavaScript",
                "TypeScript",
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "React Native Developer",
                "occupationLocation": profile.location,
              },
              "sameAs": [
                profile.linkedin,
                profile.github,
              ].filter(Boolean),
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased`}>
        <Header />
        <SideNav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
