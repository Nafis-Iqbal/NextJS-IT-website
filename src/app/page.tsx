'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FeatureCard from '@/components/FeatureCard';

export default function Home() {
  const features = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      icon: <span className="text-white text-2xl">🌐</span>,
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to power your business growth.',
      icon: <span className="text-white text-2xl">☁️</span>,
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive results.',
      icon: <span className="text-white text-2xl">📱</span>,
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions leveraging artificial intelligence and data analytics.',
      icon: <span className="text-white text-2xl">🤖</span>,
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      icon: <span className="text-white text-2xl">🔒</span>,
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance for seamless operations.',
      icon: <span className="text-white text-2xl">💬</span>,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            IT Solutions for Tomorrow
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Empowering businesses with cutting-edge technology and innovative solutions
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              View Our Projects
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive IT solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Get started with our builder tool today.
            </p>
            <Link
              href="/builder"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Try Our Builder
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

