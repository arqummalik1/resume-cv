'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { profile } from '@/data/profile';
import { Section } from '@/components/ui';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';

export function ContactSection() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: 'Location', value: profile.location },
    { icon: Calendar, label: 'Availability', value: 'Open to opportunities' },
  ];

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's discuss your next project">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-3xl p-6 md:p-8 h-full">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="font-semibold text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-900 dark:text-white">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Connect with me
              </p>
              <SocialLinks size="md" />
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="glass rounded-3xl p-6 md:p-8">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
