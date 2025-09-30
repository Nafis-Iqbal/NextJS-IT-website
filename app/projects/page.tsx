'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { useEffect, useState } from 'react';

interface Project {
  _id?: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects from API
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        // Fallback to demo data
        setProjects(demoProjects);
        setLoading(false);
      });
  }, []);

  // Demo projects as fallback
  const demoProjects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive system for managing patient records, appointments, and medical history with HIPAA compliance.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      link: '#',
    },
    {
      title: 'AI Chatbot Platform',
      description: 'Intelligent conversational AI platform with natural language processing and multi-language support.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
      link: '#',
    },
    {
      title: 'Real Estate Portal',
      description: 'Modern property listing platform with virtual tours, mortgage calculators, and agent management.',
      technologies: ['Next.js', 'GraphQL', 'MongoDB', 'AWS'],
      link: '#',
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative project management suite with task tracking, time management, and team communication.',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
      link: '#',
    },
    {
      title: 'Financial Analytics Dashboard',
      description: 'Real-time financial data visualization and analytics platform for investment management.',
      technologies: ['React', 'D3.js', 'Node.js', 'TimescaleDB'],
      link: '#',
    },
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects delivering innovative solutions across various industries
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project._id || `project-${index}`}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
