import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    // Try to connect to MongoDB
    const client = await clientPromise;
    const db = client.db('it_website');
    const projects = await db.collection('projects').find({}).limit(20).toArray();
    
    return NextResponse.json({ 
      success: true, 
      projects 
    });
  } catch (error) {
    // If MongoDB is not configured, return demo data
    console.error('MongoDB error:', error);
    
    const demoProjects = [
      {
        _id: '1',
        title: 'E-Commerce Platform',
        description: 'A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.',
        technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
        link: '#',
      },
      {
        _id: '2',
        title: 'Healthcare Management System',
        description: 'Comprehensive system for managing patient records, appointments, and medical history with HIPAA compliance.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
        link: '#',
      },
      {
        _id: '3',
        title: 'AI Chatbot Platform',
        description: 'Intelligent conversational AI platform with natural language processing and multi-language support.',
        technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
        link: '#',
      },
    ];
    
    return NextResponse.json({ 
      success: true, 
      projects: demoProjects,
      note: 'Using demo data. Configure MONGODB_URI to use real database.'
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, technologies, image, link } = body;

    // Validate required fields
    if (!title || !description || !technologies) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('it_website');
    
    const result = await db.collection('projects').insertOne({
      title,
      description,
      technologies,
      image,
      link,
      createdAt: new Date(),
    });

    return NextResponse.json({ 
      success: true, 
      projectId: result.insertedId 
    });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create project. Make sure MONGODB_URI is configured.' },
      { status: 500 }
    );
  }
}
