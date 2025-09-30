import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Get projects using Prisma
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 20
    });
    
    return NextResponse.json({ 
      success: true, 
      projects 
    });
  } catch (error) {
    // If database is not configured, return demo data
    console.error('Database error:', error);
    
    const demoProjects = [
      {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.',
        technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
        githubUrl: '#',
        liveUrl: '#',
        featured: true,
        createdAt: new Date(),
      },
      {
        id: '2',
        title: 'Healthcare Management System',
        description: 'Comprehensive system for managing patient records, appointments, and medical history with HIPAA compliance.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
        githubUrl: '#',
        liveUrl: '#',
        featured: false,
        createdAt: new Date(),
      },
      {
        id: '3',
        title: 'AI Chatbot Platform',
        description: 'Intelligent conversational AI platform with natural language processing and multi-language support.',
        technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
        githubUrl: '#',
        liveUrl: '#',
        featured: true,
        createdAt: new Date(),
      },
    ];
    
    return NextResponse.json({ 
      success: true, 
      projects: demoProjects,
      note: 'Using demo data. Configure DATABASE_URL to use real database.'
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, technologies, image, githubUrl, liveUrl, featured = false } = body;

    // Validate required fields
    if (!title || !description || !technologies) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create project using Prisma
    const project = await prisma.project.create({
      data: {
        title,
        description,
        technologies,
        image,
        githubUrl,
        liveUrl,
        featured,
      }
    });

    return NextResponse.json({ 
      success: true, 
      project 
    });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create project. Make sure DATABASE_URL is configured.' },
      { status: 500 }
    );
  }
}
